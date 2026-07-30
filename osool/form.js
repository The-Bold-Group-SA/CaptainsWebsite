const SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyTuUZo0m9_w40oQPmJkapcM8Scob4HH3GeJcwV18q_hjBS0qWTQxaOOb6s2sePK8GBYg/exec";
const MAX_FILE_MB = 8;

function toggle(selectId, fieldId){
  const select = document.getElementById(selectId);
  const field = document.getElementById(fieldId);
  const update = () => field.classList.toggle('hidden', select.value !== 'نعم');
  select.addEventListener('change', update);
  update();
}

function showMessage(type, text){
  const message = document.getElementById('formMessage');
  message.className = `message ${type}`;
  message.textContent = text;
}

toggle('hasCar','plateField');
toggle('hasCar','carTypeField');
toggle('isHead','teamCountField');

const hasCar = document.getElementById('hasCar');
const isHead = document.getElementById('isHead');
const plateInput = document.querySelector('input[name="plate_number"]');
const carTypeInput = document.querySelector('input[name="car_type"]');
const teamCountInput = document.querySelector('input[name="team_count"]');

function updateRequired(){
  const carRequired = hasCar.value === 'نعم';
  plateInput.required = carRequired;
  carTypeInput.required = carRequired;
  teamCountInput.required = isHead.value === 'نعم';
}

function readFileAsBase64(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      resolve(result.slice(result.indexOf(',') + 1));
    };
    reader.onerror = () => reject(new Error('تعذر قراءة الملف المرفق. جرّب ملفاً آخر.'));
    reader.readAsDataURL(file);
  });
}

async function collectData(form){
  const checkedDays = [...document.querySelectorAll('input[name="days"]:checked')].map(x => x.value);
  if (!checkedDays.length){
    throw new Error('يرجى اختيار يوم مشاركة واحد على الأقل.');
  }

  const fd = new FormData(form);
  const data = {};
  for (const [key,value] of fd.entries()){
    if (key !== 'document_file' && key !== 'days' && !key.startsWith('consent_')) data[key] = value;
  }

  data.days = checkedDays.join('، ');

  const file = fd.get('document_file');
  data.document_file = '';
  if (file && file.size){
    if (file.size > MAX_FILE_MB * 1024 * 1024){
      throw new Error(`حجم المرفق ${(file.size/1048576).toFixed(1)} ميجابايت، والحد الأقصى ${MAX_FILE_MB} ميجابايت. يرجى ضغط الصورة أو اختيار صورة أصغر.`);
    }
    data.document_file = file.name;
    data.document_file_name = file.name;
    data.document_file_type = file.type || 'application/octet-stream';
    data.document_file_data = await readFileAsBase64(file);
  }

  data.consent_accuracy = 'موافق';
  data.consent_confidentiality = 'موافق';
  data.consent_no_photography = 'موافق';
  data.submitted_at = new Date().toISOString();
  data.source = 'Captains National Day Crew Form';
  return data;
}

function downloadCsv(data){
  const headers = Object.keys(data);
  const values = headers.map(h => `"${String(data[h]).replace(/"/g,'""')}"`);
  const csv = '\uFEFF' + headers.join(',') + '\n' + values.join(',');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = (data.full_name || 'crew-member').replace(/[\\/:*?"<>|]/g,'-');
  a.href = url;
  a.download = `CAPTAINS-NATIONAL-DAY-${safeName}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

async function sendToSheet(data){
  let response;
  try{
    response = await fetch(SHEET_WEB_APP_URL, {
      method: 'POST',
      headers: {'Content-Type':'text/plain;charset=utf-8'},
      body: JSON.stringify(data)
    });
  } catch(err){
    throw new Error('تعذر الاتصال بالخادم. تحقق من الاتصال بالإنترنت وحاول مرة أخرى.');
  }

  const raw = await response.text();
  let result;
  try{
    result = JSON.parse(raw);
  } catch(err){
    // An HTML page here means the Apps Script itself failed or is not deployed correctly.
    throw new Error('لم يتم حفظ البيانات. يرجى إبلاغ مسؤول النموذج (خطأ في السكربت).');
  }

  if (!result.ok){
    throw new Error('لم يتم حفظ البيانات: ' + (result.error || 'خطأ غير معروف.'));
  }
  return result;
}

const heroSection = document.querySelector('.hero');
const crewForm = document.getElementById('crewForm');
const thankYou = document.getElementById('thankYou');

function showThanks(){
  showMessage('', '');
  heroSection.classList.add('hidden');
  crewForm.classList.add('hidden');
  thankYou.classList.add('show');
  window.scrollTo({top:0, behavior:'smooth'});
  thankYou.focus();
}

function showForm(){
  thankYou.classList.remove('show');
  heroSection.classList.remove('hidden');
  crewForm.classList.remove('hidden');
  window.scrollTo({top:0, behavior:'smooth'});
}

document.getElementById('newEntryButton').addEventListener('click', showForm);

hasCar.addEventListener('change', updateRequired);
isHead.addEventListener('change', updateRequired);
updateRequired();

document.getElementById('crewForm').addEventListener('reset', function(){
  setTimeout(() => {
    updateRequired();
    document.getElementById('formMessage').className = 'message';
  });
});

document.getElementById('crewForm').addEventListener('submit', async function(e){
  e.preventDefault();
  const button = document.getElementById('submitButton');

  try{
    button.disabled = true;
    button.textContent = 'جار التحضير...';
    const data = await collectData(this);
    button.textContent = data.document_file_data ? 'جار رفع المرفق...' : 'جار الإرسال...';

    if (SHEET_WEB_APP_URL){
      await sendToSheet(data);
      this.reset();
      updateRequired();
      showThanks();
    } else {
      downloadCsv(data);
      showMessage('ok', 'لم يتم وضع رابط الشيت بعد، لذلك تم حفظ البيانات كملف CSV على جهازك.');
    }
  } catch(error){
    showMessage('error', error.message || 'تعذر إرسال البيانات. يرجى المحاولة مرة أخرى.');
  } finally {
    button.disabled = false;
    button.textContent = 'إرسال البيانات';
  }
});

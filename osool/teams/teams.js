// Osool National Day — فريق أصول / فريق بولد registration.
//
// This file exists as an external script (rather than inline) because the
// /osool/* CSP in _headers is script-src 'self' with no 'unsafe-inline'.
//
// This form's own Apps Script web app, bound to its own spreadsheet — separate
// from the crew form's endpoint and sheet. The destination tab ("Guests") is
// chosen by that script, not by this page. The keys sent below must stay in
// step with its `columns` list; see docs/osool-teams-apps-script.md.
const SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx8eTafPdFh1fTrOOGrzhMSMQ3nuTyQLNtNlle3zVIIlMnr2WwOCaUxVp-KmttPzW1M/exec";

const form = document.getElementById('teamsForm');
const formView = document.getElementById('formView');
const thankYou = document.getElementById('thankYou');
const submitButton = document.getElementById('submitButton');
const messageBox = document.getElementById('formMessage');

const pickupField = document.getElementById('pickupLocationField');
const plateField = document.getElementById('plateField');
const carTypeField = document.getElementById('carTypeField');
const pickupInput = document.getElementById('pickupLocation');
const plateInput = document.getElementById('plateNumber');
const carTypeInput = document.getElementById('carType');

function showMessage(type, text){
  messageBox.className = type ? `message ${type}` : 'message';
  messageBox.textContent = text;
}

// Arrival branches. A hidden field must never stay `required`, or the form
// silently refuses to submit with no visible invalid control to focus.
function updateArrival(){
  const selected = form.querySelector('input[name="arrival"]:checked');
  const value = selected ? selected.value : '';
  const isPickup = value === 'Pick-up';
  const isOwnCar = value === 'بسيارتي';

  pickupField.classList.toggle('hidden', !isPickup);
  plateField.classList.toggle('hidden', !isOwnCar);
  carTypeField.classList.toggle('hidden', !isOwnCar);

  pickupInput.required = isPickup;
  plateInput.required = isOwnCar;
  carTypeInput.required = isOwnCar;

  if (!isPickup) pickupInput.value = '';
  if (!isOwnCar){ plateInput.value = ''; carTypeInput.value = ''; }
}

form.querySelectorAll('input[name="arrival"]').forEach(radio => {
  radio.addEventListener('change', updateArrival);
});

function collectData(){
  const fd = new FormData(form);
  const data = {};
  for (const [key, value] of fd.entries()){
    data[key] = typeof value === 'string' ? value.trim() : value;
  }

  // Keep the columns stable: fields belonging to the branch that wasn't taken
  // still get written, just empty.
  data.pickup_location = data.pickup_location || '';
  data.plate_number = data.plate_number || '';
  data.car_type = data.car_type || '';
  data.email = data.email || '';
  data.special_requests = data.special_requests || '';

  data.submitted_at = new Date().toISOString();
  data.source = 'Osool National Day Teams Form';
  return data;
}

function downloadCsv(data){
  const headers = Object.keys(data);
  const values = headers.map(h => `"${String(data[h]).replace(/"/g,'""')}"`);
  const csv = '﻿' + headers.join(',') + '\n' + values.join(',');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = (data.full_name || 'guest').replace(/[\\/:*?"<>|]/g,'-');
  a.href = url;
  a.download = `CAPTAINS-OSOOL-${safeName}.csv`;
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
    // An HTML body here means the Apps Script threw or isn't deployed right.
    throw new Error('لم يتم حفظ البيانات. يرجى إبلاغ مسؤول النموذج (خطأ في السكربت).');
  }

  if (!result.ok){
    throw new Error('لم يتم حفظ البيانات: ' + (result.error || 'خطأ غير معروف.'));
  }
  return result;
}

function showThanks(){
  showMessage('', '');
  formView.classList.add('hidden');
  thankYou.classList.add('show');
  window.scrollTo({top:0, behavior:'smooth'});
  thankYou.focus();
}

function showForm(){
  thankYou.classList.remove('show');
  formView.classList.remove('hidden');
  window.scrollTo({top:0, behavior:'smooth'});
}

document.getElementById('newEntryButton').addEventListener('click', showForm);

form.addEventListener('reset', () => {
  setTimeout(() => {
    updateArrival();
    showMessage('', '');
  });
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try{
    submitButton.disabled = true;
    submitButton.textContent = 'جار الإرسال...';
    const data = collectData();

    if (SHEET_WEB_APP_URL){
      await sendToSheet(data);
      form.reset();
      updateArrival();
      showThanks();
    } else {
      downloadCsv(data);
      showMessage('ok', 'لم يتم وضع رابط الشيت بعد، لذلك تم حفظ البيانات كملف CSV على جهازك.');
    }
  } catch(error){
    showMessage('error', error.message || 'تعذر إرسال البيانات. يرجى المحاولة مرة أخرى.');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'إرسال المعلومات';
  }
});

updateArrival();

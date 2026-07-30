import{z as t,V as y,a2 as p,y as m,Q as _,a0 as v,K as r,G as c,_ as k,J as u,E as f,$ as w}from"./index-DwNGwvz7.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],q=t("chevron-left",N);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$=t("chevron-right",L);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],z=t("layers",b);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],j=t("pen-line",D);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],x=t("user",M);function A(a,e,n,h){const l=y(m(c,"pm_projects"),p("userId","==",a));return _(l,i=>{if(i.empty){const s=e.map(o=>({...o,id:f(a,o.id),userId:a}));s.forEach(o=>{P(a,o)}),n(s);return}const d=[];i.forEach(s=>{d.push(s.data())}),n(d)},h)}async function P(a,e){await v(r(c,"pm_projects",e.id),{...e,userId:a,updatedAt:w()}),await k({id:e.id,userId:a,projectName:e.name,clientName:e.clientName,startDate:e.startDate,endDate:e.targetDeliveryDate})}async function C(a){await u(r(c,"pm_projects",a))}export{q as C,z as L,j as P,x as U,$ as a,A as b,C as d,P as s};

"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[812],{6840:(e,s,a)=>{a.d(s,{A:()=>h});a(5043);var t=a(4256),l=a(3546),n=a(7555),r=a(2901),c=a(6990),i=a(9634),o=a(5033),d=a(579);function x(e){let{el:s}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.A,{}),(0,d.jsx)("div",{className:"slider-image",style:{height:s.slideId%2?"var(--moreitems-slider-img-height-even)":"var(--moreitems-slider-img-height-odd)"},children:(0,d.jsx)(i.LazyLoadImage,{src:s.images[1],width:"100%",height:"100%",effect:"blur",alt:`slider-image-${s.id+1}`})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{className:"xxsmall-text text-main text-black up-case",children:s.name}),(0,d.jsxs)("span",{className:"xxxsmall-text  text-main text-black",children:[s.price.toLocaleString("ru-RU")," \u0440\u0443\u0431."]})]})]})}var m=a(2042);function h(e){let{headline:s="\u0435\u0449\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"}=e;const{data:a,error:i,isLoading:o}=(0,m.A)(["decor",1,10]);return(0,d.jsx)("section",{id:"more-products",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"text-center",children:[(0,d.jsx)("h2",{children:s}),(0,d.jsx)("span",{className:"small-text text-main text-black up-case",children:"\u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f"})]}),(0,d.jsx)(l.N,{mode:"wait",children:i?(0,d.jsx)(n.A,{message:i.message}):!o&&a?(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(c.A,{children:(0,d.jsx)(t.A,{itemWidth:"moreitems-slider-img-width",sliderData:a,wrapper:x})})}):(0,d.jsx)(r.A,{})})]})})}},5033:(e,s,a)=>{a.d(s,{A:()=>l});var t=a(579);function l(){return(0,t.jsxs)("div",{className:"add-to-favorites",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("input",{type:"checkbox"}),(0,t.jsx)("svg",{width:"28",height:"25",viewBox:"-2 -1 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.000650381 6.49917C-0.0200806 5.03049 0.455348 3.59918 1.34726 2.44508C2.23918 1.29099 3.49338 0.484252 4.8997 0.160054C6.30602 -0.164144 7.77899 0.0139016 9.07178 0.664354C10.3646 1.31481 11.3986 2.39814 12.0006 3.73281C12.6041 2.39369 13.6424 1.30748 14.9404 0.65729C16.2384 0.00710175 17.7168 -0.167297 19.1263 0.163495C20.5358 0.494287 21.7903 1.31004 22.6782 2.47323C23.5661 3.63642 24.0332 5.0759 24.0006 6.54901C23.9291 8.42848 23.2881 10.2393 22.1658 11.7328C21.0431 13.2871 19.7227 14.6825 18.2392 15.8823C16.3827 17.4018 14.3879 18.737 12.282 19.8699L12.0006 19.9322L11.7193 19.7827C9.61342 18.6498 7.61863 17.3146 5.76212 15.7951C4.2786 14.5952 2.95817 13.1998 1.83551 11.6456C0.720273 10.1624 0.0797062 8.36573 0.000650381 6.49917Z",stroke:"black",strokeWidth:"1.5"})})]})}},6783:(e,s,a)=>{a.d(s,{A:()=>l});var t=a(579);function l(e){let{label:s,checked:a,children:l,...n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"custom-checkbox",children:[(0,t.jsx)("input",{checked:a,...n,type:"checkbox"}),(0,t.jsx)("div",{className:"input-state"})]}),s&&(0,t.jsx)("label",{htmlFor:n.id,children:(0,t.jsx)("p",{className:"text-main xxsmall-text",style:{color:""+(a?"var(--black)":"var(--gray-text)")},children:l})})]})}},4879:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(5043),l=a(6255),n=a(579);function r(e){let{name:s,defaultValue:a,data:r}=e;const[c,i]=(0,t.useState)(null!==a&&void 0!==a?a:r[0]),[o,d]=(0,t.useState)(!1),x=e=>(0,n.jsxs)("div",{className:"row center-y gap-10",children:[(0,n.jsx)("div",{style:{border:"\u0431\u0435\u043b\u044b\u0439"===e.colorName?"1px solid var(--line-bg)":"none",backgroundColor:`var(--${e.palette})`}}),(0,n.jsx)("span",{className:"xsmall-text text-main text-black-secondary",children:e.colorName})]}),m=e=>(0,n.jsx)("span",{className:"xsmall-text text-main text-black-secondary",children:e});return(0,n.jsxs)("div",{className:"custom-selection",children:[(0,n.jsxs)("div",{className:"selection-group",style:{height:o?30*r.length+10*(r.length-1)+96+"px":"48px"},onClick:()=>d((e=>!e)),children:[(0,n.jsxs)("div",{className:"selected-option row center-y s-between",children:[s.includes("\u0446\u0432\u0435\u0442")?x(c):(0,n.jsx)("span",{className:"option-key xsmall-text text-main text-black-secondary",children:c}),(0,n.jsx)("img",{src:l.A,alt:"arrow",style:{transform:o?"rotate(-180deg)":"none"}})]}),(0,n.jsx)("ul",{className:"selection-items column gap-10",children:r.map(((e,a)=>(0,n.jsx)("li",{onClick:()=>i(e),children:s.includes("\u0446\u0432\u0435\u0442")?x(e):m(e)},a)))})]}),(0,n.jsx)("input",{type:"hidden",name:s,value:s.includes("\u0446\u0432\u0435\u0442")?c.colorName:c})]})}},8812:(e,s,a)=>{a.r(s),a.d(s,{default:()=>W});var t=a(5043),l=a(579);function n(e){let{openCart:s,setOpenCart:a}=e;return(0,l.jsxs)("div",{className:"wrap-cart row s-between center-y",children:[(0,l.jsx)("span",{className:"xsmall-text text-main text-black-secondary up-case",children:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),(0,l.jsx)("span",{className:"text-main text-black up-case",onClick:()=>a((e=>!e)),children:s?"-":"+"})]})}var r=a(3546),c=a(6990),i=a(5065);function o(e){let{activeTab:s}=e;const{toggleCart:a,isCartOpen:t}=(0,i.Z)(),n=e=>e?"var(--black)":"inherit";return(0,l.jsxs)("div",{className:"form-steps row gap-5 wrap xxxsmall-text text-main text-gray up-case",children:[(0,l.jsx)("span",{style:{color:n(t)},onClick:a,children:"\u043a\u043e\u0440\u0437\u0438\u043d\u0430"}),[{id:"information",label:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"},{id:"delivery",label:"\u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"},{id:"payment",label:"\u043e\u043f\u043b\u0430\u0442\u0430"}].map((e=>(0,l.jsxs)("span",{style:{color:n(s===e.id)},children:["/\xa0\xa0",e.label]},e.id)))]})}var d=a(6215),x=a(6783),m=a(4879),h=a(241),p=a(8776);function u(e){var s,a;let{setActiveTab:n}=e;const[r,o]=(0,t.useState)(!1),[u,j]=(0,t.useState)(!1),{clearErrors:v,forms:y,updateFormData:g,validateFormData:b}=(0,p.s)();const{setAuth:f}=(0,i.Z)();return(0,l.jsx)(c.A,{blur:!0,children:(0,l.jsxs)("form",{onSubmit:e=>function(e){e.preventDefault();const s=new FormData(e.target),a=Object.fromEntries(s.entries());v("infoForm"),b("infoForm",a)&&(g("infoForm",a),n("delivery"))}(e),spellCheck:!1,className:"form-info text-black-secondary",action:"#","data-formkey":"infoForm",children:[(0,l.jsxs)("div",{className:"row center-y s-between",children:[(0,l.jsx)("span",{className:"text-main xsmall-text up-case",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442"}),(0,l.jsxs)("p",{className:"text-main xxsmall-text text-gray",children:["\u0423 \u0412\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"," ",(0,l.jsx)("span",{className:"text-black",onClick:()=>f("sign-in"),children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]}),(0,l.jsx)(d.A,{type:"email",name:"email",placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}),(0,l.jsx)("div",{className:"row gap-10",children:(0,l.jsx)(x.A,{checked:r,onChange:()=>o((e=>!e)),label:!0,name:"subscribe",id:"subscribe",children:"\u041f\u0440\u0438\u0441\u044b\u043b\u0430\u0439\u0442\u0435 \u043c\u043d\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u043f\u0438\u0441\u044c\u043c\u0430 \u0441 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c\u0438 \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438"})}),(0,l.jsx)("span",{className:"text-main xsmall-text up-case",children:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,l.jsx)(m.A,{defaultValue:null===y||void 0===y||null===(s=y.infoForm)||void 0===s||null===(a=s.formData)||void 0===a?void 0:a.country,name:"country",data:["\u0420\u043e\u0441\u0441\u0438\u044f","\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d","\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c","\u0434\u0440\u0443\u0433\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0430"]}),(0,l.jsxs)("div",{className:"row wrap gap-20",children:[(0,l.jsx)(d.A,{type:"text",placeholder:"\u0418\u043c\u044f",name:"name"}),(0,l.jsx)(d.A,{type:"text",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",name:"surname"}),(0,l.jsx)(d.A,{type:"text",placeholder:"\u0413\u043e\u0440\u043e\u0434",name:"city"}),(0,l.jsx)(d.A,{type:"number",placeholder:"\u0418\u043d\u0434\u0435\u043a\u0441",name:"index"}),(0,l.jsx)(d.A,{type:"text",placeholder:"\u0423\u043b\u0438\u0446\u0430",name:"street"}),(0,l.jsx)(d.A,{type:"number",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u043c\u0430",name:"homeAddress"})]}),(0,l.jsx)(d.A,{type:"tel",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"phone"}),(0,l.jsx)("div",{className:"row gap-10",children:(0,l.jsx)(x.A,{label:!0,checked:u,onChange:()=>j((e=>!e)),name:"save",id:"save",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u044d\u0442\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437"})}),(0,l.jsx)("div",{className:"line"}),(0,l.jsx)(h.A,{type:"submit",children:"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})})}function j(e){var s;let{setActiveTab:a,children:t}=e;const{forms:n}=(0,p.s)(),r=null===n||void 0===n||null===(s=n.infoForm)||void 0===s?void 0:s.formData;return(0,l.jsxs)("div",{className:"form-output",children:[(0,l.jsxs)("div",{className:"row center-y s-between wrap gap-10",children:[(0,l.jsxs)("div",{className:"row center-y wrap gap-10",children:[(0,l.jsx)("span",{className:"xxsmall-text text-main text-black-secondary up-case",children:(0,l.jsx)("b",{children:" \u041a\u043e\u043d\u0442\u0430\u043a\u0442"})}),(0,l.jsx)("span",{className:"xsmall-text text-main text-black",children:r.email})]}),(0,l.jsx)("span",{className:"edit xxsmall-text text-main text-gray",onClick:()=>a("information"),children:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]}),(0,l.jsxs)("div",{className:"row center-y s-between wrap gap-10",children:[(0,l.jsxs)("div",{className:"row center-y wrap gap-10",children:[(0,l.jsx)("span",{className:"xxsmall-text text-main text-black-secondary up-case",children:(0,l.jsx)("b",{children:"\u0430\u0434\u0440\u0435\u0441"})}),(0,l.jsxs)("span",{className:"xsmall-text text-main text-black",children:[r.street," ",r.homeAddress,", ",r.index,","," ",r.city,", ",r.country]})]}),(0,l.jsx)("span",{className:"edit xxsmall-text text-main text-gray",onClick:()=>a("information"),children:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]}),t]})}var v=a(7395);function y(e){var s,a,n;let{setActiveTab:r}=e;const{forms:i,updateFormData:o,validateFormData:d}=(0,p.s)(),[m,u]=(0,t.useState)(null!==(s=null===i||void 0===i||null===(a=i.deliveryForm)||void 0===a||null===(n=a.formData)||void 0===n?void 0:n.deliveryType)&&void 0!==s?s:"pickup");return(0,l.jsxs)(c.A,{blur:!0,children:[(0,l.jsx)(j,{setActiveTab:r}),(0,l.jsxs)("form",{action:"#","data-formkey":"deliveryForm",onSubmit:e=>function(e){e.preventDefault();const s={deliveryType:new FormData(e.target).get("pickup")?"delivery":"pickup"};d("deliveryForm",s)&&(o("deliveryForm",s),r("payment"))}(e),className:"form-delivery",children:[(0,l.jsx)("span",{className:"text-main xsmall-text text-black-secondary up-case",children:"\u0441\u043f\u043e\u0441\u043e\u0431 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,l.jsx)("div",{className:"row center-y gap-10",children:(0,l.jsx)(x.A,{checked:"pickup"===m,onChange:()=>u((e=>"pickup"===e?"":"pickup")),label:!0,name:"pickup",id:"pickup",children:"\u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437 (\u041c\u043e\u0441\u043a\u0432\u0430, \u043c. \u0411\u043e\u0442\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0430\u0434, \u0421\u0435\u043b\u044c\u0441\u043a\u043e\u0445\u043e\u0437\u044f\u0439\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0443\u0434., \u0434. 12\u0410, \u0441\u0442\u0440. 6.)"})}),(0,l.jsx)("div",{className:"row center-y gap-10",children:(0,l.jsx)(x.A,{checked:"delivery"===m,onChange:()=>u((e=>"delivery"===e?"":"delivery")),label:!0,name:"delivery",id:"delivery",children:"\u043a\u0443\u0440\u044c\u0435\u0440"})}),(0,l.jsx)("div",{className:"line"}),(0,l.jsx)(h.A,{type:"submit",children:"\u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435"})]}),(0,l.jsx)("div",{className:"row center-x",children:(0,l.jsxs)("button",{onClick:()=>r("information"),type:"button",className:"row center-y gap-15 xsmall-text text-main text-black",children:[(0,l.jsx)("img",{src:v.A,alt:"arrow-left"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438"]})})]})}function g(e){var s,a,n,r;let{cells:c,subCells:i,name:o}=e;const d=(0,t.useRef)([]),{forms:x}=(0,p.s)(),m=null===x||void 0===x||null===(s=x.paymentForm)||void 0===s||null===(a=s.errors)||void 0===a?void 0:a[o],h=null===x||void 0===x||null===(n=x.paymentForm)||void 0===n||null===(r=n.formData)||void 0===r?void 0:r[o];const[u,j]=(0,t.useState)(h?function(e,s){const a=[];for(let t=0;t<e.length;t+=s)a.push(e.slice(t,t+s));return a}(h.split(""),i):Array(c).fill(null).map((()=>Array(i).fill(""))));function v(e,s,a){const t=s===i-1,l=e===u.length-1;if(t&&!l){const s=d.current[(e+1)*i];s&&s.focus()}else if(!t){const e=d.current[a+1];e&&e.focus()}}function y(e,s,a){if(0===s){if(!(0===e)){const s=d.current[(e-1)*i+i-1];s&&s.focus()}}else{const e=d.current[a-1];e&&e.focus()}}return(0,l.jsx)("div",{className:"row wrap gap-10 s-between wrap",children:u.map(((e,s)=>(0,l.jsx)("div",{className:"num-group row center-y center-x "+(m?"has-error":"static"),children:e.map(((e,a)=>{const t=s*i+a;return(0,l.jsx)("input",{name:o,ref:e=>d.current[t]=e,value:e,onKeyDown:e=>{"Backspace"===e.code?j((e=>{const l=[...e];return""===l[s][a]?(a>0?l[s][a-1]="":s>0&&(l[s-1][i-1]=""),y(s,a,t)):l[s][a]="",l})):"ArrowLeft"===e.code?y(s,a,t):"ArrowRight"===e.code&&v(s,a,t)},onChange:e=>{e.stopPropagation();const l=e.target.value;""!==l&&j((e=>{const n=[...e];return n[s][a]=l.split("")[0],v(s,a,t),n}))},type:"number",placeholder:"x",max:9,min:0},a)}))},s)))})}const b=a.p+"static/media/visa.5d2fbca5335a9725ebf97558640ceb25.svg";const f=a.p+"static/media/master-card.df302cd84d014a3c61d267256ecc1e81.svg";function N(e){let{setIsChecked:s,isChecked:a}=e;return(0,l.jsxs)("div",{id:"form-cart",children:[(0,l.jsxs)("div",{className:"row wrap s-between center-y gap-10",children:[(0,l.jsx)("div",{className:"row center-y gap-10",children:(0,l.jsx)(x.A,{checked:"bycard"===a,onChange:()=>s((e=>"bycard"===e?"":"bycard")),label:!0,name:"bycard",id:"bycard",children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439"})}),(0,l.jsxs)("div",{className:"row center-y gap-5",children:[(0,l.jsx)("div",{className:"cart-image center-gr",children:(0,l.jsx)("img",{src:b,alt:"visa"})}),(0,l.jsx)("div",{className:"cart-image center-gr",children:(0,l.jsx)("img",{src:f,alt:"master-card"})})]})]}),(0,l.jsxs)("div",{className:"cart-data",children:[(0,l.jsx)("span",{className:"text-main xxsmall-text text-gray",children:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"}),(0,l.jsx)(g,{cells:4,subCells:4,name:"cartNums"}),(0,l.jsx)("span",{className:"text-main xxsmall-text text-gray",children:"\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u043a\u0430\u0440\u0442\u044b"}),(0,l.jsx)(d.A,{type:"text",name:"name",placeholder:"\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430"}),(0,l.jsxs)("div",{className:"row s-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"text-main xxsmall-text text-gray",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e"}),(0,l.jsxs)("div",{className:"row center-y gap-5",children:[(0,l.jsx)(g,{cells:1,subCells:2,name:"cartDate"}),(0,l.jsx)("span",{className:"text-main xxsmall-text text-gray",children:"/"}),(0,l.jsx)(g,{cells:1,subCells:2,name:"cartYear"})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"text-main xxsmall-text text-gray up-case",children:"cvv"}),(0,l.jsx)(g,{cells:1,subCells:3,name:"cartCVV"})]})]})]})]})}function w(e){var s,a,n;let{setActiveTab:r,setIsBought:i}=e;const{forms:o,updateFormData:d,validateFormData:m,clearErrors:u}=(0,p.s)(),[y,g]=(0,t.useState)(null!==(s=null===o||void 0===o||null===(a=o.paymentForm)||void 0===a||null===(n=a.formData)||void 0===n?void 0:n.paymentType)&&void 0!==s?s:"onspot");return(0,l.jsxs)(c.A,{blur:!0,children:[(0,l.jsx)(j,{setActiveTab:r,children:(0,l.jsxs)("div",{className:"row center-y s-between wrap gap-10",children:[(0,l.jsxs)("div",{className:"row center-y wrap gap-10",children:[(0,l.jsx)("span",{className:"xxsmall-text text-main text-black-secondary up-case",children:(0,l.jsx)("b",{children:"\u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})}),(0,l.jsx)("span",{className:"xsmall-text text-main text-black",style:{textTransform:"capitalize"},children:"delivery"===o.deliveryForm.formData.deliveryType?"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437":"\u041a\u0443\u0440\u044c\u0435\u0440"})]}),(0,l.jsx)("span",{className:"edit xxsmall-text text-main text-gray",onClick:()=>r("delivery"),children:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})}),(0,l.jsxs)("form",{action:"#",className:"form-payment","data-formkey":"paymentForm",onSubmit:e=>function(e){e.preventDefault();const s=new FormData(e.target),a=s.get("onspot")?"onspot":"bycard",t={cartNums:s.getAll("cartNums").join(""),cartCVV:s.getAll("cartCVV").join(""),cartDate:s.getAll("cartDate").join(""),cartYear:s.getAll("cartYear").join(""),name:s.get("name")},l="onspot"===a?{paymentType:a}:{paymentType:a,...t};u("paymentForm"),m("paymentForm",l)&&(d("paymentForm",l),r("bought"),i(!0))}(e),children:[(0,l.jsx)("span",{className:"text-main xsmall-text text-black-secondary up-case",children:"\u043e\u043f\u043b\u0430\u0442\u0430"}),(0,l.jsx)(N,{isChecked:y,setIsChecked:g}),(0,l.jsx)("div",{className:"row center-y gap-10",children:(0,l.jsx)(x.A,{checked:"onspot"===y,onChange:()=>g((e=>"onspot"===e?"":"onspot")),label:!0,name:"onspot",id:"onspot",children:"\u041e\u043f\u043b\u0430\u0442\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438"})}),(0,l.jsx)("div",{className:"line"}),(0,l.jsx)(h.A,{type:"submit",children:"\u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"})]}),(0,l.jsx)("div",{className:"row center-x",children:(0,l.jsxs)("button",{onClick:()=>r("delivery"),type:"button",className:"row center-y gap-15 xsmall-text text-main text-black",children:[(0,l.jsx)("img",{src:v.A,alt:"arrow-left"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"]})})]})}var k=a(9634);function A(){return(0,l.jsxs)(c.A,{blur:!0,className:"bought column gap-60",children:[(0,l.jsxs)("div",{className:"row center-x wrap",children:[(0,l.jsx)("div",{children:(0,l.jsx)(k.LazyLoadImage,{effect:"blur",style:{objectViewBox:"inset(0% 17% 0% 0%)",WebkitObjectViewBox:"inset(0% 17% 0% 0%)"},width:"254px",height:"254px",src:"https://i.ibb.co/pjv1Wds/img-1.jpg",alt:"vase"})}),(0,l.jsxs)("div",{className:"self-end-y",children:[(0,l.jsx)("h2",{className:"text-black-secondary",children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437 "}),(0,l.jsxs)("p",{className:"text-main small-text text-black-secondary",children:["\u0412\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u0441\u043b\u0435\u0434\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u0437\u0430\u043a\u0430\u0437 \u0432 ",(0,l.jsx)("span",{children:"\u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435"})]})]})]}),(0,l.jsx)("div",{className:"row center-x",children:(0,l.jsx)("div",{style:{maxWidth:"460px"},children:(0,l.jsx)(k.LazyLoadImage,{effect:"blur",width:"100%",height:"282px",src:"https://i.ibb.co/gVZ6NWL/img-5.jpg",alt:"vase"})})})]})}function C(e){let{setIsBought:s}=e;const[a,n]=(0,t.useState)("information");return(0,l.jsx)(r.N,{mode:"wait",initial:!1,children:"bought"!==a?(0,l.jsxs)(c.A,{children:[(0,l.jsx)(o,{activeTab:a}),(0,l.jsx)(r.N,{mode:"wait",children:(()=>{switch(a){case"information":return(0,l.jsx)(u,{setActiveTab:n},"information");case"delivery":return(0,l.jsx)(y,{setActiveTab:n},"delivery");case"payment":return(0,l.jsx)(w,{setIsBought:s,setActiveTab:n},"payment");case"bought":return(0,l.jsx)(A,{},"bought");default:return null}})()})]},"main-tabs"):(0,l.jsx)(A,{})})}var F=a(631),D=a(3960),T=a(6328),S=a(6894);function L(){const{totalPrice:e}=(0,T.h)();return(0,l.jsx)("div",{className:"promo-code",children:(0,l.jsxs)(S.A,{formkey:"codeForm",children:[(0,l.jsxs)("div",{className:"row gap-15",children:[(0,l.jsx)(d.A,{type:"text",placeholder:"\u041f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0438\u043b\u0438 \u043a\u0443\u043f\u043e\u043d",name:"code"}),(0,l.jsx)(h.A,{style:{minWidth:"170px"},type:"submit",children:"\u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]}),(0,l.jsxs)("div",{className:"row s-between wrap gap-10 text-main text-black xsmall-text ",children:[(0,l.jsx)("span",{className:"up-case",children:"\u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0439"}),(0,l.jsxs)("span",{children:[e()," \u0440\u0443\u0431"]})]}),(0,l.jsxs)("div",{className:"row s-between gap-15 text-main text-black xsmall-text ",children:[(0,l.jsx)("span",{className:"up-case",children:"\u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),(0,l.jsx)("span",{className:"text-gray",children:"\u0420\u0430\u0441\u0441\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0448\u0430\u0433\u0435"})]}),(0,l.jsxs)("div",{className:"row s-between wrap gap-15 text-main text-black small-text",children:[(0,l.jsx)("span",{className:"up-case",children:"\u0438\u0442\u043e\u0433"}),(0,l.jsxs)("span",{children:[e()," \u0440\u0443\u0431"]})]})]})})}var I=a(1955),V=a(1192);function B(e){let{openCart:s,elRef:a}=e;const{scrollbarAccess:n}=(0,t.useContext)(V.x),{products:c}=(0,T.h)(),i=(0,t.useCallback)((()=>{n.current.updatePluginOptions("overflow",{open:!1})}),[n]),o=()=>{var e;(null===a||void 0===a||null===(e=a.current)||void 0===e?void 0:e.scrollHeight)>470&&n.current.updatePluginOptions("overflow",{open:!0})};(0,t.useEffect)((()=>{i()}),[c.length,i]);const d=(0,I.A)("(max-width: 769px)");return(0,l.jsx)(r.N,{mode:"wait",initial:!1,children:(!d||s&&d)&&(0,l.jsxs)(F.P.div,{layout:!0,initial:{height:0},animate:{height:"auto"},exit:{height:0},className:"cart-content",children:[(0,l.jsx)("h5",{className:"text-black-secondary",children:"\u0438\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0441\u0443\u043c\u043c\u0430"}),(0,l.jsx)(D.A,{ref:a,onMouseEnter:o,onMouseLeave:i,onTouchStart:o,onTouchEnd:i,onTouchCancel:i}),(0,l.jsx)(L,{})]})})}function R(e){let{setIsBought:s}=e;const a=(0,t.useRef)(null),[r,c]=(0,t.useState)(!1);return(0,l.jsx)("section",{id:"order",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"section-layout",children:[(0,l.jsx)(n,{openCart:r,setOpenCart:c}),(0,l.jsx)(C,{setIsBought:s}),(0,l.jsx)(B,{openCart:r,elRef:a})]})})})}var O=a(6840);function W(){const[e,s]=(0,t.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(R,{setIsBought:s}),e&&(0,l.jsx)(O.A,{headline:"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u043f\u043e\u043a\u0443\u043f\u043a\u0438"})]})}}}]);
//# sourceMappingURL=812.1d5ef424.chunk.js.map
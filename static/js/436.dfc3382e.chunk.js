"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[436],{8171:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);const s=a.p+"static/media/3d-modeling.9d3c5faa5b68b20c7893a9784b775da0.svg"},6840:(e,t,a)=>{a.d(t,{A:()=>j});var s=a(5043),n=a(4256),i=a(3546),c=a(7555),l=a(2901),r=a(6990),d=a(9634),o=a(5817),x=a(5475),m=a(579);function u(e){let{el:t,catalog:a}=e;return(0,m.jsxs)(x.N_,{to:`/catalog/${a}/${t.name.toLowerCase()}?id=${t.id}`,children:[(0,m.jsx)(o.A,{data:t}),(0,m.jsx)("div",{className:"slider-image",style:{height:t.slideId%2?"var(--moreitems-slider-img-height-even)":"var(--moreitems-slider-img-height-odd)"},children:(0,m.jsx)(d.LazyLoadImage,{src:t.images[1],width:"100%",height:"100%",effect:"blur",alt:`slider-image-${t.id+1}`})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"xxsmall-text text-main text-black up-case",children:t.name}),(0,m.jsxs)("span",{className:"xxxsmall-text  text-main text-black",children:[t.price.toLocaleString("ru-RU")," \u0440\u0443\u0431."]})]})]})}var p=a(3216),h=a(2042);function j(e){var t;let{headline:a="\u0435\u0449\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"}=e;const d=(0,s.useMemo)((()=>["frameless","bedsheets","curtains","beds","decor","sofas","poufs","chairs","armchairs"][Math.min(7,Math.round(8*Math.random()))]),[]),o=null!==(t=(0,p.g)().catalog)&&void 0!==t?t:d,[j]=(0,x.ok)(),g=j.get("id"),v=(0,p.g)().product,{data:f,error:b,isLoading:y}=(0,h.A)([o,1,16]);return(0,m.jsx)("section",{id:"more-products",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"text-center",children:[(0,m.jsx)("h2",{children:a}),(0,m.jsx)("span",{className:"small-text text-main text-black up-case",children:"\u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f"})]}),(0,m.jsx)(i.N,{mode:"wait",children:b?(0,m.jsx)(c.A,{message:b.message}):!y&&f?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(r.A,{children:(0,m.jsx)(n.A,{itemWidth:"moreitems-slider-img-width",catalog:o,sliderData:f.filter(((e,t)=>e.id!==g&&e.name.toLowerCase()!==v)).slice(0,10),wrapper:u})})}):(0,m.jsx)(l.A,{})})]})})}},5817:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(5043),n=a(682),i=a(7589),c=a(579);function l(e){let{data:t,formRef:a}=e;const{handleAddToFav:l,isFav:r}=(0,n.A)(t.id),{removeProduct:d}=(0,i.o)(),[o,x]=(0,s.useState)(r);return(0,c.jsxs)("div",{className:"add-to-favorites",onClick:e=>{e.stopPropagation(),o?d(t.id):l(t,a)},children:[(0,c.jsx)("input",{type:"checkbox",defaultChecked:o,onChange:()=>x((e=>!e))}),(0,c.jsx)("svg",{width:"28",height:"25",viewBox:"-2 -1 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.000650381 6.49917C-0.0200806 5.03049 0.455348 3.59918 1.34726 2.44508C2.23918 1.29099 3.49338 0.484252 4.8997 0.160054C6.30602 -0.164144 7.77899 0.0139016 9.07178 0.664354C10.3646 1.31481 11.3986 2.39814 12.0006 3.73281C12.6041 2.39369 13.6424 1.30748 14.9404 0.65729C16.2384 0.00710175 17.7168 -0.167297 19.1263 0.163495C20.5358 0.494287 21.7903 1.31004 22.6782 2.47323C23.5661 3.63642 24.0332 5.0759 24.0006 6.54901C23.9291 8.42848 23.2881 10.2393 22.1658 11.7328C21.0431 13.2871 19.7227 14.6825 18.2392 15.8823C16.3827 17.4018 14.3879 18.737 12.282 19.8699L12.0006 19.9322L11.7193 19.7827C9.61342 18.6498 7.61863 17.3146 5.76212 15.7951C4.2786 14.5952 2.95817 13.1998 1.83551 11.6456C0.720273 10.1624 0.0797062 8.36573 0.000650381 6.49917Z",stroke:"black",strokeWidth:"1.5"})})]})}},4879:(e,t,a)=>{a.d(t,{A:()=>c});var s=a(5043),n=a(6255),i=a(579);function c(e){let{name:t,defaultValue:a,data:c}=e;const[l,r]=(0,s.useState)(null!==a&&void 0!==a?a:c[0]),[d,o]=(0,s.useState)(!1),x=e=>(0,i.jsxs)("div",{className:"row center-y gap-10",children:[(0,i.jsx)("div",{style:{border:"\u0431\u0435\u043b\u044b\u0439"===e.colorName?"1px solid var(--line-bg)":"none",backgroundColor:`var(--${e.palette})`}}),(0,i.jsx)("span",{className:"xsmall-text text-main text-black-secondary",children:e.colorName})]}),m=e=>(0,i.jsx)("span",{className:"xsmall-text text-main text-black-secondary",children:e});return(0,i.jsxs)("div",{className:"custom-selection",children:[(0,i.jsxs)("div",{className:"selection-group",style:{height:d?30*c.length+10*(c.length-1)+96+"px":"48px"},onClick:()=>o((e=>!e)),children:[(0,i.jsxs)("div",{className:"selected-option row center-y s-between",children:[t.includes("\u0446\u0432\u0435\u0442")?x(l):(0,i.jsx)("span",{className:"option-key xsmall-text text-main text-black-secondary",children:l}),(0,i.jsx)("img",{src:n.A,alt:"arrow",style:{transform:d?"rotate(-180deg)":"none"}})]}),(0,i.jsx)("ul",{className:"selection-items column gap-10",children:c.map(((e,a)=>(0,i.jsx)("li",{onClick:()=>r(e),children:t.includes("\u0446\u0432\u0435\u0442")?x(e):m(e)},a)))})]}),(0,i.jsx)("input",{type:"hidden",name:t,value:t.includes("\u0446\u0432\u0435\u0442")?l.colorName:l})]})}},6822:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);var s=a(241),n=a(3216),i=a(6990),c=a(579);function l(e){let{level:t}=e;const a=(0,n.Zp)();return(0,c.jsxs)(i.A,{className:"no-results center-gr",children:[(0,c.jsx)("h3",{className:"up-case",children:"no results found"}),(0,c.jsx)(s.A,{onClick:()=>a(null!==t&&void 0!==t?t:"."),children:"go back"})]},"no-results")}},630:(e,t,a)=>{a.d(t,{A:()=>i,m:()=>n});var s=a(5475);const n={"\u0441\u0435\u0440\u044b\u0439":"palette-gray-light","\u0447\u0435\u0440\u043d\u044b\u0439":"black","\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown","\u0431\u0435\u043b\u044b\u0439":"white","\u0431\u0435\u0436\u0435\u0432\u044b\u0439":"palette-beige","\u0437\u0435\u043b\u0435\u043d\u044b\u0439":"palette-green","\u0442\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439":"palette-gray","\u0441\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown-light"};function i(e){var t;const[a,i]=(0,s.ok)(),c=null!==(t=a.getAll(e))&&void 0!==t?t:[],l=["minprice","maxprice","minwidth","maxwidth","mindepth","maxdepth"];return{handleSearchParams:function(t){const s=new URLSearchParams(a);if(l.includes(e))return s.set(e,t),void i(s);const n=s.getAll(e);if(n.includes(t)){const a=n.filter((e=>e!==t));s.delete(e),a.forEach((t=>s.append(e,t)))}else s.append(e,t);i(s)},handleFilter:function(e){const t={},s=[],i=[];let c=null,l=null,r=null,d=null,o=null,x=null;for(const[m,u]of a.entries())"page"!==m&&("minprice"===m?c=parseFloat(u)||0:"maxprice"===m?l=parseFloat(u)||25e4:"minwidth"===m?r=parseFloat(u)||0:"maxwidth"===m?d=parseFloat(u)||1e4:"mindepth"===m?o=parseFloat(u)||0:"maxdepth"===m?x=parseFloat(u)||1e4:"description"===m?s.push(u):"colors"===m?i.push(n[u]):t[m]=t[m]?[...t[m],u]:[u]);e((e=>e.map((e=>{const a=Object.entries(t).every((t=>{let[a,s]=t;return s.includes(e[a])})),n=s.every((t=>!0===e[t])),m=(!l||e.price<=l)&&(!c||e.price>=c),u=(!d||e.width<=d)&&(!r||e.width>=r),p=(!x||e.depth<=x)&&(!o||e.depth>=o),h=0===i.length||e.colors.some((e=>i.includes(e)));return{...e,isShown:a&&n&&m&&u&&p&&h}}))),!1)},resetFilter:function(e){a.delete(e),i(a)},allFilterParams:c}}},682:(e,t,a)=>{a.d(t,{A:()=>o});var s=a(2042),n=a(3440),i=a(7589),c=a(5065),l=a(8967),r=a(3216),d=a(5475);const o=function(e){const t=(0,n.h)((e=>e.addProduct)),{addProduct:a,products:o}=(0,i.o)(),{toggleAdded:x}=(0,c.Z)(),{toggleFav:m}=(0,c.Z)(),u=o.some((t=>e===t.id)),[p]=(0,d.ok)(),h=parseInt(p.get("id")),{catalog:j}=(0,r.g)(),{data:g}=(0,s.A)([h,j,h+j],l.Gq);return{handleAddToCart:function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const s=new FormData(e.target);e.preventDefault();const n={catalog:j,product:g.product,image:g.images[0],name:g.name,collection:g.collection,id:a.length?g.id+"_with-config":g.id,price:g.price+(a.length?a.reduce(((e,t)=>e+t.price*t.quantity),0):0),configuration:a.length?a:void 0};for(let[t,i]of s.entries())n[t]=i;t(n),x(),setTimeout((()=>{x()}),1500)},handleAddToFav:(e,t)=>{const s={catalog:j,product:e.product,image:e.images[0],name:e.name,collection:e.collection,id:e.id,price:e.price};if(t){const e=new FormData(t.current);for(let[t,a]of e.entries())s[t]=a}a(s),m(),setTimeout((()=>{m()}),1500)},isFav:u}}},9436:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var s=a(6840),n=a(2042),i=a(8967),c=a(5475),l=a(3216),r=a(5043),d=a(3546),o=a(631),x=a(5882),m=a(579);function u(e){let{content:t}=e;const a=(0,l.g)()["*"];return(0,m.jsxs)("div",{className:"row center-y gap-35 wrap s-between",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"xxsmall-text text-main text-black-secondary up-case",children:"\u0440\u0430\u0437\u043c\u0435\u0440\u044b:"}),(0,m.jsx)("ul",{className:"sizes xsmall-text text-main text-black-secondary",children:Object.entries(t.sizes).map(((e,t)=>{let[a,s]=e;return(0,m.jsx)("li",{children:(0,m.jsxs)("span",{children:[(0,m.jsxs)("b",{children:[a,":"]})," ",s.join(" / ")]})},t)}))}),(0,m.jsx)("span",{className:"xxsmall-text text-main text-black-secondary up-case",children:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b:"}),(0,m.jsx)("ul",{className:"materials xsmall-text text-main text-black-secondary",children:Object.entries(t.materials).map(((e,t)=>{let[a,s]=e;return(0,m.jsx)("li",{children:(0,m.jsxs)("span",{children:[(0,m.jsxs)("b",{children:[a,":"]})," ",s]})},t)}))})]}),a.includes("beds")&&(0,m.jsx)("div",{className:"bed-sketch",children:(0,m.jsx)("img",{alt:"bed-sketch",src:x})})]})}function p(e){let{content:t}=e;return(0,m.jsx)("ol",{className:"care-rules xsmall-text text-main text-black-secondary",children:t.map(((e,t)=>(0,m.jsx)("li",{children:(0,m.jsx)("span",{children:e})},t)))})}function h(e){let{content:t}=e;return(0,m.jsx)("p",{className:"packing xsmall-text text-main text-black-secondary",children:t.text})}var j=a(9634);const g=a.p+"static/media/done.9f54f4528ed212b37488a5c60a73520b.svg";function v(e){let{data:t}=e;return(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("ul",{className:"advantages",children:t&&t.map(((e,t)=>(0,m.jsxs)("li",{className:"text-center column gap-20 center-y",children:[(0,m.jsx)("div",{className:"icon center-gr",children:(0,m.jsx)("img",{src:g,alt:"done-icon"})}),(0,m.jsx)("span",{style:{lineHeight:"normal"},className:"xsmall-text text-main text-black-secondary up-case",children:(0,m.jsx)("b",{children:e.title})}),(0,m.jsx)("p",{className:"xsmall-text text-main text-black-secondary",children:e.text})]},t)))})})}function f(e){let{data:t,images:a,advantages:s}=e;return t&&(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"product-visuals",children:[(0,m.jsx)("div",{children:(0,m.jsx)(j.LazyLoadImage,{width:"100%",height:"100%",effect:"blur",alt:"product-visuals",src:a[1]})}),(0,m.jsxs)("div",{children:[t.text.map(((e,t)=>(0,m.jsx)("p",{className:"xsmall-text text-main text-black-secondary",children:e},t))),(0,m.jsxs)("div",{className:"row gap-40",children:[(0,m.jsx)("div",{className:"self-end-y",children:(0,m.jsx)(j.LazyLoadImage,{height:"265px",width:"210px",effect:"blur",alt:"product-visuals",src:a[2]})}),(0,m.jsx)("div",{children:(0,m.jsx)(j.LazyLoadImage,{width:"100%",height:"385px",effect:"blur",alt:"product-visuals",src:a[3]})})]})]})]}),(0,m.jsx)(v,{data:s})]})}function b(e){let{sectionKey:t,label:a,content:s,open:n,onToggle:i}=e;return(0,m.jsxs)("li",{children:[(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"description-heading row center-y s-between gap-10",onClick:()=>i(),children:[(0,m.jsx)("span",{className:"xxsmall-text text-main text-black-secondary up-case",children:a}),(0,m.jsx)("span",{className:"xxsmall-text text-main text-black-secondary up-case",children:n===t?"-":"+"})]})}),(0,m.jsx)(d.N,{initial:!1,mode:"wait",children:n===t&&s&&(0,m.jsx)(o.P.div,{className:"container",initial:{height:0,overflow:"hidden"},animate:{height:"auto"},exit:{height:0},children:(0,m.jsxs)("div",{children:["technical"===t&&(0,m.jsx)(u,{content:s}),"maintenance"===t&&(0,m.jsx)(p,{content:s}),"packing"===t&&(0,m.jsx)(h,{content:s}),"description"===t&&(0,m.jsx)(f,{data:s[0],images:s[1],advantages:s[2]})]})})})]})}var y=a(8636);function N(e){let{data:t}=e;const[a,s]=(0,r.useState)("technical"),n=(0,y.A)(),i=[{key:"technical",label:"\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438",content:null===t||void 0===t?void 0:t.technicalSpecifications},{key:"maintenance",label:"\u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435",content:null===t||void 0===t?void 0:t.maintenance},{key:"packing",label:"\u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0430",content:null===t||void 0===t?void 0:t.packing},{key:"description",label:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",content:[null===t||void 0===t?void 0:t.productDescription,null===t||void 0===t?void 0:t.images,null===t||void 0===t?void 0:t.advantages]}];return(0,m.jsx)("ul",{className:"show-descriptions",children:i.map((e=>{let{key:t,label:i,content:c}=e;return(0,m.jsx)(b,{sectionKey:t,label:i,content:c,open:a,onToggle:()=>n(500,(()=>{var e;e=t,s((t=>t===e?"":e))}))},t)}))})}function k(){const[e]=(0,c.ok)(),t=(0,l.g)()["*"].split("/")[0],a=parseInt(e.get("id")),{data:s}=(0,n.A)([a,t,a+t],i.Gq);return(0,m.jsx)("section",{id:"product-description",children:(0,m.jsx)(N,{data:s})})}function w(e){let{catalog:t,collection:a,name:s}=e;return(0,m.jsxs)("div",{className:"row wrap gap-10 xxxsmall-text text-main text-gray up-case",children:[(0,m.jsx)(c.N_,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,m.jsx)("span",{children:"/"}),(0,m.jsx)(c.N_,{to:`/catalog/${t}`,children:"\u043a\u0430\u0442\u0430\u043b\u043e\u0433"}),(0,m.jsx)("span",{children:"/"}),(0,m.jsx)(c.N_,{to:`/catalog/${t}?collection=${a}`,children:a}),(0,m.jsx)("span",{className:"text-black-secondary",children:"/"}),(0,m.jsx)("span",{className:"text-black-secondary",children:s})]})}const A=a.p+"static/media/cube.76df8b769741322f60a11e31ed3bfb7d.svg";var C=a(8171);const q=a.p+"static/media/document-download.17e0f5ec224b547220a9576df4430f7d.svg";function L(e){let{catalog:t}=e;const a="decor"!==t;return(0,m.jsxs)("div",{className:"download-details wrap row gap-30 s-between",children:[a&&(0,m.jsxs)("div",{className:"row center-y gap-15",children:[(0,m.jsx)("div",{className:"icon center-gr",children:(0,m.jsx)("img",{src:A,alt:"cube"})}),(0,m.jsxs)("span",{className:"xsmall-text text-main text-black-secondary",children:["\u0421\u043e\u0431\u0440\u0430\u0442\u044c ",(0,m.jsx)("br",{})," \u0441\u0430\u043c\u043e\u043c\u0443"]})]}),(0,m.jsxs)("div",{className:"row center-y gap-15",children:[(0,m.jsx)("div",{className:"icon center-gr",children:(0,m.jsx)("img",{src:C.A,alt:"model"})}),(0,m.jsxs)("span",{className:"xsmall-text text-main text-black-secondary",children:["\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c ",a&&(0,m.jsx)("br",{})," 3D-\u043c\u043e\u0434\u0435\u043b\u044c"]})]}),(0,m.jsxs)("div",{className:"row center-y gap-15",children:[(0,m.jsx)("div",{className:"icon center-gr",children:(0,m.jsx)("img",{src:q,alt:"download"})}),(0,m.jsxs)("span",{className:"xsmall-text text-main text-black-secondary",children:["\u0421\u043a\u0430\u0447\u0430\u0442\u044c ",a&&(0,m.jsx)("br",{})," 3D-\u043c\u043e\u0434\u0435\u043b\u044c"]})]})]})}function F(e){let{value:t,...a}=e;return(0,m.jsxs)("div",{className:"custom-radio",children:[(0,m.jsx)("input",{type:"radio",value:t,...a}),(0,m.jsx)("div",{className:"center-gr",children:(0,m.jsx)("span",{className:"xsmall-text text-main",children:t})})]})}function S(e){let{label:t,values:a,height:s}=e;return(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"option-key xsmall-text text-main text-black-secondary",children:t}),(0,m.jsx)("div",{className:"options row wrap",children:a.map(((e,a)=>{var n;return(0,m.jsx)(F,{defaultChecked:0===a,value:`${s?`${e.value}x${null===(n=s[a])||void 0===n?void 0:n.value}`:e.value} ${e.unit}`,name:t},a)}))})]})}function $(e){let{dimensions:t}=e;return t&&t.map(((e,a)=>{const[s,n]=Object.entries(e)[0];if("\u0448\u0438\u0440\u0438\u043d\u0430"===s){const e=t.find((e=>"\u0432\u044b\u0441\u043e\u0442\u0430"===Object.keys(e)[0])),s=(null===e||void 0===e?void 0:e.\u0432\u044b\u0441\u043e\u0442\u0430)||[];return(0,m.jsx)(S,{label:"\u0440\u0430\u0437\u043c\u0435\u0440",values:n,height:s},a)}return"\u0432\u044b\u0441\u043e\u0442\u0430"===s?null:(0,m.jsx)(S,{label:s,values:n},a)}))}var I=a(630),P=a(4879);function R(e){let{label:t,style:a,data:s}=e;return console.log(s),(0,m.jsxs)("div",{style:a,children:[(0,m.jsx)("span",{className:"option-key xsmall-text text-main text-black-secondary",children:t}),(0,m.jsx)(P.A,{name:t,data:s})]})}function z(e){let{options:t,colors:a}=e;return t&&t.map(((e,t,s)=>{const[n,i]=Object.entries(e)[0],c=(t%2!==0?t>=4&&t+1<=s.length:t>=4&&t+1<s.length)?{width:"calc(100% / 2 - 10px)"}:{width:"100%"};if(n.includes("\u0446\u0432\u0435\u0442")){const e=Object.fromEntries(Object.entries(I.m).map((e=>{let[t,a]=e;return[a,t]})));return(0,m.jsx)(R,{label:n,style:c,data:a.map((t=>({palette:t,colorName:e[t]})))},t)}return(0,m.jsx)(R,{label:n,style:c,data:i},t)}))}var T=a(5817),O=a(5073),D=a(682);function M(e){let{data:t}=e;const{handleAddToCart:a}=(0,D.A)(),s=t&&t.characteristics[0].dimensions,n=t&&t.characteristics[1].options,i=(0,r.useRef)(null);return(0,m.jsxs)("form",{ref:i,action:"#",onSubmit:e=>a(e),children:[(0,m.jsxs)("div",{className:"row wrap gap-20",children:[(0,m.jsx)($,{dimensions:s}),(0,m.jsx)(z,{options:n,colors:t.colors})]}),(0,m.jsxs)("div",{className:"submit-wrapper",children:[(0,m.jsx)(O.A,{type:"submit",children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),(0,m.jsxs)("div",{className:"row center-y center-x gap-10",children:[(0,m.jsx)(T.A,{data:t,formRef:i}),(0,m.jsx)("span",{className:"text-main xxsmall-text text-black-secondary",children:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})]})]})]})}function U(e){let{data:t}=e;const{catalog:a}=(0,l.g)();return(0,m.jsxs)("div",{className:"product-details",children:[(0,m.jsx)(w,{catalog:a,collection:t.collection,name:t.name}),(0,m.jsx)("h4",{children:t.product+" "+(null===t||void 0===t?void 0:t.name)}),(0,m.jsxs)("span",{className:"small-text text-main text-black-secondary",children:[null===t||void 0===t?void 0:t.price.toLocaleString("ru-RU")," \u0440\u0443\u0431"]}),(0,m.jsx)(L,{catalog:a}),(0,m.jsx)(M,{data:t})]})}const Z=function(e){let{isActive:t,onClick:a}=e;return(0,m.jsx)("div",{className:"dot "+(t?"active":"inactive"),onClick:a})};function _(e){let{images:t,activeImage:a}=e;return(0,m.jsx)("div",{className:"main-image",children:t.map(((e,t)=>(0,m.jsx)("div",{style:{left:`calc(100% * (${t-a}))`},children:(0,m.jsx)(j.LazyLoadImage,{width:"100%",height:"100%",effect:"blur",src:e,alt:`product-image-${t+1}`})},t)))})}function Q(e){let{src:t,alt:a,isActive:s,onClick:n}=e;return(0,m.jsx)("div",{className:"thumbnail-image",style:{opacity:s?.3:1},onClick:n,children:(0,m.jsx)(j.LazyLoadImage,{width:"100%",height:"100%",effect:"blur",src:t,alt:a})})}function G(e){let{images:t}=e;const[a,s]=(0,r.useState)(0),n=t?t.slice(1):Array(5).fill(null);return(0,m.jsxs)("div",{className:"product-image-slider row gap-35",children:[(0,m.jsx)("div",{className:"dots column center-x center-y gap-15",children:n.map(((e,t)=>(0,m.jsx)(Z,{isActive:t===a,onClick:()=>s(t)},t)))}),(0,m.jsxs)("div",{children:[(0,m.jsx)(_,{images:n,activeImage:a}),(0,m.jsx)("div",{className:"thumbnail-images gap-10",children:n.map(((e,t)=>(0,m.jsx)(Q,{src:e,alt:`product-thumbnail-${t}`,isActive:t===a,onClick:()=>s(t)},t)))})]})]})}function E(e){let{data:t}=e;return(0,m.jsx)("section",{id:"product-options",children:(0,m.jsx)("div",{className:"container",children:(0,m.jsxs)("div",{className:"section-layout",children:[(0,m.jsx)(G,{images:t.images}),(0,m.jsx)(U,{data:t})]})})})}var K=a(6822),W=a(7555),B=a(6990),H=a(2901);function V(e){let{item:t,index:a,updateQuantity:s}=e;return(0,m.jsxs)("div",{className:"column center-y gap-15 display-num","data-num":t.quantity,children:[(0,m.jsx)("div",{className:"config-image",children:(0,m.jsx)(j.LazyLoadImage,{width:"100%",height:"100%",effect:"blur",src:t.img,alt:t.type})}),(0,m.jsx)("span",{className:"small-text text-main text-black up-case",children:t.type}),(0,m.jsxs)("span",{className:"xsmall-text text-main text-gray",children:[t.price.toLocaleString("ru-RU")," \u0440\u0443\u0431"]}),(0,m.jsxs)("div",{className:"config-adjustment grid-3 xsmall-text text-main text-black",children:[(0,m.jsx)("button",{className:"center-gr",onClick:()=>s(a,-1),children:"-"}),(0,m.jsx)("span",{className:"center-gr",children:t.quantity}),(0,m.jsx)("button",{className:"center-gr",onClick:()=>s(a,1),children:"+"})]})]})}function J(e){let{totalPrice:t,configuration:a}=e;const{handleAddToCart:s}=(0,D.A)();return(0,m.jsxs)("form",{action:"#",onSubmit:e=>s(e,a),className:"output column center-y",children:[(0,m.jsx)("span",{className:"text-main small-text text-black up-case",children:"\u0418\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0441\u0443\u043c\u043c\u0430:"}),(0,m.jsxs)("span",{className:"text-main small-text text-black",children:[t.toLocaleString("ru-RU")," \u0440\u0443\u0431"]}),(0,m.jsx)(O.A,{type:"submit",children:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})}const X=[{type:"3 - \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0439",price:12e4,quantity:0,img:a(8124)},{type:"2 - \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0439",price:8e4,quantity:0,img:a(4571)},{type:"1 - \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u044b\u0439",price:4e4,quantity:0,img:a(9790)},{type:"\u0443\u0433\u043b\u043e\u0432\u043e\u0439",price:6e4,quantity:0,img:a(4261)},{type:"\u043b\u0435\u0432\u044b\u0439",price:5e4,quantity:0,img:a(1896)},{type:"\u043f\u0440\u0430\u0432\u044b\u0439",price:5e4,quantity:0,img:a(6119)},{type:"\u043f\u0443\u0444",price:3e4,quantity:0,img:a(1658)}];function Y(e){let{price:t}=e;const[a,s]=(0,r.useState)(X),n=(e,t)=>{s((a=>{const s=[...a],n=s[e].quantity+t;return s[e].quantity=n>=0&&n<=9?n:s[e].quantity,s}))};return(0,m.jsx)("section",{id:"configuration",children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsxs)("div",{className:"text-center",children:[(0,m.jsx)("h2",{children:"\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043e\u0440"}),(0,m.jsxs)("span",{className:"text-main small-text text-black up-case",children:["\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435: \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0439 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u0439",(0,m.jsx)("br",{}),"\u0434\u0438\u0432\u0430\u043d \u0441 \u043d\u0430\u0448\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044c\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439"]})]}),(0,m.jsx)("div",{className:"section-layout",children:a.map(((e,t)=>(0,m.jsx)(V,{item:e,index:t,updateQuantity:n},t)))}),(0,m.jsx)(J,{configuration:a.filter(((e,t)=>e.quantity>0)),totalPrice:t+a.reduce(((e,t)=>e+t.price*t.quantity),0)})]})})}function ee(){const[e,t]=(0,c.ok)(),{catalog:a}=(0,l.g)(),r=parseInt(e.get("id")),{data:o,error:x,isLoading:u}=(0,n.A)([r,a,r+a],i.Gq);return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d.N,{mode:"wait",children:x?(0,m.jsx)(W.A,{message:null===x||void 0===x?void 0:x.message}):null===o?(0,m.jsx)(K.A,{level:-1}):o&&!u?(0,m.jsxs)(B.A,{children:[(0,m.jsx)(E,{data:o}),(0,m.jsx)(k,{data:o}),("sofas"===a||"beds"===a)&&(0,m.jsx)(Y,{price:o.price}),(0,m.jsx)(s.A,{})]},r):(0,m.jsx)(H.A,{},"loading")})})}},7589:(e,t,a)=>{a.d(t,{o:()=>i});var s=a(4131),n=a(4893);const i=(0,s.v)((0,n.Zr)(((e,t)=>({products:[],addProduct:t=>{e((e=>{if(e.products.some((e=>e.id===t.id))){return{products:e.products.map((e=>e.id===t.id?{...e,quantity:e.quantity+1}:e))}}return{products:[...e.products,{...t,quantity:1}]}}))},removeProduct:t=>{e((e=>({products:e.products.filter((e=>e.id!==t))})))},increaseQuantity:t=>{e((e=>({products:e.products.map((e=>e.id===t?{...e,quantity:e.quantity+1}:e))})))},decreaseQuantity:t=>{e((e=>({products:e.products.map((e=>e.id===t?{...e,quantity:Math.max(1,e.quantity-1)}:e))})))}})),{name:"fav-storage",getStorage:()=>localStorage}))},5882:(e,t,a)=>{e.exports=a.p+"static/media/bed-sketch.c329dab99285dbcfd8e6.jpg"},8124:(e,t,a)=>{e.exports=a.p+"static/media/config-1.7b2531b8335b45f5e2cf.jpg"},4571:(e,t,a)=>{e.exports=a.p+"static/media/config-2.a4f77a8e7755151ea369.jpg"},9790:(e,t,a)=>{e.exports=a.p+"static/media/config-3.a1bf2be29d4f590c8f8f.jpg"},4261:(e,t,a)=>{e.exports=a.p+"static/media/config-4.5d3011fdcde2dffcdc45.jpg"},1896:(e,t,a)=>{e.exports=a.p+"static/media/config-5.c8aa3c01dbde66a54fa2.jpg"},6119:(e,t,a)=>{e.exports=a.p+"static/media/config-6.d4757220d812fbc47598.jpg"},1658:(e,t,a)=>{e.exports=a.p+"static/media/config-7.838213e91534a42a2145.jpg"}}]);
//# sourceMappingURL=436.dfc3382e.chunk.js.map
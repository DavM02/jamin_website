"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[211],{7395:(e,a,s)=>{s.d(a,{A:()=>t});s(5043);const t=s.p+"static/media/arrow-left.663964bd5818d0ae86708ff85e9360e8.svg"},8150:(e,a,s)=>{s.d(a,{A:()=>t});s(5043);const t=s.p+"static/media/arrow-right.546c00a8f4fc58f1ad76de5d0c8aae18.svg"},8321:(e,a,s)=>{s.d(a,{A:()=>d});var t=s(5043),i=s(7395),n=s(8150),l=s(6255),r=s(579);const c=e=>{let{onPrev:a,onNext:s,itemsCount:c}=e;const[d,m]=(0,t.useState)(0),o=(0,l.A)();return(0,r.jsxs)("div",{className:"slider-nav row center-y s-between gap-20",children:[(0,r.jsx)("button",{type:"button",className:"center-gr",onClick:()=>{a(),o(700,(()=>{m((e=>0===e?c-2:e-1))}))},children:(0,r.jsx)("img",{width:8.5,src:i.A,alt:"left-arrow"})}),(0,r.jsx)("div",{className:"slider-indicator",children:(0,r.jsx)("div",{className:"indicator-line",style:{left:100/c*d+"%"}})}),(0,r.jsx)("button",{type:"button",className:"center-gr",onClick:()=>{s(),o(700,(()=>{m((e=>(e+1)%(c-1)))}))},children:(0,r.jsx)("img",{width:8.5,src:n.A,alt:"right-arrow"})})]})};function d(e){let{sliderData:a,wrapper:s,children:i}=e;const n=a.map(((e,a)=>({...e,id:a}))),[d,m]=(0,t.useState)(n),[o,x]=(0,t.useState)(0),[h,u]=(0,t.useState)(!1),p=(0,l.A)(),g=(0,t.useRef)(null);return(0,t.useEffect)((()=>()=>clearTimeout(g.current)),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"slider-container infinite-slider",children:[i,(0,r.jsx)("div",{className:"slider-wrapper",children:d.map(((e,a)=>(0,r.jsx)(s,{adjustTransition:h,transformIndex:a-o,el:e},e.id)))})]}),(0,r.jsx)(c,{onPrev:()=>{u(!0),p(700,(()=>{x((e=>e-1)),g.current=setTimeout((()=>{m((e=>[e[e.length-1],...e.slice(0,-1)])),x(0),u(!1)}),700)}))},onNext:()=>{u(!0),p(700,(()=>{x((e=>e+1)),g.current=setTimeout((()=>{m((e=>{const[a,...s]=e;return[...s,a]})),x(0),u(!1)}),700)}))},itemsCount:d.length})]})}},6255:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(5043);function i(){const[e,a]=(0,t.useState)(!1),s=(0,t.useRef)(null);return(0,t.useEffect)((()=>()=>{s.current&&clearTimeout(s.current)}),[]),function(t,i){e||(a(!0),i(),s.current=setTimeout((()=>{a(!1)}),t))}}},8211:(e,a,s)=>{s.r(a),s.d(a,{default:()=>te});var t=s(5043),i=s(6325),n=s(686),l=s(5467),r=s(6352),c=s(4647),d=s(6313),m=s(3216),o=s(5475),x=s(2042),h=s(8967),u=s(630),p=s(579);function g(e){let{headline:a}=e;const{allFilterParams:s,handleSearchParams:t}=(0,u.A)("description");return(0,p.jsxs)("div",{className:"main-filter column gap-15 xsmall-text text-main text-black up-case",children:[(0,p.jsx)("span",{className:""+(0===s.length?"active":"inactive"),onClick:()=>t("all"),children:a}),(0,p.jsx)("span",{className:""+(s.includes("discount")?"active":"inactive"),onClick:()=>t("discount"),children:"\u0441\u043a\u0438\u0434\u043a\u0438"}),(0,p.jsx)("span",{className:""+(s.includes("isNew")?"active":"inactive"),onClick:()=>t("isNew"),children:"\u043d\u043e\u0432\u0438\u043d\u043a\u0438"}),(0,p.jsx)("span",{className:""+(s.includes("bestseller")?"active":"inactive"),onClick:()=>t("bestseller"),children:"\u0431\u0435\u0441\u0442\u0441\u0435\u043b\u043b\u0435\u0440\u044b"})]})}function j(e){let{headline:a,dataLength:s,elHeight:i,isOpen:n,children:l}=e;const[r,c]=(0,t.useState)(n);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"row center-y s-between",children:[(0,p.jsx)("span",{className:"xsmall-text up-case",children:a}),(0,p.jsx)("span",{className:"open-accordion",style:{margin:r?"-3px 23px 0px 0px":"0 25px 0 0"},onClick:()=>c(!r),children:r?"\u2014":"+"})]}),(0,p.jsx)("div",{className:"accordion",style:{height:r?s*i+15*(s-1)+20+"px":"0px"},children:l})]})}function v(e){let{filterParam:a,data:s}=e;const{handleSearchParams:t,allFilterParams:i}=(0,u.A)(a);return(0,p.jsx)("ul",{className:"column gap-15",children:s.map(((e,a)=>(0,p.jsxs)("li",{className:"row center-y gap-10",children:[(0,p.jsxs)("div",{className:"custom-radio",children:[(0,p.jsx)("input",{checked:i.includes(e),onChange:a=>t(e),id:e,type:"checkbox",value:e}),(0,p.jsx)("div",{className:"input-state"})]}),(0,p.jsx)("span",{children:e})]},a)))})}function f(e){let{collections:a}=e;return(0,p.jsx)("div",{className:"collection-filter xsmall-text text-main text-black up-case",children:(0,p.jsx)(j,{headline:"\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438",dataLength:a.length,elHeight:30,isOpen:!0,children:(0,p.jsx)(v,{filterParam:"collection",data:a})})})}function b(e){let{materials:a}=e;return(0,p.jsx)("div",{className:"material-filter xxsmall-text text-main text-black",children:(0,p.jsx)(j,{headline:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b",dataLength:a.length,elHeight:20,isOpen:!0,children:(0,p.jsx)(v,{filterParam:"material",data:a})})})}function N(){return(0,p.jsx)("div",{className:"colors-filter xxsmall-text text-main text-black",children:(0,p.jsx)(j,{headline:"\u0446\u0432\u0435\u0442",dataLength:8,elHeight:20,isOpen:!0,children:(0,p.jsx)(v,{filterParam:"colors",data:["\u0441\u0435\u0440\u044b\u0439","\u0447\u0435\u0440\u043d\u044b\u0439","\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439","\u0431\u0435\u043b\u044b\u0439","\u0431\u0435\u0436\u0435\u0432\u044b\u0439","\u0437\u0435\u043b\u0435\u043d\u044b\u0439","\u0442\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439","\u0441\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439"]})})})}var w=s(1192);const k=e=>{var a,s;let{min:i,max:n,val:l}=e;const{handleSearchParams:r,allFilterParams:c}=(0,u.A)("min"),{handleSearchParams:d,allFilterParams:m}=(0,u.A)("max"),[o,x]=(0,t.useState)(Math.max(null!==(a=c[0])&&void 0!==a?a:i,i)),[h,g]=(0,t.useState)(Math.min(null!==(s=m[0])&&void 0!==s?s:n,n)),{scrollbarAccess:j}=(0,t.useContext)(w.x),v=(0,t.useRef)(null),f=(0,t.useCallback)((e=>Math.round((e-i)/(n-i)*100)),[i,n]);function b(){j.current.updatePluginOptions("overflow",{open:!1})}function N(){j.current.updatePluginOptions("overflow",{open:!0})}return(0,t.useEffect)((()=>{const e=f(o),a=f(h);v.current&&(v.current.style.left=`${e}%`,v.current.style.width=a-e+"%")}),[o,h,f]),(0,p.jsxs)("div",{className:"range-input",children:[(0,p.jsxs)("div",{className:"values row s-between gap-5 xxxsmall-text center-y",children:[(0,p.jsxs)("div",{className:"slider-left-value center-gr",children:[o.toLocaleString("ru-RU")," ",l]}),(0,p.jsx)("span",{children:"\u2014"}),(0,p.jsxs)("div",{className:"slider-right-valu center-gr",children:[h.toLocaleString("ru-RU")," ",l]})]}),(0,p.jsx)("input",{type:"range",min:i,max:n,value:o,onTouchStart:()=>N(),onTouchEnd:()=>{r(o),b()},onTouchCancel:()=>{r(o),b()},onMouseUp:()=>{r(o),b()},onChange:e=>{const a=Math.min(Number(e.target.value),h-1);x(a)},className:"thumb thumb-left",style:{zIndex:o>n-100&&"5"}}),(0,p.jsx)("input",{type:"range",min:i,max:n,value:h,onTouchStart:()=>N(),onTouchCancel:()=>{d(h),b()},onTouchEnd:()=>{d(h),b()},onMouseUp:()=>{d(h),b()},onChange:e=>{const a=Math.max(Number(e.target.value),o+1);g(a)},className:"thumb thumb-right"}),(0,p.jsxs)("div",{className:"slider",children:[(0,p.jsx)("div",{className:"slider-track"}),(0,p.jsx)("div",{ref:v,className:"slider-range"})]})]})};function y(e){let{min:a,max:s,val:t}=e;return(0,p.jsx)("div",{className:"price-filter xsmall-text text-main text-black up-case",children:(0,p.jsx)(j,{headline:"\u0446\u0435\u043d\u0430",dataLength:1,elHeight:65,isOpen:!0,children:(0,p.jsx)(k,{min:a,max:s,val:t})})})}function C(e){let{data:a}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{headline:a.headline}),(0,p.jsx)(f,{collections:a.collections}),(0,p.jsx)(b,{materials:a.materials}),(0,p.jsx)(y,{min:a.price.min,val:a.price.val,max:a.price.max}),(0,p.jsx)(N,{})]})}var A=s(3546),S=s(6990);function P(e){return(0,p.jsx)("article",{...e,id:"article",children:(0,p.jsx)(o.N_,{})})}var L=s(9634);function M(){return(0,p.jsxs)("div",{className:"add-to-favorites",children:[(0,p.jsx)("input",{type:"checkbox"}),(0,p.jsx)("svg",{width:"28",height:"25",viewBox:"-2 -1 30 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,p.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.000650381 6.49917C-0.0200806 5.03049 0.455348 3.59918 1.34726 2.44508C2.23918 1.29099 3.49338 0.484252 4.8997 0.160054C6.30602 -0.164144 7.77899 0.0139016 9.07178 0.664354C10.3646 1.31481 11.3986 2.39814 12.0006 3.73281C12.6041 2.39369 13.6424 1.30748 14.9404 0.65729C16.2384 0.00710175 17.7168 -0.167297 19.1263 0.163495C20.5358 0.494287 21.7903 1.31004 22.6782 2.47323C23.5661 3.63642 24.0332 5.0759 24.0006 6.54901C23.9291 8.42848 23.2881 10.2393 22.1658 11.7328C21.0431 13.2871 19.7227 14.6825 18.2392 15.8823C16.3827 17.4018 14.3879 18.737 12.282 19.8699L12.0006 19.9322L11.7193 19.7827C9.61342 18.6498 7.61863 17.3146 5.76212 15.7951C4.2786 14.5952 2.95817 13.1998 1.83551 11.6456C0.720273 10.1624 0.0797062 8.36573 0.000650381 6.49917Z",stroke:"black",strokeWidth:"1.5"})})]})}function T(e){let{item:a,el:s}=e;return(0,p.jsxs)("div",{className:"filter-item",style:{gridArea:s},children:[(0,p.jsx)(M,{}),a?(0,p.jsx)("div",{className:"placeholder",style:{height:"l"===s?"calc(var(--filter-item-img-height) * 2 + 125px)":"var(--filter-item-img-height)"},children:(0,p.jsx)(L.LazyLoadImage,{effect:"opacity",height:"inherit",width:"100%",src:a.img,alt:a.name,className:"image"})}):null,(0,p.jsx)("span",{className:"xxsmall-text text-main text-black up-case",children:a.name}),(0,p.jsxs)("span",{className:"xxxsmall-text text-main",children:[a.price.toLocaleString("ru-RU")," \u0440\u0443\u0431."]}),(0,p.jsx)("div",{className:"palette row gap-10",children:a.colors.map(((e,a)=>(0,p.jsx)("div",{style:{backgroundColor:`var(--${e})`,border:"white"===e?"1px solid #DDDDDD":"none"}},a)))})]})}function _(e){let{data:a}=e;const s=a.filter((e=>!1!==(null===e||void 0===e?void 0:e.isShown)));let t=0;return(0,p.jsx)("div",{className:"filter-display",children:a&&["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s"].slice(0,s.length>=9?s.length+1:s.length).map(((e,a)=>{if("j"===e)return(0,p.jsx)(P,{style:{gridArea:"j"}},"article");const i=s[t];return i&&t++,(0,p.jsx)(T,{el:e,item:i},i.id)}))})}var D=s(3278);function F(e){let{isLoading:a,searchParams:s,data:t}=e;const i=(0,m.Zp)(),n=t&&t.every((e=>!1===e.isShown));return(0,p.jsx)(A.N,{mode:"wait",children:!a&&t?(0,p.jsx)(S.A,{children:n?(0,p.jsxs)("div",{className:"no-results center-gr",children:[(0,p.jsx)("h3",{className:"up-case",children:"no results found"}),(0,p.jsx)(D.A,{onClick:()=>i("./"),children:"go back"})]}):(0,p.jsx)(_,{data:t})},s):(0,p.jsx)(S.A,{children:(0,p.jsx)("div",{className:"row center-x center-y",children:(0,p.jsx)("h2",{children:"Loading..."})})})})}const R=s.p+"static/media/filter.a4f0829c29ad21ceb10147669edea6eb.svg";const I=s.p+"static/media/sort.80fbb66127018c957111332b4732ed26.svg",O={popularity:(e,a)=>e.rating-a.rating,descending:(e,a)=>e.price-a.price,ascending:(e,a)=>a.price-e.price};function E(){var e;const[a,s]=(0,t.useState)(!1),[i,n]=(0,t.useState)(null),l=(0,m.zy)().pathname.split("/")[2],[r]=(0,o.ok)(),c=parseInt(null!==(e=r.get("page"))&&void 0!==e?e:1),{mutate:d}=(0,x.A)([l,c]),h=(0,t.useCallback)((e=>{n(e),d((a=>a?[...a].sort(O[e]):a),!1)}),[d]);return(0,p.jsxs)("div",{className:"sorting row gap-5 center-y",onClick:()=>s((e=>!e)),children:[(0,p.jsx)("img",{src:I,alt:"sort"}),(0,p.jsx)("span",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),(0,p.jsx)(A.N,{mode:"wait",children:a&&(0,p.jsx)(S.A,{className:"sorting-params column gap-15 xsmall-text text-main text-black",blur:!0,children:Object.entries({popularity:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c",descending:"\u0426\u0435\u043d\u0430: \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0430\u044f",ascending:"\u0426\u0435\u043d\u0430: \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0430\u044f"}).map((e=>{let[a,s]=e;return(0,p.jsx)("div",{children:(0,p.jsx)("span",{className:i===a?"active":"inactive",onClick:h.bind(null,a),children:s})},a)}))})})]})}var z=s(49),U=s(1352);function $(e){let{data:a,showMobileParams:s,setShowMobileParams:t}=e;return(0,p.jsxs)(U.A,{root:"modal-root",className:"filter-params",value:s,children:[(0,p.jsxs)("div",{className:"row s-between center-y",children:[(0,p.jsx)("span",{className:"text-heading text-black",children:"\u0444\u0438\u043b\u044c\u0442\u0440\u044b"}),(0,p.jsxs)("div",{className:"menu-bars active",onClick:()=>t(!1),children:[(0,p.jsx)("div",{}),(0,p.jsx)("div",{})]})]}),(0,p.jsx)(C,{data:a})]})}function H(e){let{data:a,setShowParams:s,query:i,isMobile:n}=e;const[l,r]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{n?s(!1):r(!1)}),[n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"filter-header",children:[(0,p.jsxs)("div",{className:"row gap-10 xxxsmall-text text-main text-black up-case",children:[(0,p.jsx)(o.N_,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,p.jsx)("span",{children:"/"}),(0,p.jsx)("span",{children:a.headline.split(" ")[1]})]}),(0,p.jsxs)("div",{className:"row s-between gap-10 xxsmall-text text-main text-black",children:[(0,p.jsxs)("div",{className:"filters row gap-5 center-y",onClick:()=>{n?r(!0):i&&s((e=>!e))},children:[(0,p.jsx)("img",{src:R,alt:"filter"}),(0,p.jsx)("span",{children:"\u0444\u0438\u043b\u044c\u0442\u0440\u044b"})]}),(0,p.jsx)(E,{})]})]}),(0,p.jsx)($,{data:a,setShowMobileParams:r,showMobileParams:l}),(0,p.jsx)(z.A,{root:"modal-root",value:l})]})}var q=s(1955),Z=s(5065);function B(e){var a;let{collections:s,materials:i,headline:n,price:l}=e;const r=(0,m.zy)().pathname.split("/")[2],[c]=(0,o.ok)(),d=parseInt(null!==(a=c.get("page"))&&void 0!==a?a:1),{data:g,error:j,isLoading:v,mutate:f}=(0,x.A)([r,d,18]),{data:b}=(0,x.A)([r],h.R),{handleFilter:N}=(0,u.A)(),[w,k]=(0,t.useState)(!1);(0,t.useEffect)((()=>{g&&N(f)}),[c,v]);const y=(0,q.A)("(max-width: 1023px)"),P=(0,q.A)("(max-width: 480px)");return(0,p.jsx)("section",{id:"filter",children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)(H,{isMobile:P,setShowParams:k,data:{collections:s,materials:i,headline:n,price:l},query:y&&!P}),(0,p.jsxs)("div",{className:"section-layout",children:[(0,p.jsx)(A.N,{initial:!1,mode:"wait",children:(!y&&!P||w)&&(0,p.jsx)(S.A,{blur:!0,className:"filter-params",children:(0,p.jsx)(C,{data:{collections:s,materials:i,headline:n,price:l}})})}),(0,p.jsx)(F,{isLoading:v,searchParams:c,data:g}),j&&(0,p.jsx)("div",{className:"row center-x center-y",children:(0,p.jsx)("h2",{children:j.message})}),b&&(0,p.jsx)(Z.A,{pagesCount:Math.ceil(b/17)})]})]})})}var W=s(8321),Y=s(2206),G=s(2970),J=s(8662),K=s(5068),Q=s(8576);function V(e){let{el:a,adjustTransition:s,transformIndex:t}=e;return(0,p.jsxs)("div",{className:"slider-item",style:{left:`calc((var(--moreproducts-slider-img-width) + 20px) * ${t})`,transition:s?"var(--transition) left 0.7s":"unset"},children:[(0,p.jsx)(M,{}),(0,p.jsx)("div",{className:"slider-image",style:{height:a.id%2?"var(--moreproducts-slider-img-height-even)":"var(--moreproducts-slider-img-height-odd)"},children:(0,p.jsx)(L.LazyLoadImage,{src:a.image,width:"100%",height:"100%",effect:"blur",alt:`slider-image-${a.id+1}`})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("span",{className:"xxsmall-text text-main text-black up-case",children:a.name}),(0,p.jsxs)("span",{className:"xxxsmall-text  text-main text-black",children:[a.price.toLocaleString("ru-RU")," \u0440\u0443\u0431."]})]})]})}function X(){const e=[{image:Y,name:"ramani",price:5e3},{image:G,name:"foster",price:15e3},{image:J,name:"Petrified",price:7e3},{image:K,name:"ivory",price:3e3},{image:Q,name:"foster",price:3e3},{image:Y,name:"ramani",price:5e3},{image:G,name:"foster",price:15e3},{image:J,name:"Petrified",price:7e3},{image:K,name:"ivory",price:3e3},{image:Q,name:"foster",price:3e3}];return(0,p.jsx)("section",{id:"more-products",children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsxs)("div",{className:"text-center",children:[(0,p.jsx)("h2",{children:"\u0435\u0449\u0435 \u0442\u043e\u0432\u0430\u0440\u044b"}),(0,p.jsx)("span",{className:"small-text text-main text-black up-case",children:"\u0432\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f"})]}),(0,p.jsx)(W.A,{sliderData:e,wrapper:V})]})})}function ee(e){let{el:a,adjustTransition:s,transformIndex:t}=e;return(0,p.jsxs)("div",{className:"slider-item",style:{left:`calc((var(--catalog-slider-img-width) + 20px) * ${t})`,transition:s?"var(--transition) left 0.7s":"unset"},children:[(0,p.jsx)("div",{className:"slider-image",children:(0,p.jsx)(L.LazyLoadImage,{src:a.image,width:"100%",height:"100%",effect:"blur",alt:`slider-image-${a.id+1}`})}),(0,p.jsx)("h6",{className:"text-black up-case",children:a.name})]})}function ae(e){let{sliderData:a}=e;return(0,p.jsx)("section",{id:"catalog-collections",children:(0,p.jsx)("div",{className:"container",children:(0,p.jsx)(W.A,{sliderData:a,wrapper:ee})})})}var se=s(5046);function te(){const e=[{name:"\u043a\u0430\u0440\u0442\u0438\u043d\u044b",image:n},{name:"\u0441\u0432\u0435\u0447\u0438",image:l},{name:"\u0432\u0430\u0437\u044b \u0438 \u043a\u0430\u0448\u043f\u043e",image:r},{name:"\u0437\u0435\u0440\u043a\u0430\u043b\u0430",image:c},{name:"\u0447\u0430\u0441\u044b",image:d},{name:"\u043a\u0430\u0440\u0442\u0438\u043d\u044b",image:n},{name:"\u0441\u0432\u0435\u0447\u0438",image:l},{name:"\u0432\u0430\u0437\u044b \u0438 \u043a\u0430\u0448\u043f\u043e",image:r},{name:"\u0437\u0435\u0440\u043a\u0430\u043b\u0430",image:c},{name:"\u0447\u0430\u0441\u044b",image:d}];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(se.A,{id:"decor-intro",posY:"32%",bg:i,text:{headline:"\u0434\u0435\u043a\u043e\u0440",description:"\u0418\u0437\u044b\u0441\u043a\u0430\u043d\u043d\u044b\u0435 \u0434\u0435\u0442\u0430\u043b\u0438 \u0434\u043b\u044f \u0443\u044e\u0442\u0430 \u0438 \u0441\u0442\u0438\u043b\u044f: \u043e\u0431\u043e\u0433\u0430\u0442\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u0430\u043a\u0446\u0435\u043d\u0442\u0430\u043c\u0438"}}),(0,p.jsx)(ae,{sliderData:e}),(0,p.jsx)(B,{price:{min:1e3,max:25e4,val:"\u0440\u0443\u0431"},headline:"\u0432\u0435\u0441\u044c \u0434\u0435\u043a\u043e\u0440",materials:["\u0442\u043a\u0430\u043d\u044c","\u043a\u043e\u0436\u0430","\u0441\u0442\u0435\u043a\u043b\u043e","\u043a\u0435\u0440\u0430\u043c\u0438\u043a\u0430","\u043c\u0440\u0430\u043c\u043e\u0440"],collections:["\u043a\u0430\u0440\u0442\u0438\u043d\u044b","\u0441\u0432\u0435\u0447\u0438","\u0432\u0430\u0437\u044b \u0438 \u043a\u0430\u0448\u043f\u043e","\u0437\u0435\u0440\u043a\u0430\u043b\u0430","\u0447\u0430\u0441\u044b"]}),(0,p.jsx)(X,{})]})}},2206:(e,a,s)=>{e.exports=s.p+"static/media/img_2.8a369b84f3272c288c76.webp"},6325:(e,a,s)=>{e.exports=s.p+"static/media/img_16.ce5378d03261964deece.webp"},2970:(e,a,s)=>{e.exports=s.p+"static/media/img_17.eec5ed508c9e9e92b469.webp"},5068:(e,a,s)=>{e.exports=s.p+"static/media/img_19.6e3ac11d8524d26c2ac0.webp"},8576:(e,a,s)=>{e.exports=s.p+"static/media/img_6.bc801b1981f1a0777cc1.webp"},8662:(e,a,s)=>{e.exports=s.p+"static/media/img_8.565e4b632f24e9bbcc5e.webp"},6313:(e,a,s)=>{e.exports=s.p+"static/media/img_10.ee6a0100be4b32cba406.jpg"},686:(e,a,s)=>{e.exports=s.p+"static/media/img_6.96dcd179591d51c7c613.jpg"},5467:(e,a,s)=>{e.exports=s.p+"static/media/img_7.ec293b3a045a6f81da91.jpg"},6352:(e,a,s)=>{e.exports=s.p+"static/media/img_8.9f0c0c66aee4b97f80f4.jpg"}}]);
//# sourceMappingURL=211.3efaf3ee.chunk.js.map
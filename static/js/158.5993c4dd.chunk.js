"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[158],{5046:(e,a,s)=>{s.d(a,{A:()=>n});s(5043);var t=s(579);function n(e){let{bg:a,posY:s,text:n,...l}=e;return(0,t.jsxs)("section",{...l,className:"intro center-gr",style:{background:`url(${a}) no-repeat`,"--posY":s},children:[(0,t.jsx)("div",{className:"mask-layer"}),(0,t.jsxs)("div",{className:"container text-center",children:[(0,t.jsx)("h2",{className:"text-light",children:n.headline}),n.description&&(0,t.jsx)("p",{className:"text-light small-text text-main up-case",dangerouslySetInnerHTML:{__html:n.description}})]})]})}},8934:(e,a,s)=>{s.d(a,{A:()=>r});var t=s(9634),n=s(3216),l=s(579);function r(e){let{el:a,height:s}=e;const r=(0,n.Zp)();return(0,l.jsxs)("div",{className:"news-item",onClick:()=>r(`/news/article/${a.title.toLowerCase().replace(/\s+/g,"_")}`),children:[(0,l.jsx)("div",{className:"news-image placeholder",style:s?{height:`${s}`}:{},children:(0,l.jsx)(t.LazyLoadImage,{src:a.image,width:"100%",height:"100%",effect:"blur",alt:`news-image-${a.id+1}`})}),(0,l.jsxs)("div",{className:"row s-between gap-10 xxxsmall-text text-main up-case",children:[(0,l.jsx)("span",{children:a.tag}),(0,l.jsx)("span",{children:a.date})]}),(0,l.jsx)("span",{className:"xsmall-text text-black text-main up-case",children:a.title}),(0,l.jsx)("p",{className:"xsmall-text text-black text-main",children:a.description})]})}},5065:(e,a,s)=>{s.d(a,{A:()=>o});var t=s(5043);const n=s.p+"static/media/pagination-arrow-left.df03b068cc2d9c293788f72e40958200.svg";const l=s.p+"static/media/pagination-arrow-right.09326ff90cb67244b048fb55c1d2b033.svg";var r=s(5475),i=s(1192);var c=s(579);function o(e){let{pagesCount:a,scrollOffset:s}=e;const{pages:o,activePage:d,handlePagination:x}=function(e,a){var s;const[n,l]=(0,t.useState)(e>5?[1,2,3,4,5,"...",e]:Array(e).fill(null).map(((e,a)=>a+1))),[c,o]=(0,r.ok)(),d=parseInt(null!==(s=c.get("page"))&&void 0!==s?s:1),{scrollbarAccess:x}=(0,t.useContext)(i.x);return{pages:n,activePage:d,handlePagination:s=>{s>e||s<=0||"..."===s||(x.current.scrollTo(0,a+110,500),setTimeout((()=>{e>5&&l(s>=5&&s+2<e?[1,"...",s-1,s,s+1,"...",e]:s+2>=e?[1,"...",e-4,e-3,e-2,e-1,e]:[1,2,3,4,5,"...",e]),c.set("page",s),o(c)}),500))}}}(a,s);return(0,c.jsx)("div",{className:"pagination",children:(0,c.jsxs)("div",{className:"row gap-30 center-y end-x",children:[(0,c.jsx)("div",{className:"prev",onClick:()=>x(d-1),children:(0,c.jsx)("img",{src:n,alt:"prev"})}),(0,c.jsx)("ul",{className:"row gap-10 xsmall-text text-main",children:o.map(((e,a)=>(0,c.jsx)("li",{style:{pointerEvents:"..."!==e?"all":"none"},className:d==e&&"..."!==e?"active":"inactive",onClick:()=>x(e),children:e},a)))}),(0,c.jsx)("div",{className:"next",onClick:()=>x(d+1),children:(0,c.jsx)("img",{src:l,alt:"next"})})]})})}},2901:(e,a,s)=>{s.d(a,{A:()=>l});s(5043);var t=s(6990),n=s(579);function l(){return(0,n.jsx)(t.A,{children:(0,n.jsx)("div",{className:"loading row center-x center-y",children:(0,n.jsx)("h2",{children:"Loading..."})})})}},7555:(e,a,s)=>{s.d(a,{A:()=>l});s(5043);var t=s(6990),n=s(579);function l(e){let{message:a}=e;return(0,n.jsx)(t.A,{className:"error row center-x center-y",children:(0,n.jsx)("h2",{className:"text-center",children:a})})}},6822:(e,a,s)=>{s.d(a,{A:()=>r});s(5043);var t=s(6188),n=s(3216),l=s(579);function r(){const e=(0,n.Zp)();return(0,l.jsxs)("div",{className:"no-results center-gr",children:[(0,l.jsx)("h3",{className:"up-case",children:"no results found"}),(0,l.jsx)(t.A,{onClick:()=>e("."),children:"go back"})]})}},630:(e,a,s)=>{s.d(a,{A:()=>n});var t=s(5475);function n(e){var a;const[s,n]=(0,t.ok)();return{handleSearchParams:function(a){const t=new URLSearchParams(s);if("min"===e||"max"===e)return t.set(e,a),void n(t);const l=t.getAll(e);if(l.includes(a)){const s=l.filter((e=>e!==a));t.delete(e),s.forEach((a=>t.append(e,a)))}else t.append(e,a);n(t)},handleFilter:function(e){const a={},t=[];let n=null,l=null;const r={"\u0441\u0435\u0440\u044b\u0439":"palette-gray-light","\u0447\u0435\u0440\u043d\u044b\u0439":"black","\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown","\u0431\u0435\u043b\u044b\u0439":"white","\u0431\u0435\u0436\u0435\u0432\u044b\u0439":"palette-beige","\u0437\u0435\u043b\u0435\u043d\u044b\u0439":"palette-green","\u0442\u0435\u043c\u043d\u043e-\u0441\u0435\u0440\u044b\u0439":"palette-gray","\u0441\u0432\u0435\u0442\u043b\u043e-\u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u044b\u0439":"palette-brown-light"},i=[];for(const[c,o]of s.entries())"page"!==c&&("min"===c?n=parseFloat(o)||0:"max"===c?l=parseFloat(o)||25e4:"description"===c?t.push(o):"colors"===c?i.push(r[o]):a[c]=a[c]?[...a[c],o]:[o]);e((e=>(console.log("again"),e.map((e=>{const s=Object.entries(a).every((a=>{let[s,t]=a;return t.includes(e[s])})),r=t.every((a=>!0===e[a])),c=(!l||e.price<=l)&&(!n||e.price>=n),o=0===i.length||e.colors.some((e=>i.includes(e)));return{...e,isShown:s&&r&&c&&o}})))),!1)},resetFilter:function(e){s.delete(e),n(s)},allFilterParams:null!==(a=s.getAll(e))&&void 0!==a?a:[]}}},8158:(e,a,s)=>{s.r(a),s.d(a,{default:()=>b});var t=s(4647),n=s(5046),l=s(5043),r=s(5475),i=s(2042),c=s(8967),o=s(630),d=s(5065),x=s(579);function h(){const{handleSearchParams:e,resetFilter:a,allFilterParams:s}=(0,o.A)("tag");return(0,x.jsx)("div",{className:"news-filter row center-x xsmall-text text-main up-case",children:(0,x.jsx)("div",{className:"row wrap",children:[{label:"\u0432\u0441\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",value:""},{label:"\u0442\u0440\u0435\u043d\u0434\u044b",value:"\u0442\u0440\u0435\u043d\u0434\u044b"},{label:"\u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435",value:"\u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435"},{label:"\u043e\u0431\u0437\u043e\u0440\u044b",value:"\u043e\u0431\u0437\u043e\u0440\u044b"},{label:"\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438",value:"\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438"}].map((t=>{let{label:n,value:l}=t;const r=s.includes(l)||""===l&&0===s.length;return(0,x.jsx)("div",{className:"news-filter-item "+(r?"active":"inactive"),onClick:()=>l?e(l):a("tag"),children:(0,x.jsx)("span",{children:n})},l)}))})})}var m=s(8934),u=s(3546),p=s(6990),g=s(6822),v=s(2901);function j(e){let{data:a,isLoading:s,searchParams:t}=e;const n=a&&a.filter((e=>!1!==(null===e||void 0===e?void 0:e.isShown))),l=a&&a.every((e=>!1===e.isShown));return(0,x.jsx)(u.N,{mode:"wait",children:!s&&a?(0,x.jsx)(p.A,{children:l?(0,x.jsx)(g.A,{}):(0,x.jsx)("div",{className:"section-layout",children:n.map(((e,a)=>(0,x.jsx)(m.A,{el:e},e.id)))})},t):(0,x.jsx)(v.A,{})})}var f=s(7555);function w(){var e;const[a]=(0,r.ok)(),s=parseInt(null!==(e=a.get("page"))&&void 0!==e?e:1),{data:t,error:n,isLoading:m,mutate:u}=(0,i.A)(["news",s,16]),{data:p}=(0,i.A)(["news"],c.R3),{handleFilter:g}=(0,o.A)();return(0,l.useEffect)((()=>{t&&g(u)}),[a,m]),(0,x.jsx)("section",{id:"news",children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsxs)("div",{className:"row gap-10 xxxsmall-text text-main text-black up-case",children:[(0,x.jsx)(r.N_,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),(0,x.jsx)("span",{children:"/"}),(0,x.jsx)("span",{children:"\u043d\u043e\u0432\u043e\u0441\u0442\u0438"})]}),(0,x.jsx)(h,{}),n?(0,x.jsx)(f.A,{message:n.message}):(0,x.jsx)(j,{isLoading:m,searchParams:a,data:t}),p&&(0,x.jsx)(d.A,{scrollOffset:350,pagesCount:Math.ceil(p/16)})]})})}const b=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.A,{bg:t,id:"news-intro",posY:"50%",text:{headline:"\u043d\u043e\u0432\u043e\u0441\u0442\u0438",description:"\u0421\u0432\u0435\u0436\u0438\u0435 \u0442\u0440\u0435\u043d\u0434\u044b \u0438 \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435: <br/> \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0438\u0437 \u043c\u0438\u0440\u0430 \u043c\u0435\u0431\u0435\u043b\u0438"}}),(0,x.jsx)(w,{})]})}},4647:(e,a,s)=>{e.exports=s.p+"static/media/img_9.0073356ab0a81852cb49.webp"}}]);
//# sourceMappingURL=158.5993c4dd.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{347:()=>{},1150:e=>{e.exports={floating:"ui_floating__DMDux",floatUpDown:"ui_floatUpDown__xeC1a",header:"ui_header__rIKLg",footer:"ui_footer__i5Etg",header_wrap:"ui_header_wrap__yIlSJ",header_menu_wrap:"ui_header_menu_wrap__vpQ8e",header_left:"ui_header_left__VySrU",logo:"ui_logo__ahYcV",menus:"ui_menus__blr9O",header_right:"ui_header_right__e0vQ_",video_wrap:"ui_video_wrap__9IknY",text_title_big:"ui_text_title_big__3ZLHk",text_title:"ui_text_title__G7jeH",text_title_2:"ui_text_title_2__0g6CV",text_description:"ui_text_description__Z5SMk",text_description_2:"ui_text_description_2__kJPuR",default_btn:"ui_default_btn__4WcWY",headline:"ui_headline__DGuGg",awards:"ui_awards__DryUZ",award:"ui_award__msvBS",image:"ui_image__XWMm0",contest_info:"ui_contest_info__1HJj_",contest_name:"ui_contest_name__uN3tT",contest_award:"ui_contest_award__8yHSa",contest_people:"ui_contest_people__oFLfr",contest_date:"ui_contest_date__KoHL_",contest_bottom:"ui_contest_bottom__Vx_9H",qna_wrap:"ui_qna_wrap__rYkq8",qna:"ui_qna__Sfe_7",qna_a:"ui_qna_a__LZDU3",curriculum_wrap:"ui_curriculum_wrap__SynLK",curriculums:"ui_curriculums__VLoBM",curriculum_info_wrap:"ui_curriculum_info_wrap__ihzwj",curriculum:"ui_curriculum__jFIFk",active:"ui_active__S_MGZ",curriculum_info:"ui_curriculum_info__x2LPz",team_activity_wrap:"ui_team_activity_wrap__qmyvi",team_activity:"ui_team_activity__vmiLU",mobile_show:"ui_mobile_show__q5Y3s",mobile_menu_wrap:"ui_mobile_menu_wrap__J8Rnf",close_btn:"ui_close_btn__7Dlde",mobile_menu:"ui_mobile_menu__opu4W",menu_btn:"ui_menu_btn__Rx4Lv",mobile_hide:"ui_mobile_hide__uwzrN"}},2742:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var n=r(5155),o=r(2115),i=r(6766),a=r(6874),s=r.n(a),u=r(1150),l=r.n(u),c=r(6544),_=r(9911),f=r(748);function d(){let[e,t]=(0,o.useState)(0),[r,a]=(0,o.useState)(!1),[u,d]=(0,o.useState)(!0),[p,h]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let r=()=>{let r=window.scrollY;a(r>e&&r>75),d(r<=10),t(r)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[e]),(0,n.jsxs)("header",{className:l().header,style:{height:"75px",position:"fixed",top:0,left:0,right:0,zIndex:1e3,transition:"transform 0.3s ease, background-color 0.3s ease",transform:r?"translateY(-100%)":"translateY(0)",backgroundColor:"#000"},children:[(0,n.jsx)("div",{className:l().header_wrap,children:(0,n.jsxs)("div",{className:l().header_menu_wrap,children:[(0,n.jsxs)("div",{className:l().header_left,children:[(0,n.jsxs)(s(),{className:l().logo,href:"/",children:[(0,n.jsx)(i.default,{src:"/ASC.png",width:100,height:100,alt:"logo"}),(0,n.jsx)("span",{style:{fontWeight:600,fontSize:"24px"},children:"ASC"})]}),(0,n.jsxs)("div",{className:l().menus,children:[(0,n.jsx)("div",{className:l().menu,children:(0,n.jsx)(s(),{href:"/",children:"Home"})}),(0,n.jsx)("div",{className:l().menu,children:"Blog"}),(0,n.jsx)("div",{className:l().menu,children:(0,n.jsx)(s(),{href:"/qna",children:"Q&A"})})]})]}),(0,n.jsxs)("div",{className:l().header_right,children:[(0,n.jsx)("div",{className:l().mobile_hide,children:(0,n.jsxs)(c.A,{onClick:()=>{},style:{fontSize:"15px",padding:"10px 25px"},children:["Contact Us ",(0,n.jsx)(_.Z0P,{})]})}),(0,n.jsx)("div",{className:l().mobile_show,onClick:()=>{h(!0)},children:(0,n.jsx)(f.fF8,{style:{fontSize:"30px"}})})]})]})}),(0,n.jsx)("div",{className:l().mobile_show,children:(0,n.jsxs)("div",{className:l().mobile_menu_wrap,style:{zIndex:9999,transform:p?"translateY(0)":"translateY(-100%)"},children:[(0,n.jsx)("div",{className:l().close_btn,onClick:()=>{h(!1)},children:(0,n.jsx)(f.WQq,{})}),(0,n.jsxs)("div",{className:l().mobile_menu,children:[(0,n.jsx)("div",{className:l().menu_btn,children:(0,n.jsx)(s(),{href:"/",onClick:()=>{h(!1)},children:"Home"})}),(0,n.jsx)("div",{className:l().menu_btn,children:"Blog"}),(0,n.jsx)("div",{className:l().menu_btn,children:(0,n.jsx)(s(),{href:"/qna",onClick:()=>{h(!1)},children:"Q&A"})}),(0,n.jsxs)(c.A,{onClick:()=>{},style:{fontSize:"15px",padding:"10px 25px",marginTop:"50px",width:"100%"},children:["Contact Us ",(0,n.jsx)(_.Z0P,{})]})]})]})})]})}},2757:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return s},urlObjectKeys:function(){return a}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",a=e.pathname||"",s=e.hash||"",u=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(l+=":"+e.port)),u&&"object"==typeof u&&(u=String(n.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==l?(l="//"+(l||""),a&&"/"!==a[0]&&(a="/"+a)):l||(l=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),""+i+l+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+s}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return i(e)}},6544:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(5155),o=r(1150),i=r.n(o);function a(e){let{children:t,onClick:r,style:o}=e;return(0,n.jsx)("button",{style:o,className:i().default_btn,onClick:()=>r,children:t})}},6874:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let n=r(8229),o=r(5155),i=n._(r(2115)),a=r(2757),s=r(5227),u=r(9818),l=r(6654),c=r(9991),_=r(5929);r(3230);let f=r(4930);function d(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let p=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:p,children:h,prefetch:m=null,passHref:g,replace:x,shallow:y,scroll:b,onClick:v,onMouseEnter:j,onTouchStart:w,legacyBehavior:N=!1,...S}=e;r=h,N&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let P=i.default.useContext(s.AppRouterContext),E=!1!==m,C=null===m?u.PrefetchKind.AUTO:u.PrefetchKind.FULL,{href:k,as:O}=i.default.useMemo(()=>{let e=d(a);return{href:e,as:p?d(p):e}},[a,p]);N&&(n=i.default.Children.only(r));let A=N?n&&"object"==typeof n&&n.ref:t,L=i.default.useCallback(e=>(E&&null!==P&&(0,f.mountLinkInstance)(e,k,P,C),()=>{(0,f.unmountLinkInstance)(e)}),[E,k,P,C]),T={ref:(0,l.useMergedRef)(L,A),onClick(e){N||"function"!=typeof v||v(e),N&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),P&&!e.defaultPrevented&&!function(e,t,r,n,o,a,s){let{nodeName:u}=e.currentTarget;!("A"===u.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),i.default.startTransition(()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,P,k,O,x,y,b)},onMouseEnter(e){N||"function"!=typeof j||j(e),N&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),P&&E&&(0,f.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){N||"function"!=typeof w||w(e),N&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),P&&E&&(0,f.onNavigationIntent)(e.currentTarget)}};return(0,c.isAbsoluteUrl)(O)?T.href=O:N&&!g&&("a"!==n.type||"href"in n.props)||(T.href=(0,_.addBasePath)(O)),N?i.default.cloneElement(n,T):(0,o.jsx)("a",{...S,...T,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8244:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});var n=r(5155),o=r(2115),i=r(1150),a=r.n(i);function s(){let[e,t]=(0,o.useState)(0),[r,i]=(0,o.useState)(!1),[s,u]=(0,o.useState)(!0);return(0,n.jsx)("footer",{className:a().footer,style:{minHeight:"200px",backgroundColor:"#333"}})}},8740:e=>{e.exports={style:{fontFamily:"'pretendard', 'pretendard Fallback'"},className:"__className_fde3a9",variable:"__variable_fde3a9"}},8859:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9064:(e,t,r)=>{Promise.resolve().then(r.bind(r,8244)),Promise.resolve().then(r.t.bind(r,347,23)),Promise.resolve().then(r.t.bind(r,8740,23)),Promise.resolve().then(r.bind(r,2742))},9991:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return p},MiddlewareNotFoundError:function(){return x},MissingStaticPage:function(){return g},NormalizeError:function(){return h},PageNotFoundError:function(){return m},SP:function(){return f},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return s},isAbsoluteUrl:function(){return i},isResSent:function(){return l},loadGetInitialProps:function(){return _},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return y}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function _(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await _(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n)throw Object.defineProperty(Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let f="undefined"!=typeof performance,d=f&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class p extends Error{}class h extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}}},e=>{var t=t=>e(e.s=t);e.O(0,[834,615,711,206,751,441,684,358],()=>t(9064)),_N_E=e.O()}]);
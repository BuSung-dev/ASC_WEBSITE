(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[595],{1150:e=>{e.exports={floating:"ui_floating__DMDux",floatUpDown:"ui_floatUpDown__xeC1a",header:"ui_header__rIKLg",footer:"ui_footer__i5Etg",header_wrap:"ui_header_wrap__yIlSJ",header_menu_wrap:"ui_header_menu_wrap__vpQ8e",header_left:"ui_header_left__VySrU",logo:"ui_logo__ahYcV",menus:"ui_menus__blr9O",header_right:"ui_header_right__e0vQ_",video_wrap:"ui_video_wrap__9IknY",text_title_big:"ui_text_title_big__3ZLHk",text_title:"ui_text_title__G7jeH",text_title_2:"ui_text_title_2__0g6CV",text_description:"ui_text_description__Z5SMk",text_description_2:"ui_text_description_2__kJPuR",default_btn:"ui_default_btn__4WcWY",headline:"ui_headline__DGuGg",awards:"ui_awards__DryUZ",award:"ui_award__msvBS",image:"ui_image__XWMm0",contest_info:"ui_contest_info__1HJj_",contest_name:"ui_contest_name__uN3tT",contest_award:"ui_contest_award__8yHSa",contest_people:"ui_contest_people__oFLfr",contest_date:"ui_contest_date__KoHL_",contest_bottom:"ui_contest_bottom__Vx_9H",qna_wrap:"ui_qna_wrap__rYkq8",qna:"ui_qna__Sfe_7",qna_a:"ui_qna_a__LZDU3",curriculum_wrap:"ui_curriculum_wrap__SynLK",curriculums:"ui_curriculums__VLoBM",curriculum_info_wrap:"ui_curriculum_info_wrap__ihzwj",curriculum:"ui_curriculum__jFIFk",active:"ui_active__S_MGZ",curriculum_info:"ui_curriculum_info__x2LPz",team_activity_wrap:"ui_team_activity_wrap__qmyvi",team_activity:"ui_team_activity__vmiLU",mobile_show:"ui_mobile_show__q5Y3s",mobile_menu_wrap:"ui_mobile_menu_wrap__J8Rnf",close_btn:"ui_close_btn__7Dlde",mobile_menu:"ui_mobile_menu__opu4W",menu_btn:"ui_menu_btn__Rx4Lv",mobile_hide:"ui_mobile_hide__uwzrN"}},6191:e=>{e.exports={page:"page_page__cITjb",main:"page_main__xXfsr",wrap:"page_wrap__JOMcV",content:"page_content__5y_VA",content_center:"page_content_center__ZT8mz",content_default:"page_content_default__veqbE",introduction:"page_introduction__7ld9W",award_wrap:"page_award_wrap__B51g2",intro_left:"page_intro_left__peWme",intro_right:"page_intro_right__WWd8s"}},6884:(e,_,t)=>{"use strict";t.d(_,{A:()=>s});var i=t(5155),a=t(802),r=t(9088),n=t(2115);function s(e){let{children:_,style:t,className:r}=e,s=(0,n.useRef)(null);return(0,n.useEffect)(()=>{a.os.fromTo(s.current,{opacity:0,x:-100},{opacity:1,x:0,duration:1,ease:"power2.out",scrollTrigger:{trigger:s.current,start:"top 80%",toggleActions:"play none none none"}})},[]),(0,i.jsx)("div",{ref:s,style:t,className:r,children:_})}a.os.registerPlugin(r.u)},7771:(e,_,t)=>{Promise.resolve().then(t.bind(t,9250))},9250:(e,_,t)=>{"use strict";t.r(_),t.d(_,{default:()=>d});var i=t(5155),a=t(6191),r=t.n(a),n=t(1150),s=t.n(n),o=t(6884),l=t(802),c=t(9088),u=t(2115);function p(e){let{question:_,answer:t}=e;(0,u.useRef)(null);let[a,r]=(0,u.useState)(!1);return(0,i.jsxs)("div",{className:s().qna,onClick:()=>{r(!a)},style:{backgroundColor:a?"rgba(0,255,0,0.01)":"",border:a?"2px solid var(--main-color)":"2px solid rgba(0,0,0,0.05)"},children:[(0,i.jsxs)("div",{style:{gap:"15px",display:"flex"},children:[(0,i.jsx)("span",{className:s().text_description,style:{fontWeight:500,color:a?"rgba(0,0,0,0.7)":"rgba(0,0,0,0.4)"},children:"Q"}),(0,i.jsx)("span",{className:s().text_description_2,style:{color:a?"rgba(0,0,0,0.7)":"rgba(0,0,0,0.4)"},children:_})]}),(0,i.jsxs)("div",{className:s().qna_a,style:{display:"block",height:a?"calc-size(auto, size)":"0px"},children:[(0,i.jsx)("hr",{style:{opacity:a?"1":"0",marginTop:a?"25px":"0",marginBottom:"25px",border:"none",backgroundColor:"rgba(0,0,0,0.1)",height:"1px"}}),(0,i.jsxs)("div",{style:{gap:"15px",display:"flex",opacity:a?"1":"0"},children:[(0,i.jsx)("span",{className:s().text_description,style:{fontWeight:500,color:"rgba(0,0,0,0.7)"},children:"A"}),(0,i.jsx)("span",{className:s().text_description_2,style:{color:"rgba(0,0,0,0.7)"},children:t})]})]})]})}function d(){let[e,_]=(0,u.useState)({});return(0,u.useEffect)(()=>{fetch("/data/questions.json").then(async e=>{_(await e.json())})},[]),(0,i.jsx)("div",{className:r().page,children:(0,i.jsx)("main",{className:r().main,children:(0,i.jsx)("div",{className:"".concat(r().wrap),style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,i.jsx)(o.A,{className:"",style:{},children:(0,i.jsxs)("div",{className:"".concat(r().content_default),style:{textAlign:"left",width:"100%",maxWidth:"1320px",marginTop:"50px"},children:[(0,i.jsx)("p",{className:s().text_description,style:{fontWeight:500,color:"rgba(0,0,0,0.5)"},children:"Q&A"}),(0,i.jsx)("p",{className:s().text_title,style:{fontWeight:500,color:"rgba(0,0,0,0.7)"},children:"자주 묻는 질문"}),(0,i.jsx)("p",{className:s().text_description,style:{color:"rgba(0,0,0,0.6)"},children:"질문이 있으신가요?"}),(0,i.jsx)("hr",{style:{marginTop:"30px",border:"none",borderTop:"2px solid rgba(0,0,0,0.1)"}}),(0,i.jsx)("div",{className:s().qna_wrap,style:{marginTop:"40px"},children:e.questions?e.questions.map((e,_)=>(0,i.jsx)(p,{question:e.question,answer:e.answer},_)):""})]})})})})})}l.os.registerPlugin(c.u)}},e=>{var _=_=>e(e.s=_);e.O(0,[834,592,737,441,684,358],()=>_(7771)),_N_E=e.O()}]);
import{d as $,y as V,l as g,L as D,o as m,e as f,r as w,g as t,t as n,f as s,aw as z,B as L,V as B,s as x,ax as b,j as d,h as r,F,x as M,ay as H,O as S,c as I,w as T,k as N}from"./app-DuJPpBXQ.js";function ee(l,a){return Math.random()*(a-l)+l}function te(l,a){let e,i=!1;return()=>{e&&clearTimeout(e),i?e=setTimeout(l,a):(l(),i=!0,setTimeout(()=>{i=!1},a))}}const P={class:"vc-site-live-time"},Y={"mx-1":""},j={"mx-1":""},A={"mx-1":""},E={"mx-1":""},O=$({__name:"VCLiveTime",props:{startTime:{}},setup(l){const a=l,{t:e}=V(),i=g(0),o=g(0),p=g(0),h=g(0);function y(){const c=new Date(a.startTime),u=new Date().getTime()-c.getTime(),v=60*1e3,_=60*v,C=24*_;i.value=Math.floor(u/C),o.value=Math.floor(u%C/60/60/1e3),p.value=Math.floor(u%_/60/1e3),h.value=Math.floor(u%v/1e3)}return D(()=>{setInterval(y,1e3)}),(c,k)=>(m(),f("div",P,[w(c.$slots,"live-time-before"),t("span",Y,n(s(e)("time.day",i.value)),1),t("span",j,n(s(e)("time.hour",o.value)),1),t("span",A,n(s(e)("time.minute",p.value)),1),t("span",E,n(s(e)("time.second",h.value)),1),w(c.$slots,"live-time-after")]))}}),q={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},G={key:0,class:"beian",m:"y-2"},J={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},K={class:"copyright flex justify-center items-center gap-2",p:"1"},Q=["href","title"],R={key:1,class:"powered",m:"2"},U=["innerHTML"],W=["href","title"],X=$({__name:"YunFooter",setup(l){const{t:a}=V(),e=z(),i=L(),o=B(),p=new Date().getFullYear(),h=x(()=>p===o.value.footer.since),y=x(()=>a("footer.powered",[`<a href="${b.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${b.version}`])),c=x(()=>o.value.footer.icon||{url:b.repository.url,name:"i-ri-cloud-line",title:b.name});return(k,u)=>{var v,_;return m(),f("footer",q,[(v=s(o).footer.beian)!=null&&v.enable&&s(o).footer.beian.icp?(m(),f("div",G,[t("a",J,n(s(o).footer.beian.icp),1)])):d("v-if",!0),t("div",K,[t("span",null,[u[0]||(u[0]=r(" © ")),h.value?d("v-if",!0):(m(),f(F,{key:0},[r(n(s(o).footer.since)+" - ",1)],64)),r(" "+n(s(p)),1)]),(_=s(o).footer.icon)!=null&&_.enable?(m(),f("a",{key:0,class:M(["inline-flex",s(o).footer.icon.animated?"animate-pulse":""]),href:c.value.url,target:"_blank",title:c.value.title},[t("div",{class:M(c.value.name)},null,2)],10,Q)):d("v-if",!0),t("span",null,n(s(i).author.name),1)]),s(o).footer.powered?(m(),f("div",R,[t("span",{innerHTML:y.value},null,8,U),u[1]||(u[1]=r(" | ")),t("span",null,[r(n(s(a)("footer.theme"))+" - ",1),t("a",{href:s(o).pkg.repository.url,title:s(o).pkg.name,target:"_blank"},n(H(s(e).theme)),9,W),r(" v"+n(s(o).pkg.version),1)])])):d("v-if",!0),w(k.$slots,"default")])}}}),se=$({__name:"YunFooter",setup(l){return S("//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"),(a,e)=>{const i=O;return m(),I(X,null,{default:T(()=>[d(" 自定义页脚内容 "),e[2]||(e[2]=t("a",{href:"https://icp.gov.moe/?keyword=20249936",target:"_blank"},"萌ICP备20249936号",-1)),e[3]||(e[3]=t("div",null,[r("本站总访问量 "),t("span",{id:"busuanzi_value_site_pv"}),r(" 次")],-1)),e[4]||(e[4]=t("div",null,[r("本站访客数 "),t("span",{id:"busuanzi_value_site_uv"}),r(" 人次")],-1)),N(i,{"start-time":"2023-12-17"},{"live-time-before":T(()=>e[0]||(e[0]=[t("span",null,"本站已运行",-1)])),"live-time-after":T(()=>e[1]||(e[1]=[t("span",null,null,-1)])),_:1})]),_:1})}}});export{se as _,ee as r,te as t};

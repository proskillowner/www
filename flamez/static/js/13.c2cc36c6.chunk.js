(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1396:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(41),i=n(60),o=n(782),s=n(49),u=n(365),l=n(371),j=n(2),b=n(13),a=n(903),d=n(84),O=n(0),x=function(){var t=Object(b.b)().t;return Object(O.jsx)(j.n,{mb:"24px",children:Object(O.jsxs)(j.o,{children:[Object(O.jsx)(d.a,{to:"/",children:t("Home")}),Object(O.jsx)(d.a,{to:"/prediction",children:t("Prediction")}),Object(O.jsx)(j.fc,{children:t("Leaderboard")})]})})},f=function(){var t=Object(b.b)().t;return Object(O.jsxs)(a.a,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(j.Y,{as:"h1",scale:"xxl",color:"secondary",children:t("Leaderboard")})]})},h=n(392),p=n(403),m=n(253),g=n(393);var v,B,S,w,y,W,N,k,C,D,L,F=n(64),A=n(367),R=n(5),T=n(51),I=n(8),z=n(9),P=n(4),M=n(37),U=n(185),V=n(368),H=n(96),_=n(106),E=["children"],q=["amount","textPrefix","textColor"],X=function(t){var e=t.children,n=Object(T.a)(t,E);return Object(O.jsx)(j.W,Object(R.a)(Object(R.a)({alignItems:"center",justifyContent:"space-between"},n),{},{children:e}))},Y=function(t){var e=t.amount,n=t.textPrefix,c=void 0===n?"":n,r=t.textColor,i=void 0===r?"text":r,o=Object(T.a)(t,q),s=Object(_.g)().times(Math.abs(e)).toNumber();return e?Object(O.jsxs)(j.W,Object(R.a)(Object(R.a)({flexDirection:"column",alignItems:"flex-end"},o),{},{children:[Object(O.jsx)(j.fc,{fontWeight:"bold",color:i,children:"".concat(c).concat(e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6}))}),Object(O.jsx)(j.fc,{fontSize:"12px",color:"textSubtle",lineHeight:1,children:"~$".concat(s.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})]})):null},Q=function(t){var e=t.amount,n=Object(b.b)().t;return Object(O.jsxs)(X,{mb:"4px",children:[Object(O.jsx)(j.fc,{fontSize:"12px",color:"textSubtle",children:n("Net Winnings (BNB)")}),Object(O.jsx)(Y,{amount:e,textPrefix:e>0?"+":"",textColor:e>0?"success":"failure"})]})},G=n(3),J=n.n(G),K=n(12),$=n(806),Z=n.n($),tt=n(251),et=n.n(tt),nt=P.e.div(v||(v=Object(z.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  height: 32px;\n  min-width: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n"])),(function(t){var e=t.theme,n=t.bgColor;return e.colors[n]})),ct=P.e.div(B||(B=Object(z.a)(["\n  color: #fff;\n  display: none;\n  text-transform: uppercase;\n\n  "," {\n    display: block;\n    margin-left: 4px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),rt=function(t){var e=t.position,n=Object(b.b)().t,c=e===s.a.BULL,r=c?"success":"failure",i=c?Object(O.jsx)(j.h,{width:"24px",color:"white"}):Object(O.jsx)(j.d,{width:"24px",color:"white"});return Object(O.jsxs)(nt,{bgColor:r,children:[i,Object(O.jsx)(ct,{children:n(c?"Up":"Down")})]})},it=function(t){var e=t.numberOfBets,n=void 0===e?5:e,r=t.account,i=Object(c.useState)(!1),o=Object(I.a)(i,2),s=o[0],u=o[1],l=Object(c.useState)([]),a=Object(I.a)(l,2),d=a[0],x=a[1],f=Object(b.b)().t,h=et()(d,["round.epoch"],["desc"]);return Object(c.useEffect)((function(){(function(){var t=Object(K.a)(J.a.mark((function t(){var e;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,Object(F.e)({user:r.toLowerCase()},n);case 4:e=t.sent,x(e.map(F.s));case 6:return t.prev=6,u(!1),t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[1,,6,9]])})));return function(){return t.apply(this,arguments)}})()()}),[r,n,u,x]),Object(O.jsxs)(j.bc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.gc,{children:f("Round")}),Object(O.jsx)(j.gc,{children:f("Direction")}),Object(O.jsx)(j.gc,{textAlign:"right",children:f("Winnings (BNB)")})]})}),Object(O.jsx)("tbody",{children:s?Z()(n).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.dc,{children:Object(O.jsx)(j.Sb,{width:"80px"})}),Object(O.jsx)(j.dc,{children:Object(O.jsx)(j.Sb,{width:"60px",height:"32px"})}),Object(O.jsx)(j.dc,{children:Object(O.jsx)(j.Sb,{width:"80px"})})]},t)})):h.map((function(t){var e=t.position===t.round.position;return Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.dc,{textAlign:"center",fontWeight:"bold",children:t.round.epoch.toLocaleString()}),Object(O.jsx)(j.dc,{textAlign:"center",children:Object(O.jsx)(rt,{position:t.position})}),Object(O.jsx)(j.dc,{textAlign:"right",children:Object(O.jsx)(Y,{amount:e?t.claimedNetBNB:t.amount,textPrefix:e?"+":"-",textColor:e?"success":"failure"})})]},t.id)}))})]})},ot=function(t){var e=t.account,n=Object(b.b)().t,r=Object(c.useState)(!1),i=Object(I.a)(r,2),o=i[0],s=i[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(j.W,{alignItems:"center",justifyContent:"space-between",px:"24px",py:"32px",borderBottom:"1px solid",borderColor:"cardBorder",style:{cursor:"pointer"},onClick:function(){return s(!o)},children:[Object(O.jsx)(j.fc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",children:n("Last %num% Bets",{num:5})}),o?Object(O.jsx)(j.H,{}):Object(O.jsx)(j.K,{})]}),o&&Object(O.jsx)(it,{account:e})]})},st=function(t){var e=t.account,n=Object(b.b)().t;return Object(O.jsxs)(j.n,{p:"24px",children:[Object(O.jsx)(j.fc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",mb:"16px",children:n("Last %num% Bets",{num:5})}),Object(O.jsx)(j.v,{children:Object(O.jsx)(it,{account:e})})]})},ut=Object(P.e)(j.ib)(S||(S=Object(z.a)(["\n  color: ",";\n\n  svg {\n    fill: ",";\n  }\n"])),(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.text})),lt=function(t){var e,n,c,r,i,u=t.account,l=t.onDismiss,a=t.onBeforeDismiss,d=Object(b.b)().t,x=Object(H.a)().theme,f=Object(o.u)(u),h=Object(U.b)(u),p=Object(o.q)()===s.c.LOADING,m=Object(j.Bc)().isDesktop;return Object(O.jsxs)(j.zb,{minWidth:"320px",children:[Object(O.jsxs)(j.Ab,{background:x.colors.gradients.bubblegum,children:[Object(O.jsxs)(j.W,{alignItems:"center",style:{flex:1},children:[Object(O.jsx)(j.n,{width:["64px",null,null,null,null,null,"96px"],mr:"16px",children:Object(O.jsx)(j.Mb,{src:"/images/nfts/".concat(null===(e=h.nft)||void 0===e||null===(n=e.images)||void 0===n?void 0:n.md),height:96,width:96})}),Object(O.jsxs)(j.n,{children:[h.username&&Object(O.jsx)(j.Y,{scale:"lg",mb:"8px",children:h.username}),Object(O.jsx)(ut,{href:Object(M.e)(u,"address"),children:Object(V.a)(u)})]})]}),Object(O.jsx)(j.bb,{variant:"text",onClick:function(){a&&a(),l()},"aria-label":"Close the dialog",children:Object(O.jsx)(j.M,{color:"text",width:"24px"})})]}),null===f?Object(O.jsx)(j.fc,{p:"32px",textAlign:"center",fontWeight:"bold",children:d("No results found.")}):Object(O.jsxs)(j.n,{maxHeight:["500px",null,null,null,null,null,"none"],overflowY:"auto",children:[Object(O.jsxs)(j.X,{gridTemplateColumns:["1fr",null,null,null,null,null,"repeat(4, 1fr)"],gridGap:"16px",p:"24px",borderBottom:"1px solid",borderColor:"cardBorder",children:[Object(O.jsxs)(j.n,{children:[Object(O.jsx)(j.fc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Net Winnings")}),p?Object(O.jsx)(j.Sb,{}):Object(O.jsx)(Y,{amount:null===f||void 0===f?void 0:f.netBNB,textPrefix:(null===f||void 0===f?void 0:f.netBNB)>0?"+":"",textColor:(null===f||void 0===f?void 0:f.netBNB)>0?"success":"failure",alignItems:"flex-end"})]}),Object(O.jsxs)(j.n,{children:[Object(O.jsx)(j.fc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Win Rate")}),p?Object(O.jsx)(j.Sb,{}):Object(O.jsx)(j.fc,{fontWeight:"bold",children:"".concat(null===f||void 0===f||null===(c=f.winRate)||void 0===c?void 0:c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsxs)(j.n,{children:[Object(O.jsx)(j.fc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Won")}),p?Object(O.jsx)(j.Sb,{}):Object(O.jsx)(j.fc,{fontWeight:"bold",children:null===f||void 0===f||null===(r=f.totalBetsClaimed)||void 0===r?void 0:r.toLocaleString()})]}),Object(O.jsxs)(j.n,{children:[Object(O.jsx)(j.fc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Played")}),p?Object(O.jsx)(j.Sb,{}):Object(O.jsx)(j.fc,{fontWeight:"bold",children:null===f||void 0===f||null===(i=f.totalBets)||void 0===i?void 0:i.toLocaleString()})]})]}),m?Object(O.jsx)(st,{account:u}):Object(O.jsx)(ot,{account:u})]})]})},jt=["user"],bt=Object(P.e)(j.n)(w||(w=Object(z.a)(["\n  order: 2;\n  margin-left: 8px;\n\n  "," {\n    order: 1;\n    margin-left: 0;\n    margin-right: 8px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),at=Object(P.e)(j.n)(y||(y=Object(z.a)(["\n  order: 1;\n\n  "," {\n    order: 2;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),dt=function(t){var e,n,c=t.user,r=Object(T.a)(t,jt),i=Object(b.b)().t,o=Object(U.b)(c.id),s=Object(j.Cc)(Object(O.jsx)(lt,{account:c.id})),u=Object(I.a)(s,1)[0];return Object(O.jsxs)(j.Wb,{component:Object(O.jsxs)(j.W,Object(R.a)(Object(R.a)({alignItems:"center"},r),{},{children:[Object(O.jsxs)(at,{children:[Object(O.jsx)(j.fc,{color:"primary",fontWeight:"bold",children:o.username||Object(V.a)(c.id)})," "]}),Object(O.jsx)(bt,{width:["32px",null,null,null,null,"40px"],height:["32px",null,null,null,null,"40px"],children:Object(O.jsx)(j.Mb,{src:"/images/nfts/".concat(null===(e=o.nft)||void 0===e||null===(n=e.images)||void 0===n?void 0:n.md),height:40,width:40})})]})),options:{placement:"bottom-start"},children:[Object(O.jsx)(j.Xb,{onClick:u,children:i("View Stats")}),Object(O.jsx)(j.Xb,{as:j.hb,href:Object(M.e)(c.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})},Ot=["rank","user"],xt=function(t){var e=t.rank,n=t.user,c=Object(T.a)(t,Ot);return Object(O.jsxs)("tr",Object(R.a)(Object(R.a)({},c),{},{children:[e?Object(O.jsx)(j.dc,{children:Object(O.jsx)(j.fc,{textAlign:"center",fontWeight:"bold",color:"secondary",children:"#".concat(e)})}):Object(O.jsx)(j.dc,{}),Object(O.jsx)(j.dc,{children:Object(O.jsx)(dt,{user:n})}),Object(O.jsx)(j.dc,{children:Object(O.jsx)(Y,{amount:n.netBNB,textPrefix:n.netBNB>0?"+":"",textColor:n.netBNB>0?"success":"failure"})}),Object(O.jsx)(j.dc,{textAlign:"center",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")}),Object(O.jsx)(j.dc,{textAlign:"center",children:Object(O.jsx)("strong",{children:n.totalBetsClaimed.toLocaleString()})}),Object(O.jsx)(j.dc,{textAlign:"center",children:n.totalBets.toLocaleString()})]}))},ft=function(t){var e=t.results,n=Object(b.b)().t;return Object(O.jsx)(A.a,{mb:"24px",children:Object(O.jsx)(j.v,{children:Object(O.jsxs)(j.bc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.gc,{width:"60px",children:"\xa0"}),Object(O.jsx)(j.gc,{textAlign:"left",children:n("User")}),Object(O.jsx)(j.gc,{textAlign:"right",children:n("Net Winnings (BNB)")}),Object(O.jsx)(j.gc,{children:n("Win Rate")}),Object(O.jsx)(j.gc,{children:n("Rounds Won")}),Object(O.jsx)(j.gc,{children:n("Rounds Played")})]})}),Object(O.jsx)("tbody",{children:e.map((function(t,e){return Object(O.jsx)(xt,{rank:e+4,user:t},t.id)}))})]})})})},ht=Object(P.e)(j.n)(W||(W=Object(z.a)(["\n  background-color: ",";\n  border-bottom: 1px solid ",";\n\n  &:first-child {\n    border-top: 1px solid ",";\n  }\n"])),(function(t){return t.theme.card.background}),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.colors.cardBorder})),pt=function(t){var e=t.rank,n=t.user,c=Object(b.b)().t;return Object(O.jsxs)(ht,{p:"16px",children:[Object(O.jsxs)(X,{mb:"16px",children:[e?Object(O.jsx)(j.fc,{fontWeight:"bold",color:"secondary",children:"#".concat(e)}):Object(O.jsx)("div",{}),Object(O.jsx)(dt,{user:n})]}),Object(O.jsxs)(X,{mb:"4px",children:[Object(O.jsx)(j.fc,{fontSize:"12px",color:"textSubtle",children:c("Win Rate")}),Object(O.jsx)(j.fc,{fontWeight:"bold",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsx)(Q,{amount:n.netBNB}),Object(O.jsxs)(X,{children:[Object(O.jsx)(j.fc,{fontSize:"12px",color:"textSubtle",children:c("Rounds Won")}),Object(O.jsx)(j.fc,{fontWeight:"bold",children:"".concat(n.totalBetsClaimed.toLocaleString(),"/").concat(n.totalBets.toLocaleString())})]})]})},mt=function(t){var e=t.results;return Object(O.jsx)(j.n,{mb:"24px",children:e.map((function(t,e){return Object(O.jsx)(pt,{rank:e+4,user:t},t.id)}))})},gt=Object(P.e)(j.fb)(N||(N=Object(z.a)(["\n  transform: rotate(30deg);\n"]))),vt=Object(P.e)(j.gb)(k||(k=Object(z.a)(["\n  transform: rotate(-30deg);\n"]))),Bt=function(t){var e,n,c=t.rank,r=t.user,i=Object(b.b)().t,o=function(t){return 3===t?"bronze":2===t?"silver":"gold"}(c),s=Object(U.b)(r.id),u=Object(j.Cc)(Object(O.jsx)(lt,{account:r.id})),l=Object(I.a)(u,1)[0];return Object(O.jsx)(j.v,{ribbon:Object(O.jsx)(j.z,{variantColor:o,text:"#".concat(c),ribbonPosition:"left"}),children:Object(O.jsxs)(j.w,{p:"24px",children:[Object(O.jsx)(j.W,{alignItems:"center",justifyContent:"center",flexDirection:"column",mb:"24px",children:Object(O.jsxs)(j.Wb,{component:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(j.W,{mb:"4px",children:[Object(O.jsx)(gt,{color:o,width:"32px"}),Object(O.jsx)(j.n,{width:["40px",null,null,"64px"],height:["40px",null,null,"64px"],children:Object(O.jsx)(j.Mb,{src:"/images/nfts/".concat(null===(e=s.nft)||void 0===e||null===(n=e.images)||void 0===n?void 0:n.md),height:64,width:64})}),Object(O.jsx)(vt,{color:o,width:"32px"})]}),Object(O.jsx)(j.fc,{color:"primary",fontWeight:"bold",textAlign:"center",children:s.username||Object(V.a)(r.id)})]}),options:{placement:"bottom"},children:[Object(O.jsx)(j.Xb,{onClick:l,children:i("View Stats")}),Object(O.jsx)(j.Xb,{as:j.hb,href:Object(M.e)(r.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})}),Object(O.jsxs)(X,{mb:"4px",children:[Object(O.jsx)(j.fc,{fontSize:"12px",color:"textSubtle",children:i("Win Rate")}),Object(O.jsx)(j.fc,{fontWeight:"bold",children:"".concat(r.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsx)(Q,{amount:r.netBNB}),Object(O.jsxs)(X,{children:[Object(O.jsx)(j.fc,{fontSize:"12px",color:"textSubtle",children:i("Rounds Won")}),Object(O.jsx)(j.fc,{fontWeight:"bold",children:"".concat(r.totalBetsClaimed.toLocaleString(),"/").concat(r.totalBets.toLocaleString())})]})]})})},St=function(){var t,e=Object(j.Bc)().isDesktop,n=Object(b.b)().t,c=Object(o.r)(),r=(t=c,Object(h.a)(t)||Object(p.a)(t)||Object(m.a)(t)||Object(g.a)()),l=r[0],a=r[1],d=r[2],x=r.slice(3),f=Object(o.q)()===s.c.LOADING,v=Object(o.s)(),B=Object(o.p)(),S=Object(i.b)();return Object(O.jsxs)(j.n,{children:[Object(O.jsx)(A.a,{mb:"16px",children:Object(O.jsxs)(j.X,{gridGap:["16px",null,null,null,null,"24px"],gridTemplateColumns:["1fr",null,null,null,null,"repeat(3, 1fr)"],children:[Object(O.jsx)(Bt,{rank:1,user:l}),Object(O.jsx)(Bt,{rank:2,user:a}),Object(O.jsx)(Bt,{rank:3,user:d})]})}),e?Object(O.jsx)(ft,{results:x}):Object(O.jsx)(mt,{results:x}),Object(O.jsx)(j.W,{mb:"40px",justifyContent:"center",children:B&&Object(O.jsx)(j.r,{variant:"secondary",isLoading:f,endIcon:f?Object(O.jsx)(j.i,{spin:!0,color:"currentColor"}):void 0,onClick:function(){S(Object(u.i)(v+F.a))},children:n(f?"Loading...":"View More")})})]})},wt=n(123),yt=function(){var t=Object(r.c)().account,e=Object(b.b)().t,n=Object(i.b)(),s=Object(o.u)(t),l=Object(j.Bc)().isDesktop;return Object(c.useEffect)((function(){t&&(n(Object(wt.d)(t)),n(Object(u.b)(t)))}),[t,n]),t&&s?Object(O.jsxs)(A.a,{mb:"48px",children:[Object(O.jsx)(j.Y,{as:"h2",scale:"md",color:"secondary",mb:"16px",children:e("My Rankings")}),l?Object(O.jsx)(j.v,{isActive:!0,children:Object(O.jsxs)(j.bc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.gc,{width:"60px",children:"\xa0"}),Object(O.jsx)(j.gc,{textAlign:"left",children:"\xa0"}),Object(O.jsx)(j.gc,{textAlign:"right",children:e("Net Winnings (BNB)")}),Object(O.jsx)(j.gc,{textAlign:"center",children:e("Win Rate")}),Object(O.jsx)(j.gc,{children:e("Rounds Won")}),Object(O.jsx)(j.gc,{children:e("Rounds Played")})]})}),Object(O.jsx)("tbody",{children:Object(O.jsx)(xt,{user:s})})]})}):Object(O.jsx)(j.v,{isActive:!0,children:Object(O.jsx)(pt,{user:s})})]}):null},Wt=n(387),Nt=n(197);!function(t){t[t.NOT_VALID=0]="NOT_VALID",t[t.FOUND=1]="FOUND",t[t.NOT_FOUND=2]="NOT_FOUND"}(L||(L={}));var kt,Ct,Dt=P.e.div(C||(C=Object(z.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(t){return t.theme.colors.input}),(function(t){return t.theme.colors.inputSecondary}),(function(t){return t.theme.radii.default}),(function(t){return t.theme.radii.default}),(function(t){return t.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),Lt=Object(P.e)(j.fc)(D||(D=Object(z.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),Ft={isFetching:!1,resultFound:L.NOT_VALID,value:""},At=function(){var t=Object(c.useState)(Ft),e=Object(I.a)(t,2),n=e[0],r=e[1],s=Object(o.a)(n.value),l=Object(b.b)().t,a=Object(i.b)(),d=n.isFetching,x=n.resultFound,f=n.value,h=Object(j.Cc)(Object(O.jsx)(lt,{account:n.value,onBeforeDismiss:function(){return r(Ft)}})),p=Object(I.a)(h,1)[0];return Object(c.useEffect)((function(){!1!==Object(M.h)(f)?function(){var t=Object(K.a)(J.a.mark((function t(){return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r((function(t){return Object(R.a)(Object(R.a)({},t),{},{isFetching:!0})})),t.next=4,a(Object(u.b)(f));case 4:return t.prev=4,r((function(t){return Object(R.a)(Object(R.a)({},t),{},{isFetching:!1})})),t.finish(4);case 7:case"end":return t.stop()}}),t,null,[[0,,4,7]])})));return function(){return t.apply(this,arguments)}}()():r((function(t){return Object(R.a)(Object(R.a)({},t),{},{resultFound:L.NOT_VALID})}))}),[f,a,r]),Object(c.useEffect)((function(){void 0!==s&&r((function(t){return Object(R.a)(Object(R.a)({},t),{},{resultFound:null===s?L.NOT_FOUND:L.FOUND})}))}),[s,r]),Object(O.jsxs)(j.n,{position:"relative",children:[Object(O.jsx)(j.eb,{placeholder:l("Search %subject%",{subject:l("Address").toLowerCase()}),value:n.value,onChange:function(t){var e=t.target.value;r((function(t){return Object(R.a)(Object(R.a)({},t),{},{value:e})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),d&&Object(O.jsx)(j.n,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(O.jsx)(Nt.a,{})}),Object(O.jsx)(Dt,{isOpen:x!==L.NOT_VALID,children:x===L.FOUND?Object(O.jsx)(Lt,{onClick:function(){r(Ft),p()},children:n.value}):Object(O.jsx)(j.fc,{px:"16px",fontWeight:"bold",children:l("No results found.")})})]})},Rt=Object(P.e)(j.n)(kt||(kt=Object(z.a)(["\n  margin-bottom: 8px;\n  order: 1;\n  width: 100%;\n\n  "," {\n    margin-bottom: 0;\n    order: 2;\n    width: 320px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),Tt=Object(P.e)(j.n)(Ct||(Ct=Object(z.a)(["\n  order: 2;\n  width: 100%;\n\n  "," {\n    order: 1;\n    width: auto;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),It=function(){var t=Object(b.b)().t,e=Object(i.b)(),n=[{label:t("Net Winnings"),value:"netBNB"},{label:t("Total BNB"),value:"totalBNB"},{label:t("Rounds Played"),value:"totalBets"},{label:t("Win Rate"),value:"winRate"}];return Object(O.jsxs)(A.a,{py:"32px",children:[Object(O.jsx)(j.fc,{textTransform:"uppercase",fontSize:"12px",color:"textSubtle",fontWeight:"bold",mb:"4px",children:t("Rank By")}),Object(O.jsxs)(j.W,{flexDirection:["column",null,null,null,null,"row"],alignItems:["start",null,null,null,null,"center"],justifyContent:["start",null,null,null,null,"space-between"],children:[Object(O.jsx)(Tt,{children:Object(O.jsx)(Wt.a,{options:n,onOptionChange:function(t){e(Object(u.p)({orderBy:t.value}))}})}),Object(O.jsx)(Rt,{children:Object(O.jsx)(At,{})})]})]})};e.default=function(){var t=Object(o.q)(),e=Object(o.o)(),n=Object(r.c)().account,j=Object(i.b)();return Object(c.useEffect)((function(){j(Object(u.h)({filters:e}))}),[n,e,j]),t===s.c.INITIAL?Object(O.jsx)(l.a,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(It,{}),Object(O.jsx)(yt,{}),Object(O.jsx)(St,{})]})}},782:function(t,e,n){"use strict";n.d(e,"w",(function(){return O})),n.d(e,"b",(function(){return x})),n.d(e,"l",(function(){return f})),n.d(e,"g",(function(){return h})),n.d(e,"y",(function(){return p})),n.d(e,"x",(function(){return m})),n.d(e,"d",(function(){return g})),n.d(e,"k",(function(){return v})),n.d(e,"v",(function(){return B})),n.d(e,"j",(function(){return S})),n.d(e,"h",(function(){return w})),n.d(e,"e",(function(){return y})),n.d(e,"t",(function(){return W})),n.d(e,"c",(function(){return N})),n.d(e,"m",(function(){return k})),n.d(e,"i",(function(){return C})),n.d(e,"n",(function(){return D})),n.d(e,"f",(function(){return L})),n.d(e,"q",(function(){return F})),n.d(e,"r",(function(){return A})),n.d(e,"o",(function(){return R})),n.d(e,"s",(function(){return T})),n.d(e,"p",(function(){return I})),n.d(e,"a",(function(){return z})),n.d(e,"u",(function(){return P}));var c=n(17),r=n(5),i=n(1),o=n(30),s=n(55),u=n(122),l=n(37),j=n(60),b=n(64),a=n(365),d=function(){var t=Object(o.c)((function(t){return t.predictions.rounds}));return Object.keys(t).reduce((function(e,n){return Object(r.a)(Object(r.a)({},e),{},Object(c.a)({},n,Object(b.q)(t[n])))}),{})},O=function(){var t=d();return Object(u.orderBy)(Object.values(t),["epoch"],["asc"])},x=function(t,e){var n=Object(o.c)((function(t){return t.predictions.ledgers}));return n[t]&&n[t][e]?Object(b.q)(n[t][e]):null},f=function(t){return Object(o.c)((function(t){return t.predictions.claimableStatuses}))[t]||!1},h=function(){return Object(o.c)((function(t){var e=Object(u.minBy)(Object.values(t.predictions.rounds),"epoch");return null===e||void 0===e?void 0:e.epoch}))},p=function(){return Object(o.c)((function(t){return t.predictions.isHistoryPaneOpen}))},m=function(){return Object(o.c)((function(t){return t.predictions.isChartPaneOpen}))},g=function(){return Object(o.c)((function(t){return t.predictions.currentEpoch}))},v=function(){return Object(o.c)((function(t){return t.predictions.intervalSeconds}))},B=function(){return Object(o.c)((function(t){return t.predictions.status}))},S=function(){return Object(o.c)((function(t){return t.predictions.historyFilter}))},w=function(){return Object(o.c)((function(t){return t.predictions.hasHistoryLoaded}))},y=function(){return Object(o.c)((function(t){return t.predictions.currentHistoryPage}))},W=function(){var t=Object(o.c)((function(t){return t.predictions.minBetAmount}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(t)}),[t])},N=function(){return Object(o.c)((function(t){return t.predictions.bufferSeconds}))},k=function(){return Object(o.c)((function(t){return t.predictions.isFetchingHistory}))},C=function(){return Object(o.c)((function(t){return t.predictions.history}))},D=function(){var t=Object(o.c)((function(t){return t.predictions.lastOraclePrice}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(t)}),[t])},L=function(){var t=function(){var t=g();return d()[t]}(),e=v();return t.lockTimestamp?t.lockTimestamp:t.startTimestamp+e},F=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.loadingState}))},A=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.results}))},R=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.filters}))},T=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.skip}))},I=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.hasMoreResults}))},z=function(t){return Object(o.c)((function(e){return e.predictions.leaderboard.addressResults[t]}))},P=function(t){var e=z(t),n=Object(j.b)();return Object(i.useEffect)((function(){var c=Object(l.h)(t);!e&&null!==e&&c&&n(Object(a.b)(t))}),[n,t,e]),e}},806:function(t,e,n){var c=n(489),r=n(826),i=n(827),o=4294967295,s=Math.min;t.exports=function(t,e){if((t=i(t))<1||t>9007199254740991)return[];var n=o,u=s(t,o);e=r(e),t-=o;for(var l=c(u,e);++n<t;)e(n);return l}},826:function(t,e,n){var c=n(173);t.exports=function(t){return"function"==typeof t?t:c}},827:function(t,e,n){var c=n(490);t.exports=function(t){var e=c(t),n=e%1;return e===e?n?e-n:e:0}},903:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var c,r,i=n(5),o=n(51),s=n(9),u=(n(1),n(4)),l=n(2),j=n(367),b=n(0),a=["background","children"],d=Object(u.e)(l.n)(c||(c=Object(s.a)(["\n  background: ",";\n"])),(function(t){t.theme;return t.background||"transparent"})),O=Object(u.e)(j.a)(r||(r=Object(s.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n  justify-content: center;\n  align-items: center;\n"]))),x=function(t){var e=t.background,n=t.children,c=Object(o.a)(t,a);return Object(b.jsx)(d,Object(i.a)(Object(i.a)({background:e},c),{},{children:Object(b.jsx)(O,{children:n})}))}}}]);
//# sourceMappingURL=13.c2cc36c6.chunk.js.map
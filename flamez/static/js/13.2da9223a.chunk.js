(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1396:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(41),i=n(60),o=n(782),s=n(49),l=n(365),u=n(371),j=n(2),b=n(13),a=n(903),d=n(84),O=n(1),x=function(){var t=Object(b.b)().t;return Object(O.jsx)(j.n,{mb:"24px",children:Object(O.jsxs)(j.o,{children:[Object(O.jsx)(d.a,{to:"/",children:t("Home")}),Object(O.jsx)(d.a,{to:"/prediction",children:t("Prediction")}),Object(O.jsx)(j.kc,{children:t("Leaderboard")})]})})},f=function(){var t=Object(b.b)().t;return Object(O.jsxs)(a.a,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(j.Y,{as:"h1",scale:"xxl",color:"secondary",children:t("Leaderboard")})]})},h=n(392),p=n(403),m=n(253),g=n(393);var v,k,B,w,S,y,W,N,D,C,L,F=n(64),A=n(367),R=n(5),T=n(51),I=n(8),P=n(9),z=n(4),V=n(36),H=n(185),U=n(368),M=n(96),_=n(106),E=["children"],G=["amount","textPrefix","textColor"],q=function(t){var e=t.children,n=Object(T.a)(t,E);return Object(O.jsx)(j.W,Object(R.a)(Object(R.a)({alignItems:"center",justifyContent:"space-between"},n),{},{children:e}))},Y=function(t){var e=t.amount,n=t.textPrefix,c=void 0===n?"":n,r=t.textColor,i=void 0===r?"text":r,o=Object(T.a)(t,G),s=Object(_.g)().times(Math.abs(e)).toNumber();return e?Object(O.jsxs)(j.W,Object(R.a)(Object(R.a)({flexDirection:"column",alignItems:"flex-end"},o),{},{children:[Object(O.jsx)(j.kc,{fontWeight:"bold",color:i,children:"".concat(c).concat(e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6}))}),Object(O.jsx)(j.kc,{fontSize:"12px",color:"textSubtle",lineHeight:1,children:"~$".concat(s.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})]})):null},Q=function(t){var e=t.amount,n=Object(b.b)().t;return Object(O.jsxs)(q,{mb:"4px",children:[Object(O.jsx)(j.kc,{fontSize:"12px",color:"textSubtle",children:n("Net Winnings (BNB)")}),Object(O.jsx)(Y,{amount:e,textPrefix:e>0?"+":"",textColor:e>0?"success":"failure"})]})},J=n(3),X=n.n(J),Z=n(12),K=n(806),$=n.n(K),tt=n(251),et=n.n(tt),nt=z.e.div(v||(v=Object(P.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  height: 32px;\n  min-width: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n"])),(function(t){var e=t.theme,n=t.bgColor;return e.colors[n]})),ct=z.e.div(k||(k=Object(P.a)(["\n  color: #fff;\n  display: none;\n  text-transform: uppercase;\n\n  "," {\n    display: block;\n    margin-left: 4px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),rt=function(t){var e=t.position,n=Object(b.b)().t,c=e===s.a.BULL,r=c?"success":"failure",i=c?Object(O.jsx)(j.h,{width:"24px",color:"white"}):Object(O.jsx)(j.d,{width:"24px",color:"white"});return Object(O.jsxs)(nt,{bgColor:r,children:[i,Object(O.jsx)(ct,{children:n(c?"Up":"Down")})]})},it=function(t){var e=t.numberOfBets,n=void 0===e?5:e,r=t.account,i=Object(c.useState)(!1),o=Object(I.a)(i,2),s=o[0],l=o[1],u=Object(c.useState)([]),a=Object(I.a)(u,2),d=a[0],x=a[1],f=Object(b.b)().t,h=et()(d,["round.epoch"],["desc"]);return Object(c.useEffect)((function(){(function(){var t=Object(Z.a)(X.a.mark((function t(){var e;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.prev=1,t.next=4,Object(F.e)({user:r.toLowerCase()},n);case 4:e=t.sent,x(e.map(F.s));case 6:return t.prev=6,l(!1),t.finish(6);case 9:case"end":return t.stop()}}),t,null,[[1,,6,9]])})));return function(){return t.apply(this,arguments)}})()()}),[r,n,l,x]),Object(O.jsxs)(j.gc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.lc,{children:f("Round")}),Object(O.jsx)(j.lc,{children:f("Direction")}),Object(O.jsx)(j.lc,{textAlign:"right",children:f("Winnings (BNB)")})]})}),Object(O.jsx)("tbody",{children:s?$()(n).map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.ic,{children:Object(O.jsx)(j.Vb,{width:"80px"})}),Object(O.jsx)(j.ic,{children:Object(O.jsx)(j.Vb,{width:"60px",height:"32px"})}),Object(O.jsx)(j.ic,{children:Object(O.jsx)(j.Vb,{width:"80px"})})]},t)})):h.map((function(t){var e=t.position===t.round.position;return Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.ic,{textAlign:"center",fontWeight:"bold",children:t.round.epoch.toLocaleString()}),Object(O.jsx)(j.ic,{textAlign:"center",children:Object(O.jsx)(rt,{position:t.position})}),Object(O.jsx)(j.ic,{textAlign:"right",children:Object(O.jsx)(Y,{amount:e?t.claimedNetBNB:t.amount,textPrefix:e?"+":"-",textColor:e?"success":"failure"})})]},t.id)}))})]})},ot=function(t){var e=t.account,n=Object(b.b)().t,r=Object(c.useState)(!1),i=Object(I.a)(r,2),o=i[0],s=i[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(j.W,{alignItems:"center",justifyContent:"space-between",px:"24px",py:"32px",borderBottom:"1px solid",borderColor:"cardBorder",style:{cursor:"pointer"},onClick:function(){return s(!o)},children:[Object(O.jsx)(j.kc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",children:n("Last %num% Bets",{num:5})}),o?Object(O.jsx)(j.H,{}):Object(O.jsx)(j.K,{})]}),o&&Object(O.jsx)(it,{account:e})]})},st=function(t){var e=t.account,n=Object(b.b)().t;return Object(O.jsxs)(j.n,{p:"24px",children:[Object(O.jsx)(j.kc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",mb:"16px",children:n("Last %num% Bets",{num:5})}),Object(O.jsx)(j.v,{children:Object(O.jsx)(it,{account:e})})]})},lt=Object(z.e)(j.ib)(B||(B=Object(P.a)(["\n  color: ",";\n\n  svg {\n    fill: ",";\n  }\n"])),(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.text})),ut=function(t){var e,n,c,r,i,l=t.account,u=t.onDismiss,a=t.onBeforeDismiss,d=Object(b.b)().t,x=Object(M.a)().theme,f=Object(o.u)(l),h=Object(H.b)(l),p=Object(o.q)()===s.c.LOADING,m=Object(j.Gc)().isDesktop;return Object(O.jsxs)(j.Cb,{minWidth:"320px",children:[Object(O.jsxs)(j.Db,{background:x.colors.gradients.bubblegum,children:[Object(O.jsxs)(j.W,{alignItems:"center",style:{flex:1},children:[Object(O.jsx)(j.n,{width:["64px",null,null,null,null,null,"96px"],mr:"16px",children:Object(O.jsx)(j.Pb,{src:"/images/nfts/".concat(null===(e=h.nft)||void 0===e||null===(n=e.images)||void 0===n?void 0:n.md),height:96,width:96})}),Object(O.jsxs)(j.n,{children:[h.username&&Object(O.jsx)(j.Y,{scale:"lg",mb:"8px",children:h.username}),Object(O.jsx)(lt,{href:Object(V.e)(l,"address"),children:Object(U.a)(l)})]})]}),Object(O.jsx)(j.bb,{variant:"text",onClick:function(){a&&a(),u()},"aria-label":"Close the dialog",children:Object(O.jsx)(j.M,{color:"text",width:"24px"})})]}),null===f?Object(O.jsx)(j.kc,{p:"32px",textAlign:"center",fontWeight:"bold",children:d("No results found.")}):Object(O.jsxs)(j.n,{maxHeight:["500px",null,null,null,null,null,"none"],overflowY:"auto",children:[Object(O.jsxs)(j.X,{gridTemplateColumns:["1fr",null,null,null,null,null,"repeat(4, 1fr)"],gridGap:"16px",p:"24px",borderBottom:"1px solid",borderColor:"cardBorder",children:[Object(O.jsxs)(j.n,{children:[Object(O.jsx)(j.kc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Net Winnings")}),p?Object(O.jsx)(j.Vb,{}):Object(O.jsx)(Y,{amount:null===f||void 0===f?void 0:f.netBNB,textPrefix:(null===f||void 0===f?void 0:f.netBNB)>0?"+":"",textColor:(null===f||void 0===f?void 0:f.netBNB)>0?"success":"failure",alignItems:"flex-end"})]}),Object(O.jsxs)(j.n,{children:[Object(O.jsx)(j.kc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Win Rate")}),p?Object(O.jsx)(j.Vb,{}):Object(O.jsx)(j.kc,{fontWeight:"bold",children:"".concat(null===f||void 0===f||null===(c=f.winRate)||void 0===c?void 0:c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsxs)(j.n,{children:[Object(O.jsx)(j.kc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Won")}),p?Object(O.jsx)(j.Vb,{}):Object(O.jsx)(j.kc,{fontWeight:"bold",children:null===f||void 0===f||null===(r=f.totalBetsClaimed)||void 0===r?void 0:r.toLocaleString()})]}),Object(O.jsxs)(j.n,{children:[Object(O.jsx)(j.kc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:d("Rounds Played")}),p?Object(O.jsx)(j.Vb,{}):Object(O.jsx)(j.kc,{fontWeight:"bold",children:null===f||void 0===f||null===(i=f.totalBets)||void 0===i?void 0:i.toLocaleString()})]})]}),m?Object(O.jsx)(st,{account:l}):Object(O.jsx)(ot,{account:l})]})]})},jt=["user"],bt=Object(z.e)(j.n)(w||(w=Object(P.a)(["\n  order: 2;\n  margin-left: 8px;\n\n  "," {\n    order: 1;\n    margin-left: 0;\n    margin-right: 8px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),at=Object(z.e)(j.n)(S||(S=Object(P.a)(["\n  order: 1;\n\n  "," {\n    order: 2;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),dt=function(t){var e,n,c=t.user,r=Object(T.a)(t,jt),i=Object(b.b)().t,o=Object(H.b)(c.id),s=Object(j.Hc)(Object(O.jsx)(ut,{account:c.id})),l=Object(I.a)(s,1)[0];return Object(O.jsxs)(j.Zb,{component:Object(O.jsxs)(j.W,Object(R.a)(Object(R.a)({alignItems:"center"},r),{},{children:[Object(O.jsxs)(at,{children:[Object(O.jsx)(j.kc,{color:"primary",fontWeight:"bold",children:o.username||Object(U.a)(c.id)})," "]}),Object(O.jsx)(bt,{width:["32px",null,null,null,null,"40px"],height:["32px",null,null,null,null,"40px"],children:Object(O.jsx)(j.Pb,{src:"/images/nfts/".concat(null===(e=o.nft)||void 0===e||null===(n=e.images)||void 0===n?void 0:n.md),height:40,width:40})})]})),options:{placement:"bottom-start"},children:[Object(O.jsx)(j.ac,{onClick:l,children:i("View Stats")}),Object(O.jsx)(j.ac,{as:j.hb,href:Object(V.e)(c.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})},Ot=["rank","user"],xt=function(t){var e=t.rank,n=t.user,c=Object(T.a)(t,Ot);return Object(O.jsxs)("tr",Object(R.a)(Object(R.a)({},c),{},{children:[e?Object(O.jsx)(j.ic,{children:Object(O.jsx)(j.kc,{textAlign:"center",fontWeight:"bold",color:"secondary",children:"#".concat(e)})}):Object(O.jsx)(j.ic,{}),Object(O.jsx)(j.ic,{children:Object(O.jsx)(dt,{user:n})}),Object(O.jsx)(j.ic,{children:Object(O.jsx)(Y,{amount:n.netBNB,textPrefix:n.netBNB>0?"+":"",textColor:n.netBNB>0?"success":"failure"})}),Object(O.jsx)(j.ic,{textAlign:"center",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")}),Object(O.jsx)(j.ic,{textAlign:"center",children:Object(O.jsx)("strong",{children:n.totalBetsClaimed.toLocaleString()})}),Object(O.jsx)(j.ic,{textAlign:"center",children:n.totalBets.toLocaleString()})]}))},ft=function(t){var e=t.results,n=Object(b.b)().t;return Object(O.jsx)(A.a,{mb:"24px",children:Object(O.jsx)(j.v,{children:Object(O.jsxs)(j.gc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.lc,{width:"60px",children:"\xa0"}),Object(O.jsx)(j.lc,{textAlign:"left",children:n("User")}),Object(O.jsx)(j.lc,{textAlign:"right",children:n("Net Winnings (BNB)")}),Object(O.jsx)(j.lc,{children:n("Win Rate")}),Object(O.jsx)(j.lc,{children:n("Rounds Won")}),Object(O.jsx)(j.lc,{children:n("Rounds Played")})]})}),Object(O.jsx)("tbody",{children:e.map((function(t,e){return Object(O.jsx)(xt,{rank:e+4,user:t},t.id)}))})]})})})},ht=Object(z.e)(j.n)(y||(y=Object(P.a)(["\n  background-color: ",";\n  border-bottom: 1px solid ",";\n\n  &:first-child {\n    border-top: 1px solid ",";\n  }\n"])),(function(t){return t.theme.card.background}),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.colors.cardBorder})),pt=function(t){var e=t.rank,n=t.user,c=Object(b.b)().t;return Object(O.jsxs)(ht,{p:"16px",children:[Object(O.jsxs)(q,{mb:"16px",children:[e?Object(O.jsx)(j.kc,{fontWeight:"bold",color:"secondary",children:"#".concat(e)}):Object(O.jsx)("div",{}),Object(O.jsx)(dt,{user:n})]}),Object(O.jsxs)(q,{mb:"4px",children:[Object(O.jsx)(j.kc,{fontSize:"12px",color:"textSubtle",children:c("Win Rate")}),Object(O.jsx)(j.kc,{fontWeight:"bold",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsx)(Q,{amount:n.netBNB}),Object(O.jsxs)(q,{children:[Object(O.jsx)(j.kc,{fontSize:"12px",color:"textSubtle",children:c("Rounds Won")}),Object(O.jsx)(j.kc,{fontWeight:"bold",children:"".concat(n.totalBetsClaimed.toLocaleString(),"/").concat(n.totalBets.toLocaleString())})]})]})},mt=function(t){var e=t.results;return Object(O.jsx)(j.n,{mb:"24px",children:e.map((function(t,e){return Object(O.jsx)(pt,{rank:e+4,user:t},t.id)}))})},gt=Object(z.e)(j.fb)(W||(W=Object(P.a)(["\n  transform: rotate(30deg);\n"]))),vt=Object(z.e)(j.gb)(N||(N=Object(P.a)(["\n  transform: rotate(-30deg);\n"]))),kt=function(t){var e,n,c=t.rank,r=t.user,i=Object(b.b)().t,o=function(t){return 3===t?"bronze":2===t?"silver":"gold"}(c),s=Object(H.b)(r.id),l=Object(j.Hc)(Object(O.jsx)(ut,{account:r.id})),u=Object(I.a)(l,1)[0];return Object(O.jsx)(j.v,{ribbon:Object(O.jsx)(j.z,{variantColor:o,text:"#".concat(c),ribbonPosition:"left"}),children:Object(O.jsxs)(j.w,{p:"24px",children:[Object(O.jsx)(j.W,{alignItems:"center",justifyContent:"center",flexDirection:"column",mb:"24px",children:Object(O.jsxs)(j.Zb,{component:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(j.W,{mb:"4px",children:[Object(O.jsx)(gt,{color:o,width:"32px"}),Object(O.jsx)(j.n,{width:["40px",null,null,"64px"],height:["40px",null,null,"64px"],children:Object(O.jsx)(j.Pb,{src:"/images/nfts/".concat(null===(e=s.nft)||void 0===e||null===(n=e.images)||void 0===n?void 0:n.md),height:64,width:64})}),Object(O.jsx)(vt,{color:o,width:"32px"})]}),Object(O.jsx)(j.kc,{color:"primary",fontWeight:"bold",textAlign:"center",children:s.username||Object(U.a)(r.id)})]}),options:{placement:"bottom"},children:[Object(O.jsx)(j.ac,{onClick:u,children:i("View Stats")}),Object(O.jsx)(j.ac,{as:j.hb,href:Object(V.e)(r.id,"address"),bold:!1,color:"text",external:!0,children:i("View on BscScan")})]})}),Object(O.jsxs)(q,{mb:"4px",children:[Object(O.jsx)(j.kc,{fontSize:"12px",color:"textSubtle",children:i("Win Rate")}),Object(O.jsx)(j.kc,{fontWeight:"bold",children:"".concat(r.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsx)(Q,{amount:r.netBNB}),Object(O.jsxs)(q,{children:[Object(O.jsx)(j.kc,{fontSize:"12px",color:"textSubtle",children:i("Rounds Won")}),Object(O.jsx)(j.kc,{fontWeight:"bold",children:"".concat(r.totalBetsClaimed.toLocaleString(),"/").concat(r.totalBets.toLocaleString())})]})]})})},Bt=function(){var t,e=Object(j.Gc)().isDesktop,n=Object(b.b)().t,c=Object(o.r)(),r=(t=c,Object(h.a)(t)||Object(p.a)(t)||Object(m.a)(t)||Object(g.a)()),u=r[0],a=r[1],d=r[2],x=r.slice(3),f=Object(o.q)()===s.c.LOADING,v=Object(o.s)(),k=Object(o.p)(),B=Object(i.b)();return Object(O.jsxs)(j.n,{children:[Object(O.jsx)(A.a,{mb:"16px",children:Object(O.jsxs)(j.X,{gridGap:["16px",null,null,null,null,"24px"],gridTemplateColumns:["1fr",null,null,null,null,"repeat(3, 1fr)"],children:[Object(O.jsx)(kt,{rank:1,user:u}),Object(O.jsx)(kt,{rank:2,user:a}),Object(O.jsx)(kt,{rank:3,user:d})]})}),e?Object(O.jsx)(ft,{results:x}):Object(O.jsx)(mt,{results:x}),Object(O.jsx)(j.W,{mb:"40px",justifyContent:"center",children:k&&Object(O.jsx)(j.r,{variant:"secondary",isLoading:f,endIcon:f?Object(O.jsx)(j.i,{spin:!0,color:"currentColor"}):void 0,onClick:function(){B(Object(l.i)(v+F.a))},children:n(f?"Loading...":"View More")})})]})},wt=n(122),St=function(){var t=Object(r.c)().account,e=Object(b.b)().t,n=Object(i.b)(),s=Object(o.u)(t),u=Object(j.Gc)().isDesktop;return Object(c.useEffect)((function(){t&&(n(Object(wt.d)(t)),n(Object(l.b)(t)))}),[t,n]),t&&s?Object(O.jsxs)(A.a,{mb:"48px",children:[Object(O.jsx)(j.Y,{as:"h2",scale:"md",color:"secondary",mb:"16px",children:e("My Rankings")}),u?Object(O.jsx)(j.v,{isActive:!0,children:Object(O.jsxs)(j.gc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(j.lc,{width:"60px",children:"\xa0"}),Object(O.jsx)(j.lc,{textAlign:"left",children:"\xa0"}),Object(O.jsx)(j.lc,{textAlign:"right",children:e("Net Winnings (BNB)")}),Object(O.jsx)(j.lc,{textAlign:"center",children:e("Win Rate")}),Object(O.jsx)(j.lc,{children:e("Rounds Won")}),Object(O.jsx)(j.lc,{children:e("Rounds Played")})]})}),Object(O.jsx)("tbody",{children:Object(O.jsx)(xt,{user:s})})]})}):Object(O.jsx)(j.v,{isActive:!0,children:Object(O.jsx)(pt,{user:s})})]}):null},yt=n(387),Wt=n(197);!function(t){t[t.NOT_VALID=0]="NOT_VALID",t[t.FOUND=1]="FOUND",t[t.NOT_FOUND=2]="NOT_FOUND"}(L||(L={}));var Nt,Dt,Ct=z.e.div(D||(D=Object(P.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(t){return t.theme.colors.input}),(function(t){return t.theme.colors.inputSecondary}),(function(t){return t.theme.radii.default}),(function(t){return t.theme.radii.default}),(function(t){return t.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),Lt=Object(z.e)(j.kc)(C||(C=Object(P.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),Ft={isFetching:!1,resultFound:L.NOT_VALID,value:""},At=function(){var t=Object(c.useState)(Ft),e=Object(I.a)(t,2),n=e[0],r=e[1],s=Object(o.a)(n.value),u=Object(b.b)().t,a=Object(i.b)(),d=n.isFetching,x=n.resultFound,f=n.value,h=Object(j.Hc)(Object(O.jsx)(ut,{account:n.value,onBeforeDismiss:function(){return r(Ft)}})),p=Object(I.a)(h,1)[0];return Object(c.useEffect)((function(){!1!==Object(V.h)(f)?function(){var t=Object(Z.a)(X.a.mark((function t(){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r((function(t){return Object(R.a)(Object(R.a)({},t),{},{isFetching:!0})})),t.next=4,a(Object(l.b)(f));case 4:return t.prev=4,r((function(t){return Object(R.a)(Object(R.a)({},t),{},{isFetching:!1})})),t.finish(4);case 7:case"end":return t.stop()}}),t,null,[[0,,4,7]])})));return function(){return t.apply(this,arguments)}}()():r((function(t){return Object(R.a)(Object(R.a)({},t),{},{resultFound:L.NOT_VALID})}))}),[f,a,r]),Object(c.useEffect)((function(){void 0!==s&&r((function(t){return Object(R.a)(Object(R.a)({},t),{},{resultFound:null===s?L.NOT_FOUND:L.FOUND})}))}),[s,r]),Object(O.jsxs)(j.n,{position:"relative",children:[Object(O.jsx)(j.eb,{placeholder:u("Search %subject%",{subject:u("Address").toLowerCase()}),value:n.value,onChange:function(t){var e=t.target.value;r((function(t){return Object(R.a)(Object(R.a)({},t),{},{value:e})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),d&&Object(O.jsx)(j.n,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(O.jsx)(Wt.a,{})}),Object(O.jsx)(Ct,{isOpen:x!==L.NOT_VALID,children:x===L.FOUND?Object(O.jsx)(Lt,{onClick:function(){r(Ft),p()},children:n.value}):Object(O.jsx)(j.kc,{px:"16px",fontWeight:"bold",children:u("No results found.")})})]})},Rt=Object(z.e)(j.n)(Nt||(Nt=Object(P.a)(["\n  margin-bottom: 8px;\n  order: 1;\n  width: 100%;\n\n  "," {\n    margin-bottom: 0;\n    order: 2;\n    width: 320px;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),Tt=Object(z.e)(j.n)(Dt||(Dt=Object(P.a)(["\n  order: 2;\n  width: 100%;\n\n  "," {\n    order: 1;\n    width: auto;\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),It=function(){var t=Object(b.b)().t,e=Object(i.b)(),n=[{label:t("Net Winnings"),value:"netBNB"},{label:t("Total BNB"),value:"totalBNB"},{label:t("Rounds Played"),value:"totalBets"},{label:t("Win Rate"),value:"winRate"}];return Object(O.jsxs)(A.a,{py:"32px",children:[Object(O.jsx)(j.kc,{textTransform:"uppercase",fontSize:"12px",color:"textSubtle",fontWeight:"bold",mb:"4px",children:t("Rank By")}),Object(O.jsxs)(j.W,{flexDirection:["column",null,null,null,null,"row"],alignItems:["start",null,null,null,null,"center"],justifyContent:["start",null,null,null,null,"space-between"],children:[Object(O.jsx)(Tt,{children:Object(O.jsx)(yt.a,{options:n,onOptionChange:function(t){e(Object(l.p)({orderBy:t.value}))}})}),Object(O.jsx)(Rt,{children:Object(O.jsx)(At,{})})]})]})};e.default=function(){var t=Object(o.q)(),e=Object(o.o)(),n=Object(r.c)().account,j=Object(i.b)();return Object(c.useEffect)((function(){j(Object(l.h)({filters:e}))}),[n,e,j]),t===s.c.INITIAL?Object(O.jsx)(u.a,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{}),Object(O.jsx)(It,{}),Object(O.jsx)(St,{}),Object(O.jsx)(Bt,{})]})}},782:function(t,e,n){"use strict";n.d(e,"w",(function(){return O})),n.d(e,"b",(function(){return x})),n.d(e,"l",(function(){return f})),n.d(e,"g",(function(){return h})),n.d(e,"y",(function(){return p})),n.d(e,"x",(function(){return m})),n.d(e,"d",(function(){return g})),n.d(e,"k",(function(){return v})),n.d(e,"v",(function(){return k})),n.d(e,"j",(function(){return B})),n.d(e,"h",(function(){return w})),n.d(e,"e",(function(){return S})),n.d(e,"t",(function(){return y})),n.d(e,"c",(function(){return W})),n.d(e,"m",(function(){return N})),n.d(e,"i",(function(){return D})),n.d(e,"n",(function(){return C})),n.d(e,"f",(function(){return L})),n.d(e,"q",(function(){return F})),n.d(e,"r",(function(){return A})),n.d(e,"o",(function(){return R})),n.d(e,"s",(function(){return T})),n.d(e,"p",(function(){return I})),n.d(e,"a",(function(){return P})),n.d(e,"u",(function(){return z}));var c=n(17),r=n(5),i=n(0),o=n(30),s=n(55),l=n(121),u=n(36),j=n(60),b=n(64),a=n(365),d=function(){var t=Object(o.c)((function(t){return t.predictions.rounds}));return Object.keys(t).reduce((function(e,n){return Object(r.a)(Object(r.a)({},e),{},Object(c.a)({},n,Object(b.q)(t[n])))}),{})},O=function(){var t=d();return Object(l.orderBy)(Object.values(t),["epoch"],["asc"])},x=function(t,e){var n=Object(o.c)((function(t){return t.predictions.ledgers}));return n[t]&&n[t][e]?Object(b.q)(n[t][e]):null},f=function(t){return Object(o.c)((function(t){return t.predictions.claimableStatuses}))[t]||!1},h=function(){return Object(o.c)((function(t){var e=Object(l.minBy)(Object.values(t.predictions.rounds),"epoch");return null===e||void 0===e?void 0:e.epoch}))},p=function(){return Object(o.c)((function(t){return t.predictions.isHistoryPaneOpen}))},m=function(){return Object(o.c)((function(t){return t.predictions.isChartPaneOpen}))},g=function(){return Object(o.c)((function(t){return t.predictions.currentEpoch}))},v=function(){return Object(o.c)((function(t){return t.predictions.intervalSeconds}))},k=function(){return Object(o.c)((function(t){return t.predictions.status}))},B=function(){return Object(o.c)((function(t){return t.predictions.historyFilter}))},w=function(){return Object(o.c)((function(t){return t.predictions.hasHistoryLoaded}))},S=function(){return Object(o.c)((function(t){return t.predictions.currentHistoryPage}))},y=function(){var t=Object(o.c)((function(t){return t.predictions.minBetAmount}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(t)}),[t])},W=function(){return Object(o.c)((function(t){return t.predictions.bufferSeconds}))},N=function(){return Object(o.c)((function(t){return t.predictions.isFetchingHistory}))},D=function(){return Object(o.c)((function(t){return t.predictions.history}))},C=function(){var t=Object(o.c)((function(t){return t.predictions.lastOraclePrice}));return Object(i.useMemo)((function(){return s.a.BigNumber.from(t)}),[t])},L=function(){var t=function(){var t=g();return d()[t]}(),e=v();return t.lockTimestamp?t.lockTimestamp:t.startTimestamp+e},F=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.loadingState}))},A=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.results}))},R=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.filters}))},T=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.skip}))},I=function(){return Object(o.c)((function(t){return t.predictions.leaderboard.hasMoreResults}))},P=function(t){return Object(o.c)((function(e){return e.predictions.leaderboard.addressResults[t]}))},z=function(t){var e=P(t),n=Object(j.b)();return Object(i.useEffect)((function(){var c=Object(u.h)(t);!e&&null!==e&&c&&n(Object(a.b)(t))}),[n,t,e]),e}},806:function(t,e,n){var c=n(489),r=n(826),i=n(827),o=4294967295,s=Math.min;t.exports=function(t,e){if((t=i(t))<1||t>9007199254740991)return[];var n=o,l=s(t,o);e=r(e),t-=o;for(var u=c(l,e);++n<t;)e(n);return u}},826:function(t,e,n){var c=n(173);t.exports=function(t){return"function"==typeof t?t:c}},827:function(t,e,n){var c=n(490);t.exports=function(t){var e=c(t),n=e%1;return e===e?n?e-n:e:0}},903:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var c,r,i=n(5),o=n(51),s=n(9),l=(n(0),n(4)),u=n(2),j=n(367),b=n(1),a=["background","children"],d=Object(l.e)(u.n)(c||(c=Object(s.a)(["\n  background: ",";\n"])),(function(t){t.theme;return t.background||"transparent"})),O=Object(l.e)(j.a)(r||(r=Object(s.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n  justify-content: center;\n  align-items: center;\n"]))),x=function(t){var e=t.background,n=t.children,c=Object(o.a)(t,a);return Object(b.jsx)(d,Object(i.a)(Object(i.a)({background:e},c),{},{children:Object(b.jsx)(O,{children:n})}))}}}]);
//# sourceMappingURL=13.2da9223a.chunk.js.map
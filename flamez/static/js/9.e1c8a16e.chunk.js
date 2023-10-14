(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[9],{1397:function(e,t,n){"use strict";n.r(t);var c,r,o,a=n(3),s=n.n(a),i=n(12),l=n(0),j=n(2),b=n(41),u=n(75),d=n(84),x=n(60),p=n(49),O=n(828),h=n(379),f=n(13),m=n(367),v=n(905),g=n(371),k=n(795),w=n(842),y=n(869),S=n(9),C=n(4),B=n(770),I=n(36),A=n(368),L=n(797),V=n(1),D=Object(C.e)(j.n)(c||(c=Object(S.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.cardBorder})),P=function(e){var t=e.proposal,n=Object(f.b)().t,c=new Date(1e3*t.start),r=new Date(1e3*t.end);return Object(V.jsxs)(j.v,{mb:"16px",children:[Object(V.jsx)(j.y,{children:Object(V.jsx)(j.Y,{as:"h3",scale:"md",children:n("Details")})}),Object(V.jsxs)(j.w,{children:[Object(V.jsxs)(j.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(j.kc,{color:"textSubtle",children:n("Identifier")}),Object(V.jsx)(j.ib,{href:"".concat(L.b,"/").concat(t.id),ml:"8px",children:t.id.slice(0,8)})]}),Object(V.jsxs)(j.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(j.kc,{color:"textSubtle",children:n("Creator")}),Object(V.jsx)(j.ib,{href:Object(I.e)(t.author,"address"),ml:"8px",children:Object(A.a)(t.author)})]}),Object(V.jsxs)(j.W,{alignItems:"center",mb:"16px",children:[Object(V.jsx)(j.kc,{color:"textSubtle",children:n("Snapshot")}),Object(V.jsx)(j.ib,{href:Object(I.e)(t.snapshot,"block"),ml:"8px",children:t.snapshot})]}),Object(V.jsxs)(D,{p:"16px",children:[Object(V.jsx)(w.a,{proposalState:t.state,mb:"8px"}),Object(V.jsxs)(j.W,{alignItems:"center",children:[Object(V.jsx)(j.kc,{color:"textSubtle",fontSize:"14px",children:n("Start Date")}),Object(V.jsx)(j.kc,{ml:"8px",children:Object(B.default)(c,"yyyy-MM-dd HH:mm")})]}),Object(V.jsxs)(j.W,{alignItems:"center",children:[Object(V.jsx)(j.kc,{color:"textSubtle",fontSize:"14px",children:n("End Date")}),Object(V.jsx)(j.kc,{ml:"8px",children:Object(B.default)(r,"yyyy-MM-dd HH:mm")})]})]})]})]})},E=n(806),N=n.n(E),W=Object(C.e)(j.kc)(r||(r=Object(S.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),F=function(e){var t=e.choices,n=e.votes,c=Object(f.b)().t,r=Object(k.a)(n),o=Object(O.e)(),a=Object(b.c)().account,s=Object(k.f)(n);return Object(V.jsxs)(j.v,{children:[Object(V.jsx)(j.y,{children:Object(V.jsx)(j.Y,{as:"h3",scale:"md",children:c("Current Results")})}),Object(V.jsxs)(j.w,{children:[o===p.h.IDLE&&t.map((function(e,t){var n=r[e]||[],o=Object(k.f)(n),i=s.eq(0)?0:o.div(s).times(100).toNumber(),l=n.some((function(e){return a&&e.voter.toLowerCase()===a.toLowerCase()}));return Object(V.jsxs)(j.n,{mt:t>0?"24px":"0px",children:[Object(V.jsxs)(j.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(W,{mb:"4px",title:e,children:e}),l&&Object(V.jsxs)(j.hc,{variant:"success",outline:!0,ml:"8px",children:[Object(V.jsx)(j.F,{mr:"4px"})," ",c("Voted")]})]}),Object(V.jsx)(j.n,{mb:"4px",children:Object(V.jsx)(j.Qb,{primaryStep:i,scale:"sm"})}),Object(V.jsxs)(j.W,{alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(j.kc,{color:"textSubtle",children:c("%total% Votes",{total:o.toFormat(3)})}),Object(V.jsxs)(j.kc,{children:[i.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),"%"]})]})]},e)})),o===p.h.LOADING&&N()(t.length).map((function(e,t){return Object(V.jsx)(j.n,{mt:t>0?"24px":"0px",children:Object(V.jsx)(j.Vb,{height:"36px",mb:"4px"})},e)}))]})]})},z=n(5),T=n(8),H=n(51),M=n(99),Y=n(120),K=n(17),J=n(193),G=n(22),Q=n(96);!function(e){e.MAIN="main",e.DETAILS="details"}(o||(o={}));var q,R,_,U,X,Z,$,ee,te=n(849),ne=function(e){var t=e.vote,n=e.total,c=e.isPending,r=e.isLoading,o=e.onConfirm,a=e.onViewDetails,s=e.onDismiss,i=Object(f.b)().t;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)(te.a,{children:[Object(V.jsx)(j.kc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Voting For")}),Object(V.jsx)(W,{bold:!0,fontSize:"20px",mb:"8px",title:t.label,children:t.label}),Object(V.jsx)(j.kc,{color:"secondary",mb:"8px",textTransform:"uppercase",fontSize:"12px",bold:!0,children:i("Your Voting Power")}),r?Object(V.jsx)(j.Vb,{height:"64px",mb:"24px"}):Object(V.jsxs)(te.b,{onClick:a,style:{cursor:"pointer"},children:[Object(V.jsx)(j.kc,{bold:!0,fontSize:"20px",children:n.toFormat(3)}),Object(V.jsx)(j.bb,{scale:"sm",variant:"text",children:Object(V.jsx)(j.J,{width:"24px"})})]}),Object(V.jsx)(j.kc,{as:"p",color:"textSubtle",fontSize:"14px",children:i("Are you sure you want to vote for the above choice? This action cannot be undone.")})]}),Object(V.jsx)(j.r,{isLoading:c,endIcon:c?Object(V.jsx)(j.i,{spin:!0,color:"currentColor"}):null,disabled:r||n.eq(0),width:"100%",mb:"8px",onClick:o,children:i("Confirm Vote")}),Object(V.jsx)(j.r,{variant:"secondary",width:"100%",onClick:s,children:i("Cancel")})]})},ce=n(870),re=n(871),oe=function(e){var t,n=e.onSuccess,c=e.proposalId,r=e.vote,a=e.block,u=e.onDismiss,d=Object(l.useState)(o.MAIN),x=Object(T.a)(d,2),O=x[0],h=x[1],m=Object(l.useState)(!0),v=Object(T.a)(m,2),g=v[0],w=v[1],y=Object(l.useState)(!1),S=Object(T.a)(y,2),C=S[0],B=S[1],I=Object(b.c)().account,A=Object(f.b)().t,L=Object(M.a)().toastError,D=Object(G.a)().library,P=Object(Q.a)().theme,E=Object(re.a)(a,g),N=E.isLoading,W=E.total,F=E.cakeBalance,H=E.cakeVaultBalance,Y=E.cakePoolBalance,q=E.poolsBalance,R=E.cakeBnbLpBalance,_=E.verificationHash,U=O===o.MAIN,X=U?null:function(){return h(o.MAIN)},Z=(t={},Object(K.a)(t,o.MAIN,A("Confirm Vote")),Object(K.a)(t,o.DETAILS,A("Voting Power")),t),$=function(){w(!1),u()},ee=function(){var e=Object(i.a)(s.a.mark((function e(){var t,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,B(!0),t=JSON.stringify(Object(z.a)(Object(z.a)({},Object(k.e)()),{},{type:p.g.VOTE,payload:{proposal:c,choice:r.value,metadata:{votingPower:W.toString(),verificationHash:_}}})),e.next=5,Object(J.c)(D,I,t);case 5:return o=e.sent,a={address:I,msg:t,sig:o},e.next=9,Object(k.i)(a);case 9:return B(!1),e.next=12,n();case 12:$(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(0),B(!1),L(A("Error"),null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(V.jsx)(j.yb,{title:Z[O],onBack:X,onDismiss:u,hideCloseButton:!U,headerBackground:P.colors.gradients.cardHeader,children:Object(V.jsxs)(j.n,{mb:"24px",width:"320px",children:[O===o.MAIN&&Object(V.jsx)(ne,{vote:r,isLoading:N,isPending:C,total:W,onConfirm:ee,onViewDetails:function(){return h(o.DETAILS)},onDismiss:$}),O===o.DETAILS&&Object(V.jsx)(ce.a,{total:W,cakeBalance:F,cakeVaultBalance:H,cakePoolBalance:Y,poolsBalance:q,cakeBnbLpBalance:R})]})})},ae=["proposal"],se=C.e.label(q||(q=Object(S.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 16px;\n  cursor: ",";\n  display: flex;\n  margin-bottom: 16px;\n  padding: 16px;\n"])),(function(e){var t=e.theme,n=e.isChecked;return t.colors[n?"success":"cardBorder"]}),(function(e){return e.isDisabled?"not-allowed":"pointer"})),ie=C.e.div(R||(R=Object(S.a)(["\n  flex: 1;\n  padding-left: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 0;\n"]))),le=function(e){var t=e.proposal,n=Object(H.a)(e,ae),c=Object(l.useState)(null),r=Object(T.a)(c,2),o=r[0],a=r[1],u=Object(f.b)().t,d=Object(M.a)().toastSuccess,p=Object(x.b)(),O=Object(b.c)().account,m=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(u("Vote cast!")),p(Object(h.d)({proposalId:t.id,block:Number(t.snapshot)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=Object(j.Hc)(Object(V.jsx)(oe,{onSuccess:m,proposalId:t.id,vote:o,block:Number(t.snapshot)})),g=Object(T.a)(v,1)[0];return Object(V.jsxs)(j.v,Object(z.a)(Object(z.a)({},n),{},{children:[Object(V.jsx)(j.y,{children:Object(V.jsx)(j.Y,{as:"h3",scale:"md",children:u("Cast your vote")})}),Object(V.jsxs)(j.w,{children:[t.choices.map((function(e,t){var n=t+1===(null===o||void 0===o?void 0:o.value);return Object(V.jsxs)(se,{isChecked:n,isDisabled:!O,children:[Object(V.jsx)("div",{style:{flexShrink:0},children:Object(V.jsx)(j.Sb,{scale:"sm",value:e,checked:n,onChange:function(){a({label:e,value:t+1})},disabled:!O})}),Object(V.jsx)(ie,{children:Object(V.jsx)(j.kc,{as:"span",title:e,children:e})})]},e)})),O?Object(V.jsx)(j.r,{onClick:g,disabled:null===o,children:u("Cast Vote")}):Object(V.jsx)(Y.a,{})]})]}))},je=n(251),be=n.n(je),ue=Object(C.e)(j.W)(_||(_=Object(S.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),de=Object(C.e)(j.Vb)(U||(U=Object(S.a)(["\n  flex: 1;\n"]))),xe=function(){return Object(V.jsx)(j.n,{children:N()(10).map((function(e){return Object(V.jsxs)(ue,{children:[Object(V.jsx)(j.Vb,{height:"21px",mr:"32px",width:"100px"}),Object(V.jsx)(de,{height:"21px",mr:"32px",width:"100%"}),Object(V.jsx)(de,{height:"21px",width:"100%"})]},e)}))})},pe=n(14),Oe=n.n(pe),he=Object(C.e)(j.n).attrs({alignItems:"center"})(X||(X=Object(S.a)(["\n  grid-area: address;\n"]))),fe=Object(C.e)(j.n)(Z||(Z=Object(S.a)(["\n  grid-area: choice;\n  overflow: hidden;\n"]))),me=Object(C.e)(j.n)($||($=Object(S.a)(["\n  justify-self: end;\n  grid-area: vote;\n"]))),ve=Object(C.e)(j.X)(ee||(ee=Object(S.a)(["\n  border-bottom: 1px solid ",";\n  grid-gap: 8px;\n  grid-template-areas:\n    'address address address'\n    'choice choice vote';\n  grid-template-columns: 1fr 1fr 120px;\n  padding: 8px 16px;\n\n  "," {\n    grid-gap: 16px;\n    grid-template-areas: 'address choice vote';\n    padding: 16px 24px;\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.mediaQueries.sm})),ge=function(e){var t,n=e.vote,c=e.isVoter,r=Object(f.b)().t,o=!!(null===(t=n.metadata)||void 0===t?void 0:t.votingPower),a=o?new Oe.a(n.metadata.votingPower).toFormat(3):"--";return Object(V.jsxs)(ve,{children:[Object(V.jsx)(he,{children:Object(V.jsxs)(j.W,{alignItems:"center",children:[Object(V.jsx)(j.ib,{href:Object(I.e)(n.voter,"address"),children:Object(A.a)(n.voter)}),c&&Object(V.jsxs)(j.hc,{variant:"success",outline:!0,ml:"8px",children:[Object(V.jsx)(j.F,{mr:"4px"})," ",r("Voted")]})]})}),Object(V.jsx)(fe,{children:Object(V.jsx)(W,{title:n.proposal.choices[n.choice-1],children:n.proposal.choices[n.choice-1]})}),Object(V.jsx)(me,{children:Object(V.jsxs)(j.W,{alignItems:"center",justifyContent:"end",children:[Object(V.jsx)(j.kc,{title:n.metadata.votingPower,children:a}),o&&Object(V.jsx)(j.ib,{href:"".concat(L.b,"/").concat(n.id)})]})})]})},ke=function(e){var t;return parseFloat(null===e||void 0===e||null===(t=e.metadata)||void 0===t?void 0:t.votingPower)},we=function(e){var t=e.votes,n=Object(l.useState)(!1),c=Object(T.a)(n,2),r=c[0],o=c[1],a=Object(f.b)().t,s=Object(b.c)().account,i=be()(t,[ke,"created"],["desc","desc"]),u=r?i:i.slice(0,20),d=Object(O.e)()===p.h.IDLE;return Object(V.jsxs)(j.v,{children:[Object(V.jsx)(j.y,{children:Object(V.jsxs)(j.W,{alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(j.Y,{as:"h3",scale:"md",children:a("Votes (%count%)",{count:t.length.toLocaleString()})}),!d&&Object(V.jsx)(j.i,{spin:!0,width:"22px"})]})}),!d&&Object(V.jsx)(xe,{}),d&&u.length>0&&Object(V.jsxs)(V.Fragment,{children:[u.map((function(e){var t=s&&e.voter.toLowerCase()===s.toLowerCase();return Object(V.jsx)(ge,{vote:e,isVoter:t},e.id)})),Object(V.jsx)(j.W,{alignItems:"center",justifyContent:"center",py:"8px",px:"24px",children:Object(V.jsx)(j.r,{width:"100%",onClick:function(){o(!r)},variant:"text",endIcon:r?Object(V.jsx)(j.K,{color:"primary",width:"21px"}):Object(V.jsx)(j.H,{color:"primary",width:"21px"}),disabled:!d,children:a(r?"Hide":"See All")})})]}),d&&0===u.length&&Object(V.jsx)(j.W,{alignItems:"center",justifyContent:"center",py:"32px",children:Object(V.jsx)(j.Y,{as:"h5",children:a("No votes found")})})]})};t.default=function(){var e=Object(u.i)().id,t=Object(O.a)(e),n=Object(f.b)().t,c=Object(b.c)().account,r=Object(x.b)(),o=Object(O.d)(e),a=Object(O.e)(),S=Object(O.b)(),C=c&&o.some((function(e){return e.voter.toLowerCase()===c.toLowerCase()})),B=null!==t&&void 0!==t?t:{},I=B.id,A=void 0===I?null:I,L=B.snapshot,D=void 0===L?null:L,E=a===p.h.LOADING||S===p.h.LOADING;return Object(l.useEffect)((function(){r(Object(h.b)(e))}),[e,r]),Object(l.useEffect)((function(){A&&D&&function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(Object(h.d)({proposalId:A,block:Number(D)}));case 2:r(Object(h.e)({proposalId:A,snapshot:D}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[A,D,r]),t?Object(V.jsxs)(m.a,{py:"40px",children:[Object(V.jsx)(j.n,{mb:"40px",children:Object(V.jsx)(j.r,{as:d.a,to:"/voting",variant:"text",startIcon:Object(V.jsx)(j.c,{color:"primary",width:"24px"}),px:"0",children:n("Back to Vote Overview")})}),Object(V.jsxs)(y.a,{children:[Object(V.jsxs)(j.n,{children:[Object(V.jsxs)(j.n,{mb:"32px",children:[Object(V.jsxs)(j.W,{alignItems:"center",mb:"8px",children:[Object(V.jsx)(w.a,{proposalState:t.state}),Object(V.jsx)(w.b,{isCoreProposal:Object(k.h)(t),ml:"8px"})]}),Object(V.jsx)(j.Y,{as:"h1",scale:"xl",mb:"16px",children:t.title}),Object(V.jsx)(j.n,{children:Object(V.jsx)(v.a,{children:t.body})})]}),!E&&!C&&t.state===p.e.ACTIVE&&Object(V.jsx)(le,{proposal:t,mb:"16px"}),Object(V.jsx)(we,{votes:o})]}),Object(V.jsxs)(j.n,{children:[Object(V.jsx)(P,{proposal:t}),Object(V.jsx)(F,{choices:t.choices,votes:o})]})]})]}):Object(V.jsx)(g.a,{})}},795:function(e,t,n){"use strict";n.d(t,"h",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"i",(function(){return k})),n.d(t,"g",(function(){return w})),n.d(t,"a",(function(){return y})),n.d(t,"f",(function(){return S}));var c=n(17),r=n(34),o=n(5),a=n(3),s=n.n(a),i=n(12),l=n(14),j=n.n(l),b=n(19),u=n(95),d=n(29),x=n(49),p=n(94),O=n(797),h=function(e){return e.author.toLowerCase()===O.a.toLowerCase()},f=function(e,t){switch(t){case x.f.COMMUNITY:return e.filter((function(e){return!h(e)}));case x.f.CORE:return e.filter((function(e){return h(e)}));case x.f.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},v=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"CAKE",address:Object(b.g)(),decimals:18}}]}},g=function(){return{version:O.e,timestamp:(Date.now()/1e3).toFixed(),space:O.c}},k=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.f,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,p.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(u.g,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),y=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},S=function(e){return e.reduce((function(e,t){var n,c=new j.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.c)}},797:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10},828:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(30),r=function(){var e=Object(c.c)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.c)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.c)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(c.c)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(c.c)((function(e){return e.voting.proposalLoadingStatus}))}},842:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return b}));var c=n(5),r=n(51),o=(n(0),n(191)),a=n(49),s=n(1),i=["proposalState"],l=["isCoreProposal"],j=function(e){var t=e.proposalState,n=Object(r.a)(e,i);return t===a.e.ACTIVE?Object(s.jsx)(o.h,Object(c.a)({},n)):t===a.e.PENDING?Object(s.jsx)(o.g,Object(c.a)({},n)):Object(s.jsx)(o.a,Object(c.a)({},n))},b=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,l);return t?Object(s.jsx)(o.d,Object(c.a)({},n)):Object(s.jsx)(o.b,Object(c.a)({},n))}},849:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return j}));var c,r=n(5),o=n(9),a=(n(0),n(2)),s=n(4),i=n(1),l=s.e.div(c||(c=Object(o.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),j=function(e){return Object(i.jsx)(a.n,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},869:function(e,t,n){"use strict";var c,r=n(9),o=n(4).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=o},870:function(e,t,n){"use strict";n(0);var c=n(2),r=n(13),o=n(849),a=n(1);t.a=function(e){var t=e.total,n=e.cakeBalance,s=e.cakeVaultBalance,i=e.cakePoolBalance,l=e.poolsBalance,j=e.cakeBnbLpBalance,b=Object(r.b)().t;return Object(a.jsxs)(o.a,{mb:"0",children:[Object(a.jsx)(c.kc,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:b("Your voting power is determined by the amount of CAKE you held at the block detailed below. CAKE held in other places does not contribute to your voting power.")}),Object(a.jsx)(c.kc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Overview")}),Object(a.jsxs)(o.b,{children:[Object(a.jsx)(c.kc,{color:"secondary",children:b("Your Voting Power")}),Object(a.jsx)(c.kc,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(a.jsx)(c.kc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Your Cake Held Now")}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.kc,{color:"textSubtle",fontSize:"16px",children:b("Wallet")}),Object(a.jsx)(c.kc,{textAlign:"right",children:n.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.kc,{color:"textSubtle",fontSize:"16px",children:b("Manual CAKE Pool")}),Object(a.jsx)(c.kc,{textAlign:"right",children:i.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.kc,{color:"textSubtle",fontSize:"16px",children:b("Auto CAKE Pool")}),Object(a.jsx)(c.kc,{textAlign:"right",children:s.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.kc,{color:"textSubtle",fontSize:"16px",children:b("Other Syrup Pools")}),Object(a.jsx)(c.kc,{textAlign:"right",children:l.toFormat(3)})]}),Object(a.jsxs)(c.W,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(a.jsx)(c.kc,{color:"textSubtle",fontSize:"16px",children:b("CAKE BNB LP")}),Object(a.jsx)(c.kc,{textAlign:"right",children:j.toFormat(3)})]})]})}},871:function(e,t,n){"use strict";var c=n(3),r=n.n(c),o=n(5),a=n(12),s=n(8),i=n(0),l=n(41),j=n(29),b=n(187),u=n(19),d=n(94),x=n(14),p=n.n(x),O=n(795),h={verificationHash:null,cakeBalance:j.c,cakeVaultBalance:j.c,cakePoolBalance:j.c,poolsBalance:j.c,cakeBnbLpBalance:j.c,total:j.c};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,j=Object(i.useState)(h),x=Object(s.a)(j,2),f=x[0],m=x[1],v=Object(i.useState)(!!c),g=Object(s.a)(v,2),k=g[0],w=g[1];return Object(i.useEffect)((function(){c&&t&&function(){var n=Object(a.a)(r.a.mark((function n(){var a,s,i,l,j,x,h,f,v,g,k;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return a=n.t0,n.next=10,Object(b.b)(a);case 10:return s=n.sent,i=s.map((function(e){var t=e.contractAddress;return Object(u.a)(t)})),n.next=14,Object(O.g)(c,i,a);case 14:l=n.sent,j=l.cakeBalance,x=l.cakeBnbLpBalance,h=l.cakePoolBalance,f=l.total,v=l.poolsBalance,g=l.cakeVaultBalance,k=l.verificationHash,t&&m((function(e){return Object(o.a)(Object(o.a)({},e),{},{verificationHash:k,cakeBalance:new p.a(j),cakeBnbLpBalance:new p.a(x),cakePoolBalance:new p.a(h),poolsBalance:new p.a(v),cakeVaultBalance:new p.a(g),total:new p.a(f)})}));case 23:return n.prev=23,w(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,w]),Object(o.a)(Object(o.a)({},f),{},{isLoading:k})}},905:function(e,t,n){"use strict";var c,r,o,a=n(5),s=(n(0),n(912)),i=n.n(s),l=n(948),j=n.n(l),b=n(9),u=n(2),d=n(4),x=n(1),p=d.e.table(c||(c=Object(b.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=d.e.div(r||(r=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=function(e){return Object(x.jsx)(u.Y,Object(a.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:h,h2:h,h3:h,h4:h,h5:h,h6:h,p:function(e){return Object(x.jsx)(u.kc,Object(a.a)({as:"p",my:"16px"},e))},table:p,ol:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ol"},e))},ul:function(e){return Object(x.jsx)(O,Object(a.a)({as:"ul"},e))},pre:d.e.pre(o||(o=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(x.jsx)(i.a,Object(a.a)({remarkPlugins:[j.a],components:f},e))}}}]);
//# sourceMappingURL=9.e1c8a16e.chunk.js.map
(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[21],{1386:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var c,o,i=n(8),r=n(9),j=n(1),a=n(7),l=n(2),d=n(4),s=n(13),b=n(115),O=n(36),x=n(62),u=n(378),p=n(25),h=n(442),f=n(104),g=n(22),v=n(42),y=n(101),m=n(872),T=n(166),I=n(223),k=n(194),E=n(252),N=n(0);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var S=Object(d.e)(l.r)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function A(){var e,t=Object(g.a)().account,n=Object(s.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),d=r[0],A=r[1],C=Object(j.useState)(a.d),w=Object(i.a)(C,2),K=w[0],q=w[1],B=Object(j.useState)(null),L=Object(i.a)(B,2),X=L[0],D=L[1],H=Object(f.b)(null!==K&&void 0!==K?K:void 0,null!==X&&void 0!==X?X:void 0),J=Object(i.a)(H,2),M=J[0],P=J[1],F=Object(v.h)();Object(j.useEffect)((function(){P&&F(P)}),[P,F]);var G=M===f.a.NOT_EXISTS||Boolean(M===f.a.EXISTS&&P&&a.e.equal(P.reserve0.raw,a.e.BigInt(0))&&a.e.equal(P.reserve1.raw,a.e.BigInt(0))),R=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===P||void 0===P?void 0:P.liquidityToken),V=Boolean(R&&a.e.greaterThan(R.raw,a.e.BigInt(0))),W=Object(j.useCallback)((function(e){d===o.TOKEN0?q(e):D(e)}),[d]),Y=Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(l.fc,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),_=Object(l.Cc)(Object(N.jsx)(h.a,{onCurrencySelect:W,showCommonBases:!0,selectedCurrency:null!==(e=d===o.TOKEN0?X:K)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),z=Object(i.a)(_,1)[0];return Object(N.jsx)(E.a,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsx)(k.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(N.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.H,{}),onClick:function(){z(),A(o.TOKEN0)},children:K?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:K}),Object(N.jsx)(l.fc,{ml:"8px",children:K.symbol})]}):Object(N.jsx)(l.fc,{ml:"8px",children:n("Select a Token")})}),Object(N.jsx)(O.b,{children:Object(N.jsx)(l.a,{})}),Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.H,{}),onClick:function(){z(),A(o.TOKEN1)},children:X?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:X}),Object(N.jsx)(l.fc,{ml:"8px",children:X.symbol})]}):Object(N.jsx)(l.fc,{as:p.d,children:n("Select a Token")})}),V&&Object(N.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(N.jsx)(l.fc,{textAlign:"center",children:n("Pool Found!")}),Object(N.jsx)(m.a,{to:"/pool",children:Object(N.jsx)(l.fc,{textAlign:"center",children:n("Manage this pool.")})})]}),K&&X?M===f.a.EXISTS?V&&P?Object(N.jsx)(u.a,{pair:P}):Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.fc,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(X)),children:Object(N.jsx)(l.fc,{textAlign:"center",children:n("Add Liquidity")})})]})}):G?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.fc,{textAlign:"center",children:n("No pool found.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(K),"/").concat(Object(T.a)(X)),children:n("Create pool.")})]})}):M===f.a.INVALID?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsx)(l.fc,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):M===f.a.LOADING?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsxs)(l.fc,{textAlign:"center",children:[n("Loading"),Object(N.jsx)(I.a,{})]})})}):null:Y]})]})})}},872:function(e,t,n){"use strict";var c,o=n(9),i=n(84),r=n(4),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);
//# sourceMappingURL=21.ed685139.chunk.js.map
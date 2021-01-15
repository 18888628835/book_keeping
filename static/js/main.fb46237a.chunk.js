(this.webpackJsonpbookkeeping=this.webpackJsonpbookkeeping||[]).push([[0],{102:function(n,e,t){"use strict";t.r(e);var c=t(1),i=t(0),r=t.n(i),a=t(31),o=t.n(a),s=(t(60),t(13)),l=t(4),d=t(23),u=t(12),b=t(2),x=t(3);function j(){var n=Object(b.a)(["\n  display: flex;\n  height: 10vh;\n  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    font-size: 20px;\n    color: #a3a3a3;\n    background-color: #f9da61;\n    &.select {\n      border-bottom: 2px solid black;\n      color: #333333;\n    }\n  }\n"]);return j=function(){return n},n}var f=x.a.section(j()),p=function(n){var e=n.type,t=n.onChange;return Object(c.jsx)(f,{children:["\u6536\u5165","\u652f\u51fa"].map((function(n){return Object(c.jsx)("div",{className:e===n?"select":"",onClick:function(){t(n)},children:n},n)}))})},h=function(n){var e=n.type,t=n.onChange;return Object(c.jsx)(p,{type:e,onChange:t})};function g(){var n=Object(b.a)(["\n  height: 8vh;\n  display: flex;\n  background-color: #f0f1f2;\n  > div {\n    color: #393a3b;\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    white-space: nowrap;\n  }\n  > input {\n    color: #c1c2c3;\n    outline: none;\n    border: none;\n    width: 100%;\n    background-color: inherit;\n    padding-right: 20px;\n  }\n"]);return g=function(){return n},n}var O=x.a.section(g()),m=function(n){var e=n.text,t=n.onChange;return Object(c.jsxs)(O,{children:[Object(c.jsx)("div",{children:"\u5907\u6ce8"}),Object(c.jsx)("input",{value:e,onChange:function(n){t(n.target.value)}})]})},v=t(19),y=[{id:0,name:"\u8863"},{id:1,name:"\u98df"},{id:2,name:"\u4f4f"},{id:3,name:"\u884c"}],k=function(){var n=Object(i.useState)(JSON.parse(localStorage.getItem("tags"))||y),e=Object(u.a)(n,2),t=e[0],c=e[1];Object(i.useEffect)((function(){localStorage.setItem("tags",JSON.stringify(t))}),[t]);return{tags:t,onAddTags:function(n){var e=prompt("\u8bf7\u8f93\u5165\u8868\u7b7e\u540d");if(null===e||""===e.trim())return null;c([].concat(Object(v.a)(n),[{id:Math.random(),name:e}]))},onEditTag:function(n,e){t[n].name=e,c(Object(v.a)(t))},findIndex:function(n){return t.findIndex((function(e){return e===n}))},removeTag:function(n){var e=t.filter((function(e){return e!==n}));c(e)},getTagName:function(n){return t.find((function(e){return e.id===n}))}}};function w(){var n=Object(b.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column-reverse;\n  height: 20vh;\n  padding-left: 20px;\n  > div {\n    margin: 10px 0;\n    > button {\n      background-color: #feffff;\n      border: none;\n      outline: none;\n      color: #999999;\n      border-bottom: 1px solid #999999;\n      padding: 0 8px;\n    }\n  }\n  > ul {\n    display: flex;\n    flex-wrap: wrap;\n    overflow-y: scroll;\n    ::-webkit-scrollbar {\n      display: none;\n    }\n    > li {\n      display: flex;\n      height: 24px;\n      padding: 10px;\n      background-color: #f4f5f6;\n      border-radius: 8px;\n      margin: 5px 15px 5px 0;\n      justify-content: center;\n      align-items: center;\n      &.selected {\n        background-color: #f5da74;\n        color: black;\n      }\n    }\n  }\n"]);return w=function(){return n},n}var C=x.a.section(w()),T=function(n){var e=k(),t=e.tags,i=e.onAddTags,r=n.selectTag,a=n.onChange;return Object(c.jsxs)(C,{children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){i(t)},type:"button",children:"\u65b0\u5efa\u6807\u7b7e"})}),Object(c.jsx)("ul",{children:t.map((function(n){return Object(c.jsx)("li",{className:r===n.id?"selected":"",onClick:function(){a(n.id)},children:n.name},n.id)}))})]})};function N(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  .pad {\n    display: flex;\n    flex-direction: row-reverse;\n    font-size: 20px;\n    line-height: 55px;\n    margin-right: 16px;\n  }\n  .number {\n    margin-right: -1px;\n    button {\n      float: left;\n      outline: none;\n      font-size: 18px;\n      border: 1px solid #dcddde;\n      border-left: none;\n      border-bottom: none;\n      width: 25%;\n      height: 64px;\n      display: table;\n    }\n    .ok {\n      height: 128px;\n      float: right;\n    }\n  }\n"]);return N=function(){return n},n}var S=x.a.section(N()),z=function(n){var e=n.outPut,t=n.onChange,i=n.onOk;return Object(c.jsxs)(S,{children:[Object(c.jsx)("div",{className:"pad",children:e}),Object(c.jsxs)("div",{className:"number",onClick:function(n){var c=n.target.innerText,r=function(n){n.length>16?t(n.slice(0,16)):t(n)};switch("0"===e&&"ok"!==c?r(c):["1","2","3","4","5","6","7","8","9"].indexOf(c)>=0&&r(e+c),c){case"\u6e05\u7a7a":r("0");break;case"\u5220\u9664":r(e.slice(0,-1)||"0");break;case".":-1!==e.indexOf(".")&&"0"!==e||r(e+".");break;case"0":"0"!==e&&r(e+"0");break;case"ok":i()}},children:[["1","2","3","\u6e05\u7a7a","4","5","6","\u5220\u9664","7","8","9"].map((function(n){return Object(c.jsx)("button",{children:n},n)})),Object(c.jsx)("button",{className:"ok",children:"ok"}),Object(c.jsx)("button",{style:{width:"50%"},children:"0"}),Object(c.jsx)("button",{children:"."})]})]})},I=function(){var n=JSON.parse(localStorage.getItem("record")||"[]"),e=Object(i.useState)(n),t=Object(u.a)(e,2),c=t[0],r=t[1];return{records:c,addRecord:function(n){alert("\u4fdd\u5b58\u6210\u529f"),r([].concat(Object(v.a)(c),[n])),localStorage.setItem("record",JSON.stringify([].concat(Object(v.a)(c),[n])))}}},F=t(26),P=t.n(F),_={type:"\u6536\u5165",selectTag:-1,text:"",outPut:"0"};var B=function(){var n=Object(i.useState)(_),e=Object(u.a)(n,2),t=e[0],r=e[1],a=function(n){r((function(e){return Object(d.a)(Object(d.a)({},e),n)}))},o=I().addRecord;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{type:t.type,onChange:function(n){a({type:n})}}),Object(c.jsx)(T,{selectTag:t.selectTag,onChange:function(n){a({selectTag:n})}}),Object(c.jsx)(m,{text:t.text,onChange:function(n){a({text:n})}}),Object(c.jsx)(z,{outPut:t.outPut,onChange:function(n){a({outPut:n})},onOk:function(){var n=Object(d.a)(Object(d.a)({},t),{},{time:P()().format("YYYY-MM-DD")});o(n),r(_)}})]})},E=t(45);function J(){var n=Object(b.a)(["\n  > div {\n    > div {\n      line-height: 40px;\n      background-color: rgba(51, 51, 51, 0.064);\n    }\n    > ul {\n      > li {\n        display: flex;\n        justify-content: space-between;\n        > span {\n          padding: 10px 16px;\n          font-size: 25px;\n        }\n      }\n    }\n  }\n"]);return J=function(){return n},n}var L=t(63);P.a.extend(L);var M=x.a.div(J());function Y(){var n,e=Object(i.useState)("\u6536\u5165"),t=Object(u.a)(e,2),r=t[0],a=t[1],o=k().getTagName,s=I().records.filter((function(n){return n.type===r})),l={},d=Object(E.a)(s);try{for(d.s();!(n=d.n()).done;){var b=n.value;l[b.time]||(l[b.time]=[]),l[b.time].push(b)}}catch(j){d.e(j)}finally{d.f()}var x=Object.keys(l).map((function(n){return[n,l[n]]}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{type:r,onChange:function(){a("\u6536\u5165"===r?"\u652f\u51fa":"\u6536\u5165")}}),Object(c.jsx)(M,{children:x.map((function(n,e){var t=Object(u.a)(n,2),i=t[0],r=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:i}),Object(c.jsx)("ul",{children:r.map((function(n){return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{children:o(n.selectTag)?o(n.selectTag).name:""}),Object(c.jsx)("span",{children:n.text}),Object(c.jsx)("span",{children:n.outPut})]},n.text)}))})]},i)}))})]})}function A(){var n=Object(b.a)(["\n  font-size: 20px;\n  > ul {\n    > li {\n      line-height: 44px;\n      padding: 6px 20px;\n      border-bottom: 1px solid #c2c1c7;\n      box-shadow: inset 0px -0.5px 0px #bcbbc1;\n      > a {\n        display: flex;\n        justify-content: space-between;\n        > span {\n        }\n      }\n    }\n  }\n  > button {\n    font-size: inherit;\n    padding: 9px 16px;\n    display: block;\n    margin: auto;\n    margin-top: 20px;\n    background: #f5da74;\n    border-radius: 8px;\n    color: #333333;\n    font-size: inherit;\n    outline: none;\n    border: none;\n  }\n"]);return A=function(){return n},n}var D=x.a.section(A());function R(){var n=k(),e=n.tags,t=n.onAddTags;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(D,{children:[Object(c.jsx)("ul",{children:e.map((function(n){return Object(c.jsx)("li",{children:Object(c.jsxs)(s.b,{to:"/tags/".concat(n.id),children:[n.name,Object(c.jsx)("span",{children:">"})]})},n.id)}))}),Object(c.jsx)("button",{onClick:function(){t(e)},children:"\u65b0\u5efa\u6807\u7b7e"})]})})}function q(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  > svg {\n    margin: 0 auto;\n    font-size: 26px;\n  }\n  > span {\n    margin-top: 5px;\n  }\n"]);return q=function(){return n},n}var H=x.a.div(q()),U=function(n){return Object(c.jsxs)(H,{children:[Object(c.jsx)("svg",{className:"icon","aria-hidden":"true",children:Object(c.jsx)("use",{xlinkHref:"#".concat(n.name)})}),Object(c.jsx)("span",{children:n.tagName})]})};function V(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 20px;\n  position: relative;\n  border-top: 1px solid #e3e3e3;\n  .select {\n    color: #333333;\n  }\n  a:nth-child(2) > div {\n    position: absolute;\n    left: 50%;\n    top: -17px;\n    text-align: center;\n    transform: translateX(-50%);\n    .icon {\n      font-size: 43px;\n      border-radius: 50%;\n      border-top: 3px solid #e9e9e9;\n      background-color: #feffff;\n      margin-bottom: 5px;\n    }\n  }\n"]);return V=function(){return n},n}function X(){var n=Object(b.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n"]);return X=function(){return n},n}function G(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 375px;\n  height: 100vh;\n  margin: 0 auto;\n"]);return G=function(){return n},n}var K=x.a.section(G()),Q=x.a.main(X()),W=x.a.div(V()),Z=[["/tags","icon-biaoqian","\u6807\u7b7e"],["/","icon-tianjia","\u8bb0\u8d26"],["/account","icon-tubiao4","\u660e\u7ec6"]],$=function(n){var e=Object(i.useState)(Z)[0];return Object(c.jsxs)(K,{children:[Object(c.jsx)(Q,{children:n.children}),Object(c.jsx)(W,{children:e.map((function(n){return Object(c.jsx)(s.c,{exact:!0,to:n[0],activeClassName:"select",children:Object(c.jsx)(U,{name:n[1],tagName:n[2]})},n[0])}))})]})},nn=t(106),en=(t(68),t(46)),tn=t.n(en);function cn(){var n=Object(b.a)(["\n  > div:nth-child(1) {\n    color: #72c140;\n  }\n"]);return cn=function(){return n},n}function rn(){var n=Object(b.a)(["\n  line-height: 56px;\n  text-align: center;\n"]);return rn=function(){return n},n}function an(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  > div:nth-child(1) {\n    position: relative;\n    background-color: #f5da74;\n    padding: 15px 0;\n    text-align: center;\n    color: #333333;\n    > span {\n      position: absolute;\n      left: 20px;\n    }\n  }\n  > div:nth-child(2) {\n    line-height: 50px;\n    display: flex;\n    padding: 2px 0;\n    box-shadow: inset 0px -0.5px 0px #bcbbc1;\n    > input {\n      color: #bcbbc1;\n      font-size: inherit;\n      border: none;\n      outline: none;\n    }\n    > span {\n      padding: 0px 15px;\n    }\n  }\n\n  > button {\n    margin-bottom: 0px;\n    font-size: inherit;\n    line-height: 50px;\n    margin: 50px auto;\n    padding: 0 15px;\n    background-color: #f2da83;\n    outline: none;\n    border: none;\n    border-radius: 8px;\n  }\n"]);return an=function(){return n},n}var on=x.a.section(an()),sn=x.a.section(rn()),ln=Object(x.a)(nn.a)(cn()),dn=function(){var n=Object(l.f)(),e=k(),t=e.tags,i=e.onEditTag,r=e.removeTag,a=e.findIndex,o=Object(l.g)(),s=t.find((function(n){return n.id===Number(o.id)})),d=a(s);return Object(c.jsxs)(on,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{onClick:function(){n.goBack()},children:"\u8fd4\u56de"}),"\u7f16\u8f91\u6807\u7b7e"]}),s?function(n){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"tag",children:[Object(c.jsx)("span",{children:"\u6807\u7b7e\u540d"}),Object(c.jsx)("input",{defaultValue:n.name,onBlur:function(n){i(d,n.target.value)}})]}),Object(c.jsx)("button",{onClick:function(){r(n)},children:"\u5220\u9664\u6807\u7b7e"})]})}(s):Object(c.jsx)(sn,{children:Object(c.jsxs)(tn.a,{transitionEnter:!0,transitionLeave:!0,transitionEnterTimeout:2500,transitionLeaveTimeout:1500,transitionName:"animated",children:[Object(c.jsx)("div",{className:"animate__heartBeat animate__bounce slower",children:Object(c.jsx)(ln,{status:"success"})},"nima"),Object(c.jsx)("div",{className:"animate__heartBeat animate__fadeInUp",children:"\u60a8\u5df2\u7ecf\u6210\u529f\u5220\u9664\u6807\u7b7e"},"niba")]})})]})};var un=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(s.a,{children:Object(c.jsx)(l.c,{children:Object(c.jsxs)($,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:B}),Object(c.jsx)(l.a,{exact:!0,path:"/account",component:Y}),Object(c.jsx)(l.a,{exact:!0,path:"/tags",component:R}),Object(c.jsx)(l.a,{path:"/tags/:id",component:dn})]})})})})},bn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,107)).then((function(e){var t=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;t(n),c(n),i(n),r(n),a(n)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(un,{})}),document.getElementById("root")),bn()},60:function(n,e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.fb46237a.chunk.js.map
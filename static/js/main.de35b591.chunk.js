(this["webpackJsonpdicey-addiction"]=this["webpackJsonpdicey-addiction"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={container:"score-table_container__1xRRg",headers:"score-table_headers__3yTf4",rows:"score-table_rows__2FO4B"}},,,,,,,,,,function(e,t,a){e.exports={form:"name-form_form__1yJhr",input:"name-form_input__3CNW8"}},,,,,function(e,t,a){e.exports={digit:"digit_digit__1dpdl",dragging:"digit_dragging__26MOy"}},function(e,t,a){e.exports={digitBox:"digit-box_digitBox__3u9xM",isOver:"digit-box_isOver__GqT-x"}},function(e,t,a){e.exports={notRunning:"timer_notRunning__3mBfc",running:"timer_running__1jF1Y"}},,,,,function(e,t,a){e.exports={button:"button_button__2vIJC"}},function(e,t,a){e.exports={container:"digits_container___X42M"}},function(e,t,a){e.exports={name:"text_name__3i-h3"}},function(e,t,a){e.exports={formula:"sum_formula__2SYBf"}},,,,,,function(e,t,a){e.exports=a(48)},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),l=a.n(c),o=a(9),u=a(2),i=a(50),s=a(35),m=a(34),p=(a(46),a(36)),v=a(29),f=a.n(v),g=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return"".concat(e," ").concat(t)}),"")};function y(e){var t=e.className,a=e.children,n=Object(p.a)(e,["className","children"]);return r.a.createElement("button",Object.assign({className:g(f.a.button,t)},n),a)}var d=a(51),b=a(25),E="digit",O=a(22),j=a.n(O);function _(e){var t=e.value,a=(e.canDrag,Object(b.b)({from:{number:0},to:{number:isNaN(t)?0:t},config:{duration:500}})),n=Object(d.a)({item:{type:E,value:t},collect:function(e){return{isDragging:!!e.isDragging(),value:t}},canDrag:function(){return!isNaN(t)}}),c=Object(u.a)(n,2),l=c[0].isDragging,o=c[1];return r.a.createElement("div",{className:g(j.a.digit,l&&j.a.dragging),ref:o},isNaN(t)?"?":r.a.createElement(b.a.span,null,a.number.interpolate((function(e){return Math.floor(e)}))))}var x=a(30),h=a.n(x);function N(){var e=Object(n.useContext)(K),t=Object(u.a)(e,1)[0],a=t.digits.length?t.digits:["?","?","?","?"];return r.a.createElement("div",{className:h.a.container},a.map((function(e,t){return r.a.createElement(_,{key:t,value:e})})))}var w=a(5),C=a(17),M=a.n(C),S=a(31),I=a.n(S);function k(e){var t=e.className,a=e.children;return r.a.createElement("span",{className:g(I.a.name,t)},a)}var D=a(7),F=a.n(D);function R(){var e=Object(n.useContext)(K),t=Object(u.a)(e,1)[0].players,a=t.player1,c=t.player2;return r.a.createElement("div",{className:F.a.container},r.a.createElement(k,{className:F.a.headers},"Jugador"),r.a.createElement(k,{className:F.a.headers},"Puntaje"),r.a.createElement(k,{className:F.a.rows},a&&a.name),r.a.createElement(k,{className:F.a.rows},a&&a.score),r.a.createElement(k,{className:F.a.rows},c&&c.name),r.a.createElement(k,{className:F.a.rows},c&&c.score))}var B=a(52),J=a(23),P=a.n(J);function T(e){var t=e.id,a=Object(n.useContext)(K),c=Object(u.a)(a,2),l=c[0],o=l.timer,i=l.move,s=c[1],m=Object(B.a)({accept:E,drop:function(e){var a=e.value;return i[t]=a,s({type:"setMove",value:i.splice(0)})},collect:function(e){return{isOver:!!e.isOver()}},canDrop:function(){return o.running}}),p=Object(u.a)(m,2),v=p[0].isOver,f=p[1];return r.a.createElement("div",{ref:f,className:g(P.a.digitBox,v&&P.a.isOver)},isNaN(i[t])?"":i[t])}var A=a(32),G=a.n(A);function q(){var e=Object(n.useContext)(K),t=Object(u.a)(e,1)[0].move;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:G.a.formula},r.a.createElement(T,{id:"0"},t[0]),r.a.createElement(T,{id:"1"},t[1]),r.a.createElement("span",null,"+"),r.a.createElement(T,{id:"2"},t[2]),r.a.createElement(T,{id:"3"},t[3])))}var U=a(24),W=a.n(U);function L(){var e=Object(n.useState)(15),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),v=p[0],f=p[1],d=Object(n.useContext)(K),b=Object(u.a)(d,2),E=(b[0],b[1]);return Object(n.useEffect)((function(){var e;return a&&i&&(e=setInterval((function(){c((function(t){return t<=1?(s(!1),f(!0),clearInterval(e),15):(s(!0),t-1)}))}),1e3)),function(){return clearInterval(e)}}),[i,a]),Object(n.useEffect)((function(){return E({type:"setTimer",value:{running:i,finished:v}})}),[i,v,E]),r.a.createElement(y,{className:g(W.a.notRunning,(i||v)&&W.a.running),onClick:function(){return!v&&s(!0)}},function(e,t,a){return a||t?a?"TIEMPO!":"".concat(e," SEGUNDOS!"):"EMPEZAR"}(a,i,v))}var Y=a(33),X=a.n(Y),Z={arrayMerge:function(e,t){return t}},$=function(e,t,a){return t},z=function(e,t,a){return X()(e,t,Object.assign({},a,Z))},H={start:function(){var e=Object(n.useContext)(K),t=Object(u.a)(e,2),a=(t[0],t[1]),c=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),r=a[0],c=a[1];return[function(t){t&&(t.preventDefault(),e(),c({}))},function(e){e.persist(),c((function(t){return Object(o.a)({},t,Object(w.a)({},e.target.name,e.target.value))}))},r]}((function(){return a({type:"setPlayer",value:{player1:{name:p.toUpperCase()},player2:{name:v.toUpperCase()}},nextStep:"generate"})})),l=Object(u.a)(c,3),i=l[0],s=l[1],m=l[2],p=m.player1,v=m.player2;return r.a.createElement("form",{onSubmit:i,className:M.a.form},r.a.createElement("label",null,r.a.createElement(k,null,"Jugador 1")),r.a.createElement("input",{className:M.a.input,type:"text",name:"player1",onChange:s,value:p||"",required:!0}),r.a.createElement("label",null,r.a.createElement(k,null,"Jugador 2")),r.a.createElement("input",{className:M.a.input,type:"text",name:"player2",onChange:s,value:v||"",required:!0}),r.a.createElement(y,{type:"submit"},"Siguiente"))},generate:function(){var e=Object(n.useContext)(K),t=Object(u.a)(e,2),a=(t[0],t[1]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(y,{onClick:function(){return a({type:"setDigits",value:["","","",""].map((function(e){return Math.floor(10*Math.random())})),nextStep:"player1"})}},"Generar"))},player1:function(){var e=Object(n.useContext)(K),t=Object(u.a)(e,2),a=t[0],c=a.move,l=a.players.player1,i=t[1],s={player1:Object(o.a)({},l,{move:c.map((function(e){return""===e?void 0:e}))}),move:["","","",""]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(L,null),r.a.createElement(k,null,l.name),r.a.createElement(q,null),r.a.createElement(y,{onClick:function(){return i({type:"next",value:s,nextStep:"player2"})}},"Siguiente"))},player2:function(){var e=Object(n.useContext)(K),t=Object(u.a)(e,2),a=t[0],c=a.move,l=a.players.player2,i=t[1],s={player2:Object(o.a)({},l,{move:c.map((function(e){return""===e?void 0:e}))}),move:["","","",""]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(L,null),r.a.createElement(k,null,l.name),r.a.createElement(q,null),r.a.createElement(y,{onClick:function(){return i({type:"calculate",value:s})}},"Siguiente"))},score:function(){var e=Object(n.useContext)(K),t=Object(u.a)(e,2),a=t[0],c=a.round,l=c.draw,o=c.bothLose,i=c.winner,s=a.players,m=s.player1,p=s.player2,v=t[1];console.info(m,p);return r.a.createElement(r.a.Fragment,null,r.a.createElement((function(){return o?r.a.createElement(k,null,"Ambos pierden"):r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,l?"Empate":"Ganador ".concat(i)),r.a.createElement(k,null,"".concat(m.name," vs ").concat(p.name)),r.a.createElement(k,null,"".concat(m.sum," vs ").concat(p.sum)))}),null),r.a.createElement(R,null),r.a.createElement(y,{onClick:function(){return v({type:"nextRound"})}},"Siguiente"))},end:function(){var e=Object(n.useContext)(K),t=Object(u.a)(e,1)[0].winner;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null,"El ganador es ".concat(t)),r.a.createElement(R,null))}},K=r.a.createContext();function Q(e,t){switch(console.info({state:e,action:t}),t.type){case"setDigits":return z(e,{digits:t.value,step:t.nextStep});case"next":return z(e,{move:V.move,players:t.value,step:t.nextStep},{arrayMerge:$});case"setMove":return z(e,{move:t.value},{arrayMerge:$});case"setPlayer":return z(e,{players:t.value,step:t.nextStep});case"setTimer":return z(e,{timer:t.value});case"calculate":var a=(e=z(e,{move:V.move,players:t.value},{arrayMerge:$})).players.player1.move,n=e.players.player2.move,r=parseInt("".concat(a[0]).concat(a[1]))+parseInt("".concat(a[2]).concat(a[3])),c=parseInt("".concat(n[0]).concat(n[1]))+parseInt("".concat(n[2]).concat(n[3]));r=isNaN(r)?1e3:r,c=isNaN(c)?1e3:c;var l,o=Math.abs(100-r),u=Math.abs(100-c),i=o===u,s=r>=1e3&&c>=1e3;i||s||(r>100&&(l=!s&&e.players.player2.name),c>100&&(l=!s&&e.players.player1.name),l=o>u?e.players.player2.name:e.players.player1.name);var m={result:o,sum:r>=1e3?"Incompleto":r,score:l===e.players.player1.name?e.players.player1.score+1:e.players.player1.score},p={result:u,sum:c>=1e3?"Incompleto":c,score:l===e.players.player2.name?e.players.player2.score+1:e.players.player2.score};return z(e,{round:{draw:i,bothLose:s,winner:l},players:{player1:m,player2:p},step:"score"});case"nextRound":return e.players.player1.score>=3?z(e,{move:V.move,digits:V.digits,step:"end",winner:e.players.player1.name},{arrayMerge:$}):e.players.player2.score>=3?z(e,{move:V.move,digits:V.digits,step:"end",winner:e.players.player2.name},{arrayMerge:$}):z(e,{move:V.move,digits:V.digits,step:"generate"},{arrayMerge:$});default:throw new Error}}var V={players:{player1:{score:0},player2:{score:0}},timer:{running:!1,finished:!1},digits:{},move:["","","",""],round:{},step:"start"},ee=function(e){var t=Object(n.useReducer)(Q,V),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement(K.Provider,{value:[c,l]},e.children)},te=function(){return r.a.createElement("div",null)},ae=function(){var e=Object(n.useContext)(K),t=Object(u.a)(e,1)[0].step;console.info(t);var a=H[t]||te;return r.a.createElement(a,null)};var ne=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ee,null,r.a.createElement(i.a,{backend:s.a,options:m.a},r.a.createElement(ae,null))))};a(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[38,1,2]]]);
//# sourceMappingURL=main.de35b591.chunk.js.map
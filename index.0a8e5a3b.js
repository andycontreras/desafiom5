function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequire8840;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){i[n]=e},e.parcelRequire8840=o),o.register("7PhYn",(function(e,t){var i,o;n(e.exports,"resolve",(()=>i),(n=>i=n)),n(e.exports,"register",(()=>o),(n=>o=n));var s={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)s[e[t]]=n[e[t]]},i=function(n){var e=s[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o("7PhYn").register(JSON.parse('{"di8mO":"index.0a8e5a3b.js","bnN8j":"win.569837b5.png","02iNh":"lose.b7549d6a.png","2OKZr":"tie.3a2cc35f.png","407lu":"piedra.60203d08.png","cQkp1":"papel.9f7b03c8.png","gtmBI":"tijera.cad77ea3.png"}'));const s={data:{currentGame:{myPlay:"",botPlay:""},history:{myScore:0,botScore:0}},listeners:[],getStorage(){const n=JSON.parse(localStorage.getItem("data"));if(localStorage.getItem("data"))return this.data.history=n;console.log(n)},getState(){return this.data},setState(n){this.data=n;for(const n of this.listeners)n();this.savedData()},subscribe(n){this.listeners.push(n)},setMove(n){this.getState().currentGame.myPlay=n,this.setScore()},setScore(){const n=this.getState(),e=n.currentGame.myPlay,t=n.currentGame.botPlay,i=this.whoWins(e,t),o=n.history.myScore,s=n.history.botScore;return"win"==i?this.setState({...n,history:{myScore:o+1,botScore:s}}):"lose"==i?this.setState({...n,history:{myScore:o,botScore:s+1}}):void 0},whoWins(n,e){const t=["piedra"==n&&"tijera"==e,"papel"==n&&"piedra"==e,"tijera"==n&&"papel"==e].includes(!0),i=["piedra"==n&&"papel"==e,"papel"==n&&"tijera"==e,"tijera"==n&&"piedra"==e].includes(!0);return 1==t?"win":1==i?"lose":"tie"},savedData(){const n=this.getState().history;localStorage.setItem("data",JSON.stringify(n))}};const a=["piedra","papel","tijera"][Math.floor(3*Math.random())];o.register("amVfs",(function(n,e){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("bnN8j")})),o.register("kVZsc",(function(e,t){var i;n(e.exports,"getBundleURL",(()=>i),(n=>i=n));var o={};function s(n){return(""+n).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(n){var e=o[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(n)return s(n[2])}return"/"}(),o[n]=e),e}})),o.register("lMGEl",(function(n,e){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("02iNh")})),o.register("aSTi8",(function(n,e){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("2OKZr")}));const r=o("amVfs"),d=o("lMGEl"),c=o("aSTi8");const l=[{path:/\/desafiom5\/home/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");return t.innerHTML="\n  .home-container{\n    height: 100vh;\n    display:flex;\n    justify-content: space-between;\n    flex-direction: column;\n    overflow-y: hidden;\n  }\n  @media(min-width: 679px){\n    .home-container{\n      padding: 25px 45px 0;\n    }\n  }\n\n  .start-button{\n    margin: 50px 0;\n  }\n  @media(min-width: 679px){\n    .start-button{\n      align-self: center;\n      width: 560px;\n      margin: 40px 0;\n    }\n  }\n  .hands-content{\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    top: 30px;  \n  }",e.innerHTML='\n  <div class="home-container">\n      <custom-text variant="titulo">Piedra, Papel o Tijera</custom-text>\n      <custom-button class="start-button">Empezar</custom-button>\n    <div class="hands-content">\n      <hands-comp hand="piedra"></hands-comp>\n      <hands-comp hand="papel"></hands-comp>\n      <hands-comp hand="tijera"></hands-comp>\n    </div>\n  </div>',e.querySelector(".start-button").addEventListener("click",(()=>{n.goTo("/desafiom5/instructions/")})),e.appendChild(t),e}},{path:/\/desafiom5\/instructions/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");return t.innerHTML="\n  .instructions-container{\n    height: 100vh;\n    display:flex;\n    justify-content: space-between;\n    flex-direction: column;\n    overflow-y: hidden;\n  }\n  @media(min-width: 679px){\n    .instructions-container{\n      padding: 25px 45px 0;\n    }\n  }\n\n  .text{\n    text-align: center;\n    padding:15px;\n  }\n\n  .start-button{\n    margin: 50px 0;\n  }\n  @media(min-width: 679px){\n    .start-button{\n      align-self: center;\n      width: 560px;\n      margin: 40px 0;\n    }\n  }\n  .hands-content{\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    top: 30px;  \n  }\n  ",e.innerHTML='\n  <div class="instructions-container">\n      <custom-text class="text" variant="body">Presioná jugar\n      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n      <custom-button class="start-button">¡Jugar!</custom-button>\n    <div class="hands-content">\n      <hands-comp hand="piedra"></hands-comp>\n      <hands-comp hand="papel"></hands-comp>\n      <hands-comp hand="tijera"></hands-comp>\n    </div>\n  </div>',e.querySelector(".start-button").addEventListener("click",(()=>{n.goTo("/desafiom5/game/")})),e.appendChild(t),e}},{path:/\/desafiom5\/game/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");let i=3;const o=setInterval((()=>{i--;e.querySelector(".countdown").textContent=String(i),i<1&&clearInterval(o)}),1e3);t.innerHTML="\n  .countdown{\n    font-size: 170px;\n    padding:20px;\n    margin-top: 130px;\n    align-self: center;\n  }\n  @media(min-width: 679px){\n    .countdown{\n      font-size: 200px;\n      margin-top: 0;\n\n    }\n  }\n  .game-container{\n    height: 100vh;\n    padding: 0 25px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    overflow-y: hidden;\n  }\n  .text{\n    align-text: center;\n    padding:15px;\n  }\n  .hand-view{\n    position: relative;\n    top: 0px;\n    opacity: 0.5;\n  }\n  @media (min-width: 679px){\n    .hand-view{\n      position: relative;\n      top: 40px;\n      opacity: 0.5;\n\n    }\n  }\n  .hand-view:hover{\n    top: 0px;\n    opacity: 1;\n    display: inherit;\n    transform: translateY(-30px);\n    transition: all 0.5s;\n  }\n  .hands-content{\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    top: 20px;\n  }\n  .hand-select{\n    display: flex;\n    justify-content: center;\n  }\n  .bot-hands{\n    display: none;\n    flex-direction: row;\n    justify-content: center;\n    transform: rotate(180deg);\n    margin-bottom: 50px;\n    position: relative;\n    top:-30px;\n  }\n  .bot__piedra, .bot__papel, .bot__tijera{\n    display: none\n  }\n  .selected {\n    position: absolut;\n    opacity: 1;\n\n  }\n  ",e.innerHTML=`\n  <div class="game-container">\n    <div class="bot-hands">\n      <hands-comp class="bot__piedra" hand="piedra"></hands-comp>\n      <hands-comp class="bot__papel" hand="papel"></hands-comp>\n      <hands-comp class="bot__tijera" hand="tijera"></hands-comp>\n    </div>\n    <div class="countdown">${i}</div>\n    <div class="hands-content">\n      <hands-comp class="hand-view piedra" hand="piedra"></hands-comp>\n      <hands-comp class="hand-view papel" hand="papel"></hands-comp>\n      <hands-comp class="hand-view tijera" hand="tijera"></hands-comp>\n    </div>\n    </div>\n    `;const r=e.querySelector(".countdown"),d=e.querySelector(".bot-hands"),c=e.querySelector(".bot__piedra"),l=e.querySelector(".bot__papel"),p=e.querySelector(".bot__tijera"),h=e.querySelector(".hands-content"),u=e.querySelector(".piedra"),m=e.querySelector(".papel"),y=e.querySelector(".tijera");function f(n){"piedra"==n?(c.style.display="inherit",d.style.display="inherit",r.style.display="none"):"papel"==n?(l.style.display="inherit",d.style.display="inherit",r.style.display="none"):"tijera"==n&&(p.style.display="inherit",d.style.display="inherit",r.style.display="none")}function g(n){"piedra"==n?(m.style.display="none",y.style.display="none",h.style.justifyContent="center",u.classList.remove(".hand-view"),u.classList.add("selected"),f(a)):"papel"==n?(u.style.display="none",y.style.display="none",h.style.justifyContent="center",m.classList.remove(".hand-view"),m.classList.add("selected"),f(a)):"tijera"==n&&(m.style.display="none",u.style.display="none",h.style.justifyContent="center",y.classList.remove(".hand-view"),y.classList.add("selected"),f(a))}for(const n of h.children)n.addEventListener("click",(()=>{const e=n.getAttribute("hand");clearInterval(o),"piedra"==e?(s.setMove("piedra"),g("piedra"),setTimeout((()=>{}),3e3)):"papel"==e?(s.setMove("papel"),g("papel"),setTimeout((()=>{}),1e3)):"tijera"==e&&(s.setMove("tijera"),g("tijera"),setTimeout((()=>{}),1e3))}));const x=s.getState().currentGame;return x.botPlay=a,x.myPlay,s.data.currentGame.myPlay,setTimeout((()=>{""==x.myPlay?n.goTo("/desafiom5/instructions/"):n.goTo("/desafiom5/result/")}),5e3),e.appendChild(t),e}},{path:/\/desafiom5\/result/,component:function(n){const e=document.createElement("div"),t=document.createElement("style");var i=s.data.history.myScore,o=s.data.history.botScore;t.innerHTML="\n  .result-container{\n    display:flex;\n    flex-direction: column;\n    padding: 15px 25px;\n    align-items: center;\n  }\n  .win-sticker, .lose-sticker, .tie-sticker{\n    width: 250px;\n    height: 250px;\n  }\n\n  .win{\n    display: none;\n    padding: 20px;\n  }\n  .lose{\n    display: none;\n    padding: 20px;\n  }\n  .tie{\n    display: none;\n    padding: 20px;\n  }\n\n  .score{\n    border: solid 6px;\n    border-radius: 15px;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 30px 70px;\n    background-color: #fff\n  }\n\n  .points{\n    font-size: 45px;\n    padding: 0 15px 15px;\n  }\n  .text{\n    padding: 0 25px;\n    font-size: 25px;\n  }\n\n  .buttons{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n  ",e.innerHTML=`\n  <div class="result-container">\n    <div class="win">\n      <img class="win-sticker" src=${r}></img>\n    </div>\n    <div class="lose">\n      <img class="lose-sticker" src=${d}></img>\n    </div>\n    <div class="tie">\n      <img class="tie-sticker" src=${c}></img>\n    </div>\n    <div class="score">\n      <h1 class="points">Puntajes</h1>\n      <h3 class="text">Tú: ${i} pts.</h3>\n      <h3 class="text">Bot: ${o} pts.</h3>\n    </div>\n    <div class="buttons">\n      <custom-button class="back">Volver a jugar</custom-button>\n      <custom-button class="inicio">Volver al inicio</custom-button>\n    </div>\n  </div>\n  `;const a=s.getState().currentGame,l=a.myPlay,p=a.botPlay,h=s.whoWins(l,p),u=e.querySelector(".win"),m=e.querySelector(".lose"),y=e.querySelector(".tie");"win"==h?u.style.display="inherit":"lose"==h?m.style.display="inherit":"tie"==h&&(y.style.display="inherit");const f=e.querySelector(".back"),g=e.querySelector(".inicio");return f.addEventListener("click",(()=>{n.goTo("/desafiom5/game/")})),g.addEventListener("click",(()=>{n.goTo("/desafiom5/home/")})),e.appendChild(t),e}}];function p(){return location.host.includes("gitgub.io")}customElements.define("custom-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const n=document.createElement("button"),e=document.createElement("style");n.className="root",e.innerHTML='\n\t\t\t.root{\n\t\t\t\tfont: bold;\n\t\t\t\tborder: solid 3px #000;\n\t\t\t\tborder-radius: 9px;\n\t\t\t\tpadding: 17px 13px;\n\t\t\t\tfont-size: 35px;\n\t\t\t\twidth:100%;\n\t\t\t\tfont-family: "Ubuntu", sans-serif;\n\t\t\t\tbackground-color: #3D5696; \n\t\t\t\tcolor:#f1f1f1;\n\t\t\t}',n.textContent=this.textContent,this.shadow.appendChild(n),this.shadow.appendChild(e)}}),customElements.define("custom-text",class extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.getAttribute("variant"),e=document.createElement("div"),t=document.createElement("style"),i=this.attachShadow({mode:"open"});t.innerHTML="\n      .titulo{\n        font-size: 65px;\n        font-weight: bold;\n        color: #4C9D0D;\n        text-shadow: #000 2px 2px 4px;\n\t\t\t\tmargin: 20px;\n\t\t\t\ttext-align: center;\n      }\n      .body{\n        font-size: 40px;\n        color: #4C9D0D;\n        text-shadow: #000 2px 1px;\n      }",e.className=n,e.textContent=this.textContent,i.appendChild(e),i.appendChild(t)}}),o.register("9oZ9x",(function(n,e){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("407lu")})),o.register("42Z8d",(function(n,e){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("cQkp1")})),o.register("9GBpj",(function(n,e){n.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("gtmBI")}));const h={piedra:o("9oZ9x"),papel:o("42Z8d"),tijera:o("9GBpj")};customElements.define("hands-comp",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const n=document.createElement("div"),e=document.createElement("style"),t=this.getAttribute("hand");e.innerHTML="\n      .hand{\n        width: 90px;\n        height: 200px;\n      }",n.innerHTML=`\n      <img class="hand" src=${h[t]}></img>`,this.shadow.appendChild(e),this.shadow.appendChild(n)}}),function(){s.getStorage();!function(n){function e(n){const e=p()?"/desafiom5"+n:n;history.pushState({},"",e),t(e)}function t(t){const i=p()?t.replace("/desafiom5",""):t;for(const t of l)if(t.path.test(i)){const i=t.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(i)}}"/"==location.pathname?e("/desafiom5/home"):t(location.pathname),window.onpopstate=function(){t(location.pathname)},location.host.includes("andycontreras.github.io")?e("/desafiom5/home"):t(location.pathname)}(document.querySelector(".root"))}();
//# sourceMappingURL=index.0a8e5a3b.js.map

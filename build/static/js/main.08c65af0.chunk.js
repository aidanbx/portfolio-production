(this["webpackJsonpabarbieux-frontend"]=this["webpackJsonpabarbieux-frontend"]||[]).push([[0],{13:function(t){t.exports=JSON.parse('[{"root":{"title":"Enter","children":["projects","resume","tools","art"]}},{"projects":{"title":"Projects","children":["all-projects","web","fun","school"]},"resume":{"title":"Interactive Resume","route":"/interactive-resume/"},"tools":{"title":"Tools","children":["notes","timeline"]},"art":{"title":"Arty Things","children":["all-art","ceramics","photography","random"]}},{"all-projects":{"title":"View All","link":"https://github.com/abarbieu?tab=repositories"},"web":{"title":"Web Dev","children":["frontend","backend","database"]},"fun":{"title":"Fun","children":["fractals","data-vis"]},"school":{"title":"School Projects","children":["thumbsim","highschool"]},"notes":{"title":"Notes","route":"/notes/"},"timeline":{"title":"TimeLine","route":"/timeline/"},"all-art":{"title":"View All","route":"/art/"},"ceramics":{"title":"Ceramics","route":"/art/ceramics/"},"photography":{"title":"Photography","route":"/art/photography"},"random":{"title":"Random","route":"/art/random"}},{"frontend":{"title":"Front-End","link":"https://github.com/abarbieu/abarbieux-frontend"},"backend":{"title":"Back-End","link":"https://github.com/abarbieu/abarbieux-backend"},"database":{"title":"Postgres Fun","link":"https://github.com/abarbieu/postgreSQL-playground"},"thumbsim":{"title":"ARM Simulator","link":"https://github.com/abarbieu/arm-thumb-simulator"},"highschool":{"title":"Highschool CS","children":["ants","food-rater","trig-circles"]}},{"ants":{"title":"Langtons Ant","link":"https://github.com/abarbieu/Ants"},"food-rater":{"title":"Food Rater IOS App","link":"https://github.com/abarbieu/FoodRater"},"trig-circles":{"title":"Trig Circles","link":"https://github.com/abarbieu/Trig-Circles"}}]')},16:function(t,e,n){t.exports=n(26)},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var a={};n.r(a);var o=n(0),i=n.n(o),r=n(12),s=n.n(r),l=n(3),c=n(4),u=n(1),h=n(7),d=n(6);var p={background:"#333",color:"white",textAlight:"center",padding:"10px"},m=function(){return i.a.createElement("header",{style:p},i.a.createElement("h1",null,"Todo List"))},b=n(13),f=n(8),g=n(14),v=n(15);Object.defineProperty(exports,"__esModule",{value:!0});var w=n(0),k=n(21);n(24);var y=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).layerToBtns=function(t,e){for(var n=[],o=0,i=Object.entries(t);o<i.length;o++){var r=Object(v.a)(i[o],2),s=r[0],l=r[1];n.push(w.createElement("button",{key:k.v4(),className:"Menu-btn",style:l.style,onClick:a.nodeClicked.bind(Object(u.a)(a),e,s)},a.props.menu[e][s].title))}return n},a.nodeClicked=function(t,e){var n=a.props.menu[t][e],o=a.state.active[t][e];n.children?(a.setState((function(n){return n.active.splice(t),n.active[t]=Object(g.a)({},e,o),n})),a.addChildren(n.children,o,t)):n.link?a.followLink(n.link):n.route&&a.followRoute(n.route)},a.addChildren=function(t,e,n){var o=e.spawnRange.to,i=e.spawnRange.from;a.setState((function(r){return r.active[n+1]={},t.forEach((function(s,l){var c=i+l/t.length*((o<i?o+2:o)-i),u=a.addAnimation(c,100);r.active[n+1][s]={pos:{x:e.pos.x+u.x,y:e.pos.y+u.y},spawnRange:a.getSpawnRange(c),style:{animationName:"animation".concat(Math.ceil(10*c)),left:e.pos.x,top:e.pos.y}}})),r}))},a.addAnimation=function(t,e){var n=document.styleSheets[0],a="animation".concat(Math.ceil(10*t));t=Math.PI*t;var o="@keyframes ".concat(a," {\n        0% {\n          transform: translate(0px, 0px);\n        }\n        100% {\n          transform: translate(\n            ").concat(Math.trunc(Math.cos(t)*e),"px,\n            ").concat(Math.trunc(Math.sin(t)*-e),"px);\n          }\n        }");return n.insertRule(o,n.cssRules.length),{x:Math.trunc(Math.cos(t)*e),y:Math.trunc(Math.sin(t)*-e)}},a.getSpawnRange=function(t){t*=8;var e=Math.floor(((t<1?t+15:t)-1)/2);return{from:.5*Math.floor(e/2)%2,to:.5*Math.floor((e+3)/2)%2}},a.followLink=function(t){console.log("Following link: %s",t)},a.followRoute=function(t){console.log("Following route: %s",t)},a.state={active:[{root:{pos:a.props.rootPos,spawnRange:a.props.spawnRange,style:{left:a.props.rootPos.x,top:a.props.rootPos.y}}}]},a}return Object(c.a)(n,[{key:"render",value:function(){for(var t=[],e=0;e<this.state.active.length;e++)t=[].concat(Object(f.a)(t),Object(f.a)(this.layerToBtns(this.state.active[e],e)));return t}}]),n}(w.Component);exports.default=y;n(25);var x=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).apiUrl="https://abarbieux.com/api/",a.state={middle:{x:window.innerWidth/2,y:window.innerHeight/2}},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){return console.log(this.state),i.a.createElement("div",{className:"Tiled-back"},i.a.createElement("div",{className:"container"},i.a.createElement(m,null),i.a.createElement("div",{className:"Menu-container"},i.a.createElement(a,{rootPos:this.state.middle,spawnRange:{from:0,to:2},menu:b}))))}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({midde:{x:window.innerWidth,y:window.innerHeight}})}}]),n}(i.a.Component);s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(x,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.08c65af0.chunk.js.map
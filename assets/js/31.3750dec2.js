(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{408:function(e,t,n){var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var s,i,r=a.util.type(t);switch(n=n||{},r){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var l in s={},n[i]=s,t)t.hasOwnProperty(l)&&(s[l]=e(t[l],n));return s;case"Array":return i=a.util.objId(t),n[i]?n[i]:(s=[],n[i]=s,t.forEach((function(t,a){s[a]=e(t,n)})),s);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var s in t)n[s]=t[s];return n},insertBefore:function(e,t,n,s){var i=(s=s||a.languages)[e],r={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);n.hasOwnProperty(l)||(r[l]=i[l])}var u=s[e];return s[e]=r,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=r)})),r},DFS:function e(t,n,s,i){i=i||{};var r=a.util.objId;for(var l in t)if(t.hasOwnProperty(l)){n.call(t,l,t[l],s||l);var o=t[l],u=a.util.type(o);"Object"!==u||i[r(o)]?"Array"!==u||i[r(o)]||(i[r(o)]=!0,e(o,n,l,i)):(i[r(o)]=!0,e(o,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var s={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),a.hooks.run("before-all-elements-highlight",s);for(var i,r=0;i=s.elements[r++];)a.highlightElement(i,!0===t,s.callback)},highlightElement:function(n,s,i){var r=a.util.getLanguage(n),l=a.languages[r];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+r;var o=n.parentNode;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+r);var u={element:n,language:r,grammar:l,code:n.textContent};function c(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),i&&i.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(i&&i.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(s&&e.Worker){var g=new Worker(a.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),s.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var o in n)t[o]=n[o];delete t.rest}var u=new i;return r(u,u.head,e),function e(t,n,i,o,u,c,g){for(var d in i)if(i.hasOwnProperty(d)&&i[d]){var p=i[d];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(g&&g==d+","+f)return;var h=p[f],m=h.inside,v=!!h.lookbehind,y=!!h.greedy,b=0,k=h.alias;if(y&&!h.pattern.global){var F=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,F+"g")}h=h.pattern||h;for(var w=o.next,x=u;w!==n.tail;x+=w.value.length,w=w.next){var C=w.value;if(n.length>t.length)return;if(!(C instanceof s)){var A=1;if(y&&w!=n.tail.prev){if(h.lastIndex=x,!(S=h.exec(t)))break;var _=S.index+(v&&S[1]?S[1].length:0),j=S.index+S[0].length,$=x;for($+=w.value.length;_>=$;)w=w.next,$+=w.value.length;if($-=w.value.length,x=$,w.value instanceof s)continue;for(var I=w;I!==n.tail&&($<j||"string"==typeof I.value&&!I.prev.value.greedy);I=I.next)A++,$+=I.value.length;A--,C=t.slice(x,$),S.index-=x}else{h.lastIndex=0;var S=h.exec(C)}if(S){v&&(b=S[1]?S[1].length:0);_=S.index+b,S=S[0].slice(b),j=_+S.length;var E=C.slice(0,_),O=C.slice(j),P=w.prev;E&&(P=r(n,P,E),x+=E.length),l(n,P,A);var N=new s(d,m?a.tokenize(S,m):S,k,S,y);if(w=r(n,P,N),O&&r(n,w,O),A>1&&e(t,n,i,w.prev,x,!0,d+","+f),c)break}else if(c)break}}}}}(e,u,t,u.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(u)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var s,i=0;s=n[i++];)s(t)}},Token:s};function s(e,t,n,a,s){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!s}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function r(e,t,n){var a=t.next,s={value:n,prev:t,next:a};return t.next=s,a.prev=s,e.length++,s}function l(e,t,n){for(var a=t.next,s=0;s<n&&a!==e.tail;s++)a=a.next;t.next=a,a.prev=t,e.length-=s}if(e.Prism=a,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var s="";return t.forEach((function(t){s+=e(t,n)})),s}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},r=t.alias;r&&(Array.isArray(r)?Array.prototype.push.apply(i.classes,r):i.classes.push(r)),a.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=" "+o+'="'+(i.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),s=n.language,i=n.code,r=n.immediateClose;e.postMessage(a.highlight(i,a.languages[s],s)),r&&e.close()}),!1),a):a;var o=a.util.currentScript();function u(){a.manual||a.highlightAll()}if(o&&(a.filename=o.src,o.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var c=document.readyState;"loading"===c||"interactive"===c&&o&&o.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),"undefined"!=typeof global&&(global.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};s["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:s},a.languages.insertBefore("markup","cdata",i)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,s=e.getAttribute("data-src"),i=e,r=/\blang(?:uage)?-([\w-]+)\b/i;i&&!r.test(i.className);)i=i.parentNode;if(i&&(n=(e.className.match(r)||[,""])[1]),!n){var l=(s.match(/\.(\w+)$/)||[,""])[1];n=t[l]||l}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var u=new XMLHttpRequest;u.open("GET",s,!0),u.onreadystatechange=function(){4==u.readyState&&(u.status<400&&u.responseText?(o.textContent=u.responseText,a.highlightElement(o),e.setAttribute("data-src-loaded","")):u.status>=400?o.textContent="✖ Error "+u.status+" while fetching file: "+u.statusText:o.textContent="✖ Error: File does not exist or is empty")},u.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))},497:function(e,t,n){},632:function(e,t,n){"use strict";var a=n(497);n.n(a).a},738:function(e,t,n){"use strict";n.r(t);n(131);var a=n(408),s=n.n(a),i={name:"grid2",data:function(){return{value:["start","end","center","stretch"],value2:["start","end","center","stretch","space-around","space-between","space-evenly"],justifyContent:"start",alignContent:"start",justifyItems:"stretch",alignItems:"stretch",gridItem:[{colum:"1/2",row:"1/2"},{colum:"2/3",row:"1/2"},{colum:"1/2",row:"2/3"},{colum:"2/3",row:"2/3"}]}},watch:{justifyItems:function(){this.updateItemsCss()},alignItems:function(){this.updateItemsCss()},justifyContent:function(){this.updateContentCss()},alignContent:function(){this.updateContentCss()}},methods:{updateItemsCss:function(){this.$refs.placeItems.innerHTML=s.a.highlight("place-items: ".concat(this.alignItems==this.justifyItems?"".concat(this.alignItems):"".concat(this.alignItems," ").concat(this.justifyItems),";"),s.a.languages.css)},updateContentCss:function(){this.$refs.placeContent.innerHTML=s.a.highlight("place-content: ".concat(this.alignContent==this.justifyContent?"".concat(this.alignContent):"".concat(this.alignContent," ").concat(this.justifyContent),";"),s.a.languages.css)}},mounted:function(){this.updateContentCss(),this.updateItemsCss()}},r=(n(632),n(26)),l=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"grid2-container"},[n("div",{staticClass:"grid-wrapper",style:{justifyItems:e.justifyItems,alignItems:e.alignItems,justifyContent:e.justifyContent,alignContent:e.alignContent}},e._l(e.gridItem,(function(t,a){return n("div",{key:a,staticClass:"grid-item",style:{gridColumn:t.column,gridRow:t.row}},[e._v("\n      gird-item"+e._s(a+1)+"\n    ")])})),0),e._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{staticClass:"language-css"},[n("code",{ref:"placeItems"})])]),e._v(" "),n("div",{staticClass:"key-value"},[n("span",{staticClass:"key"},[e._v("justify-items:")]),e._v(" "),n("div",e._l(e.value,(function(t,a){return n("el-radio",{key:a,attrs:{label:t},model:{value:e.justifyItems,callback:function(t){e.justifyItems=t},expression:"justifyItems"}})})),1)]),e._v(" "),n("div",{staticClass:"key-value"},[n("span",{staticClass:"key"},[e._v("align-items:")]),e._v(" "),n("div",e._l(e.value,(function(t,a){return n("el-radio",{key:a,attrs:{label:t},model:{value:e.alignItems,callback:function(t){e.alignItems=t},expression:"alignItems"}})})),1)]),e._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{staticClass:"language-css"},[n("code",{ref:"placeContent"})])]),e._v(" "),n("div",{staticClass:"key-value"},[n("span",{staticClass:"key"},[e._v("justify-content:")]),e._v(" "),n("div",e._l(e.value2,(function(t,a){return n("el-radio",{key:a,attrs:{label:t},model:{value:e.justifyContent,callback:function(t){e.justifyContent=t},expression:"justifyContent"}})})),1)]),e._v(" "),n("div",{staticClass:"key-value"},[n("span",{staticClass:"key"},[e._v("align-content:")]),e._v(" "),n("div",e._l(e.value2,(function(t,a){return n("el-radio",{key:a,attrs:{label:t},model:{value:e.alignContent,callback:function(t){e.alignContent=t},expression:"alignContent"}})})),1)])])}),[],!1,null,null,null);t.default=l.exports}}]);
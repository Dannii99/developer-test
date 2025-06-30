import{f as s1}from"./chunk-ZLKMOYO6.js";import{Cb as c1,Db as l1,Na as K2,Ra as v,T as r2,U as j2,Xa as Q2,ba as z2,ca as V2,da as Y2,ea as X2,ib as J2,ja as Q,va as $2,zb as Z2}from"./chunk-ULWQZRKR.js";function M3(c,l,s){return(l=C3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function a1(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function i(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?a1(Object(s),!0).forEach(function(a){M3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):a1(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function p3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function C3(c){var l=p3(c,"string");return typeof l=="symbol"?l:l+""}var e1=()=>{},B2={},P1={},F1=null,T1={mark:e1,measure:e1};try{typeof window<"u"&&(B2=window),typeof document<"u"&&(P1=document),typeof MutationObserver<"u"&&(F1=MutationObserver),typeof performance<"u"&&(T1=performance)}catch{}var{userAgent:n1=""}=B2.navigator||{},F=B2,p=P1,o1=F1,J=T1,F0=!!F.document,k=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",D1=~n1.indexOf("MSIE")||~n1.indexOf("Trident/"),u3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,d3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,B1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},h3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},R1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",e2="duotone",x3="sharp",g3="sharp-duotone",E1=[C,e2,x3,g3],N3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},b3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},S3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),y3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},w3=["fak","fa-kit","fakd","fa-kit-duotone"],i1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},k3=["kit"],A3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},v3=["fak","fakd"],P3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},t1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Z={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},F3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],T3=["fak","fa-kit","fakd","fa-kit-duotone"],D3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},B3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},R3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},u2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},E3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],d2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...F3,...E3],H3=["solid","regular","light","thin","duotone","brands"],H1=[1,2,3,4,5,6,7,8,9,10],I3=H1.concat([11,12,13,14,15,16,17,18,19,20]),O3=[...Object.keys(R3),...H3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Z.GROUP,Z.SWAP_OPACITY,Z.PRIMARY,Z.SECONDARY].concat(H1.map(c=>"".concat(c,"x"))).concat(I3.map(c=>"w-".concat(c))),U3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},y="___FONT_AWESOME___",h2=16,I1="fa",O1="svg-inline--fa",E="data-fa-i2svg",x2="data-fa-pseudo-element",q3="data-fa-pseudo-element-pending",R2="data-prefix",E2="data-icon",f1="fontawesome-i2svg",W3="async",_3=["HTML","HEAD","STYLE","SCRIPT"],U1=(()=>{try{return!0}catch{return!1}})();function $(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[C]}})}var q1=i({},B1);q1[C]=i(i(i(i({},{"fa-duotone":"duotone"}),B1[C]),i1.kit),i1["kit-duotone"]);var G3=$(q1),g2=i({},y3);g2[C]=i(i(i(i({},{duotone:"fad"}),g2[C]),t1.kit),t1["kit-duotone"]);var r1=$(g2),N2=i({},u2);N2[C]=i(i({},N2[C]),P3.kit);var H2=$(N2),b2=i({},B3);b2[C]=i(i({},b2[C]),A3.kit);var T0=$(b2),j3=u3,W1="fa-layers-text",V3=d3,Y3=i({},N3),D0=$(Y3),X3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],m2=h3,$3=[...k3,...O3],j=F.FontAwesomeConfig||{};function K3(c){var l=p.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function Q3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=Q3(K3(s));e!=null&&(j[a]=e)});var _1={styleDefault:"solid",familyDefault:C,cssPrefix:I1,replacementClass:O1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};j.familyPrefix&&(j.cssPrefix=j.familyPrefix);var W=i(i({},_1),j);W.autoReplaceSvg||(W.observeMutations=!1);var f={};Object.keys(_1).forEach(c=>{Object.defineProperty(f,c,{enumerable:!0,set:function(l){W[c]=l,V.forEach(s=>s(f))},get:function(){return W[c]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(c){W.cssPrefix=c,V.forEach(l=>l(f))},get:function(){return W.cssPrefix}});F.FontAwesomeConfig=f;var V=[];function J3(c){return V.push(c),()=>{V.splice(V.indexOf(c),1)}}var P=h2,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Z3(c){if(!c||!k)return;let l=p.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=p.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return p.head.insertBefore(l,a),c}var c4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Y(){let c=12,l="";for(;c-- >0;)l+=c4[Math.random()*62|0];return l}function _(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function I2(c){return c.classList?_(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function G1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function l4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(G1(c[s]),'" '),"").trim()}function n2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function O2(c){return c.size!==N.size||c.x!==N.x||c.y!==N.y||c.rotate!==N.rotate||c.flipX||c.flipY}function s4(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(t)},r={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:z,path:r}}function a4(c){let{transform:l,width:s=h2,height:a=h2,startCentered:e=!1}=c,n="";return e&&D1?n+="translate(".concat(l.x/P-s/2,"em, ").concat(l.y/P-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/P,"em), calc(-50% + ").concat(l.y/P,"em)) "):n+="translate(".concat(l.x/P,"em, ").concat(l.y/P,"em) "),n+="scale(".concat(l.size/P*(l.flipX?-1:1),", ").concat(l.size/P*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var e4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function j1(){let c=I1,l=O1,s=f.cssPrefix,a=f.replacementClass,e=e4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(t,".".concat(a))}return e}var z1=!1;function L2(){f.autoAddCss&&!z1&&(Z3(j1()),z1=!0)}var n4={mixout(){return{dom:{css:j1,insertCss:L2}}},hooks(){return{beforeDOMElementCreation(){L2()},beforeI2svg(){L2()}}}},w=F||{};w[y]||(w[y]={});w[y].styles||(w[y].styles={});w[y].hooks||(w[y].hooks={});w[y].shims||(w[y].shims=[]);var b=w[y],V1=[],Y1=function(){p.removeEventListener("DOMContentLoaded",Y1),s2=1,V1.map(c=>c())},s2=!1;k&&(s2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),s2||p.addEventListener("DOMContentLoaded",Y1));function o4(c){k&&(s2?setTimeout(c,0):V1.push(c))}function K(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?G1(c):"<".concat(l," ").concat(l4(s),">").concat(a.map(K).join(""),"</").concat(l,">")}function m1(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var i4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},M2=function(l,s,a,e){var n=Object.keys(l),o=n.length,t=e!==void 0?i4(s,e):s,z,r,m;for(a===void 0?(z=1,m=l[n[0]]):(z=0,m=a);z<o;z++)r=n[z],m=t(m,l[r],r,l);return m};function t4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function S2(c){let l=t4(c);return l.length===1?l[0].toString(16):null}function f4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function L1(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function y2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=L1(l);typeof b.hooks.addPack=="function"&&!a?b.hooks.addPack(c,L1(l)):b.styles[c]=i(i({},b.styles[c]||{}),e),c==="fas"&&y2("fa",l)}var{styles:X,shims:r4}=b,X1=Object.keys(H2),z4=X1.reduce((c,l)=>(c[l]=Object.keys(H2[l]),c),{}),U2=null,$1={},K1={},Q1={},J1={},Z1={};function m4(c){return~$3.indexOf(c)}function L4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!m4(e)?e:null}var c3=()=>{let c=a=>M2(X,(e,n,o)=>(e[o]=M2(n,a,{}),e),{});$1=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(t=>typeof t=="number").forEach(t=>{a[t.toString(16)]=n}),a)),K1=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(t=>typeof t=="string").forEach(t=>{a[t]=n}),a)),Z1=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(t=>{a[t]=n}),a});let l="far"in X||f.autoFetchSvg,s=M2(r4,(a,e)=>{let n=e[0],o=e[1],t=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:t}),a},{names:{},unicodes:{}});Q1=s.names,J1=s.unicodes,U2=o2(f.styleDefault,{family:f.familyDefault})};J3(c=>{U2=o2(c.styleDefault,{family:f.familyDefault})});c3();function q2(c,l){return($1[c]||{})[l]}function M4(c,l){return(K1[c]||{})[l]}function R(c,l){return(Z1[c]||{})[l]}function l3(c){return Q1[c]||{prefix:null,iconName:null}}function p4(c){let l=J1[c],s=q2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function T(){return U2}var s3=()=>({prefix:null,iconName:null,rest:[]});function C4(c){let l=C,s=X1.reduce((a,e)=>(a[e]="".concat(f.cssPrefix,"-").concat(e),a),{});return E1.forEach(a=>{(c.includes(s[a])||c.some(e=>z4[a].includes(e)))&&(l=a)}),l}function o2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=C}=l,a=G3[s][c];if(s===e2&&!c)return"fad";let e=r1[s][c]||r1[s][a],n=c in b.styles?c:null;return e||n||null}function u4(c){let l=[],s=null;return c.forEach(a=>{let e=L4(f.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function M1(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function i2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=d2.concat(T3),n=M1(c.filter(M=>e.includes(M))),o=M1(c.filter(M=>!d2.includes(M))),t=n.filter(M=>(a=M,!R1.includes(M))),[z=null]=t,r=C4(n),m=i(i({},u4(o)),{},{prefix:o2(z,{family:r})});return i(i(i({},m),g4({values:c,family:r,styles:X,config:f,canonical:m,givenPrefix:a})),d4(s,a,m))}function d4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?l3(e):{},o=R(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!X.far&&X.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var h4=E1.filter(c=>c!==C||c!==e2),x4=Object.keys(u2).filter(c=>c!==C).map(c=>Object.keys(u2[c])).flat();function g4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,t=s===e2,z=l.includes("fa-duotone")||l.includes("fad"),r=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!t&&(z||r||m)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&h4.includes(s)&&(Object.keys(n).find(L=>x4.includes(L))||o.autoFetchSvg)){let L=S3.get(s).defaultShortPrefixId;a.prefix=L,a.iconName=R(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=T()||"fas"),a}var w2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),y2(n,e[n]);let o=H2[C][n];o&&y2(o,e[n]),c3()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:t}=a[e],z=t[2];l[n]||(l[n]={}),z.length>0&&z.forEach(r=>{typeof r=="string"&&(l[n][r]=t)}),l[n][o]=t}),l}},p1=[],U={},q={},N4=Object.keys(q);function b4(c,l){let{mixoutsTo:s}=l;return p1=c,U={},Object.keys(q).forEach(a=>{N4.indexOf(a)===-1&&delete q[a]}),p1.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{U[o]||(U[o]=[]),U[o].push(n[o])})}a.provides&&a.provides(q)}),s}function k2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(U[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function H(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(U[c]||[]).forEach(n=>{n.apply(null,s)})}function D(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return q[c]?q[c].apply(null,l):void 0}function A2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||T();if(l)return l=R(s,l)||l,m1(a3.definitions,s,l)||m1(b.styles,s,l)}var a3=new w2,S4=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,H("noAuto")},y4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return k?(H("beforeI2svg",c),D("pseudoElements2svg",c),D("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,o4(()=>{k4({autoReplaceSvgRoot:l}),H("watch",c)})}},w4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:R(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=o2(c[0]);return{prefix:s,iconName:R(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(f.cssPrefix,"-"))>-1||c.match(j3))){let l=i2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||T(),iconName:R(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=T();return{prefix:l,iconName:R(l,c)||c}}}},h={noAuto:S4,config:f,dom:y4,parse:w4,library:a3,findIconDefinition:A2,toHtml:K},k4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=p}=c;(Object.keys(b.styles).length>0||f.autoFetchSvg)&&k&&f.autoReplaceSvg&&h.dom.i2svg({node:l})};function t2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>K(s))}}),Object.defineProperty(c,"node",{get:function(){if(!k)return;let s=p.createElement("div");return s.innerHTML=c.html,s.children}}),c}function A4(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(O2(o)&&s.found&&!a.found){let{width:t,height:z}=s,r={x:t/z/2,y:.5};e.style=n2(i(i({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function v4(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(f.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:a}]}]}function W2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:t,maskId:z,titleId:r,extra:m,watchable:M=!1}=c,{width:L,height:u}=s.found?s:l,A=v3.includes(a),B=[f.replacementClass,e?"".concat(f.cssPrefix,"-").concat(e):""].filter(O=>m.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(m.classes).join(" "),x={children:[],attributes:i(i({},m.attributes),{},{"data-prefix":a,"data-icon":e,class:B,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(u)})},S=A&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/u*16*.0625,"em")}:{};M&&(x.attributes[E]=""),t&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(r||Y())},children:[t]}),delete x.attributes.title);let d=i(i({},x),{},{prefix:a,iconName:e,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:i(i({},S),m.styles)}),{children:g,attributes:I}=s.found&&l.found?D("generateAbstractMask",d)||{children:[],attributes:{}}:D("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=g,d.attributes=I,o?v4(d):A4(d)}function C1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:t=!1}=c,z=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});t&&(z[E]="");let r=i({},o.styles);O2(e)&&(r.transform=a4({transform:e,startCentered:!0,width:s,height:a}),r["-webkit-transform"]=r.transform);let m=n2(r);m.length>0&&(z.style=m);let M=[];return M.push({tag:"span",attributes:z,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function P4(c){let{content:l,title:s,extra:a}=c,e=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=n2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:p2}=b;function v2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(m2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(m2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(m2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var F4={found:!1,width:512,height:512};function T4(c,l){!U1&&!f.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function P2(c,l){let s=l;return l==="fa"&&f.styleDefault!==null&&(l=T()),new Promise((a,e)=>{if(s==="fa"){let n=l3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&p2[l]&&p2[l][c]){let n=p2[l][c];return a(v2(n))}T4(c,l),a(i(i({},F4),{},{icon:f.showMissingIcons&&c?D("missingIconAbstract")||{}:{}}))})}var u1=()=>{},F2=f.measurePerformance&&J&&J.mark&&J.measure?J:{mark:u1,measure:u1},G='FA "6.7.2"',D4=c=>(F2.mark("".concat(G," ").concat(c," begins")),()=>e3(c)),e3=c=>{F2.mark("".concat(G," ").concat(c," ends")),F2.measure("".concat(G," ").concat(c),"".concat(G," ").concat(c," begins"),"".concat(G," ").concat(c," ends"))},_2={begin:D4,end:e3},c2=()=>{};function d1(c){return typeof(c.getAttribute?c.getAttribute(E):null)=="string"}function B4(c){let l=c.getAttribute?c.getAttribute(R2):null,s=c.getAttribute?c.getAttribute(E2):null;return l&&s}function R4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(f.replacementClass)}function E4(){return f.autoReplaceSvg===!0?l2.replace:l2[f.autoReplaceSvg]||l2.replace}function H4(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function I4(c){return p.createElement(c)}function n3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?H4:I4}=l;if(typeof c=="string")return p.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(n3(n,{ceFn:s}))}),a}function O4(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var l2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(n3(s),l)}),l.getAttribute(E)===null&&f.keepOriginalSource){let s=p.createComment(O4(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~I2(l).indexOf(f.replacementClass))return l2.replace(c);let a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,t)=>(t===f.replacementClass||t.match(a)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>K(n)).join(`
`);l.setAttribute(E,""),l.innerHTML=e}};function h1(c){c()}function o3(c,l){let s=typeof l=="function"?l:c2;if(c.length===0)s();else{let a=h1;f.mutateApproach===W3&&(a=F.requestAnimationFrame||h1),a(()=>{let e=E4(),n=_2.begin("mutate");c.map(e),n(),s()})}}var G2=!1;function i3(){G2=!0}function T2(){G2=!1}var a2=null;function x1(c){if(!o1||!f.observeMutations)return;let{treeCallback:l=c2,nodeCallback:s=c2,pseudoElementsCallback:a=c2,observeMutationsRoot:e=p}=c;a2=new o1(n=>{if(G2)return;let o=T();_(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!d1(t.addedNodes[0])&&(f.searchPseudoElements&&a(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&f.searchPseudoElements&&a(t.target.parentNode),t.type==="attributes"&&d1(t.target)&&~X3.indexOf(t.attributeName))if(t.attributeName==="class"&&B4(t.target)){let{prefix:z,iconName:r}=i2(I2(t.target));t.target.setAttribute(R2,z||o),r&&t.target.setAttribute(E2,r)}else R4(t.target)&&s(t.target)})}),k&&a2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function U4(){a2&&a2.disconnect()}function q4(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(a[o]=t.join(":").trim()),a},{})),s}function W4(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=i2(I2(c));return e.prefix||(e.prefix=T()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=M4(e.prefix,c.innerText)||q2(e.prefix,S2(c.innerText))),!e.iconName&&f.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function _4(c){let l=_(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return f.autoA11y&&(s?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||Y()):(l["aria-hidden"]="true",l.focusable="false")),l}function G4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function g1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=W4(c),n=_4(c),o=k2("parseNodeAttributes",{},c),t=l.styleParser?q4(c):[];return i({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:t,attributes:n}},o)}var{styles:j4}=b;function t3(c){let l=f.autoReplaceSvg==="nest"?g1(c,{styleParser:!1}):g1(c);return~l.extra.classes.indexOf(W1)?D("generateLayersText",c,l):D("generateSvgReplacementMutation",c,l)}function V4(){return[...w3,...d2]}function N1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!k)return Promise.resolve();let s=p.documentElement.classList,a=m=>s.add("".concat(f1,"-").concat(m)),e=m=>s.remove("".concat(f1,"-").concat(m)),n=f.autoFetchSvg?V4():R1.concat(Object.keys(j4));n.includes("fa")||n.push("fa");let o=[".".concat(W1,":not([").concat(E,"])")].concat(n.map(m=>".".concat(m,":not([").concat(E,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=_(c.querySelectorAll(o))}catch{}if(t.length>0)a("pending"),e("complete");else return Promise.resolve();let z=_2.begin("onTree"),r=t.reduce((m,M)=>{try{let L=t3(M);L&&m.push(L)}catch(L){U1||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,M)=>{Promise.all(r).then(L=>{o3(L,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),z(),m()})}).catch(L=>{z(),M(L)})})}function Y4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;t3(c).then(s=>{s&&o3([s],l)})}function X4(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:A2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:A2(e||{})),c(a,i(i({},s),{},{mask:e}))}}var $4=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=N,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:t=null,classes:z=[],attributes:r={},styles:m={}}=l;if(!c)return;let{prefix:M,iconName:L,icon:u}=c;return t2(i({type:"icon"},c),()=>(H("beforeDOMElementCreation",{iconDefinition:c,params:l}),f.autoA11y&&(o?r["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(t||Y()):(r["aria-hidden"]="true",r.focusable="false")),W2({icons:{main:v2(u),mask:e?v2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:L,transform:i(i({},N),s),symbol:a,title:o,maskId:n,titleId:t,extra:{attributes:r,styles:m,classes:z}})))},K4={mixout(){return{icon:X4($4)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=N1,c.nodeCallback=Y4,c}}},provides(c){c.i2svg=function(l){let{node:s=p,callback:a=()=>{}}=l;return N1(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:t,symbol:z,mask:r,maskId:m,extra:M}=s;return new Promise((L,u)=>{Promise.all([P2(a,o),r.iconName?P2(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[B,x]=A;L([l,W2({icons:{main:B,mask:x},prefix:o,iconName:a,transform:t,symbol:z,maskId:m,title:e,titleId:n,extra:M,watchable:!0})])}).catch(u)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,t=n2(o);t.length>0&&(a.style=t);let z;return O2(n)&&(z=D("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(z||e.icon),{children:s,attributes:a}}}},Q4={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return t2({type:"layer"},()=>{H("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},J4={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return t2({type:"counter",content:c},()=>(H("beforeDOMElementCreation",{content:c,params:l}),P4({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},Z4={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=N,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return t2({type:"text",content:c},()=>(H("beforeDOMElementCreation",{content:c,params:l}),C1({content:c,transform:i(i({},N),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,t=null;if(D1){let z=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/z,t=r.height/z}return f.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,C1({content:l.innerHTML,width:o,height:t,transform:e,title:a,extra:n,watchable:!0})])}}},c0=new RegExp('"',"ug"),b1=[1105920,1112319],S1=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),b3),U3),D3),D2=Object.keys(S1).reduce((c,l)=>(c[l.toLowerCase()]=S1[l],c),{}),l0=Object.keys(D2).reduce((c,l)=>{let s=D2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function s0(c){let l=c.replace(c0,""),s=f4(l,0),a=s>=b1[0]&&s<=b1[1],e=l.length===2?l[0]===l[1]:!1;return{value:S2(e?l[0]:l),isSecondary:a||e}}function a0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(D2[s]||{})[e]||l0[s]}function y1(c,l){let s="".concat(q3).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=_(c.children).filter(L=>L.getAttribute(x2)===l)[0],t=F.getComputedStyle(c,l),z=t.getPropertyValue("font-family"),r=z.match(V3),m=t.getPropertyValue("font-weight"),M=t.getPropertyValue("content");if(o&&!r)return c.removeChild(o),a();if(r&&M!=="none"&&M!==""){let L=t.getPropertyValue("content"),u=a0(z,m),{value:A,isSecondary:B}=s0(L),x=r[0].startsWith("FontAwesome"),S=q2(u,A),d=S;if(x){let g=p4(A);g.iconName&&g.prefix&&(S=g.iconName,u=g.prefix)}if(S&&!B&&(!o||o.getAttribute(R2)!==u||o.getAttribute(E2)!==d)){c.setAttribute(s,d),o&&c.removeChild(o);let g=G4(),{extra:I}=g;I.attributes[x2]=l,P2(S,u).then(O=>{let m3=W2(i(i({},g),{},{icons:{main:O,mask:s3()},prefix:u,iconName:d,extra:I,watchable:!0})),f2=p.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(f2,c.firstChild):c.appendChild(f2),f2.outerHTML=m3.map(L3=>K(L3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function e0(c){return Promise.all([y1(c,"::before"),y1(c,"::after")])}function n0(c){return c.parentNode!==document.head&&!~_3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(x2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function w1(c){if(k)return new Promise((l,s)=>{let a=_(c.querySelectorAll("*")).filter(n0).map(e0),e=_2.begin("searchPseudoElements");i3(),Promise.all(a).then(()=>{e(),T2(),l()}).catch(()=>{e(),T2(),s()})})}var o0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=w1,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=p}=l;f.searchPseudoElements&&w1(s)}}},k1=!1,i0={mixout(){return{dom:{unwatch(){i3(),k1=!0}}}},hooks(){return{bootstrap(){x1(k2("mutationObserverCallbacks",{}))},noAuto(){U4()},watch(c){let{observeMutationsRoot:l}=c;k1?T2():x1(k2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},A1=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},t0={mixout(){return{parse:{transform:c=>A1(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=A1(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),r="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(t," ").concat(z," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:M};return{tag:"g",attributes:i({},L.outer),children:[{tag:"g",attributes:i({},L.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:i(i({},s.icon.attributes),L.path)}]}]}}}},C2={x:0,y:0,width:"100%",height:"100%"};function v1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function f0(c){return c.tag==="g"?c.children:[c]}var r0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?i2(s.split(" ").map(e=>e.trim())):s3();return a.prefix||(a.prefix=T()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:t}=l,{width:z,icon:r}=e,{width:m,icon:M}=n,L=s4({transform:t,containerWidth:m,iconWidth:z}),u={tag:"rect",attributes:i(i({},C2),{},{fill:"white"})},A=r.children?{children:r.children.map(v1)}:{},B={tag:"g",attributes:i({},L.inner),children:[v1(i({tag:r.tag,attributes:i(i({},r.attributes),L.path)},A))]},x={tag:"g",attributes:i({},L.outer),children:[B]},S="mask-".concat(o||Y()),d="clip-".concat(o||Y()),g={tag:"mask",attributes:i(i({},C2),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,x]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:f0(M)},g]};return s.push(I,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(S,")")},C2)}),{children:s,attributes:a}}}},z0={provides(c){let l=!1;F.matchMedia&&(l=F.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:i(i({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:i(i({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:i(i({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},m0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},L0=[n4,K4,Q4,J4,Z4,o0,i0,t0,r0,z0,m0];b4(L0,{mixoutsTo:h});var B0=h.noAuto,R0=h.config,E0=h.library,H0=h.dom,f3=h.parse,I0=h.findIconDefinition,O0=h.toHtml,r3=h.icon,U0=h.layer,M0=h.text,p0=h.counter;var u0=["*"],d0=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},h0=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},x0=c=>{let l={"fa-spin":c.spin,"fa-pulse":c.pulse,"fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s)},g0=c=>c.prefix!==void 0&&c.iconName!==void 0,N0=(c,l)=>{if(g0(c))return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:l,iconName:c}},b0=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275prov=r2({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),S0=(()=>{class c{constructor(){this.definitions={}}addIcons(...s){for(let a of s){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let e of a.icon[2])typeof e=="string"&&(this.definitions[a.prefix][e]=a)}}addIconPacks(...s){for(let a of s){let e=Object.keys(a).map(n=>a[n]);this.addIcons(...e)}}getIconDefinition(s,a){return s in this.definitions&&a in this.definitions[s]?this.definitions[s][a]:null}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275prov=r2({token:c,factory:c.\u0275fac,providedIn:"root"}),c})(),y0=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(s){if("size"in s)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275dir=Y2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},features:[Q]}),c})(),w0=(()=>{class c{constructor(s,a){this.renderer=s,this.elementRef=a}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(s){"size"in s&&(s.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${s.size.currentValue}`),s.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${s.size.previousValue}`))}}return c.\u0275fac=function(s){return new(s||c)(v(Q2),v($2))},c.\u0275cmp=z2({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},features:[Q],ngContentSelectors:u0,decls:1,vars:0,template:function(s,a){s&1&&(c1(),l1(0))},encapsulation:2}),c})(),Y0=(()=>{class c{constructor(s,a,e,n,o){this.sanitizer=s,this.config=a,this.iconLibrary=e,this.stackItem=n,this.classes=[],o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(s){if(this.icon==null&&this.config.fallbackIcon==null)return h0();let a=null;if(this.icon==null?a=this.config.fallbackIcon:a=this.icon,s){let e=this.findIconDefinition(a);if(e!=null){let n=this.buildParams();this.renderIcon(e,n)}}}render(){this.ngOnChanges({})}findIconDefinition(s){let a=N0(s,this.config.defaultPrefix);if("icon"in a)return a;let e=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return e??(d0(a),null)}buildParams(){let s={flip:this.flip,spin:this.spin,pulse:this.pulse,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},a=typeof this.transform=="string"?f3.transform(this.transform):this.transform;return{title:this.title,transform:a,classes:[...x0(s),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(s,a){let e=r3(s,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(e.html.join(`
`))}}return c.\u0275fac=function(s){return new(s||c)(v(s1),v(b0),v(S0),v(y0,8),v(w0,8))},c.\u0275cmp=z2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,a){s&2&&(Z2("innerHTML",a.renderedIconHTML,K2),J2("title",a.title))},inputs:{icon:"icon",title:"title",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},features:[Q],decls:0,vars:0,template:function(s,a){},encapsulation:2}),c})();var X0=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=V2({type:c}),c.\u0275inj=j2({}),c})();var K0={prefix:"fas",iconName:"table",icon:[512,512,[],"f0ce","M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]};var Q0={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]};var J0={prefix:"fas",iconName:"bullseye",icon:[512,512,[],"f140","M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]};var Z0={prefix:"fas",iconName:"chart-area",icon:[512,512,["area-chart"],"f1fe","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm96 288l288 0c17.7 0 32-14.3 32-32l0-68.2c0-7.6-2.7-15-7.7-20.8l-65.8-76.8c-12.1-14.2-33.7-15-46.9-1.8l-21 21c-10 10-26.4 9.2-35.4-1.6l-39.2-47c-12.6-15.1-35.7-15.4-48.7-.6L135.9 215c-5.1 5.8-7.9 13.3-7.9 21.1l0 84c0 17.7 14.3 32 32 32z"]};var k0={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},c6=k0;var A0={prefix:"fas",iconName:"compass-drafting",icon:[512,512,["drafting-compass"],"f568","M352 96c0 14.3-3.1 27.9-8.8 40.2L396 227.4c-23.7 25.3-54.2 44.1-88.5 53.6L256 192c0 0 0 0 0 0s0 0 0 0l-68 117.5c21.5 6.8 44.3 10.5 68.1 10.5c70.7 0 133.8-32.7 174.9-84c11.1-13.8 31.2-16 45-5s16 31.2 5 45C428.1 341.8 347 384 256 384c-35.4 0-69.4-6.4-100.7-18.1L98.7 463.7C94 471.8 87 478.4 78.6 482.6L23.2 510.3c-5 2.5-10.9 2.2-15.6-.7S0 501.5 0 496l0-55.4c0-8.4 2.2-16.7 6.5-24.1l60-103.7C53.7 301.6 41.8 289.3 31.2 276c-11.1-13.8-8.8-33.9 5-45s33.9-8.8 45 5c5.7 7.1 11.8 13.8 18.2 20.1l69.4-119.9c-5.6-12.2-8.8-25.8-8.8-40.2c0-53 43-96 96-96s96 43 96 96zm21 297.9c32.6-12.8 62.5-30.8 88.9-52.9l43.7 75.5c4.2 7.3 6.5 15.6 6.5 24.1l0 55.4c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6 .7l-55.4-27.7c-8.4-4.2-15.4-10.8-20.1-18.9L373 393.9zM256 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},l6=A0;var s6={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]};var v0={prefix:"fas",iconName:"square-root-variable",icon:[576,512,["square-root-alt"],"f698","M282.6 78.1c8-27.3 33-46.1 61.4-46.1l200 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L344 96 238.7 457c-3.6 12.3-14.1 21.2-26.8 22.8s-25.1-4.6-31.5-15.6L77.6 288 32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l45.6 0c22.8 0 43.8 12.1 55.3 31.8l65.2 111.8L282.6 78.1zM393.4 233.4c12.5-12.5 32.8-12.5 45.3 0L480 274.7l41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L525.3 320l41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L480 365.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 320l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z"]},a6=v0,e6={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};var n6={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"]};var P0={prefix:"fas",iconName:"droplet",icon:[384,512,[128167,"tint"],"f043","M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"]},o6=P0;var i6={prefix:"fas",iconName:"ruler-combined",icon:[512,512,[],"f546","M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9z"]};var t6={prefix:"fas",iconName:"hashtag",icon:[448,512,[62098],"23","M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"]};var f6={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};var r6={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]};var z3=class c{transform(l){return isNaN(l)?l:(l=l?.toString().replaceAll(".",","),l=l.split(","),l[0]=l[0]?.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l.join(","))}static \u0275fac=function(s){return new(s||c)};static \u0275pipe=X2({name:"numeros",type:c,pure:!0,standalone:!0})};export{Y0 as a,X0 as b,K0 as c,Q0 as d,J0 as e,Z0 as f,c6 as g,l6 as h,s6 as i,a6 as j,e6 as k,n6 as l,o6 as m,i6 as n,t6 as o,f6 as p,r6 as q,z3 as r};

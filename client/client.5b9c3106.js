function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function c(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let d,h,m=!1;function p(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const a=e[t].claim_order,o=(s>0&&e[n[s]].claim_order<=a?s+1:p(1,s,(t=>e[n[t]].claim_order),a))-1;r[t]=n[o]+1;const i=o+1;n[i]=t,s=Math.max(i,s)}const a=[],o=[];let i=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(a.push(e[t-1]);i>=t;i--)o.push(e[i]);i--}for(;i>=0;i--)o.push(e[i]);a.reverse(),o.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<o.length;e++){for(;n<a.length&&o[e].claim_order>=a[n].claim_order;)n++;const r=n<a.length?a[n]:null;t.insertBefore(o[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){m&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function _(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function I(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:N(t,r,e[r])}function A(t){return Array.from(t.childNodes)}function C(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,r,s=!1){C(t);const a=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const e=n(a);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const e=n(a);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return r()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function L(t,e,n,r){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function k(t,e,n){return L(t,e,n,$)}function O(t,e,n){return L(t,e,n,y)}function H(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function U(t){return H(t," ")}function j(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function q(t,e){const n=j(t,"HTML_TAG_START",0),r=j(t,"HTML_TAG_END",n);if(n===r)return new K(void 0,e);C(t);const s=t.splice(n,r-n+1);w(s[0]),w(s[s.length-1]);const a=s.slice(1,s.length-1);for(const e of a)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(a,e)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e){t.value=null==e?"":e}function G(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function z(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){d=!0}}return d}function B(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=$("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=z();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=I(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=I(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),w(n)}}function W(t,e=document.body){return Array.from(e.querySelectorAll(t))}class K extends class{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=y(e.nodeName):this.e=$(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(w)}}{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function J(t){h=t}function V(){if(!h)throw new Error("Function called outside component initialization");return h}function F(t){V().$$.on_mount.push(t)}function Y(t){V().$$.after_update.push(t)}function X(t){V().$$.on_destroy.push(t)}const Q=[],Z=[],tt=[],et=[],nt=Promise.resolve();let rt=!1;function st(t){tt.push(t)}const at=new Set;let ot=0;function it(){const t=h;do{for(;ot<Q.length;){const t=Q[ot];ot++,J(t),ct(t.$$)}for(J(null),Q.length=0,ot=0;Z.length;)Z.pop()();for(let t=0;t<tt.length;t+=1){const e=tt[t];at.has(e)||(at.add(e),e())}tt.length=0}while(Q.length);for(;et.length;)et.pop()();rt=!1,at.clear(),J(t)}function ct(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}const lt=new Set;let ut;function ft(){ut={r:0,c:[],p:ut}}function dt(){ut.r||s(ut.c),ut=ut.p}function ht(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function mt(t,e,n,r){if(t&&t.o){if(lt.has(t))return;lt.add(t),ut.c.push((()=>{lt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function pt(t,e){const n={},r={},s={$$scope:1};let a=t.length;for(;a--;){const o=t[a],i=e[a];if(i){for(const t in o)t in i||(r[t]=1);for(const t in i)s[t]||(n[t]=i[t],s[t]=1);t[a]=i}else for(const t in o)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function gt(t){return"object"==typeof t&&null!==t?t:{}}function bt(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function wt(t,e,r,o){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,r),o||st((()=>{const e=c.map(n).filter(a);l?l.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(st)}function _t(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(Q.push(t),rt||(rt=!0,nt.then(it)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,a,o,i,c,l,u=[-1]){const f=h;J(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=a?a(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&$t(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){m=!0;const t=A(n.target);d.fragment&&d.fragment.l(t),t.forEach(w)}else d.fragment&&d.fragment.c();n.intro&&ht(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),m=!1,it()}J(f)}class Et{$destroy(){_t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const St=[];function xt(e,n=t){let r;const s=new Set;function a(t){if(o(e,t)&&(e=t,r)){const t=!St.length;for(const t of s)t[1](),St.push(t,e);if(t){for(let t=0;t<St.length;t+=2)St[t][0](St[t+1]);St.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(o,i=t){const c=[o,i];return s.add(c),1===s.size&&(r=n(a)||t),o(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const It={};var Tt={owner:"IC-Naming",repo:"uptime",sites:[{name:"ICP-Favorites",url:"https://crp26-tyaaa-aaaam-aacbq-cai.raw.ic0.app/metrics"},{name:"ICP-Registrar",url:"https://cymrc-fqaaa-aaaam-aacaa-cai.raw.ic0.app/metrics"},{name:"ICP-Resolver",url:"https://cwo4k-6aaaa-aaaam-aacba-cai.raw.ic0.app/metrics"},{name:"ICP-Registry",url:"https://c7nxw-iiaaa-aaaam-aacaq-cai.raw.ic0.app/metrics"},{name:"ICP-ICNaming-Ledger",url:"https://ceilt-sqaaa-aaaam-aacca-cai.raw.ic0.app/metrics"},{name:"ICP-Registrar-Control_Gateway",url:"https://gjzpj-bqaaa-aaaam-aacya-cai.raw.ic0.app/metrics"},{name:"ICNaming-WWW",url:"http://www.icnaming.com/"},{name:"ICNaming-Status",url:"http://status.icnaming.com/"},{name:"ICNaming-APP",url:"http://app.icnaming.com/"},{name:"ICNaming-APP-TESTNET",url:"http://app-testnet.icnaming.com/"},{name:"ICNaming-White-List",url:"http://whitelist.icnaming.com/"},{name:"ICNaming-ENS",url:"http://ens.icnaming.com/"},{name:"ICNaming-Preprod",url:"http://preprod.icnaming.com/"},{name:"TICP-Favorites",url:"https://oyjuw-oqaaa-aaaal-qac5q-cai.raw.ic0.app/metrics"},{name:"TICP-Registrar",url:"https://onof3-pyaaa-aaaal-qac6a-cai.raw.ic0.app/metrics"},{name:"TICP-Resolver",url:"https://okpdp-caaaa-aaaal-qac6q-cai.raw.ic0.app/metrics"},{name:"TICP-Registry",url:"https://cxnwn-diaaa-aaaag-aabaq-cai.raw.ic0.app/metrics"},{name:"TICP-ICNaming-Ledger",url:"https://ra2t7-3aaaa-aaaaj-aahzq-cai.raw.ic0.app/metrics"},{name:"TICP-Registrar-Control_Gateway",url:"https://j6dzz-gaaaa-aaaak-aab3q-cai.raw.ic0.app/metrics"}],"status-website":{cname:"status.icnaming.com",logoUrl:"https://raw.githubusercontent.com/icnaming/uptime/main/assets/logo192.png",name:"ICNaming",introTitle:"**ICNaming** Decentralized Name Service on IC",introMessage:null,navbar:[{title:"Status",href:"/"},{title:"App",href:"https://app.icnaming.com"},{title:"GitHub",href:"https://github.com/$OWNER"},{title:"Status Repo",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.icnaming.com",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Nt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Pt(e){let n,r,s,a=Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=$("img"),this.h()},l(t){n=k(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,r=Tt["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}(),o=Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&function(e){let n,r,s=Tt["status-website"].name+"";return{c(){n=$("div"),r=E(s)},l(t){n=k(t,"DIV",{});var e=A(n);r=H(e,s),e.forEach(w)},m(t,e){v(t,n,e),g(n,r)},p:t,d(t){t&&w(n)}}}();return{c(){n=$("div"),r=$("a"),a&&a.c(),s=S(),o&&o.c(),this.h()},l(t){n=k(t,"DIV",{});var e=A(n);r=k(e,"A",{href:!0,class:!0});var i=A(r);a&&a.l(i),s=U(i),o&&o.l(i),i.forEach(w),e.forEach(w),this.h()},h(){N(r,"href",Tt["status-website"].logoHref||Tt.path),N(r,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),o&&o.m(r,null)},p(t,e){Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&a.p(t,e),Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&o.p(t,e)},d(t){t&&w(n),a&&a.d(),o&&o.d()}}}function At(t){let e,n,r,s,a,o=t[1].title+"";return{c(){e=$("li"),n=$("a"),r=E(o),a=S(),this.h()},l(t){e=k(t,"LI",{});var s=A(e);n=k(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var i=A(n);r=H(i,o),i.forEach(w),a=U(s),s.forEach(w),this.h()},h(){N(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),N(n,"href",t[1].href.replace("$OWNER",Tt.owner).replace("$REPO",Tt.repo)),N(n,"target",t[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(t,s){v(t,e,s),g(e,n),g(n,r),g(e,a)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(t){t&&w(e)}}}function Ct(e){let n,r,s,a,o,i=Tt["status-website"]&&Tt["status-website"].logoUrl&&Pt(),c=Tt["status-website"]&&Tt["status-website"].navbar&&function(t){let e,n=Tt["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=At(Nt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(1&s){let a;for(n=Tt["status-website"].navbar,a=0;a<n.length;a+=1){const o=Nt(t,n,a);r[a]?r[a].p(o,s):(r[a]=At(o),r[a].c(),r[a].m(e.parentNode,e))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(t){_(r,t),t&&w(e)}}}(e),l=Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&function(e){let n,r,s,a=Tt.i18n.navGitHub+"";return{c(){n=$("li"),r=$("a"),s=E(a),this.h()},l(t){n=k(t,"LI",{});var e=A(n);r=k(e,"A",{href:!0,class:!0});var o=A(r);s=H(o,a),o.forEach(w),e.forEach(w),this.h()},h(){N(r,"href",`https://github.com/${Tt.owner}/${Tt.repo}`),N(r,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&w(n)}}}();return{c(){n=$("nav"),r=$("div"),i&&i.c(),s=S(),a=$("ul"),c&&c.c(),o=S(),l&&l.c(),this.h()},l(t){n=k(t,"NAV",{class:!0});var e=A(n);r=k(e,"DIV",{class:!0});var u=A(r);i&&i.l(u),s=U(u),a=k(u,"UL",{class:!0});var f=A(a);c&&c.l(f),o=U(f),l&&l.l(f),f.forEach(w),u.forEach(w),e.forEach(w),this.h()},h(){N(a,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,r),i&&i.m(r,null),g(r,s),g(r,a),c&&c.m(a,null),g(a,o),l&&l.m(a,null)},p(t,[e]){Tt["status-website"]&&Tt["status-website"].logoUrl&&i.p(t,e),Tt["status-website"]&&Tt["status-website"].navbar&&c.p(t,e),Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&w(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function Rt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Lt extends Et{constructor(t){super(),yt(this,t,Rt,Ct,o,{segment:0})}}var kt={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ot(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ht(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ut(t,e){var n,r,s,a,o,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function d(t){var e=kt[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function h(){for(var t="";c.length;)t+=d(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=i.exec(t);)r=t.substring(f,s.index),f=i.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((o=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ot(Ht(o).replace(/^\n+|\n+$/g,""))+"</code></pre>":(o=s[6])?(o.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),a=Ut(Ot(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==o?o="blockquote":(o=o.match(/\./)?"ol":"ul",a=a.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+o+">"+a+"</"+o+">"):s[8]?n='<img src="'+Ht(s[8])+'" alt="'+Ht(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ht(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(o="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ut(s[12]||s[15],u)+"</"+o+">":s[16]?n="<code>"+Ht(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function jt(t,e,n){const r=t.slice();return r[3]=e[n],r}function qt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Mt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Dt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Tt.path}/themes/${(Tt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Gt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Tt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function zt(e){let n,r;return{c(){n=$("script"),this.h()},l(t){n=k(t,"SCRIPT",{src:!0}),A(n).forEach(w),this.h()},h(){c(n.src,r=e[8].src)||N(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Bt(e){let n;return{c(){n=$("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",e[3].rel),N(n,"href",e[3].href),N(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Wt(e){let n;return{c(){n=$("meta"),this.h()},l(t){n=k(t,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",e[3].name),N(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Kt(e){let n,r,s,a,o,i,c,u,f,d,h,m,p,b,y,E,I,T,P=Ut(Tt.i18n.footer.replace(/\$REPO/,`https://github.com/${Tt.owner}/${Tt.repo}`))+"",C=(Tt["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(Tt["status-website"]||{}).customHeadHtml+"";return{c(){n=new K(!1),r=x(),this.h()},l(t){n=q(t,!1),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&w(r),t&&n.d()}}}();let R=((Tt["status-website"]||{}).themeUrl?Gt:Dt)(e),L=(Tt["status-website"]||{}).scripts&&function(t){let e,n=(Tt["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=zt(Mt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let a;for(n=(Tt["status-website"]||{}).scripts,a=0;a<n.length;a+=1){const o=Mt(t,n,a);r[a]?r[a].p(o,s):(r[a]=zt(o),r[a].c(),r[a].m(e.parentNode,e))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(t){_(r,t),t&&w(e)}}}(e),O=(Tt["status-website"]||{}).links&&function(t){let e,n=(Tt["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Bt(qt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let a;for(n=(Tt["status-website"]||{}).links,a=0;a<n.length;a+=1){const o=qt(t,n,a);r[a]?r[a].p(o,s):(r[a]=Bt(o),r[a].c(),r[a].m(e.parentNode,e))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(t){_(r,t),t&&w(e)}}}(e),H=(Tt["status-website"]||{}).metaTags&&function(t){let e,n=(Tt["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Wt(jt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=x()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=x()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);v(t,e,n)},p(t,s){if(0&s){let a;for(n=(Tt["status-website"]||{}).metaTags,a=0;a<n.length;a+=1){const o=jt(t,n,a);r[a]?r[a].p(o,s):(r[a]=Wt(o),r[a].c(),r[a].m(e.parentNode,e))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(t){_(r,t),t&&w(e)}}}(e),j=Tt["status-website"].css&&function(e){let n,r,s=`<style>${Tt["status-website"].css}</style>`;return{c(){n=new K(!1),r=x(),this.h()},l(t){n=q(t,!1),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&w(r),t&&n.d()}}}(),M=Tt["status-website"].js&&function(e){let n,r,s=`<script>${Tt["status-website"].js}<\/script>`;return{c(){n=new K(!1),r=x(),this.h()},l(t){n=q(t,!1),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&w(r),t&&n.d()}}}(),D=(Tt["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(Tt["status-website"]||{}).customBodyHtml+"";return{c(){n=new K(!1),r=x(),this.h()},l(t){n=q(t,!1),r=x(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),v(t,r,e)},p:t,d(t){t&&w(r),t&&n.d()}}}();m=new Lt({props:{segment:e[0]}});const G=e[2].default,z=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(G,e,e[1],null);return{c(){C&&C.c(),n=x(),R.c(),r=$("link"),s=$("link"),a=$("link"),L&&L.c(),o=x(),O&&O.c(),i=x(),H&&H.c(),c=x(),j&&j.c(),u=x(),M&&M.c(),f=x(),d=S(),D&&D.c(),h=S(),bt(m.$$.fragment),p=S(),b=$("main"),z&&z.c(),y=S(),E=$("footer"),I=$("p"),this.h()},l(t){const e=W('[data-svelte="svelte-ri9y7q"]',document.head);C&&C.l(e),n=x(),R.l(e),r=k(e,"LINK",{rel:!0,href:!0}),s=k(e,"LINK",{rel:!0,type:!0,href:!0}),a=k(e,"LINK",{rel:!0,type:!0,href:!0}),L&&L.l(e),o=x(),O&&O.l(e),i=x(),H&&H.l(e),c=x(),j&&j.l(e),u=x(),M&&M.l(e),f=x(),e.forEach(w),d=U(t),D&&D.l(t),h=U(t),vt(m.$$.fragment,t),p=U(t),b=k(t,"MAIN",{class:!0});var l=A(b);z&&z.l(l),l.forEach(w),y=U(t),E=k(t,"FOOTER",{class:!0});var g=A(E);I=k(g,"P",{}),A(I).forEach(w),g.forEach(w),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${Tt.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(Tt["status-website"]||{}).faviconSvg||(Tt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),N(a,"rel","icon"),N(a,"type","image/png"),N(a,"href",(Tt["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(t,e){C&&C.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,a),L&&L.m(document.head,null),g(document.head,o),O&&O.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,f),v(t,d,e),D&&D.m(t,e),v(t,h,e),wt(m,t,e),v(t,p,e),v(t,b,e),z&&z.m(b,null),v(t,y,e),v(t,E,e),g(E,I),I.innerHTML=P,T=!0},p(t,[e]){(Tt["status-website"]||{}).customHeadHtml&&C.p(t,e),R.p(t,e),(Tt["status-website"]||{}).scripts&&L.p(t,e),(Tt["status-website"]||{}).links&&O.p(t,e),(Tt["status-website"]||{}).metaTags&&H.p(t,e),Tt["status-website"].css&&j.p(t,e),Tt["status-website"].js&&M.p(t,e),(Tt["status-website"]||{}).customBodyHtml&&D.p(t,e);const n={};1&e&&(n.segment=t[0]),m.$set(n),z&&z.p&&(!T||2&e)&&function(t,e,n,r,s,a){if(s){const o=l(e,n,r,a);t.p(o,s)}}(z,G,t,t[1],T?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(G,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){T||(ht(m.$$.fragment,t),ht(z,t),T=!0)},o(t){mt(m.$$.fragment,t),mt(z,t),T=!1},d(t){C&&C.d(t),w(n),R.d(t),w(r),w(s),w(a),L&&L.d(t),w(o),O&&O.d(t),w(i),H&&H.d(t),w(c),j&&j.d(t),w(u),M&&M.d(t),w(f),t&&w(d),D&&D.d(t),t&&w(h),_t(m,t),t&&w(p),t&&w(b),z&&z.d(t),t&&w(y),t&&w(E)}}}function Jt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:a}=e;return t.$$set=t=>{"segment"in t&&n(0,a=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[a,s,r]}class Vt extends Et{constructor(t){super(),yt(this,t,Jt,Kt,o,{segment:0})}}function Ft(t){let e,n,r=t[1].stack+"";return{c(){e=$("pre"),n=E(r)},l(t){e=k(t,"PRE",{});var s=A(e);n=H(s,r),s.forEach(w)},m(t,r){v(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&M(n,r)},d(t){t&&w(e)}}}function Yt(e){let n,r,s,a,o,i,c,l,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&Ft(e);return{c(){r=S(),s=$("h1"),a=E(e[0]),o=S(),i=$("p"),c=E(f),l=S(),d&&d.c(),u=x(),this.h()},l(t){W('[data-svelte="svelte-1moakz"]',document.head).forEach(w),r=U(t),s=k(t,"H1",{class:!0});var n=A(s);a=H(n,e[0]),n.forEach(w),o=U(t),i=k(t,"P",{class:!0});var h=A(i);c=H(h,f),h.forEach(w),l=U(t),d&&d.l(t),u=x(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(i,"class","svelte-17w3omn")},m(t,e){v(t,r,e),v(t,s,e),g(s,a),v(t,o,e),v(t,i,e),g(i,c),v(t,l,e),d&&d.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(a,t[0]),2&e&&f!==(f=t[1].message+"")&&M(c,f),t[2]&&t[1].stack?d?d.p(t,e):(d=Ft(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&w(r),t&&w(s),t&&w(o),t&&w(i),t&&w(l),d&&d.d(t),t&&w(u)}}}function Xt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class Qt extends Et{constructor(t){super(),yt(this,t,Xt,Yt,o,{status:0,error:1})}}function Zt(t){let n,r,s;const a=[t[4].props];var o=t[4].component;function i(t){let n={};for(let t=0;t<a.length;t+=1)n=e(n,a[t]);return{props:n}}return o&&(n=new o(i())),{c(){n&&bt(n.$$.fragment),r=x()},l(t){n&&vt(n.$$.fragment,t),r=x()},m(t,e){n&&wt(n,t,e),v(t,r,e),s=!0},p(t,e){const s=16&e?pt(a,[gt(t[4].props)]):{};if(o!==(o=t[4].component)){if(n){ft();const t=n;mt(t.$$.fragment,1,0,(()=>{_t(t,1)})),dt()}o?(n=new o(i()),bt(n.$$.fragment),ht(n.$$.fragment,1),wt(n,r.parentNode,r)):n=null}else o&&n.$set(s)},i(t){s||(n&&ht(n.$$.fragment,t),s=!0)},o(t){n&&mt(n.$$.fragment,t),s=!1},d(t){t&&w(r),n&&_t(n,t)}}}function te(t){let e,n;return e=new Qt({props:{error:t[0],status:t[1]}}),{c(){bt(e.$$.fragment)},l(t){vt(e.$$.fragment,t)},m(t,r){wt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(ht(e.$$.fragment,t),n=!0)},o(t){mt(e.$$.fragment,t),n=!1},d(t){_t(e,t)}}}function ee(t){let e,n,r,s;const a=[te,Zt],o=[];function i(t,e){return t[0]?0:1}return e=i(t),n=o[e]=a[e](t),{c(){n.c(),r=x()},l(t){n.l(t),r=x()},m(t,n){o[e].m(t,n),v(t,r,n),s=!0},p(t,s){let c=e;e=i(t),e===c?o[e].p(t,s):(ft(),mt(o[c],1,1,(()=>{o[c]=null})),dt(),n=o[e],n?n.p(t,s):(n=o[e]=a[e](t),n.c()),ht(n,1),n.m(r.parentNode,r))},i(t){s||(ht(n),s=!0)},o(t){mt(n),s=!1},d(t){o[e].d(t),t&&w(r)}}}function ne(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let a={$$slots:{default:[ee]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)a=e(a,s[t]);return n=new Vt({props:a}),{c(){bt(n.$$.fragment)},l(t){vt(n.$$.fragment,t)},m(t,e){wt(n,t,e),r=!0},p(t,[e]){const r=12&e?pt(s,[4&e&&{segment:t[2][0]},8&e&&gt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(ht(n.$$.fragment,t),r=!0)},o(t){mt(n.$$.fragment,t),r=!1},d(t){_t(n,t)}}}function re(t,e,n){let{stores:r}=e,{error:s}=e,{status:a}=e,{segments:o}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return Y(l),u=It,f=r,V().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,a=t.status),"segments"in t&&n(2,o=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,a,o,i,c,r,l]}class se extends Et{constructor(t){super(),yt(this,t,re,ne,o,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ae=[],oe=[{js:()=>Promise.all([import("./index.5b0439ea.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","index-f7605f9e.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.73ae7f6a.js"),__inject_styles(["client-d6959ee0.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.96ce9f32.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-431b5a8d.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.5a3363cb.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-27f5577c.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.decd38bc.js"),__inject_styles(["client-d6959ee0.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ie=(ce=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ce(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ce(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ce;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function le(t,e,n,r){return new(n||(n=Promise))((function(s,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function i(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,i)}c((r=r.apply(t,e||[])).next())}))}function ue(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let fe,de=1;const he="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},me={};let pe,ge;function be(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ve(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(pe))return null;let e=t.pathname.slice(pe.length);if(""===e&&(e="/"),!ae.some((t=>t.test(e))))for(let n=0;n<ie.length;n+=1){const r=ie[n],s=r.pattern.exec(e);if(s){const n=be(t.search),a=r.parts[r.parts.length-1],o=a.params?a.params(s):{},i={host:location.host,path:e,query:n,params:o};return{href:t.href,route:r,match:s,page:i}}}}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ue(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const a=ve(s);if(a){ye(a,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),he.pushState({id:fe},"",s.href)}}function _e(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(me[fe]=_e(),t.state){const e=ve(new URL(location.href));e?ye(e,t.state.id):location.href=location.href}else!function(t){de=t}(de+1),function(t){fe=t}(de),he.replaceState({id:fe},"",location.href)}function ye(t,e,n,r){return le(this,void 0,void 0,(function*(){const s=!!e;if(s)fe=e;else{const t=_e();me[fe]=t,fe=e=++de,me[fe]=n?t:{x:0,y:0}}if(yield ge(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=me[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),me[fe]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ee(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Se,xe=null;function Ie(t){const e=ue(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ve(new URL(t,Ee(document)));if(e)xe&&t===xe.href||(xe={href:t,promise:ze(e)}),xe.promise}(e.href)}function Te(t){clearTimeout(Se),Se=setTimeout((()=>{Ie(t)}),20)}function Ne(t,e={noscroll:!1,replaceState:!1}){const n=ve(new URL(t,Ee(document)));if(n){const r=ye(n,null,e.noscroll);return he[e.replaceState?"replaceState":"pushState"]({id:fe},"",t),r}return location.href=t,new Promise((()=>{}))}const Pe="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ae,Ce,Re,Le=!1,ke=[],Oe="{}";const He={page:function(t){const e=xt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:xt(null),session:xt(Pe&&Pe.session)};let Ue,je,qe;function Me(t,e){const{error:n}=t;return Object.assign({error:n},e)}function De(t){return le(this,void 0,void 0,(function*(){Ae&&He.preloading.set(!0);const e=function(t){return xe&&xe.href===t.href?xe.promise:ze(t)}(t),n=Ce={},r=yield e,{redirect:s}=r;if(n===Ce)if(s)yield Ne(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield Ge(n,e,Me(e,t.page))}}))}function Ge(t,e,n){return le(this,void 0,void 0,(function*(){He.page.set(n),He.preloading.set(!1),Ae?Ae.$set(e):(e.stores={page:{subscribe:He.page.subscribe},preloading:{subscribe:He.preloading.subscribe},session:He.session},e.level0={props:yield Re},e.notify=He.page.notify,Ae=new se({target:qe,props:e,hydrate:!0})),ke=t,Oe=JSON.stringify(n.query),Le=!0,je=!1}))}function ze(t){return le(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{a.error="string"==typeof e?new Error(e):e,a.status=t}};if(!Re){const t=()=>({});Re=Pe.preloaded[0]||t.call(o,{host:n.host,path:n.path,query:n.query,params:{}},Ue)}let i,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>le(this,void 0,void 0,(function*(){const f=r[i];if(function(t,e,n,r){if(r!==Oe)return!0;const s=ke[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,s)&&(u=!0),a.segments[c]=r[i+1],!e)return{segment:f};const d=c++;let h;if(je||u||!ke[i]||ke[i].part!==e.i){u=!1;const{default:r,preload:s}=yield oe[e.i].js();let a;a=Le||!Pe.preloaded[i+1]?s?yield s.call(o,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ue):{}:Pe.preloaded[i+1],h={component:r,props:a,segment:f,match:l,part:e.i}}else h=ke[i];return a[`level${d}`]=h})))))}catch(t){a.error=t,a.status=500,i=[]}return{redirect:s,props:a,branch:i}}))}var Be,We,Ke;He.session.subscribe((t=>le(void 0,void 0,void 0,(function*(){if(Ue=t,!Le)return;je=!0;const e=ve(new URL(location.href)),n=Ce={},{redirect:r,props:s,branch:a}=yield ze(e);n===Ce&&(r?yield Ne(r.location,{replaceState:!0}):yield Ge(a,s,Me(s,e.page)))})))),Be={target:document.querySelector("#sapper")},We=Be.target,qe=We,Ke=Pe.baseUrl,pe=Ke,ge=De,"scrollRestoration"in he&&(he.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{he.scrollRestoration="auto"})),addEventListener("load",(()=>{he.scrollRestoration="manual"})),addEventListener("click",we),addEventListener("popstate",$e),addEventListener("touchstart",Ie),addEventListener("mousemove",Te),Pe.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:a,error:o}=Pe;Re||(Re=s&&s[0]);const i={error:o,status:a,session:r,level0:{props:Re},level1:{props:{status:a,error:o},component:Qt},segments:s},c=be(n);Ge([],i,{host:t,path:e,query:c,params:{},error:o})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;he.replaceState({id:de},"",e);const n=ve(new URL(location.href));if(n)return ye(n,de,!0,t)}));export{M as A,I as B,s as C,Z as D,q as E,c as F,f as G,K as H,G as I,W as J,Ut as K,y as L,O as M,Ne as N,D as O,T as P,e as Q,P as R,Et as S,pt as T,Y as U,X as V,u as W,gt as X,st as Y,B as Z,S as a,k as b,U as c,A as d,$ as e,w as f,N as g,v as h,yt as i,ft as j,dt as k,ht as l,E as m,H as n,F as o,g as p,t as q,Tt as r,o as s,mt as t,x as u,_ as v,bt as w,vt as x,wt as y,_t as z};

import __inject_styles from './inject_styles.803b7e80.js';
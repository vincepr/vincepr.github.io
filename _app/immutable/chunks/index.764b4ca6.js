function g(){}const dt=t=>t;function J(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function k(){return Object.create(null)}function b(t){t.forEach(q)}function L(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function ht(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function mt(t,e,n){t.$$.on_destroy.push(Q(e,n))}function pt(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function yt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function gt(t,e,n,i,r,u){if(r){const c=O(e,n,i,u);t.p(c,r)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const P=typeof window<"u";let bt=P?()=>window.performance.now():()=>Date.now(),z=P?t=>requestAnimationFrame(t):g;const m=new Set;function B(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),m.size!==0&&z(B)}function wt(t){let e;return m.size===0&&z(B),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}let v=!1;function U(){v=!0}function V(){v=!1}function X(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const o=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:X(1,r,w=>e[n[w]].claim_order,o))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);u.reverse(),c.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<c.length;s++){for(;o<u.length&&c[s].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(c[s],f)}}function Z(t,e){if(v){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $t(t,e,n){v&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function vt(){return j(" ")}function Nt(){return j("")}function At(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function St(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){rt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function F(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||u.push(l.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function jt(t,e,n){return F(t,e,n,et)}function Ct(t,e,n){return F(t,e,n,nt)}function ct(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function Tt(t){return ct(t," ")}function kt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Mt(t,e,n){t.classList[n?"add":"remove"](e)}function qt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Lt(t,e){return new t(e)}let x;function y(t){x=t}function R(){if(!x)throw new Error("Function called outside component initialization");return x}function Ot(t){R().$$.on_mount.push(t)}function Pt(t){R().$$.after_update.push(t)}const h=[],D=[];let p=[];const M=[],W=Promise.resolve();let A=!1;function G(){A||(A=!0,W.then(I))}function zt(){return G(),W}function S(t){p.push(t)}const N=new Set;let _=0;function I(){if(_!==0)return;const t=x;do{try{for(;_<h.length;){const e=h[_];_++,y(e),st(e.$$)}}catch(e){throw h.length=0,_=0,e}for(y(null),h.length=0,_=0;D.length;)D.pop()();for(let e=0;e<p.length;e+=1){const n=p[e];N.has(n)||(N.add(n),n())}p.length=0}while(h.length);for(;M.length;)M.pop()();A=!1,N.clear(),y(t)}function st(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function ot(t){const e=[],n=[];p.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),p=e}const E=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Ht(){d.r||b(d.c),d=d.p}function lt(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Ft(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Rt(t){t&&t.c()}function Wt(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(q).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...c):b(c),t.$$.on_mount=[]}),u.forEach(S)}function at(t,e){const n=t.$$;n.fragment!==null&&(ot(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(h.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Gt(t,e,n,i,r,u,c,l=[-1]){const s=x;y(t);const o=t.$$={fragment:null,ctx:[],props:u,update:g,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:k(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};c&&c(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,w,...C)=>{const T=C.length?C[0]:w;return o.ctx&&r(o.ctx[a],o.ctx[a]=T)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](T),f&&ft(t,a)),w}):[],o.update(),f=!0,b(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){U();const a=it(e.target);o.fragment&&o.fragment.l(a),a.forEach(tt)}else o.fragment&&o.fragment.c();e.intro&&lt(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),V(),I()}y(s)}class It{$destroy(){at(this,1),this.$destroy=g}$on(e,n){if(!L(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,at as B,S as C,ht as D,Mt as E,Z as F,At as G,b as H,mt as I,g as J,pt as K,qt as L,gt as M,xt as N,yt as O,J as P,bt as Q,wt as R,It as S,dt as T,nt as U,Ct as V,Et as W,vt as a,$t as b,Tt as c,Ft as d,Nt as e,Ht as f,lt as g,tt as h,Gt as i,Pt as j,et as k,jt as l,it as m,St as n,Ot as o,Dt as p,j as q,ct as r,_t as s,zt as t,kt as u,Bt as v,D as w,Lt as x,Rt as y,Wt as z};
if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!n[e]&&(await new Promise(async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}),!n[e]))throw new Error(`Module ${e} didn’t register its module`);return n[e]},s=async(s,n)=>{const r=await Promise.all(s.map(e));n(1===r.length?r[0]:r)};s.toUrl=e=>`./${e}`;const n={require:Promise.resolve(s)};self.define=(s,r,t)=>{n[s]||(n[s]=new Promise(async n=>{let o={};const c={uri:location.origin+s.slice(1)},i=await Promise.all(r.map(s=>"exports"===s?o:"module"===s?c:e(s))),a=t(...i);o.default||(o.default=a),n(o)}))}}define("./service-worker.js",["./workbox-64409290"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"622832ad87f3e1912562ec817ede5040"},{url:"static/js/3.fcded4.chunk.js.LICENSE.txt",revision:"8b7b831ddbcf7ca76f480d350b4bcdca"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]})),e.registerRoute(/\.html$/,new e.StaleWhileRevalidate({cacheName:"my-html-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:60,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.StaleWhileRevalidate({cacheName:"my-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:3600,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.js$/,new e.StaleWhileRevalidate({cacheName:"my-js-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:3600,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
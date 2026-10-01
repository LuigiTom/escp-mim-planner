// ESCP MiM Planner — service worker
// Caches the whole app shell on install so the app opens and works
// with no network at all after the first successful load. Bump
// CACHE_NAME whenever any precached file changes, so returning
// visitors pick up the new version instead of a stale cache.

var CACHE_NAME = "escp-planner-v1";
var PRECACHE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./fonts/Inter-Regular.woff2",
  "./fonts/Inter-Medium.woff2",
  "./fonts/Inter-SemiBold.woff2",
  "./fonts/Inter-Bold.woff2",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(PRECACHE);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE_NAME; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      return self.clients.claim();
    })
  );
});

// Cache-first for everything in our own origin (this is a fully
// static, local-data app — nothing here needs a fresh network
// fetch to be correct). Falls back to network, and updates the
// cache in the background when it does hit the network.
self.addEventListener("fetch", function(event){
  var req = event.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);
  if(url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(function(cached){
      var networkFetch = fetch(req).then(function(res){
        if(res && res.status === 200){
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function(cache){ cache.put(req, copy); });
        }
        return res;
      }).catch(function(){ return cached; });
      return cached || networkFetch;
    })
  );
});

const CACHE_NAME = "colatina-express-v2";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Instala e cacheia arquivos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Intercepta requisições - Cache First com filtros de segurança
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Ignora requisições que não devem ser cacheadas
  if (
    request.method !== "GET" ||
    url.pathname.includes("/~oauth") ||
    url.pathname.includes("/api/") ||
    url.pathname.includes("/_next/") ||
    url.pathname.includes("/hot-update") ||
    url.hostname !== self.location.hostname ||
    url.protocol === "chrome-extension:" ||
    url.protocol === "moz-extension:"
  ) {
    return;
  }

  // Cache First para assets estáticos
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }
      
      return fetch(request).then((response) => {
        // Só cacheia respostas válidas
        if (!response || response.status !== 200 || response.type === "error") {
          return response;
        }
        
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, clone);
        });
        
        return response;
      }).catch(() => {
        // Fallback para cache em caso de erro de rede
        return caches.match(request);
      });
    })
  );
});

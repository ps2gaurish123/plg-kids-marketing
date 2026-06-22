// Custom PWA Service Worker generated automatically during Vite compilation
const SHELL_CACHE = 'plg-kids-shell-v21';
const LESSON_CACHE = 'littlelearn-lessons-v5';
const REMOTE_CACHE = 'littlelearn-remote-v4';
const SHELL_ASSETS = [
  "/products/",
  "/products/index.html",
  "/products/offline.html",
  "/products/offline-asset-manifest.json",
  "/products/favicon-32.png",
  "/products/apple-touch-icon.png",
  "/products/pwa-192.png",
  "/products/pwa-512.png",
  "/products/assets/brand/plg-kids-logo.png",
  "/products/assets/brand/plg-kids-square.png",
  "/products/manifest.webmanifest",
  "/products/script.js",
  "/products/assets/index-bkKn7AxM.js",
  "/products/assets/index-DFUJdulD.css"
];
const LESSON_ASSET_PATTERN = /\.(json|png|jpe?g|webp|svg|mp3|wav)$/i; // Excluded mp4!

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => {
      return cache.addAll(SHELL_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (![SHELL_CACHE, LESSON_CACHE, REMOTE_CACHE].includes(key)) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

const url = new URL(event.request.url);
  const isStaticRequest = /\.(js|mjs|css|json|png|jpe?g|webp|svg|gif|ico|mp3|wav|ogg|mp4|webm|wasm|map)$/i.test(url.pathname);

  // Exclude phonics_app requests from Service Worker caching completely
  if (url.pathname.startsWith('/products/phonics_app/')) {
    return;
  }

  // Exclude MP4/Video files from Service Worker caching to allow native browser Range Requests (essential for streaming on iOS/Safari)
  if (url.pathname.endsWith('.mp4') || url.pathname.endsWith('.webm')) {
    return;
  }

  // Intercept Cloudflare CDN requests and dynamically cache based on type
  if (url.hostname === 'assets.plg-kids.com') {
    // 1. JSON metadata -> Network-First (to allow live updates with offline fallback)
    if (url.pathname.endsWith('.json')) {
      event.respondWith(networkFirst(event.request, LESSON_CACHE));
      return;
    }
    // 2. Images and Audio -> Cache-First (immutable asset caching)
    if (LESSON_ASSET_PATTERN.test(url.pathname)) {
      event.respondWith(cacheFirst(event.request, LESSON_CACHE));
      return;
    }
  }

  if (url.origin !== self.location.origin) {
    event.respondWith(networkFirst(event.request, REMOTE_CACHE));
    return;
  }

  if (LESSON_ASSET_PATTERN.test(url.pathname)) {
    event.respondWith(cacheFirst(event.request, LESSON_CACHE));
    return;
  }

  if (isStaticRequest) {
    event.respondWith(networkOnlyStatic(event.request));
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request, SHELL_CACHE, '/products/offline.html'));
    return;
  }
  
  event.respondWith(cacheFirst(event.request, SHELL_CACHE));
});

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) return cachedResponse;

  const networkResponse = await fetch(request);
  if (networkResponse && networkResponse.status === 200) {
    cache.put(request, networkResponse.clone());
  }
  return networkResponse;
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => null);

  return cachedResponse || fetchPromise || new Response('Offline', { status: 503 });
}

async function networkFirst(request, cacheName, fallbackUrl = null) {
  const cache = await caches.open(cacheName);
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (_) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) return cachedResponse;

    const url = new URL(request.url);
    const isStatic = /\.(js|mjs|css|json|png|jpe?g|webp|svg|gif|ico|mp3|wav|ogg|mp4|webm|wasm|map)$/i.test(url.pathname);

    if (fallbackUrl && request.mode === 'navigate' && !isStatic) {
      const fallback = await caches.match(fallbackUrl);
      if (fallback) return fallback;
    }

    return new Response('Offline resource not found', { status: 404 });
  }
}

async function networkOnlyStatic(request) {
  try {
    const response = await fetch(request);
    if (response) {
      return response;
    }
    return new Response('Asset not found', { status: 404 });
  } catch (err) {
    return new Response('Network error fetching static asset', { status: 404 });
  }
}

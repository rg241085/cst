// sw.js - Basic Service Worker to trigger PWA Install
self.addEventListener('install', (event) => {
    console.log('Service Worker Installed');
});

self.addEventListener('fetch', (event) => {
    // Basic fetch - lets the app work normally online
});
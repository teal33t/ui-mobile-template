var static = "Mobileux-rtl-v2";
var cacheassets = [
  "../../../splash.html",
  "../../../landing.html",
  "../../../signin.html",
  "../../../signup.html",
  "../../../verify.html",
  "../../../index.html",
  "../../../thankyou.html",
  "../../../state.html",
  "../../../pinned.html",
  "../../../style.html",
  "../../../profile.html",
  "../../../assets/css/style.css",
  "../../../assets/css/custom_rtl.css",
  "../../../assets/js/app.js",
  "../../../assets/js/color-scheme.js",
  "../../../assets/js/jquery-3.33.111.min.js",
  "../../../assets/js/jquery.cookie.js",
  "../../../assets/js/main.js",
  "../../../assets/js/popper.min.js",
  "../../../assets/js/pwa-services.js",
  "../../../assets/img/background1.png",
  "../../../assets/img/background1_402x.png",
];

self.addEventListener("install", function (event) {    
    event.waitUntil(
        caches.open(static).then(function (cache) {
            cache.addAll(cacheassets);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});
self.addEventListener("activate", function (event) {    
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
    );
});

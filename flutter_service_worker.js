'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "690491838a88638f76e9443644d87d9b",
"index.html": "27caac7a1a65b449f705cbbfe6f85a87",
"/": "27caac7a1a65b449f705cbbfe6f85a87",
"main.dart.js": "7fb61b10220753da37a49bb2fb61524f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eaf08099a93b6dd0787ffb2709744926",
"assets/asset/images/home/practice_count.png": "b3d88f171886d5706971645d0e6c5533",
"assets/asset/images/home/baomingliebiao.png": "97aacf1f4813e575a0e2f95d2fe2f37c",
"assets/asset/images/home/lilunkaoshi.png": "b4b26ba8a624ad1309e8063c00cf35d5",
"assets/asset/images/home/gonggao.png": "1a0fb3bf97960ea72d00a8dfa945adb8",
"assets/asset/images/home/lilunmoni.png": "f7da51f3bedeed35effb6d50881d9e80",
"assets/asset/images/home/weiketang.png": "84f6fa6e97e4574c65f5e9600feaa6ed",
"assets/asset/images/home/richeng.png": "4138053716ba7e86cd0edab3d3947a64",
"assets/asset/images/home/caozuokaoshi.png": "757d70eb2f0de866cf4f9cbbad9e94b5",
"assets/asset/images/home/richengkai.png": "4b18af26059a74a20d91f557f639b26b",
"assets/asset/images/home/yidianzan.png": "6ae59b0bf083a7ab70fccdc6769c2daa",
"assets/asset/images/home/koufenjia.png": "b79e5437a90f0ed30b24a8916d213eb2",
"assets/asset/images/home/richengjia.png": "37378f94c754a0b7333c5d84e858d6fa",
"assets/asset/images/home/peixunjihua.png": "7c9e3a59ce286b7872d6cc869bb517f6",
"assets/asset/images/home/saoQR.png": "4985578479a130084c91beca6e4e430d",
"assets/asset/images/home/wodepeixun.png": "67554df4604035498d36dcaecaef60c1",
"assets/asset/images/home/pinglun.png": "1b120e7ea5ae73fb8df614c0eab36cae",
"assets/asset/images/home/practice_success.png": "b8af9f3cc26dbb9edfa3c8f30a708ff8",
"assets/asset/images/home/addScheduleRemindSelect.png": "37d41953c3415e20c97415c228acb70c",
"assets/asset/images/home/lilunmoniBG.png": "3f88fafdd39b9c84c613dbea0d33311b",
"assets/asset/images/home/zanwupinglun.png": "427630fc008c3f308ecb846d71955b11",
"assets/asset/images/home/addScheduleRemindUnselect.png": "ea16b31984747ee01f31591650eb5cfe",
"assets/asset/images/home/shunxulianxi.png": "8b7bb9fd213a2702fb6e86900e78c188",
"assets/asset/images/home/lilunkao.png": "20ffaf8a523b2c1321c1f5f84e0ad6fb",
"assets/asset/images/home/peixunguanli.png": "c79cf4af091f8551dd646b2b2c41eeed",
"assets/asset/images/home/signsuccess.png": "d90660e4c855ac19299b601f967033f1",
"assets/asset/images/home/peixunqiandao.png": "5a55727d3d13633c6a424886be89c634",
"assets/asset/images/home/richengguan.png": "63411179cd48f9f1e33564c4d14d63ad",
"assets/asset/images/home/chakan.png": "8911272d9faccdb36b090dbf9ec7db94",
"assets/asset/images/home/faburili.png": "ff6a116aaafe48d30abc0bffd17c36e6",
"assets/asset/images/home/practice_fill.png": "0b2e63a9645a67cd4f25899ff1e6951c",
"assets/asset/images/home/dianzan.png": "641865f94db985d52aa0abf57ea0e0a7",
"assets/asset/images/home/kaoheguanli.png": "b17e7f346707c356943440accaf8fba6",
"assets/asset/images/home/zanwushuju.png": "4df3a836a4d61c68c96db624b2093773",
"assets/asset/images/home/cuotihuigu.png": "f5b4dba94eced803d2188d028329f01d",
"assets/asset/images/home/shipingbofang.png": "eb927fc06894c0dddd500ac5a55943d7",
"assets/asset/images/contact/bumen.png": "46e16b717faeba9f0d0a4eab703a7e29",
"assets/asset/images/contact/jianttou.png": "40b7d5c7b3b83d74adb0bb412c01130d",
"assets/asset/images/contact/changyong.png": "fe2c140e0e07cf283baf96175def3c5d",
"assets/asset/images/examine/cuotiBG.png": "53927d18e35cb9fd4ed2c75678686e75",
"assets/asset/images/tabbar/tabbar_home_select.png": "aa6d191a0a170ca90827a8b20ae11673",
"assets/asset/images/tabbar/tabbar_home.png": "0d01375d1f9e2f7a635e4bb3a58ba3a7",
"assets/asset/images/tabbar/tabbar_mine.png": "04d5d3e2fd2089b10c6b229299885092",
"assets/asset/images/tabbar/tabbar_contact.png": "6d4a9a21650dbdfb3aedc977fe7a40b0",
"assets/asset/images/tabbar/tabbar_contact_select.png": "88f2d3e40933e4e3b0aa89ff680fb757",
"assets/asset/images/tabbar/tabbar_mine_select.png": "30ac63096a77490796b4aae4479d262e",
"assets/asset/images/tabbar/tabbar_message.png": "0ded24518c3008a20e07c57a9ff220b3",
"assets/asset/images/tabbar/tabbar_message_select.png": "bb5b556b1fe4759a935613af859c2fd2",
"assets/asset/images/message/ding.png": "9a92bb1b76a1ee076f2383a3d8a8b032",
"assets/asset/images/mine/tuichudenglu.png": "983a45b41eafcac55c16b43bb180f81c",
"assets/asset/images/mine/mobileBG.png": "87e0ee819b7c5c83dda1f3f429faafe1",
"assets/asset/images/mine/shouji.png": "c6d60a9b8450e9354edd935283603214",
"assets/asset/images/mine/guanyuwomen.png": "db5c286a928d50e2e1019bb5602e11e1",
"assets/asset/images/mine/xinming.png": "629139c1bfe263d85a5ab0754bd7a974",
"assets/asset/images/mine/jibenxinxi.png": "38ebce5b374e9f3d1b31fc5223c572aa",
"assets/asset/images/mine/logo.png": "3ec03e223d339ae03ab598977017e426",
"assets/asset/images/mine/gongzuoxinxi.png": "7bb93e2fe34ddbbe2d41ba8db233cc7e",
"assets/asset/images/mine/touxiangpre.png": "c23a7e2012bcedf313d18d9478211a70",
"assets/asset/images/mine/touxiang.png": "ef04800d07635fbb9a758cb1fac114ff",
"assets/asset/images/mine/xiaoxitixing.png": "e701a8fbcfed9f9a48e391b3ac01b3d9",
"assets/asset/images/mine/unlogin.png": "6e8ad2a441580f54dd8886ca57b232b1",
"assets/asset/images/updateVersion/header/up_header.png": "e5073d2d03e73efa2b10687b29c2c62a",
"assets/asset/images/updateVersion/header/1.5x/up_header.png": "39e562354f131b14956e81a3beba196c",
"assets/asset/images/updateVersion/header/3.0x/up_header.png": "a727f9b980e6240bbff4ec1af669b765",
"assets/asset/images/updateVersion/header/4.0x/up_header.png": "ef954809721096f05f15f2ac1f8e9850",
"assets/asset/images/updateVersion/header/1.0x/up_header.png": "50dc7102f4954e518625c9240b25e8fc",
"assets/asset/images/updateVersion/header/2x/up_header.png": "e5073d2d03e73efa2b10687b29c2c62a",
"assets/asset/images/login/icon_display.png": "e429804ee2fb0307a40a119fd905fb2b",
"assets/asset/images/login/icon_hide.png": "a15c6b3b60e05f5f7ba2580d436b3df9",
"assets/asset/images/login/icon_delete.png": "dc3b2c85713bb317b8673c80067c2a12",
"assets/asset/files/chinese_cities.json": "ee7ff73180653e2b8ad2f888938f97bd",
"assets/AssetManifest.json": "0f4d6234a5c9a153e8de1e86b12073a5",
"assets/NOTICES": "f396415e40bfc6af840033f9fbb558b3",
"assets/FontManifest.json": "36d00181377be8304487a8a41bc7bcdd",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

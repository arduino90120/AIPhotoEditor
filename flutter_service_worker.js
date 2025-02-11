'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "0f8cb5ebac32bf9cfcae1ac1f0dc46fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6c560d025559bb0a64b6f43878d80cb2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a0fc40b60e0387c83143e9c52de7c323",
".git/logs/refs/heads/main": "5f9efab456a3e6ef11fc797f36b0f037",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/dabdd276c435d02b304d668aa51a6e821ab1fd": "90856020f95a7bc4fa018fca3d2d2fe1",
".git/objects/06/f12a179e99884e607a78b353ec012baa8eeb37": "5ecaa9c1e073a9b42038a6c40c1ed266",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0f/4623df63c65d527ac09007cf5089c3e6c8bd09": "540519cc5d8d888f2046cb62d2f06d9e",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/12/17c49e21acc5c3033209d24919b5743244f427": "9acfd9a2afe65816f1cd361076a8ce16",
".git/objects/14/bc6a6f8346e10964bd5ba4a3f1d686fa493a5e": "9ad028e2e1f639bebe9a510ac2ffbab3",
".git/objects/17/5f93b0a13eab7b22eb08617dbfb967141559a8": "a61a608d4d64527e89bfb7f687e57f85",
".git/objects/1b/f0d614f21b25f7540e844599d10a4772f5d835": "41ccc81922667edaf5f4a049b0e8d3b5",
".git/objects/21/1d12512c857d4b6372401f74b081680d477ed8": "ee3106b338bcb685c18617558b4c45aa",
".git/objects/21/6990d0f64b0bcd1a8b224a7f1e2a76e642a9f7": "68ff68406b73cd7e9ad0d4aafe51c649",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/26/2647b6164d6b60a372a1110cc684f74857a76f": "7adde8d3622666a82343c9163d3021fe",
".git/objects/27/c5e7de0090806343ed18f0fe811693d4847c54": "70d67581eada5d11a96d5ead5995fbed",
".git/objects/27/e389a5b5b6a7b6b2d31b50d117b82f28070a2d": "9dbc79b113602ad690be6256f52aafad",
".git/objects/2a/89ab55d25904cf6cde78a810f59ce7ce1b7db5": "888223adb0609af6a3c00ef6f48a9a52",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/895f334cb482162af8e24c2a724d3e58c01c60": "748376295ab71c9d6481c3d4fb221b5b",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/f5b27e9923050bb98241d4627f2b8556a44b1b": "f0bddc1cb94e137ef82adb47d905f2c3",
".git/objects/3e/5768bc5ef7b9812622ef3d8eff82d713283b82": "5113b1ee72ebb8784d96c605f136c6cc",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/4bfe43b3484c352c6734f2a9202abc9cf09243": "db388c17d2a58208eb0ef4cf648979b2",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/4b/41dd6a8c3a658395515992e0a1a9ac2637a9f1": "754ae90747038fcbc78e2cf3592c1006",
".git/objects/55/4a82b00590e3fd77ad6736cf22aaac5e358044": "157856f82c7142bffafcc3b9b596b5d4",
".git/objects/56/9025cec7cf3422a5eab3412bff94e0c3d1e55b": "1ddea96c5789e9688b180374a804ce22",
".git/objects/5c/28a211211e7eeb18ff41edb1153ed434a54456": "8e5a4722c5830bf4844d8ed1d256a596",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/a3163e35db2cf3be379e775394061b10787991": "054d16a9e7058742f8d20ae5b7b92eb1",
".git/objects/5e/78cc8110cddf5bba17774a0f6af5d1a794ec3d": "6994d97697ce0d7e30c88a154cb860bc",
".git/objects/67/6d981d55967abb30e58c15a0fac9cbc493f1ca": "459ba4433b2d07a7b762bd251d131b8c",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/5d65c5c8ff7b5b1f8e18d6cd1ab8be48453aaa": "8bc3d009feeea4acf78879b71abf26fa",
".git/objects/6f/c4497569a3c600331f7427d5f9393fcec63979": "0b2a8b697c88b18cfa7ae5ed9d105c07",
".git/objects/70/5d4f533b651974ef4436ad7c729fd251ba84e1": "627a161e957be243ce810b44077d8052",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/2527dd982b9c71b4cbfa32f3a63756a007b7f0": "63fa9af9dd6c8f0364aa3120e3b7c866",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bebc1a156c386c0652a3b1eda19c7a1817cf27": "72238261658a08912a177c41c9206b7e",
".git/objects/8f/5d787f9d20f42aa555e7a99c3e4ccdab4152bc": "4e5ceece9a679111ff7f317a0327693f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a2/16918a79335490ff682fbc4e6fe65ff75500dc": "e7e8d9f55ec0e0b37a1ec459d88a1ad0",
".git/objects/ad/18650a91344cb2c5eef0e4fc012c66c6396c1c": "169133c7f1956368412e2c8ad75e390b",
".git/objects/af/1dd7cdfaebdff2a908ad06d71135686b446db9": "68bb24ff2c3d93bfde1ab8ba4a55b879",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/2cde84173b90b2fb57ac9fb57dfd253951155b": "d0e4db01346b5b6e29224883bb9a04f9",
".git/objects/bc/3027be35b127d93b3dc2040e2d5fd4bef721c4": "01b07bc486f81a792be4fc3f74eb3262",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/bc/c26a997b9ffbe450d95fea440fc34a7c10d3b5": "be5348aa1a9a99d5357eeccf045d965c",
".git/objects/bd/a3c7b3dabab78ea6c0a82cb2798f37f4200f5b": "9a7b642f39e11e5c2593db7f9dc8d9ce",
".git/objects/bf/5b325c33d09f715a1184577f7b037aa9ff0342": "2905f9094a6495c03625b9b3c25373b8",
".git/objects/c2/917ef7a698e45bf7d1fe74b721e23a7794214a": "f18f74c558c2ce8017d6cb0ccbe934d1",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/4ffc6cc791987859420231827003f607e2d80f": "86dad1291dc14444cda46ed8e4352505",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/43827b7f19c205fb1435fd2a7881594949eb14": "6f0e641be583a440243411e347910442",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/bc4772eb4c277bcba1fe0f0c452a2e4d56dc09": "1eaf69dd836afa3587ef4e838dd470fd",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e5/94f40fa97724abfec00567993f1e9ec38a680e": "ccffca2824dfc28e883f2224e4612431",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/bc6f609bc01e66366fedec090e01a1f16e46be": "d918604e0da5673e04a8389d6b9ac64a",
".git/objects/f6/c2b8853f6096f00e0cf18d0654abce3de30f6a": "aa4fb0b48291a8876b93d10a0a7c4b8c",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/fe/950ff58e6f7d9e436eaed93fc5e1034f4d71a6": "8b9c8ecb3eab82c2e1040166caf88363",
".git/refs/heads/main": "392db8fb8dd3cfe17fb986573074534a",
"assets/AssetManifest.bin": "74060a1ef6dd351553070ae6e4f23c57",
"assets/AssetManifest.bin.json": "a2c4a4bfb847bd9d03223768d1e10b94",
"assets/AssetManifest.json": "0cfcb6ef2ad0c687b8171e23cb0f7056",
"assets/FontManifest.json": "37889d7661ebd38cd3d8f705630f1d46",
"assets/fonts/MaterialIcons-Regular.otf": "2b4884bf45891b2c77912b81daedaca1",
"assets/NOTICES": "519f2397198dbe44e0ab8f57edb544f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8801a3ec0e13f4b0ee88c5e6096fbf34",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_donation_buttons/assets/coffee.png": "2159a0ac84d49abbdb353eaaf502eeb8",
"assets/packages/flutter_donation_buttons/assets/coffee2.png": "1446f4880b85af9912f34dd705a371f5",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "cfae1b8c4e99b928db78348960c8abf3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "6652b349347be6b9c9970c2f3c6bcb9c",
"assets/packages/pro_image_editor/lib/fonts/ProImageEditorIcons.ttf": "f67c336e8b9a0fcd002e5485e4b9c808",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js": "cba8133d183809eaed6df906b8bda76a",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.deps": "1b1e81a08e04475f7ec1197caf4141ed",
"assets/packages/pro_image_editor/lib/web/web_worker.dart.js.map": "db16e6597147ef1674d289aad91a42f0",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "63bd8ab21692f43d782be84edfe85245",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "30d7c974468f679d55de84d06abf5faf",
"icons/android_ic_launcher-144x144.png": "1449da6fa16eebf314090338b69333d7",
"icons/android_ic_launcher-192x192.png": "fb47bd24fd558a02aca10eefadfb9396",
"icons/android_ic_launcher-48x48.png": "a2537df30e138cbe80d8421ad5436d0f",
"icons/android_ic_launcher-72x72.png": "63da5a85e37609b6c690a3e3f79ae82d",
"icons/android_ic_launcher-96x96.png": "8efbade20a568235270469bed93baaf7",
"index.html": "e53e7e858b2b282743babb4a5ac69a80",
"/": "e53e7e858b2b282743babb4a5ac69a80",
"main.dart.js": "d16dbb34a8292c99f814ec1c5d49b572",
"manifest.json": "33fb91f865c4a20399ab5324a7479fab",
"version.json": "2db9fd1c19321c3c7f3bd71a93cfeed0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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

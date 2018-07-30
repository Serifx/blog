/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/Github/Blog/_workspace/public/404.html","e8244dcd63db228eb060379fe141d99e"],["E:/Github/Blog/_workspace/public/about/index.html","bc89d5046151dde9aae313db92b048c6"],["E:/Github/Blog/_workspace/public/archives/2016/06/index.html","30e0a154df7c29c14da91c4eb7317c94"],["E:/Github/Blog/_workspace/public/archives/2016/index.html","84575453debdad6ed8ca419f1edcb8c4"],["E:/Github/Blog/_workspace/public/archives/2017/05/index.html","203dddc8ef82349de251879d5b893339"],["E:/Github/Blog/_workspace/public/archives/2017/index.html","257796cdebb38827cfeebd44a4cd16da"],["E:/Github/Blog/_workspace/public/archives/2018/07/index.html","dd6587e41e33c56f1257004f0fbb68ba"],["E:/Github/Blog/_workspace/public/archives/2018/index.html","38abd80409ac5456939a80828e1fa490"],["E:/Github/Blog/_workspace/public/archives/index.html","64db9b8de217902816c3afcf9dde0f62"],["E:/Github/Blog/_workspace/public/archives/page/2/index.html","fe2c9e0d5e8e822bc261bb5bbd0e94a7"],["E:/Github/Blog/_workspace/public/assets/css/main.css","4c4d890fd6ead5e745524eed08ad0b63"],["E:/Github/Blog/_workspace/public/assets/images/algolia_logo.svg","8e0e9838589ad42418fe5fa23fa7e9f1"],["E:/Github/Blog/_workspace/public/assets/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["E:/Github/Blog/_workspace/public/assets/images/avatar.png","f7d70e8d4d8accb6edeecbe0f670284f"],["E:/Github/Blog/_workspace/public/assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["E:/Github/Blog/_workspace/public/assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["E:/Github/Blog/_workspace/public/assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["E:/Github/Blog/_workspace/public/assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["E:/Github/Blog/_workspace/public/assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["E:/Github/Blog/_workspace/public/assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["E:/Github/Blog/_workspace/public/assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["E:/Github/Blog/_workspace/public/assets/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["E:/Github/Blog/_workspace/public/assets/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["E:/Github/Blog/_workspace/public/assets/images/qrcode_donate_alipay.jpg","62ec4a313abc6ed484324358cdd0e6a9"],["E:/Github/Blog/_workspace/public/assets/images/qrcode_donate_wechat.jpg","0a7ac29b4e3412bb5fe2211a8b25d28f"],["E:/Github/Blog/_workspace/public/assets/images/qrcode_subscribe.jpg","4704e4f667c06fa47a80d531de2305fc"],["E:/Github/Blog/_workspace/public/assets/images/qrcode_subscribe.png","a3ff828e1f3a6a2a135eef5fb4c4d3ab"],["E:/Github/Blog/_workspace/public/assets/images/qrcode_subscribe_alpha.png","f6fc73b5671d61bd4b237148d7608bf0"],["E:/Github/Blog/_workspace/public/assets/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["E:/Github/Blog/_workspace/public/assets/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["E:/Github/Blog/_workspace/public/assets/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["E:/Github/Blog/_workspace/public/assets/js/src/affix.js","50f6035659047ce54d49eeee3341f4ae"],["E:/Github/Blog/_workspace/public/assets/js/src/algolia-search.js","048638815265c3b4ed1dcd3e57a2ea1f"],["E:/Github/Blog/_workspace/public/assets/js/src/bootstrap.js","4599903532bfb1f21bffacce3b332c46"],["E:/Github/Blog/_workspace/public/assets/js/src/exturl.js","6ec3042c8eb7c6c5ce2e6bf976f48682"],["E:/Github/Blog/_workspace/public/assets/js/src/hook-duoshuo.js","3f66a34cf7872cb6005cffee4e7e4841"],["E:/Github/Blog/_workspace/public/assets/js/src/motion.js","a964fe921b6ca705ebe38cb3c2ddddc3"],["E:/Github/Blog/_workspace/public/assets/js/src/post-details.js","52141dda653a07e043b1808087a98f62"],["E:/Github/Blog/_workspace/public/assets/js/src/schemes/pisces.js","ce87385d362ea3860733d13a1523a3b3"],["E:/Github/Blog/_workspace/public/assets/js/src/scrollspy.js","3df7e0e2baee294ac66f613f8f08e9d0"],["E:/Github/Blog/_workspace/public/assets/js/src/utils.js","aa0dedefbdda23afa01d8d30b8f1c702"],["E:/Github/Blog/_workspace/public/assets/lib/algolia-instant-search/instantsearch.min.css","64e349207f5d086bfbf912ddcaa4d537"],["E:/Github/Blog/_workspace/public/assets/lib/algolia-instant-search/instantsearch.min.js","5e7f1c089260e9930915548a930c23c0"],["E:/Github/Blog/_workspace/public/assets/lib/canvas-nest/canvas-nest.min.js","11afb3b180697a43c86aa19eb116e3ac"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","21683577e4dc3e7371f9d089242407fc"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/helpers/jquery.fancybox-media.js","f19edb615dc98153cae583635f31568c"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","577560d3a0f6de2db6e96bc5cf8809cd"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/jquery.fancybox.js","87feb5ef1a02812195181cb73e2697ce"],["E:/Github/Blog/_workspace/public/assets/lib/fancybox/source/jquery.fancybox.pack.js","eb9969ed8bbaeed283c69175e1ba0c9a"],["E:/Github/Blog/_workspace/public/assets/lib/fastclick/README.html","47d980565a1314a4f37e2e1413462f5d"],["E:/Github/Blog/_workspace/public/assets/lib/fastclick/lib/fastclick.js","7ea5de2b362dae6795db8c8e6672e3e6"],["E:/Github/Blog/_workspace/public/assets/lib/fastclick/lib/fastclick.min.js","b4a44728a10c89d76fc5890f6a93601d"],["E:/Github/Blog/_workspace/public/assets/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["E:/Github/Blog/_workspace/public/assets/lib/font-awesome/css/font-awesome.min.css","c97c3824a8d6c5eb936727310d68fe87"],["E:/Github/Blog/_workspace/public/assets/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["E:/Github/Blog/_workspace/public/assets/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["E:/Github/Blog/_workspace/public/assets/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["E:/Github/Blog/_workspace/public/assets/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["E:/Github/Blog/_workspace/public/assets/lib/jquery/index.js","ff3aa84bc13ec2a839abcd03494d77a3"],["E:/Github/Blog/_workspace/public/assets/lib/jquery_lazyload/CONTRIBUTING.html","4f4b60a5a3760e6011fad3214aa8a8a5"],["E:/Github/Blog/_workspace/public/assets/lib/jquery_lazyload/README.html","7b63e5a6c9def8f3f15e955420e39a02"],["E:/Github/Blog/_workspace/public/assets/lib/jquery_lazyload/jquery.lazyload.js","6263a73c08a53dc8f0d36c06edca5f0f"],["E:/Github/Blog/_workspace/public/assets/lib/jquery_lazyload/jquery.scrollstop.js","6006591a18f45d58b5b2e8c1978780a4"],["E:/Github/Blog/_workspace/public/assets/lib/three/three-waves.min.js","68baefe695162d4e678ea1a407128484"],["E:/Github/Blog/_workspace/public/assets/lib/three/three.min.js","a36324378f53e334974e7aa7867355d4"],["E:/Github/Blog/_workspace/public/assets/lib/ua-parser-js/dist/ua-parser.min.js","ec3f2446ab143915a46bf9367b0bb66e"],["E:/Github/Blog/_workspace/public/assets/lib/ua-parser-js/dist/ua-parser.pack.js","0f690e724d2054bf27acb0056605d77c"],["E:/Github/Blog/_workspace/public/assets/lib/velocity/velocity.js","1ce7c6d862c277c0f993b8a719c85628"],["E:/Github/Blog/_workspace/public/assets/lib/velocity/velocity.min.js","05504ce6b29fd05a8323522067603300"],["E:/Github/Blog/_workspace/public/assets/lib/velocity/velocity.ui.js","86ef77f363cebf6239914fe205bf2828"],["E:/Github/Blog/_workspace/public/assets/lib/velocity/velocity.ui.min.js","80c6b9ea84fe24b08eb81c1f490f3808"],["E:/Github/Blog/_workspace/public/categories/CSS/index.html","4eed2569499e58bdc97f67671777092b"],["E:/Github/Blog/_workspace/public/categories/JavaScript/index.html","ea7dacead17f880238b065615a91d08b"],["E:/Github/Blog/_workspace/public/categories/index.html","df22c637e723024838207fea46f7bad2"],["E:/Github/Blog/_workspace/public/categories/总结/index.html","2e56daa4ad0498bf58c471491eefeeb5"],["E:/Github/Blog/_workspace/public/categories/浏览器/index.html","86cb1b79f459e81907911c412af001df"],["E:/Github/Blog/_workspace/public/categories/软件工程/index.html","f60ff55becc31b5ea64d606ab92df441"],["E:/Github/Blog/_workspace/public/index.html","ee03e352085b64fa24ee68a548479bfc"],["E:/Github/Blog/_workspace/public/page/2/index.html","8482c321cee98935c01d68bb3fcf0da6"],["E:/Github/Blog/_workspace/public/posts/2016/1104843291/index.html","28bd63faa3ad4688f313a9c06596181f"],["E:/Github/Blog/_workspace/public/posts/2016/1640409887/index.html","3cd973c484462387dcfca3f59741f3b1"],["E:/Github/Blog/_workspace/public/posts/2016/2680227017/index.html","02e553bb99d68eb4b4697f2169fae31d"],["E:/Github/Blog/_workspace/public/posts/2016/3711766572/index.html","b3f55e41f9c68470689a3258b6b22b9e"],["E:/Github/Blog/_workspace/public/posts/2017/3721315630/index.html","1241d6f4bdcb8fef3c7eec6e4490b23f"],["E:/Github/Blog/_workspace/public/posts/2018/1641365241/index.html","55ae448e8bfb08ea45579b1223da71d1"],["E:/Github/Blog/_workspace/public/posts/2018/1710259336/index.html","c7977e07fd04476a15f8ed58d22bf384"],["E:/Github/Blog/_workspace/public/posts/2018/1778481141/index.html","cb82b7801a66815f11abb62e344cad79"],["E:/Github/Blog/_workspace/public/posts/2018/1809288136/index.html","f3cb197a49cb0525a661aadbc33e04b1"],["E:/Github/Blog/_workspace/public/posts/2018/1809288136/js-prototype-1.jpg","233d18fde3c7b544becc632398a3e845"],["E:/Github/Blog/_workspace/public/posts/2018/1809288136/js-prototype-2.jpg","bc77048d02fd35ce714a69fec7f21c21"],["E:/Github/Blog/_workspace/public/posts/2018/1809288136/js-prototype.png","3ee04ff512a68800c014b66de0f6b3f2"],["E:/Github/Blog/_workspace/public/posts/2018/2225505590/index.html","7adef0bcdfd8a299331168071d00c074"],["E:/Github/Blog/_workspace/public/posts/2018/2255145150/index.html","8ce22e169759179462766fe96aacb337"],["E:/Github/Blog/_workspace/public/posts/2018/2255145150/js-answer-tasks.jpg","6bb04da0a485a6a895e58ce9599dab9f"],["E:/Github/Blog/_workspace/public/posts/2018/2255145150/js-event-loop.png","da078fa3eadf3db4bf455904ae06f84b"],["E:/Github/Blog/_workspace/public/posts/2018/3141220995/img/css_parsing.png","0aa927e9313bf58eb4a12f5ce2c014f5"],["E:/Github/Blog/_workspace/public/posts/2018/3141220995/img/dom_tree_exp.png","16ef855a130014986eef5af91304b3a0"],["E:/Github/Blog/_workspace/public/posts/2018/3141220995/img/gecko_flow.jpg","a2fa989b81299e6fe01d87cfe225e088"],["E:/Github/Blog/_workspace/public/posts/2018/3141220995/img/render_tree.png","a43a99a924a135f54b9ccd937b6c5de5"],["E:/Github/Blog/_workspace/public/posts/2018/3141220995/img/render_tree_construction.png","0c389301ba794f3ca7b491572d73971d"],["E:/Github/Blog/_workspace/public/posts/2018/3141220995/img/tcp_three_way_handshake.png","c633367fbc5f6380f061ef71af9b3b95"],["E:/Github/Blog/_workspace/public/posts/2018/3141220995/img/webkit_flow.png","85a66640e7f1d9b94421884d454cad12"],["E:/Github/Blog/_workspace/public/posts/2018/3141220995/index.html","a438f0a359b45f4c6be137868dde97d4"],["E:/Github/Blog/_workspace/public/posts/2018/3526440553/index.html","6ad5deddc0120205d8d9b2dd9ed95d4a"],["E:/Github/Blog/_workspace/public/posts/2018/4089248533/index.html","1481ff609175c8b4ea98d5a5d5024264"],["E:/Github/Blog/_workspace/public/tags/CSS/index.html","83742ceb1b325cb2f7b79f72bc4861f2"],["E:/Github/Blog/_workspace/public/tags/JavaScript/index.html","52e692a400d6def0a61c3846066f3f56"],["E:/Github/Blog/_workspace/public/tags/URL/index.html","3ec50adbabc26c5e245584853e3f84c7"],["E:/Github/Blog/_workspace/public/tags/index.html","62e08388877792809f20b81454ac5f27"],["E:/Github/Blog/_workspace/public/tags/代码段/index.html","00984447960de362442ad610bf575719"],["E:/Github/Blog/_workspace/public/tags/总结/index.html","0e3633505504823b6fc388f49735398d"],["E:/Github/Blog/_workspace/public/tags/浏览器/index.html","bed686f4f509c34061688da1a2a1cbfb"],["E:/Github/Blog/_workspace/public/tags/知识点/index.html","0ca7d3c32a530ac74d9d8aad0cd6b510"],["E:/Github/Blog/_workspace/public/tags/软件工程/index.html","d86ad8f48d25a63100391e0ba327fcc9"],["E:/Github/Blog/_workspace/public/tags/闭包/index.html","fad692785afe13bb20790e484d063fe0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








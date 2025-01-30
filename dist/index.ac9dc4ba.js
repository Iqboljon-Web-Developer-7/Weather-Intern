// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9qY5V":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "16df5292ac9dc4ba";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"aR1JP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _countriesJs = require("./helper/countries.js");
var _countriesJsDefault = parcelHelpers.interopDefault(_countriesJs);
var _dataJs = require("./helper/data.js");
var _getCountryCodeJs = require("./helper/getCountryCode.js");
var _getCountryCodeJsDefault = parcelHelpers.interopDefault(_getCountryCodeJs);
const loginForm = document.getElementById("loginForm");
const app = document.getElementById("app");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const logoutButton = document.getElementById("logoutButton");
const mapLoadingOverlay = document.getElementById("mapLoadingOverlay");
const modeToggle = document.getElementById("modeToggle");
const modeToggle2 = document.getElementById("modeToggle2");
const temperatureButton = document.getElementById("temperature");
const windSpeedButton = document.getElementById("windSpeed");
const cloudCoverageButton = document.getElementById("cloudCoverage");
const tempsStatusContainer = document.getElementById("temps-status");
const cloudsStatusContainer = document.getElementById("clouds-status");
const windsStatusContainer = document.getElementById("winds-status");
let currentWeatherType;
let currenctShowLabelsStatus = false;
// Check if user is already logged in
const isLogged = localStorage.getItem("isLogged");
if (isLogged === "no" || !isLogged) {
    loginForm.style.display = "block";
    app.style.display = "none";
} else if (isLogged === "yes") {
    loginForm.style.display = "none";
    app.style.display = "block";
    initializeApp();
}
// Handle login
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (username === "havoyuli" && password === "havo123yuli") {
        loginForm.style.display = "none";
        app.style.display = "block";
        localStorage.setItem("isLogged", "yes");
        e.target.reset();
        initializeApp();
    } else alert("Invalid username or password");
});
// Handle logout
logoutButton.addEventListener("click", ()=>{
    localStorage.setItem("isLogged", "no");
    loginForm.style.display = "block";
    app.style.display = "none";
    const container = document.getElementById("container");
    if (container) container.innerHTML = ""; // Clear the map
    map = null; // Reset the map variable
});
let map;
function initializeApp() {
    const apiKey = "5d029d9cc6f74696ba7145539252701";
    async function fetchWeatherData(country) {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`);
            if (response.ok) return await response.json();
            else {
                console.error(`Error fetching data for ${country}: ${response.statusText}`);
                return null;
            }
        } catch (error) {
            console.error(`Error fetching data for ${country}: ${error}`);
            return null;
        }
    }
    async function fetchAllWeatherData() {
        const tempData = JSON.parse(localStorage.getItem("tempData"));
        const timestamp = localStorage.getItem("tempDataTimestamp");
        // Refetch is required if data was created 4+ hours ago
        const isDataStale = !timestamp || Date.now() - parseInt(timestamp, 10) > 14400000;
        mapLoadingOverlay.style.display = "flex";
        toggleButtons(true);
        let weatherData;
        if (tempData && !isDataStale) weatherData = tempData;
        else {
            const weatherPromises = (0, _countriesJsDefault.default).map((country)=>fetchWeatherData(country));
            weatherData = await Promise.all(weatherPromises);
            localStorage.setItem("tempData", JSON.stringify(weatherData));
            localStorage.setItem("tempDataTimestamp", Date.now().toString());
        }
        mapLoadingOverlay.style.display = "none";
        toggleButtons(false);
        return weatherData.reduce((acc, data, index)=>{
            if (data) acc[(0, _countriesJsDefault.default)[index]] = data;
            return acc;
        }, {});
    }
    async function updateMap(type, showLabels = currenctShowLabelsStatus) {
        currenctShowLabelsStatus = showLabels;
        currentWeatherType = type;
        const weatherData = await fetchAllWeatherData();
        const mapData = {};
        for(const country in weatherData){
            const countryCode = (0, _getCountryCodeJsDefault.default)(country);
            if (countryCode) mapData[countryCode] = {
                fillKey: getFillKey(weatherData[country], type),
                value: weatherData[country]?.current[type] ?? `No data for ${country}`
            };
        }
        // Remove existing map if it exists
        if (map) /*global d3*/ /*eslint no-undef: "error"*/ d3.select("#container").selectAll("*").remove();
        // Create a new map with or without labels
        /*global Datamap*/ /*eslint no-undef: "error"*/ map = new Datamap({
            element: document.getElementById("container"),
            fills: (0, _dataJs.fills),
            data: mapData,
            geographyConfig: {
                popupTemplate: function(geo, data) {
                    return `<div class="hoverinfo">${geo.properties.name}: ${data.value}</div>`;
                },
                label: currenctShowLabelsStatus
            }
        });
        if (showLabels) map.labels({
            labelColor: "#38b000",
            fontSize: 8
        });
    }
    function getFillKey(weatherData, type) {
        if (type === "temp_c") {
            updateDisplayStatus(1);
            const temp = weatherData.current.temp_c;
            switch(true){
                case temp <= -30:
                    return "EXTREME_COLD";
                case temp <= -20:
                    return "VERY_COLD";
                case temp <= -10:
                    return "COLD";
                case temp <= 0:
                    return "FREEZING_POINT";
                case temp <= 10:
                    return "COOL";
                case temp <= 20:
                    return "MILD";
                case temp <= 30:
                    return "WARM";
                case temp <= 40:
                    return "HOT";
                default:
                    return "EXTREME_HEAT";
            }
        } else if (type === "wind_kph") {
            updateDisplayStatus(2);
            const wind = weatherData.current.wind_kph;
            switch(true){
                case wind <= 10:
                    return "LOW_WIND";
                case wind <= 20:
                    return "MEDIUM_WIND";
                case wind <= 40:
                    return "HIGH_WIND";
                case wind <= 60:
                    return "VERY_HIGH_WIND";
                default:
                    return "EXTREME_WIND";
            }
        } else if (type === "cloud") {
            updateDisplayStatus(3);
            const cloud = weatherData.current.cloud;
            switch(true){
                case cloud <= 10:
                    return "LOW_CLOUD";
                case cloud <= 30:
                    return "MEDIUM_CLOUD";
                case cloud <= 60:
                    return "HIGH_CLOUD";
                case cloud <= 90:
                    return "VERY_HIGH_CLOUD";
                default:
                    return "EXTREME_CLOUD";
            }
        } else return "UNKNOWN_TYPE";
    }
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) localStorage.setItem("isDark", "yes");
        else localStorage.setItem("isDark", "no");
    }
    (()=>{
        const isDark = localStorage.getItem("isDark");
        if (isDark == "yes") {
            document.body.classList.add("dark-mode");
            modeToggle.checked = true;
        }
    })();
    function toggleButtons(disable) {
        const buttons = document.querySelectorAll(".btn");
        buttons.forEach((button)=>{
            button.disabled = disable;
            button.classList.toggle("loading", disable);
        });
    }
    document.querySelectorAll(".btn").forEach((button)=>{
        button.addEventListener("click", ()=>{
            document.querySelectorAll(".btn").forEach((btn)=>btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
    modeToggle.addEventListener("change", toggleDarkMode);
    temperatureButton.addEventListener("click", ()=>updateMap("temp_c"));
    windSpeedButton.addEventListener("click", ()=>updateMap("wind_kph"));
    cloudCoverageButton.addEventListener("click", ()=>updateMap("cloud"));
    document.body.classList.add("fadeIn");
    updateMap("temp_c");
    function toggleLabels(e) {
        const showLabels = e.target.checked;
        // Assuming `currentType` holds the current data type like 'temp_c'
        updateMap(currentWeatherType, showLabels);
    }
    // If modeToggle2 should also control labels
    modeToggle2.addEventListener("change", toggleLabels);
}
function updateDisplayStatus(number) {
    tempsStatusContainer.style.display = "none";
    windsStatusContainer.style.display = "none";
    cloudsStatusContainer.style.display = "none";
    switch(number){
        case 1:
            tempsStatusContainer.style.display = "flex";
            break;
        case 2:
            windsStatusContainer.style.display = "flex";
            break;
        case 3:
            cloudsStatusContainer.style.display = "flex";
            break;
        default:
            console.log("Invalid number. Please pass 1, 2, or 3.");
    }
}

},{"./helper/countries.js":"6Drkk","./helper/data.js":"dOLTm","./helper/getCountryCode.js":"bNc4O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Drkk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const countries = [
    "Uzbekistan",
    "Madagascar",
    "Benin",
    "Togo",
    "Burundi",
    "Rwanda",
    "Lesotho",
    "Swaziland",
    "Kyrgyzstan",
    "Papua New Guinea",
    "Ireland",
    "French Guiana",
    "South Sudan",
    "Yemen",
    "Turkmenistan",
    "Tajikistan",
    "Central African Republic",
    "USA",
    "China",
    "India",
    "Russia",
    "Brazil",
    "Australia",
    "Canada",
    "Japan",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "United Kingdom",
    "Mexico",
    "Argentina",
    "South Africa",
    "Egypt",
    "Turkey",
    "Saudi Arabia",
    "South Korea",
    "Indonesia",
    "Pakistan",
    "Bangladesh",
    "Nigeria",
    "Vietnam",
    "Philippines",
    "Thailand",
    "Iran",
    "Colombia",
    "Ukraine",
    "Poland",
    "Malaysia",
    "Chile",
    "Morocco",
    "Greece",
    "Portugal",
    "Netherlands",
    "Belgium",
    "Sweden",
    "Switzerland",
    "Norway",
    "Austria",
    "Finland",
    "Denmark",
    "New Zealand",
    "Israel",
    "Singapore",
    "Hong Kong",
    "Taiwan",
    "Czech Republic",
    "Hungary",
    "Romania",
    "Slovakia",
    "Bulgaria",
    "Croatia",
    "Serbia",
    "Kazakhstan",
    "Azerbaijan",
    "Armenia",
    "Georgia",
    "Lithuania",
    "Latvia",
    "Estonia",
    "Slovenia",
    "Iceland",
    "Luxembourg",
    "Monaco",
    "San Marino",
    "Liechtenstein",
    "Malta",
    "Andorra",
    "Cyprus",
    "Qatar",
    "Kuwait",
    "Bahrain",
    "United Arab Emirates",
    "Oman",
    "Jordan",
    "Lebanon",
    "Syria",
    "Iraq",
    "Afghanistan",
    "Sri Lanka",
    "Nepal",
    "Bhutan",
    "Maldives",
    "Myanmar",
    "Cambodia",
    "Laos",
    "Mongolia",
    "North Korea",
    "Belarus",
    "Moldova",
    "Bosnia and Herzegovina",
    "Albania",
    "Macedonia",
    "Montenegro",
    "Kosovo",
    "Greenland",
    "Honduras",
    "Nicaragua",
    "Guatemala",
    "Panama",
    "Costa Rica",
    "El Salvador",
    "Cuba",
    "Dominican Republic",
    "Haiti",
    "Jamaica",
    "Trinidad and Tobago",
    "Barbados",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Grenada",
    "Antigua and Barbuda",
    "Saint Kitts and Nevis",
    "Belize",
    "Guyana",
    "Suriname",
    "Venezuela",
    "Paraguay",
    "Uruguay",
    "Bolivia",
    "Ecuador",
    "Peru",
    "Ghana",
    "Kenya",
    "Uganda",
    "Tanzania",
    "Ethiopia",
    "Somalia",
    "Sudan",
    "Libya",
    "Algeria",
    "Tunisia",
    "Senegal",
    "Ivory Coast",
    "Burkina Faso",
    "Mali",
    "Niger",
    "Chad",
    "Cameroon",
    "Gabon",
    "Equatorial Guinea",
    "Namibia",
    "Botswana",
    "Zimbabwe",
    "Mozambique",
    "Zambia",
    "Malawi",
    "Angola",
    "Democratic Republic of the Congo",
    "Republic of the Congo",
    "Gambia",
    "Guinea",
    "Guinea-Bissau",
    "Sierra Leone",
    "Liberia",
    "Mauritania",
    "Cape Verde",
    "Sao Tome and Principe",
    "Mauritius",
    "Seychelles",
    "Comoros",
    "Djibouti",
    "Eritrea",
    "Western Sahara",
    "Palestine",
    "Vatican City"
];
exports.default = countries;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dOLTm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fills", ()=>fills);
const fills = {
    EXTREME_COLD: "#003366",
    VERY_COLD: "#4A90E2",
    COLD: "#B3DFFD",
    FREEZING_POINT: "#E6F7FF",
    COOL: "#D1F2D3",
    MILD: "#FFFACD",
    WARM: "#FFCC80",
    HOT: "#FF7043",
    EXTREME_HEAT: "#D32F2F",
    LOW_WIND: "#E0F7FA",
    MEDIUM_WIND: "#B2EBF2",
    HIGH_WIND: "#4DD0E1",
    VERY_HIGH_WIND: "#0288D1",
    EXTREME_WIND: "#01579B",
    LOW_CLOUD: "#FFF9C4",
    MEDIUM_CLOUD: "#FFF176",
    HIGH_CLOUD: "#E0E0E0",
    VERY_HIGH_CLOUD: "#9E9E9E",
    EXTREME_CLOUD: "#616161",
    defaultFill: "green"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bNc4O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getCountryCode);
function getCountryCode(country) {
    const countryCodes = {
        Uzbekistan: "UZB",
        Madagascar: "MDG",
        Benin: "BEN",
        "Papua New Guinea": "PNG",
        Kyrgyzstan: "KGZ",
        Swaziland: "SWZ",
        Burundi: "BDI",
        Togo: "TGO",
        Lesotho: "LSO",
        Ireland: "IRL",
        Rwanda: "RWA",
        Tajikistan: "TJK",
        Yemen: "YEM",
        Turkmenistan: "TKM",
        "Central African Republic": "CAF",
        "South Sudan": "SSD",
        "French Guiana": "GUF",
        USA: "USA",
        China: "CHN",
        India: "IND",
        Russia: "RUS",
        Brazil: "BRA",
        Australia: "AUS",
        Canada: "CAN",
        Japan: "JPN",
        Germany: "DEU",
        France: "FRA",
        Italy: "ITA",
        Spain: "ESP",
        "United Kingdom": "GBR",
        Mexico: "MEX",
        Argentina: "ARG",
        "South Africa": "ZAF",
        Egypt: "EGY",
        Turkey: "TUR",
        "Saudi Arabia": "SAU",
        "South Korea": "KOR",
        Indonesia: "IDN",
        Pakistan: "PAK",
        Bangladesh: "BGD",
        Nigeria: "NGA",
        Vietnam: "VNM",
        Philippines: "PHL",
        Thailand: "THA",
        Iran: "IRN",
        Colombia: "COL",
        Ukraine: "UKR",
        Poland: "POL",
        Malaysia: "MYS",
        Chile: "CHL",
        Morocco: "MAR",
        Greece: "GRC",
        Portugal: "PRT",
        Netherlands: "NLD",
        Belgium: "BEL",
        Sweden: "SWE",
        Switzerland: "CHE",
        Norway: "NOR",
        Austria: "AUT",
        Finland: "FIN",
        Denmark: "DNK",
        "New Zealand": "NZL",
        Israel: "ISR",
        Singapore: "SGP",
        "Hong Kong": "HKG",
        Taiwan: "TWN",
        "Czech Republic": "CZE",
        Hungary: "HUN",
        Romania: "ROU",
        Slovakia: "SVK",
        Bulgaria: "BGR",
        Croatia: "HRV",
        Serbia: "SRB",
        Kazakhstan: "KAZ",
        Azerbaijan: "AZE",
        Armenia: "ARM",
        Georgia: "GEO",
        Lithuania: "LTU",
        Latvia: "LVA",
        Estonia: "EST",
        Slovenia: "SVN",
        Iceland: "ISL",
        Luxembourg: "LUX",
        Monaco: "MCO",
        "San Marino": "SMR",
        Liechtenstein: "LIE",
        Malta: "MLT",
        Andorra: "AND",
        Cyprus: "CYP",
        Qatar: "QAT",
        Kuwait: "KWT",
        Bahrain: "BHR",
        "United Arab Emirates": "ARE",
        Oman: "OMN",
        Jordan: "JOR",
        Lebanon: "LBN",
        Syria: "SYR",
        Iraq: "IRQ",
        Afghanistan: "AFG",
        "Sri Lanka": "LKA",
        Nepal: "NPL",
        Bhutan: "BTN",
        Maldives: "MDV",
        Myanmar: "MMR",
        Cambodia: "KHM",
        Laos: "LAO",
        Mongolia: "MNG",
        "North Korea": "PRK",
        Belarus: "BLR",
        Moldova: "MDA",
        "Bosnia and Herzegovina": "BIH",
        Albania: "ALB",
        Macedonia: "MKD",
        Montenegro: "MNE",
        Kosovo: "KOS",
        Greenland: "GRL",
        Honduras: "HND",
        Nicaragua: "NIC",
        Guatemala: "GTM",
        Panama: "PAN",
        "Costa Rica": "CRI",
        "El Salvador": "SLV",
        Cuba: "CUB",
        "Dominican Republic": "DOM",
        Haiti: "HTI",
        Jamaica: "JAM",
        "Trinidad and Tobago": "TTO",
        Barbados: "BRB",
        "Saint Lucia": "LCA",
        "Saint Vincent and the Grenadines": "VCT",
        Grenada: "GRD",
        "Antigua and Barbuda": "ATG",
        "Saint Kitts and Nevis": "KNA",
        Belize: "BLZ",
        Guyana: "GUY",
        Suriname: "SUR",
        Venezuela: "VEN",
        Paraguay: "PRY",
        Uruguay: "URY",
        Bolivia: "BOL",
        Ecuador: "ECU",
        Peru: "PER",
        Ghana: "GHA",
        Kenya: "KEN",
        Uganda: "UGA",
        Tanzania: "TZA",
        Ethiopia: "ETH",
        Somalia: "SOM",
        Sudan: "SDN",
        Libya: "LBY",
        Algeria: "DZA",
        Tunisia: "TUN",
        Senegal: "SEN",
        "Ivory Coast": "CIV",
        "Burkina Faso": "BFA",
        Mali: "MLI",
        Niger: "NER",
        Chad: "TCD",
        Cameroon: "CMR",
        Gabon: "GAB",
        "Equatorial Guinea": "GNQ",
        Namibia: "NAM",
        Botswana: "BWA",
        Zimbabwe: "ZWE",
        Mozambique: "MOZ",
        Zambia: "ZMB",
        Malawi: "MWI",
        Angola: "AGO",
        "Democratic Republic of the Congo": "COD",
        "Republic of the Congo": "COG",
        Gambia: "GMB",
        Guinea: "GIN",
        "Guinea-Bissau": "GNB",
        "Sierra Leone": "SLE",
        Liberia: "LBR",
        Mauritania: "MRT",
        "Cape Verde": "CPV",
        "Sao Tome and Principe": "STP",
        Mauritius: "MUS",
        Seychelles: "SYC",
        Comoros: "COM",
        Djibouti: "DJI",
        Eritrea: "ERI",
        "Western Sahara": "ESH",
        Palestine: "PSE",
        "Vatican City": "VAT"
    };
    return countryCodes[country];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9qY5V","aR1JP"], "aR1JP", "parcelRequire94c2")

//# sourceMappingURL=index.ac9dc4ba.js.map

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var _state = require("./state");
var _router = require("./router");
var _button = require("./components/button");
var _text = require("./components/text");
var _hands = require("./components/hands");
(function main() {
    _state.state.getStorage();
    const root = document.querySelector(".root");
    _router.initRouter(root);
})();

},{"./state":"28XHA","./router":"b2iia","./components/button":"3uBrB","./components/text":"8YEyP","./components/hands":"lFlAb"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            myPlay: "",
            botPlay: ""
        },
        history: {
            myScore: 0,
            botScore: 0
        }
    },
    listeners: [],
    getStorage () {
        const localData = JSON.parse(localStorage.getItem("data"));
        if (localStorage.getItem("data")) return this.data.history = localData;
        console.log(localData);
    },
    // se optiene el estado de la web
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
        this.savedData();
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        this.setScore();
    },
    setScore () {
        const currentState = this.getState();
        //Datos de jugadas
        const myPlay = currentState.currentGame.myPlay;
        const botPlay = currentState.currentGame.botPlay;
        const currentWhoWins = this.whoWhins(myPlay, botPlay);
        //Datos de puntajes
        const myScore = currentState.history.myScore;
        const botScore = currentState.history.botScore;
        if (currentWhoWins == "win") return this.setState({
            ...currentState,
            history: {
                myScore: myScore + 1,
                botScore: botScore
            }
        });
        else if (currentWhoWins == "lose") return this.setState({
            ...currentState,
            history: {
                myScore: myScore,
                botScore: botScore + 1
            }
        });
    },
    whoWhins (myPlay, botPlay) {
        //Datos de ganadas
        const winPiedra = myPlay == "piedra" && botPlay == "tijera";
        const winPapel = myPlay == "papel" && botPlay == "piedra";
        const winTijera = myPlay == "tijera" && botPlay == "papel";
        const win = [
            winPiedra,
            winPapel,
            winTijera
        ].includes(true);
        //Datos de perdidas
        const losePiedra = myPlay == "piedra" && botPlay == "papel";
        const losePapel = myPlay == "papel" && botPlay == "tijera";
        const loseTijera = myPlay == "tijera" && botPlay == "piedra";
        const lose = [
            losePiedra,
            losePapel,
            loseTijera
        ].includes(true);
        if (win == true) return "win";
        else if (lose == true) return "lose";
        else return "tie";
    },
    savedData () {
        const currentHistory = this.getState().history;
        localStorage.setItem("data", JSON.stringify(currentHistory));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
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
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"b2iia":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _home = require("./pages/home");
var _instructions = require("./pages/instructions");
var _game = require("./pages/game");
var _results = require("./pages/results");
const BASE_PATH = "/desafiom5";
const routes = [
    {
        path: /\/home/,
        component: _home.initHome
    },
    {
        path: /\/instructions/,
        component: _instructions.initInstructions
    },
    {
        path: /\/game/,
        component: _game.initGame
    },
    {
        path: /\/result/,
        component: _results.initResult
    }, 
];
function isGitHubPages() {
    return location.host.includes("gitgub.io");
}
function initRouter(container) {
    function goTo(path) {
        const completePath = isGitHubPages() ? BASE_PATH + path : path;
        history.pushState({
        }, "", completePath);
        handleRoute(completePath);
    }
    function handleRoute(route) {
        const newRoute = isGitHubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(newRoute)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/home");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/home":"jrMbi","./pages/instructions":"iaM8p","./pages/game":"d7f6n","./pages/results":"8GXDd","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"jrMbi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHome", ()=>initHome
);
function initHome(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `\n  .home-container{\n    display:flex;\n    flex-direction: column;\n    padding: 25px 15px 0;\n    overflow-y: hidden;\n  }\n  @media(min-width: 679px){\n    .home-container{\n      padding: 25px 45px 0;\n    }\n  }\n\n  .start-button{\n    margin: 50px 0;\n  }\n  @media(min-width: 679px){\n    .start-button{\n      align-self: center;\n      width: 560px;\n      margin: 40px 0;\n    }\n  }\n  .hands-content{\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    top: 30px;  \n  }`;
    div.innerHTML = `\n  <div class="home-container">\n      <custom-text variant="titulo">Piedra, Papel o Tijera</custom-text>\n      <custom-button class="start-button">Empezar</custom-button>\n    <div class="hands-content">\n      <hands-comp hand="piedra"></hands-comp>\n      <hands-comp hand="papel"></hands-comp>\n      <hands-comp hand="tijera"></hands-comp>\n    </div>\n  </div>`;
    const startButtonEl = div.querySelector(".start-button");
    startButtonEl.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iaM8p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initInstructions", ()=>initInstructions
);
function initInstructions(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    style.innerHTML = `\n  .instructions-container{\n    display:flex;\n    flex-direction: column;\n    padding: 25px 15px 0;\n    overflow-y: hidden;\n  }\n  @media(min-width: 679px){\n    .instructions-container{\n      padding: 25px 45px 0;\n    }\n  }\n\n  .text{\n    text-align: center;\n    padding:15px;\n  }\n\n  .start-button{\n    margin: 50px 0;\n  }\n  @media(min-width: 679px){\n    .start-button{\n      align-self: center;\n      width: 560px;\n      margin: 40px 0;\n    }\n  }\n  .hands-content{\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    top: 30px;  \n  }\n  `;
    div.innerHTML = `\n  <div class="instructions-container">\n      <custom-text class="text" variant="body">Presioná jugar\n      y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</custom-text>\n      <custom-button class="start-button">¡Jugar!</custom-button>\n    <div class="hands-content">\n      <hands-comp hand="piedra"></hands-comp>\n      <hands-comp hand="papel"></hands-comp>\n      <hands-comp hand="tijera"></hands-comp>\n    </div>\n  </div>`;
    const startButtonEl = div.querySelector(".start-button");
    startButtonEl.addEventListener("click", ()=>{
        params.goTo("/game");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"d7f6n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGame", ()=>initGame
);
var _state = require("../../state");
function botRandom(botOptions) {
    return botOptions[Math.floor(Math.random() * 3)];
}
var choices = [
    "piedra",
    "papel",
    "tijera"
];
const botChoice = botRandom(choices);
function initGame(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    let counter = 3;
    const countdown = setInterval(()=>{
        counter--;
        const counterEl = div.querySelector(".countdown");
        counterEl.textContent = String(counter);
        if (counter < 1) clearInterval(countdown);
    }, 1000);
    style.innerHTML = `\n  .countdown{\n    font-size: 170px;\n    padding:20px;\n    margin-top: 130px;\n    align-self: center;\n  }\n  @media(min-width: 679px){\n    .countdown{\n      font-size: 200px;\n      margin-top: 0;\n\n    } \n  }\n  .game-container{\n    height: 100vh;\n    padding: 0 25px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    overflow-y: hidden;\n  }\n  .text{\n    align-text: center;\n    padding:15px;\n  }\n  .hand-view{\n    position: relative;\n    top: 0px;\n    opacity: 0.5;\n  }\n  @media (min-width: 679px){\n    .hand-view{\n      position: relative;\n      top: 40px;\n      opacity: 0.5;\n      \n    } \n  }\n  .hand-view:hover{\n    top: 0px;\n    opacity: 1;\n    display: inherit;\n    transform: translateY(-30px);\n    transition: all 0.5s;\n  }\n  .hands-content{\n    display: flex;\n    justify-content: space-between;\n    position: relative;\n    top: 20px;\n  }\n  .hand-select{\n    display: flex;\n    justify-content: center;\n  }\n  .bot-hands{\n    display: none;\n    flex-direction: row;\n    justify-content: center;\n    transform: rotate(180deg);\n    margin-bottom: 50px;\n    position: relative;\n    top:-30px;\n  }\n  .bot__piedra, .bot__papel, .bot__tijera{\n    display: none\n  }\n  .selected {\n    position: absolut;\n    opacity: 1;\n    \n  }\n  `;
    div.innerHTML = `\n  <div class="game-container">\n    <div class="bot-hands">\n      <hands-comp class="bot__piedra" hand="piedra"></hands-comp>\n      <hands-comp class="bot__papel" hand="papel"></hands-comp>\n      <hands-comp class="bot__tijera" hand="tijera"></hands-comp>\n    </div>\n    <div class="countdown">${counter}</div>\n    <div class="hands-content">\n      <hands-comp class="hand-view piedra" hand="piedra"></hands-comp>\n      <hands-comp class="hand-view papel" hand="papel"></hands-comp>\n      <hands-comp class="hand-view tijera" hand="tijera"></hands-comp>\n    </div>\n    </div>\n    `;
    const countdownComp = div.querySelector(".countdown");
    const botHandsCont = div.querySelector(".bot-hands");
    const piedraBot = div.querySelector(".bot__piedra");
    const papelBot = div.querySelector(".bot__papel");
    const tijeraBot = div.querySelector(".bot__tijera");
    const handsCont = div.querySelector(".hands-content");
    const myPiedra = div.querySelector(".piedra");
    const myPapel = div.querySelector(".papel");
    const myTijera = div.querySelector(".tijera");
    function botGame(params1) {
        if (params1 == "piedra") {
            piedraBot.style.display = "inherit";
            botHandsCont.style.display = "inherit";
            countdownComp.style.display = "none";
        } else if (params1 == "papel") {
            papelBot.style.display = "inherit";
            botHandsCont.style.display = "inherit";
            countdownComp.style.display = "none";
        } else if (params1 == "tijera") {
            tijeraBot.style.display = "inherit";
            botHandsCont.style.display = "inherit";
            countdownComp.style.display = "none";
        }
    }
    function playGame(hand) {
        if (hand == "piedra") {
            myPapel.style.display = "none";
            myTijera.style.display = "none";
            handsCont.style.justifyContent = "center";
            myPiedra.classList.remove(".hand-view");
            myPiedra.classList.add("selected");
            botGame(botChoice);
        } else if (hand == "papel") {
            myPiedra.style.display = "none";
            myTijera.style.display = "none";
            handsCont.style.justifyContent = "center";
            myPapel.classList.remove(".hand-view");
            myPapel.classList.add("selected");
            botGame(botChoice);
        } else if (hand == "tijera") {
            myPapel.style.display = "none";
            myPiedra.style.display = "none";
            handsCont.style.justifyContent = "center";
            myTijera.classList.remove(".hand-view");
            myTijera.classList.add("selected");
            botGame(botChoice);
        }
    }
    for (const h of handsCont.children)h.addEventListener("click", ()=>{
        const select = h.getAttribute("hand");
        clearInterval(countdown);
        if (select == "piedra") {
            _state.state.setMove("piedra");
            setTimeout(()=>{
                playGame("piedra");
            }, 1000);
        } else if (select == "papel") {
            _state.state.setMove("papel");
            setTimeout(()=>{
                playGame("papel");
            }, 1000);
        } else if (select == "tijera") {
            _state.state.setMove("tijera");
            setTimeout(()=>{
                playGame("tijera");
            }, 1000);
        }
    });
    const currentState = _state.state.getState().currentGame;
    const botCurrentGame = currentState.botPlay = botChoice;
    setTimeout(()=>{
        params.goTo("/result");
    }, 5000);
    div.appendChild(style);
    return div;
}

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"8GXDd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initResult", ()=>initResult
);
var _state = require("../../state");
const results = {
    win: require("url:../../img/win.png"),
    lose: require("url:../../img/lose.png"),
    tie: require("url:../../img/tie.png")
};
function initResult(params) {
    const div = document.createElement("div");
    const style = document.createElement("style");
    var myScore = _state.state.getState().history.myScore;
    var botScore = _state.state.getState().history.botScore;
    style.innerHTML = `\n  .result-container{\n    display:flex;\n    flex-direction: column;\n    padding: 15px 25px;\n    align-items: center;\n  }\n  .win-sticker, .lose-sticker, .tie-sticker{\n    width: 250px;\n    height: 250px;\n  }\n  // .lose-b{\n  //   display: none;\n  //   background-color: #7e0b0b75;\n  // }\n  // .win-b{\n  //   display: none;\n  //   background-color: #4b9d0d75;\n  // }\n  // .tie-b{\n  //   display: none;\n  //   background-color: #3d569662;\n  // }\n\n  .win{\n    display: none;\n    padding: 20px;\n  }\n  .lose{\n    display: none;\n    padding: 20px;\n  }\n  .tie{\n    display: none;\n    padding: 20px;\n  }\n\n  .score{\n    border: solid 6px;\n    border-radius: 15px;\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin: 30px 70px;\n    background-color: #fff\n  }\n\n  .points{\n    font-size: 45px;\n    padding: 0 15px 15px;\n  }\n  .text{\n    padding: 0 25px;\n    font-size: 25px;\n  }\n\n  .buttons{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n  `;
    div.innerHTML = `\n  <div class="result-container">\n    <div class="win">\n      <img class="win-sticker" src=${results.win}></img>\n    </div>\n    <div class="lose">\n      <img class="lose-sticker" src=${results.lose}></img>\n    </div>\n    <div class="tie">\n      <img class="tie-sticker" src=${results.tie}></img>\n    </div>\n    <div class="score">\n      <h1 class="points">Puntajes</h1>\n      <h3 class="text">Tú: ${myScore} pts.</h3>\n      <h3 class="text">Bot: ${botScore} pts.</h3>\n    </div>\n    <div class="buttons">\n      <custom-button class="back">Volver a jugar</custom-button>\n      <custom-button class="inicio">Volver al inicio</custom-button>\n    </div>\n  </div>\n  `;
    const currentGame = _state.state.getState().currentGame;
    const myPlay = currentGame.myPlay;
    const botPlay = currentGame.botPlay;
    const whoWins = _state.state.whoWhins(myPlay, botPlay);
    const win = div.querySelector(".win");
    const lose = div.querySelector(".lose");
    const tie = div.querySelector(".tie");
    if (whoWins == "win") win.style.display = "inherit";
    else if (whoWins == "lose") lose.style.display = "inherit";
    else if (whoWins == "tie") tie.style.display = "inherit";
    const back = div.querySelector(".back");
    const inicio = div.querySelector(".inicio");
    back.addEventListener("click", ()=>{
        params.goTo("/game");
    });
    inicio.addEventListener("click", ()=>{
        params.goTo("/home");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"28XHA","url:../../img/win.png":"6mKlh","url:../../img/lose.png":"fGJYE","url:../../img/tie.png":"64J07","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"6mKlh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "win.13cc4d64.png";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fGJYE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "lose.fbd64c87.png";

},{"./helpers/bundle-url":"8YnfL"}],"64J07":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tie.c5787b3f.png";

},{"./helpers/bundle-url":"8YnfL"}],"3uBrB":[function(require,module,exports) {
customElements.define("custom-button", class initButton extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const button = document.createElement("button");
        const style = document.createElement("style");
        button.className = "root";
        style.innerHTML = `\n			.root{\n				font: bold;\n				border: solid 3px #000;\n				border-radius: 9px;\n				padding: 17px 13px;\n				font-size: 35px;\n				width:100%;\n				font-family: "Ubuntu", sans-serif;\n				background-color: #3D5696; \n				color:#f1f1f1;\n			}`;
        button.textContent = this.textContent;
        this.shadow.appendChild(button);
        this.shadow.appendChild(style);
    }
});

},{}],"8YEyP":[function(require,module,exports) {
customElements.define("custom-text", class textElement extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render() {
        const variant = this.getAttribute("variant");
        const div = document.createElement("div");
        const style = document.createElement("style");
        const shadow = this.attachShadow({
            mode: "open"
        });
        style.innerHTML = `\n      .titulo{\n        font-size: 65px;\n        font-weight: bold;\n        color: #4C9D0D;\n        text-shadow: #000 2px 2px 4px;\n				margin: 20px;\n				text-align: center;\n      }\n      .body{\n        font-size: 40px;\n        color: #4C9D0D;\n        text-shadow: #000 2px 1px;\n      }`;
        div.className = variant;
        div.textContent = this.textContent;
        shadow.appendChild(div);
        shadow.appendChild(style);
    }
});

},{}],"lFlAb":[function(require,module,exports) {
const hands = {
    piedra: require("url:../../img/piedra.png"),
    papel: require("url:../../img/papel.png"),
    tijera: require("url:../../img/tijera.png")
};
customElements.define("hands-comp", class initHands extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const div = document.createElement("div");
        const style = document.createElement("style");
        const hand = this.getAttribute("hand");
        style.innerHTML = `\n      .hand{\n        width: 90px;\n        height: 200px;\n      }`;
        div.innerHTML = `\n      <img class="hand" src=${hands[hand]}></img>`;
        this.shadow.appendChild(style);
        this.shadow.appendChild(div);
    }
});

},{"url:../../img/piedra.png":"j1GzX","url:../../img/papel.png":"fTpqS","url:../../img/tijera.png":"9JARl"}],"j1GzX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedra.82766faa.png";

},{"./helpers/bundle-url":"8YnfL"}],"fTpqS":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papel.bf73f8ac.png";

},{"./helpers/bundle-url":"8YnfL"}],"9JARl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijera.dd5cc795.png";

},{"./helpers/bundle-url":"8YnfL"}]},["8uBhv","4aleK"], "4aleK", "parcelRequire8840")

//# sourceMappingURL=index.b31310b1.js.map

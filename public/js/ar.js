! function (A, I) {
	"object" == typeof exports && "object" == typeof module ? module.exports = I(require("aframe"), require("three")) : "function" == typeof define && define.amd ? define(["aframe", "three"], I) : "object" == typeof exports ? exports.ARjs = I(require("aframe"), require("three")) : A.ARjs = I(A.AFRAME, A.THREE)
}(this, (function (A, I) {
	return (() => {
		var g = {
				799: function (A) {
					"undefined" != typeof self && self, A.exports = (() => {
						var A = {
								757: (A, I, g) => {
									A.exports = g(666)
								},
								669: (A, I, g) => {
									A.exports = g(609)
								},
								448: (A, I, g) => {
									"use strict";
									var B = g(867),
										C = g(26),
										Q = g(372),
										E = g(327),
										i = g(97),
										o = g(109),
										a = g(985),
										D = g(61),
										t = g(655),
										s = g(263);
									A.exports = function (A) {
										return new Promise((function (I, g) {
											var e, h = A.data,
												r = A.headers,
												G = A.responseType;

											function w() {
												A.cancelToken && A.cancelToken.unsubscribe(e), A.signal && A.signal.removeEventListener("abort", e)
											}
											B.isFormData(h) && delete r["Content-Type"];
											var n = new XMLHttpRequest;
											if (A.auth) {
												var y = A.auth.username || "",
													R = A.auth.password ? unescape(encodeURIComponent(A.auth.password)) : "";
												r.Authorization = "Basic " + btoa(y + ":" + R)
											}
											var F = i(A.baseURL, A.url);

											function c() {
												if (n) {
													var B = "getAllResponseHeaders" in n ? o(n.getAllResponseHeaders()) : null,
														Q = {
															data: G && "text" !== G && "json" !== G ? n.response : n.responseText,
															status: n.status,
															statusText: n.statusText,
															headers: B,
															config: A,
															request: n
														};
													C((function (A) {
														I(A), w()
													}), (function (A) {
														g(A), w()
													}), Q), n = null
												}
											}
											if (n.open(A.method.toUpperCase(), E(F, A.params, A.paramsSerializer), !0), n.timeout = A.timeout, "onloadend" in n ? n.onloadend = c : n.onreadystatechange = function () {
													n && 4 === n.readyState && (0 !== n.status || n.responseURL && 0 === n.responseURL.indexOf("file:")) && setTimeout(c)
												}, n.onabort = function () {
													n && (g(D("Request aborted", A, "ECONNABORTED", n)), n = null)
												}, n.onerror = function () {
													g(D("Network Error", A, null, n)), n = null
												}, n.ontimeout = function () {
													var I = A.timeout ? "timeout of " + A.timeout + "ms exceeded" : "timeout exceeded",
														B = A.transitional || t.transitional;
													A.timeoutErrorMessage && (I = A.timeoutErrorMessage), g(D(I, A, B.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", n)), n = null
												}, B.isStandardBrowserEnv()) {
												var M = (A.withCredentials || a(F)) && A.xsrfCookieName ? Q.read(A.xsrfCookieName) : void 0;
												M && (r[A.xsrfHeaderName] = M)
											}
											"setRequestHeader" in n && B.forEach(r, (function (A, I) {
												void 0 === h && "content-type" === I.toLowerCase() ? delete r[I] : n.setRequestHeader(I, A)
											})), B.isUndefined(A.withCredentials) || (n.withCredentials = !!A.withCredentials), G && "json" !== G && (n.responseType = A.responseType), "function" == typeof A.onDownloadProgress && n.addEventListener("progress", A.onDownloadProgress), "function" == typeof A.onUploadProgress && n.upload && n.upload.addEventListener("progress", A.onUploadProgress), (A.cancelToken || A.signal) && (e = function (A) {
												n && (g(!A || A && A.type ? new s("canceled") : A), n.abort(), n = null)
											}, A.cancelToken && A.cancelToken.subscribe(e), A.signal && (A.signal.aborted ? e() : A.signal.addEventListener("abort", e))), h || (h = null), n.send(h)
										}))
									}
								},
								609: (A, I, g) => {
									"use strict";
									var B = g(867),
										C = g(849),
										Q = g(321),
										E = g(185),
										i = function A(I) {
											var g = new Q(I),
												i = C(Q.prototype.request, g);
											return B.extend(i, Q.prototype, g), B.extend(i, g), i.create = function (g) {
												return A(E(I, g))
											}, i
										}(g(655));
									i.Axios = Q, i.Cancel = g(263), i.CancelToken = g(972), i.isCancel = g(502), i.VERSION = g(288).version, i.all = function (A) {
										return Promise.all(A)
									}, i.spread = g(713), i.isAxiosError = g(268), A.exports = i, A.exports.default = i
								},
								263: A => {
									"use strict";

									function I(A) {
										this.message = A
									}
									I.prototype.toString = function () {
										return "Cancel" + (this.message ? ": " + this.message : "")
									}, I.prototype.__CANCEL__ = !0, A.exports = I
								},
								972: (A, I, g) => {
									"use strict";
									var B = g(263);

									function C(A) {
										if ("function" != typeof A) throw new TypeError("executor must be a function.");
										var I;
										this.promise = new Promise((function (A) {
											I = A
										}));
										var g = this;
										this.promise.then((function (A) {
											if (g._listeners) {
												var I, B = g._listeners.length;
												for (I = 0; I < B; I++) g._listeners[I](A);
												g._listeners = null
											}
										})), this.promise.then = function (A) {
											var I, B = new Promise((function (A) {
												g.subscribe(A), I = A
											})).then(A);
											return B.cancel = function () {
												g.unsubscribe(I)
											}, B
										}, A((function (A) {
											g.reason || (g.reason = new B(A), I(g.reason))
										}))
									}
									C.prototype.throwIfRequested = function () {
										if (this.reason) throw this.reason
									}, C.prototype.subscribe = function (A) {
										this.reason ? A(this.reason) : this._listeners ? this._listeners.push(A) : this._listeners = [A]
									}, C.prototype.unsubscribe = function (A) {
										if (this._listeners) {
											var I = this._listeners.indexOf(A); - 1 !== I && this._listeners.splice(I, 1)
										}
									}, C.source = function () {
										var A;
										return {
											token: new C((function (I) {
												A = I
											})),
											cancel: A
										}
									}, A.exports = C
								},
								502: A => {
									"use strict";
									A.exports = function (A) {
										return !(!A || !A.__CANCEL__)
									}
								},
								321: (A, I, g) => {
									"use strict";
									var B = g(867),
										C = g(327),
										Q = g(782),
										E = g(572),
										i = g(185),
										o = g(875),
										a = o.validators;

									function D(A) {
										this.defaults = A, this.interceptors = {
											request: new Q,
											response: new Q
										}
									}
									D.prototype.request = function (A, I) {
										"string" == typeof A ? (I = I || {}).url = A : I = A || {}, (I = i(this.defaults, I)).method ? I.method = I.method.toLowerCase() : this.defaults.method ? I.method = this.defaults.method.toLowerCase() : I.method = "get";
										var g = I.transitional;
										void 0 !== g && o.assertOptions(g, {
											silentJSONParsing: a.transitional(a.boolean),
											forcedJSONParsing: a.transitional(a.boolean),
											clarifyTimeoutError: a.transitional(a.boolean)
										}, !1);
										var B = [],
											C = !0;
										this.interceptors.request.forEach((function (A) {
											"function" == typeof A.runWhen && !1 === A.runWhen(I) || (C = C && A.synchronous, B.unshift(A.fulfilled, A.rejected))
										}));
										var Q, D = [];
										if (this.interceptors.response.forEach((function (A) {
												D.push(A.fulfilled, A.rejected)
											})), !C) {
											var t = [E, void 0];
											for (Array.prototype.unshift.apply(t, B), t = t.concat(D), Q = Promise.resolve(I); t.length;) Q = Q.then(t.shift(), t.shift());
											return Q
										}
										for (var s = I; B.length;) {
											var e = B.shift(),
												h = B.shift();
											try {
												s = e(s)
											} catch (A) {
												h(A);
												break
											}
										}
										try {
											Q = E(s)
										} catch (A) {
											return Promise.reject(A)
										}
										for (; D.length;) Q = Q.then(D.shift(), D.shift());
										return Q
									}, D.prototype.getUri = function (A) {
										return A = i(this.defaults, A), C(A.url, A.params, A.paramsSerializer).replace(/^\?/, "")
									}, B.forEach(["delete", "get", "head", "options"], (function (A) {
										D.prototype[A] = function (I, g) {
											return this.request(i(g || {}, {
												method: A,
												url: I,
												data: (g || {}).data
											}))
										}
									})), B.forEach(["post", "put", "patch"], (function (A) {
										D.prototype[A] = function (I, g, B) {
											return this.request(i(B || {}, {
												method: A,
												url: I,
												data: g
											}))
										}
									})), A.exports = D
								},
								782: (A, I, g) => {
									"use strict";
									var B = g(867);

									function C() {
										this.handlers = []
									}
									C.prototype.use = function (A, I, g) {
										return this.handlers.push({
											fulfilled: A,
											rejected: I,
											synchronous: !!g && g.synchronous,
											runWhen: g ? g.runWhen : null
										}), this.handlers.length - 1
									}, C.prototype.eject = function (A) {
										this.handlers[A] && (this.handlers[A] = null)
									}, C.prototype.forEach = function (A) {
										B.forEach(this.handlers, (function (I) {
											null !== I && A(I)
										}))
									}, A.exports = C
								},
								97: (A, I, g) => {
									"use strict";
									var B = g(793),
										C = g(303);
									A.exports = function (A, I) {
										return A && !B(I) ? C(A, I) : I
									}
								},
								61: (A, I, g) => {
									"use strict";
									var B = g(481);
									A.exports = function (A, I, g, C, Q) {
										var E = new Error(A);
										return B(E, I, g, C, Q)
									}
								},
								572: (A, I, g) => {
									"use strict";
									var B = g(867),
										C = g(527),
										Q = g(502),
										E = g(655),
										i = g(263);

									function o(A) {
										if (A.cancelToken && A.cancelToken.throwIfRequested(), A.signal && A.signal.aborted) throw new i("canceled")
									}
									A.exports = function (A) {
										return o(A), A.headers = A.headers || {}, A.data = C.call(A, A.data, A.headers, A.transformRequest), A.headers = B.merge(A.headers.common || {}, A.headers[A.method] || {}, A.headers), B.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (I) {
											delete A.headers[I]
										})), (A.adapter || E.adapter)(A).then((function (I) {
											return o(A), I.data = C.call(A, I.data, I.headers, A.transformResponse), I
										}), (function (I) {
											return Q(I) || (o(A), I && I.response && (I.response.data = C.call(A, I.response.data, I.response.headers, A.transformResponse))), Promise.reject(I)
										}))
									}
								},
								481: A => {
									"use strict";
									A.exports = function (A, I, g, B, C) {
										return A.config = I, g && (A.code = g), A.request = B, A.response = C, A.isAxiosError = !0, A.toJSON = function () {
											return {
												message: this.message,
												name: this.name,
												description: this.description,
												number: this.number,
												fileName: this.fileName,
												lineNumber: this.lineNumber,
												columnNumber: this.columnNumber,
												stack: this.stack,
												config: this.config,
												code: this.code,
												status: this.response && this.response.status ? this.response.status : null
											}
										}, A
									}
								},
								185: (A, I, g) => {
									"use strict";
									var B = g(867);
									A.exports = function (A, I) {
										I = I || {};
										var g = {};

										function C(A, I) {
											return B.isPlainObject(A) && B.isPlainObject(I) ? B.merge(A, I) : B.isPlainObject(I) ? B.merge({}, I) : B.isArray(I) ? I.slice() : I
										}

										function Q(g) {
											return B.isUndefined(I[g]) ? B.isUndefined(A[g]) ? void 0 : C(void 0, A[g]) : C(A[g], I[g])
										}

										function E(A) {
											if (!B.isUndefined(I[A])) return C(void 0, I[A])
										}

										function i(g) {
											return B.isUndefined(I[g]) ? B.isUndefined(A[g]) ? void 0 : C(void 0, A[g]) : C(void 0, I[g])
										}

										function o(g) {
											return g in I ? C(A[g], I[g]) : g in A ? C(void 0, A[g]) : void 0
										}
										var a = {
											url: E,
											method: E,
											data: E,
											baseURL: i,
											transformRequest: i,
											transformResponse: i,
											paramsSerializer: i,
											timeout: i,
											timeoutMessage: i,
											withCredentials: i,
											adapter: i,
											responseType: i,
											xsrfCookieName: i,
											xsrfHeaderName: i,
											onUploadProgress: i,
											onDownloadProgress: i,
											decompress: i,
											maxContentLength: i,
											maxBodyLength: i,
											transport: i,
											httpAgent: i,
											httpsAgent: i,
											cancelToken: i,
											socketPath: i,
											responseEncoding: i,
											validateStatus: o
										};
										return B.forEach(Object.keys(A).concat(Object.keys(I)), (function (A) {
											var I = a[A] || Q,
												C = I(A);
											B.isUndefined(C) && I !== o || (g[A] = C)
										})), g
									}
								},
								26: (A, I, g) => {
									"use strict";
									var B = g(61);
									A.exports = function (A, I, g) {
										var C = g.config.validateStatus;
										g.status && C && !C(g.status) ? I(B("Request failed with status code " + g.status, g.config, null, g.request, g)) : A(g)
									}
								},
								527: (A, I, g) => {
									"use strict";
									var B = g(867),
										C = g(655);
									A.exports = function (A, I, g) {
										var Q = this || C;
										return B.forEach(g, (function (g) {
											A = g.call(Q, A, I)
										})), A
									}
								},
								655: (A, I, g) => {
									"use strict";
									var B = g(867),
										C = g(16),
										Q = g(481),
										E = {
											"Content-Type": "application/x-www-form-urlencoded"
										};

									function i(A, I) {
										!B.isUndefined(A) && B.isUndefined(A["Content-Type"]) && (A["Content-Type"] = I)
									}
									var o, a = {
										transitional: {
											silentJSONParsing: !0,
											forcedJSONParsing: !0,
											clarifyTimeoutError: !1
										},
										adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (o = g(448)), o),
										transformRequest: [function (A, I) {
											return C(I, "Accept"), C(I, "Content-Type"), B.isFormData(A) || B.isArrayBuffer(A) || B.isBuffer(A) || B.isStream(A) || B.isFile(A) || B.isBlob(A) ? A : B.isArrayBufferView(A) ? A.buffer : B.isURLSearchParams(A) ? (i(I, "application/x-www-form-urlencoded;charset=utf-8"), A.toString()) : B.isObject(A) || I && "application/json" === I["Content-Type"] ? (i(I, "application/json"), function (A, I, g) {
												if (B.isString(A)) try {
													return (0, JSON.parse)(A), B.trim(A)
												} catch (A) {
													if ("SyntaxError" !== A.name) throw A
												}
												return (0, JSON.stringify)(A)
											}(A)) : A
										}],
										transformResponse: [function (A) {
											var I = this.transitional || a.transitional,
												g = I && I.silentJSONParsing,
												C = I && I.forcedJSONParsing,
												E = !g && "json" === this.responseType;
											if (E || C && B.isString(A) && A.length) try {
												return JSON.parse(A)
											} catch (A) {
												if (E) {
													if ("SyntaxError" === A.name) throw Q(A, this, "E_JSON_PARSE");
													throw A
												}
											}
											return A
										}],
										timeout: 0,
										xsrfCookieName: "XSRF-TOKEN",
										xsrfHeaderName: "X-XSRF-TOKEN",
										maxContentLength: -1,
										maxBodyLength: -1,
										validateStatus: function (A) {
											return A >= 200 && A < 300
										},
										headers: {
											common: {
												Accept: "application/json, text/plain, */*"
											}
										}
									};
									B.forEach(["delete", "get", "head"], (function (A) {
										a.headers[A] = {}
									})), B.forEach(["post", "put", "patch"], (function (A) {
										a.headers[A] = B.merge(E)
									})), A.exports = a
								},
								288: A => {
									A.exports = {
										version: "0.26.0"
									}
								},
								849: A => {
									"use strict";
									A.exports = function (A, I) {
										return function () {
											for (var g = new Array(arguments.length), B = 0; B < g.length; B++) g[B] = arguments[B];
											return A.apply(I, g)
										}
									}
								},
								327: (A, I, g) => {
									"use strict";
									var B = g(867);

									function C(A) {
										return encodeURIComponent(A).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
									}
									A.exports = function (A, I, g) {
										if (!I) return A;
										var Q;
										if (g) Q = g(I);
										else if (B.isURLSearchParams(I)) Q = I.toString();
										else {
											var E = [];
											B.forEach(I, (function (A, I) {
												null != A && (B.isArray(A) ? I += "[]" : A = [A], B.forEach(A, (function (A) {
													B.isDate(A) ? A = A.toISOString() : B.isObject(A) && (A = JSON.stringify(A)), E.push(C(I) + "=" + C(A))
												})))
											})), Q = E.join("&")
										}
										if (Q) {
											var i = A.indexOf("#"); - 1 !== i && (A = A.slice(0, i)), A += (-1 === A.indexOf("?") ? "?" : "&") + Q
										}
										return A
									}
								},
								303: A => {
									"use strict";
									A.exports = function (A, I) {
										return I ? A.replace(/\/+$/, "") + "/" + I.replace(/^\/+/, "") : A
									}
								},
								372: (A, I, g) => {
									"use strict";
									var B = g(867);
									A.exports = B.isStandardBrowserEnv() ? {
										write: function (A, I, g, C, Q, E) {
											var i = [];
											i.push(A + "=" + encodeURIComponent(I)), B.isNumber(g) && i.push("expires=" + new Date(g).toGMTString()), B.isString(C) && i.push("path=" + C), B.isString(Q) && i.push("domain=" + Q), !0 === E && i.push("secure"), document.cookie = i.join("; ")
										},
										read: function (A) {
											var I = document.cookie.match(new RegExp("(^|;\\s*)(" + A + ")=([^;]*)"));
											return I ? decodeURIComponent(I[3]) : null
										},
										remove: function (A) {
											this.write(A, "", Date.now() - 864e5)
										}
									} : {
										write: function () {},
										read: function () {
											return null
										},
										remove: function () {}
									}
								},
								793: A => {
									"use strict";
									A.exports = function (A) {
										return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(A)
									}
								},
								268: (A, I, g) => {
									"use strict";
									var B = g(867);
									A.exports = function (A) {
										return B.isObject(A) && !0 === A.isAxiosError
									}
								},
								985: (A, I, g) => {
									"use strict";
									var B = g(867);
									A.exports = B.isStandardBrowserEnv() ? function () {
										var A, I = /(msie|trident)/i.test(navigator.userAgent),
											g = document.createElement("a");

										function C(A) {
											var B = A;
											return I && (g.setAttribute("href", B), B = g.href), g.setAttribute("href", B), {
												href: g.href,
												protocol: g.protocol ? g.protocol.replace(/:$/, "") : "",
												host: g.host,
												search: g.search ? g.search.replace(/^\?/, "") : "",
												hash: g.hash ? g.hash.replace(/^#/, "") : "",
												hostname: g.hostname,
												port: g.port,
												pathname: "/" === g.pathname.charAt(0) ? g.pathname : "/" + g.pathname
											}
										}
										return A = C(window.location.href),
											function (I) {
												var g = B.isString(I) ? C(I) : I;
												return g.protocol === A.protocol && g.host === A.host
											}
									}() : function () {
										return !0
									}
								},
								16: (A, I, g) => {
									"use strict";
									var B = g(867);
									A.exports = function (A, I) {
										B.forEach(A, (function (g, B) {
											B !== I && B.toUpperCase() === I.toUpperCase() && (A[I] = g, delete A[B])
										}))
									}
								},
								109: (A, I, g) => {
									"use strict";
									var B = g(867),
										C = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
									A.exports = function (A) {
										var I, g, Q, E = {};
										return A ? (B.forEach(A.split("\n"), (function (A) {
											if (Q = A.indexOf(":"), I = B.trim(A.substr(0, Q)).toLowerCase(), g = B.trim(A.substr(Q + 1)), I) {
												if (E[I] && C.indexOf(I) >= 0) return;
												E[I] = "set-cookie" === I ? (E[I] ? E[I] : []).concat([g]) : E[I] ? E[I] + ", " + g : g
											}
										})), E) : E
									}
								},
								713: A => {
									"use strict";
									A.exports = function (A) {
										return function (I) {
											return A.apply(null, I)
										}
									}
								},
								875: (A, I, g) => {
									"use strict";
									var B = g(288).version,
										C = {};
									["object", "boolean", "number", "function", "string", "symbol"].forEach((function (A, I) {
										C[A] = function (g) {
											return typeof g === A || "a" + (I < 1 ? "n " : " ") + A
										}
									}));
									var Q = {};
									C.transitional = function (A, I, g) {
										function C(A, I) {
											return "[Axios v" + B + "] Transitional option '" + A + "'" + I + (g ? ". " + g : "")
										}
										return function (g, B, E) {
											if (!1 === A) throw new Error(C(B, " has been removed" + (I ? " in " + I : "")));
											return I && !Q[B] && (Q[B] = !0, console.warn(C(B, " has been deprecated since v" + I + " and will be removed in the near future"))), !A || A(g, B, E)
										}
									}, A.exports = {
										assertOptions: function (A, I, g) {
											if ("object" != typeof A) throw new TypeError("options must be an object");
											for (var B = Object.keys(A), C = B.length; C-- > 0;) {
												var Q = B[C],
													E = I[Q];
												if (E) {
													var i = A[Q],
														o = void 0 === i || E(i, Q, A);
													if (!0 !== o) throw new TypeError("option " + Q + " must be " + o)
												} else if (!0 !== g) throw Error("Unknown option " + Q)
											}
										},
										validators: C
									}
								},
								867: (A, I, g) => {
									"use strict";
									var B = g(849),
										C = Object.prototype.toString;

									function Q(A) {
										return Array.isArray(A)
									}

									function E(A) {
										return void 0 === A
									}

									function i(A) {
										return "[object ArrayBuffer]" === C.call(A)
									}

									function o(A) {
										return null !== A && "object" == typeof A
									}

									function a(A) {
										if ("[object Object]" !== C.call(A)) return !1;
										var I = Object.getPrototypeOf(A);
										return null === I || I === Object.prototype
									}

									function D(A) {
										return "[object Function]" === C.call(A)
									}

									function t(A, I) {
										if (null != A)
											if ("object" != typeof A && (A = [A]), Q(A))
												for (var g = 0, B = A.length; g < B; g++) I.call(null, A[g], g, A);
											else
												for (var C in A) Object.prototype.hasOwnProperty.call(A, C) && I.call(null, A[C], C, A)
									}
									A.exports = {
										isArray: Q,
										isArrayBuffer: i,
										isBuffer: function (A) {
											return null !== A && !E(A) && null !== A.constructor && !E(A.constructor) && "function" == typeof A.constructor.isBuffer && A.constructor.isBuffer(A)
										},
										isFormData: function (A) {
											return "[object FormData]" === C.call(A)
										},
										isArrayBufferView: function (A) {
											return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(A) : A && A.buffer && i(A.buffer)
										},
										isString: function (A) {
											return "string" == typeof A
										},
										isNumber: function (A) {
											return "number" == typeof A
										},
										isObject: o,
										isPlainObject: a,
										isUndefined: E,
										isDate: function (A) {
											return "[object Date]" === C.call(A)
										},
										isFile: function (A) {
											return "[object File]" === C.call(A)
										},
										isBlob: function (A) {
											return "[object Blob]" === C.call(A)
										},
										isFunction: D,
										isStream: function (A) {
											return o(A) && D(A.pipe)
										},
										isURLSearchParams: function (A) {
											return "[object URLSearchParams]" === C.call(A)
										},
										isStandardBrowserEnv: function () {
											return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
										},
										forEach: t,
										merge: function A() {
											var I = {};

											function g(g, B) {
												a(I[B]) && a(g) ? I[B] = A(I[B], g) : a(g) ? I[B] = A({}, g) : Q(g) ? I[B] = g.slice() : I[B] = g
											}
											for (var B = 0, C = arguments.length; B < C; B++) t(arguments[B], g);
											return I
										},
										extend: function (A, I, g) {
											return t(I, (function (I, C) {
												A[C] = g && "function" == typeof I ? B(I, g) : I
											})), A
										},
										trim: function (A) {
											return A.trim ? A.trim() : A.replace(/^\s+|\s+$/g, "")
										},
										stripBOM: function (A) {
											return 65279 === A.charCodeAt(0) && (A = A.slice(1)), A
										}
									}
								},
								666: A => {
									var I = function (A) {
										"use strict";
										var I, g = Object.prototype,
											B = g.hasOwnProperty,
											C = "function" == typeof Symbol ? Symbol : {},
											Q = C.iterator || "@@iterator",
											E = C.asyncIterator || "@@asyncIterator",
											i = C.toStringTag || "@@toStringTag";

										function o(A, I, g) {
											return Object.defineProperty(A, I, {
												value: g,
												enumerable: !0,
												configurable: !0,
												writable: !0
											}), A[I]
										}
										try {
											o({}, "")
										} catch (A) {
											o = function (A, I, g) {
												return A[I] = g
											}
										}

										function a(A, I, g, B) {
											var C = I && I.prototype instanceof G ? I : G,
												Q = Object.create(C.prototype),
												E = new J(B || []);
											return Q._invoke = function (A, I, g) {
												var B = t;
												return function (C, Q) {
													if (B === e) throw new Error("Generator is already running");
													if (B === h) {
														if ("throw" === C) throw Q;
														return d()
													}
													for (g.method = C, g.arg = Q;;) {
														var E = g.delegate;
														if (E) {
															var i = k(E, g);
															if (i) {
																if (i === r) continue;
																return i
															}
														}
														if ("next" === g.method) g.sent = g._sent = g.arg;
														else if ("throw" === g.method) {
															if (B === t) throw B = h, g.arg;
															g.dispatchException(g.arg)
														} else "return" === g.method && g.abrupt("return", g.arg);
														B = e;
														var o = D(A, I, g);
														if ("normal" === o.type) {
															if (B = g.done ? h : s, o.arg === r) continue;
															return {
																value: o.arg,
																done: g.done
															}
														}
														"throw" === o.type && (B = h, g.method = "throw", g.arg = o.arg)
													}
												}
											}(A, g, E), Q
										}

										function D(A, I, g) {
											try {
												return {
													type: "normal",
													arg: A.call(I, g)
												}
											} catch (A) {
												return {
													type: "throw",
													arg: A
												}
											}
										}
										A.wrap = a;
										var t = "suspendedStart",
											s = "suspendedYield",
											e = "executing",
											h = "completed",
											r = {};

										function G() {}

										function w() {}

										function n() {}
										var y = {};
										o(y, Q, (function () {
											return this
										}));
										var R = Object.getPrototypeOf,
											F = R && R(R(K([])));
										F && F !== g && B.call(F, Q) && (y = F);
										var c = n.prototype = G.prototype = Object.create(y);

										function M(A) {
											["next", "throw", "return"].forEach((function (I) {
												o(A, I, (function (A) {
													return this._invoke(I, A)
												}))
											}))
										}

										function S(A, I) {
											function g(C, Q, E, i) {
												var o = D(A[C], A, Q);
												if ("throw" !== o.type) {
													var a = o.arg,
														t = a.value;
													return t && "object" == typeof t && B.call(t, "__await") ? I.resolve(t.__await).then((function (A) {
														g("next", A, E, i)
													}), (function (A) {
														g("throw", A, E, i)
													})) : I.resolve(t).then((function (A) {
														a.value = A, E(a)
													}), (function (A) {
														return g("throw", A, E, i)
													}))
												}
												i(o.arg)
											}
											var C;
											this._invoke = function (A, B) {
												function Q() {
													return new I((function (I, C) {
														g(A, B, I, C)
													}))
												}
												return C = C ? C.then(Q, Q) : Q()
											}
										}

										function k(A, g) {
											var B = A.iterator[g.method];
											if (B === I) {
												if (g.delegate = null, "throw" === g.method) {
													if (A.iterator.return && (g.method = "return", g.arg = I, k(A, g), "throw" === g.method)) return r;
													g.method = "throw", g.arg = new TypeError("The iterator does not provide a 'throw' method")
												}
												return r
											}
											var C = D(B, A.iterator, g.arg);
											if ("throw" === C.type) return g.method = "throw", g.arg = C.arg, g.delegate = null, r;
											var Q = C.arg;
											return Q ? Q.done ? (g[A.resultName] = Q.value, g.next = A.nextLoc, "return" !== g.method && (g.method = "next", g.arg = I), g.delegate = null, r) : Q : (g.method = "throw", g.arg = new TypeError("iterator result is not an object"), g.delegate = null, r)
										}

										function U(A) {
											var I = {
												tryLoc: A[0]
											};
											1 in A && (I.catchLoc = A[1]), 2 in A && (I.finallyLoc = A[2], I.afterLoc = A[3]), this.tryEntries.push(I)
										}

										function N(A) {
											var I = A.completion || {};
											I.type = "normal", delete I.arg, A.completion = I
										}

										function J(A) {
											this.tryEntries = [{
												tryLoc: "root"
											}], A.forEach(U, this), this.reset(!0)
										}

										function K(A) {
											if (A) {
												var g = A[Q];
												if (g) return g.call(A);
												if ("function" == typeof A.next) return A;
												if (!isNaN(A.length)) {
													var C = -1,
														E = function g() {
															for (; ++C < A.length;)
																if (B.call(A, C)) return g.value = A[C], g.done = !1, g;
															return g.value = I, g.done = !0, g
														};
													return E.next = E
												}
											}
											return {
												next: d
											}
										}

										function d() {
											return {
												value: I,
												done: !0
											}
										}
										return w.prototype = n, o(c, "constructor", n), o(n, "constructor", w), w.displayName = o(n, i, "GeneratorFunction"), A.isGeneratorFunction = function (A) {
											var I = "function" == typeof A && A.constructor;
											return !!I && (I === w || "GeneratorFunction" === (I.displayName || I.name))
										}, A.mark = function (A) {
											return Object.setPrototypeOf ? Object.setPrototypeOf(A, n) : (A.__proto__ = n, o(A, i, "GeneratorFunction")), A.prototype = Object.create(c), A
										}, A.awrap = function (A) {
											return {
												__await: A
											}
										}, M(S.prototype), o(S.prototype, E, (function () {
											return this
										})), A.AsyncIterator = S, A.async = function (I, g, B, C, Q) {
											void 0 === Q && (Q = Promise);
											var E = new S(a(I, g, B, C), Q);
											return A.isGeneratorFunction(g) ? E : E.next().then((function (A) {
												return A.done ? A.value : E.next()
											}))
										}, M(c), o(c, i, "Generator"), o(c, Q, (function () {
											return this
										})), o(c, "toString", (function () {
											return "[object Generator]"
										})), A.keys = function (A) {
											var I = [];
											for (var g in A) I.push(g);
											return I.reverse(),
												function g() {
													for (; I.length;) {
														var B = I.pop();
														if (B in A) return g.value = B, g.done = !1, g
													}
													return g.done = !0, g
												}
										}, A.values = K, J.prototype = {
											constructor: J,
											reset: function (A) {
												if (this.prev = 0, this.next = 0, this.sent = this._sent = I, this.done = !1, this.delegate = null, this.method = "next", this.arg = I, this.tryEntries.forEach(N), !A)
													for (var g in this) "t" === g.charAt(0) && B.call(this, g) && !isNaN(+g.slice(1)) && (this[g] = I)
											},
											stop: function () {
												this.done = !0;
												var A = this.tryEntries[0].completion;
												if ("throw" === A.type) throw A.arg;
												return this.rval
											},
											dispatchException: function (A) {
												if (this.done) throw A;
												var g = this;

												function C(B, C) {
													return i.type = "throw", i.arg = A, g.next = B, C && (g.method = "next", g.arg = I), !!C
												}
												for (var Q = this.tryEntries.length - 1; Q >= 0; --Q) {
													var E = this.tryEntries[Q],
														i = E.completion;
													if ("root" === E.tryLoc) return C("end");
													if (E.tryLoc <= this.prev) {
														var o = B.call(E, "catchLoc"),
															a = B.call(E, "finallyLoc");
														if (o && a) {
															if (this.prev < E.catchLoc) return C(E.catchLoc, !0);
															if (this.prev < E.finallyLoc) return C(E.finallyLoc)
														} else if (o) {
															if (this.prev < E.catchLoc) return C(E.catchLoc, !0)
														} else {
															if (!a) throw new Error("try statement without catch or finally");
															if (this.prev < E.finallyLoc) return C(E.finallyLoc)
														}
													}
												}
											},
											abrupt: function (A, I) {
												for (var g = this.tryEntries.length - 1; g >= 0; --g) {
													var C = this.tryEntries[g];
													if (C.tryLoc <= this.prev && B.call(C, "finallyLoc") && this.prev < C.finallyLoc) {
														var Q = C;
														break
													}
												}
												Q && ("break" === A || "continue" === A) && Q.tryLoc <= I && I <= Q.finallyLoc && (Q = null);
												var E = Q ? Q.completion : {};
												return E.type = A, E.arg = I, Q ? (this.method = "next", this.next = Q.finallyLoc, r) : this.complete(E)
											},
											complete: function (A, I) {
												if ("throw" === A.type) throw A.arg;
												return "break" === A.type || "continue" === A.type ? this.next = A.arg : "return" === A.type ? (this.rval = this.arg = A.arg, this.method = "return", this.next = "end") : "normal" === A.type && I && (this.next = I), r
											},
											finish: function (A) {
												for (var I = this.tryEntries.length - 1; I >= 0; --I) {
													var g = this.tryEntries[I];
													if (g.finallyLoc === A) return this.complete(g.completion, g.afterLoc), N(g), r
												}
											},
											catch: function (A) {
												for (var I = this.tryEntries.length - 1; I >= 0; --I) {
													var g = this.tryEntries[I];
													if (g.tryLoc === A) {
														var B = g.completion;
														if ("throw" === B.type) {
															var C = B.arg;
															N(g)
														}
														return C
													}
												}
												throw new Error("illegal catch attempt")
											},
											delegateYield: function (A, g, B) {
												return this.delegate = {
													iterator: K(A),
													resultName: g,
													nextLoc: B
												}, "next" === this.method && (this.arg = I), r
											}
										}, A
									}(A.exports);
									try {
										regeneratorRuntime = I
									} catch (A) {
										"object" == typeof globalThis ? globalThis.regeneratorRuntime = I : Function("r", "regeneratorRuntime = r")(I)
									}
								},
								654: () => {},
								231: () => {},
								703: () => {}
							},
							I = {};

						function g(B) {
							var C = I[B];
							if (void 0 !== C) return C.exports;
							var Q = I[B] = {
								exports: {}
							};
							return A[B](Q, Q.exports, g), Q.exports
						}
						g.n = A => {
							var I = A && A.__esModule ? () => A.default : () => A;
							return g.d(I, {
								a: I
							}), I
						}, g.d = (A, I) => {
							for (var B in I) g.o(I, B) && !g.o(A, B) && Object.defineProperty(A, B, {
								enumerable: !0,
								get: I[B]
							})
						}, g.g = function () {
							if ("object" == typeof globalThis) return globalThis;
							try {
								return this || new Function("return this")()
							} catch (A) {
								if ("object" == typeof window) return window
							}
						}(), g.o = (A, I) => Object.prototype.hasOwnProperty.call(A, I);
						var B = {};
						return (() => {
							"use strict";

							function A(A, I, g, B, C, Q, E) {
								try {
									var i = A[Q](E),
										o = i.value
								} catch (A) {
									return void g(A)
								}
								i.done ? I(o) : Promise.resolve(o).then(B, C)
							}

							function I(I) {
								return function () {
									var g = this,
										B = arguments;
									return new Promise((function (C, Q) {
										var E = I.apply(g, B);

										function i(I) {
											A(E, C, Q, i, o, "next", I)
										}

										function o(I) {
											A(E, C, Q, i, o, "throw", I)
										}
										i(void 0)
									}))
								}
							}

							function C(A, I) {
								if (!(A instanceof I)) throw new TypeError("Cannot call a class as a function")
							}

							function Q(A, I) {
								for (var g = 0; g < I.length; g++) {
									var B = I[g];
									B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(A, B.key, B)
								}
							}

							function E(A, I, g) {
								return I && Q(A.prototype, I), g && Q(A, g), Object.defineProperty(A, "prototype", {
									writable: !1
								}), A
							}
							g.d(B, {
								default: () => F
							});
							var i = g(757),
								o = g.n(i);

							function a(A) {
								return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (A) {
									return typeof A
								} : function (A) {
									return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
								}, a(A)
							}
							var D, t = (D = (D = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0) || "/index.js", function (A) {
								var I, B;
								(A = void 0 !== (A = A || {}) ? A : {}).ready = new Promise((function (A, g) {
									I = A, B = g
								}));
								var C, Q = {};
								for (C in A) A.hasOwnProperty(C) && (Q[C] = A[C]);
								var E = [],
									i = "./this.program",
									o = function (A, I) {
										throw I
									},
									t = !1,
									s = !1,
									e = !1,
									h = !1;
								t = "object" === ("undefined" == typeof window ? "undefined" : a(window)), s = "function" == typeof importScripts, e = "object" === ("undefined" == typeof process ? "undefined" : a(process)) && "object" === a(process.versions) && "string" == typeof process.versions.node, h = !t && !e && !s;
								var r, G, w, n, y, R = "";

								function F(I) {
									return A.locateFile ? A.locateFile(I, R) : R + I
								}
								e ? (R = s ? g(703).dirname(R) + "/" : "//", r = function (A, I) {
									var B = mg(A);
									return B ? I ? B : B.toString() : (n || (n = g(231)), y || (y = g(703)), A = y.normalize(A), n.readFileSync(A, I ? null : "utf8"))
								}, w = function (A) {
									var I = r(A, !0);
									return I.buffer || (I = new Uint8Array(I)), L(I.buffer), I
								}, process.argv.length > 1 && (i = process.argv[1].replace(/\\/g, "/")), E = process.argv.slice(2), process.on("uncaughtException", (function (A) {
									if (!(A instanceof CB)) throw A
								})), process.on("unhandledRejection", cA), o = function (A) {
									process.exit(A)
								}, A.inspect = function () {
									return "[Emscripten Module object]"
								}) : h ? ("undefined" != typeof read && (r = function (A) {
									var I = mg(A);
									return I ? Hg(I) : read(A)
								}), w = function (A) {
									var I;
									return (I = mg(A)) ? I : "function" == typeof readbuffer ? new Uint8Array(readbuffer(A)) : (L("object" === a(I = read(A, "binary"))), I)
								}, "undefined" != typeof scriptArgs ? E = scriptArgs : void 0 !== arguments && (E = arguments), "function" == typeof quit && (o = function (A) {
									quit(A)
								}), "undefined" != typeof print && ("undefined" == typeof console && (console = {}), console.log = print, console.warn = console.error = "undefined" != typeof printErr ? printErr : print)) : (t || s) && (s ? R = self.location.href : "undefined" != typeof document && document.currentScript && (R = document.currentScript.src), D && (R = D), R = 0 !== R.indexOf("blob:") ? R.substr(0, R.lastIndexOf("/") + 1) : "", r = function (A) {
									try {
										var I = new XMLHttpRequest;
										return I.open("GET", A, !1), I.send(null), I.responseText
									} catch (I) {
										var g = mg(A);
										if (g) return Hg(g);
										throw I
									}
								}, s && (w = function (A) {
									try {
										var I = new XMLHttpRequest;
										return I.open("GET", A, !1), I.responseType = "arraybuffer", I.send(null), new Uint8Array(I.response)
									} catch (I) {
										var g = mg(A);
										if (g) return g;
										throw I
									}
								}), G = function (A, I, g) {
									var B = new XMLHttpRequest;
									B.open("GET", A, !0), B.responseType = "arraybuffer", B.onload = function () {
										if (200 == B.status || 0 == B.status && B.response) I(B.response);
										else {
											var C = mg(A);
											C ? I(C.buffer) : g()
										}
									}, B.onerror = g, B.send(null)
								});
								var c = A.print || console.log.bind(console),
									M = A.printErr || console.warn.bind(console);
								for (C in Q) Q.hasOwnProperty(C) && (A[C] = Q[C]);
								Q = null, A.arguments && (E = A.arguments), A.thisProgram && (i = A.thisProgram), A.quit && (o = A.quit);
								var S = 16;

								function k(A, I) {
									return I || (I = S), Math.ceil(A / I) * I
								}
								var U, N = 0,
									J = function (A) {
										N = A
									},
									K = function () {
										return N
									};
								A.wasmBinary && (U = A.wasmBinary);
								var d, l = A.noExitRuntime || !0;
								"object" !== ("undefined" == typeof WebAssembly ? "undefined" : a(WebAssembly)) && cA("no native wasm support detected");
								var Y = !1;

								function L(A, I) {
									A || cA("Assertion failed: " + I)
								}
								var q = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

								function H(A, I, g) {
									for (var B = I + g, C = I; A[C] && !(C >= B);) ++C;
									if (C - I > 16 && A.subarray && q) return q.decode(A.subarray(I, C));
									for (var Q = ""; I < C;) {
										var E = A[I++];
										if (128 & E) {
											var i = 63 & A[I++];
											if (192 != (224 & E)) {
												var o = 63 & A[I++];
												if ((E = 224 == (240 & E) ? (15 & E) << 12 | i << 6 | o : (7 & E) << 18 | i << 12 | o << 6 | 63 & A[I++]) < 65536) Q += String.fromCharCode(E);
												else {
													var a = E - 65536;
													Q += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
												}
											} else Q += String.fromCharCode((31 & E) << 6 | i)
										} else Q += String.fromCharCode(E)
									}
									return Q
								}

								function u(A, I) {
									return A ? H(Z, A, I) : ""
								}

								function p(A, I, g, B) {
									if (!(B > 0)) return 0;
									for (var C = g, Q = g + B - 1, E = 0; E < A.length; ++E) {
										var i = A.charCodeAt(E);
										if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & A.charCodeAt(++E)), i <= 127) {
											if (g >= Q) break;
											I[g++] = i
										} else if (i <= 2047) {
											if (g + 1 >= Q) break;
											I[g++] = 192 | i >> 6, I[g++] = 128 | 63 & i
										} else if (i <= 65535) {
											if (g + 2 >= Q) break;
											I[g++] = 224 | i >> 12, I[g++] = 128 | i >> 6 & 63, I[g++] = 128 | 63 & i
										} else {
											if (g + 3 >= Q) break;
											I[g++] = 240 | i >> 18, I[g++] = 128 | i >> 12 & 63, I[g++] = 128 | i >> 6 & 63, I[g++] = 128 | 63 & i
										}
									}
									return I[g] = 0, g - C
								}

								function m(A, I, g) {
									return p(A, Z, I, g)
								}

								function f(A) {
									for (var I = 0, g = 0; g < A.length; ++g) {
										var B = A.charCodeAt(g);
										B >= 55296 && B <= 57343 && (B = 65536 + ((1023 & B) << 10) | 1023 & A.charCodeAt(++g)), B <= 127 ? ++I : I += B <= 2047 ? 2 : B <= 65535 ? 3 : 4
									}
									return I
								}
								var b, W, Z, x, V, v, X, T, j, O = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

								function P(A, I) {
									for (var g = A, B = g >> 1, C = B + I / 2; !(B >= C) && V[B];) ++B;
									if ((g = B << 1) - A > 32 && O) return O.decode(Z.subarray(A, g));
									for (var Q = "", E = 0; !(E >= I / 2); ++E) {
										var i = x[A + 2 * E >> 1];
										if (0 == i) break;
										Q += String.fromCharCode(i)
									}
									return Q
								}

								function z(A, I, g) {
									if (void 0 === g && (g = 2147483647), g < 2) return 0;
									for (var B = I, C = (g -= 2) < 2 * A.length ? g / 2 : A.length, Q = 0; Q < C; ++Q) {
										var E = A.charCodeAt(Q);
										x[I >> 1] = E, I += 2
									}
									return x[I >> 1] = 0, I - B
								}

								function _(A) {
									return 2 * A.length
								}

								function $(A, I) {
									for (var g = 0, B = ""; !(g >= I / 4);) {
										var C = v[A + 4 * g >> 2];
										if (0 == C) break;
										if (++g, C >= 65536) {
											var Q = C - 65536;
											B += String.fromCharCode(55296 | Q >> 10, 56320 | 1023 & Q)
										} else B += String.fromCharCode(C)
									}
									return B
								}

								function AA(A, I, g) {
									if (void 0 === g && (g = 2147483647), g < 4) return 0;
									for (var B = I, C = B + g - 4, Q = 0; Q < A.length; ++Q) {
										var E = A.charCodeAt(Q);
										if (E >= 55296 && E <= 57343 && (E = 65536 + ((1023 & E) << 10) | 1023 & A.charCodeAt(++Q)), v[I >> 2] = E, (I += 4) + 4 > C) break
									}
									return v[I >> 2] = 0, I - B
								}

								function IA(A) {
									for (var I = 0, g = 0; g < A.length; ++g) {
										var B = A.charCodeAt(g);
										B >= 55296 && B <= 57343 && ++g, I += 4
									}
									return I
								}

								function gA(A) {
									var I = f(A) + 1,
										g = Wg(I);
									return g && p(A, W, g, I), g
								}

								function BA(A, I) {
									W.set(A, I)
								}

								function CA(A, I, g) {
									for (var B = 0; B < A.length; ++B) W[I++ >> 0] = A.charCodeAt(B);
									g || (W[I >> 0] = 0)
								}

								function QA(A, I) {
									return A % I > 0 && (A += I - A % I), A
								}

								function EA(I) {
									b = I, A.HEAP8 = W = new Int8Array(I), A.HEAP16 = x = new Int16Array(I), A.HEAP32 = v = new Int32Array(I), A.HEAPU8 = Z = new Uint8Array(I), A.HEAPU16 = V = new Uint16Array(I), A.HEAPU32 = X = new Uint32Array(I), A.HEAPF32 = T = new Float32Array(I), A.HEAPF64 = j = new Float64Array(I)
								}
								A.INITIAL_MEMORY;
								var iA, oA = [],
									aA = [],
									DA = [];

								function tA() {
									if (A.preRun)
										for ("function" == typeof A.preRun && (A.preRun = [A.preRun]); A.preRun.length;) hA(A.preRun.shift());
									LA(oA)
								}

								function sA() {
									A.noFSInit || PA.init.initialized || PA.init(), TA.init(), LA(aA)
								}

								function eA() {
									if (A.postRun)
										for ("function" == typeof A.postRun && (A.postRun = [A.postRun]); A.postRun.length;) GA(A.postRun.shift());
									LA(DA)
								}

								function hA(A) {
									oA.unshift(A)
								}

								function rA(A) {
									aA.unshift(A)
								}

								function GA(A) {
									DA.unshift(A)
								}
								var wA = 0,
									nA = null,
									yA = null;

								function RA(I) {
									wA++, A.monitorRunDependencies && A.monitorRunDependencies(wA)
								}

								function FA(I) {
									if (wA--, A.monitorRunDependencies && A.monitorRunDependencies(wA), 0 == wA && (null !== nA && (clearInterval(nA), nA = null), yA)) {
										var g = yA;
										yA = null, g()
									}
								}

								function cA(I) {
									A.onAbort && A.onAbort(I), M(I += ""), Y = !0, I = "abort(" + I + "). Build with -s ASSERTIONS=1 for more info.";
									var g = new WebAssembly.RuntimeError(I);
									throw B(g), g
								}
								A.preloadedImages = {}, A.preloadedAudios = {};
								var MA = "data:application/octet-stream;base64,";

								function SA(A) {
									return A.startsWith(MA)
								}

								function kA(A) {
									return A.startsWith("file://")
								}
								var UA, NA, JA = "data:application/octet-stream;base64,AGFzbQEAAAAB4gVbYAF/AX9gAX8AYAJ/fwBgAn9/AX9gA39/fwF/YAV/f39/fwBgBH9/f38AYAN/f38AYAZ/f39/f38Bf2AFf39/f38Bf2AEf39/fwF/YAZ/f39/f38AYAd/f39/f39/AGAIf39/f39/f38Bf2AAAX9gB39/f39/f38Bf2AAAGABfQF9YAV/fn5+fgBgA39+fwF+YAJ/fABgBX9/f39+AX9gAn19AX1gCn9/f39/f39/f38Bf2AEf39/fwF+YAN/f38BfWABfwF8YAh/f39/f39/fwBgA39/fQBgBH9+fn8AYAd/f39/f35+AX9gBn9/f39+fgF/YAp/f39/f39/f39/AGAPf39/f39/f39/f39/f39/AGAFf39+f38AYAV/f319fwBgA39/fABgAn99AGAJf39/f39/f39/AX9gC39/f39/f39/f39/AX9gDH9/f39/f39/f39/fwF/YAV/f39/fAF/YAZ/f319f38Bf2AFf319f38Bf2AGf3x/f39/AX9gAX8BfWABfAF9YAJ/fwF9YAJ/fwF8YAZ/f39/f38BfGACfH8BfGAGf39/f399AGAEf39/fQBgBX9/f319AGADf39+AGAEf39+fgBgAn9+AGADf35/AGADf35+AGAGf3x8f39/AGABfQF/YAx/f39/f39/f39/fH8Bf2AOf39/f39/f39/f3x/f38Bf2AHf39/f3x/fwF/YAN/f30Bf2AFf399fX8Bf2AEf35/fwF/YAZ/fX19fX8Bf2ACfn8Bf2ADfn5+AX9gBH5+fn4Bf2ACfX8Bf2ACfH8Bf2ABfwF+YAJ/fwF+YAR/f39+AX5gB39/f39/f38BfWAHf39/f39/fQF9YAN/f30BfWADf319AX1gBX99fX9/AX1gAn5+AX1gA319fQF9YAR9fX19AX1gA39/fwF8YAR/f3x/AXxgAn5+AXxgAnx8AXxgA3x8fwF8YAN8fHwBfGAGfHx8fHx8AXwC9wEpAWEBYQAQAWEBYgABAWEBYwABAWEBZAAOAWEBZQAHAWEBZgALAWEBZwAFAWEBaAAHAWEBaQAAAWEBagACAWEBawAEAWEBbAACAWEBbQAFAWEBbgAHAWEBbwAKAWEBcAAEAWEBcQAAAWEBcgAHAWEBcwACAWEBdAAkAWEBdQADAWEBdgAAAWEBdwADAWEBeAAEAWEB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IAAoAgwhBwJAAkACQAJAAkACQAJAAkACQAJAAkACfyABi0MAAABPXQRAIAGoDAELQYCAgIB4CwJ/IAGOIgmLQwAAAE9dBEAgCagMAQtBgICAgHgLIgBGBEACfyACi0MAAABPXQRAIAKoDAELQYCAgIB4CyEGIAYCfyACjiIJi0MAAABPXQRAIAmoDAELQYCAgIB4CyIDRw0BIANBAEggAyAET3INAiAEIANBAWoiBk0NAyAAQQBIIAAgBU9yDQQgBSAAQQFqIgRNDQUgBLIgAZMiCiAGsiACkyILlCIJQwAAAABgRSAJu0RxrIvbaADwP2VFcg0GIAEgALKTIgwgC5QiAUMAAAAAYEUgAbtEcayL22gA8D9lRXINByAKIAIgA7KTIgqUIgJDAAAAAGBFIAK7RHGsi9toAPA/ZUVyDQggDCAKlCIKQwAAAABgRSAKu0RxrIvbaADwP2VFcg0JIAogAiAJIAGSkpK7RHGsi9toAPA/ZUUNCiAJIAggAyAHbGoiAyAAQQJ0IgBqKgIAlCABIAMgBEECdCIFaioCAJSSIAIgACADIAdqIgBqKgIAlJIgCiAAIAVqKgIAlJIMDAtB4KkEQeTfARApQavgARApQaImEClBxQAQLEG6KxApQb/hARApEC0MCgtB4KkEQf7hARApQavgARApQaImEClBxgAQLEG6KxApQb/hARApEC0MCQtB4KkEQbLiARApQavgARApQaImEClBzwAQLEG6KxApQeDiARApEC0MCAtB4KkEQfHiARApQavgARApQaImEClB0AAQLEG6KxApQa3jARApEC0MBwtB4KkEQcXjARApQavgARApQaImEClB0QAQLEG6KxApQfLjARApEC0MBgtB4KkEQYPkARApQavgARApQaImEClB0gAQLEG6KxApQb7kARApEC0MBQtB4KkEQdbkARApQavgARApQaImEClB3gAQLEG6KxApQYXlARApEC0MBAtB4KkEQZLlARApQavgARApQaImEClB3wAQLEG6KxApQYXlARApEC0MAwtB4KkEQcHlARApQavgARApQaImEClB4AAQLEG6KxApQYXlARApEC0MAgtB4KkEQfDlARApQavgARApQaImEClB4QAQLEG6KxApQYXlARApEC0MAQtB4KkEQZ/mARApQavgARApQaImEClB4gAQLEG6KxApQYXlARApEC0LEAAACwsHACAAQQRqCw0AIAAoAgAgAUEDdGoLDQAgACgCACABQQV0agspAQF/IwBBEGsiAiQAIAJBCGogACABEPkFEHQoAgAhACACQRBqJAAgAAtFACABIAAoAghPBEBB4KkEQZDdARApQa3eARApQaImEClB/AAQLEG6KxApQbXfARApEC0QAAALIAAoAhggACgCDCABbGoLNQEBfyMAQRBrIgIkACACIAAoAgA2AgwgACABKAIANgIAIAEgAkEMaigCADYCACACQRBqJAALCQAgACABEMEBC5kGAgp/AX0jAEEgayIEJAAgBCAAENMCNgIQIARBGGohCSMAQSBrIgEkAEGckgQQNBogACgCACEFQZySBBCBASEDIAFBADoAHwJAAkAgA0UNAEGckgQgBSADEFQiBhAzKAIAIgJFDQADQCACKAIAIgJFDQEgBSACKAIERwRAIAIoAgQgAxBUIAZHDQILQZySBBBVIAJBCGogABDIAUUNAAsMAQsjAEEQayIIJABBnJIEECshACABQRBqQfADEEsgCEEIaiAAQQAQqgIQqQIiAigCAEEIaiEAIAQoAhAhCiMAQRBrIgckACAHIAo2AgggACAHKAIIKAIANgIAIABBCGpBAEHgAxAyIgBCADcCzAEgAEIANwPAASAAQv7///8PNwPwASAAQgA3AtQBIABCADcC3AEgAEGgAmoQiAIaIABCgICAgICA0MfAADcDwAIgAEKthvHYrtyNjT83A7gCIABByAJqEE8aIABBAjYC2AMgAEEANgLUAiAHQRBqJAAgAhBCQQE6AAQgAigCACAFNgIEIAIoAgBBADYCACAIQRBqJAACQEGckgQCf0GckgQQNCgCAEEBarNBnJIEEFUqAgAgA7OUXkEBIAMbBEAgASADENwBQQFzIANBAXRyNgIMIAECf0GckgQQNCgCAEEBarNBnJIEEFUqAgCVjSILQwAAgE9dIAtDAAAAAGBxBEAgC6kMAQtBAAs2AghBnJIEIAFBDGogAUEIahB1KAIAELEFIAVBnJIEEIEBIgMQVCEGCyAGCxAzKAIAIgBFBEAgASgCEEGkkgQoAgA2AgBBpJIEIAEoAhA2AgBBnJIEIAYQM0GkkgQ2AgAgASgCECgCAEUNASABKAIQIQBBnJIEIAEoAhAoAgAoAgQgAxBUEDMgADYCAAwBCyABKAIQIAAoAgA2AgAgACABKAIQNgIACyABQRBqELQBIQJBnJIEEDQiACAAKAIAQQFqNgIAIAFBAToAHyABQRBqELAFCyAJIAFBEGogAhB0IAFBH2oQqwIgAUEgaiQAIARBGGoQZiEAIARBIGokACAAQQhqC68BAgF+A38CQAJAIAApA3AiAVBFBEAgACkDeCABWQ0BCyAAEIADIgRBf0oNAQsgAEEANgJoQX8PCyAAAn8gACgCCCICIAApA3AiAVANABogAiABIAApA3hCf4V8IgEgAiAAKAIEIgNrrFkNABogAyABp2oLNgJoIAAoAgQhAyACBEAgACAAKQN4IAIgA2tBAWqsfDcDeAsgA0EBayIALQAAIARHBEAgACAEOgAACyAECzMBAX8gAEEBIAAbIQACQANAIAAQMCIBDQFBrL8EKAIAIgEEQCABERAADAELCxAAAAsgAQvZAQEGfyABEMMEIQMjAEEQayIFJAACQCADIAAQpgQiAk0EQCAAEDgiBiECIAMEfwJAIAIgASIEa0ECdSADIgFJBEADQCACIAFBAWsiAUECdCIHaiAEIAdqKAIANgIAIAENAAwCCwALIAFFDQADQCACIAQoAgA2AgAgAkEEaiECIARBBGohBCABQQFrIgENAAsLQQAFIAILGiAFQQA2AgwgBiADQQJ0aiAFQQxqEHggACADEJECDAELIAAgAiADIAJrIAAQLiIAQQAgACADIAEQ3QYLIAVBEGokAAt2AQR/IAEQfSECIwBBEGsiBCQAAkAgAiAAEE4iA00EQCAAEDgiAyEFIAIEQCAFIAEgAhDjAgsgBEEAOgAPIAIgA2ogBEEPahCMASAAIAIQkQIMAQsgACADIAIgA2sgABAuIgBBACAAIAIgARDgBgsgBEEQaiQACxsBAX9BCiEBIAAQjQEEfyAAEJICQQFrBUEKCwsJACAAEJ4CIAALpwIBBH8CQEHQsAQtAABBAXENAEHQsAQQaUUNACMAQSBrIgIkAAJAQQAQxgQEQANAQf////8HIAF2QQFxBEAgAUECdCABQdW+AxDHBDYCAAsgAUEBaiIBQQZHDQALDAELA0AgAkEIaiABQQJ0agJ/QQEgAXRB/////wdxIgBBAXJFBEAgAUECdCgCAAwBCyABQdW+A0GbngMgABsQxwQLIgA2AgAgAyAAQQBHaiEDIAFBAWoiAUEGRw0AC0GAnQMhAAJAAkAgAw4CAgABCyACKAIIQeScA0cNAEGYnQMhAAwBC0EYEDAiAEUNACAAIAIpAwg3AgAgACACKQMYNwIQIAAgAikDEDcCCAsgAkEgaiQAQcywBCAANgIAQdCwBBBoC0HMsAQoAgALYAEBfyMAQRBrIgUkACAAIAMgBBDsASEAIAVBDGogBUEIaiABIAIgAxCFBCAFKgIIIQEgACAFKgIMIAAoAgRBAmuzEOACIAEgACgCCEECa7MQ4AIQQSEBIAVBEGokACABCwkAIAAgABDIBQtGACAAIAEqAgggASoCACACKgIAlCABKgIEIAIqAgSUkpI4AgAgACABKgIUIAEqAgwgAioCAJQgASoCECACKgIElJKSOAIECygBAX8gASABQQFrIgJxRQRAIAAgAnEPCyAAIAFPBH8gACABcAUgAAsLBwAgAEEQagueCwIFfw9+IwBB4ABrIgUkACACQiCGIAFCIIiEIQ8gBEIvhiADQhGIhCEMIARC////////P4MiDUIPhiADQjGIhCEQIAIgBIVCgICAgICAgICAf4MhCiACQv///////z+DIgtCIIghESANQhGIIRIgBEIwiKdB//8BcSEHAkACfyACQjCIp0H//wFxIglBAWtB/f8BTQRAQQAgB0EBa0H+/wFJDQEaCyABUCACQv///////////wCDIg5CgICAgICAwP//AFQgDkKAgICAgIDA//8AURtFBEAgAkKAgICAgIAghCEKDAILIANQIARC////////////AIMiAkKAgICAgIDA//8AVCACQoCAgICAgMD//wBRG0UEQCAEQoCAgICAgCCEIQogAyEBDAILIAEgDkKAgICAgIDA//8AhYRQBEAgAiADhFAEQEKAgICAgIDg//8AIQpCACEBDAMLIApCgICAgICAwP//AIQhCkIAIQEMAgsgAyACQoCAgICAgMD//wCFhFAEQCABIA6EIQJCACEBIAJQBEBCgICAgICA4P//ACEKDAMLIApCgICAgICAwP//AIQhCgwCCyABIA6EUARAQgAhAQwCCyACIAOEUARAQgAhAQwCCyAOQv///////z9YBEAgBUHQAGogASALIAEgCyALUCIGG3kgBkEGdK18pyIGQQ9rEIgBIAUpA1giC0IghiAFKQNQIgFCIIiEIQ8gC0IgiCERQRAgBmshBgsgBiACQv///////z9WDQAaIAVBQGsgAyANIAMgDSANUCIIG3kgCEEGdK18pyIIQQ9rEIgBIAUpA0giAkIPhiAFKQNAIgNCMYiEIRAgAkIvhiADQhGIhCEMIAJCEYghEiAGIAhrQRBqCyEGIAxC/////w+DIgIgAUL/////D4MiAX4iEyADQg+GQoCA/v8PgyIDIA9C/////w+DIg5+fCIEQiCGIg0gASADfnwiDCANVK0gAiAOfiIVIAMgC0L/////D4MiC358IhQgEEL/////D4MiDSABfnwiECAEIBNUrUIghiAEQiCIhHwiEyACIAt+IhYgAyARQoCABIQiD358IgMgDSAOfnwiESABIBJC/////weDQoCAgIAIhCIBfnwiEkIghnwiF3whBCAHIAlqIAZqQf//AGshBgJAIAsgDX4iGCACIA9+fCICIBhUrSACIAIgASAOfnwiAlatfCACIAIgFCAVVK0gECAUVK18fCICVq18IAEgD358IAEgC34iCyANIA9+fCIBIAtUrUIghiABQiCIhHwgAiABQiCGfCIBIAJUrXwgASABIBEgElatIAMgFlStIAMgEVatfHxCIIYgEkIgiIR8IgFWrXwgASAQIBNWrSATIBdWrXx8IgIgAVStfCIBQoCAgICAgMAAg1BFBEAgBkEBaiEGDAELIAxCP4ghAyABQgGGIAJCP4iEIQEgAkIBhiAEQj+IhCECIAxCAYYhDCADIARCAYaEIQQLIAZB//8BTgRAIApCgICAgICAwP//AIQhCkIAIQEMAQsCfiAGQQBMBEBBASAGayIHQYABTwRAQgAhAQwDCyAFQTBqIAwgBCAGQf8AaiIGEIgBIAVBIGogAiABIAYQiAEgBUEQaiAMIAQgBxCbAiAFIAIgASAHEJsCIAUpAzAgBSkDOIRCAFKtIAUpAyAgBSkDEISEIQwgBSkDKCAFKQMYhCEEIAUpAwAhAiAFKQMIDAELIAFC////////P4MgBq1CMIaECyAKhCEKIAxQIARCf1UgBEKAgICAgICAgIB/URtFBEAgCiACQgF8IgEgAlStfCEKDAELIAwgBEKAgICAgICAgIB/hYRQRQRAIAIhAQwBCyAKIAIgAkIBg3wiASACVK18IQoLIAAgATcDACAAIAo3AwggBUHgAGokAAu9BAEHfyAAKALU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IABBCGoiAigCADYCACAAIAMoAhA2AgggACAGEDMgAjYCACADKAIQKAIARQ0BIAMoAhAhAiAAIAMoAhAoAgAoAgQgARBUEDMgAjYCAAwBCyADKAIQIAIoAgA2AgAgAiADKAIQNgIACyADQRBqELQBIQIgABA0IgAgACgCAEEBajYCACADQQE6AB8gA0EQaiIBKAIAIQAgAUEANgIAIAAEQCABEEIiAS0ABARAIAEoAgAaCyAABEAgASgCABogABAqCwsLIAogA0EQaiACEHQgA0EfahCrAiADQSBqJAAgBCAHKAIIEHQaIAQgBy0ADDoABCAHQRBqJAAMAQsgBEEQahBmIgAgACgCBEEBajYCBAsgBEEgaiQADwtB4KkEQauTARApQb+QARApQdMmEClBogIQLEHaKxApQb+VARApEC0QAAALkQQBA38CQAJAAkACQAJAAkACQAJAAkAgAUF/SgRAIAAoAjQiBSABTA0BIAJBf0wNAiAAKAI4IgYgAkwNAyADQX9MDQQgACgCPCIHIANMDQUgBEF/TA0GIAAoAkAgBEwNByACIAVsIAFqIgEgACgCVCADbGogACgCWCAEbGoiACAEIAdsIANqIAUgBmxsIAFqSg0IIAAPC0HgqQRBqpoBEClBv5ABEClB0yYQKUGlARAsQdorEClBpJwBECkQLQwIC0HgqQRB2J0BEClBv5ABEClB0yYQKUGmARAsQdorEClBpJwBECkQLQwHC0HgqQRBv58BEClBv5ABEClB0yYQKUGnARAsQdorEClBi6IBECkQLQwGC0HgqQRB6aQBEClBv5ABEClB0yYQKUGoARAsQdorEClBi6IBECkQLQwFC0HgqQRB4qYBEClBv5ABEClB0yYQKUGpARAsQdorEClBlKkBECkQLQwEC0HgqQRByqsBEClBv5ABEClB0yYQKUGqARAsQdorEClBlKkBECkQLQwDC0HgqQRBhq4BEClBv5ABEClB0yYQKUGrARAsQdorEClB1q8BECkQLQwCC0HgqQRBwbIBEClBv5ABEClB0yYQKUGsARAsQdorEClB1q8BECkQLQwBC0HgqQRBqLQBEClBv5ABEClB0yYQKUGwARAsQdorEClBv5UBECkQLQsQAAALIQEBfyMAQRBrIgIkACAAIAEgARB9EKQEIAJBEGokACAACwsAIABB+LAEELwBCwkAIAAgATYCBAsJACAAIAE2AgALEQAgACABIAEoAgAoAhQRAgALDwAgACAAKAIAKAIQEQAACxEAIAAgASAAKAIAKAIsEQMAC9IJAgR/BH4jAEHwAGsiBSQAIARC////////////AIMhCgJAAkAgAUIBfSILQn9RIAJC////////////AIMiCSABIAtWrXxCAX0iC0L///////+///8AViALQv///////7///wBRG0UEQCADQgF9IgtCf1IgCiADIAtWrXxCAX0iC0L///////+///8AVCALQv///////7///wBRGw0BCyABUCAJQoCAgICAgMD//wBUIAlCgICAgICAwP//AFEbRQRAIAJCgICAgICAIIQhBCABIQMMAgsgA1AgCkKAgICAgIDA//8AVCAKQoCAgICAgMD//wBRG0UEQCAEQoCAgICAgCCEIQQMAgsgASAJQoCAgICAgMD//wCFhFAEQEKAgICAgIDg//8AIAIgASADhSACIASFQoCAgICAgICAgH+FhFAiBhshBEIAIAEgBhshAwwCCyADIApCgICAgICAwP//AIWEUA0BIAEgCYRQBEAgAyAKhEIAUg0CIAEgA4MhAyACIASDIQQMAgsgAyAKhFBFDQAgASEDIAIhBAwBCyADIAEgASADVCAJIApUIAkgClEbIgcbIQogBCACIAcbIgtC////////P4MhCSACIAQgBxsiAkIwiKdB//8BcSEIIAtCMIinQf//AXEiBkUEQCAFQeAAaiAKIAkgCiAJIAlQIgYbeSAGQQZ0rXynIgZBD2sQiAEgBSkDaCEJIAUpA2AhCkEQIAZrIQYLIAEgAyAHGyEDIAJC////////P4MhBCAIRQRAIAVB0ABqIAMgBCADIAQgBFAiBxt5IAdBBnStfKciB0EPaxCIAUEQIAdrIQggBSkDWCEEIAUpA1AhAwsgBEIDhiADQj2IhEKAgICAgICABIQhBCAJQgOGIApCPYiEIQkgAiALhSEMAn4gA0IDhiIBIAYgCGsiB0UNABogB0H/AEsEQEIAIQRCAQwBCyAFQUBrIAEgBEGAASAHaxCIASAFQTBqIAEgBCAHEJsCIAUpAzghBCAFKQMwIAUpA0AgBSkDSIRCAFKthAshAiAJQoCAgICAgIAEhCEJIApCA4YhAwJAIAxCf1cEQCADIAJ9IgEgCSAEfSACIANWrX0iBIRQBEBCACEDQgAhBAwDCyAEQv////////8DVg0BIAVBIGogASAEIAEgBCAEUCIHG3kgB0EGdK18p0EMayIHEIgBIAYgB2shBiAFKQMoIQQgBSkDICEBDAELIAIgA3wiASACVK0gBCAJfHwiBEKAgICAgICACINQDQAgAUIBgyAEQj+GIAFCAYiEhCEBIAZBAWohBiAEQgGIIQQLIAtCgICAgICAgICAf4MhAiAGQf//AU4EQCACQoCAgICAgMD//wCEIQRCACEDDAELIAZBAU4EfiAGrQUgBUEQaiABIAQgBkH/AGoQiAEgBSABIARBASAGaxCbAiAFKQMAIAUpAxAgBSkDGIRCAFKthCEBIAUpAwghBEIACyEKIAGnQQdxIgZBBEutIARCPYYgAUIDiIQiAXwiAyABVK0gBEIDiEL///////8/gyAKQjCGhCAChHwhBAJAIAZBBEYEQCAEIANCAYMiASADfCIDIAFUrXwhBAwBCyAGRQ0BCwsgACADNwMAIAAgBDcDCCAFQfAAaiQACwQAQQALEQAgACAAKAIAQQhqNgIAIAALDQAgACADlCABIAKUkwsNACAAKAIAIAFBJGxqCxAAIAAoAgQgACgCAGtBBXULLQAgAkUEQCAAKAIEIAEoAgRGDwsgACABRgRAQQEPCyAAENADIAEQ0AMQ/QFFC38CAn8BfiMAQRBrIgMkACAAAn4gAUUEQEIADAELIAMgASABQR91IgJqIAJzIgKtQgAgAmciAkHRAGoQiAEgAykDCEKAgICAgIDAAIVBnoABIAJrrUIwhnwgAUGAgICAeHGtQiCGhCEEIAMpAwALNwMAIAAgBDcDCCADQRBqJAALKAEBfyMAQRBrIgMkACADIAI2AgwgACABIAIQ9gQhACADQRBqJAAgAAsnAQF/IwBBEGsiAiQAIABBAkGoiwJBsIsCQdIAIAEQBSACQRBqJAALMQECfSABKgIAIAAqAgAiA5MgAioCBCAAKgIEIgSTlCABKgIEIASTIAIqAgAgA5OUkwsJACAAIAE6AAsLYwAgAigCBEGwAXEiAkEgRgRAIAEPCwJAIAJBEEcNAAJAAkAgAC0AACICQStrDgMAAQABCyAAQQFqDwsgAkEwRyABIABrQQJIcg0AIAAtAAFBIHJB+ABHDQAgAEECaiEACyAACyYBAX8jAEEQayIBJAAgAUEIaiAAEDgQdCgCACEAIAFBEGokACAACwoAIABBMGtBCkkLEQAgAEUEQA8LIAAgATkDgAEL3AEBAX0gACoCACECIAAgASoCADgCACABIAI4AgAgACoCBCECIAAgASoCBDgCBCABIAI4AgQgACoCCCECIAAgASoCCDgCCCABIAI4AgggACoCDCECIAAgASoCDDgCDCABIAI4AgwgACoCECECIAAgASoCEDgCECABIAI4AhAgACoCFCECIAAgASoCFDgCFCABIAI4AhQgACoCGCECIAAgASoCGDgCGCABIAI4AhggACoCHCECIAAgASoCHDgCHCABIAI4AhwgACoCICECIAAgASoCIDgCICABIAI4AiALPgECf0EMEDAiAgR/IAIgACABbEEDdBAwIgM2AgAgA0UEQCACECpBAA8LIAIgATYCCCACIAA2AgQgAgVBAAsLEwAgACABEP4CIABBBGogAhCVAQsNACAAKAIAIAFBDGxqCxEAIAAgASABKAIAKAIcEQIACxEAIAAgASABKAIAKAIYEQIACxMAIAAgASACIAAoAgAoAgwRBAALJwEBfyACQQBOBH8gACgCCCACQf8BcUEBdGovAQAgAXFBAEcFQQALCwcAIAAQLkULQQECfwJAIAJFDQADQCABIANBA3RqKAIAIgRFDQEgACAERgRAIAEgA0EDdGooAgQPCyADQQFqIgMgAkcNAAsLQQALaQEDfiAAIAJCIIgiAyABQiCIIgR+IAJC/////w+DIgIgAUL/////D4MiAX4iBUIgiCACIAR+fCICQiCIfCABIAN+IAJC/////w+DfCIBQiCIfDcDCCAAIAVC/////w+DIAFCIIaENwMACxQBAX8gACgCACEBIABBADYCACABCw8AIAAoAgggACgCADYCAAsHACAAED0aCw8AIAAgACgCACgCDBEAAAsHACAAIAFGC4sCAgd/AXwjAEEgayIGJAAgBiAEQQR0EDAiCjYCECAKBEACQCAGIARBGGwQMCILNgIUIAtFDQAgBEEAIARBAEobIQwDQCAJIAxGRQRAIAogCUEEdCIHaiIIIAIgB2oiBysDADkDACAIIAcrAwg5AwggCyAJQRhsIghqIgcgAyAIaiIIKwMAOQMAIAcgCCsDCDkDCCAHIAgrAxA5AxAgCUEBaiEJDAELCyAGIAQ2AhggACgCACAGQRBqIAEgBSAGQQhqELgFQX9MBEAgBkKAgICAwPD1y8EANwMICyAGKAIQECogBigCFBAqIAYrAwghDSAGQSBqJAAgDQ8LC0EAQQNBtAtBABAvQQEQAQALEgAgACgCACIABEAgABDABBoLCxEAIAAgASgCABDABDYCACAAC0kBAn8CfyAAKAIAIgMhAiABEFoiASEAIAJBEGoiAhA8IABLBH8gAiAAEDMoAgBBAEcFQQALRQsEQBBxAAsgA0EQaiABEDMoAgALPwICfwF+IAAgATcDcCAAIAAoAggiAiAAKAIEIgNrrCIENwN4IAAgAyABp2ogAiABIARTGyACIAFCAFIbNgJoC08BAXwgACAAoiIARIFeDP3//9+/okQAAAAAAADwP6AgACAAoiIBREI6BeFTVaU/oqAgACABoiAARGlQ7uBCk/k+okQnHg/oh8BWv6CioLYLSwECfCAAIACiIgEgAKIiAiABIAGioiABRKdGO4yHzcY+okR058ri+QAqv6CiIAIgAUSy+26JEBGBP6JEd6zLVFVVxb+goiAAoKC2CxUAIAAgARCbBiAAQQRqIAFBBGoQRwsNACAAKAIAIAEoAgBGCyQBAn8jAEEQayICJAAgASAAEO0BIQMgAkEQaiQAIAEgACADGwsSACAAECsoAgAgACgCAGtBDG0LCAAgAEH/AXELLgACQCAAKAIEQcoAcSIABEAgAEHAAEYEQEEIDwsgAEEIRw0BQRAPC0EADwtBCgv6AQIDfgJ/IwBBEGsiBSQAAn4gAb0iA0L///////////8AgyICQoCAgICAgIAIfUL/////////7/8AWARAIAJCPIYhBCACQgSIQoCAgICAgICAPHwMAQsgAkKAgICAgICA+P8AWgRAIANCPIYhBCADQgSIQoCAgICAgMD//wCEDAELIAJQBEBCAAwBCyAFIAJCACADp2dBIGogAkIgiKdnIAJCgICAgBBUGyIGQTFqEIgBIAUpAwAhBCAFKQMIQoCAgICAgMAAhUGM+AAgBmutQjCGhAshAiAAIAQ3AwAgACACIANCgICAgICAgICAf4OENwMIIAVBEGokAAt3ACAAIAEqAgAgApQ4AgAgACABKgIEIAKUOAIEIAAgASoCCCAClDgCCCAAIAEqAgwgApQ4AgwgACABKgIQIAKUOAIQIAAgASoCFCAClDgCFCAAIAEqAhggApQ4AhggACABKgIcIAKUOAIcIAAgASoCICAClDgCIAsJACABIAIQwQELPQEBfyAAKAIEIgAEQCAAENECBEACQCAAQQhqIgEoAgAEQCABEOgDQX9HDQELIAAgACgCACgCEBEBAAsLCwsRACAAIAAoAgBBCGs2AgAgAAsSACAAECsoAgAgACgCAGtBA3ULLgEBfyAAEN0CIAAoAgAEQCAAELsGIAAQKxogACgCACEBIAAQywEaIAEQKgsgAAtCAQF/IAEgAmwhBCAEAn8gAygCTEF/TARAIAAgBCADEJsEDAELIAAgBCADEJsECyIARgRAIAJBACABGw8LIAAgAW4LEAAgACABQYCAgIB4cjYCCAsKAEHY7AMQiwEAC6ABAQR/IwBBEGsiByQAAkAgAEUNACAEKAIMIQYgAiABayIIQQFOBEAgACABIAgQtQIgCEcNAQsgBiADIAFrIgFrQQAgASAGSBsiAUEBTgRAIAAgByABIAUQ7AYiBRA4IAEQtQIhBiAFEDEaIAEgBkcNAQsgAyACayIBQQFOBEAgACACIAEQtQIgAUcNAQsgBBDpBiAAIQkLIAdBEGokACAJC1gBAn8jAEEQayICJAAgABCNAQRAIAAoAgAhAyAAEJICGiADECoLIAAgASgCCDYCCCAAIAEpAgA3AgAgAUEAEKQBIAJBADYCDCABIAJBDGoQeCACQRBqJAALvwEBA38jAEEQayIFJAAgBSABNgIIQQAhAUEGIQYCQAJAIAAgBUEIahBvDQBBBCEGIANBgBAgABBgIgcQrwFFDQAgAyAHELkCIQEDQAJAIAAQbBogAUEwayEBIAAgBUEIahCEAUUgBEECSHINACADQYAQIAAQYCIGEK8BRQ0DIARBAWshBCADIAYQuQIgAUEKbGohAQwBCwtBAiEGIAAgBUEIahBvRQ0BCyACIAIoAgAgBnI2AgALIAVBEGokACABC78BAQN/IwBBEGsiBSQAIAUgATYCCEEAIQFBBiEGAkACQCAAIAVBCGoQcA0AQQQhBiADQYAQIAAQYSIHELABRQ0AIAMgBxC6AiEBA0ACQCAAEG0aIAFBMGshASAAIAVBCGoQhQFFIARBAkhyDQAgA0GAECAAEGEiBhCwAUUNAyAEQQFrIQQgAyAGELoCIAFBCmxqIQEMAQsLQQIhBiAAIAVBCGoQcEUNAQsgAiACKAIAIAZyNgIACyAFQRBqJAAgAQucAQEDfyMAQRBrIgQkACAEIAE2AgwgBCADNgIIIAQgBEEMahC7ASEGIAQoAgghAyMAQRBrIgEkACABIAM2AgwgASADNgIIQX8hBQJAQQBBACACIAMQ+gEiA0EASA0AIAAgA0EBaiIDEDAiADYCACAARQ0AIAAgAyACIAEoAgwQ+gEhBQsgAUEQaiQAIAUhACAGELoBIARBEGokACAACzYAIAIEfyACBEADQCAAIAEoAgA2AgAgAEEEaiEAIAFBBGohASACQQFrIgINAAsLQQAFIAALGgsQACACBEAgACABIAIQNxoLCw8AIAAQKygCACAAKAIAawsSACAAECsoAgAgACgCAGtBFG0L9AEBAn8gAiAESARAIAAgASACIAQQYkUEQEF/DwsgACgCDCECIAAoAgghAQsgBEECdCIGQfDMAmooAgAgASACIARrIgJ1cSIFIAMgBmooAgBKBEADQCACQQBMBEAgACABIAJBARBiRQRAQX8PCyAAKAIMIQIgACgCCCEBCyABIAJBAWsiAnZBAXEgBUEBdHIiBSADIARBAWoiBEECdGooAgBKDQALCyAAIAI2AgwgACABNgIIIARBEU4EQCAAKAIQIgAoAgAiAUH5ADYCFCAAQX8gASgCBBECAEEADwsgAygCjAEgAyAEQQJ0aigCSCAFamotABELzwECAX8CfSAAIAEgASACQQJ0IgNqIgIqAgCMEMcBIAAgA2oiAyADKgIAQwAAgD+SOAIAIAAgAUEkaiACKgIkjBCBAiAAIAFByABqIAIqAkiMEIECIAAgAUHsAGogAioCbIwQgQIgACABQZABaiACKgKQAYwQgQIgACABQbQBaiACKgK0AYwQgQIgACABQdgBaiACKgLYAYwQgQIgACABQfwBaiACKgL8AYwQgQIgABBSIgRDAAAAAFwEQCAAIABDAACAPyAEkSIFlRDHAQsgBQuyAQEFfwJ/IAJDAAAAP5IiAotDAAAAT10EQCACqAwBC0GAgICAeAshBSAAKAIUIQhBfyEGAkACfyABQwAAAD+SIgGLQwAAAE9dBEAgAagMAQtBgICAgHgLIAAoAhBqIgdBAEgNACAHIAAoAggiCU4NACAFIAhqIgVBAEgNACAFIAAoAgxODQAgAyAAKAIEIAUgCWwg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CGogABA4IAAQLmoQdCgCACEAIAFBEGokACAACykAIABBCHRBgID8B3EgAEEYdHIgAEEIdkGA/gNxIABBGHZyciAAIAEbC9sBAgF/An5BASEEAkAgAEIAUiABQv///////////wCDIgVCgICAgICAwP//AFYgBUKAgICAgIDA//8AURsNACACQgBSIANC////////////AIMiBkKAgICAgIDA//8AViAGQoCAgICAgMD//wBRGw0AIAAgAoQgBSAGhIRQBEBBAA8LIAEgA4NCAFkEQEF/IQQgACACVCABIANTIAEgA1EbDQEgACAChSABIAOFhEIAUg8LQX8hBCAAIAJWIAEgA1UgASADURsNACAAIAKFIAEgA4WEQgBSIQQLIAQLiwIAAkAgAAR/IAFB/wBNDQECQEGc9wMoAgAoAgBFBEAgAUGAf3FBgL8DRg0DDAELIAFB/w9NBEAgACABQT9xQYABcjoAASAAIAFBBnZBwAFyOgAAQQIPCyABQYCwA09BACABQYBAcUGAwANHG0UEQCAAIAFBP3FBgAFyOgACIAAgAUEMdkHgAXI6AAAgACABQQZ2QT9xQYABcjoAAUEDDwsgAUGAgARrQf//P00EQCAAIAFBP3FBgAFyOgADIAAgAUESdkHwAXI6AAAgACABQQZ2QT9xQYABcjoAAiAAIAFBDHZBP3FBgAFyOgABQQQPCwtBuJUEQRk2AgBBfwVBAQsPCyAAIAE6AABBAQvAAQECfyMAQaABayIEJAAgBEEIakHIhANBkAEQNxoCQAJAIAFBAWtB/////wdPBEAgAQ0BQQEhASAEQZ8BaiEACyAEIAA2AjQgBCAANgIcIARBfiAAayIFIAEgASAFSxsiATYCOCAEIAAgAWoiADYCJCAEIAA2AhggBEEIaiACIANB6QFB6gEQgAUhACABRQ0BIAQoAhwiASABIAQoAhhGa0EAOgAADAELQbiVBEE9NgIAQX8hAAsgBEGgAWokACAAC9AEAQR/IwBBEGsiBCQAAkACQEHEhAMgASwAABD8AUUEQEG4lQRBHDYCAAwBC0ECIQICfyABQSsQ/AFFBEAgAS0AAEHyAEchAgsgAkGAAXILIAIgAUH4ABD8ARsiAkGAgCByIAIgAUHlABD8ARsiAiACQcAAciABLQAAIgJB8gBGGyIFQYAEciAFIAJB9wBGGyIFQYAIciAFIAJB4QBGGyECIARBtgM2AgAgACACQYCAAnIgBBAjIgBBgWBPBEBBuJUEQQAgAGs2AgBBfyEACyAAQQBIDQEjAEEgayIDJAACfwJAAkBBwIQDIAEsAAAQ/AFFBEBBuJUEQRw2AgAMAQtBmAkQMCICDQELQQAMAQsgAkEAQZABEDIaIAFBKxD8AUUEQCACQQhBBCABLQAAQfIARhs2AgALAkAgAS0AAEHhAEcEQCACKAIAIQEMAQsgAEEDQQAQDyIBQYAIcUUEQCADIAFBgAhyNgIQIABBBCADQRBqEA8aCyACIAIoAgBBgAFyIgE2AgALIAJB/wE6AEsgAkGACDYCMCACIAA2AjwgAiACQZgBajYCLAJAIAFBCHENACADIANBGGo2AgAgAEGTqAEgAxAiDQAgAkEKOgBLCyACQeQBNgIoIAJB5QE2AiQgAkHmATYCICACQecBNgIMQcyVBCgCAEUEQCACQX82AkwLIAJBrJ4EKAIANgI4QayeBCgCACIBBEAgASACNgI0C0GsngQgAjYCACACCyEBIANBIGokACABIgMNASAAEBAaC0EAIQMLIARBEGokACADCxoAIAAgARCOBSIAQQAgAC0AACABQf8BcUYbC0oBAn8CQCAALQAAIgJFIAIgAS0AACIDR3INAANAIAEtAAEhAyAALQABIgJFDQEgAUEBaiEBIABBAWohACACIANGDQALCyACIANrC/kCAQZ/IAAoAgQhBiACQfGT69wDTwRAIAAoAgBCuICAgBA3AhQgACAAKAIAKAIAEQEAC0EIIAJBB3EiA2tBACADGyEDIAFBAk8EQCAAKAIAIgUgATYCGCAFQQ82AhQgACAAKAIAKAIAEQEACyACIANqIQMCQCAGIAFBAnRqIggoAjQiAgRAA0AgAyACIgQoAghNBEAgBCEBDAMLIAQoAgAiAg0ACwtB8JPr3AMgA2siAiABQQJ0QeTNAkHczQIgBBtqKAIAIgEgASACSxsiAiADaiIFQRBqIgcQMCIBRQRAA0AgAkHjAE0EQCAAKAIAQriAgIAgNwIUIAAgACgCACgCABEBAAsgAkEBdiIBIQIgASADaiIFQRBqIgcQMCIBRQ0ACwsgBiAGKAJMIAdqNgJMIAEgBTYCCCABQgA3AwAgBEUEQCAIIAE2AjQMAQsgBCABNgIACyABIAEoAgQiACADajYCBCABIAEoAgggA2s2AgggACABakEQagsnAQF/IwBBEGsiAiQAIABBA0HQjAJByIwCQdQAIAEQBSACQRBqJAALpgMCAn8BfSABAn8gAxC+Bo4iBotDAAAAT10EQCAGqAwBC0GAgICAeAsiBDYCACACAn8gA0EBIAR0spUQoAIgACoCHJQQvQYiA4tDAAAAT10EQCADqAwBC0GAgICAeAsiBDYCACAEIAAoAhRBAWtGBEAgASABKAIAQQFqNgIAIAJBADYCAEEAIQQLAkAgAgJ/IAEoAgAiAkF/TARAIAFBADYCAEEADAELIAIgACgCECIFSA0BIAEgBUEBazYCACAAKAIUQQFrCyIENgIACwJAAkACQCABKAIAIgFBf0oEQCABIAAoAhBODQEgBEF/TA0CIAQgACgCFE4NAw8LQeCpBEHN2AAQKUHR3QAQKUHdKxApQYwCECxB3DAQKUGc5AAQKRAtEAAAC0HgqQRBtugAEClB0d0AEClB3SsQKUGNAhAsQdwwEClB3uwAECkQLRAAAAtB4KkEQYL+ABApQdHdABApQd0rEClBjgIQLEHcMBApQemBARApEC0QAAALQeCpBEHphQEQKUHR3QAQKUHdKxApQY8CECxB3DAQKUGXiQEQKRAtEAAAC60BACAAIAAqAgAgASoCACAClJI4AgAgACAAKgIEIAEqAgQgApSSOAIEIAAgACoCCCABKgIIIAKUkjgCCCAAIAAqAgwgASoCDCAClJI4AgwgACAAKgIQIAEqAhAgApSSOAIQIAAgACoCFCABKgIUIAKUkjgCFCAAIAAqAhggASoCGCAClJI4AhggACAAKgIcIAEqAhwgApSSOAIcIAAgACoCICABKgIgIAKUkjgCIAsPACAAIAAoAgBBBGo2AgALCwAgAEEQaiABEGMLEgAgAEEEaiAAKAIAIAFsEJgFCwwAIAEgAigCADYCAAsOACAAIAEoAgA2AgAgAAuTAQECfyABIAAQPCICSwRAIwBBIGsiAyQAAkAgASACayIBIAAQKygCACAAKAIEa0ECdU0EQCAAIAEQnAMMAQsgABArIQIgA0EIaiAAIAAQPCABahDcAiAAEDwgAhDSAiICIAEQrQYgACACENsCIAIQsgILIANBIGokAA8LIAEgAkkEQCAAIAAoAgAgAUECdGoQjQQLC50BAQN/IwBB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QQAgBUEBaiIAIABBMEYiABshBSAAIAdqIgdB0gFsIQMMAQsLIAQgADYCDAwBCyAEIAA2AgwgACAGIAIbIQALIARBEGokACAAC2QCAX8BfiMAQRBrIgIkACAAAn4gAUUEQEIADAELIAIgAa1CACABZyIBQdEAahCIASACKQMIQoCAgICAgMAAhUGegAEgAWutQjCGfCEDIAIpAwALNwMAIAAgAzcDCCACQRBqJAALUAEBfgJAIANBwABxBEAgAiADQUBqrYghAUIAIQIMAQsgA0UNACACQcAAIANrrYYgASADrSIEiIQhASACIASIIQILIAAgATcDACAAIAI3AwgLgwECA38BfgJAIABCgICAgBBUBEAgACEFDAELA0AgAUEBayIBIAAgAEIKgCIFQgp+fadBMHI6AAAgAEL/////nwFWIQIgBSEAIAINAAsLIAWnIgIEQANAIAFBAWsiASACIAJBCm4iA0EKbGtBMHI6AAAgAkEJSyEEIAMhAiAEDQALCyABC6EBAQN/IwBBEGsiBSQAIAUgAjYCDCMAQaABayIDJAAgA0EIakHIhANBkAEQNxogAyAANgI0IAMgADYCHCADQX4gAGsiBEH/////ByAEQf////8HSRsiBDYCOCADIAAgBGoiADYCJCADIAA2AhggA0EIaiABIAIQ/AQgBARAIAMoAhwiACAAIAMoAhhGa0EAOgAACyADQaABaiQAIAVBEGokAAsvAQF/IwBBEGsiASQAIABCADcCACABQQA2AgwgAEEIaiABQQxqEP4CIAFBEGokAAulAQIBfQJ/An8gALwiAkEXdkH/AXEiA0GVAU0EQCADQf0ATQR9IABDAAAAAJQFAn0gACAAjCACQX9KGyIAQwAAAEuSQwAAAMuSIACTIgFDAAAAP14EQCAAIAGSQwAAgL+SDAELIAAgAZIiACABQwAAAL9fRQ0AGiAAQwAAgD+SCyIAIACMIAJBf0obCyEACyAAi0MAAABPXQsEQCAAqA8LQYCAgIB4C5ACAgJ/An0CQAJAIAC8IgFBgICABE9BACABQX9KG0UEQCABQf////8HcUUEQEMAAIC/IAAgAJSVDwsgAUF/TARAIAAgAJNDAAAAAJUPCyAAQwAAAEyUvCEBQeh+IQIMAQsgAUH////7B0sNAUGBfyECQwAAAAAhACABQYCAgPwDRg0BCyACIAFBjfarAmoiAUEXdmqyIgNDgHExP5QgAUH///8DcUHzidT5A2q+QwAAgL+SIgAgA0PR9xc3lCAAIABDAAAAQJKVIgMgACAAQwAAAD+UlCIEIAMgA5QiACAAIACUIgBD7umRPpRDqqoqP5KUIAAgAEMmnng+lEMTzsw+kpSSkpSSIASTkpIhAAsgAAvVAwENfyAAIQZBnPcDKAIAIQJBACEAAkACQANAIAYgAEGg3gJqLQAARwRAQdcAIQQgAEEBaiIAQdcARw0BDAILCyAAIgQNAEGA3wIhBgwBC0GA3wIhAANAIAAtAAAhAyAAQQFqIgYhACADDQAgBiEAIARBAWsiBA0ACwsgAigCFCIABH8gACgCBCEEIAAoAgAiACgCCCAAKAIAQaLa79cGaiICEPcBIQMgACgCDCACEPcBIQUgACgCECACEPcBIQECQCADIARBAnZPDQAgASAFckEDcSAFIAQgA0ECdGsiB08gASAHT3JyDQAgAUECdiEKIAVBAnYhC0EAIQUDQCAAIAUgA0EBdiIHaiIMQQF0Ig0gC2pBAnRqIgEoAgAgAhD3ASEJIAQgASgCBCACEPcBIgFNIAkgBCABa09yDQEgACABIAlqai0AAA0BIAYgACABahD9ASIBRQRAIAAgCiANakECdGoiBSgCACACEPcBIQMgBCAFKAIEIAIQ9wEiAk0gAyAEIAJrT3INAkEAIAAgAmogACACIANqai0AABshCAwCCyADQQFGDQEgByADIAdrIAFBAEgiARshAyAFIAwgARshBQwACwALIAgFQQALIgAgBiAAGwsnAQF/IwBBEGsiAiQAIABBA0GYjQJBpI0CQdoAIAEQBSACQRBqJAALDQAgACgCBCABKAIESwshACAAKAIEIAAQKygCAEkEQCAAIAEQ3gIPCyAAIAEQ0wULDQAgACgCABAqIAAQKgsIACAAQfQAagsKACAAIAEQeCAACyABAX8gACgCACECIAAgATYCACACBEAgABBCIAIQiAYLCzABAX8jAEEQayIDJAAgAyABNgIMIAAgA0EMahB4IAAgAikCADcCBCADQRBqJAAgAAsSACAAIAI6AAQgACABNgIAIAALFgAgACABKAIANgIAIAAgAi0AADoABAsgAQF/IAAoAgAhASAAQQA2AgAgAQRAIAAQQiABEIgGCwsoAQF/IwBBEGsi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IANBIGokAAsJACAAIAE6AGQLagECfyMAQRBrIgQkACAEQQA2AgwgAEEMaiAEQQxqIAMQqwEgAQRAIAAoAhAaIAEQ/AUhBQsgACAFNgIAIAAgBSACQQN0aiICNgIIIAAgAjYCBCAAEDQgBSABQQN0ajYCACAEQRBqJAAgAAsIACAAIAEQeAsMACAAIAEgACABSBsLIAEBf0F/IQIgAEUgAUEES3IEf0F/BSAAIAE2AhhBAAsLEAAgACgCACABKAIAa0EDdQssACAAKAIAGiAAKAIAIAAQywFBA3RqGiAAKAIAIAAQywFBA3RqGiAAKAIAGgsHACAAEE8aCysAIAAoAgAaIAAoAgAgABDDAUEMbGoaIAAoAgAaIAAoAgAgABBlQQxsahoLCQAgAEEANgIACywAIAAoAgAaIAAoAgAgABDpAUECdGoaIAAoAgAgABDpAUECdGoaIAAoAgAaCysBAX8gACABKAIANgIAIAEoAgAhAyAAIAE2AgggACADIAJBAnRqNgIEIAALVAECfyMAQRBrIgIkACACIAAgARCxAiIBKAIEIQMDQCABKAIIIANHBEAgABArGiABKAIEEJkDIAEgASgCBEEEaiIDNgIEDAELCyABEHYgAkEQaiQACysBAX8gACgCBCECA0AgASACRwRAIAAQKxogAkEIayECDAELCyAAIAE2AgQLKAAgACABEEcgAEEEaiABQQRqEEcgABArIAEQKxBHIAAQKxogARArGgudAQIEfwN9A0AgBEEDRwRAIAAgBEEFdGoiBisDELYhByAGKwMItiEIIAYrAwC2IQlBACEDA0AgA0EERwRAIANBAnQiBSACIARBBHRqaiABIAVqIgUqAgAgCZQgBSoCECAIlJIgBSoCICAHlJI4AgAgA0EBaiEDDAELCyACIARBBHRqIgMgAyoCDCAGKwMYtpI4AgwgBEEBaiEEDAELCwuCAQACQCACQwAAAABgBEAgACgCFLIgAl5FDQEgACoCGCACELwGQQEgAXSylA8LQeCpBEGvxgEQKUHJwAEQKUGiJhApQegBECxBuisQKUGNxwEQKRAtEAAAC0HgqQRBkcIBEClBycABEClBoiYQKUHpARAsQborEClBxscBECkQLRAAAAvzawMOfwR9CXwjAEHgAWsiDCQAIAxCgICAgICA4K3AADcD2AEgDEKAgICAgIDg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KAIwECogACgCPBAqIAALCwAgAEGIsQQQvAELCwAgAEGAsQQQvAELLwEBfyAAQQRqEOgEIQIgAEHIlwM2AgAgAkHclwM2AgAgAEG8lwMoAgBqIAEQqgMLLwEBfyAAQQRqENAEIQIgAEGYlwM2AgAgAkGslwM2AgAgAEGMlwMoAgBqIAEQqgMLCQAgACABEOwEC9kDAgJ+An8jAEEgayIEJAACQCABQv///////////wCDIgNCgICAgICAwIA8fSADQoCAgICAgMD/wwB9VARAIAFCBIYgAEI8iIQhAyAAQv//////////D4MiAEKBgICAgICAgAhaBEAgA0KBgICAgICAgMAAfCECDAILIANCgICAgICAgIBAfSECIABCgICAgICAgIAIhUIAUg0BIAIgA0IBg3whAgwBCyAAUCADQoCAgICAgMD//wBUIANCgICAgICAwP//AFEbRQRAIAFCBIYgAEI8iIRC/////////wODQoCAgICAgID8/wCEIQIMAQtCgICAgICAgPj/ACECIANC////////v//DAFYNAEIAIQIgA0IwiKciBUGR9wBJDQAgBEEQaiAAIAFC////////P4NCgICAgICAwACEIgIgBUGB9wBrEIgBIAQgACACQYH4ACAFaxCbAiAEKQMIQgSGIAQpAwAiAEI8iIQhAiAEKQMQIAQpAxiEQgBSrSAAQv//////////D4OEIgBCgYCAgICAgIAIWgRAIAJCAXwhAgwBCyAAQoCAgICAgICACIVCAFINACACQgGDIAJ8IQILIARBIGokACACIAFCgICAgICAgICAf4OEvwtBAQF/IwBBEGsiBSQAIAUgASACIAMgBEKAgICAgICAgIB/hRCZASAAIAUpAwA3AwAgACAFKQMINwMIIAVBEGokAAvEAQIBfwJ+QX8hAwJAIABCAFIgAUL///////////8AgyIEQoCAgICAgMD//wBWIARCgICAgICAwP//AFEbDQBBACACQv///////////wCDIgVCgICAgICAwP//AFYgBUKAgICAgIDA//8AURsNACAAIAQgBYSEUARAQQAPCyABIAKDQgBZBEBBACABIAJTIAEgAlEbDQEgACABIAKFhEIAUg8LIABCAFIgASACVSABIAJRGw0AIAAgASAChYRCAFIhAwsgAwuvAQEGfyMAQfABayIGJAAg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AigCACEEIAIQngYaIAQQKgsgDUEgaiQACyABELMCIQcgARDfAiENIwBBIGsiBCQAIAQgDTYCECAEIAc2AhggBEEQaiAEQRhqEJUDIQ8jAEEgayICJAAgAiANNgIQIAIgBzYCGAJAIA9BAkgNACACIAJBGGogD0ECa0EBdiIHEOsBNgIIIAIoAgggAkEQahDKASgCABCjAkUNACACIAIoAhApAgA3AwADQAJAIAIoAhAgAigCCCkCADcCACACIAIoAgg2AhAgB0UNACACIAJBGGogB0EBa0ECbSIHEOsBNgIIIAIoAgggAhCjAg0BCwsgAigCECACKQIANwIACyACQSBqJAAgBEEgaiQACyAFQQFqIQUMAAsACwUgCiAFEDMoAgBBBGogAxCOAyECIAlBCGogCiAFEDMoAgAgAhDnARogBiAFEEMgCSkDCDcCACACIAQgAiAESSICGyEEIAUgCCACGyEIIAVBAWohBQwBCwtB4KkEQZfJARApQYSOARApQbPSABApQZsBECxBt9gAEClBmsoBECkQLRAAAAsgBhDwBSAJQSBqJABBACECA0AgDBA8IAJNBEACQCAAKAJkIAAoAmhODQAgARDSBQ0AIAEoAgAoAgAhAiABENUFIAAgACgCZEEBajYCZCAAIAEgAiADEN4DCyAMEHkFIAAgASAMIAIQMygCACADEN4DIAJBAWohAgwBCwsLIAtBIGokAAtZAQF9IAAgAioCCCACKgIAIAOUIAIqAgQgBJSSkiACKgIgIAIqAhggA5QgAioCHCAElJKSIgWVOAIAIAEgAioCFCACKgIMIAOUIAIqAhAgBJSSkiAFlTgCAAtUAQF/IAAQngIgAQRAIAAQ/QMgAUkEQBCHAQALIAAQKxogACABEKoGIgI2AgAgACACNgIEIAAQKyACIAFBAnRqNgIAIABBABCaAyAAIAEQnAMLIAALCwAgACABQSQQNxoLCgAgASAAa0EMbQtgAgN/AXwgACgCBCICIAEoAgRGBEAgAkEAIAJBAEobIQIDQCACIANGRQRAIAUgA0EDdCIEIAAoAgBqKwMAIAEoAgAgBGorAwCioCEFIANBAWohAwwBCwsgBQ8LQQAQAQALWwECfyACQQAgAkEAShshAgNAIAIgBEcEQCAAIARBAnRqAn8gAyADKAIAQf2HDWxBw72aAWoiBTYCACAA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gNAAaiAKNgIAIAAhBQwECyACQQA7AQAMAwsgAkEEaiECIApBAWohCiAIIAxqQQRqIQwMBQsgByADQRB0QRB1QRxsaiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgAgACgCACAKajYCAAwBCyAHIANBEHRBEHVBHGxqIgBBjIDQAGogCjYCACAAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgAgACgCACAKajYCAAsgAkECaiECIAxBAmohDCAEQQFqIQQMAAsACwsgBUEAIAVBAEobIgNBAWohBUEBIQBBASECA0AgACAFRwRAAkAgACABKAIAIgRGBEAgAiIEQQFqIQIMAQsgBEECdCAHakGMgMgAaigCACEECyABIAQ2AgAgAUEEaiEBIABBAWohAAwBCwsgByACQQFrIgA2AghBACAARQ0BGkEAIQQgB0EMakEAIABBAnQQMhogB0GQgChqQQAgAEEEdBAyGiAAQQAgAEEAShshBSAHQYyACGohAUEAIQADQCAAIAVGBEAgB0GQgChqIQEDQCADIARGBEBBACEDIAcoAggiAEEAIABBAEobIQIgB0GQgChqIQFBACEAA0AgACACRg0FIAEgAEEEdCIEaiIFIAUrAwAgByAAQQJ0aigCDLciFqM5AwAgASAEQQhyaiIEIAQrAwAgFqM5AwAgAEEBaiEADAALAAsgByAHIARBAnRqQZCAyABqKAIAQQFrIgJBAnQiBWoiACAAKAIMIAcgBEEHbEECdGoiAEGQgNAAaigCAGo2AgwgASACQQR0IgJqIgYgBisDACAAQZSA0ABqKAIAt6A5AwAgASACQQhyaiIGIAYrAwAgAEGYgNAAaigCALegOQMAIABBnIDQAGooAgAiBiACIAdqQYyACGoiAigCAEgEQCACIAY2AgALIABBoIDQAGooAgAiBiAHIAVBAnQiAkEEcmpBjIAIaiIFKAIASgRAIAUgBjYCAAsgAEGkgNAAaigCACIFIAcgAkEIcmpBjIAIaiIGKAIASARAIAYgBTYCAAsgAEGogNAAaigCACIAIAcgAkEMcmpBjIAIaiICKAIASgRAIAIgADYCAAsgBEEBaiEEDAALAAUgASAAQQR0IgJqIAs2AgAgASACQQRyakEANgIAIAEgAkEIcmogDTYCACABIAJBDHJqQQA2AgAgAEEBaiEADAELAAsACyADCw8LIAgEQAJ/IAAhBUEAIQAgASIGQQAgAUEAShshCiAHKAIAIgMgASACIg9BAWsiAWxBAXRqIQQgAyECA0AgACAKRwRAIARBADsBACACQQA7AQAgAEEBaiEAIAJBAmohAiAEQQJqIQQMAQsLIA9BACAPQQBKGyEJIAMgBkEBayIKQQF0aiEEQQAhACADIQIDQCAAIAlHBEAgBEEAOwEAIAJBADsBACAAQQFqIQAgBCAGQQF0IgtqIQQgAiALaiECDAELCyABQQEgAUEBShshEiAHQZCAyABqIQEgCCAGQQFqIgBqIQwgACAFaiELIApBASAKQQFKGyITQQFrIQ0gAyAAQQF0aiECQQAgBmtBAXQhFEEAIQVBASEKAkADQCAKIBJHBEAgCyANaiEQIAwgDWohDkEBIQQDQAJAAkACQCAEIBNHBEAgCy0AACAMLQAASwRAIAIgFGoiAC8BACIDQRB0QRB1IghBAU4EQCACIAg7AQAgByADQRxsaiIAQYyA0ABqIAo2AgAgAEH0/88AaiIDIAMoAgBBAWo2AgAgAEH4/88AaiIDIAMoAgAgBGo2AgAgAEH8/88AaiIAIAAoAgAgCmo2AgAMBQsgAEECay8BACIIQRB0QRB1IQMgAC4BAiIAQQFOBEAgA0EBTgRAIAdBkIDIAGoiCSAAQQJ0akEEaygCACIDIAhBAnQgCWpBBGsoAgAiCEoEQCACIAg7AQBBACEJIAVBACAFQQBKGyERIAEhAANAIAkgEUYEQCAIIQMMCAsgAyAAKAIARgRAIAAgCDYCAAsgCUEBaiEJIABBBGohAAwACwALIAIgAzsBACADIAhODQVBACEJIAVBACAFQQBKGyERIAEhAANAIAkgEUYNBiAIIAAoAgBGBEAgACADNgIACyAJQQFqIQkgAEEEaiEADAALAAsgAkECay4BACIIQQFOBEAgB0GQgMgAaiIJIABBAnRqQQRrKAIAIgMgCEH//wNxQQJ0IAlqQQRrKAIAIghKBEAgAiAIOwEAQQAhCSAFQQAgBUEAShshESABIQADQCAJIBFGBEAgCCEDDAcLIAMgACgCAEYEQCAAIAg2AgALIAlBAWohCSAAQQRqIQAMAAsACyACIAM7AQAgAyAITg0EQQAhCSAFQQAgBUEAShshESABIQADQCAJIBFGDQUgCCAAKAIARgRAIAAgAzYCAAsgCUEBaiEJIABBBGohAAwACwALIAIgADsBACAHIABBB2xBAnRqIgBB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiAyADKAIAIApqNgIAIAQgAEGAgNAAaiIDKAIASARAIAMgBDYCAAsgAEGMgNAAaiAKNgIADAULIANBAU4EQCACIAM7AQAgByAIQQdsQQJ0aiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgMgAygCACAKajYCACAEIABBhIDQAGoiAygCAEoEQCADIAQ2AgALIABBjIDQAGogCjYCAAwFCyACQQJrLwEAIgBBEHRBEHUiA0EBTgRAIAIgAzsBACAHIABBHGxqIgBB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiAyADKAIAIApqNgIAIABBhIDQAGoiACgCACAETg0FIAAgBDYCAAwFCyAFQYCAAk4EQEEAQQNBoAlBABAvQX8hCwwJCyACIAVBAWoiADsBACAHIAVBAnRqQZCAyABqIABBEHRBEHU2AgAgByAFQRxsaiIDQZSA0ABqIAQ2AgAgA0GQgNAAakEBNgIAIANBmIDQAGogCjYCACADQZyA0ABqIAQ2AgAgA0GggNAAaiAENgIAIANBpIDQAGogCjYCACADQaiA0ABqIAo2AgAgACEFDAQLIAJBADsBAAwDCyACQQRqIQIgDkECaiEMIBBBAmohCyAKQQFqIQoMBQsgByADQRB0QRB1QRxsaiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgAgACgCACAKajYCAAwBCyAHIANBEHRBEHVBHGxqIgBBjIDQAGogCjYCACAAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgAgACgCACAKajYCAAsgAkECaiECIAxBAWohDCALQQFqIQsgBEEBaiEEDAALAAsLIAVBACAFQQBKGyIDQQFqIQVBASEAQQEhAgNAIAAgBUcEQAJAIAAgASgCACIERgRAIAIiBEEBaiECDAELIARBAnQgB2pBjIDIAGooAgAhBAsgASAENgIAIAFBBGohASAAQQFqIQAMAQsLIAcgAkEBayIANgIIQQAgAEUNARpBACEEIAdBDGpBACAAQQJ0EDIaIAdBkIAoakEAIABBBHQQMhogAEEAIABBAEobIQUgB0GMgAhqIQFBACEAA0AgACAFRgRAIAdBkIAoaiEBA0AgAyAERgRAQQAhCyAHKAIIIgBBACAAQQBKGyECIAdBkIAoaiEBQQAhAANAIAAgAkYNBSABIABBBHQiA2oiBCAEKwMAIAcgAEECdGooAgy3IhajOQMAIAEgA0EIcmoiAyADKwMAIBajOQMAIABBAWohAAwACwALIAcgByAEQQJ0akGQgMgAaigCAEEBayICQQJ0IgVqIgAgACgCDCAHIARBB2xBAnRqIgBBkIDQAGooAgBqNgIMIAEgAkEEdCICaiIGIAYrAwAgAEGUgNAAaigCALegOQMAIAEgAkEIcmoiBiAGKwMAIABBmIDQAGooAgC3oDkDACAAQZyA0ABqKAIAIgYgAiAHakGMgAhqIgIoAgBIBEAgAiAGNgIACyAAQaCA0ABqKAIAIgYgByAFQQJ0IgJBBHJqQYyACGoiBSgCAEoEQCAFIAY2AgALIABBpIDQAGooAgAiBSAHIAJBCHJqQYyACGoiBigCAEgEQCAGIAU2AgALIABBqIDQAGooAgAiACAHIAJBDHJqQYyACGoiAigCAEoEQCACIAA2AgALIARBAWohBAwACwAFIAEgAEEEdCICaiAGNgIAIAEgAkEEcmpBADYCACABIAJBCHJqIA82AgAgASACQQxyakEANgIAIABBAWohAAwBCwALAAsgCwsPCyAGRQRAAn8gACEIIAUhCkEAIQAgASIGQQAgAUEAShshBSAHKAIAIgMgASACIg9BAWsiAWxBAXRqIQQgAyECA0AgACAFRwRAIARBADsBACACQQA7AQAgAEEBaiEAIAJBAmohAiAEQQJqIQQMAQsLIA9BACAPQQBKGyEJIAMgBkEBayIFQQF0aiEEQQAhACADIQIDQCAAIAlHBEAgBEEAOwEAIAJBADsBACAAQQFqIQAgBCAGQQF0IgtqIQQgAiALaiECDAELCyABQQEgAUEBShshDSAHQZCAyABqIQEgCCAGQQFqIgBqIQwgBUEBIAVBAUobIhJBAWshEyADIABBAXRqIQJBACAGa0EBdCEUQQAhBUEBIQkCQANAIAkgDUcEQCAMIBNqIRBBASEEA0ACQAJAAkAgBCASRwRAIAogDC0AAEgEQCACIBRqIgAvAQAiA0EQdEEQdSIIQQFOBEAgAiAIOwEAIAcgA0EcbGoiAEGMgNAAaiAJNgIAIABB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiACAAKAIAIAlqNgIADAULIABBAmsvAQAiCEEQdEEQdSEDIAAuAQIiAEEBTgRAIANBAU4EQCAHQZCAyABqIgsgAEECdGpBBGsoAgAiAyAIQQJ0IAtqQQRrKAIAIghKBEAgAiAIOwEAQQAhCyAFQQAgBUEAShshDiABIQADQCALIA5GBEAgCCEDDAgLIAMgACgCAEYEQCAAIAg2AgALIAtBAWohCyAAQQRqIQAMAAsACyACIAM7AQAgAyAITg0FQQAhCyAFQQAgBUEAShshDiABIQADQCALIA5GDQYgCCAAKAIARgRAIAAgAzYCAAsgC0EBaiELIABBBGohAAwACwALIAJBAmsuAQAiCEEBTgRAIAdBkIDIAGoiCyAAQQJ0akEEaygCACIDIAhB//8DcUECdCALakEEaygCACIISgRAIAIgCDsBAEEAIQsgBUEAIAVBAEobIQ4gASEAA0AgCyAORgRAIAghAwwHCyADIAAoAgBGBEAgACAINgIACyALQQFqIQsgAEEEaiEADAALAAsgAiADOwEAIAMgCE4NBEEAIQsgBUEAIAVBAEobIQ4gASEAA0AgCyAORg0FIAggACgCAEYEQCAAIAM2AgALIAtBAWohCyAAQQRqIQAMAAsACyACIAA7AQAgByAAQQdsQQJ0aiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgMgAygCACAJajYCACAEIABBgIDQAGoiAygCAEgEQCADIAQ2AgALIABBjIDQAGogCTYCAAwFCyADQQFOBEAgAiADOwEAIAcgCEEHbEECdGoiAEH0/88AaiIDIAMoAgBBAWo2AgAgAEH4/88AaiIDIAMoAgAgBGo2AgAgAEH8/88AaiIDIAMoAgAgCWo2AgAgBCAAQYSA0ABqIgMoAgBKBEAgAyAENgIACyAAQYyA0ABqIAk2AgAMBQsgAkECay8BACIAQRB0QRB1IgNBAU4EQCACIAM7AQAgByAAQRxsaiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgMgAygCACAJajYCACAAQYSA0ABqIgAoAgAgBE4NBSAAIAQ2AgAMBQsgBUGAgAJOBEBBAEEDQYAJQQAQL0F/IQMMCQsgAiAFQQFqIgA7AQAgByAFQQJ0akGQgMgAaiAAQRB0QRB1NgIAIAcgBUEcbGoiA0GUgNAAaiAENgIAIANBkIDQAGpBATYCACADQZiA0ABqIAk2AgAgA0GcgNAAaiAENgIAIANBoIDQAGogBDYCACADQaSA0ABqIAk2AgAgA0GogNAAaiAJNgIAIAAhBQwECyACQQA7AQAMAwsgAkEEaiECIBBBAmohDCAJQQFqIQkMBQsgByADQRB0QRB1QRxsaiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgAgACgCACAJajYCAAwBCyAHIANBEHRBEHVBHGxqIgBBjIDQAGogCTYCACAAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgAgACgCACAJajYCAAsgAkECaiECIAxBAWohDCAEQQFqIQQMAAsACwsgBUEAIAVBAEobIgNBAWohBUEBIQBBASECA0AgACAFRwRAAkAgACABKAIAIgRGBEAgAiIEQQFqIQIMAQsgBEECdCAHakGMgMgAaigCACEECyABIAQ2AgAgAUEEaiEBIABBAWohAAwBCwsgByACQQFrIgA2AghBACAARQ0BGkEAIQQgB0EMakEAIABBAnQQMhogB0GQgChqQQAgAEEEdBAyGiAAQQAgAEEAShshBSAHQYyACGohAUEAIQADQCAAIAVGBEAgB0GQgChqIQEDQCADIARGBEBBACEDIAcoAggiAEEAIABBAEobIQIgB0GQgChqIQFBACEAA0AgACACRg0FIAEgAEEEdCIEaiIFIAUrAwAgByAAQQJ0aigCDLciFqM5AwAgASAEQQhyaiIEIAQrAwAgFqM5AwAgAEEBaiEADAALAAsgByAHIARBAnRqQZCAyABqKAIAQQFrIgJBAnQiBWoiACAAKAIMIAcgBEEHbEECdGoiAEGQgNAAaigCAGo2AgwgASACQQR0IgJqIgYgBisDACAAQZSA0ABqKAIAt6A5AwAgASACQQhyaiIGIAYrAwAgAEGYgNAAaigCALegOQMAIABBnIDQAGooAgAiBiACIAdqQYyACGoiAigCAEgEQCACIAY2AgALIABBoIDQAGooAgAiBiAHIAVBAnQiAkEEcmpBjIAIaiIFKAIASgRAIAUgBjYCAAsgAEGkgNAAaigCACIFIAcgAkEIcmpBjIAIaiIGKAIASARAIAYgBTYCAAsgAEGogNAAaigCACIAIAcgAkEMcmpBjIAIaiICKAIASgRAIAIgADYCAAsgBEEBaiEEDAALAAUgASAAQQR0IgJqIAY2AgAgASACQQRyakEANgIAIAEgAkEIcmogDzYCACABIAJBDHJqQQA2AgAgAEEBaiEADAELAAsACyADCw8LAn8gACEGIAUhDyABIghBAm0iC0EAIAtBAEobIQUgBygCACIDIAJBAm0iDUEBayIBIAtsQQF0aiEEQQAhACADIQIDQCAAIAVHBEAgBEEAOwEAIAJBADsBACAAQQFqIQAgAkECaiECIARBAmohBAwBCwsgDUEAIA1BAEobIQogAyALQQFrIgVBAXRqIQRBACEAIAMhAgNAIAAgCkcEQCAEQQA7AQAgAkEAOwEAIABBAWohACAEIAtBAXQiCWohBCACIAlqIQIMAQsLIAFBASABQQFKGyESIAVBASAFQQFKGyETIAdBkIDIAGohASAIQQF0IAZqQQJqIQwgC0EBdCADakECaiECQQAgC2tBAXQhFEEAIQVBASEKAkADQCAKIBJHBEBBASEEA0ACQAJAAkAgBCATRwRAIA8gDC0AAEgEQCACIBRqIgAvAQAiA0EQdEEQdSIGQQFOBEAgAiAGOwEAIAcgA0EcbGoiAEGMgNAAaiAKNgIAIABB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiACAAKAIAIApqNgIADAULIABBAmsvAQAiBkEQdEEQdSEDIAAuAQIiAEEBTgRAIANBAU4EQCAHQZCAyABqIgkgAEECdGpBBGsoAgAiAyAGQQJ0IAlqQQRrKAIAIgZKBEAgAiAGOwEAQQAhCSAFQQAgBUEAShshECABIQADQCAJIBBGBEAgBiEDDAgLIAMgACgCAEYEQCAAIAY2AgALIAlBAWohCSAAQQRqIQAMAAsACyACIAM7AQAgAyAGTg0FQQAhCSAFQQAgBUEAShshECABIQADQCAJIBBGDQYgBiAAKAIARgRAIAAgAzYCAAsgCUEBaiEJIABBBGohAAwACwALIAJBAmsuAQAiBkEBTgRAIAdBkIDIAGoiCSAAQQJ0akEEaygCACIDIAZB//8DcUECdCAJakEEaygCACIGSgRAIAIgBjsBAEEAIQkgBUEAIAVBAEobIRAgASEAA0AgCSAQRgRAIAYhAwwHCyADIAAoAgBGBEAgACAGNgIACyAJQQFqIQkgAEEEaiEADAALAAsgAiADOwEAIAMgBk4NBEEAIQkgBUEAIAVBAEobIRAgASEAA0AgCSAQRg0FIAYgACgCAEYEQCAAIAM2AgALIAlBAWohCSAAQQRqIQAMAAsACyACIAA7AQAgByAAQQdsQQJ0aiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgMgAygCACAKajYCACAEIABBgIDQAGoiAygCAEgEQCADIAQ2AgALIABBjIDQAGogCjYCAAwFCyADQQFOBEAgAiADOwEAIAcgBkEHbEECdGoiAEH0/88AaiIDIAMoAgBBAWo2AgAgAEH4/88AaiIDIAMoAgAgBGo2AgAgAEH8/88AaiIDIAMoAgAgCmo2AgAgBCAAQYSA0ABqIgMoAgBKBEAgAyAENgIACyAAQYyA0ABqIAo2AgAMBQsgAkECay8BACIAQRB0QRB1IgNBAU4EQCACIAM7AQAgByAAQRxsaiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgMgAygCACAKajYCACAAQYSA0ABqIgAoAgAgBE4NBSAAIAQ2AgAMBQsgBUGAgAJOBEBBAEEDQeAIQQAQL0F/IQMMCQsgAiAFQQFqIgA7AQAgByAFQQJ0akGQgMgAaiAAQRB0QRB1NgIAIAcgBUEcbGoiA0GUgNAAaiAENgIAIANBkIDQAGpBATYCACADQZiA0ABqIAo2AgAgA0GcgNAAaiAENgIAIANBoIDQAGogBDYCACADQaSA0ABqIAo2AgAgA0GogNAAaiAKNgIAIAAhBQwECyACQQA7AQAMAwsgAkEEaiECIApBAWohCiAIIAxqQQRqIQwMBQsgByADQRB0QRB1QRxsaiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgAgACgCACAKajYCAAwBCyAHIANBEHRBEHVBHGxqIgBBjIDQAGogCjYCACAAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgAgACgCACAKajYCAAsgAkECaiECIAxBAmohDCAEQQFqIQQMAAsACwsgBUEAIAVBAEobIgNBAWohBUEBIQBBASECA0AgACAFRwRAAkAgACABKAIAIgRGBEAgAiIEQQFqIQIMAQsgBEECdCAHakGMgMgAaigCACEECyABIAQ2AgAgAUEEaiEBIABBAWohAAwBCwsgByACQQFrIgA2AghBACAARQ0BGkEAIQQgB0EMakEAIABBAnQQMhogB0GQgChqQQAgAEEEdBAyGiAAQQAgAEEAShshBSAHQYyACGohAUEAIQADQCAAIAVGBEAgB0GQgChqIQEDQCADIARGBEBBACEDIAcoAggiAEEAIABBAEobIQIgB0GQgChqIQFBACEAA0AgACACRg0FIAEgAEEEdCIEaiIFIAUrAwAgByAAQQJ0aigCDLciFqM5AwAgASAEQQhyaiIEIAQrAwAgFqM5AwAgAEEBaiEADAALAAsgByAHIARBAnRqQZCAyABqKAIAQQFrIgJBAnQiBWoiACAAKAIMIAcgBEEHbEECdGoiAEGQgNAAaigCAGo2AgwgASACQQR0IgJqIgYgBisDACAAQZSA0ABqKAIAt6A5AwAgASACQQhyaiIGIAYrAwAgAEGYgNAAaigCALegOQMAIABBnIDQAGooAgAiBiACIAdqQYyACGoiAigCAEgEQCACIAY2AgALIABBoIDQAGooAgAiBiAHIAVBAnQiAkEEcmpBjIAIaiIFKAIASgRAIAUgBjYCAAsgAEGkgNAAaigCACIFIAcgAkEIcmpBjIAIaiIGKAIASARAIAYgBTYCAAsgAEGogNAAaigCACIAIAcgAkEMcmpBjIAIaiICKAIASgRAIAIgADYCAAsgBEEBaiEEDAALAAUgASAA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CQsgAiAFQQFqIgA7AQAgByAFQQJ0akGQgMgAaiAAQRB0QRB1NgIAIAcgBUEcbGoiA0GUgNAAaiAENgIAIANBkIDQAGpBATYCACADQZiA0ABqIAo2AgAgA0GcgNAAaiAENgIAIANBoIDQAGogBDYCACADQaSA0ABqIAo2AgAgA0GogNAAaiAKNgIAIAAhBQwECyACQQA7AQAgDUEAOgAADAMLIA1BAmohDSACQQRqIQIgCkEBaiEKIAggC2pBBGohCwwFCyAHIANBEHRBEHVBHGxqIgBB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiACAAKAIAIApqNgIADAELIAcgA0EQdEEQdUEcbGoiAEGMgNAAaiAKNgIAIABB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiACAAKAIAIApqNgIACyANQQFqIQ0gAkECaiECIAtBAmohCyAEQQFqIQQMAAsACwsgBUEAIAVBAEobIgNBAWohBUEBIQBBASECA0AgACAFRwRAAkAgACABKAIAIgRGBEAgAiIEQQFqIQIMAQsgBEECdCAHakGMgMgAaigCACEECyABIAQ2AgAgAUEEaiEBIABBAWohAAwBCwsgByACQQFrIgA2AghBACAARQ0BGkEAIQQgB0EMakEAIABBAnQQMhogB0GQgChqQQAgAEEEdBAyGiAAQQAgAEEAShshBSAHQYyACGohAUEAIQADQCAAIAVGBEAgB0GQgChqIQEDQCADIARGBEBBACELIAcoAggiAEEAIABBAEobIQIgB0GQgChqIQFBACEAA0AgACACRg0FIAEgAEEEdCIDaiIEIAQrAwAgByAAQQJ0aigCDLciFqM5AwAgASADQQhyaiIDIAMrAwAgFqM5AwAgAEEBaiEADAALAAsgByAHIARBAnRqQZCAyABqKAIAQQFrIgJBAnQiBWoiACAAKAIMIAcgBEEHbEECdGoiAEGQgNAAaigCAGo2AgwgASACQQR0IgJqIgYgBisDACAAQZSA0ABqKAIAt6A5AwAgASACQQhyaiIGIAYrAwAgAEGYgNAAaigCALegOQMAIABBnIDQAGooAgAiBiACIAdqQYyACGoiAigCAEgEQCACIAY2AgALIABBoIDQAGooAgAiBiAHIAVBAnQiAkEEcmpBjIAIaiIFKAIASgRAIAUgBjYCAAsgAEGkgNAAaigCACIFIAcgAkEIcmpBjIAIaiIGKAIASARAIAYgBTYCAAsgAEGogNAAaigCACIAIAcgAkEMcmpBjIAIaiICKAIASgRAIAIgADYCAAsgBEEBaiEEDAALAAUgASAAQQR0IgJqIAw2AgAgASACQQRyakEANgIAIAEgAkEIcmogEjYCACABIAJBDHJqQQA2AgAgAEEBaiEADAELAAsACyALCw8LIAgEQAJ/IAAhBUEAIQAgASIGQQAgAUEAShshCiAHKAIAIgMgASACIg9BAWsiAWxBAXRqIQQgAyECA0AgACAKRwRAIARBADsBACACQQA7AQAgAEEBaiEAIAJBAmohAiAEQQJqIQQMAQsLIA9BACAPQQBKGyEJIAMgBkEBayIKQQF0aiEEQQAhACADIQIDQCAAIAlHBEAgBEEAOwEAIAJBADsBACAAQQFqIQAgBCAGQQF0IgtqIQQgAiALaiECDAELCyABQQEgAUEBShshEyAHQZCAyABqIQEgCCAGQQFqIgBqIQ0gACAFaiELIAcoAgQgAGohDCAKQQEgCkEBShsiFEEBayESIAMgAEEBdGohAkEAIAZrQQF0IRBBACEFQQEhCgJAA0AgCiATRwRAIAsgEmohDiANIBJqIRFBASEEA0ACQAJAAkAgBCAURwRAIAstAAAgDS0AAEsEQCAMQf8BOgAAIAIgEGoiAC8BACIDQRB0QRB1IghBAU4EQCACIAg7AQAgByADQRxsaiIAQYyA0ABqIAo2AgAgAEH0/88AaiIDIAMoAgBBAWo2AgAgAEH4/88AaiIDIAMoAgAgBGo2AgAgAEH8/88AaiIAIAAoAgAgCmo2AgAMBQsgAEECay8BACIIQRB0QRB1IQMgAC4BAiIAQQFOBEAgA0EBTgRAIAdBkIDIAGoiCSAAQQJ0akEEaygCACIDIAhBAnQgCWpBBGsoAgAiCEoEQCACIAg7AQBBACEJIAVBACAFQQBKGyEVIAEhAANAIAkgFUYEQCAIIQMMCAsgAyAAKAIARgRAIAAgCDYCAAsgCUEBaiEJIABBBGohAAwACwALIAIgAzsBACADIAhODQVBACEJIAVBACAFQQBKGyEVIAEhAANAIAkgFUYNBiAIIAAoAgBGBEAgACADNgIACyAJQQFqIQkgAEEEaiEADAALAAsgAkECay4BACIIQQFOBEAgB0GQgMgAaiIJIABBAnRqQQRrKAIAIgMgCEH//wNxQQJ0IAlqQQRrKAIAIghKBEAgAiAIOwEAQQAhCSAFQQAgBUEAShshFSABIQADQCAJIBVGBEAgCCEDDAcLIAMgACgCAEYEQCAAIAg2AgALIAlBAWohCSAAQQRqIQAMAAsACyACIAM7AQAgAyAITg0EQQAhCSAFQQAgBUEAShshFSABIQADQCAJIBVGDQUgCCAAKAIARgRAIAAgAzYCAAsgCUEBaiEJIABBBGohAAwACwALIAIgADsBACAHIABBB2xBAnRqIgBB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiAyADKAIAIApqNgIAIAQgAEGAgNAAaiIDKAIASARAIAMgBDYCAAsgAEGMgNAAaiAKNgIADAULIANBAU4EQCACIAM7AQAgByAIQQdsQQJ0aiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgMgAygCACAKajYCACAEIABBhIDQAGoiAygCAEoEQCADIAQ2AgALIABBjIDQAGogCjYCAAwFCyACQQJrLwEAIgBBEHRBEHUiA0EBTgRAIAIgAzsBACAHIABBHGxqIgBB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiAyADKAIAIApqNgIAIABBhIDQAGoiACgCACAETg0FIAAgBDYCAAwFCyAFQYCAAk4EQEEAQQNB4ApBABAvQX8hCwwJCyACIAVBAWoiADsBACAHIAVBAnRqQZCAyABqIABBEHRBEHU2AgAgByAFQRxsaiIDQZSA0ABqIAQ2AgAgA0GQgNAAakEBNgIAIANBmIDQAGogCjYCACADQZyA0ABqIAQ2AgAgA0GggNAAaiAENgIAIANBpIDQAGogCjYCACADQaiA0ABqIAo2AgAgACEFDAQLIAJBADsBACAMQQA6AAAMAwsgDEECaiEMIAJBBGohAiARQQJqIQ0gDkECaiELIApBAWohCgwFCyAHIANBEHRBEHVBHGxqIgBB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiACAAKAIAIApqNgIADAELIAcgA0EQdEEQdUEcbGoiAEGMgNAAaiAKNgIAIABB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiACAAKAIAIApqNgIACyAMQQFqIQwgAkECaiECIA1BAWohDSALQQFqIQsgBEEBaiEEDAALAAsLIAVBACAFQQBKGyIDQQFqIQVBASEAQQEhAgNAIAAgBUcEQAJAIAAgASgCACIERgRAIAIiBEEBaiECDAELIARBAnQgB2pBjIDIAGooAgAhBAsgASAENgIAIAFBBGohASAAQQFqIQAMAQsLIAcgAkEBayIANgIIQQAgAEUNARpBACEEIAdBDGpBACAAQQJ0EDIaIAdBkIAoakEAIABBBHQQMhogAEEAIABBAEobIQUgB0GMgAhqIQFBACEAA0AgACAFRgRAIAdBkIAoaiEBA0AgAyAERgRAQQAhCyAHKAIIIgBBACAAQQBKGyECIAdBkIAoaiEBQQAhAANAIAAgAkYNBSABIABBBHQiA2oiBCAEKwMAIAcgAEECdGooAgy3IhajOQMAIAEgA0EIcmoiAyADKwMAIBajOQMAIABBAWohAAwACwALIAcgByAEQQJ0akGQgMgAaigCAEEBayICQQJ0IgVqIgAgACgCDCAHIARBB2xBAnRqIgBBkIDQAGooAgBqNgIMIAEgAkEEdCICaiIGIAYrAwAgAEGUgNAAaigCALegOQMAIAEgAkEIcmoiBiAGKwMAIABBmIDQAGooAgC3oDkDACAAQZyA0ABqKAIAIgYgAiAHakGMgAhqIgIoAgBIBEAgAiAGNgIACyAAQaCA0ABqKAIAIgYgByAFQQJ0IgJBBHJqQYyACGoiBSgCAEoEQCAFIAY2AgALIABBpIDQAGooAgAiBSAHIAJBCHJqQYyACGoiBigCAEgEQCAGIAU2AgALIABBqIDQAGooAgAiACAHIAJBDHJqQYyACGoiAigCAEoEQCACIAA2AgALIARBAWohBAwACwAFIAEgAEEEdCICaiAGNgIAIAEgAkEEcmpBADYCACABIAJBCHJqIA82AgAgASACQQxyakEANgIAIABBAWohAAwBCwALAAsgCwsPCyAGRQRAAn8gACEIIAUhCkEAIQAgASIGQQAgAUEAShshBSAHKAIAIgMgASACIg9BAWsiAWxBAXRqIQQgAyECA0AgACAFRwRAIARBADsBACACQQA7AQAgAEEBaiEAIAJBAmohAiAEQQJqIQQMAQsLIA9BACAPQQBKGyEJIAMgBkEBayIFQQF0aiEEQQAhACADIQIDQCAAIAlHBEAgBEEAOwEAIAJBADsBACAAQQFqIQAgBCAGQQF0IgtqIQQgAiALaiECDAELCyABQQEgAUEBShshEiAHQZCAyABqIQEgCCAGQQFqIgBqIQ0gBygCBCAAaiEMIAVBASAFQQFKGyITQQFrIRQgAyAAQQF0aiECQQAgBmtBAXQhEEEAIQVBASEJAkADQCAJIBJHBEAgDSAUaiEOQQEhBANAAkACQAJAIAQgE0cEQCAKIA0tAABIBEAgDEH/AToAACACIBBqIgAvAQAiA0EQdEEQdSIIQQFOBEAgAiAIOwEAIAcgA0EcbGoiAEGMgNAAaiAJNgIAIABB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiACAAKAIAIAlqNgIADAULIABBAmsvAQAiCEEQdEEQdSEDIAAuAQIiAEEBTgRAIANBAU4EQCAHQZCAyABqIgsgAEECdGpBBGsoAgAiAyAIQQJ0IAtqQQRrKAIAIghKBEAgAiAIOwEAQQAhCyAFQQAgBUEAShshESABIQADQCALIBFGBEAgCCEDDAgLIAMgACgCAEYEQCAAIAg2AgALIAtBAWohCyAAQQRqIQAMAAsACyACIAM7AQAgAyAITg0FQQAhCyAFQQAgBUEAShshESABIQADQCALIBFGDQYgCCAAKAIARgRAIAAgAzYCAAsgC0EBaiELIABBBGohAAwACwALIAJBAmsuAQAiCEEBTgRAIAdBkIDIAGoiCyAAQQJ0akEEaygCACIDIAhB//8DcUECdCALakEEaygCACIISgRAIAIgCDsBAEEAIQsgBUEAIAVBAEobIREgASEAA0AgCyARRgRAIAghAwwHCyADIAAoAgBGBEAgACAINgIACyALQQFqIQsgAEEEaiEADAALAAsgAiADOwEAIAMgCE4NBEEAIQsgBUEAIAVBAEobIREgASEAA0AgCyARRg0FIAggACgCAEYEQCAAIAM2AgALIAtBAWohCyAAQQRqIQAMAAsACyACIAA7AQAgByAAQQdsQQJ0aiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgMgAygCACAJajYCACAEIABBgIDQAGoiAygCAEgEQCADIAQ2AgALIABBjIDQAGogCTYCAAwFCyADQQFOBEAgAiADOwEAIAcgCEEHbEECdGoiAEH0/88AaiIDIAMoAgBBAWo2AgAgAEH4/88AaiIDIAMoAgAgBGo2AgAgAEH8/88AaiIDIAMoAgAgCWo2AgAgBCAAQYSA0ABqIgMoAgBKBEAgAyAENgIACyAAQYyA0ABqIAk2AgAMBQsgAkECay8BACIAQRB0QRB1IgNBAU4EQCACIAM7AQAgByAAQRxsaiIAQfT/zwBqIgMgAygCAEEBajYCACAAQfj/zwBqIgMgAygCACAEajYCACAAQfz/zwBqIgMgAygCACAJajYCACAAQYSA0ABqIgAoAgAgBE4NBSAAIAQ2AgAMBQsgBUGAgAJOBEBBAEEDQcAKQQAQL0F/IQwMCQsgAiAFQQFqIgA7AQAgByAFQQJ0akGQgMgAaiAAQRB0QRB1NgIAIAcgBUEcbGoiA0GUgNAAaiAENgIAIANBkIDQAGpBATYCACADQZiA0ABqIAk2AgAgA0GcgNAAaiAENgIAIANBoIDQAGogBDYCACADQaSA0ABqIAk2AgAgA0GogNAAaiAJNgIAIAAhBQwECyACQQA7AQAgDEEAOgAADAMLIAxBAmohDCACQQRqIQIgDkECaiENIAlBAWohCQwFCyAHIANBEHRBEHVBHGxqIgBB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiACAAKAIAIAlqNgIADAELIAcgA0EQdEEQdUEcbGoiAEGMgNAAaiAJNgIAIABB9P/PAGoiAyADKAIAQQFqNgIAIABB+P/PAGoiAyADKAIAIARqNgIAIABB/P/PAGoiACAAKAIAIAlqNgIACyAMQQFqIQwgAkECaiECIA1BAWohDSAEQQFqIQQMAAsACwsgBUEAIAVBAEobIgNBAWohBUEBIQBBASECA0AgACAFRwRAAkAgACABKAIAIgRGBEAgAiIEQQFqIQIMAQsgBEECdCAHakGMgMgAaigCACEECyABIAQ2AgAgAUEEaiEBIABBAWohAAwBCwsgByACQQFrIgA2AghBACAARQ0BGkEAIQQgB0EMakEAIABBAnQQMhogB0GQgChqQQAgAEEEdBAyGiAAQQAgAEEAShshBSAHQYyACGohAUEAIQADQCAAIAVGBEAgB0GQgChqIQEDQCADIARGBEBBACEMIAcoAggiAEEAIABBAEobIQIgB0GQgChqIQFBACEAA0AgACACRg0FIAEgAEEEdCIDaiIEIAQrAwAgByAAQQJ0aigCDLciFqM5AwAgASADQQhyaiIDIAMrAwAgFqM5AwAgAEEBaiEADAALAAsgByAHIARBAnRqQZCAyABqKAIAQQFrIgJBAnQiBWoiACAAKAIMIAcgBEEHbEECdGoiAEGQgNAAaigCAGo2AgwgASACQQR0IgJqIgYgBisDACAAQZSA0ABqKAIAt6A5AwAgASACQQhyaiIGIAYrAwAgAEGYgNAAaigCALegOQMAIABBnIDQAGooAgAiBiACIAdqQYyACGoiAigCAEgEQCACIAY2AgALIABBoIDQAGooAgAiBiAHIAVBAnQiAkEEcmpBjIAIaiIFKAIASgRAIAUgBjYCAAsgAEGkgNAAaigCACIFIAcgAkEIcmpBjIAIaiIGKAIASARAIAYgBTYCAAsgAEGogNAAaigCACIAIAcgAkEMcmpBjIAIaiICKAIASgRAIAIgADYCAAsgBEEBaiEEDAALAAUgASAAQQR0IgJqIAY2AgAgASACQQRyakEANgIAIAEgAkEIcmogDzYCACABIAJBDHJqQQA2AgAgAEEBaiEADAELAAsACyAMCw8LAn8gACEGIAUhDyABIghBAm0iDEEAIAxBAEobIQUgBygCACIDIAJBAm0iEkEBayIBIAxsQQF0aiEEQQAhACADIQIDQCAAIAVHBEAgBEEAOwEAIAJBADsBACAAQQFqIQAgAkECaiECIARBAmohBAwBCwsgEkEAIBJBAEobIQogAyAMQQFrIgVBAXRqIQRBACEAIAMhAgNAIAAgCkcEQCAEQQA7AQAgAkEAOwEAIABBAWohACAEIAxBAXQiCWohBCACIAlqIQIMAQsLIAFBASABQQFKGyETIAVBASAFQQFKGyEUIAdBkIDIAGohASAMQQFqIgAgBygCBGohDSAIQQF0IAZqQQJqIQsgAyAAQQF0aiECQQAgDGtBAXQhEEEAIQVBASEKAkADQCAK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EDogACACNgIoIAAgATYCJCAAIAEQmAI6ACwgA0EQaiQAC14BAn8jAEEQayIDJAAgABDdBCEEIAAgATYCICAAQeSTAzYCACADQQhqIAQQ9QIgA0EIahDBAyEBIANBCGoQOiAAIAI2AiggACABNgIkIAAgARCYAjoALCADQRBqJAALCgAgASAAa0ECdQt9AQN/IwBBEGsiBSQAIwBBEGsiAyQAIAAgARDEAyEBA0AgAQRAIAMgADYCDCADIAMoAgwgAUEBdiIEQQJ0ajYCDCABIARBf3NqIAQgAygCDCACEO0BIgQbIQEgAygCDEEEaiAAIAQbIQAMAQsLIANBEGokACAFQRBqJAAgAAuMAQEDf0HwngRB8J4EKAIAQQFqIgU2AgAgACAFNgIAAkAgAwRAA0AgAiAEQQN0aiIGKAIARQ0CIARBAWoiBCADRw0ACwsgACABIAIgA0EEdEEIchDkAiADQQF0IgAQ7gQhASAAEAIgAQ8LIAYgBTYCACACIARBA3RqIgAgATYCBCAAQQA2AgggAxACIAILhBECBX8LfiMAQcABayIFJAAgBEL///////8/gyESIAJC////////P4MhDCACIASFQoCAgICAgICAgH+DIREgBEIwiKdB//8BcSEHAkACQAJAIAJCMIinQf//AXEiCUEBa0H9/wFNBEAgB0EBa0H+/wFJDQELIAFQIAJC////////////AIMiCkKAgICAgIDA//8AVCAKQoCAgICAgMD//wBRG0UEQCACQoCAgICAgCCEIREMAgsgA1AgBEL///////////8AgyICQoCAgICAgMD//wBUIAJCgICAgICAwP//AFEbRQRAIARCgICAgICAIIQhESADIQEMAgsgASAKQoCAgICAgMD//wCFhFAEQCADIAJCgICAgICAwP//AIWEUARAQgAhAUKAgICAgIDg//8AIREMAwsgEUKAgICAgIDA//8AhCERQgAhAQwCCyADIAJCgICAgICAwP//AIWEUARAQgAhAQwCCyABIAqEUA0CIAIgA4RQBEAgEUKAgICAgIDA//8AhCERQgAhAQwCCyAKQv///////z9YBEAgBUGwAWogASAMIAEgDCAMUCIGG3kgBkEGdK18pyIGQQ9rEIgBQRAgBmshBiAFKQO4ASEMIAUpA7ABIQELIAJC////////P1YNACAFQaABaiADIBIgAyASIBJQIggbeSAIQQZ0rXynIghBD2sQiAEgBiAIakEQayEGIAUpA6gBIRIgBSkDoAEhAwsgBUGQAWogEkKAgICAgIDAAIQiFEIPhiADQjGIhCICQoTJ+c6/5ryC9QAgAn0iBBCzASAFQYABakIAIAUpA5gBfSAEELMBIAVB8ABqIAUpA4gBQgGGIAUpA4ABQj+IhCIEIAIQswEgBUHgAGogBEIAIAUpA3h9ELMBIAVB0ABqIAUpA2hCAYYgBSkDYEI/iIQiBCACELMBIAVBQGsgBEIAIAUpA1h9ELMBIAVBMGogBSkDSEIBhiAFKQNAQj+IhCIEIAIQswEgBUEgaiAEQgAgBSkDOH0QswEgBUEQaiAFKQMoQgGGIAUpAyBCP4iEIgQgAhCzASAFIARCACAFKQMYfRCzASAGIAkgB2tqIQYCfkIAIAUpAwhCAYYgBSkDAEI/iIRCAX0iCkL/////D4MiBCACQiCIIgt+Ig4gCkIgiCIKIAJC/////w+DIg9+fCICQiCIIAIgDlStQiCGhCAKIAt+fCACQiCGIgsgBCAPfnwiAiALVK0gAiACIAQgA0IRiEL/////D4MiDn4iDyAKIANCD4ZCgID+/w+DIg1+fCILQiCGIhAgBCANfnwgEFStIAogDn4gCyAPVK1CIIYgC0IgiIR8fHwiAlatfHwgAkIAUq18fSILQv////8PgyIOIAR+Ig8gCiAOfiINIAQgC0IgiCIQfnwiC0IghnwiDiAPVK0gCiAQfiALIA1UrUIghiALQiCIhHx8IA5CACACfSICQiCIIgsgBH4iDyACQv////8PgyINIAp+fCICQiCGIhAgBCANfnwgEFStIAogC34gAiAPVK1CIIYgAkIgiIR8fHwiAiAOVK18IAJCAn0iDyACVK18QgF9IgtC/////w+DIgIgDEIChiABQj6IhEL/////D4MiBH4iDiABQh6IQv////8PgyIKIAtCIIgiC358Ig0gDlStIA0gDSAPQiCIIg4gDEIeiEL//+//D4NCgIAQhCIMfnwiDVatfCALIAx+fCACIAx+IhMgBCALfnwiECATVK1CIIYgEEIgiIR8IA0gDSAQQiCGfCINVq18IA0gDSAKIA5+IhMgD0L/////D4MiDyAEfnwiECATVK0gECAQIAIgAUIChkL8////D4MiE358IhBWrXx8Ig1WrXwgDSALIBN+IgsgDCAPfnwiDCAEIA5+fCIEIAIgCn58IgJCIIggAiAEVK0gCyAMVq0gBCAMVK18fEIghoR8IgQgDVStfCAEIAQgECAOIBN+IgwgCiAPfnwiCkIgiCAKIAxUrUIghoR8IgogEFStIAogAkIghnwgClStfHwiBFatfCICQv////////8AWARAIAFCMYYgBEIgiCIBIANC/////w+DIgp+Ig0gBEL/////D4MiDCADQiCIIgt+fCIOQiCGIhAgCiAMfnwiDyAQVK19IA9CAFKtfSACQv////8PgyAKfiAMIBJC/////w+DfnwgASALfnwgDSAOVq1CIIYgDkIgiIR8IAQgFEIgiH4gAyACQiCIfnwgAiALfnwgASASfnxCIIZ8fSESIAZBAWshBkIAIA99DAELIARCIYghDCABQjCGIAJCP4YgBEIBiIQiBEL/////D4MiASADQiCIIgp+Ig8gDCACQh+GhCINQv////8PgyIQIANC/////w+DIgx+fCILQiCGIhMgASAMfnwiDiATVK19IA5CAFKtfSAEIBRCIIh+IAMgAkIhiH58IAJCAYgiAiAKfnwgDSASfnxCIIYgCiAQfiACQv////8PgyAMfnwgASASQv////8Pg358IAsgD1StQiCGIAtCIIiEfHx9IRJCACAOfQshASAGQYCAAU4EQCARQoCAgICAgMD//wCEIRFCACEBDAELIAZB//8AaiEHIAZBgYB/TARAAkAgBw0AIAQgAUIBhiADViASQgGGIAFCP4iEIgEgFFYgASAUURutfCIBIARUrSACQv///////z+DfCICQoCAgICAgMAAg1ANACACIBGEIREMAgtCACEBDAELIAQgAUIBhiADWiASQgGGIAFCP4iEIgEgFFogASAUURutfCIBIARUrSACQv///////z+DfCAHrUIwhnwgEYQhEQsgACABNwMAIAAgETcDCCAFQcABaiQADwsgAEIANwMAIABCgICAgICA4P//ACARIAIgA4RQGzcDCCAFQcABaiQAC7YDAgN/AX4jAEEgayIDJAACQCABQv///////////wCDIgVCgICAgICAwMA/fSAFQoCAgICAgMC/wAB9VARAIAFCGYinIQQgAFAgAUL///8PgyIFQoCAgAhUIAVCgICACFEbRQRAIARBgYCAgARq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ViADQf3/AiADQf3/AkgbQf7/AWshAyAEKQMYIQIgBCkDECEBDAELIANBgYB/Sg0AIARBQGsgASACQgBCgICAgICAwAAQViAEKQNIIQIgBCkDQCEBIANBg4B+SgRAIANB/v8AaiEDDAELIARBMGogASACQgBCgICAgICAwAAQViADQYaAfSADQYaAfUobQfz/AWohAyAEKQM4IQIgBCkDMCEBCyAEIAEgAkIAIANB//8Aaq1CMIYQViAAIAQpAwg3AwggACAEKQMANwMAIARB0ABqJAALNQAgACABNwMAIAAgAkL///////8/gyAEQjCIp0GAgAJxIAJCMIinQf//AXFyrUIwhoQ3AwgLEAAgACABIAJBAEEAEIAFGgtzAQJ/IABFBEBBAEEDQdXIAEEAEC8PCyAAKAIAIgFFBEAPCyABKAIAECpBACEBA38gACgCACICKAIMIAFMBH8gAigCCBAqIAAoAgAQKiAAQQA2AgBBAAUgAigCCCABQQxsaigCABAqIAFBAWohAQwBCwsaC1IBA38CQCAAKAIALAAAEKcBRQRADAELA0AgACgCACICLAAAIQMgACACQQFqNgIAIAEgA2pBMGshASACLAABEKcBRQ0BIAFBCmwhAQwACwALIAELuwIAAkAgAUEUSw0AAkACQAJAAkACQAJAAkACQAJAAkAgAUEJaw4KAAECAwQFBgcICQoLIAIgAigCACIBQQRqNgIAIAAgASgCADYCAA8LIAIgAigCACIBQQRqNgIAIAAgATQCADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATUCADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATIBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATMBADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATAAADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATEAADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASsDADkDAA8LIAAgAiADEQIACwv2AgEDfyMAQdABayIFJAAgBSACNgLMAUEAIQIgBUGgAWpBAEEoEDIaIAUgBSgCzAE2AsgBAkBBACABIAVByAFqIAVB0ABqIAVBoAFqIAMgBBDJA0EASARAQX8hAQwBCyAAKAJMQQBOIQIgACgCACEGIAAsAEpBAEwEQCAAIAZBX3E2AgALIAZBIHEhBwJ/IAAoAjAEQCAAIAEgBUHIAWogBUHQAGogBUGgAWogAyAEEMkDDAELIABB0AA2AjAgACAFQdAAajYCECAAIAU2AhwgACAFNgIUIAAoAiwhBiAAIAU2AiwgACABIAVByAFqIAVB0ABqIAVBoAFqIAMgBBDJAyIBIAZFDQAaIABBAEEAIAAoAiQRBAAaIABBADYCMCAAIAY2AiwgAEEANgIcIABBADYCECAAKAIUIQMgAEEANgIUIAFBfyADGwshASAAIAAoAgAiACAHcjYCAEF/IAEgAEEgcRshASACRQ0ACyAFQdABaiQAIAELfwIBfwF+IAC9IgNCNIinQf8PcSICQf8PRwR8IAJFBEAgASAARAAAAAAAAAAAYQR/QQAFIABEAAAAAAAA8EOiIAEQgQUhACABKAIAQUBqCzYCACAADwsgASACQf4HazYCACADQv////////+HgH+DQoCAgICAgIDwP4S/BSAACwsSACAARQRAQQAPCyAAIAEQ+QELNAAgACgCABogACgCACAAENgBQRRsahogACgCACAAEHdBFGxqGiAAKAIAIAAQ2AFBFGxqGguNAgEFfyABKAJMGkH/ASECIAAhBAJAA0ACfyABKAIEIgNBCiABKAIIIANrEMoDIgYEQCAGIAEoAgQiA2tBAWoMAQsgASgCCCABKAIEIgNrCyEFIAQgAyAFIAIgAiAFSxsiAxA3GiABIAEoAgQgA2oiBTYCBCADIARqIQQCQCAGDQAgAiADayIDRQ0AAkAgASgCCCAFSwRAIAEgBUEBajYCBCAFLQAAIQIMAQsgARCAAyICQX9KDQBBACECIAAgBEYNAyABLQAAQRBxRQ0DDAELIAQgAjoAACAEQQFqIQQgAkH/AXFBCkYNACADQQFrIgINAQsLIABFBEBBACECDAELIARBADoAACAAIQILIAILOgAgACgCTEEATgRAIABCAEEAEIIDIAAgACgCAEFfcTYCAA8LIABCAEEAEIIDIAAgACgCAEFfcTYCAAssACAAKAIAGiAAKAIAIAAQ1wFqGiAAKAIAIAAQhgFqGiAAKAIAIAAQ1wFqGgs5AQF+An4gACgCTEF/TARAIAAQiAUMAQsgABCIBQsiAUKAgICACFkEQEG4lQRBPTYCAEF/DwsgAacLYAIBfgJ/IAAoAighAkEBIQMgAEIAIAAtAABBgAFxBH9BAkEBIAAoAhQgACgCHEsbBUEBCyACERMAIgFCAFkEfiAAKAIUIAAoAhxrrCABIAAoAgggACgCBGusfXwFIAELC+8CAgN/A30gALwiAkH/////B3EiAUGAgIDkBEkEQAJAAn8gAUH////2A00EQCABQYCAgMwDSQ0CQX8hAUEBDAELIACLIQACfSABQf//3/wDTQRAIAFB//+/+QNNBEAgACAAkkMAAIC/kiAAQwAAAECSlSEAQQAhAUEADAMLQQEhASAAQwAAgL+SIABDAACAP5KVDAELIAFB///vgARNBEBBAiEBIABDAADAv5IgAEMAAMA/lEMAAIA/kpUMAQtBAyEBQwAAgL8gAJULIQBBAAshAyAAIACUIgUgBZQiBCAEQ0cS2r2UQ5jKTL6SlCEGIAUgBCAEQyWsfD2UQw31ET6SlEOpqqo+kpQhBCADBEAgACAAIAYgBJKUkw8LIAFBAnQiAUGAhANqKgIAIAAgBiAEkpQgAUGQhANqKgIAkyAAk5MiACAAjCACQX9KGyEACyAADwsgAEPaD8k/IACYIAC8Qf////8HcUGAgID8B0sbC4YCAgN/AXwjAEEQayIDJAACQCAAvCIEQf////8HcSICQdqfpO4ETQRAIAEgALsiBSAFRIPIyW0wX+Q/okQAAAAAAAA4Q6BEAAAAAAAAOMOgIgVEAAAAUPsh+b+ioCAFRGNiGmG0EFG+oqA5AwAgBZlEAAAAAAAA4EFjBEAgBaohAgwCC0GAgICAeCECDAELIAJBgICA/AdPBEAgASAAIACTuzkDAEEAIQIMAQsgAyACIAJBF3ZBlgFrIgJBF3Rrvrs5AwggA0EIaiADIAJBAUEAEIwFIQIgAysDACEFIARBf0wEQCABIAWaOQMAQQAgAmshAgwBCyABIAU5AwALIANBEGokACACC8wJAwR8BX8BfiMAQTBrIggkAAJAAkACQCAAvSILQiCIpyIGQf////8HcSIHQfrUvYAETQRAIAZB//8/cUH7wyRGDQEgB0H8souABE0EQCALQgBZBEAgASAARAAAQFT7Ifm/oCIARDFjYhphtNC9oCICOQMAIAEgACACoUQxY2IaYbTQvaA5AwhBASEGDAULIAEgAEQAAEBU+yH5P6AiAEQxY2IaYbTQPaAiAjkDACABIAAgAqFEMWNiGmG00D2gOQMIQX8hBgwECyALQgBZBEAgASAARAAAQFT7IQnAoCIARDFjYhphtOC9oCICOQMAIAEgACACoUQxY2IaYbTgvaA5AwhBAiEGDAQLIAEgAEQAAEBU+yEJQKAiAEQxY2IaYbTgPaAiAjkDACABIAAgAqFEMWNiGmG04D2gOQMIQX4hBgwDCyAHQbuM8YAETQRAIAdBvPvXgARNBEAgB0H8ssuABEYNAiALQgBZBEAgASAARAAAMH982RLAoCIARMqUk6eRDum9oCICOQMAIAEgACACoUTKlJOnkQ7pvaA5AwhBAyEGDAULIAEgAEQAADB/fNkSQKAiAETKlJOnkQ7pPaAiAjkDACABIAAgAqFEypSTp5EO6T2gOQMIQX0hBgwECyAHQfvD5IAERg0BIAtCAFkEQCABIABEAABAVPshGcCgIgBEMWNiGmG08L2gIgI5AwAgASAAIAKhRDFjYhphtPC9oDkDCEEEIQYMBAsgASAARAAAQFT7IRlAoCIARDFjYhphtPA9oCICOQMAIAEgACACoUQxY2IaYbTwPaA5AwhBfCEGDAMLIAdB+sPkiQRLDQELIAEgACAARIPIyW0wX+Q/okQAAAAAAAA4Q6BEAAAAAAAAOMOgIgNEAABAVPsh+b+ioCICIANEMWNiGmG00D2iIgWhIgA5AwAgB0EUdiIJIAC9QjSIp0H/D3FrQRFIIQcCfyADmUQAAAAAAADgQWMEQCADqgwBC0GAgICAeAshBgJAIAcNACABIAIgA0QAAGAaYbTQPaIiAKEiBCADRHNwAy6KGaM7oiACIAShIAChoSIFoSIAOQMAIAkgAL1CNIinQf8PcWtBMkgEQCAEIQIMAQsgASAEIANEAAAALooZozuiIgChIgIgA0TBSSAlmoN7OaIgBCACoSAAoaEiBaEiADkDAAsgASACIAChIAWhOQMIDAELIAdBgIDA/wdPBEAgASAAIAChIgA5AwAgASAAOQMIQQAhBgwBCyALQv////////8Hg0KAgICAgICAsMEAhL8hACAIQRBqIQYgCEEQakEIciEJQQEhCgNAIAYCfyAAmUQAAAAAAADgQWMEQCAAqgwBC0GAgICAeAu3IgI5AwAgACACoUQAAAAAAABwQaIhACAKBEBBACEKIAkhBgwBCwsgCCAAOQMgIAhBEGogCCAHQRR2QZYIawJ/IABEAAAAAAAAAABhBEBBASEGA0AgBiIJQQFrIQYgCEEQaiAJQQN0aisDAEQAAAAAAAAAAGENAAsgCUEBagwBC0EDC0EBEIwFIQYgCCsDACEAIAtCf1cEQCABIACaOQMAIAEgCCsDCJo5AwhBACAGayEGDAELIAEgADkDACABIAgrAwg5AwgLIAhBMGokACAGC80RAgN8D38jAEGwBGsiCSQAIAIgAkEDa0EYbSIIQQAgCEEAShsiEUFobGohDCAEQQJ0QbDtAmooAgAiDSADQQFrIgtqQQBOBEAgAyANaiEIIBEgC2shAgNAIAlBwAJqIApBA3RqIAJBAEgEfEQAAAAAAAAAAAUgAkECdEHA7QJqKAIAtws5AwAgAkEBaiECIApBAWoiCiAIRw0ACwsgDEEYayEPIA1BACANQQBKGyEKQQAhCANARAAAAAAAAAAAIQUgA0EASgRAIAggC2ohDkEAIQIDQCAFIAAgAkEDdGorAwAgCUHAAmogDiACa0EDdGorAwCioCEFIAJBAWoiAiADRw0ACwsgCSAIQQN0aiAFOQMAIAggCkYhAiAIQQFqIQggAkUNAAtBLyAMayETQTAgDGshEiAMQRlrIRQgDSEIAkADQCAJIAhBA3RqKwMAIQVBACECIAghCiAIQQFIIhBFBEADQCAJQeADaiACQQJ0agJ/IAUCfyAFRAAAAAAAAHA+oiIFmUQAAAAAAADgQWMEQCAFqgwBC0GAgICAeAu3IgVEAAAAAAAAcMGioCIGmUQAAAAAAADgQWMEQCAGqgwBC0GAgICAeAs2AgAgCSAKQQFrIgpBA3RqKwMAIAWgIQUgAkEBaiICIAhHDQALCwJ/IAUgDxDvASIFIAVEAAAAAAAAwD+inEQAAAAAAAAgwKKgIgWZRAAAAAAAAOBBYwRAIAWqDAELQYCAgIB4CyEOIAUgDrehIQUCQAJAAkACfyAPQQFIIhVFBEAgCEECdCAJaiICIAIoAtwDIgIgAiASdSICIBJ0ayIKNgLcAyACIA5qIQ4gCiATdQwBCyAPDQEgCEECdCAJaigC3ANBF3ULIgtBAUgNAgwBC0ECIQsgBUQAAAAAAADgP2YNAEEAIQsMAQsCQCAQBEBBACEKDAELQQAhAkEBIRADQCAJQeADaiACQQJ0aiIWKAIAIQoCfyAWIBAEf0EAIApFDQEaQYCAgAggCmsFQf///wcgCmsLNgIAQQELIQogAkEBaiICIAhGDQEgCkUhEAwACwALAkAgFQ0AQf///wMhAgJAAkAgFA4CAQACC0H///8BIQILIAhBAnQgCWoiECAQKALcAyACcTYC3AMLIA5BAWohDiALQQJHDQBEAAAAAAAA8D8gBaEhBUECIQsgCkUNACAFRAAAAAAAAPA/IA8Q7wGhIQULIAVEAAAAAAAAAABhBEBBACEKAkAgCCICIA1MDQADQCAJQeADaiACQQFrIgJBAnRqKAIAIApyIQogAiANSg0ACyAKRQ0AIA8hDANAIAxBGGshDCAJQeADaiAIQQFrIghBAnRqKAIARQ0ACwwDC0EBIQIDQCACIgpBAWohAiAJQeADaiANIAprQQJ0aigCAEUNAAsgCCAKaiEKA0AgCUHAAmogAyAIaiILQQN0aiAIQQFqIgggEWpBAnRBwO0CaigCALc5AwBBACECRAAAAAAAAAAAIQUgA0EBTgRAA0AgBSAAIAJBA3RqKwMAIAlBwAJqIAsgAmtBA3RqKwMAoqAhBSACQQFqIgIgA0cNAAsLIAkgCEEDdGogBTkDACAIIApIDQALIAohCAwBCwsCQCAFQRggDGsQ7wEiBUQAAAAAAABwQWYEQCAJQeADaiAIQQJ0agJ/IAUCfyAFRAAAAAAAAHA+oiIFmUQAAAAAAADgQWMEQCAFqgwBC0GAgICAeAsiArdEAAAAAAAAcMGioCIFmUQAAAAAAADgQWMEQCAFqgwBC0GAgICAeAs2AgAgCEEBaiEIDAELAn8gBZlEAAAAAAAA4EFjBEAgBaoMAQtBgICAgHgLIQIgDyEMCyAJQeADaiAIQQJ0aiACNgIAC0QAAAAAAADwPyAMEO8BIQUCQCAIQX9MDQAgCCECA0AgCSACQQN0aiAFIAlB4ANqIAJBAnRqKAIAt6I5AwAgBUQAAAAAAABwPqIhBSACQQBKIQAgAkEBayECIAANAAsgCEF/TA0AIAghAgNAIAggAiIAayEDRAAAAAAAAAAAIQVBACECA0ACQCAFIAJBA3RBkIMDaisDACAJIAAgAmpBA3RqKwMAoqAhBSACIA1ODQAgAiADSSEMIAJBAWohAiAMDQELCyAJQaABaiADQQN0aiAFOQMAIABBAWshAiAAQQBKDQALCwJAAkACQAJAAkAgBA4EAQICAAQLRAAAAAAAAAAAIQYCQCAIQQFIDQAgCUGgAWogCEEDdGorAwAhBSAIIQIDQCAJQaABaiACQQN0aiAFIAlBoAFqIAJBAWsiAEEDdGoiAysDACIHIAcgBaAiBaGgOQMAIAMgBTkDACACQQFKIQMgACECIAMNAAsgCEECSA0AIAlBoAFqIAhBA3RqKwMAIQUgCCECA0AgCUGgAWogAkEDdGogBSAJQaABaiACQQFrIgBBA3RqIgMrAwAiBiAGIAWgIgWhoDkDACADIAU5AwAgAkECSiEDIAAhAiADDQALRAAAAAAAAAAAIQYgCEEBTA0AA0AgBiAJQaABaiAIQQN0aisDAKAhBiAIQQJKIQAgCEEBayEIIAANAAsLIAkrA6ABIQUgCw0CIAEgBTkDACAJKwOoASEFIAEgBjkDECABIAU5AwgMAwtEAAAAAAAAAAAhBSAIQQBOBEADQCAFIAlBoAFqIAhBA3RqKwMAoCEFIAhBAEohACAIQQFrIQggAA0ACwsgASAFmiAFIAsbOQMADAILRAAAAAAAAAAAIQUgCEEATgRAIAghAgNAIAUgCUGgAWogAkEDdGorAwCgIQUgAkEASiEAIAJBAWshAiAADQALCyABIAWaIAUgCxs5AwAgCSsDoAEgBaEhBUEBIQIgCEEBTgRAA0AgBSAJQaABaiACQQN0aisDAKAhBSACIAhHIQAgAkEBaiECIAANAAsLIAEgBZogBSALGzkDCAwBCyABIAWaOQMAIAkrA6gBIQUgASAGmjkDECABIAWaOQMICyAJQbAEaiQAIA5BB3ELIAECfyAAEH1BAWoiARAwIgJFBEBBAA8LIAIgACABEDcL2QEBAn8CQCABQf8BcSIDBEAgAEEDcQRAA0AgAC0AACICRSACIAFB/wFxRnINAyAAQQFqIgBBA3ENAAsLAkAgACgCACICQX9zIAJBgYKECGtxQYCBgoR4cQ0AIANBgYKECGwhAwNAIAIgA3MiAkF/cyACQYGChAhrcUGAgYKEeHENASAAKAIEIQIgAEEEaiEAIAJBgYKECGsgAkF/c3FBgIGChHhxRQ0ACwsDQCAAIgItAAAiAwRAIAJBAWohACADIAFB/wFxRw0BCwsgAg8LIAAQfSAAag8LIAALtQQBBn8CQCAARQRAQbyVBCgCACIARQ0BCwJ/IAAhBEH4CyEDIwBBIGsiBUIANwMYIAVCADcDECAFQgA3AwggBUIANwMAQQBB+AstAAAiAkUNABpB+QstAAAiAUUEQCAEIQEDQCABIgNBAWohASADLQAAIAJGDQALIAMgBGsMAQsgBSACQQN2QRxxaiIGIAYoAgBBASACdHI2AgADQCABQR9xIQIgAUEDdiEGIAMtAAIhASAFIAZBHHFqIgYgBigCAEEBIAJ0cjYCACADQQFqIQMgAQ0ACwJAIAQiAi0AACIBRQ0AIAQhAwNAIAUgAUEDdkEccWooAgAgAXZBAXFFBEAgAyECDAILIAMtAAEhASADQQFqIgIhAyABDQALCyACIARrCyAAaiIDLQAARQRAQbyVBEEANgIAQQAPCwJ/IAMhAEH4CyEEIwBBIGsiBSQAAkACQEH4CywAACIBBEBB+QstAAANAQsgACABEI4FIQEMAQsgBUEAQSAQMhpB+AstAAAiAgRAA0AgBSACQQN2QRxxaiIBIAEoAgBBASACdHI2AgAgBC0AASECIARBAWohBCACDQALCyAAIgEtAAAiAkUNACAAIQQDQCAFIAJBA3ZBHHFqKAIAIAJ2QQFxBEAgBCEBDAILIAQtAAEhAiAEQQFqIgEhBCACDQALCyAFQSBqJAAgAyABIABraiIALQAACwRAQbyVBCAAQQFqNgIAIABBADoAACADDwtBvJUEQQA2AgALIAMLLAEBfyAAEIYFIAAoAgAEQCAAEN8EIAAQKxogACgCACEBIAAQ1wEaIAEQKgsLKAEBfyMAQRBrIgEkACABIAA2AgxB9NwCQQUgASgCDBAEIAFBEGokAAsoAQF/IwBBEGsiASQAIAEgADYCDEHM3AJBBCABKAIMEAQgAUEQaiQACygBAX8jAEEQayIBJAAgASAANgIMQaTcAkEDIAEoAgwQBCABQRBqJAALKAEBfyMAQRBrIgEkACABIAA2AgxB/NsCQQIgASgCDBAEIAFBEGokAAsoAQF/IwBBEGsiASQAIAEgADYCDEHU2wJBASABKAIMEAQgAUEQaiQACygBAX8jAEEQayIBJAAgASAANgIMQazbAkEAIAEoAgwQBCABQRBqJAALtwcBAX9BpPADQbjRAhAmQbDwA0G90QJBAUEBQQAQJSMAQRBrIgAkACAAQcLRAjYCDEG88AMgACgCDEEBQYB/Qf8AEAYgAEEQaiQAIwBBEGsiACQAIABBx9ECNgIMQdTwAyAAKAIMQQFBgH9B/wAQBiAAQRBqJAAjAEEQayIAJAAgAEHT0QI2AgxByPADIAAoAgxBAUEAQf8BEAYgAEEQaiQAIwBBEGsiACQAIABB4dECNgIMQeDwAyAAKAIMQQJBgIB+Qf//ARAGIABBEGokACMAQRBrIgAkACAAQefRAjYCDEHs8AMgACgCDEECQQBB//8DEAYgAEEQaiQAIwBBEGsiACQAIABB9tECNgIMQfjwAyAAKAIMQQRBgICAgHhB/////wcQBiAAQRBqJAAjAEEQayIAJAAgAEH60QI2AgxBhPEDIAAoAgxBBEEAQX8QBiAAQRBqJAAjAEEQayIAJAAgAEGH0gI2AgxBkPEDIAAoAgxBBEGAgICAeEH/////BxAGIABBEGokACMAQRBrIgAkACAAQYzSAjYCDEGc8QMgACgCDEEEQQBBfxAGIABBEGokACMAQRBrIgAkACAAQZrSAjYCDEGo8QMgACgCDEKAgICAgICAgIB/Qv///////////wAQ1gYgAEEQaiQAIwBBEGsiACQAIABBotICNgIMQbTxAyAAKAIMQgBCfxDWBiAAQRBqJAAjAEEQayIAJAAgAEGr0gI2AgxBwPEDIAAoAgxBBBARIABBEGokACMAQRBrIgAkACAAQbHSAjYCDEHM8QMgACgCDEEIEBEgAEEQaiQAQbCMAkG40gIQEkGg2AJBxNICEBJB+NgCQQRB5dICEA1B1NkCQQJB8tICEA1BsNoCQQRBgdMCEA1B3NoCQZDTAhAkIwBBEGsiACQAIABBoNMCNgIMQYTbAkEAIAAoAgwQBCAAQRBqJABBvtMCEJYFQePTAhCVBUGK1AIQlAVBqdQCEJMFQdHUAhCSBUHu1AIQkQUjAEEQayIAJAAgAEGU1QI2AgxBnN0CQQQgACgCDBAEIABBEGokACMAQRBrIgAkACAAQbLVAjYCDEHE3QJBBSAAKAIMEAQgAEEQaiQAQdnVAhCWBUH51QIQlQVBmtYCEJQFQbvWAhCTBUHd1gIQkgVB/tYCEJEFIwBBEGsiACQAIABBoNcCNgIMQezdAkEGIAAoAgwQBCAAQRBqJAAjAEEQayIAJAAgAEG/1wI2AgxBlN4CQQcgACgCDBAEIABBEGokAAsKACAAKAIAIAFqCxgAIAAoAgAiAUEzNgIUIAAgASgCABEBAAv2QwMufwd8AX4jAEEQayIpJAAgBUEAIAVBAEobITQDQCAvIDRHBEAgCyAwQQh0aiIfIAQgL0Gw8QRsaiIFKAIANgIAAkAgCSAFKwMItiAFKwMQtiApQQxqIClBCGoQ2wFBAEgNACAfICkqAgy7OQM4IB9BQGsgKSoCCLs5AwAgBUEcaiE1IAVB3LgCaiE2IAUoAhgaIAVBnPEEaiElIB9ByABqISogH0GoAWoiLiE3IwBBEGsiJyQAQQIQ5wMhFkECEOcDISFBAkECEKoBIR5BACEZAn8CQANAIBlBBEcEQAJ/ICUgGUEBaiITQQJ0aigCACIOICUgGUECdGooAgAiBWtBAWq3RJqZmZmZmak/okQAAAAAAADgP6AiPCAFt6AiPZlEAAAAAAAA4EFjBEAgPaoMAQtBgICAgHgLIQUCfyAOtyA8oSI8mUQAAAAAAADgQWMEQCA8qgwBC0GAgICAeAsgBWsiD0F/IA9Bf0obQQFqIRBBACEOIA9BAWpBAhCqASEiA0AgDiAQRwRAIAkgNSAFIA5qQQJ0Ig9qKAIAsiAPIDZqKAIAsiAnQQxqICdBCGoQ2wFBAEgNBCAiKAIAIg8gDkEEdCISaiAnKgIMuzkDACAPIBJBCHJqICcqAgi7OQMAIA5BAWohDgwBCwtBfyEUAkAgIigCBCIXQQJIDQAgIigCCCIFQQJIDQAgHigCCCAFRw0AIBcgBSAFIBdKGyIOIB4oAgRHDQAgFigCBCAORw0AICEoAgQgBUcNAAJ/ICIoAgQgIigCCBCqASIPBEBBfyESAkAgDygCBCIOICIoAgRHDQAgDygCCCIVICIoAghHDQBBACESIA5BACAOQQBKGyEYIBVBACAVQQBKGyERQQAhDgNAIA4gGEYNASAOIBVsIRpBACEQA0AgECARRwRAIBAgGmpBA3QiGyAPKAIAaiAiKAIAIBtqKwMAOQMAIBBBAWohEAwBCwsgDkEBaiEODAALAAsgDyASQX9KDQEaIA8QOwtBAAsiGEUNAEEAIQ5BACESQX8hEAJAIBgoAgQiEUEBSA0AIBgoAggiD0EBSA0AICEoAgQgD0cNAANAIA4gD0cEQCAhKAIAIA5BA3RqQgA3AwAgDkEBaiEODAELCyAYKAIAIRADQCARIBJGBEAgEbchPEEAIRBBACEOA0AgDiAPRg0DICEoAgAgDkEDdGoiEiASKwMAIDyjOQMAIA5BAWohDgwACwAFICEoAgAhDkEAIRUDQCAPIBVHBEAgDiAQKwMAIA4rAwCgOQMAIBVBAWohFSAOQQhqIQ4gEEEIaiEQDAELCyASQQFqIRIMAQsACwALAkAgEEEASA0AQX8hFQJAIBgoAggiDiAhKAIERw0AQQAhFSAOQQAgDkEAShshESAYKAIEIg5BACAOQQBKGyEaIBgoAgAhDkEAIRADQCAQIBpGDQEgISgCACEPQQAhEgNAIBEgEkcEQCAOIA4rAwAgDysDAKE5AwAgEkEBaiESIA5BCGohDiAPQQhqIQ8MAQsLIBBBAWohEAwACwALIBVBAEgNACAXt58hPEEAIQ4gBSAXbCIFQQAgBUEAShshBQNAIAUgDkcEQCAYKAIAIA5BA3RqIg8gDysDACA8ozkDACAOQQFqIQ4MAQsLAn9BACEOQQAhD0F/IRACQAJAIBgoAgQiEkECSA0AIBgoAggiBUECSA0AIB4oAgggBUcNACAFIBIgBSASSBsiGiAeKAIERw0AIBYoAgQgGkcNAAJAIBogGiAaEKoBIhcoAgRGBEAgFygCCCAaRg0BCwwCCwJAIAUgEkwiOEUEQAJAIBgoAgQiESAXKAIERw0AIBcoAgggEUcNAEEAIRQgEUEAIBFBAEobISMgGCgCCCIbQQAgG0EAShshICAXKAIAIh0hBQNAIA8gI0YNASAPIBtsIShBACEOA0ACQCAOIBFHBEAgDiAPSQRAIAUgHSAOIBFsIA9qQQN0aisDADkDAAwCCyAYKAIAIRAgBUIANwMAIBAgKEEDdGohEiAQIA4gG2xBA3RqIRVBACEQRAAAAAAAAAAAITwDQCAQICBGDQIgBSA8IBIrAwAgFSsDAKKgIjw5AwAgEEEBaiEQIBVBCGohFSASQQhqIRIMAAsACyAPQQFqIQ8MAgsgDkEBaiEOIAVBCGohBQwACwALAAsgFEF/Sg0BDAMLAkAgGCgCCCIRIBcoAgRHDQAgFygCCCARRw0AQQAhECARQQAgEUEAShshGyAYKAIEIgVBACAFQQBKGyEjIBcoAgAiICEPA0BBACEFIA4gG0YNAQNAAkAgBSARRwRAIAUgDkkEQCAPICAgBSARbCAOakEDdGorAwA5AwAMAgsgGCgCACEVIA9CADcDACAVIAVBA3RqIRIgFSAOQQN0aiEVQQAhFEQAAAAAAAAAACE8A0AgFCAjRg0CIA8gPCAVKwMAIBIrAwCioCI8OQMAIBRBAWohFCASIBFBA3QiHWohEiAVIB1qIRUMAAsACyAOQQFqIQ4MAgsgBUEBaiEFIA9BCGohDwwACwALAAsgEEF/Sg0ADAILIwBBEGsiIyQAQX8hEAJAIBcoAgQiG0ECSA0AIBsgFygCCEcNACAWKAIEIBtHDQAgGxDnAyIoRQ0AICMgG0EBayIUNgIMICMgKCgCAEEIajYCCEEAIQ8jAEEQayIRJABBfyEcAkAgFygCCCISIBcoAgRHDQAgEiAWKAIERw0AIBIgIygCDEEBakcNACASQQJrIiBBACAgQQBKGyErA0ACQCArIA8iFUcEQCAVQQN0IhwgFigCAGogFygCACASIBVsQQN0aiIdIBxqKwMAOQMAIBEgHSAVQQFqIg9BA3QiLGoiLTYCCCARIBIgFUF/c2oiJDYCDEEAIQUCQCARQQhqIg4gDhDjA58iPEQAAAAAAAAAAGENACAOKAIAIiYgJisDACI9IDyaIDwgPUQAAAAAAAAAAGMbIjygIj05AwBEAAAAAAAA8D8gPCA9op+jIT0gDigCBCIOQQAgDkEAShshDgNAIAUgDkYNASAmIAVBA3RqIjEgPSAxKwMAojkDACAFQQFqIQUMAAsACyAjKAIIIBxqIDyaIjw5AwAgDyEFIDxEAAAAAAAAAABhDQIDQEQAAAAAAAAAACE8IA8hDiAFIBJODQIDQCAFIA5NBEAgBSASbCEcIAUhDgNAIA4gEkgEQCA8IBcoAgAgDiAcakEDdGorAwAgHSAOQQN0aisDAKKgITwgDkEBaiEODAELCyAWKAIAIAVBA3RqIDw5AwAgBUEBaiEFDAIFIDwgFygCACAOIBJsIAVqQQN0aisDACAdIA5BA3RqKwMAoqAhPCAOQQFqIQ4MAQsACwALAAsCQAJAIBJBAk4EQCAWKAIAIgUgIEEDdCIOaiAXKAIAIg8gEiAgbCIVICBqQQN0aisDADkDACAjKAIIIA5qIA8gEkEBayIOIBVqQQN0aisDADkDAAwBCyASQQFHDQEgFigCACEFIBcoAgAhD0EAIQ4LIAUgDkEDdGogDyAOIBJsIA5qQQN0aisDADkDAAtBACEcIBJBACASQQBKGyEmIBIhBQNAIAVBAUgNAyAXKAIAIAVBAWsiDyASbEEDdGohHQJAIAUgIEoNACASIAVrISQgHSAFQQN0aiErIAUhFQNAIBIgFUwNASARICQ2AgwgESAkNgIEIBEgKzYCCCARIBcoAgAgEiAVbCIsIAVqQQN0ajYCACARQQhqIBEQ4wMhPCAFIQ4DQCAOIBJIBEAgFygCACAOICxqQQN0aiItIC0rAwAgPCAdIA5BA3RqKwMAoqE5AwAgDkEBaiEODAELCyAVQQFqIRUMAAsAC0EAIQ4DQCAOICZHBEAgHSAOQQN0akIANwMAIA5BAWohDgwBCwsgHSAPQQN0akKAgICAgICA+D83AwAgDyEFDAALAAsgESAkNgIMIBEgJDYCBCARIC02AgggESAWKAIAICxqNgIAIBFBCGogERDjA0QAAAAAAADgP6IhPCASIQUDQCAFQQFrIgUgFUwNASAWKAIAIhwgBUEDdCIOaiIkICQrAwAgPCAOIB1qKwMAIj2ioSI+OQMAIAUgEmwhJCAFIQ4DQCAOIBJODQEgFygCACAOICRqQQN0aiImICYrAwAgPSAcIA5BA3QiJmorAwCiID4gHSAmaisDAKKgoTkDACAOQQFqIQ4MAAsACwALAAsgEUEQaiQAAkAgHEEASA0AICgoAgAiEUIANwMAIBQhDwNAIA8iBSIQQQFIBEBBACEFA0AgBSAURgRAQQAhEAwECyAWKAIAIhIgBUEDdGoiFSsDACI9ITwgBUEBaiIPIRAgBSEOA0AgECAbSARAIBIgEEEDdGorAwAiPiA8IDwgPmMiERshPCAQIA4gERshDiAQQQFqIRAMAQsLIBIgDkEDdGogPTkDACAVIDw5AwAgFygCACISIAUgG2xBA3RqIRAgEiAOIBtsQQN0aiEOQQAhBQNAIAUgG0YEQCAPIQUMAgUgDisDACE8IA4gECsDADkDACAQIDw5AwAgBUEBaiEFIBBBCGohECAOQQhqIQ4MAQsACwALAAsDQAJAIBAiDkEBSARAQQAhDgwBCyARIA5BA3QiD2orAwCZIBYoAgAiEiAOQQFrIhBBA3RqKwMAmSAPIBJqKwMAmaBEje21oPfGsD6iZA0BCwsgBUEBayEPIAUgDkYNACAOIAUgBSAOSBshJiARIAVBA3QiK2ohHCAOQQN0IiwgEWohLUEAIRADQCAQQeQARg0BIBBBAWohFSAWKAIAIiAgLGorAwAgICAraiIxKwMAIjyhIBwrAwAiPSA9oiI9ICAgD0EDdGoiOSsDACA8oUQAAAAAAADgP6IiPCA9IDwgPKKgnyI9miA9IDxEAAAAAAAAAABjG6CjoCE/IC0rAwghPiAOIQUDQCAFICZHBEACQCA/mSI8ID6ZZgRAIDxEvInYl7LSnDxkRQRARAAAAAAAAPA/IT1EAAAAAAAAAAAhPAwCCyA+miA/oyI8RAAAAAAAAPA/IDwgPKJEAAAAAAAA8D+gn6MiPaIhPAwBCyA/miA+oyI8RAAAAAAAAPA/IDwgPKJEAAAAAAAA8D+gn6MiPKIhPQsgICAFQQN0IiRqIhAgECsDACJAIDwgPCBAICAgBUEBaiISQQN0IhBqIjIrAwAiQKEiQaIgPSA9oCAQIBFqIh0rAwCioKIiQqE5AwAgMiBAIEKgOQMAIAUgDkoEQCARICRqIhAgPSAQKwMAoiA+IDyioTkDAAsgHSAdKwMAIkAgPCA9IEGiIEAgPCA8oKKhoqA5AwAgEiAbbCEyIAUgG2whOkEAIRADQCAQIBtHBEAgFygCACIzIBAgOmpBA3RqIjsgPSA7KwMAIj+iIDwgMyAQIDJqQQN0aiIzKwMAIj6ioTkDACAzIDwgP6IgPSA+oqA5AwAgEEEBaiEQDAELCyAFIA9OIRAgEiEFIBANASAdKwMAIT8gESAkaiIQID0gECsDECI9ojkDECA9IDyaoiE+DAELCyAVIRAgHCsDAJkgOSsDAJkgMSsDAJmgRI3ttaD3xrA+omQNAAsMAAsACyAoEKUCCyAjQRBqJAAgEEF/TA0BAkAgOEUEQEEAIQ5BfyEVAkAgGCgCBCIFQQFIDQAgGCgCCCIRQQFIDQAgFygCBCAFRw0AIBcoAgggBUcNACAeKAIEIAVHDQAgHigCCCARRw0AIBYoAgQgBUcNACAeKAIAIRQDQAJAIAUgDkYEQCAFIQ4MAQsgFigCACAOQQN0aisDACI8RLyJ2Jey0pw8Yw0AIAUgDmwhGkQAAAAAAADwPyA8mZ+jIT1BACEQA0AgECARRwRAIBgoAgAgEEEDdGohDyAXKAIAIBpBA3RqIRVBACESRAAAAAAAAAAAITwDQCAFIBJHBEAgEkEBaiESIDwgFSsDACAPKwMAoqAhPCAPIBFBA3RqIQ8gFUEIaiEVDAELCyAUID0gPKI5AwAgEEEBaiEQIBRBCGohFAwBCwsgDkEBaiEODAELCyAOIAUgBSAOSBshBUEAIRUgEUEAIBFBAEobIQ8DQCAFIA5GDQEgFigCACAOQQN0akIANwMAQQAhEgNAIA8gEkcEQCAUQgA3AwAgEkEBaiESIBRBCGohFAwBCwsgDkEBaiEODAALAAsgFUF/Sg0BDAMLQQAhBSAaQQAgGkEAShshDiAeKAIAIQ8gFygCACESA0ACQAJ/IAUgDkcEQEEAIRAgFigCACAFQQN0aisDAES8idiXstKcPGNFDQIgBSEOCyAOCyAaIA4gGkobIQUDQCAFIA5GDQMgFigCACAOQQN0akIANwMAQQAhEANAIBAgGkcEQCAPQgA3AwAgEEEBaiEQIA9BCGohDwwBCwsgDkEBaiEODAALAAsDQCAQIBpHBEAgDyASKwMAOQMAIBBBAWohECAPQQhqIQ8gEkEIaiESDAELCyAFQQFqIQUMAAsACyAXEDtBACEQCyAQDAELIBcQO0F/CyEUIBgQO0EAIQ4gFigCBCIFQQAgBUEAShshD0QAAAAAAAAAACE8QQAhBQNAIAUgD0YEQANAIA4gD0YNBCAWKAIAIA5BA3RqIgUgBSsDACA8ozkDACAOQQFqIQ4MAAsABSA8IBYoAgAgBUEDdGorAwCgITwgBUEBaiEFDAELAAsACyAYEDsLIBRBAEgNAiAqIBlBGGxqIgUgHigCACIOKwMIIjw5AwAgBSAOKwMAIj2aOQMIIAUgPCAhKAIAIgUrAwCiID0gBSsDCKKhmjkDECAiEDsgEyEZDAELCyAeEDsgIRClAiAWEKUCQQAhDgNAQQAgDkEERg0CGkF/ICogDkEBa0EDcUEYbGoiBSsDACAqIA5BGGxqIg8rAwgiPaIgDysDACAFKwMIIj6ioSI8mUQtQxzr4jYaP2MNAhogNyAOQQR0aiIQID4gDysDEKIgPSAFKwMQoqEgPKM5AwAgECAPKwMAIAUrAxCiIAUrAwAgDysDEKKhIDyjOQMIIA5BAWohDgwACwALICIQOyAeEDsgIRClAiAWEKUCQX8LIQUgJ0EQaiQAIAVBAEgNAAJ/IB9BCGoiIyEeIB9BFGoiJyEhIB9BKGoiICEiIB9BDGoiHSESIB9BGGoiKiEQIB9BMGoiKCEZIB9B8AFqIRUgH0H4AWohGyMAQZDgAGsiFyQAQQEhBQJAIAhBAmtBAksNACANQY4WRgRAIAdBAkEOQSogACABIAIgAyAJIC5EAAAAAAAA7D8gF0EQahChA0F/TARAIBJBfzYCAEF6IQUMAgsCfyAXQRBqIRhBACETQQAhDiMAQbABayIUJAAgFELDgYCA0AE3A5gBIBRCgICAgOAWNwOQAUH/ASEPA0AgE0EERwRAIBggFEGQAWogE0ECdGooAgBqLQAAIgUgDyAFIA9B/wFxSRshDyAFIA4gBSAOQf8BcUsbIQ4gE0EBaiETDAELCwJ/IA5B/wFxIgUgD0H/AXEiDmtBHUwEQCAQQQA2AgAgGUKAgICAgICA+L9/NwMAQX4MAQsgBSAOakEBdiEaQQAhDkEAIRMgGQJ8AkACQAJAA0AgE0EERgRAAkACQAJAA0AgDiIFQQRGDQEgBUEBaiEOIBRBrAFqIAVqLQAAQQFHDQAgFEGsAWogDkEDcWotAABBAUcNACAUQawBaiAFQQJqQQNxai0AAA0AC0EAIRFB9wAhFkENIQ5B/wEhGQJAIAUiDw4EAgcGAwALIBAgBTYCAEQAAAAAAADwPwwICyAQQQA2AgAgGUKAgICAgICA+L9/NwMAQX0MCAsDQCAPQQ5GDQYgD0EObCElIA9B/v///wdxIQ5BACETA0AgE0EORwRAAkAgD0EDSSATQQNrQQdLckEBIA9BC0kbRQ0AIBNB/v///wdxIhEgDnJFIBFBASAOQQxGG0VyIBFBDEZBACAOQQxGG3INACAUIBZqIBggEyAlamotAAAgGmsiEUEfdjoAACARIBFBH3UiHGogHHMiESAZIBEgGUgbIRkgFkEBayEWCyATQQFqIRMMAQsLIA9BAWohDwwACwALBSAUQawBaiATaiAaIBggFEGQAWogE0ECdGooAgBqLQAASzoAACATQQFqIRMMAQsLA0BBACETIA5BAEgNAyAOQX5xIQ8gDkEDayElA0AgE0EORwRAAkAgE0EDSSAlQQdLckEBIBNBC0kbRQ0AQQAgD0EMRiATQf7///8HcSIRGyAPIBFyRXIgD0EBIBFBDEYbRXINACAUIBZqIBggE0EObCAOamotAAAgGmsiEUEfdjoAACARIBFBH3UiHGogHHMiESAZIBEgGUgbIRkgFkEBayEWCyATQQFqIRMMAQsLIA5BAWshDgwACwALA0AgDkEASA0CIA5BDmwhESAOQX5xISVBDSETA0AgE0EATgRAAkAgDkEDSCATQQNrQQdLckEBIA5BC0gbRQ0AIBNBfnEiD0EMRyIcQQEgJUEMRhtFIBxBASAOQQJJG0VyIA9BASAOQQJJG0VyDQAgFCAWaiAYIBEgE2pqLQAAIBprIg9BH3Y6AAAgDyAPQR91IhxqIBxzIg8gGSAPIBlIGyEZIBZBAWshFgsgE0EBayETDAELCyAOQQFrIQ4MAAsACwNAIBFBDkYNASARQf7///8HcSEOIBFBA2shJUENIRMDQCATQQBOBEACQCATQQNIICVBB0tyQQEgE0ELSBtFDQAgDkEBIBNBfnEiD0EMRhtFDQAgDkEMRyIcQQEgD0EMRhtFIBxBASATQQJJG0VyDQAgFCAWaiAYIBNBDmwgEWpqLQAAIBprIg9BH3Y6AAAgDyAPQR91IhxqIBxzIg8gGSAPIBlIGyEZIBZBAWshFgsgE0EBayETDAELCyARQQFqIREMAAsACyAQIAU2AgBEAAAAAAAA8D8gGUEeSg0AGiAZt0QAAAAAAAA+QKMLOQMAQXxBjhZCACAUIBRBiAFqEMkGIgVBAEgNABogFQRAIBUgBTYCAAsgFyAUKQOIATcDCEEACyEFIBRBsAFqJAAgBUF/TAsEQCASQX82AgAMAgsgFykDCCJDQn9RBEAgEkF/NgIAQXshBQwCCyASIEOnQf//AXFBACBDQoCA/v8Pg1AbNgIAIBtFDQEgGyBDNwMADAELIAdBAiANQf8BcSIFIAVBA2wgACABIAIgAyAJIC4gCiAXQRBqEKEDQX9MBEAgEkF/NgIAQXohBQwBCyAXQRBqIRggECETQQAhDkEAIQ9CACFDIwBBMGsiFCQAAn8gBSIQQQNrQQZPBEAgEkF/NgIAIBNBADYCACAZQoCAgICAgID4v383AwBBfwwBCyAUQQA2AhAgFCAQQQFrIgU2AhwgFCAQIBBsIhpBAWs2AhggFCAFIBBsNgIUQf8BIRYDQCAOQQRHBEAgGCAUQRBqIA5BAnRqKAIAai0AACIRIBYgESAWQf8BcUkbIRYgESAPIBEgD0H/AXFLGyEPIA5BAWohDgwBCwsgD0H/AXEiDiAWQf8BcSIPa0EdTARAIBJBfzYCACATQQA2AgAgGUKAgICAgICA+L9/NwMAQX4MAQsgDiAPakEBdiERQQAhD0EAIQ4CQANAIA5BBEYEQAJAAkADQCAPIg5BBEYNASAOQQFqIQ8gFEEsaiAOai0AAEEBRw0AIBRBLGogD0EDcWotAABBAUcNACAUQSxqIA5BAmpBA3FqLQAADQALIBMgDjYCAEEAIQ5B/wEhFgNAIA4gGkcEQCAOIBhqIg8gDy0AACIPIBFJOgAAIA8gEWsiDyAPQR91Ig9qIA9zIg8gFiAPIBZIGyEWIA5BAWohDgwBCwsgBSEPAkACQAJAIBMoAgAOBAABAgQHCyAQQQAgEEEAShshE0EAIQ8DQCAPIBNGDQcgDyAQbCERQQAhDgNAIA4gEEcEQCAOIA9yRSAOQQEgBSAPRhtFciAFIA5GQQAgBSAPRhtyRQRAIBggDiARamotAABBAEetIENCAYaEIUMLIA5BAWohDgwBCwsgD0EBaiEPDAALAAsgEEEAIBBBAEobIRNBACEPA0AgDyATRg0GIAUhDgNAIA5BAE4EQAJAIA9BASAFIA5GG0UNACAFIA9HIhFBASAFIA5GG0VBASARIA4bRXINACAYIA4gEGwgD2pqLQAAQQBHrSBDQgGGhCFDCyAOQQFrIQ4MAQsLIA9BAWohDwwACwALA0AgD0EASA0FIA8gEGwhEyAFIQ4DQCAOQQBOBEAgDiAPckUgBSAORyIRQQEgBSAPRhtFQQEgESAPG0VyckUEQCAYIA4gE2pqLQAAQQBHrSBDQgGGhCFDCyAOQQFrIQ4MAQsLIA9BAWshDwwACwALIBJBfzYCACATQQA2AgAgGUKAgICAgICA+L9/NwMAQX0MBAsFIBRBLGogDmogESAYIBRBEGogDkECdGooAgBqLQAASzoAACAOQQFqIQ4MAQsLIBBBACAQQQBKGyETA0AgD0EASA0BQQAhDgNAIA4gE0cEQCAPQQEgBSAORhtFIA4gD3JFQQAgBSAPRiAOG3JyRQRAIBggDiAQbCAPamotAABBAEetIENCAYaEIUMLIA5BAWohDgwBCwsgD0EBayEPDAALAAsgGSAWt0QAAAAAAAA+QKNEAAAAAAAA8D8gFkEeTBs5AwACQAJAAkAgDUGFCkYgDUGECGtBAklyDQAgDUGDBEcEQCANQYQGRg0BIA1BgwJHDQIgFCBDp0GA7gBqMAAANwMIQpbTpbOZzaXL6QAgQ4hCAYNQDQMgEkF/NgIAIBlCgICAgICAgPi/fzcDAEF8DAQLIBQgQ6dBwO0AajAAADcDCCBDQv////8PgyFDIBUEQCAVQv7O7+7b9/bz/gAgQ4inQQFxNgIAC0KAsJCBoIiAgIF/IEOIQgGDUA0CIBJBfzYCACAZQoCAgICAgID4v383AwBBfAwDCyANIENBACAUQQhqEMkGIgVBf0wEQCASQX82AgAgGUKAgICAgICA+L9/NwMAQXwMAwsgBUUgFUVyDQEgFSAFNgIADAELIBQgQzcDCAsgEiAUKQMIPgIAQQALIQUgFEEwaiQAIBtFDQAgG0IANwMACwJAIAhBAkYgCEEES3INAAJ/IAZFBEAgHkF/NgIAQX8MAQsCQAJAIAgOBAABAQABCyAHQQAgBigCHCIOIA5BAnQgACABIAIgAyAJIC4gCiAXQRBqEKEDQX9MBEAgHkF/NgIAQXoMAgsgBkEAIBdBEGogBigCHCAeICEgIhDNBgwBCyAHQQEgBigCHCIOIA5BAnQgACABIAIgAyAJIC4gCiAXQRBqEKEDQX9MBEAgHkF/NgIAQXoMAQsgBkEBIBdBEGogBigCHCAeICEgIhDNBgshDiAFQQFGBEAgDiEFDAELIA5BAUYNACAFIA5xQR91IA5xIQULIBdBkOAAaiQAIAVBBmoiBUEGTQsEQCAfIAVBAnRBnO0AaigCADYC7AELIAhBAk0EQCAfICMgHSAIQQJJIgUbKAIANgIEIB8gJyAqIAUbKAIANgIQIB8gICAoIAUbKwMAOQMgCyAwQQFqITALIC9BAWohLwwBCwsgDCAwNgIAIClBEGokAEEAC9gBAQJ/AkAgACgCtAINAAJAIAAoAihBA2sOBQABAQEAAQsgACgCJEEDRw0AIAAoAixBAkcNACAAKAJ4QQNHDQAgACgCsAINACAAKALYASIBKAIIQQJHDQAgASgCYEEBRw0AIAEoArgBQQFHDQAgASgCDEECSg0AIAEoAmRBAUcNACABKAK8AUEBRw0AIAEoAiQiAiAAKALEAkcNACABKAJ8IAJHDQAgASgC1AEgAkcNACABKAIoIgIgACgCyAJHDQAgASgCgAEgAkcNACABKALYASACRg8LQQALoQgBD38gACgCACEMIAAoAgQhDUEBQbwgEKcDIgZFBEBBAEEDQasQQQAQL0EBEAEAC0EEEEsiDhD3AwJ/QRgQSyIJEPcDIQEgCUEEahCIAhogAQJ/QcgGEEsiBEEMahBPGiAEQUBrEK4CGiAEQcgAahCIAhogBEHcAGoiAUHY5gE2AgAgAUEEahBPGiABQgA3AhggAUIANwIQIAFB6OYBNgIAIAFBIGoQTxogAUEsahBPGiABQThqEE8aIARBoAFqIgNCioCAgKABNwIIIANCADcCACADQRBqEE8aIANBAToAHCADQSBqEE8aIANCADcCLCADQoCAgICAgICQwQA3AjQgA0E8ahBPGiADQcgAahBPGiADQYCAwIgENgJYIANB3ABqIgFCADcCDCABQgA3AgAgAUIANwIUIAFBHGoQTxogAUEoahBPGiADQZABahBPIQEgA0GIJxDDBiABQSQQjQIgBEG8AmoiAUHQ6wFBDBDoASABQTBqQYDsAUEMEOgBIAFB4ABqQbDsAUEMEOgBIAFBkAFqQeDsAUEMEOgBIAFBwAFqQZDtAUEMEOgBIAFB8AFqQcDtAUEMEOgBIAFCzZmz+IOAgPDAADcCuAIgAULNmbP2s+bM+T43ArACIAFCgICA9OPMmdM+NwKoAiABQs2Zs+6z5syZPjcCoAIgBEH8BGoQTxogBEGz5sz5AzYCiAUgBEGMBWoiAUIANwIAIAFBAToAECABQgA3AgggAUEUakEAQcgAEDIaIAFB3ABqEIgCGiABQfAAahBPGiABQfwAahBPGiAEQZQGaiIFEE8aIAVBDGoQTxogBUEYahBPGiAFQYDIABCNAgJAIAVBGGoiARA1IgJBgAhJBEAjAEEgayIKJAACQEGACCACayIHIAEQKygCACABKAIEa0EDdU0EQCABIAcQ8QMMAQsgARArIQIgCkEIaiABIAEQNSAHahDZAiABEDUgAhCRAyILIQgjAEEQayICJAAgAiAIKAIINgIAIAgoAgghDyACIAhBCGo2AgggAiAPIAdBA3RqNgIEIAIoAgAhBwNAIAIoAgQgB0cEQCAIKAIQGiACKAIAEP0FIAIgAigCAEEIaiIHNgIADAELCyACELUBIAJBEGokACABIAsQ2AIgCxDXAgsgCkEgaiQADAELIAJBgAhLBEAgASgCAEGAQGshAiABEDUhCCABIAIQnQMgASAIEIAECwsgBUEyNgIwIAVBqAg2AiwgBUGACDYCKCAFQwrXIzw4AiQgA0MAAEBAOAI0IANDAACAQDgCOCADQfQDEMMGIARBAToACCAEQoiAgICAgICgwAA3AgAgBAsQkgYgCQsQkwYgBkKBgICAcDcCFCAGIA02AhAgBiAMNgIMIAZBATYCCCAGIAA2AgQgBiAONgIAIAYL9gICBX8FfSMAQRBrIgUkAEF/IQcjAEFAaiIGJAACfyAAKgIcIAAqAiwiCiADlJMhDSAAKgIgIgsgA5QgACoCEJMhDiAAKgIMIAogApSTIQpBfyALIAKUIAAqAgCTIgsgACoCJCIMIAOUIAAqAhSTIgOUIAwgApQgACoCBJMiDCAOlJMiAkMAAAAAWw0AGiAFIAMgCpQgDCANlJMgApU4AgwgBSALIA2UIA4gCpSTIAKVOAIIQQALIQAgBkFAayQAAkAgAEEASA0AAn8gBSoCDCABKgIMIgKUQzMzy0GVQwAAAD+SIgOLQwAAAE9dBEAgA6gMAQtBgICAgHgLIgBBAEgNACABKAIEIgggAEwNAAJ/IAEoAggiCbIgAiAFKgIIlEMzM8vBlZJDAAAAP5IiAotDAAAAT10EQCACqAwBC0GAgICAeAsiBkEASCAGIAlOcg0AIAQgASgCACAGIAhsIABqai0AADoAAEEAIQcLIAVBEGokACAHC8ICAgF/BH0jAEFAaiIGJAACQCAABEAgAEEIaiABIAZBEGoQnwNBfyEBIABBuAFqIgAgBioCHCAGKgIQIAKUIAYqAhQgA5SSkiAGKgI8IAYqAjAgApQgBioCNCADlJKSIgeVIgggBioCLCAGKgIgIAKUIAYqAiQgA5SSkiAHlSICIAQgBRBrQQBIDQEgACAEKgIAIAUqAgAgBkEMaiAGQQhqENsBQQBIDQFBf0EAIAggBioCDJMiAyADlCACIAYqAgiTIgIgApSSQwAAgD9eGyEBDAELIAEqAhwhByABKgIUIQggASoCECEJIAQgASoCDCABKgIAIAKUIAEqAgQgA5SSkiABKgIsIAEqAiAgApQgASoCJCADlJKSIgqVOAIAIAUgByAJIAKUIAggA5SSkiAKlTgCAEEAIQELIAZBQGskACABC8sJAgp/AX0gAygCGCENAkBBASACdEGg4AFxRSACQQ5LckUEQCAAIAQgAygCCCIEQQF0ayAFIAMoAhAiAkEBdGsgAWxqaiEIIAFBAXQhD0EAIAJrIQFBACAEayEAIAMoAhQhECADKAIMIQUDQCAAIQIgCCEHIAEgEEoNAgNAIAIgBUpFBEAgDS8BACIEQYAgRwRAIAogBy0AACIOaiEKIAQgDmwgC2ohCyAOIA5sIAlqIQkLIAJBAWohAiANQQJqIQ0gB0ECaiEHDAELCyABQQFqIQEgCCAPaiEIDAALAAsgAkEBTQRAQQAgAygCEGshCCADKAIUIQ4DQCAIIA5KDQIgACAIQQF0IAVqIAFsIARqIAMoAggiB0EBdGtBA2xqIQJBACAHayEHIAMoAgwhDwNAIAcgD0pFBEAgDS8BACIQQYAgRwRAIAogAi0AAiACLQABIAItAABqakEDbiIMaiEKIAwgEGwgC2ohCyAMIAxsIAlqIQkLIAdBAWohByANQQJqIQ0gAkEGaiECDAELCyAIQQFqIQgMAAsACyACQX5xQQJGBEBBACADKAIQayEIIAMoAhQhDgNAIAggDkoNAiAAIAhBAXQgBWogAWwgBGogAygCCCIHQQF0a0ECdGohAkEAIAdrIQcgAygCDCEPA0AgByAPSkUEQCANLwEAIhBBgCBHBEAgCiACLQACIAItAAEgAi0AAGpqQQNuIgxqIQogDCAQbCALaiELIAwgDGwgCWohCQsgB0EBaiEHIA1BAmohDSACQQhqIQIMAQsLIAhBAWohCAwACwALIAJBfXFBBEYEQEEAIAMoAhBrIQggAygCFCEOA0AgCCAOSg0CIAAgCEEBdCAFaiABbCAEaiADKAIIIgdBAXRrQQJ0aiECQQAgB2shByADKAIMIQ8DQCAHIA9KRQRAIA0vAQAiEEGAIEcEQCAKIAItAAMgAi0AAiACLQABampBA24iDGohCiAMIBBsIAtqIQsgDCAMbCAJaiEJCyAHQQFqIQcgDUECaiENIAJBCGohAgwBCwsgCEEBaiEIDAALAAsCQAJAIAJBB2sOAgABAgtBACADKAIQayEIIAMoAhQhDgNAIAggDkoNAiAAIAhBAXQgBWogAWwgBGogAygCCCICQQF0a0EBdGohB0EAIAJrIQIgAygCDCEPA0AgAiAPSkUEQCANLwEAIhBBgCBHBEAgCiAHLQABIgxqIQogDCAQbCALaiELIAwgDGwgCWohCQsgAkEBaiECIA1BAmohDSAHQQRqIQcMAQsLIAhBAWohCAwACwALQQAgAygCEGshCCADKAIUIQ4DQCAIIA5KDQEgACAIQQF0IAVqIAFsIARqIAMoAggiAkEBdGtBAXRqIQdBACACayECIAMoAgwhDwNAIAIgD0pFBEAgDS8BACIQQYAgRwRAIAogBy0AACIMaiEKIAwgEGwgC2ohCyAMIAxsIAlqIQkLIAJBAWohAiANQQJqIQ0gB0EEaiEHDAELCyAIQQFqIQgMAAsACyAGIAkgCiAKbCADKAIkIgBtayIBBH8gCyADKAIgIApsIABta0HkAGwgAygCHG1B5ABsAn8gAbKRIhGLQwAAAE9dBEAgEagMAQtBgICAgHgLbQVBAAs2AgAL8wEBBn8gACgC4AMiASAAQQFBgAggACgCBCgCABEEADYCCCABIABBAUGACCAAKAIEKAIAEQQANgIMIAEgAEEBQYAIIAAoAgQoAgARBAA2AhAgASAAQQFBgAggACgCBCgCABEEACIDNgIUIAEoAhAhBCABKAIMIQUgASgCCCEGQQAhAUGAfyEAA0AgBiABQQJ0IgJqIABB6c0FbEGAgAJqQRB1NgIAIAIgBWogAEGiiwdsQYCAAmpBEHU2AgAgAiAEaiAAQa6SfWw2AgAgAiADaiAAQefPfmxBgIACajYCACAAQQFqIQAgAUEBaiIBQYACRw0ACwtFAQJ9IAEqAgAgACoCACIDkyACKgIEIAAqAgQiBJOUIAEqAgQgBJMgAioCACADk5STQwAAAD+UIgOMIAMgA0MAAAAAXRsL5xIBFX8jAEGAC2siDSQAIANBA3QiBUFgcUEEciEPIAJBAnQiB0FgcUECciESIAFBA3QiDEFgcUEEciETIAAoAuQDKAIYIRgCQCAAKAKEASIIQQFIBEAMAQsgDyAFQRxyIgpqQQF1IRQgEiAHQR5yIgtqQQF1IRUgEyAMQRxyIg5qQQF1IRYgACgCiAEiBSgCCCEXIAUoAgQhECAFKAIAIRFB/////wchDANAAn8gBCARai0AACIFIBNIBEAgBSAOa0EBdCIHIAdsIQcgBSATa0EBdCIFIAVsDAELIAUgDkoEQCAFIBNrQQF0IgcgB2whByAFIA5rQQF0IgUgBWwMAQsCfyAFIBZMBEAgBSAOa0EBdCIFIAVsDAELIAUgE2tBAXQiBSAFbAshB0EACyEGAn8gBCAQai0AACIFIBJIBEAgBiAFIBJrQQNsIgYgBmxqIQYgBSALa0EDbCIFIAVsDAELIAUgC0oEQCAGIAUgC2tBA2wiBiAGbGohBiAFIBJrQQNsIgUgBWwMAQsgBSAVTARAIAUgC2tBA2wiBSAFbAwBCyAFIBJrQQNsIgUgBWwLIAdqIQcCfyAEIBdqLQAAIgUgD0gEQCAGIAUgD2siBiAGbGohBiAFIAprIgUgBWwMAQsgBSAKSgRAIAYgBSAKayIGIAZsaiEGIAUgD2siBSAFbAwBCyAFIBRMBEAgBSAKayIFIAVsDAELIAUgD2siBSAFbAshCSANQYADaiAEQQJ0aiAGNgIAIAcgCWoiBSAMIAUgDEgbIQwgBEEBaiIEIAhHDQALIAhBAXEhBQJAIAhBAUYEQEEAIQtBACEEDAELIAhBfnEhBkEAIQtBACEEA0AgDCANQYADaiAEQQJ0aigCAE4EQCANQYABaiALaiAEOgAAIAtBAWohCwsgDCANQYADaiAEQQFyIgdBAnRqKAIATgRAIA1BgAFqIAtqIAc6AAAgC0EBaiELCyAEQQJqIQQgBkECayIGDQALCyAFRQ0AIA1BgANqIARBAnRqKAIAIAxKDQAgDUGAAWogC2ogBDoAACALQQFqIQsLQf8AIQYgDUGAA2ohBANAIARC//////f/////ADcCGCAEQv/////3/////wA3AhAgBEL/////9/////8ANwIIIARC//////f/////ADcCACAEQSBqIQQgBkEHRiEFIAZBCGshBiAFRQ0AC0EAIRYgC0EASgRAA0AgDyANQYABaiAWai0AACIKIAAoAogBIgcoAghqLQAAayIIQQR0IgVBwAJqIQ4gBUHAAWohFCAFQUBrIRUgEyAHKAIAIApqLQAAayIJQQZ0IhdBgAJqIRBBByEFIA0iBkGAA2ohBCASIAcoAgQgCmotAABrIhFByABsQZABaiIMIQcgEUEDbCIRIBFsIAlBAXQiCSAJbGogCCAIbGoiESEJA0AgBCgCACAJSgRAIAQgCTYCACAGIAo6AAALIAkgFWoiCCAEKAIESARAIAQgCDYCBCAGIAo6AAELIAggFGoiCCAEKAIISARAIAQgCDYCCCAGIAo6AAILIAggDmoiCCAEKAIMSARAIAQgCDYCDCAGIAo6AAMLIAUiCEEBayEFIAcgCWohCSAGQQRqIQYgBEEQaiEEIAdBoAJqIQcgCA0AC0EHIQUgDCEHIBAgEWoiECEJA0AgBCgCACAJSgRAIAQgCTYCACAGIAo6AAALIAkgFWoiCCAEKAIESARAIAQgCDYCBCAGIAo6AAELIAggFGoiCCAEKAIISARAIAQgCDYCCCAGIAo6AAILIAggDmoiCCAEKAIMSARAIAQgCDYCDCAGIAo6AAMLIAUiCEEBayEFIAcgCWohCSAGQQRqIQYgBEEQaiEEIAdBoAJqIQcgCA0AC0EHIQUgDCEHIBAgF2pBgAZqIhAhCQNAIAQoAgAgCUoEQCAEIAk2AgAgBiAKOgAACyAJIBVqIgggBCgCBEgEQCAEIAg2AgQgBiAKOgABCyAIIBRqIgggBCgCCEgEQCAEIAg2AgggBiAKOgACCyAIIA5qIgggBCgCDEgEQCAEIAg2AgwgBiAKOgADCyAFIghBAWshBSAHIAlqIQkgBkEEaiEGIARBEGohBCAHQaACaiEHIAgNAAsgECAXakGACmohCUEHIQUDQCAEKAIAIAlKBEAgBCAJNgIAIAYgCjoAAAsgCSAVaiIHIAQoAgRIBEAgBCAHNgIEIAYgCjoAAQsgByAUaiIHIAQoAghIBEAgBCAHNgIIIAYgCjoAAgsgByAOaiIHIAQoAgxIBEAgBCAHNgIMIAYgCjoAAwsgBSIHQQFrIQUgCSAMaiEJIAZBBGohBiAEQRBqIQQgDEGgAmohDCAHDQALIBZBAWoiFiALRw0ACwsgAUF8cSEFQQAhByANIQQgA0F8cUEBdCEAIAJBeHEiA0EBckEGdCEMIANBAnJBBnQhBiADQQNyQQZ0IQggA0EEckEGdCEJIANBBXJBBnQhCiADQQZyQQZ0IQsgAkEHckEGdCEPA0AgGCAFIAdqQQJ0aigCACIBIANBBnRqIABqIgIgBC0AAEEBajsBACACIAQtAAFBAWo7AQIgAiAELQACQQFqOwEEIAIgBC0AA0EBajsBBiABIAxqIABqIgIgBC0ABEEBajsBACACIAQtAAVBAWo7AQIgAiAELQAGQQFqOwEEIAIgBC0AB0EBajsBBiABIAZqIABqIgIgBC0ACEEBajsBACACIAQtAAlBAWo7AQIgAiAELQAKQQFqOwEEIAIgBC0AC0EBajsBBiABIAhqIABqIgIgBC0ADEEBajsBACACIAQtAA1BAWo7AQIgAiAELQAOQQFqOwEEIAIgBC0AD0EBajsBBiABIAlqIABqIgIgBC0AEEEBajsBACACIAQtABFBAWo7AQIgAiAELQASQQFqOwEEIAIgBC0AE0EBajsBBiABIApqIABqIgIgBC0AFEEBajsBACACIAQtABVBAWo7AQIgAiAELQAWQQFqOwEEIAIgBC0AF0EBajsBBiABIAtqIABqIgIgBC0AGEEBajsBACACIAQtABlBAWo7AQIgAiAELQAaQQFqOwEEIAIgBC0AG0EBajsBBiABIA9qIABqIgEgBC0AHEEBajsBACABIAQtAB1BAWo7AQIgASAELQAeQQFqOwEEIAEgBC0AH0EBajsBBiAEQSBqIQQgB0EBaiIHQQRHDQALIA1BgAtqJAALywMBBH8gACgC5AMgAEEBQfwPIAAoAgQoAgARBAAiAEH8B2oiATYCKCAAQv////8PNwL4ByAAQoGAgIAgNwKACCAAQoOAgIDAADcCiAggAEL9////bzcC8AcgAEKFgICA4AA3ApAIIABC+////083AugHIABCh4CAgIABNwKYCCAAQvn///+vfzcC4AcgAEKJgICAoAE3AqAIIABC9////49/NwLYByAAQouAgIDAATcCqAggAEL1////7343AtAHIABCjYCAgOABNwKwCCAAQvP////PfjcCyAcgAEEPNgK4CCAAQvH///+vfjcCwAdBECECQRAhAwNAIAEgA0ECdCIAaiACNgIAIAEgAGtBACACayIENgIAIAEgAEEEcmogAjYCACABIANBf3NBAnRqIAQ2AgAgAkEBaiECQTAhACADQQJqIgNBMEcNAAsDQCABIABBAnQiAmpBIDYCACABIAJrQWA2AgAgASACQQRyakEgNgIAIAEgAEF/c0ECdGpBYDYCACABIAJBCHJqQSA2AgAgAUF+IABrQQJ0akFgNgIAIAEgAkEMcmpBIDYCACABQX0gAGtBAnRqQWA2AgAgAEEEaiIAQYACRw0ACwv3AgEKfyAAKALkAyIEIAAoAlgiAUEBRiICNgIcIAQgAEEBQf4FQYACIAIbIAAoAnggACgCBCgCCBEKADYCGCAAKAJ4QQFOBEAgBCgCFCEGIAFBAUchCANAIAYgBCAHQQJ0IgFqKAIgIgJtIQYgCEUEQCAEKAIYIAFqIgMgAygCAEH/AWo2AgALIAJB/gFqIAJBAWsiCUEBdCIKbSEFIAQoAhggAWooAgAhAUEAIQJBACEDA0AgAyAFSgRAA0Ag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AwsgASsDCBC+AQwDCyABKwMImhC/AQwCCyABKwMIEL4BjAwBCyABKwMIEL8BCyEAIAFBEGokACAAC1gBAn8gABA0KAIABEAgACAAQQhqIgEoAgAQwQUgAUEANgIAIAAQgQEhAkEAIQEDQCABIAJGBEAgABA0QQA2AgAFIAAgARAzQQA2AgAgAUEBaiEBDAELCwsLFAAgACAAQQhqKAIAEMEFIAAQrAILMAECfQJ/QQEgACoCACICIAEqAgAiA10NABpBACACIANeDQAaIAAoAgQgASgCBEgLC20AIAAqAgAgASoCAJQgACoCBCABKgIElJIgACoCCCABKgIIlJIgACoCDCABKgIMlJIgACoCECABKgIQlJIgACoCFCABKgIUlJIgACoCGCABKgIYlJIgACoCHCABKgIclJIgACoCICABKgIglJIL8wgCBn8EfCMAQYACayICJAACQCABKwMAIgggCKIgASsDCCIJIAmioCABKwMQIgkgCaKgIglEAAAAAAAAAABhBEAgAkIANwPIASACQoCAgICAgID4PzcDwAFEAAAAAAAAAAAhCAwBCyACIAggCZ8iCKM5A8ABIAIgASsDCCAIozkDyAEgASsDECAIoyEKCyACIAg5A9gBIAIgCjkD0AEgAiABKwMYOQPgASACIAErAyA5A+gBIAIgASsDKDkD8AEgAisD2AEiCCEJIwBBEGsiASQAAnwgCb1CIIinQf////8HcSIDQfvDpP8DTQRARAAAAAAAAPA/IANBnsGa8gNJDQEaIAlEAAAAAAAAAAAQwwIMAQsgCSAJoSADQYCAwP8HTw0AGgJAAkACQAJAIAkgARCLBUEDcQ4DAAECAwsgASsDACABKwMIEMMCDAMLIAErAwAgASsDCEEBEMQCmgwCCyABKwMAIAErAwgQwwKaDAELIAErAwAgASsDCEEBEMQCCyEJIAFBEGokACACIAkiCiACKwPAASIJIAmiRAAAAAAAAPA/IAqhIgmioDkDYCACIAkgAisDwAEgAisDyAGioiACKwPQAQJ8IwBBEGsiASQAAkAgCL1CIIinQf////8HcSIDQfvDpP8DTQRAIANBgIDA8gNJDQEgCEQAAAAAAAAAAEEAEMQCIQgMAQsgA0GAgMD/B08EQCAIIAihIQgMAQsCQAJAAkACQCAIIAEQiwVBA3EOAwABAgMLIAEr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CyAOojkDqAUgBCAKIA6iOQOgBSAEIAwgAisDKCIPojkDyAUgBCALIA+iOQPABSAEIAogD6I5A7gFIAQgAisDMCINOQP4BSAEIA85A/AFIAQgDjkD6AUgBCAMIA2iOQPgBSAEIAsgDaI5A9gFIAQgCiANojkD0AUgBCAMIAIrA0AiDqI5A5AGIAQgCyAOojkDiAYgBCAKIA6iOQOABiAEIAwgAisDSCIPojkDqAYgBCALIA+iOQOgBiAEIAogD6I5A5gGIAQgAisDUCINOQPYBiAEIA85A9AGIAQgDjkDyAYgBCAMIA2iOQPABiAEIAsgDaI5A7gGIAQgCiANojkDsAYgBEEAQcAAEDIiAkIANwNIIAJBQGtCgICAgICAgPi/fzcDACACQgA3A1AgAkIANwNYIAJCADcDYCACQoCAgICAgID4PzcDaCACQfAAakEAQTAQMhogAkKAgICAgICA+D83A6ABIAJBqAFqQQBByAAQMhogAkKAgICAgICA+L9/NwPwASACQfgBakEAQTAQMhogAkIANwOwAiACQoCAgICAgID4v383A6gCIAJCADcDuAIgAkIANwPAAiACQgA3A8gCIAJCgICAgICAgPg/NwPQAiACQdgCakEAQfAAEDIaIAJCgICAgICAgPg/NwPIAyACQdADakEAQTAQMhogAkKAgICAgICA+D83A4AEIAJBiARqQQBBMBAyGiACQoCAgICAgID4PzcDuARBACECA0BBACEGIAJBA0cEQANAIAZBBkcEQCAGQQN0IgggByACQTBsamoiCUIANwMAQQAhA0QAAAAAAAAAACEKA0AgA0EMRwRAIAogBEHABGogAkHgAGxqIANBA3RqKwMAIAQgA0EwbGogCGorAwCioCEKIANBAWohAwwBCwsgCSAKOQMAIAZBAWohBgwBCwsgAkEBaiECDAELCyAEQeAGaiQAQX8hAwJAIAErA1ggBSsDCCIMIAErA0AiC6IgBSsDECIOIAErA0iioCAFKwMYIg8gASsDUKKgoCIKRAAAAAAAAAAAYgR/IAErAyAhECABKwMoIREgASsDMCESIAErAzghEyAFIAErAwAiDSAKoiABKwMYIA0gDKIgASsDCCAOoqAgASsDECAPoqCgIg0gC6KhIAogCqIiC6M5AyAgBSAKIAErAwiiIA0gASsDSKKhIAujOQMoIAUg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aiQACx0AIABB/////wNLBEBBr9wBEIsBAAsgAEECdBBLCxIAIAAQNCgCACAAKAIAa0ECdQsrACAAKAIAGiAAKAIAIAAQ6QFBAnRqGiAAKAIAGiAAKAIAIAAQPEECdGoaC1kBAn8jAEEQayICJAAgAiAAQQhqIAEQmwMiASgCACEDA0AgASgCBCADRwRAIAAoAhAaIAEoAgAQmQMgASABKAIAQQRqIgM2AgAMAQsLIAEQtQEgAkEQaiQACysBAX8gACgCBCECA0AgASACRwRAIAAQKxogAkEEayECDAELCyAAIAE2AgQLDAAgACAAKAIAEK4GCz4BAn9BDBAwIgIEfyACIAAgAWxBAnQQMCIDNgIAIANFBEAgAhAqQQAPCyACIAE2AgggAiAANgIEIAIFQQALCysBAX8gACgCBCECA0AgASACRwRAIAAQKxogAkEkayECDAELCyAAIAE2AgQLCAAgABDMARoLLgEBfyAAKAIEIQIDQCABIAJHBEAgABArGiACQQxrIgIQsgYMAQsLIAAgATYCBAsxAQF/IAAQvwIgACgCAARAIAAgACgCABCzBiAAECsaIAAoAgAhASAAEMMBGiABECoLCy4BAX8gACgCBCECA0AgASACRwRAIAAQKxogAkEMayICELQGDAELCyAAIAE2AgQLIAAgAEIANwIAIABCADcCECAAQgA3AgggAEEYahCuAhoLBwAgABCgAgsuAQF/IAAoAgQhAgNAIAEgAkcEQCAAECsaIAJBIGsiAhCHAwwBCwsgACABNgIECzUAIAAoAgAaIAAoAgAgABCLAkEFdGoaIAAoAgAgABCeAUEFdGoaIAAoAgAgABCLAkEFdGoaCxoAIABBDk0EQCAAQQJ0QaS6AWooAgAPC0EACwwAIAAgACgCABCdAwvvDAIGfwV9An1DAACAPyEJAkACQAJAIAG8IgRB/////wdxIgJFDQAgALwiBUGAgID8A0YNACAAIAGSIAVB/////wdxIgNBgICA/AdNQQAgAkGBgID8B0kbRQ0DGgJ/AkAgBUF/Sg0AQQIgAkH////bBEsNARogAkGAgID8A0kNAEEAIAJBlgEgAkEXdmsiBnYiByAGdCACRw0BGkECIAdBAXFrDAELQQALIQYCQCACQYCAgPwDRwRAIAJBgICA/AdHDQEgA0GAgID8A0YNAiABQwAAAAAg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KkF+DwtBAEEDQecLQQAQL0EBEAEAC0MBAX8jAEEQayIBJAAgABArGiABQcyZs+YANgIMIAFB/////wc2AgggAUEMaiABQQhqEMIBKAIAIQAgAUEQaiQAIAALVQEBfyAAKAIEIQEDQCABIAAoAghHBEAgACgCEBogACAAKAIIQRRrNgIIDAELCyAAKAIABEAgACgCEBogACgCACEBIAAQNCgCACAAKAIAaxogARAqCwuDAQEFfyAAEIMFIAAQKyEEIAAoAgAhBSAAKAIEIQIgAUEEaiIGIQMDQCACIAVHBEAgBCADKAIAQRRrIAJBFGsiAhCmAyADIAMoAgBBFGs2AgAMAQsLIAAgBhBHIABBBGogAUEIahBHIAAQKyABEDQQRyABIAEoAgQ2AgAgACAAEHcQzAYLagECfyMAQRBrIgQkACAEQQA2AgwgAEEMaiAEQQxqIAMQqwEgAQRAIAAoAhAaIAEQywYhBQsgACAFNgIAIAAgBSACQRRsaiICNgIIIAAgAjYCBCAAEDQgBSABQRRsajYCACAEQRBqJAAgAAsrAQF/IAAoAgQhAgNAIAEgAkcEQCAAECsaIAJBDGshAgwBCwsgACABNgIECwwAIAAgACgCABDSBgsHACABIABrC5QBAQR/IwBBEGsiBSQAIAEgAhCZBCIEQW9NBEACQCAEQQpNBEAgACAEEKQBIAAhAwwBCyAAIAQQ5QJBAWoiBhBLIgMQlQEgACAGEM4BIAAgBBCUAQsDQCABIAJHBEAgAyABEIwBIANBAWohAyABQQFqIQEMAQsLIAVBADoADyADIAVBD2oQjAEgBUEQaiQADwsQzwEACxwAIAAgAUEIIAKnIAJCIIinIAOnIANCIIinEBsLzQYCBH8DfiMAQYABayIFJAACQAJAAkAgAyAEQgBCABD4AUUNAAJ/IARC////////P4MhCQJ/IARCMIinQf//AXEiBkH//wFHBEBBBCAGDQEaQQJBAyADIAmEUBsMAgsgAyAJhFALC0UNACACQjCIpyIIQf//AXEiBkH//wFHDQELIAVBEGogASACIAMgBBBWIAUgBSkDECIBIAUpAxgiAiABIAIQ7wQgBSkDCCECIAUpAwAhBAwBCyABIAJC////////P4MgBq1CMIaEIgogAyAEQv///////z+DIARCMIinQf//AXEiB61CMIaEIgkQ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ACEXIAIgAigCACIYQQFqNgIAIBggFzoAAAwACwALIBYgAigCABCTAgsgFEEBaiEUDAALAAu7AgEBfyMAQRBrIgokACAJAn8gAARAIAIQiQchAAJAIAEEQCAKIAAQ8gEgAyAKKAIANgAAIAogABDxAQwBCyAKIAAQqwMgAyAKKAIANgAAIAogABCtAQsgCCAKEIIBIAoQMRogBCAAELcBOgAAIAUgABCXAToAACAKIAAQlgEgBiAKEIIBIAoQMRogCiAAEK4BIAcgChCCASAKEDEaIAAQ8AEMAQsgAhCIByEAAkAgAQRAIAogABDyASADIAooAgA2AAAgCiAAEPEBDAELIAogABCrAyADIAooAgA2AAAgCiAAEK0BCyAIIAoQggEgChAxGiAEIAAQtwE6AAAgBSAAEJcBOgAAIAogABCWASAGIAoQggEgChAxGiAKIAAQrgEgByAKEIIBIAoQMRogABDwAQs2AgAgCkEQaiQACzEBAX8jAEEQayICJAAgAiAAKAIANgIIIAJBCGogARDPBSACKAIIIQAgAkEQaiQAIAALCwAgAEGMsAQQvAELCwAgAEGUsAQQvAELDQAgACgCACABKAIASAsVACAAIAEoAgAQzgQgASgCABDnARoLmBABCn8jAEGwBGsiCyQAIAsgCjYCpAQgCyABNgKoBCALQbYCNgJgIAsgC0GIAWogC0GQAWogC0HgAGoQXSIPKAIAIgE2AoQBIAsgAUGQA2o2AoABIAtB4ABqED0hESALQdAAahA9IQ4gC0FAaxA9IQwgC0EwahA9IQ0gC0EgahA9IRAjAEEQayIBJAAgCwJ/IAIEQCABIAMQggciAhDyASALIAEoAgA2AHggASACEPEBIA0gARDRASABEDEaIAEgAhCtASAMIAEQ0QEgARAxGiALIAIQtwE2AnQgCyACEJcBNgJwIAEgAhCWASARIAEQggEgARAxGiABIAIQrgEgDiABENEBIAEQMRogAhDwAQwBCyABIAMQgQciAhDyASALIAEoAgA2AHggASACEPEBIA0gARDRASABEDEaIAEgAhCtASAMIAEQ0QEgARAxGiALIAIQtwE2AnQgCyACEJcBNgJwIAEgAhCWASARIAEQggEgARAxGiABIAIQrgEgDiABENEBIAEQMRogAhDwAQs2AhwgAUEQaiQAIAkgCCgCADYCACAEQYAEcSISQQl2IRNBACEBQQAhAgNAIAIhCgJAAkACQAJAIAFBBEYNACAAIAtBqARqEIQBRQ0AQQAhBAJAAkACQAJAAkACQCALQfgAaiABaiwAAA4FAQAEAwUJCyABQQNGDQcgB0GAwAAgABBgEK8BBEAgC0EQaiAAEIQHIBAgCygCEBChBAwCCyAFIAUoAgBBBHI2AgBBACEADAYLIAFBA0YNBgsDQCAAIAtBqARqEIQBRQ0GIAdBgMAAIAAQYBCvAUUNBiALQRBqIAAQhAcgECALKAIQEKEEDAALAAsgDBAuQQAgDRAua0YNBAJAIAwQLgRAIA0QLg0BCyAMEC4hAyAAEGAhAiADBEAgDBA4KAIAIAJGBEAgABBsGiAMIAogDBAuQQFLGyECDAgLIAZBAToAAAwGCyACIA0QOCgCAEcNBSAAEGwaIAZBAToAACANIAogDRAuQQFLGyECDAYLIAAQYCAMEDgoAgBGBEAgABBsGiAMIAogDBAuQQFLGyECDAYLIAAQYCANEDgoAgBGBEAgABBsGiAGQQE6AAAgDSAKIA0QLkEBSxshAgwGCyAFIAUoAgBBBHI2AgBBACEADAMLIAogAUECSXJFBEBBACECIBMgAUECRiALLQB7QQBHcXJFDQULIAsgDhCmATYCCCALQRBqIAtBCGoQhgIhAgJAIAFFDQAgASALai0Ad0EBSw0AA0ACQCALIA4Q9AE2AgggAiALQQhqEHNFDQAgB0GAwAAgAigCACgCABCvAUUNACACEIICDAELCyALIA4QpgE2AgggAiALQQhqEN0DIgIgEBAuTQRAIAsgEBD0ATYCCCALQQhqQQAgAmsQgAchAyAQEPQBIQQgDhCmASEUIwBBIGsiAiQAIAIgBDYCECACIAM2AhggAiAUNgIIA0ACQCACQRhqIAJBEGoQcyIDRQ0AIAIoAhggAigCCBDBAUUNACACQRhqEIICIAJBCGoQggIMAQsLIAJBIGokACADQQFzDQELIAsgDhCmATYCACALQQhqIAsQhgIaIAsgCygCCDYCEAsgCyALKAIQNgIIA0ACQCALIA4Q9AE2AgAgC0EIaiALEHNFDQAgACALQagEahCEAUUNACAAEGAgCygCCCgCAEcNACAAEGwaIAtBCGoQggIMAQsLIBJFDQMgCyAOEPQBNgIAIAtBCGogCxBzRQ0DIAUgBSgCAEEEcjYCAEEAIQAMAgsDQAJAIAAgC0GoBGoQhAFFDQACfyAHQYAQIAAQYCICEK8BBEAgCSgCACIDIAsoAqQERgRAIAggCSALQaQEahC4AiAJKAIAIQMLIAkgA0EEajYCACADIAI2AgAgBEEBagwBCyAREC5FIARFcg0BIAIgCygCcEcNASALKAKEASICIAsoAoABRgRAIA8gC0GEAWogC0GAAWoQuAIgCygChAEhAgsgCyACQQRqNgKEASACIAQ2AgBBAAshBCAAEGwaDAELCyAERSALKAKEASICIA8oAgBGckUEQCALKAKAASACRgRAIA8gC0GEAWogC0GAAWoQuAIgCygChAEhAgsgCyACQQRqNgKEASACIAQ2AgALAkAgCygCHEEBSA0AAkAgACALQagEahBvRQRAIAAQYCALKAJ0Rg0BCyAFIAUoAgBBBHI2AgBBACEADAMLA0AgABBsGiALKAIcQQFIDQECQCAAIAtBqARqEG9FBEAgB0GAECAAEGAQrwENAQsgBSAFKAIAQQRyNgIAQQAhAAwECyAJKAIAIAsoAqQERgRAIAggCSALQaQEahC4AgsgABBgIQIgCSAJKAIAIgNBBGo2AgAgAyACNgIAIAsgCygCHEEBazYCHAwACwALIAohAiAIKAIAIAkoAgBHDQMgBSAFKAIAQQRyNgIAQQAhAAwBCwJAIApFDQBBASEEA0AgChAuIARNDQECQCAAIAtBqARqEG9FBEAgABBgIAogBBDqAigCAEYNAQsgBSAFKAIAQQRyNgIAQQAhAAwDCyAAEGwaIARBAWohBAwACwALQQEhACAPKAIAIAsoAoQBRg0AQQAhACALQQA2AhAgESAPKAIAIAsoAoQBIAtBEGoQgAEgCygCEARAIAUgBSgCAEEEcjYCAAwBC0EBIQALIBAQMRogDRAxGiAMEDEaIA4QMRogERAxGiAPEFwgC0GwBGokACAADwsgCiECCyABQQFqIQEMAAsACx0AIAAgARC0ARBuIAEQQigCACEBIAAQQiABNgIACzQBAX8jAEEQayICJAAgAiAAKAIANgIIIAIgAigCCCABajYCCCACKAIIIQAgAkEQaiQAIAALCwAgAEH8rwQQvAELCwAgAEGEsAQQvAELwwEBBn8jAEEQayIEJAAgABBCKAIAIQUCfyACKAIAIAAoAgBrIgNB/////wdJBEAgA0EBdAwBC0F/CyIDQQEgAxshAyABKAIAIQYgACgCACEHIAVBtgJGBH9BAAUgACgCAAsgAxDkAiIIBEAgBUG2AkcEQCAAELQBGgsgBEG1AjYCBCAAIARBCGogCCAEQQRqEF0iBRCGByAFEFwgASAAKAIAIAYgB2tqNgIAIAIgAyAAKAIAajYCACAEQRBqJAAPCxBxAAslAQF/IAEoAgAQ0gRBGHRBGHUhAiAAIAEoAgA2AgQgACACOgAAC80QAQp/IwBBsARrIgskACALIAo2AqQEIAsgATYCqAQgC0G2AjYCaCALIAtBiAFqIAtBkAFqIAtB6ABqEF0iDygCACIBNgKEASALIAFBkANqNgKAASALQegAahA9IREgC0HYAGoQPSEOIAtByABqED0hDCALQThqED0hDSALQShqED0hECMAQRBrIgEkACALAn8gAgRAIAEgAxCJByICEPIBIAsgASgCADYAeCABIAIQ8QEgDSABEIIBIAEQMRogASACEK0BIAwgARCCASABEDEaIAsgAhC3AToAdyALIAIQlwE6AHYgASACEJYBIBEgARCCASABEDEaIAEgAhCuASAOIAEQggEgARAxGiACEPABDAELIAEgAxCIByICEPIBIAsgASgCADYAeCABIAIQ8QEgDSABEIIBIAEQMRogASACEK0BIAwgARCCASABEDEaIAsgAhC3AToAdyALIAIQlwE6AHYgASACEJYBIBEgARCCASABEDEaIAEgAhCuASAOIAEQggEgARAxGiACEPABCzYCJCABQRBqJAAgCSAIKAIANgIAIARBgARxIhJBCXYhE0EAIQFBACECA0AgAiEKAkACQAJAAkAgAUEERg0AIAAgC0GoBGoQhQFFDQBBACEEAkACQAJAAkACQAJAIAtB+ABqIAFqLAAADgUBAAQDBQkLIAFBA0YNByAHQYDAACAAEGEQsAEEQCALQRhqIAAQiwcgECALLAAYEKIEDAILIAUgBSgCAEEEcjYCAEEAIQAMBgsgAUEDRg0GCwNAIAAgC0GoBGoQhQFFDQYgB0GAwAAgABBhELABRQ0GIAtBGGogABCLByAQIAssABgQogQMAAsACyAMEC5BACANEC5rRg0EAkAgDBAuBEAgDRAuDQELIAwQLiEDIAAQYSECIAMEQCAMQQAQNi0AACACQf8BcUYE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A0EXNgIUIAAgAygCABEBAAsCQCACIAEoAhgiA08EQCAIIAEoAhAgA2pNDQELIAEoAihFBEAgACgCACIDQccANgIUIAAgAygCABEBAAsgASgCJARAAkAgASgCECIDQQFIDQAgASgCFCIFIAMgAyAFShsiBSABKAIcIAEoAhgiA2siBiAFIAZIGyIFIAEoAgQgA2siBiAFIAZIGyIFQQFIDQAgAUEwaiEKIAMgASgCCCILbCEGQQAhAwNAIAAgCiABKAIAIANBAnRqKAIAIAYgBSALbCIHIAEoAjQRBQAgASgCECIJIAEoAhQiBSADaiIDTA0BIAYgB2ohBiAFIAkgA2siByAFIAdIGyIFIAEoAhwgASgCGCADaiIHayIJIAUgCUgbIgUgASgCBCAHayIHIAUgB0gbIgVBAEoNAAsLIAFBADYCJAsgASACIAggASgCECIDayIFQQAgBUEAShsgASgCGCACSRsiBjYCGCADQQFIDQAgASgCFCIFIAMgAyAFShsiAyABKAIcIAZrIgUgAyAFSBsiAyABKAIEIAZrIgUgAyAFSBsiBUEBSA0AIAFBMGohCiABKAIIIgsgBmwhBkEAIQMDQCAAIAogASgCACADQQJ0aigCACAGIAUgC2wiByABKAIwEQUAIAEoAhAiCSABKAIUIgUgA2oiA0wNASAGIAdqIQYgBSAJIANrIgcgBSAHSBsiBSABKAIcIAEoAhggA2oiB2siCSAFIAlIGyIFIAEoAgQgB2siByAFIAdIGyIFQQBKDQALCwJAAkACQCABKAIcIgUgCE8NAAJAAkACQCACIAVLBEAgAiEFIARFDQEgACgCACIDQRc2AhQgACADKAIAEQEADAILIAQNAQsgASgCIA0BIAAoAgAiA0EXNgIUIAAgAygCABEBAAwECyABIAg2AhwgASgCIEUNAgsgBSABKAIYIgBrIgMgCCAAayIGTw0AIAEoAgghACAIIAVBf3NqIQogCCAFa0EDcSIFBEADQCABKAIAIANBAnRqKAIAQQAgABAyGiADQQFqIQMgBUEBayIFDQALCyAKQQNJDQADQCADQQJ0IgUgASgCAGooAgBBACAAEDIaIAUgASgCAGooAgRBACAAEDIaIAUgASgCAGooAghBACAAEDIaIAUgASgCAGooAgxBACAAEDIaIANBBGoiAyAGRw0ACwsgBEUNAQsgAUEBNgIkCyABKAIAIAIgASgCGGtBAnRqC9cHAQd/AkACQCACIANqIgggASgCBEsNACABKAIMIANJDQAgASgCAA0BCyAAKAIAIgNBFzYCFCAAIAMoAgARAQALAkAgAiABKAIYIgNPBEAgCCABKAIQIANqTQ0BCyABKAIoRQRAIAAoAgAiA0HHADYCFCAAIAMoAgARAQALIAEoAiQEQAJAIAEoAhAiA0EBSA0AIAEoAhQiBSADIAMgBUobIgUgASgCHCABKAIYIgNrIgYgBSAGSBsiBSABKAIEIANrIgYgBSAGSBsiBUEBSA0AIAFBMGohCiADIAEoAghBB3QiC2whBkEAIQMDQCAAIAogASgCACADQQJ0aigCACAGIAUgC2wiByABKAI0EQUAIAEoAhAiCSABKAIUIgUgA2oiA0wNASAGIAdqIQYgBSAJIANrIgcgBSAHSBsiBSABKAIcIAEoAhggA2oiB2siCSAFIAlIGyIFIAEoAgQgB2siByAFIAdIGyIFQQBKDQALCyABQQA2AiQLIAEgAiAIIAEoAhAiA2siBUEAIAVBAEobIAEoAhggAkkbIgY2AhggA0EBSA0AIAEoAhQiBSADIAMgBUobIgMgASgCHCAGayIFIAMgBUgbIgMgASgCBCAGayIFIAMgBUgbIgVBAUgNACABQTBqIQogASgCCEEHdCILIAZsIQZBACEDA0AgACAKIAEoAgAgA0ECdGooAgAgBiAFIAtsIgcgASgCMBEFACABKAIQIgkgASgCFCIFIANqIgNMDQEgBiAHaiEGIAUgCSADayIHIAUgB0gbIgUgASgCHCABKAIYIANqIgdrIgkgBSAJSBsiBSABKAIEIAdrIgcgBSAHSBsiBUEASg0ACwsCQAJAAkAgASgCHCIFIAhPDQACQAJAAkAgAiAFSwRAIAIhBSAERQ0BIAAoAgAiA0EXNgIUIAAgAygCABEBAAwCCyAEDQELIAEoAiANASAAKAIAIgNBFzYCFCAAIAMoAgARAQAMBAsgASAINgIcIAEoAiBFDQILIAUgASgCGCIAayIDIAggAGsiBk8NACABKAIIQQd0IQAgCCAFQX9zaiEKIAggBWtBA3EiBQRAA0AgASgCACADQQJ0aigCAEEAIAAQMhogA0EBaiEDIAVBAWsiBQ0ACwsgCkEDSQ0AA0AgA0ECdCIFIAEoAgBqKAIAQQAgABAyGiAFIAEoAgBqKAIEQQAgABAyGiAFIAEoAgBqKAIIQQAgABAyGiAFIAEoAgBqKAIMQQAgABAyGiADQQRqIgMgBkcNAAsLIARFDQELIAFBATYCJAsgASgCACACIAEoAhhrQQJ0agseACAAQQEQ0gMgAEEAENIDIAAoAgQQKiAAQQA2AgQLhQMBA38CQCAAAn8gACgCvAMiASgCCARAIAFBADYCCCAAQQAgACgC5AMoAgARAgAgAEECIAAoAsgDKAIAEQIAQQIMAQsCQCAAKAJURQ0AIAAoAogBDQACQCAAKAJcRQ0AIAAoAmxFDQAgACABKAIYNgLkAyABQQE2AggMAQsgACgCZARAIAAgASgCFDYC5AMMAQsgACgCACICQS82AhQgACACKAIAEQEACyAAIAAoAtgDKAIAEQEAIAAgACgCxAMoAggRAQAgACgCRA0BIAEoAhBFBEAgACAAKALgAygCABEBAAsgACAAKALcAygCABEBACAAKAJUBEAgACABKAIIIAAoAuQDKAIAEQIACyAAQQNBACABKAIIGyAAKALIAygCABECAEEACyAAKALAAygCABECAAsCQCAAKAIIIgJFDQAgAiABKAIMIgM2AgwgAiADQQJBASABKAIIG2oiATYCECAAKAJARQ0AIAAoAswDKAIUDQAgAkECQQEgACgCbBsgAWo2AhALCy8BAX8gACgCvAMhASAAKAJUBEAgACAAKALkAygCCBEBAAsgASABKAIMQQFqNgIMCxwAIABBAEEAQQAgASACIAMgACgCyAMoAgQRDAALYQECfwJAIAAoAsADIgQoAjAgBCgCNCIFTwRAIAAgBEEIaiAAKALEAygCDBEDAEUNASAEQQA2AjAgBCgCNCEFCyAAIARBCGogBEEwaiAFIAEgAiADIAAoAsgDKAIEEQwACwu4BwENfwJAIAAoAsADIgQoAjhFBEAgACAEIAQoAkRBAnRqKAI8IAAoAsQDKAIMEQMARQ0BIARBATYCOCAEIAQoAkxBAWo2AkwLAkACQAJAIAQoAkgOAwECAAMLIAAgBCAEKAJEQQJ0aigCPCAEQTBqIAQoAjQgASACIAMgACgCyAMoAgQRDAAgBCgCMCAEKAI0SQ0CIARBADYCSCACKAIAIANPDQILIARBADYCMCAEIAAoAsgCIgxBAWs2AjQCQCAEKAJMIAAoAswCRw0AIAAoAiQiDUEBSA0AIAAoAsADIg8gDygCREECdGohECAAKALYASEIA0AgCCgCMCAIKAIoIAgoAgxsIgVwIgYgBSAGGyIGQQFrIQcgBSAMbSEFIApFBEAgDyAHIAVtQQFqNgI0CwJAIAVBAUgNACAQKAI8IApBAnRqKAIAIgkgB0ECdGohByAFQQF0IgVBASAFQQFKGyILQQNxIQ5BACEFIAtBAWtBA08EQCALQfz///8HcSELA0AgCSAFIAZqQQJ0aiAHKAIANgIAIAkgBUEBciAGakECdGogBygCADYCACAJIAVBAnIgBmpBAnRqIAcoAgA2AgAgCSAFQQNyIAZqQQJ0aiAHKAIANgIAIAVBBGohBSALQQRrIgsNAAsLIA5FDQADQCAJIAUgBmpBAnRqIAcoAgA2AgAgBUEBaiEFIA5BAWsiDg0ACwsgCEHYAGohCCAKQQFqIgogDUcNAAsLIARBATYCSAsgACAEIAQoAkRBAnRqKAI8IARBMGogBCgCNCABIAIgAyAAKALIAygCBBEMACAEKAIwIAQoAjRJDQACQCAEKAJMQQFHBEAgACgCyAIiAEECaiEDIABBAWohAQwBCyAAKALIAiIHQQJqIQMgB0EBaiEBIAAoAiQiDkEBSA0AIAAoAsADIQogACgC2AEhAEEAIQkDQCAAKAIoIAAoAgxsIAdtIgJBAU4EQCACIANsIQ8gASACbCELIAlBAnQiBSAKKAJAaigCACEIIAooAjwgBWooAgAhBkEAIQUDQCAGIAUgAmtBAnQiDGogBiAFIAtqQQJ0Ig1qKAIANgIAIAggDGogCCANaigCADYCACAGIAUgD2pBAnQiDGogBiAFQQJ0Ig1qKAIANgIAIAggDGogCCANaigCADYCACAFQQFqIgUgAkcNAAsLIABB2ABqIQAgCUEBaiIJIA5HDQALCyAEQQA2AjggBEECNgJIIAQgAzYCNCAEIAE2AjAgBCAEKAJEQQFzNgJECwuOBwEQfyAAKALAAyEHAkACQAJAIAEOAwACAQILIAAoAtwDKAIIBEAgB0HMATYCBCAAKAIkIg9BAU4EQCAAKALIAiIMQQJrIRAgDEECaiERIAAoAtgBIQsDQCANQQJ0IgAgBygCQGooAgAhASAHKAI8IABqKAIAIQQgACAHaigCCCEFAkAgCygCKCALKAIMbCAMbSIGIBFsIgJBAUgNACACQQNxIQhBACEAIAJBAWtBA08EQCACQXxxIQkDQCABIABBAnQiAmogAiAFaigCACIDNgIAIAIgBGogAzYCACABIAJBBHIiA2ogAyAFaigCACIKNgIAIAMgBGogCjYCACABIAJBCHIiA2ogAyAFaigCACIKNgIAIAMgBGogCjYCACABIAJBDHIiAmogAiAFaigCACIDNgIAIAIgBGogAzYCACAAQQRqIQAgCUEEayIJDQALCyAIRQ0AA0AgASAAQQJ0IgJqIAIgBWooAgAiCTYCACACIARqIAk2AgAgAEEBaiEAIAhBAWsiCA0ACwsCQCAGQQFIDQAgBiAQbCECIAYgDGwhCSAGQQF0IghBASAIQQFKGyIDQQFxIQpBACEAIAhBAk4EQCADQf7///8HcSEIA0AgASAAIAJqQQJ0IgNqIAUgACAJakECdCIOaigCADYCACABIA5qIAMgBWooAgA2AgAgASAAQQFyIgMgAmpBAnQiDmogBSADIAlqQQJ0IgNqKAIANgIAIAEgA2ogBSAOaigCADYCACAAQQJqIQAgCEECayIIDQALCyAKBEAgASAAIAJqQQJ0IghqIAUgACAJakECdCIAaigCADYCACAAIAFqIAUgCGooAgA2AgALIAZBA3EhBUEAIQEgBkEBa0EDTwRAIAZBfHEhAANAIAQgASAGa0ECdGogBCgCADYCACAEIAFBAXIgBmtBAnRqIAQoAgA2AgAgBCABQQJyIAZrQQJ0aiAEKAIANgIAIAQgAUEDciAGa0ECdGogBCgCADYCACABQQRqIQEgAEEEayIADQALCyAFRQ0AA0AgBCABIAZrQQJ0aiAEKAIANgIAIAFBAWohASAFQQFrIgUNAAsLIAtB2ABqIQsgDUEBaiINIA9HDQALCyAHQQA2AkwgB0IANwJEIAdBADYCOA8LIAdBzQE2AgQgByAHKAI0NgIwDwsgB0HOATYCBA8LIAAoAgAiAUEDNgIUIAAgASgCABEBAAuMCwEtfyMAQYABayIHJAAgACgCzAJBAWshKSAAKALEAyEUAn8CQANAIAAoApABIgMgACgCmAEiBUoNASAAKALMAyILKAIUDQEgAyAFRgRAIAAoApQBIAAoApwBIAAoApwDRWpLDQILIAAgCygCABEAAA0AC0EADAELIAAo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BCAFIAlqLQAAIgU6AAQgBCAFIAxqQYABczoABSAEIAUgC2pBgAFzOgADIABBAmohACAEQQZqIQQgB0ECayIHDQALCyAPRQ0AIAAgCmotAAAhByAAIAZqLQAAIQYgBCAAIAlqLQAAIgA6AAEgBCAAIAZqQYABczoAAiAEIAAgB2pBgAFzOgAACyADQQRqIQMgAkEBaiECIA1BAWshBCANQQJODQALCwumAgEJfyAEQQFOBEAgACgCcCIFQX5xIQwgBUEBcSENA0AgBCEJAkAgBUUNACACQQJ0IgAgASgCCGooAgAhBiABKAIEIABqKAIAIQcgASgCACAAaigCACEIIAMoAgAhBEEAIQAgDCEKIAVBAUcEQANAIAQgACAIai0AADoAACAEIAAgB2otAAA6AAEgBCAAIAZqLQAAOgACIAQgCCAAQQFyIgtqLQAAOgADIAQgByALai0AADoABCAEIAYgC2otAAA6AAUgAEECaiEAIARBBmohBCAKQQJrIgoNAAsLIA1FDQAgBCAAIAhqLQAAOgAAIAQgACAHai0AADoAASAEIAAgBmotAAA6AAILIANBBGohAyACQQFqIQIgCUEBayEEIAlBAk4NAAsLC6ICAQ1/IARBAEoEQCAAKALQAiEFIAAoAnAhByAAKALgAyIAKAIUIQogACgCECELIAAoAgwhDCAAKAIIIQ0DQCAEIQggBwRAIAJBAnQiACABKAIIaigCACEOIAEoAgQgAGooAgAhDyABKAIAIABqKAIAIRAgAygCACEEQQAhAANAIAAgD2otAAAhBiAEIAUgACAQai0AACIJIA0gACAOai0AAEECdCIRaigCAGpqLQAAOgAAIAQgBSAJIAsgEWooAgAgCiAGQQJ0IgZqKAIAakEQdWpqLQAAOgABIAQgBSAJIAYgDGooAgBqai0AADoAAiAEQQNqIQQgAEEBaiIAIAdHDQALCyADQQRqIQMgAkEBaiECIAhBAWshBCAIQQJODQALCwvOAgEIfyAEQQFOBEAgACgCcCIIQXxxIQogCEEDcSELIAhBAWtBA0khDANAIAQhCQJAIAhFDQAgASgCACACQQJ0aigCACEGIAMoAgAhBEEAIQAgCiEHIAxFBEADQCAEIAAgBmotAAAiBToAASAEIAU6AAIgBCAFOgAAIAQgBiAAQQFyai0AACIFOgAEIAQgBToABSAEIAU6AAMgBCAGIABBAnJqLQAAIgU6AAcgBCAFOgAIIAQgBToABiAEIAYgAEEDcmotAAAiBToACiAEIAU6AAsgBCAFOgAJIABBBGohACAEQQxqIQQgB0EEayIHDQALCyALIgdFDQADQCAEIAAgBmotAAAiBToAASAEIAU6AAIgBCAFOgAAIABBAWohACAEQQNqIQQgB0EBayIHDQALCyADQQRqIQMgAkEBaiECIAlBAWshBCAJQQJODQALCwvqAQEHfyAEQQBKBEAgACgCcCEHIAAoAuADKAIYIQUDQCAEIQAgBwRAIAJBAnQiBCABKAIIaigCACEIIAEoAgQgBGooAgAhCSABKAIAIARqKAIAIQogAygCACELQQAhBANAIAQgC2ogBSAEIAlqLQAAIgZBAnRBgAhyaigCACAFIAZBgAFqIgYgBCAKai0AAGpB/wFxQQJ0aigCAGogBSAGIAQgCGotAABqQf8BcUECdEGAEHJqKAIAakEQdjoAACAEQQFqIgQgB0cNAAsLIANBBGohAyACQQFqIQIgAEEBayEEIABBAk4NAAsLC9QBAQZ/IARBAEoEQCAAKAJwIQYgACgC4AMoAhghBQNAIAQhACAGBEAgAkECdCIEIAEoAghqKAIAIQcgASgCBCAEaigCACEIIAEoAgAgBGooAgAhCSADKAIAIQpBACEEA0AgBCAKaiAFIAQgB2otAABBAnRBgBByaigCACAFIAQgCGotAABBAnRBgAhyaigCACAFIAQgCWotAABBAnRqKAIAampBEHY6AAAgBEEBaiIEIAZHDQALCyADQQRqIQMgAkEBaiECIABBAWshBCAAQQJODQALCwsXACABKAIAIAIgA0EAIAQgACgCcBCFAws8ACAAIAEgAigCACAEIAUoAgBBAnRqIAAoAtwDKAIMEQYAIAUgBSgCAEEBajYCACACIAIoAgBBAWo2AgALvQMBDH8gAkECdCICIAEoAghqKAIAIQUgASgCBCACaigCACEGIAEoAgAgAmooAgAhByADKAIAIQEgACgC0AIhAiAAKALcAyIDKAIcIQggAygCGCELIAMoAhQhDCADKAIQIQ0gACgCcCIDQQF2Ig4EfwNAIAwgBi0AAEECdCIEaigCACEDIAsgBS0AAEECdCIJaigCACEKIAQgCGooAgAhDyABIAIgCSANaigCACIJIActAAAiBGpqLQAAOgAAIAEgAiAEIAogD2pBEHUiCmpqLQAAOgABIAEgAiADIARqai0AADoAAiABIAIgCSAHLQABIgRqai0AADoAAyABIAIgBCAKamotAAA6AAQgASACIAMgBGpqLQAAOgAFIAFBBmohASAHQQJqIQcgBUEBaiEFIAZBAWohBiAOQQFrIg4NAAsgACgCcAUgAwtBAXEEQCAMIAYtAABBAnQiAGooAgAhAyALIAUtAABBAnQiBWooAgAhBiAAIAhqKAIAIQggASACIActAAAiACAFIA1qKAIAamotAAA6AAAgASACIAAgBiAIakEQdWpqLQAAOgABIAEgAiAAIANqai0AADoAAgsLiwIBBH8jAEEQayIHJAACQAJAIAAoAtwDIgMoAiQEQCADQSBqQQAgBCAFKAIAQQJ0akEAQQEgAygCKBCFAyADQQA2AiQgBSAFKAIAQQFqNgIAIAMgAygCLEEBazYCLAwBCyADKAIsIQggByAEIAUoAgAiCUECdGoiCigCADYCCCAHAn8gBiAJayIEIAhBAiAIQQJJGyIGIAQgBkkbIgRBAk8EQCAKKAIEDAELIANBATYCJCADKAIgCzYCDCAAIAEgAigCACAHQQhqIAMoAgwRBgAgAygCJCEAIAUgBSgCACAEajYCACADIAMoAiwgBGs2AiwgAA0BCyACIAIoAgBBAWo2AgALIAdBEGokAAuJBQEOfyACQQJ0IgUgASgCCGooAgAhCiABKAIEIAVqKAIAIQsgASgCACIFIAJBA3QiAWooAgAhByAFIAFBBHJqKAIAIQggAygCBCECIAMoAgAhAyAAKALQAiEEIAAoAtwDIgEoAhwhDiABKAIYIQ8gASgCFCEQIAEoAhAhESAAKAJwIgFBAXYiCQR/A0AgECALLQAAQQJ0IgFqKAIAIQwgDyAKLQAAQQJ0IgZqKAIAIQUgASAOaigCACEBIAMgBCAGIBFqKAIAIg0gBy0AACIGamotAAA6AAAgAyAEIAYgASAFakEQdSIFamotAAA6AAEgAyAEIAYgDGpqLQAAOgACIAMgBCANIActAAEiAWpqLQAAOgADIAMgBCABIAVqai0AADoABCADIAQgASAMamotAAA6AAUgAiAEIA0gCC0AACIBamotAAA6AAAgAiAEIAEgBWpqLQAAOgABIAIgBCABIAxqai0A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JAAgBAs2ACAAQQA2AtgBIABBADYCuAMgAEEANgKQASAAKALQAyIAQQA2AqQBIABBADYCGCAAQgA3AgwLvzoBDn8jAEGgAmsiCSQAIAAoArgDIQEDQAJAAkACQCABDQAgACgC0AMoAgxFBEAgACgCGCICKAIEIgFFBEAgACACKAIMEQAARQRAQQAhAQwECyACKAIEIQELIAIoAgAiAy0AACEFIAFBAWsiBAR/IANBAWoFIAAgAigCDBEAAEUEQEEAIQEMBAsgAigCBCEEIAIoAgALIgFBAWohAyAFQf8BRkEAIAEtAAAiAUHYAUYbRQRAIAAoAgAiBiAFNgIYIAZBNzYCFCAAKAIAIAE2AhwgACAAKAIAKAIAEQEACyAAIAE2ArgDIAIgBEEBazYCBCACIAM2AgAMAQsgABDWA0UEQEEAIQEMAgsgACgCuAMhAQsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAFBAWsO/gEPERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERIBAgUJBQUFBQMEBQgFBQUPDw8PDw8PDwAHBgoQCxERDQ0NDQ0NDQ0NDQ0NDQ0NDRERERERERERDBERERERDhELIAAoAgAiAkHoADYCFCAAQQEgAigCBBECACAAKALQAyIBKAIMBEAgACgCACICQcAANgIUIAAgAigCABEBACAAKALQAyEBCyAAQgA3AOgBIABCADcA8AEgAEKBgoSIkKDAgAE3AIACIABCgYKEiJCgwIABNwD4ASAAQoWKlKjQoMGCBTcAkAIgAEKFipSo0KDBggU3AIgCIABCADcDsAIgAEEANgIoIABCADcDmAIgAEEAOgCsAiAAQoGABDcCpAIgAEEAOgCiAiAAQYECOwGgAiABQQE2AgwMFAtBACEBIABBAEEAQQAQxwINEwwSC0EAIQEgAEEAQQFBABDHAg0SDBELQQAh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AgQhAyABKAIAIQIgACgC0AMoAhBFBEAgACgCACIEQTw2AhQgBEEYakHhwQJB0AAQNxogACAAKAIAKAIAEQEACwJAAkAgACgCJEEDSA0AIANFBEAgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCACECCyACLQAAIQQgA0EBayIDBH8gAkEBagUgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCAAshAiADQQFrIQMgAi0AACAEQQh0ckEYRwRAIAAoAgAiBEEMNgIUIAAgBCgCABEBAAsgAwR/IAJBAWoFIAAgASgCDBEAAEUEQEEAIQEMCwsgASgCBCEDIAEoAgALIQIgA0EBayEDIAItAABBDUcEQCAAKAIAIgRBxgA2AhQgBCAAKAK4AzYCGCAAIAAoAgAoAgARAQALIAMEfyACQQFqBSAAIAEoAgwRAABFBEBBACEBDAsLIAEoAgQhAyABKAIACyICLQAAIQQgA0EBayIDBH8gAkEBagUgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCAAsiBUEBaiECIANBAWshAyAFLQAAIARBCHRyQf8BRw0AIANFBEAgACABKAIMEQAARQRAQQAhAQwLCyABKAIEIQMgASgCACECCyACQQFqIQQgA0EBayEDIAItAABBA0cEQCAEIQIMAQsgA0UEQCAAIAEoAgwRAABFBEBBACEBDAsLIAEoAgQhAyABKAIAIQQLIARBAWohAiADQQFrIQMgACgC2AEiBygCWCAELQAARw0AIANFBEAgACABKAIMEQAARQRAQQAhAQwLCyAAKALYASEHIAEoAgQhAyABKAIAIQILIAJBAWohBCADQQFrIQMgBygCACACLQAARwRAIAQhAgwBCyADRQRAIAAgASgCDBEAAEUEQEEAIQEMCwsgACgC2AEhByABKAIEIQMgASgCACEECyAEQQFqIQIgA0EBayEDIAcoArABIAQtAABHDQAgA0UEQCAAIAEoAgwRAABFBEBBACEBDAsLIAEoAgQhAyABKAIAIQILIAJBAWohBCADQQFrIQMgAi0AAEGAAUcEQCAEIQIMAQsgA0UEQCAAIAEoAgwRAABFBEBBACEBDAsLIAEoAgQhAyABKAIAIQQLIAQtAAAhBSADQQFrIgMEfyAEQQFqBSAAIAEoAgwRAABFBEBB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ACABQQFqIQEgAkEBaiICQYACRw0ACwsMAQsgACIBIABBAUEcIAAoAgQoAgARBAAiAjYC4AMgAkGEATYCAAJAAkACQCAAKAIoIgNBB0sNAAJAQQEgA3RBzAFxRQRAQQEgA3RBMHENASADQQFHDQIgASgCJEEBRw0DDAQLIAEoAiRBA0cNAgwDCyABKAIkQQRHDQEMAgsgASgCJEEASg0BCyABKAIAIgNBCzYCFCABIAMoAgARAQALAkAgASgCsAJFDQACQCABKAIoQQJrDgUBAAAAAQALIAEoAgAiA0EcNgIUIAEgAygCABEBAAsCQAJAAkACQAJAAkAgASgCLCIDQQFrDgYAAQQDBAIECyABQQE2AngCQAJAAkAgASgCKEEBaw4HAAEAAgICAAILIAJBhQE2AgQgASgCJCIEQQJIDQYgBEEBayIGQQdxIQMgASgC2AEhBUEBIQIgBEECa0EHTwRAIAZBeHEhBgNAIAUgAkHYAGxqIgRBADYCNCAEQQA2AowBIARBADYC5AEgBEEANgK8AiAEQQA2ApQDIARBADYC7AMgBEEANgLEBCAEQQA2ApwFIAJBCGohAiAGQQhrIgYNAAsLIANFDQYDQCAFIAJB2ABsakEANgI0IAJBAWohAiADQQFrIgMNAAsMBgsCQAJAAkACQCABKAKwAg4CAAECCyACQYYBNgIEDAILIAJBhwE2AgQMAQsgASgCACICQRw2AhQgASACKAIAEQEACyABKALgAyABQQFBgBggASgCBCgCABEEACIFNgIYQQAhAgNAIAUgAkECdGoiAyACQYuZAWw2AgAgA0GAEGogAkGvOmxBgIACajYCACADQYAIaiACQcasAmw2AgAgBSACQQFyIgRBAnRqIARBi5kBbDYCACADQYQQaiAEQa86bEGAgAJqNgIAIANBhAhqIARBxqwCbDYCACACQQJqIgJBgAJHDQALDAULIAEoAgAiAkEcNgIUIAEgAigCABEBAAwECyABQQM2AngCQAJAAkACQAJAIAEoAihBAWsOBwADAQQEBAIECyACQYgBNgIEDAcLIAJBiQE2AgQgARCgBQwGCyACQYkBNgIEIAEoAuADIgIgAUEBQYAIIAEoAgQoAgARBAA2AgggAiABQQFBgAggASgCBCgCABEEADYCDCACIAFBAUGACCABKAIEKAIAEQQANgIQIAIg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AkwgAUIANwI8IAFCADcCRCAAIAE2AgQCQEHMzQIQ+gIiA0UNACACQfgAOgALIAIgAkEMajYCACACIAJBC2o2AgQgA0HUzQIgAhChAUEBSA0AAkAgAi0AC0EgckHtAEcEQCACKAIMIQMMAQsgAiACKAIMQegHbCIDNgIMCyABIANB6AdsNgIsCyACQRBqJAAgAEEANgK4AiAAQQA2AhggAEEANgIIIABCADcCpAEgAEIANwKsASAAQgA3ArQBIABCADcCvAEgAEIANwLEASAAQgA3AswBIAAgAEEAQawBIAAoAgQoAgARBAAiATYC0AMgAUIANwJgIAFB6wA2AhwgAUHsADYCCCABQe0ANgIEIAFB7gA2AgAgAUEANgJoIAFB6wA2AiQgAUHrADYCKCABQgA3AmwgAUHrADYCLCABQesANgIwIAFCADcCdCABQesANgI0IAFB6wA2AjggAUIANwJ8IAFB6wA2AjwgAUEANgKEASABQesANgJAIAFCADcCiAEgAUHrADYCRCABQesANgJIIAFB6wA2AkwgAUHrADYCUCABQgA3ApABIAFB6wA2AlQgAUIANwKYASABQQA2AqABIAFB6wA2AlwgAUHvADYCICABQe8ANgJYIABBADYCuAMgAEEANgKQASAAQQA2AtgBIAAoAtADIgFBADYCpAEgAUEANgIYIAFCADcCDCAAIABBAEEcIAAoAgQoAgARBAAiATYCzAMgAUEBNgIYIAFCADcCECABQecANgIMIAFB6AA2AgggAUHpADYCBCABQeoANgIAIABByAE2AhQLuA0BCH9BAiECAkAgACgCzAMiBSgCFA0AA0ACQCAAAn8CQAJAIAAgACgC0AMoAgQRAAAiAkEBRwRAIAJBAkcNBiAFQQE2AhQgBSgCGEUNAUECIQIgACgC0AMoAhBFDQYgACgCACIBQT42AhQgACABKAIAEQEAQQIPCwJAAkACQCAFKAIYDgICAQALIAAoAtQCIQIMBQsCQCAAKAIgQdz/A0wEQCAAKAIcQd3/A0gNAQsgACgCAEKqgICAwPs/NwIUIAAgACgCACgCABEBAAsgACgC1AEiAUEIa0EFTwRAIAAoAgAiAiABNgIYIAJBEDYCFCAAIAAoAgAoAgARAQALIAAoAiQiA0ELTgRAIAAoAgAiASADNgIYIAFBGzYCFCAAKAIAQQo2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AQsgAigCeCIERQ0BIAAgAigCfCIFSA0BIAAgAigCgAFKDQEgBCAAIAVrQQJ0agsoAgAiBA0BCyACIAA2AhggAigCcCgCACEECyAEIQACQAJAA0AgAC0AACIFRQ0BIABBAWohACAFQSVHDQALIAAtAABB8wBHDQAgAyACQRhqNgIgIAEgBCADQSBqEJ0CDAELIAIpAiAhBiACKQIoIQcgAikCGCEIIAMgAikCMDcDGCADIAc3AxAgAyAGNwMIIAMgCDcDACABIAQgAxCdAgsgA0EwaiQACxUAIAAoAgAiAEEANgIUIABBADYCbAsMACAAKAIYQQE2AiQLiwEBAn8gACgCGCIBKAIgQQFBgCAgASgCHBBZIgJFBEAgASgCJARAIAAoAgAiAkErNgIUIAAgAigCABEBAAsgACgCACICQfsANgIUIABBfyACKAIEEQIAIAEoAiBB/wE6AAAgASgCIEHZAToAAUECIQILIAFBADYCJCABIAI2AgQgASABKAIgNgIAQQELVAECfyABQQFOBEAgASAAKAIYIgIoAgQiA0oEQANAIAAgAigCDBEAABogASADayIBIAIoAgQiA0oNAAsLIAIgAyABazYCBCACIAIoAgAgAWo2AgALC3sBAX8gACgCGCICRQRAIAAgAEEAQSggACgCBCgCABEEACICNgIYIAIgAEEAQYAgIAAoAgQoAgARBAA2AiAgACgCGCECCyACIAE2AhwgAkHdADYCGCACQd4ANgIUIAJB3wA2AhAgAkHgADYCDCACQeEANgIIIAJCADcCAAsiAQF9QX8gACoCACABKgIAkyICQwAAAABeIAJDAAAAAF0bCxAAIAAoAgBBhAFqQQEQCQALCwAgASACIAARJQALCwAgASACIAARAgALKwIBfwF8IwBBEGsiAiQAIAIgASAAERoAOQMIIAIrAwghAyACQRBqJAAgAwsLACABIAIgABEUAAsnAQF/IwBBEGsiASQAIAEgABEOADYCDCABKAIMIQAgAUEQaiQAIAALCQAgASAAEQEACzUBAX8jAEEQayICJAAgAiABEK4FIAIgAiAAEQAANgIMIAIoAgwhACACEDEaIAJBEGokACAACysBAX8jAEEQayIDJAAgAyABIAIgABEDADYCDCADKAIMIQAgA0EQaiQAIAALNwEBfyMAQRBrIgMkACADIAIQrgUg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wPMDKAIADAELIAAoAgAgAkHAAmxqIgBBEGoQ2QMgACgCsAIhASAAKAIAIQIgACgCBCEEIAMgACsDCDkDECADIAQ2AgggAyACNgIEIAMgATYCAEGRgwRBwfcBIAMQChpBAAshASADQTBqJAAgAQteAQF/IwBBEGsiASQAIAEgADYCDCABQZySBCABQQxqEEU2AgggARBANgIAQbzzAyEAIAFBCGogARBIBH9BvPMDBSABQQxqEEkoAtgBQSxqCygCACEAIAFBEGokACAAC/4dAw9/A3wHfSMAQTBrIgskACALIAA2AiwgC0GckgQgC0EsahBFNgIAIAsQQDYCKAJ/IAsgC0EoahBIBEBBvPMDKAIADAELIAtBLGoQSSEAIAtBAEEoEDIhBSAAKALEASECIAVBATYCECAFIAI2AgAgBSAAKALMATYCDCAAKALYASEBIwBB0ABrIgckAAJAAkAgAUUgBUVyDQAgAUEANgIsIAFBLGohDAJAAkACQCABKAL0hq8DIgBBBEYEQCABKAL8hq8DIgBBAU4EQCABIABBAWs2AvyGrwMMAgsgByABKAIQIgQgASgCgIevA2oiAEH/ASAAQf8BSBsiBjYCRCABKAKEh68DIQIgByAENgJMQQAhACAHIAQgAmsiAkEAIAJBAEobIgg2AkggAUEwaiEKIAFBsPgAaiENIAFBuPgAaiECIAFB4IanAmohCQJAA0AgAEEDRwRAIAUoAgwgASgCJCABKAIoIAEoAgAgASgCDCAAQQJ0Ig4gB0HEAGpqKAIAIAEoAhQgCUEAEJoEQQBIDQIgASgCJCABKAIoIAkgASgCFCACIA0Q5QVBAEgNAiAFKAIAIAEoAiQgASgCKCABKAIEIAIgASgCsHggASgC8IavAyABKAIUIAEoAhggASgCIEG4AWogASsDkIevAyAKIAwgASgCmIevAxCaBUEASA0CIAdBOGogDmogDCgCADYCACAAQQFqIQAMAQsLAkAgASgCAEEBRwRAIAcoAkAhAyAHKAI4IQIMAQsgByAGNgIwIAcgBygCOCICNgI0IAcgCDYCICAHIAcoAjw2AiQgByAENgIoIAcgBygCQCIDNgIsQQBBA0GV0wAgB0EgahAvCwJ/IAMgBygCPCIJSCACIANKckUEQAJAIAECfyABKAKAh68DIgMgASgChIevAyICSARAIANB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AygCCCAEKAIIRw0JA0AgBiADKAIITw0NQQAhCyAGIAIoAghPBEBB4KkEQZDdARApQa3eARApQaImEClB9wAQLEG6KxApQbXfARApEC0MFgsgAigCGCACKAIMIAZsaiESIAMgBhBGIRUgBCAGEEYhGgNAIAsgAygCBE8EQCAGQQFqIQYMAgUgEiALQQJ0IgpqIAogFWoqAgAgCiAaaioCAJM4AgAgC0EBaiELDAELAAsACwALQeCpBEGx2wAQKUGIGhApQaImEClB1gAQLEG6KxApQa7iABApEC0MCQtB4KkEQdHmABApQYgaEClBoiYQKUHXABAsQborEClBruIAECkQLQwIC0HgqQRBuuoAEClBiBoQKUGiJhApQdgAECxBuisQKUGu4gAQKRAtDAcLQeCpBEGK/AAQKUGIGhApQaImEClB2QAQLEG6KxApQdv/ABApEC0MBgtB4KkEQeqDARApQYgaEClBoiYQKUHaABAsQborEClB2/8AECkQLQwFC0HgqQRBr4YBEClBiBoQKUGiJhApQdsAECxBuisQKUHb/wAQKRAtDAQLQeCpBEH9iQEQKUGIGhApQaImEClB3AAQLEG6KxApQdqMARApEC0MAwtB4KkEQb2PARApQYgaEClBoiYQKUHdABAsQborEClBhpIBECkQLQwCC0HgqQRBzZQBEClBiBoQKUGiJhApQd4AECxBuisQKUHajAEQKRAtDAELQeCpBEGDlgEQKUGIGhApQaImEClB3wAQLEG6KxApQYaSARApEC0LDAkLAAsACwALQeCpBEGXNhApQYgaEClBoiYQKUHIABAsQborEClB6DwQKRAtDAULQeCpBEHDwgAQKUGIGhApQaImEClByQAQLEG6KxApQbHJABApEC0MBAtB4KkEQdTQABApQYgaEClBoiYQKUHKABAsQborEClBjdcAECkQLQwDCwsgDRByAn8gI0GBmwEQiQEhNUEBCwRAAkAgDkEgaiEVIwBBMGsiCyQAIA5BPGoiMRCHBCAOQSBqITYgC0EIakEEciErIA4qAjQQZyFDQQEhAgNAAkACQAJAAkACQAJAAkACQCA2EJ4BQQFrIAJLBEAgFSACQQFrEIYEIQUgFSACEIYEIQcgFSACQQFqIgMQhgQhBgJ/IBUQngEgAksEQCAVQQAQRCgCBCAVIAIQRCgCBG6zEL4G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IAsgEjYCFCALIAAqAgA4AiAgCyAJIBIgRBCgAzgCJCALQQhqICsgArMgRSASEOICIDEgC0EIahDhAgsgAkEBaiECDAELAAsACwALIAtBMGokAAwJC0HgqQRB0qIBEClBiBoQKUGiJhApQcABECxBuisQKUGopQEQKRAtDAYLQeCpBEHLpwEQKUGIGhApQaImEClBwQEQLEG6KxApQailARApEC0MBQtB4KkEQdKiARApQYgaEClBoiYQKUGVAhAsQborEClBqKUBECkQLQwEC0HgqQRBy6kBEClBiBoQKUGiJhApQZYCECxBuisQKUGopQEQKRAtDAMLQeCpBEGwrAEQKUGIGhApQaImEClB6gIQLEG6KxApQailARApEC0MAgtB4KkEQb2uARApQYgaEClBoiYQKUHrAhAsQborEClBqKUBECkQLQwBCyADIQIMAQsLDAMLCyA1EHICfyAjQeicARCJASEdQQELBEACQEEAIRJBACEVIwBB0ABrIgAkACAOQSBqIQ0gDkE8aiELIA4qAjQQZyFAIA4qAjhDAACAP5IQZyAOKgI4lSFCAkACQANAIAsQeyASSwRAIAsgEhCdASIHKAIQIA0oAhBODQIgBygCDCECIA0oAhAhAyAHKAIQIQQgAEEEaiAAIAcqAgAgByoCBCAHKAIMEIUEAn8gACoCAEMAAAA/kiI9i0MAAABPXQRAID2oDAELQYCAgIB4CyEGAn8gACoCBEMAAAA/kiI9i0MAAABPXQRAID2oDAELQYCAgIB4CyEKAkACfyANIAIgA2wgBGoiBEEBaxBEIQIgDSAEEEQiGiEDAkACQAJAAkACQAJAIA0gBEEBahBEIgUoAgQgAigCBCADKAIERkYEQCAFKAIIIAIoAgggAygCCEZHDQIjAEEgayIEJAACQAJAAkACQAJAAkACQCAKQQFIDQAgAygCBCAKQQFqTQ0AIAZBAUgNASAGQQFqIhEgAygCCE8NASACKAIEIAMoAgRHDQIgAigCBCAFKAIERw0DIAIoAgggAygCCEcNBCACKAIIIAUoAghHDQUgAiAGQQFrIhYQRiEXIAIgBhBGIR4gAiAREEYhHyADIAYQRiEcIAUgFhBGIRYgBSAGEEYhJiAFIBEQRiEFIARBHGogBEEYaiAEQRRqIARBEGogBEEMaiADIAogBhD+AyAfIApBAnQiAmoqAgAhQyACIBdqKgIAIUEgAiAFaioCACFEIAIgFmoqAgAhRSACICZqIgMqAgAhPSACIB5qIgUqAgAhPiACIBxqKgIAIT8gBSoCBCFGIAVBBGsqAgAhRyADKgIEIUggA0EEayoCACFJIAAgBCoCFDgCICAAIAQqAgwiSjgCLCAAIEo4AiQgACBHIEaTIEggSZOSQwAAgD6UIkY4AiggBCoCECFHIAAgPSA+ID8gP5KTkjgCQCAAIEEgQ5MgRCBFk5JDAACAPpQiPzgCPCAAIEY4AjggACA/OAI0IAAgRzgCMCAAIAQqAhyMOAIUIAQqAhghPyAAID0gPpNDAAAAv5Q4AhwgACA/jDgCGCAEQSBqJAAMBgtB4KkEQaXMARApQfbDARApQaImEClBtQIQLEG6KxApQeXNARApEC0MDAtB4KkEQYfOARApQfbDARApQaImEClBtgIQLEG6KxApQerOARApEC0MCwtB4KkEQZvPARApQfbDARApQaImEClBtwIQLEG6KxApQeHPARApEC0MCgtB4KkEQafQARApQfbDARApQaImEClBuAIQLEG6KxApQeHPARApEC0MCQtB4KkEQYDRARApQfbDARApQaImEClBuQIQLEG6KxApQeHPARApEC0MCAtB4KkEQczRARApQfbDARApQaImEClBugIQLEG6KxApQeHPARApEC0MBwsMAQsCQCACKAIEIAMoAgRHDQAgBSgCBCADKAIEQQF2Rw0AIAIoAgggAygCCEcNAyAFKAIIIAMoAghBAXZHDQMjAEEgayIEJAACQAJAAkACQAJAAkACQAJAAkACQAJAIApBAUgNACADKAIEIApBAWpNDQAgBkEBSA0BIAZBAWoiESADKAIITw0BIAIoAgQgAygCBEcNAiAFKAIEIAIoAgRBAXZHDQMgAigCCCADKAIIRw0EIAUoAgggAigCCEEBdkcNBSACIAZBAWsQRiEWIAIgBhBGIRcgAiAREEYhESADIAYQRiEeIARBHGogBEEYaiAKsiAGskEBEIUEIAQqAhwiPUMAAAC/kkMAAAAAYEUNBiAEKgIYQwAAAL+SQwAAAABgRQ0HIAUoAgSzID1DAAAAP5JeRQ0IIAUoAgizIAQqAhhDAAAAP5JeRQ0JIARBFGogBEEQaiAEQQxqIARBCGogBEEEaiADIAogBhD+AyAFIAQq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IBdBAnRqIgUgQCA9lCAFKgIAkjgCAAwIC0HgqQRBzoQBEClBlocBEClBtyYQKUGLARAsQcMrEClBlosBECkQLQwVC0HgqQRBno0BEClBlocBEClBtyYQKUGMARAsQcMrEClB848BECkQLQwUC0HgqQRBy5IBEClBlocBEClBtyYQKUGNARAsQcMrEClB/5QBECkQLQwTC0HgqQRBtJcBEClBlocBEClBtyYQKUGOARAsQcMrEClB3pkBECkQLQwSC0HgqQRBlZsBEClBlocBEClBtyYQKUGWARAsQcMrEClB8ZwBECkQLQwRC0HgqQRBz54BEClBlocBEClBtyYQKUGXARAsQcMrEClBvqABECkQLQwQC0HgqQRBrqMBEClBlocBEClBtyYQKUGYARAsQcMrEClB6KUBECkQLQwPC0HgqQRBqagBEClBlocBEClBtyYQKUGZARAsQcMrEClByKoBECkQLQwOCwsgAkEBaiECDAALAAsAC0HgqQRBxecAEClBnB0QKUG3JhApQf4AECxBwysQKUHM6wAQKRAtDAkLQeCpBEGn3AAQKUGcHRApQbcmEClB+gAQLEHDKxApQZXjABApEC0MCAtB4KkEQfDRABApQZwdEClBtyYQKUH5ABAsQcMrEClBjdgAECkQLQwHC0HgqQRBusMAEClBnB0QKUG3JhApQfgAECxBwysQKUGqygAQKRAtDAYLQeCpBEGHNxApQZwdEClBtyYQKUH3ABAsQcMrEClB2j0QKRAtDAULIAdBMGokAANAIA0oAjwgBkwEQCAKQQFqIQoMAgUgDUEIaiAaIAoQnQFBJBA3GiANIBEgBhAzKgIAOAIQIB0gDUEIahDhAiAGQQFqIQYMAQsACwALAAsgDUFAayQACyAeEHIgI0EgaiQADAILQeCpBEHDwgAQKUGIGhApQaImEClBkwEQLEG6KxApQbHJABApEC0LEAAACyAOEO8DEHshACAlQSBqIgcQngIgAARAIAcgABD+BSAHIAAQhwYLA0AgDhDvAxB7IAxNDQYgJUEIaiAOEO8DIAwQnQEiACoCACAAKgIEIAAqAgggACoCHCAAKgIYQwAAAABeEMEEGiAHIAwQYyIAICUtABg6ABAgACAlKQMQNwIIIAAgJSkDCDcCACAMQQFqIQwMAAsAC0HgqQRBqsQAEClB3coAEClBs9IA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CGpBACAAQRBqEF0hAyAAQRBqIQICQCAAKAKUASABKAIAa0HjAE4EQCADIAAoApQBIAEoAgBrQQJqEDAQbiADKAIARQ0BIAMoAgAhAgsgAC0AjwEEQCACQS06AAAgAkEBaiECCyABKAIAIQQDQCAAKAKUASAETQRAAkAgAkEAOgAAIAAgBjYCACAAQRBqQcC+AyAAEKEBQQFHDQAgAxBcDAQLBSACIABB9gBqIABBgAFqIAQQsgMgAGsgAGotAAo6AAAgAkEBaiECIARBAWohBAwBCwsQcQALEHEACyAAQZgCaiAAQZACahBwBEAgBSAFKAIAQQJyNgIACyAAKAKYAiECIABBkAFqEDogARBcIABBoAJqJAAgAgurAgECfyMAQaADayICJAAgAiACQaADajYCDCMAQZABayIDJAAgAyADQYQBajYCHCAAQQhqIANBIGogA0EcaiAEIAUgBhCQByADQgA3AxAgAyADQSBqNgIMAn8gAkEQaiIFIQYgBSACKAIMEOwEIQcgACgCCCEAIwBBEGsiBCQAIAQgADYCDCAEQQhqIARBDGoQuwEhCCAGIANBDGogByADQRBqEMIEIQAgCBC6ASAEQRBqJAAgAEF/RgsEQBBxAAsgAiAFIABBAnRqNgIMIANBkAFqJAAgAkEQaiEDIAIoAgwhBCMAQRBrIgAkACAAIAE2AggDQCADIARHBEAgAEEIaiADKAIAEMsEIANBBGohAwwBCwsgACgCCCEBIABBEGokACACQaADaiQAIAELhgEAIwBBgAFrIgIkACACIAJB9ABqNgIMIABBCGogAkEQaiACQQxqIAQgBSAGEJAHIAJBEGohAyACKAIMIQQjAEEQayIAJAAgACABNgIIA0AgAyAERwRAIABBCGogAywAABC3AyADQQFqIQMMAQsLIAAoAgghASAAQRBqJAAgAkGAAWokACABC/0MAQF/IwBBQGoiByQAIAcgATYCOCAEQQA2AgAgByADED8gBxCOASEIIAcQOgJ/AkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCAGQcEAaw45AAEXBBcFFwYHFxcXChcXFxcODxAXFxcTFRcXFxcXFxcAAQIDAxcXARcIFxcJCxcMFw0XCxcXERIUFgsgACAFQRhqIAdBOGogAiAE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HCADIAAoAhg2AgALIAAgAiAAKALEASAEELQEIAUgACkDADcDACAFIAApAwg3AwggAEHYAWogAEEgaiAAKAIcIAQQgAEgAEH4AmogAEHwAmoQbwRAIAQgBCgCAEECcjYCAAsgACgC+AIhAiABEDEaIABB2AFqEDEaIABBgANqJAAgAgu9AwAjAEHwAmsiACQAIAAgAjYC4AIgACABNgLoAiAAQcgBaiADIABB4AFqIABB3AFqIABB2AFqELAEIABBuAFqED0iASABEE4QOSAAIAFBABA2IgI2ArQBIAAgAEEQajYCDCAAQQA2AgggAEEBOgAHIABBxQA6AAYDQAJAIABB6AJqIABB4AJqEIQBRQ0AIAAoArQBIAEQLiACakYEQCABEC4hAyABIAEQLkEBdBA5IAEgARBOEDkgACADIAFBABA2IgJqNgK0AQsgAEHoAmoQYCAAQQdqIABBBmogAiAAQbQBaiAAKALcASAAKALYASAAQcgBaiAAQRBqIABBDGogAEEIaiAAQeABahCvBA0AIABB6AJqEGwaDAELCwJAIABByAFqEC5FDQAgAC0AB0UNACAAKAIMIgMgAEEQamtBnwFKDQAgACADQQRqNgIMIAMgACgCCDYCAAsgBSACIAAoArQBIAQQtQQ5AwAgAEHIAWogAEEQaiAAKAIMIAQQgAEgAEHoAmogAEHgAmoQbwRAIAQgBCgCAEECcjYCAAsgACgC6AIhAiABEDEaIABByAFqEDEaIABB8AJqJAAgAgu9AwAjAEHwAmsiACQAIAAgAjYC4AIgACABNgLoAiAAQcgBaiADIABB4AFqIABB3AFqIABB2AFqELAEIABBuAFqED0iASABEE4QOSAAIAFBABA2IgI2ArQBIAAgAEEQajYCDCAAQQA2AgggAEEBOgAHIABBxQA6AAYDQAJAIABB6AJqIABB4AJqEIQBRQ0AIAAoArQBIAEQLiACakYEQCABEC4hAyABIAEQLkEBdBA5IAEgARBOEDkgACADIAFBABA2IgJqNgK0AQsgAEHoAmoQYCAAQQdqIABBBmogAiAAQbQBaiAAKALcASAAKALYASAAQcgBaiAAQRBqIABBDGogAEEIaiAAQeABahCvBA0AIABB6AJqEGwaDAELCwJAIABByAFqEC5FDQAgAC0AB0UNACAAKAIMIgMgAEEQamtBnwFK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ZW1vcnkhIQoAPz8/IDEKAE1hcmtlciBPSy4AT3V0IG9mIG1lbW9yeSEhCgBPdXQgb2YgbWVtb3J5ISEKAE91dCBvZiBtZW1vcnkhIQoAT3V0IG9mIG1lbW9yeSEhCgAgCQoNAE91dCBvZiBtZW1vcnkhIQoAT3V0IG9mIG1lbW9yeSEhCgAgPT09IG1hdHJpeCAoJWQsJWQpID09PQoAd2IAYXJnbENhbWVyYUZydXN0dW1SSCgpOiBhclBhcmFtRGVjb21wTWF0KCkgaW5kaWNhdGVkIHBhcmFtZXRlciBlcnJvci4KAE91dCBvZiBtZW1vcnkhIQoAID09PSB2ZWN0b3IgKCVkKSA9PT0KAERhdGEgbnVtIGVycm9yISEKAEVycm9yOiBtYWxsb2MKAEVycm9yOiBtYWxsb2MKAEVycm9yOiBtYWxsb2MKAEVycm9yOiBtYWxsb2MKAEVycm9yIDE6IGljcEdldEluaXRYdzJYYwoAT3V0IG9mIG1lbW9yeSEhCgBPdXQgb2YgbWVtb3J5ISEKAHIAYXJWaWRlb09wZW46IEVycm9yLCB2aWRlbyBkZXZpY2UgYWxyZWFkeSBvcGVuLgoAZGVidWcAJXMvJXMAT3V0IG9mIG1lbW9yeSEhCgBPdXQgb2YgbWVtb3J5ISEKAE91dCBvZiBtZW1vcnkhIQoAJXMuJXMAJXMuJXMAJXMuJXMAZnNldAAjIyMgRmVhdHVyZSBjYW5kaWRhdGVzIGZvciB0cmFja2luZyBhcmUgb3ZlcmZsb3cuCgBTdGFydCB0cmFja2luZ190aHJlYWQgIyVkLgoAT3V0IG9mIG1lbW9yeSEhCgBPdXQgb2YgbWVtb3J5ISEKAE91dCBvZiBtZW1vcnkhIQoAa3BtRGVsZXRlUmVmRGF0YVNldCgpOiBOVUxMIHJlZkRhdGFTZXRQdHIvcmVmSW1hZ2UuCgAsAE91dCBvZiBtZW1vcnkhIQoAT3V0IG9mIG1lbW9yeSEhCgBBc3NlcnRpb24gYHB5cmFtaWQtPnNpemUoKSA+IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB3aWR0aCA+PSA1YCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgd2lkdGggPj0gMWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGltLndpZHRoKCkgPT0gaW0uc3RlcCgpL3NpemVvZihmbG9hdClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAoc3JjX3dpZHRoJTIpID09IDBgIGZhaWxlZCBpbiAAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQBBc3NlcnRpb24gYHggPj0gbU1pblhgIGZhaWxlZCBpbiAAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQAlbS0lZC0lWS0lSC0lTS0lUwBBc3NlcnRpb24gYHdpZHRoID4gMGAgZmFpbGVkIGluIABhbGxvY2F0b3I8VD46OmFsbG9jYXRlKHNpemVfdCBuKSAnbicgZXhjZWVkcyBtYXhpbXVtIHN1cHBvcnRlZCBzaXplAEFzc2VydGlvbiBgbVN0YXJ0VGltZSA+PSAwYCBmYWlsZWQgaW4gAFVua25vd24gb3IgdW5zdXBwb3J0ZWQgbGFiZWxpbmcgdGhyZXNob2xkIG1vZGUgcmVxdWVzdGVkLiBTZXQgdG8gbWFudWFsLgoAPz8/IDIKAFBhdHRlcm4gZXh0cmFjdGlvbiBmYWlsZWQuAEVycm9yOiB1bnN1cHBvcnRlZCBwaXhlbCBmb3JtYXQuCgBFcnJvcjogTlVMTCBwYXR0SGFuZGxlLgoAdwBBUl9QSVhFTF9GT1JNQVRfUkdCAFNJWkUgPSAlZCwgJWQKAEVycm9yICglZCk6IHVuYWJsZSB0byBvcGVuIGNhbWVyYSBwYXJhbWV0ZXJzIGZpbGUgIiVzIiBmb3Igd3JpdGluZy4KACVzLiVzAE91dCBvZiBtZW1vcnkhIQoARXJyb3I6IGljcEdldEpfVV9YYwBFcnJvciAyOiBpY3BHZXRJbml0WHcyWGMKAEVycm9yOiB1bmFibGUgdG8gb3BlbiBtdWx0aW1hcmtlciBjb25maWcgZmlsZSAnJXMnLgoAYXJWaWRlb09wZW5Bc3luYzogRXJyb3IsIHZpZGVvIGRldmljZSBhbHJlYWR5IG9wZW4uCgBpbmZvAHJiAFRyYWNraW5nIHRocmVhZCA9ICVkCgAlcyVzACVzLiVzAHIAd2IAcmIAJXMuJXMAT3V0IG9mIG1lbW9yeSEhCgBFbmQgdHJhY2tpbmdfdGhyZWFkICMlZC4KAGtwbURlbGV0ZVJlZkRhdGFTZXQoKTogMCB4c2l6ZS95c2l6ZS9kcGkuCgAKACVzLiVzAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2RldGVjdG9ycy9Eb0dfc2NhbGVfaW52YXJpYW50X2RldGVjdG9yLmNwcAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvZ2F1c3NpYW5fc2NhbGVfc3BhY2VfcHlyYW1pZC5jcHAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZGV0ZWN0b3JzL2hhcnJpcy5jcHAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZGV0ZWN0b3JzL29yaWVudGF0aW9uX2Fzc2lnbm1lbnQuY3BwAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2RldGVjdG9ycy9weXJhbWlkLmNwcABJRCBhbHJlYWR5IGV4aXN0cwAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9tYXRjaGVycy9ob3VnaF9zaW1pbGFyaXR5X3ZvdGluZy5jcHAAQXNzZXJ0aW9uIGBweXJhbWlkYCBmYWlsZWQgaW4gAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2ZyYW1ld29yay9pbWFnZS5jcHAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZnJhbWV3b3JrL3RpbWVycy5jcHAATUFOVUFMAD8/PyAzCgBHZW5lcmljIGVycm9yIGR1cmluZyBtYXRjaGluZyBwaGFzZS4ARXJyb3I6IGNhbid0IGxvYWQgcGF0dGVybiBmcm9tIE5VTEwgYnVmZmVyLgoAJTRkAEFSX1BJWEVMX0ZPUk1BVF9CR1IAICUxMGcARGlzdG9ydGlvbiBmYWN0b3I6IGsxPSUxLjEwZiwgazI9JTEuMTBmLCBwMT0lMS4xMGYsIHAyPSUxLjEwZgoAJXMlcwoAd2IAICUxMGcARXJyb3IgaWNwR2V0Sl9VX1MKAD09PT09PSAlcyA9PT09PT09PQoARXJyb3IgMzogaWNwR2V0SW5pdFh3MlhjCgAlcyVzCgBBUl9QSVhFTF9GT1JNQVRfUkdCAHdhcm5pbmcAd2IAcmIAd2IAT3V0IG9mIG1lbW9yeSEhCgBFcnJvciBzYXZpbmcgZmVhdHVyZSBtYXA6IGVycm9yIHdyaXRpbmcgZGF0YS4KAEZpbGUgb3BlbiBlcnJvci4gJXMKAHIARXJyb3I6IG1hbGxvYwoAT3V0IG9mIG1lbW9yeSEhCgBrcG1TZXRSZWZEYXRhU2V0KCk6IE5VTEwga3BtSGFuZGxlL2ZpbGVuYW1lLgoAIGxpbmUgACBsaW5lIAAgbGluZSAAIGxpbmUgACBsaW5lIABCdWlsZCBQeXJhbWlkACBsaW5lIAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9tYXRjaGVycy9mcmVhay5oACBsaW5lIAAgbGluZSAAQVVUT19NRURJQU4ASW5zdWZmaWNpZW50IGNvbnRyYXN0IGR1cmluZyBtYXRjaGluZy4ARXJyb3I6IG91dCBvZiBtZW1vcnkuCgBBUl9QSVhFTF9GT1JNQVRfUkdCQQAgICAgICAgICAgICAgICAgICBmeD0lZiwgZnk9JWYsIHgwPSVmLCB5MD0lZiwgcz0lZgoAAEVycm9yOiBVbmFibGUgdG8gb3BlbiBmaWxlICclcycgZm9yIHdyaXRpbmcuCgBFcnJvciBpY3BHZXRVX2Zyb21fWF9ieV9NYXRYMlUKACU3LjVmIABFcnJvciA0OiBpY3BHZXRJbml0WHcyWGMKAABBUl9QSVhFTF9GT1JNQVRfQkdSAGVycm9yAEVycm9yIGFsbG9jYXRpbmcgbWVtb3J5LgoARXJyb3I6IHVuYWJsZSB0byBvcGVuIGZpbGUgJyVzJXMnIGZvciByZWFkaW5nLgoARXJyb3I6IFVuYWJsZSB0byBvcGVuIGZpbGUgJyVzJyBmb3Igd3JpdGluZy4KACVkAHJiAE91dCBvZiBtZW1vcnkhIQoARXJyb3Igb3BlbmluZyBmaWxlICclcyc6IABGcmVhayBmZWF0dXJlcyAtICVkAHJiADogADogADogADogADogAEV4dHJhY3QgRmVhdHVyZXMAOiAAIGxpbmUgADogADogAEFVVE9fT1RTVQBCYXJjb2RlIG1hdGNoaW5nIGNvdWxkIG5vdCBmaW5kIGNvcnJlY3QgYmFyY29kZSBsb2NhdG9yIHBhdHRlcm4uAFBhdHRlcm4gRGF0YSByZWFkIGVycm9yISEKAEFSX1BJWEVMX0ZPUk1BVF9CR1JBAERpc3RvcnRpb24gZmFjdG9yID0gJWYgJWYgJWYgJWYgJWYgJWYKAHJiAHJiAEVycm9yIGljcEdldFhjX2Zyb21fWHdfYnlfTWF0WHcyWGMKAEVycm9yIDU6IGljcEdldEluaXRYdzJYYwoAJWQAQVJfUElYRUxfRk9STUFUX1JHQkEAWyVzXSAARXJyb3Igb3BlbmluZyAnJXMnLgoARXJyb3IgcmVhZGluZyBpbWFnZVNldC4KAHJiACVzAE91dCBvZiBtZW1vcnkhIQoAUmVhZCBlcnJvciEhCgAlcyVzCgBFcnJvciB3aGlsZSBhZGRpbmcgcmVmZXJlbmNlIGRhdGEgc2V0OiBrcG1HZW5SZWZEYXRhU2V0KCkgZmFpbGVkLgoAQ2FuJ3Qgb3BlbiBKUEVHIGZpbGUgJyVzJwoAUHlyYW1pZCBpcyBub3QgYWxsb2NhdGVkAEltYWdlIGlzIHRvbyBzbWFsbAB3cCBtdXN0IGJlIGF0IGxlYXN0IDEAU3RlcCBzaXplIG11c3QgYmUgZXF1YWwgdG8gd2lkdGggZm9yIG5vdwBTb3VyY2Ugd2lkdGggbXVzdCBiZSBldmVuAFslc10gWyVzXSBbJXNdIDogRm91bmQgJWQgZmVhdHVyZXMAeCBvdXQgb2YgcmFuZ2UAOiAAV2lkdGggY2Fubm90IGJlIHplcm8AQ2xvY2sgaGFzIG5vdCBiZWVuIHN0YXJ0ZWQAQVVUT19BREFQVElWRQBCYXJjb2RlIG1hdGNoaW5nIGVycm9yIGRldGVjdGlvbi9jb3JyZWN0aW9uIGZvdW5kIHVucmVjb3ZlcmFibGUgZXJyb3IuAEVycm9yIHJlYWRpbmcgcGF0dGVybiBmaWxlICclcycuCgBBUl9QSVhFTF9GT1JNQVRfQUJHUgBEaXN0b3J0aW9uIGZhY3RvciA9ICVmICVmICVmICVmICVmCgBFcnJvciAoJWQpOiB1bmFibGUgdG8gb3BlbiBjYW1lcmEgcGFyYW1ldGVycyBmaWxlICIlcyIgZm9yIHJlYWRpbmcuCgBFcnJvcjogVW5hYmxlIHRvIG9wZW4gZmlsZSAnJXMnIGZvciByZWFkaW5nLgoARXJyb3IgPSAlZgoARXJyb3IgNjogaWNwR2V0SW5pdFh3MlhjCgBFcnJvciBwcm9jZXNzaW5nIG11bHRpbWFya2VyIGNvbmZpZyBmaWxlICclcyc6IEZpcnN0IGxpbmUgbXVzdCBiZSBudW1iZXIgb2YgbWFya2VyIGNvbmZpZ3MgdG8gcmVhZC4KAEFSX1BJWEVMX0ZPUk1BVF9CR1JBAEVycm9yIGNyZWF0aW5nIGZ1bGwgZmlsZSBwYXRoIGZyb20gJyVzJyBhbmQgJyVzJwBJbWFnZXNldCBjb250YWlucyAlZCBpbWFnZXMuCgBFcnJvcjogVW5hYmxlIHRvIG9wZW4gZmlsZSAnJXMnIGZvciByZWFkaW5nLgoAJWYAICAgICAgICAgSW1hZ2VTaXplID0gJTdkW3BpeGVsXQoAd2IAAD09PT09PT09PSAlZCA9PT09PT09PT09PQoAJXMlcwoAQXNzZXJ0aW9uIGBtSW1hZ2VzLnNpemUoKSA+IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBoZWlnaHQgPj0gNWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGhlaWdodCA+PSAxYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgeCA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHN0ICE9IDBgIGZhaWxlZCBpbiAAIElORk8gIABBc3NlcnRpb24gYHggPCBtTWF4WGAgZmFpbGVkIGluIABQeXJhbWlkIGlzIE5VTEwAQXNzZXJ0aW9uIGBoZWlnaHQgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbVN0b3BUaW1lID49IDBgIGZhaWxlZCBpbiAAQVVUT19CUkFDS0VUSU5HAE1hdGNoaW5nIGNvbmZpZGVuY2UgY3V0b2ZmIHZhbHVlIG5vdCByZWFjaGVkLgAlcyVzCgBBUl9QSVhFTF9GT1JNQVRfTU9OTwBEaXN0b3J0aW9uIGZhY3RvciA9ICVmICVmICVmICVmCgBFcnJvciAoJWQpOiB1bmFibGUgdG8gZGV0ZXJtaW5lIGZpbGUgbGVuZ3RoLgBFcnJvciBpY3AyR2V0VFMKAEVycm9yIDc6IGljcEdldEluaXRYdzJYYwoAT3V0IG9mIG1lbW9yeSEhCgBBUl9QSVhFTF9GT1JNQVRfQUJHUgBFcnJvciBpbiBvcGVuaW5nICclcycgaW4gemlwZmlsZS4KAEZhbGxpbmcgYmFjayB0byByZWFkaW5nICclcyVzJyBpbiBBUlRvb2xLaXQgdjQueCBmb3JtYXQuCgBFcnJvciByZWFkaW5nIEpQRUcgZmlsZS4KACVmICVmICVmICVmAEV4dHJhY3RlZCBmZWF0dXJlcyA9ICU3ZFtwaXhlbF0KAEVycm9yIHNhdmluZyBmZWF0dXJlIHNldDogZXJyb3Igd3JpdGluZyBkYXRhLgoAT3V0IG9mIG1lbW9yeSEhCgBFcnJvciB3aGlsZSBhZGRpbmcgcmVmZXJlbmNlIGRhdGEgc2V0OiBrcG1NZXJnZVJlZkRhdGFTZXQoKSBmYWlsZWQuCgAATGFwbGFjaWFuIHB5cmFtaWQgaGFzIG5vdCBiZWVuIGFsbG9jYXRlZABBc3NlcnRpb24gYGltYWdlLnR5cGUoKSA9PSBJTUFHRV9VSU5UOGAgZmFpbGVkIGluIABocCBtdXN0IGJlIGF0IGxlYXN0IDEAeCBtdXN0IGJlIHBvc2l0aXZlAERlc3RpbmF0aW9uIGlzIE5VTEwAQnVpbGQgSW5kZXgAQXNzZXJ0aW9uIGB5ID49IG1NaW5ZYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgc3RvcmUuc2l6ZSgpID09IHBvaW50cy5zaXplKClgIGZhaWxlZCBpbiAASGVpZ2h0IGNhbm5vdCBiZSB6ZXJvAENsb2NrIGhhcyBub3QgYmVlbiBzdG9wcGVkAEGgPwvDDUURAADcEwAA6hUAAI8YAABGHAAATGFiZWxpbmcgdGhyZXNob2xkIG1vZGUgc2V0IHRvICVzLgoATWF4aW11bSBhbGxvd2FibGUgcG9zZSBlcnJvciBleGNlZWRlZC4AAEFSX1BJWEVMX0ZPUk1BVF9BUkdCAEVycm9yOiBzdXBwbGllZCBmaWxlIGRvZXMgbm90IGFwcGVhciB0byBiZSBhbiBBUlRvb2xLaXQgY2FtZXJhIHBhcmFtZXRlciBmaWxlLgoAJWxsdSVjAEFSX1BJWEVMX0ZPUk1BVF9NT05PAEVycm9yIGluIG9wZW5pbmcgJyVzJyBmb3IgcmVhZGluZwoAd2IARXJyb3IgcmVhZGluZyBKUEVHIGZpbGUgaGVhZGVyLgoAIEZpbHRlcmVkIGZlYXR1cmVzID0gJTdkW3BpeGVsXQoAJWQAa3BtRGVsZXRlUmVmRGF0YVNldCgpOiBOVUxMIHJlZkRhdGFTZXRQdHIxL3JlZkRhdGFTZXRQdHIyLgoAQ2FuJ3QgcmVhZCBKUEVHIGZpbGUgJyVzJwoAQXNzZXJ0aW9uIGBweXJhbWlkLT5udW1PY3RhdmVzKCkgPiAwYCBmYWlsZWQgaW4gAEltYWdlIG11c3QgYmUgZ3JheXNjYWxlAEFzc2VydGlvbiBgaSsxK2NodW5rX3NpemUgPCB3aWR0aGAgZmFpbGVkIGluIABBc3NlcnRpb24gYHggPCBtR3JhZGllbnRzW29jdGF2ZSptTnVtU2NhbGVzUGVyT2N0YXZlK3NjYWxlXS53aWR0aCgpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgc3JjICE9IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBweXJhbWlkYCBmYWlsZWQgaW4gAHkgb3V0IG9mIHJhbmdlAEZlYXR1cmUgc3RvcmUgaGFzIG5vdCBiZWVuIGFsbG9jYXRlZABBc3NlcnRpb24gYHN0ZXAgPj0gd2lkdGhgIGZhaWxlZCBpbiAAWyVzXSBbJXNdIFslc10gOiAlczogJWYgbXMARXJyb3I6IFVuc3VwcG9ydGVkIHBpeGVsIGZvcm1hdCAoJWQpIHJlcXVlc3RlZC4KAE11bHRpLW1hcmtlciBwb3NlIGVycm9yIHZhbHVlIGV4Y2VlZGVkLgBBUl9QSVhFTF9GT1JNQVRfMnZ1eQAlNy41ZiAARXJyb3IgKCVkKTogdW5hYmxlIHRvIHJlYWQgZnJvbSBmaWxlLgBFcnJvciBwcm9jZXNzaW5nIG11bHRpbWFya2VyIGNvbmZpZyBmaWxlICclcyc6IHBhdHRlcm4gJyVzJyBzcGVjaWZpZWQgaW4gbXVsdGltYXJrZXIgY29uZmlndXJhdGlvbiB3aGlsZSBpbiBiYXJjb2RlLW9ubHkgbW9kZS4KAEFSX1BJWEVMX0ZPUk1BVF9BUkdCAEVycm9yIGluIHJlYWRpbmcgJyVzJy4KAEVycm9yOiB1bmFibGUgdG8gb3BlbiBmaWxlICclcycgZm9yIHdyaXRpbmcuCgANJTRkLyU0ZC4ACiMjIyBTdXJmYWNlIE5vLiVkICMjIwoAa3BtRGVsZXRlUmVmRGF0YVNldCgpOiBOVUxMIHJlZkRhdGFTZXRQdHIuCgBrcG1TZXRSZWZEYXRhU2V0KCk6IE5VTEwga3BtSGFuZGxlL3JlZkRhdGFTZXQuCgBQeXJhbWlkIGRvZXMgbm90IGNvbnRhaW4gYW55IGxldmVscwBBc3NlcnRpb24gYGltYWdlLmNoYW5uZWxzKCkgPT0gMWAgZmFpbGVkIGluIABFeHRlbmRpbmcgYmV5b25kIHRoZSB3aWR0aCBvZiB0aGUgaW1hZ2UAeCBtdXN0IGJlIGxlc3MgdGhhbiB0aGUgaW1hZ2Ugd2lkdGgAU291cmNlIGlzIE5VTEwAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvbWF0Y2hlcnMvdmlzdWFsX2RhdGFiYXNlLmgAQXNzZXJ0aW9uIGB5IDwgbU1heFlgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBudW1fcG9pbnRzID09IHBvaW50cy5zaXplKClgIGZhaWxlZCBpbiAAU3RlcCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0aGUgd2lkdGgAIElORk8gIABB9MwAC70gAQAAAAEAAAABAAAAAAAAAP//////////////////////////AAAAAAEAAAABAAAAAQAAAAAAAAD/////UmVqZWN0ZWQgZnJlcXVlbnRseSBtaXNyZWNvZ25pc2VkIG1hdHJpeCBtYXJrZXIuAEFSX1BJWEVMX0ZPUk1BVF95dXZzAEVycm9yOiBzdXBwbGllZCBidWZmZXIgZG9lcyBub3QgYXBwZWFyIHRvIGJlIEFSVG9vbEtpdCBjYW1lcmEgcGFyYW1ldGVycy4KAEVycm9yIHByb2Nlc3NpbmcgbXVsdGltYXJrZXIgY29uZmlnIGZpbGUgJyVzJzogVW5hYmxlIHRvIGRldGVybWluZSBkaXJlY3RvcnkgbmFtZS4KAEFSX1BJWEVMX0ZPUk1BVF8ydnV5AEVycm9yIGluIHdyaXRpbmcgJyVzJyBpbiB0aGUgemlwZmlsZS4KAEVycm9yIHNhdmluZyBpbWFnZSBzZXQ6IGVycm9yIHdyaXRpbmcgZGF0YS4KAAoAJXMAa3BtU2F2ZVJlZkRhdGFTZXQoKTogTlVMTCBmaWxlbmFtZS9yZWZEYXRhU2V0LgoAa3BtU2V0UmVmRGF0YVNldCgpOiByZWZEYXRhU2V0LgoAQXNzZXJ0aW9uIGBkeW5hbWljX2Nhc3Q8Y29uc3QgQmlub21pYWxQeXJhbWlkMzJmKj4ocHlyYW1pZClgIGZhaWxlZCBpbiAASW1hZ2UgbXVzdCBoYXZlIDEgY2hhbm5lbABBc3NlcnRpb24gYGJ1Y2tldFswXS5maXJzdCA+PSBidWNrZXRbbl0uZmlyc3RgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB5ID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBzcmNfd2lkdGggPiAwYCBmYWlsZWQgaW4gACBsaW5lIABBc3NlcnRpb24gYGFuZ2xlID4gLVBJYCBmYWlsZWQgaW4gAFNob3VsZCBiZSBzYW1lIHNpemUAQXNzZXJ0aW9uIGBjaGFubmVscyA+IDBgIGZhaWxlZCBpbiAAQXV0byB0aHJlc2hvbGQgKGJyYWNrZXQpIG1hcmtlciBjb3VudHMgLVslM2Q6ICUzZF0gWyUzZDogJTNkXSBbJTNkOiAlM2RdKy4KAEFSX1BJWEVMX0ZPUk1BVF9SR0JfNTY1AEZpZWxkLW9mLXZpZXcgdmVydGljYWwgPSAlLjFmLCBob3Jpem9udGFsID0gJS4xZiBkZWdyZWVzLCBhc3BlY3QgcmF0aW8gPSAlLjNmCgBFcnJvciAoJWQpOiB1bmFibGUgdG8gb3BlbiBleHRlcm5hbCBwYXJhbWV0ZXJzIGZpbGUgIiVzIiBmb3Igd3JpdGluZy4KAEVycm9yIHByb2Nlc3NpbmcgbXVsdGltYXJrZXIgY29uZmlnIGZpbGUgJyVzJzogVW5hYmxlIHRvIGxvYWQgcGF0dGVybiAnJXMnLgoAQVJfUElYRUxfRk9STUFUX3l1dnMARXJyb3IgaW4gY2xvc2luZyAlcyBpbiB0aGUgemlwZmlsZS4KAE1heCBmZWF0dXJlID0gJWQKACAgUmVhZCBJbWFnZVNldC4KAEVycm9yIHNhdmluZyBLUE0gZGF0YTogdW5hYmxlIHRvIG9wZW4gZmlsZSAnJXMlcyVzJyBmb3Igd3JpdGluZy4KAE91dCBvZiBtZW1vcnkhIQoAT25seSBiaW5vbWlhbCBweXJhbWlkIGlzIHN1cHBvcnRlZABBc3NlcnRpb24gYG1QeXJhbWlkLnNpemUoKSA9PSBtTnVtT2N0YXZlcyptTnVtU2NhbGVzUGVyT2N0YXZlYCBmYWlsZWQgaW4gAG50aF9lbGVtZW50IGZhaWxlZAB5IG11c3QgYmUgcG9zaXRpdmUAV2lkdGggbXVzdCBiZSBwb3NpdGl2ZQA6IABhbmdsZSBvdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGBvY3RhdmUgPj0gMGAgZmFpbGVkIGluIABOdW1iZXIgb2YgY2hhbm5lbHMgY2Fubm90IGJlIHplcm8AQXV0byB0aHJlc2hvbGQgKGJyYWNrZXQpIGFkanVzdGVkIHRocmVzaG9sZCB0byAlZC4KAEFSX1BJWEVMX0ZPUk1BVF9SR0JBXzU1NTEARXJyb3IgKCVkKTogdW5hYmxlIHRvIG9wZW4gZXh0ZXJuYWwgcGFyYW1ldGVycyBmaWxlICIlcyIgZm9yIHJlYWRpbmcuCgAlbGYAQVJfUElYRUxfRk9STUFUX1JHQl81NjUARXJyb3IgaW4gY2xvc2luZyAnJXMnLgoAJTNkOiAoJTNkLCUzZCkgOiAlZiBtaW49JWYgbWF4PSVmLCBzZD0lZgoARXJyb3Igb3BlbmluZyBmaWxlICclcy5pc2V0Jy4KAC4AcG9pbnRzLSVkCgBBc3NlcnRpb24gYGQudHlwZSgpID09IElNQUdFX0YzMmAgZmFpbGVkIGluIABQeXJhbWlkIGhhcyBub3QgYmVlbiBhbGxvY2F0ZWQgeWV0AEFzc2VydGlvbiBgcFswXSA+IHBtMVstMV1gIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB5IDwgbUdyYWRpZW50c1tvY3RhdmUqbU51bVNjYWxlc1Blck9jdGF2ZStzY2FsZV0uaGVpZ2h0KClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBzcmNfaGVpZ2h0ID4gMGAgZmFpbGVkIGluIABQeXJhbWlkIGlzIE5VTEwAQXNzZXJ0aW9uIGBhbmdsZSA8PSBQSWAgZmFpbGVkIGluIAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvZ2F1c3NpYW5fc2NhbGVfc3BhY2VfcHlyYW1pZC5oAEFzc2VydGlvbiBgbURhdGEuZ2V0KClgIGZhaWxlZCBpbiAAQXV0byB0aHJlc2hvbGQgKCVzKSBhZGp1c3RlZCB0aHJlc2hvbGQgdG8gJWQuCgBBUl9QSVhFTF9GT1JNQVRfUkdCQV80NDQ0AFslIC4zZiAlIC4zZiAlIC4zZl0gWyUgNi4xZl0KAEVycm9yICglZCk6IHVuYWJsZSB0byBvcGVuIG9wdGljYWwgcGFyYW1ldGVycyBmaWxlICIlcyIgZm9yIHdyaXRpbmcuCgBFcnJvciBwcm9jZXNzaW5nIG11bHRpbWFya2VyIGNvbmZpZyBmaWxlICclcycsIG1hcmtlciBkZWZpbml0aW9uICUzZDogRmlyc3QgbGluZSBtdXN0IGJlIHBhdHRlcm4gd2lkdGguCgBBUl9QSVhFTF9GT1JNQVRfUkdCQV81NTUxAC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQoAICAgIGVuZC4KAABrcG1TZXRSZWZEYXRhU2V0RmlsZSgpOiBOVUxMIGtwbUhhbmRsZS9maWxlbmFtZS4KAE9ubHkgRjMyIGltYWdlcyBzdXBwb3J0ZWQAQXNzZXJ0aW9uIGBpbWFnZS53aWR0aCgpID09IG1QeXJhbWlkWzBdLndpZHRoKClgIGZhaWxlZCBpbiAAU2hvdWxkIGJlIG1heGltYQB5IG11c3QgYmUgbGVzcyB0aGFuIHRoZSBpbWFnZSBoZWlnaHQASGVpZ2h0IG11c3QgYmUgcG9zaXRpdmUAQXNzZXJ0aW9uIGBkZXRlY3RvcmAgZmFpbGVkIGluIABBc3NlcnRpb24gYHNjYWxlID49IG1NaW5TY2FsZWAgZmFpbGVkIGluIABPY3RhdmUgbXVzdCBiZSBwb3NpdGl2ZQBEYXRhIHBvaW50ZXIgaXMgTlVMTABtZWRpYW4AQVJfUElYRUxfRk9STUFUXzQyMHYARXJyb3IgKCVkKTogdW5hYmxlIHRvIG9wZW4gb3B0aWNhbCBwYXJhbWV0ZXJzIGZpbGUgIiVzIiBmb3IgcmVhZGluZy4KACVsZiAlbGYgJWxmICVsZgBBUl9QSVhFTF9GT1JNQVRfUkdCQV80NDQ0ACUzZCwgJTNkOiBtYXhfc2ltID0gJWYKACAgUmVhZCBGZWF0dXJlU2V0LgoARXJyb3Igc2F2aW5nIEtQTSBkYXRhOiBlcnJvciB3cml0aW5nIGRhdGEuCgBDYW5ub3QgZmluZCB0aGUgcGFnZSBmb3Igc2tpcHBpbmcuCgBBc3NlcnRpb24gYGltMS50eXBlKCkgPT0gSU1BR0VfRjMyYCBmYWlsZWQgaW4gAEltYWdlIG9mIHdyb25nIHNpemUgZm9yIHB5cmFtaWQAQXNzZXJ0aW9uIGBwWzBdID4gcG0xWzBdYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZy5jaGFubmVscygpID09IDJgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBzcmNfc3RlcCA+IDBgIGZhaWxlZCBpbiAARGV0ZWN0b3IgaXMgTlVMTABzY2FsZSBvdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGBvY3RhdmUgPCBtTnVtT2N0YXZlc2AgZmFpbGVkIGluIABVbmFibGUgdG8gYWxsb2NhdGUgaW1hZ2UgZGF0YQBPdHN1AEFSX1BJWEVMX0ZPUk1BVF80MjBmACVmICVmAEFSX1BJWEVMX0ZPUk1BVF80MjB2ACU3LjRmIABFcnJvciBvcGVuaW5nIGZpbGUgJyVzLmZzZXQnLgoAa3BtTG9hZFJlZkRhdGFTZXQoKTogTlVMTCBmaWxlbmFtZS9yZWZEYXRhU2V0UHRyLgoAa3BtTWF0Y2hpbmcoKTogTlVMTCBrcG1IYW5kbGUvaW5JbWFnZUx1bWEuCgBBc3NlcnRpb24gYGltMi50eXBlKCkgPT0gSU1BR0VfRjMyYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgaW1hZ2UuaGVpZ2h0KCkgPT0gbVB5cmFtaWRbMF0uaGVpZ2h0KClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBwWzBdID4gcG0xWzFdYCBmYWlsZWQgaW4gAE51bWJlciBvZiBjaGFubmVscyBzaG91bGQgYmUgMgBTdGVwIG11c3QgYmUgcG9zaXRpdmUAQXNzZXJ0aW9uIGBweXJhbWlkLT5pbWFnZXMoKS5zaXplKCkgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgc2NhbGUgPCBtTWF4U2NhbGVgIGZhaWxlZCBpbiAAT2N0YXZlIG11c3QgYmUgbGVzcyB0aGFuIG51bWJlciBvZiBvY3RhdmVzAEludmFsaWQgaW1hZ2UgdHlwZQABAAAACQAAAAUAAAAEAAAAAwAAAAIAQcPtAAuBfgEAAQEBAAIE//8FAwEAAv8GB/8DAQICAwIDAgMDAP8EBgcF/wEE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M2QsIGFmdDolM2QsIGVycm9yID0gJWYKAEFzc2VydGlvbiBgZC5jaGFubmVscygpID09IDFgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBkc3QudHlwZSgpID09IElNQUdFX0YzMmAgZmFpbGVkIGluIABBc3NlcnRpb24gYHBbMF0gPiBwWy0xXWAgZmFpbGVkIGluIABBc3NlcnRpb24gYG1heF9oZWlnaHQgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZHN0X3dpZHRoID4gMGAgZmFpbGVkIGluIABQeXJhbWlkIGlzIGVtcHR5AEFzc2VydGlvbiBgc2l6ZSA+IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBzY2FsZSA+PSAwYCBmYWlsZWQgaW4gAGFyVXRpbEdldFBpeGVsRm9ybWF0TmFtZTogRXJyb3IsIHVucmVjb2duaXNlZCBwaXhlbCBmb3JtYXQgKCVkKS4KAEFSX1BJWEVMX0ZPUk1BVF9OVjIxAG1yawBFcnJvciBsb2FkaW5nIEtQTSBkYXRhOiBlcnJvciByZWFkaW5nIGRhdGEuCgBKUEVHIGZpbGUgaGFzIHVuc3VwcG9ydGVkICVkLWNvbXBvbmVudCBwaXhlbHMKAE9ubHkgc2luZ2xlIGNoYW5uZWwgaW1hZ2VzIHN1cHBvcnRlZABEZXN0aW5hdGlvbiBpbWFnZSBzaG91bGQgYmUgYSBmbG9hdABBc3NlcnRpb24gYHBbMF0gPiBwWzFdYCBmYWlsZWQgaW4gAE1heGltdW0gYmluIHNob3VsZCBiZSBwb3NpdGl2ZQBBc3NlcnRpb24gYGRzdF9zdGVwID4gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYHB5cmFtaWQtPmltYWdlcygpWzBdLndpZHRoKCkgPT0gZGV0ZWN0b3ItPndpZHRoKClgIGZhaWxlZCBpbiAAc2l6ZSBtdXN0IGJlIHBvc2l0aXZlAFNjYWxlIG11c3QgYmUgcG9zaXRpdmUAT3V0IG9mIG1lbW9yeS4KAGFyVmlkZW9VdGlsR2V0UGl4ZWxGb3JtYXROYW1lOiBFcnJvciwgdW5yZWNvZ25pc2VkIHBpeGVsIGZvcm1hdCAoJWQpLgoARXJyb3Igb3BlbmluZyBmaWxlICclcy5tcmsnLgoAa3BtQ2hhbmdlUGFnZU5vT2ZSZWZEYXRhU2V0KCk6IE5VTEwgcmVmRGF0YVNldC4KAGFsbG9jYXRvcjxUPjo6YWxsb2NhdGUoc2l6ZV90IG4pICduJyBleGNlZWRzIG1heGltdW0gc3VwcG9ydGVkIHNpemUAQXNzZXJ0aW9uIGBpbTEuY2hhbm5lbHMoKSA9PSAxYCBmYWlsZWQgaW4gAFVua25vd24gaW1hZ2UgdHlwZQBBc3NlcnRpb24gYHBbMF0gPiBwcDFbLTFdYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgaGlzdCAhPSBOVUxMYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgKHNyY193aWR0aCUyKSA9PSAxYCBmYWlsZWQgaW4gAFB5cmFtaWQgYW5kIGRldGVjdG9yIHNpemUgbWlzbWF0Y2gAQXNzZXJ0aW9uIGBtUmVmSW1hZ2VXaWR0aCA+IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBzY2FsZSA8IG1OdW1TY2FsZXNQZXJPY3RhdmVgIGZhaWxlZCBpbiAAJSUlMDJ4ACVmICVmICVmICVmAEFzc2VydGlvbiBgaW0yLmNoYW5uZWxzKCkgPT0gMWAgZmFpbGVkIGluIABVbnN1cHBvcnRlZCBpbWFnZSB0eXBlAEFzc2VydGlvbiBgcFswXSA+IHBwMVswXWAgZmFpbGVkIGluIAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvb3JpZW50YXRpb25fYXNzaWdubWVudC5oAFNvdXJjZSB3aWR0aCBtdXN0IGJlIG9kZABBc3NlcnRpb24gYHB5cmFtaWQtPmltYWdlcygpWzBdLmhlaWdodCgpID09IGRldGVjdG9yLT5oZWlnaHQoKWAgZmFpbGVkIGluIAB3aWR0aCBtdXN0IGJlIHBvc2l0aXZlAFNjYWxlIG11c3QgYmUgbGVzcyB0aGFuIG51bWJlciBvZiBzY2FsZSBwZXIgb2N0YXZlAC9wcm9jL3NlbGYvZXhlAFRyYW5zZm9ybWF0aW9uIG1hdHJpeCByZWFkIGVycm9yISEKAEFzc2VydGlvbiBgZC53aWR0aCgpID09IGltMi53aWR0aCgpYCBmYWlsZWQgaW4gAGFsbG9jYXRvcjxUPjo6YWxsb2NhdGUoc2l6ZV90IG4pICduJyBleGNlZWRzIG1heGltdW0gc3VwcG9ydGVkIHNpemUAQXNzZXJ0aW9uIGBwWzBdID4gcHAxWzFdYCBmYWlsZWQgaW4gAEhpc3RvZ3JhbSBwb2ludGVyIGlzIE5VTEwAQXNzZXJ0aW9uIGAoY2h1bmtfc2l6ZSUyKT09MGAgZmFpbGVkIGluIABBc3NlcnRpb24gYGFzc2lnbm1lbnQuc2l6ZSgpID09IG51bV9pbmRpY2VzYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbVJlZkltYWdlSGVpZ2h0ID4gMGAgZmFpbGVkIGluIABPY3RhdmUgb3V0IG9mIHJhbmdlACVzJXMKAGpwZwBJbWFnZXMgbXVzdCBoYXZlIHRoZSBzYW1lIHdpZHRoAEFzc2VydGlvbiBgIWlzaW5mKHVbMF0pYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgKGZiaW4rMC41ZikgPiAwICYmIChmYmluLTAuNWYpIDwgbnVtX2JpbnNgIGZhaWxlZCBpbiAAVW50ZXN0ZWQgYmVoYXZpb3IgZm9yIG9kZCBjaHVuayBzaXplAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL21hdGNoZXJzL2JpbmFyeV9oaWVyYXJjaGljYWxfY2x1c3RlcmluZy5oAGhlaWdodCBtdXN0IGJlIHBvc2l0aXZlAFNjYWxlIG91dCBvZiByYW5nZQAAQXNzZXJ0aW9uIGBkLmhlaWdodCgpID09IGltMi5oZWlnaHQoKWAgZmFpbGVkIGluIABJTkYARGVjaW1hbCBiaW4gcG9zaXRpb24gaW5kZXggb3V0IG9mIHJhbmdlAFdpZHRoIGlzIHplcm8AQXNzaWdubWVudCBzaXplIHdyb25nAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL21hdGNoZXJzL2hvdWdoX3NpbWlsYXJpdHlfdm90aW5nLmgAQXNzZXJ0aW9uIGAoaW50KXN0ZDo6Zmxvb3IoeCkgPT0gKGludCl4YCBmYWlsZWQgaW4gAC8uLi9zaGFyZS8lcwBJbWFnZXMgbXVzdCBoYXZlIHRoZSBzYW1lIGhlaWdodABBc3NlcnRpb24gYCFpc2luZih1WzFdKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYG1hZ25pdHVkZSA+PSAwYCBmYWlsZWQgaW4gAEhlaWdodCBpcyB6ZXJvAEFzc2VydGlvbiBgYXNzaWdubWVudFtpXSAhPSAtMWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGluZGV4ID49IDBgIGZhaWxlZCBpbiAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZGV0ZWN0b3JzL2ludGVycG9sYXRlLmgASE9NRQBBc3NlcnRpb24gYGltMS53aWR0aCgpID09IGltMi53aWR0aCgpYCBmYWlsZWQgaW4gAE1hZ25pdHVkZSBjYW5ub3QgYmUgbmVnYXRpdmUAU3RlcCBpcyB6ZXJvAEFzc2lnbm1lbnQgaXMgaW52YWxpZABpbmRleCBvdXQgb2YgcmFuZ2UAZmxvb3IoKSBhbmQgY2FzdCBub3QgdGhlIHNhbWUAL3Byb2Mvc2VsZi9jbWRsaW5lAEFzc2VydGlvbiBgaW0xLmhlaWdodCgpID09IGltMi5oZWlnaHQoKWAgZmFpbGVkIGluIAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvaGFycmlzLWlubGluZS5oAEFzc2VydGlvbiBgbnVtX2JpbnMgPj0gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYChpPj4xKSA8IHN0ZDo6Y2VpbCgoc3JjX2hlaWdodC0xKS8yLmYpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYXNzaWdubWVudFtpXSA8IG51bV9pbmRpY2VzYCBmYWlsZWQgaW4gAGFsbG9jYXRvcjxUPjo6YWxsb2NhdGUoc2l6ZV90IG4pICduJyBleGNlZWRzIG1heGltdW0gc3VwcG9ydGVkIHNpemUAQXNzZXJ0aW9uIGAoaW50KXN0ZDo6Zmxvb3IoeSkgPT0gKGludCl5YCBmYWlsZWQgaW4gAHJiAERvRyBQeXJhbWlkAE91dCBvZiByYW5nZQBOdW1iZXIgYmlucyBtdXN0IGJlIHBvc2l0aXZlAEluZGV4IGlzIG91dCBvZiBib3VuZHMAQXNzaWdubWVudCBvdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGBiaW5YID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB5cCA+PSAwICYmIHlwIDwgaGVpZ2h0YCBmYWlsZWQgaW4gACVzOiAlcwoATm9uLW1heCBzdXBwcmVzc2lvbgBBc3NlcnRpb24gYHcxID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpbWFnZS50eXBlKCkgPT0gSU1BR0VfVUlOVDhgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBpbmRpY2VzW2Fzc2lnbm1lbnRbaV1dIDwgbnVtX2ZlYXR1cmVzYCBmYWlsZWQgaW4gAGJpblggb3V0IG9mIHJhbmdlAHlwIG91dCBvZiBib3VuZHMAVW5hYmxlIHRvIGRldGVybWluZSBwcm9jZXNzIG5hbWUAU3VicGl4ZWwAdzEgbXVzdCBiZSBwb3NpdGl2ZQBPbmx5IGdyYXkgc2NhbGUgaW1hZ2VzIGFyZSBzdXBwb3J0ZWQAQXNzZXJ0aW9uIGBpdC0+c2Vjb25kLnNpemUoKSAhPSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYmluWCA8IG1OdW1YQmluc2AgZmFpbGVkIGluIABBc3NlcnRpb24gYHlwX3BsdXNfMSA+PSAwICYmIHlwX3BsdXNfMSA8IGhlaWdodGAgZmFpbGVkIGluIAAlcyVzAHBydW5lRmVhdHVyZXMAQXNzZXJ0aW9uIGB3MiA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgb2N0YXZlIDwgbU51bU9jdGF2ZXNgIGZhaWxlZCBpbiAAQ2x1c3RlciBtdXN0IGhhdmUgYXRsZWFzZXQgMSBmZWF0dXJlAEFzc2VydGlvbiBgYmluWSA+PSAwYCBmYWlsZWQgaW4gAHlwX3BsdXNfMSBvdXQgb2YgYm91bmRzAC92YXIvY2FjaGUARmluZCBPcmllbnRhdGlvbnMAQXNzZXJ0aW9uIGBkc3RbaV0gPj0gLTI1ODA2NGAgZmFpbGVkIGluIAB3MiBtdXN0IGJlIHBvc2l0aXZlAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2RldGVjdG9ycy9nYXVzc2lhbl9zY2FsZV9zcGFjZV9weXJhbWlkLmgAQXNzZXJ0aW9uIGBtSyA9PSBtQ2VudGVycy5zaXplKClgIGZhaWxlZCBpbiAAYmluWSBvdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGB4cCA+PSAwICYmIHhwIDwgd2lkdGhgIGZhaWxlZCBpbiAALy5jYWNoZQBBc3NlcnRpb24gYGltMC5oZWlnaHQoKSA9PSBpbTEuaGVpZ2h0KClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBkc3RbaV0gPD0gMjU4MDY0YCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYjEgPj0gMCAmJiBiMSA8IG51bV9iaW5zYCBmYWlsZWQgaW4gAE9jdGF2ZSBvdXQgb2YgcmFuZ2UAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvbWF0Y2hlcnMva21lZG9pZHMuaABBc3NlcnRpb24gYGJpblkgPCBtTnVtWUJpbnNgIGZhaWxlZCBpbiAAeHAgb3V0IG9mIGJvdW5kcwAlcy8lcwBIZWlnaHQgaXMgaW5jb25zaXN0ZW50AEFzc2VydGlvbiBgZHN0W2ldIDw9IDQxMjkwMjRgIGZhaWxlZCBpbiAAYjEgYmluIGluZGV4IG91dCBvZiByYW5nZQBBc3NlcnRpb24gYHNjYWxlIDwgbU51bVNjYWxlc1Blck9jdGF2ZWAgZmFpbGVkIGluIABrIHNob3VsZCBtYXRjaCB0aGUgbnVtYmVyIG9mIGNsdXN0ZXIgY2VudGVycwBBc3NlcnRpb24gYGJpbkFuZ2xlID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB4cF9wbHVzXzEgPj0gMCAmJiB4cF9wbHVzXzEgPCB3aWR0aGAgZmFpbGVkIGluIAAvdmFyL2xpYgBBc3NlcnRpb24gYGltMC5oZWlnaHQoKSA9PSBpbTIuaGVpZ2h0KClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBkc3RbaV0gPj0gLTQxMjkwMjRgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBiMiA+PSAwICYmIGIyIDwgbnVtX2JpbnNgIGZhaWxlZCBpbiAAU2NhbGUgb3V0IG9mIHJhbmdlAEFzc2VydGlvbiBgbnVtX2ZlYXR1cmVzID4gMGAgZmFpbGVkIGluIABiaW5BbmdsZSBvdXQgb2YgcmFuZ2UAeHBfcGx1c18xIG91dCBvZiBib3VuZHMALy5jb25maWcAQXNzZXJ0aW9uIGAoaW0xLmhlaWdodCgpPj4xKSA9PSBpbTIuaGVpZ2h0KClgIGZhaWxlZCBpbiAAYWxsb2NhdG9yPFQ+OjphbGxvY2F0ZShzaXplX3QgbikgJ24nIGV4Y2VlZHMgbWF4aW11bSBzdXBwb3J0ZWQgc2l6ZQBiMiBiaW4gaW5kZXggb3V0IG9mIHJhbmdlAGFsbG9jYXRvcjxUPjo6YWxsb2NhdGUoc2l6ZV90IG4pICduJyBleGNlZWRzIG1heGltdW0gc3VwcG9ydGVkIHNpemUATnVtYmVyIG9mIGZlYXR1cmVzIG11c3QgYmUgcG9zaXRpdmUAQXNzZXJ0aW9uIGBiaW5BbmdsZSA8IG1OdW1BbmdsZUJpbnNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB3MCA+PSAwICYmIHcwIDw9IDEuMDAwMWAgZmFpbGVkIGluIABUTVBESVIAQXNzZXJ0aW9uIGAoaW0wLmhlaWdodCgpPj4xKSA9PSBpbTEuaGVpZ2h0KClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBneHggPD0gNDEyOTAyNGAgZmFpbGVkIGluIABhbGxvY2F0b3I8VD46OmFsbG9jYXRlKHNpemVfdCBuKSAnbicgZXhjZWVkcyBtYXhpbXVtIHN1cHBvcnRlZCBzaXplAEFzc2VydGlvbiBgbnVtX2luZGljZXMgPD0gbnVtX2ZlYXR1cmVzYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYmluU2NhbGUgPj0gMGAgZmFpbGVkIGluIABPdXQgb2YgcmFuZ2UAL3RtcABBc3NlcnRpb24gYChpbTAuaGVpZ2h0KCk+PjEpID09IGltMi5oZWlnaHQoKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGd4eCA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgcm93IDwgbUhlaWdodGAgZmFpbGVkIGluIABNb3JlIGluZGljZXMgdGhhbiBmZWF0dXJlcwBiaW5TY2FsZSBvdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGB3MSA+PSAwICYmIHcxIDw9IDEuMDAwMWAgZmFpbGVkIGluIABFcnJvciBsb29raW5nIGZvciByZXNvdXJjZXMgZGlyZWN0b3J5IHBhdGgAQXNzZXJ0aW9uIGBtQnVja2V0cy5zaXplKCkgPT0gbU51bUJ1Y2tldHNYYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgZ3l5IDw9IDQxMjkwMjRgIGZhaWxlZCBpbiAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZnJhbWV3b3JrL2ltYWdlLmgAQXNzZXJ0aW9uIGBudW1faW5kaWNlcyA+PSBtS2AgZmFpbGVkIGluIABBc3NlcnRpb24gYGJpblNjYWxlIDwgbU51bVNjYWxlQmluc2AgZmFpbGVkIGluIABBc3NlcnRpb24gYHcyID49IDAgJiYgdzIgPD0gMS4wMDAxYCBmYWlsZWQgaW4gAEVycm9yIGNyZWF0aW5nIHJlc291cmNlcyBkaXJlY3RvcnkgcGF0aABCdWNrZXRzIGFyZSBub3QgYWxsb2NhdGVkAEFzc2VydGlvbiBgZ3l5ID49IDBgIGZhaWxlZCBpbiAAcm93IG91dCBvZiBib3VuZHMATm90IGVub3VnaCBmZWF0dXJlcwBBc3NlcnRpb24gYGluZGV4IDw9IChiaW5YICsgYmluWSptTnVtWEJpbnMgKyBiaW5BbmdsZSptTnVtWEJpbnMqbU51bVlCaW5zICsgYmluU2NhbGUqbU51bVhCaW5zKm1OdW1ZQmlucyptTnVtQW5nbGVCaW5zKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYHczID49IDAgJiYgdzMgPD0gMS4wMDAxYCBmYWlsZWQgaW4gAEVycm9yOiBVbmFibGUgdG8gY2hhbmdlIHdvcmtpbmcgZGlyZWN0b3J5IHRvICclcycuCgBBc3NlcnRpb24gYG1CdWNrZXRzWzBdLnNpemUoKSA9PSBtTnVtQnVja2V0c1lgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBneHkgPD0gNDEyOTAyNGAgZmFpbGVkIGluIABBc3NpZ25tZW50IHNpemUgaXMgaW5jb3JyZWN0AEFzc2VydGlvbiBgbiA+IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAodzArdzErdzIrdzMpIDw9IDEuMDAwMWAgZmFpbGVkIGluIABbJSAuM2YgJSAuM2YgJSAuM2ZdIFslIDYuMWZdCgBBc3NlcnRpb24gYG1GZWF0dXJlUG9pbnRzLnNpemUoKSA8PSBtTWF4TnVtRmVhdHVyZVBvaW50c2AgZmFpbGVkIGluIABBc3NlcnRpb24gYGd4eSA+PSAtNDEyOTAyNGAgZmFpbGVkIGluIABBc3NlcnRpb24gYG51bV9jZW50ZXJzID4gMGAgZmFpbGVkIGluIAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci91dGlscy9wYXJ0aWFsX3NvcnQuaABBc3NlcnRpb24gYHBvcyA9PSA2NjZgIGZhaWxlZCBpbiAAAAMAAAADAAAABAAAAAQAAAAEAAAAAQAAAAQAAAACAAAAAgAAAAIAAAACAAAAAgAAAAEAAAABAAAAAQAAAAQAAACIAAAABQAAAJAAAAAGAAAAmAAAAAkAAACwAAAAZAcAAHMMAABsEgAA9BQAAC5pc2V0AHJiAE42dmlzaW9uMjVHYXVzc2lhblNjYWxlU3BhY2VQeXJhbWlkRQAAANz4AACZXQAAVG9vIG1hbnkgZmVhdHVyZSBwb2ludHMAVGhlcmUgbXVzdCBiZSBhdCBsZWFzdCAxIGNlbnRlcgBuIG11c3QgYmUgcG9zaXRpdmUAUG9zaXRpb24gaXMgbm90IHdpdGhpbiByYW5nZQBBc3NlcnRpb24gYGtwLnNjYWxlIDwgbUxhcGxhY2lhblB5cmFtaWQubnVtU2NhbGVQZXJPY3RhdmUoKWAgZmFpbGVkIGluIABbJXNdIFslc10gWyVzXSA6IEZvdW5kICVkIGZlYXR1cmVzIGluIHF1ZXJ5AEFzc2VydGlvbiBgayA+IDBgIGZhaWxlZCBpbiAARmVhdHVyZSBwb2ludCBzY2FsZSBpcyBvdXQgb2YgYm91bmRzAEZpbmQgTWF0Y2hlcyAoMSkAayBtdXN0IGJlIHBvc2l0aXZlAEFzc2VydGlvbiBga3Auc2NvcmUgPT0gbGFwMS5nZXQ8ZmxvYXQ+KHkpW3hdYCBmYWlsZWQgaW4gAEhvdWdoIFZvdGluZyAoMSkAU2NvcmUgaXMgbm90IGNvbnNpc3RlbnQgd2l0aCB0aGUgRG9HIGltYWdlAEZpbmQgSG91Z2ggTWF0Y2hlcyAoMSkAQXNzZXJ0aW9uIGBidWNrZXRbMF0uZmlyc3QgPj0gYnVja2V0W25dLmZpcnN0YCBmYWlsZWQgaW4gAEVzdGltYXRlIEhvbW9ncmFwaHkgKDEpAG50aF9lbGVtZW50IGZhaWxlZABGaW5kIElubGllcnMgKDEpAEFzc2VydGlvbiBgb2N0YXZlIDwgbU51bU9jdGF2ZXNgIGZhaWxlZCBpbiAARmluZCBNYXRjaGVzICgyKQAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvZ2F1c3NpYW5fc2NhbGVfc3BhY2VfcHlyYW1pZC5oAEhvdWdoIFZvdGluZyAoMikAT2N0YXZlIG91dCBvZiByYW5nZQBGaW5kIEhvdWdoIE1hdGNoZXMgKDIpAEFzc2VydGlvbiBgc2NhbGUgPCBtTnVtU2NhbGVzUGVyT2N0YXZlYCBmYWlsZWQgaW4gAEVzdGltYXRlIEhvbW9ncmFwaHkgKDIpAFNjYWxlIG91dCBvZiByYW5nZQBGaW5kIElubGllcnMgKDIpAEFzc2VydGlvbiBgaW5kZXggPCBtSW1hZ2VzLnNpemUoKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGJlc3RfaW5kZXggIT0gc3RkOjpudW1lcmljX2xpbWl0czxzaXplX3Q+OjptYXgoKWAgZmFpbGVkIGluIAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9kZXRlY3RvcnMvRG9HX3NjYWxlX2ludmFyaWFudF9kZXRlY3Rvci5oAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL21hdGNoZXJzL2ZlYXR1cmVfbWF0Y2hlci1pbmxpbmUuaABJbmRleCBpcyBvdXQgb2YgcmFuZ2UAU29tZXRoaW5nIHN0cmFuZ2UAQXNzZXJ0aW9uIGBzY2FsZSA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbU1hdGNoZXMuc2l6ZSgpIDw9IGZlYXR1cmVzMS0+c2l6ZSgpYCBmYWlsZWQgaW4gAFNjYWxlIG11c3QgYmUgcG9zaXRpdmUATnVtYmVyIG9mIG1hdGNoZXMgc2hvdWxkIGJlIGxvd2VyAFNjYWxlIG11c3QgYmUgbGVzcyB0aGFuIG51bWJlciBvZiBzY2FsZSBwZXIgb2N0YXZlAEFzc2VydGlvbiBgbVJvb3QuZ2V0KClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBsYXAwLmhlaWdodCgpID09IGxhcDEuaGVpZ2h0KCkgPT0gbGFwMi5oZWlnaHQoKWAgZmFpbGVkIGluIABSb290IGNhbm5vdCBiZSBOVUxMAFdpZHRoL2hlaWdodCBhcmUgbm90IGNvbnNpc3RlbnQAQXNzZXJ0aW9uIGBtaW5pICE9IC0xYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgKGxhcDAuaGVpZ2h0KCkgPT0gbGFwMS5oZWlnaHQoKSkgJiYgKChsYXAxLmhlaWdodCgpPj4xKSA9PSBsYXAyLmhlaWdodCgpKWAgZmFpbGVkIGluIABNaW5pbXVtIGluZGV4IG5vdCBzZXQAQXNzZXJ0aW9uIGAoKGxhcDAud2lkdGgoKT4+MSkgPT0gbGFwMS53aWR0aCgpKSAmJiAobGFwMS53aWR0aCgpID09IGxhcDIud2lkdGgoKSlgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBuIDw9IGluX21hdGNoZXMuc2l6ZSgpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgMGAgZmFpbGVkIGluIABTaG91bGQgYmUgdGhlIHNhbWUASW1hZ2Ugc2l6ZXMgYXJlIGluY29uc2lzdGVudABBc3NlcnRpb24gYGJpblggPj0gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYCh4LTEpID49IDAgJiYgKHgrMSkgPCBsYXAxLndpZHRoKClgIGZhaWxlZCBpbiAAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvbWF0Y2hlcnMvaG91Z2hfc2ltaWxhcml0eV92b3RpbmcuaAB4IG91dCBvZiBib3VuZHMAYmluWCBvdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGAoeS0xKSA+PSAwICYmICh5KzEpIDwgbGFwMS5oZWlnaHQoKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGJpblggPCBtTnVtWEJpbnNgIGZhaWxlZCBpbiAAeSBvdXQgb2YgYm91bmRzAEFzc2VydGlvbiBgYmluWSA+PSAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgbGFwMC53aWR0aCgpID09IGxhcDEud2lkdGgoKWAgZmFpbGVkIGluIABiaW5ZIG91dCBvZiByYW5nZQBJbWFnZSBkaW1lbnNpb25zIGluY29uc2lzdGVudABBc3NlcnRpb24gYGJpblkgPCBtTnVtWUJpbnNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBsYXAwLndpZHRoKCkgPT0gbGFwMi53aWR0aCgpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYmluQW5nbGUgPj0gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYGxhcDAuaGVpZ2h0KCkgPT0gbGFwMS5oZWlnaHQoKWAgZmFpbGVkIGluIABiaW5BbmdsZSBvdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGBsYXAwLmhlaWdodCgpID09IGxhcDIuaGVpZ2h0KClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBiaW5BbmdsZSA8IG1OdW1BbmdsZUJpbnNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAoeC0xKSA+PSAwICYmICh4KzEpIDwgaW0ud2lkdGgoKWAgZmFpbGVkIGluIABBc3NlcnRpb24gYGJpblNjYWxlID49IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAoeS0xKSA+PSAwICYmICh5KzEpIDwgaW0uaGVpZ2h0KClgIGZhaWxlZCBpbiAAYmluU2NhbGUgb3V0IG9mIHJhbmdlAEFzc2VydGlvbiBgKGxhcDAud2lkdGgoKT4+MSkgPT0gbGFwMi53aWR0aCgpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgYmluU2NhbGUgPCBtTnVtU2NhbGVCaW5zYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgKGxhcDAuaGVpZ2h0KCk+PjEpID09IGxhcDIuaGVpZ2h0KClgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGBkaXN0QmluQW5nbGUgPj0gMGAgZmFpbGVkIGluIABBc3NlcnRpb24gYHhfZGl2XzItMC41ZiA+PSAwYCBmYWlsZWQgaW4gAGRpc3RCaW5BbmdsZSBtdXN0IG5vdCBiZSBuZWdhdGl2ZQB4X2Rpdl8yIG91dCBvZiBib3VuZHMgb3V0IG9mIGJvdW5kcyBmb3IgaW50ZXJwb2xhdGlvbgBBc3NlcnRpb24gYGh5cC5zaXplKCkgPj0gOSptYXhfbnVtX2h5cG90aGVzZXNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB5X2Rpdl8yLTAuNWYgPj0gMGAgZmFpbGVkIGluIAAvaG9tZS93YWx0ZXIva2Fsd2FsdC1naXRodWIvQVIuanMtZ2l0aHViLW9yZy9hcnRvb2xraXQ1LWpzL2xpYi9hcnRvb2xraXQ1L2xpYi9TUkMvS1BNL0ZyZWFrTWF0Y2hlci9ob21vZ3JhcGh5X2VzdGltYXRpb24vcm9idXN0X2hvbW9ncmFwaHkuaAB5X2Rpdl8yIG91dCBvZiBib3VuZHMgb3V0IG9mIGJvdW5kcyBmb3IgaW50ZXJwb2xhdGlvbgBoeXAgdmVjdG9yIHNob3VsZCBiZSBvZiBzaXplIDkqbWF4X251bV9oeXBvdGhlc2VzAEFzc2VydGlvbiBgeF9kaXZfMiswLjVmIDwgbGFwMi53aWR0aCgpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgdG1wX2kuc2l6ZSgpID49IG51bV9wb2ludHNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGB5X2Rpdl8yKzAuNWYgPCBsYXAyLmhlaWdodCgpYCBmYWlsZWQgaW4gAHRtcF9pIHZlY3RvciBzaG91bGQgYmUgb2Ygc2l6ZSBudW1fcG9pbnRzAEFzc2VydGlvbiBgKGxhcDAud2lkdGgoKT4+MSkgPT0gbGFwMS53aWR0aCgpYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgaHlwX2Nvc3RzLnNpemUoKSA+PSBtYXhfbnVtX2h5cG90aGVzZXNgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAobGFwMC5oZWlnaHQoKT4+MSkgPT0gbGFwMS5oZWlnaHQoKWAgZmFpbGVkIGluIABoeXBfY29zdHMgdmVjdG9yIHNob3VsZCBiZSBvZiBzaXplIG1heF9udW1faHlwb3RoZXNlcwBhbGxvY2F0b3I8VD46OmFsbG9jYXRlKHNpemVfdCBuKSAnbicgZXhjZWVkcyBtYXhpbXVtIHN1cHBvcnRlZCBzaXplAEFzc2VydGlvbiBgbiA+IDBgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGByb3cgPCBtSGVpZ2h0YCBmYWlsZWQgaW4gAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL3V0aWxzL3BhcnRpYWxfc29ydC5oAC9ob21lL3dhbHRlci9rYWx3YWx0LWdpdGh1Yi9BUi5qcy1naXRodWItb3JnL2FydG9vbGtpdDUtanMvbGliL2FydG9vbGtpdDUvbGliL1NSQy9LUE0vRnJlYWtNYXRjaGVyL2ZyYW1ld29yay9pbWFnZS5oAG4gbXVzdCBiZSBwb3NpdGl2ZQByb3cgb3V0IG9mIGJvdW5kcwBBc3NlcnRpb24gYGsgPiAwYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgKGludClzdGQ6OmZsb29yKHgpID09IChpbnQpeGAgZmFpbGVkIGluIABrIG11c3QgYmUgcG9zaXRpdmUAL2hvbWUvd2FsdGVyL2thbHdhbHQtZ2l0aHViL0FSLmpzLWdpdGh1Yi1vcmcvYXJ0b29sa2l0NS1qcy9saWIvYXJ0b29sa2l0NS9saWIvU1JDL0tQTS9GcmVha01hdGNoZXIvZGV0ZWN0b3JzL2ludGVycG9sYXRlLmgAQXNzZXJ0aW9uIGAwYCBmYWlsZWQgaW4gAGZsb29yKCkgYW5kIGNhc3Qgbm90IHRoZSBzYW1lAEZhaWxlZCB0byBjb21wdXRlIG1hdHJpeCBpbnZlcnNlAEFzc2VydGlvbiBgKGludClzdGQ6OmZsb29yKHkpID09IChpbnQpeWAgZmFpbGVkIGluIABBc3NlcnRpb24gYHlwID49IDAgJiYgeXAgPCBoZWlnaHRgIGZhaWxlZCBpbiAAeXAgb3V0IG9mIGJvdW5kcwBBc3NlcnRpb24gYHlwX3BsdXNfMSA+PSAwICYmIHlwX3BsdXNfMSA8IGhlaWdodGAgZmFpbGVkIGluIAB5cF9wbHVzXzEgb3V0IG9mIGJvdW5kcwBBc3NlcnRpb24gYHhwID49IDAgJiYgeHAgPCB3aWR0aGAgZmFpbGVkIGluIAB4cCBvdXQgb2YgYm91bmRzAEFzc2VydGlvbiBgeHBfcGx1c18xID49IDAgJiYgeHBfcGx1c18xIDwgd2lkdGhgIGZhaWxlZCBpbiAAeHBfcGx1c18xIG91dCBvZiBib3VuZHMAQXNzZXJ0aW9uIGB3MCA+PSAwICYmIHcwIDw9IDEuMDAwMWAgZmFpbGVkIGluIABPdXQgb2YgcmFuZ2UAQXNzZXJ0aW9uIGB3MSA+PSAwICYmIHcxIDw9IDEuMDAwMWAgZmFpbGVkIGluIABBc3NlcnRpb24gYHcyID49IDAgJiYgdzIgPD0gMS4wMDAxYCBmYWlsZWQgaW4gAEFzc2VydGlvbiBgdzMgPj0gMCAmJiB3MyA8PSAxLjAwMDFgIGZhaWxlZCBpbiAAQXNzZXJ0aW9uIGAodzArdzErdzIrdzMpIDw9IDEuMDAwMWAgZmFpbGVkIGluIAAAAAAAAADAXQAAEAAAABEAAAAAAAAAsHMAABIAAAATAAAATjZ2aXNpb245RXhjZXB0aW9uRQAE+QAAcHMAAOz2AABONnZpc2lvbjE4Qmlub21pYWxQeXJhbWlkMzJmRQAAAAT5AACQcwAAwF0AAAAAAACEcwAADgAAABQAAAAVAAAAuVKMPo5a5z65Uow+AAAAAAAAAABkdAAAFgAAABcAAAAYAAAAGQAAABoAAABOU3QzX18yMjBfX3NoYXJlZF9wdHJfcG9pbnRlcklQTjZ2aXNpb244S2V5ZnJhbWVJTGk5NkVFRU5TXzE0ZGVmYXVsdF9kZWxldGVJUzNfRUVOU185YWxsb2NhdG9ySVMzX0VFRUUAAAT5AAD8cwAAQPYAAE5TdDNfXzIxNGRlZmF1bHRfZGVsZXRlSU42dmlzaW9uOEtleWZyYW1lSUxpOTZFRUVFRQBib29sIHZpc2lvbjo6VmlzdWFsRGF0YWJhc2U8dmlzaW9uOjpGUkVBS0V4dHJhY3RvciwgdmlzaW9uOjpCaW5hcnlGZWF0dXJlU3RvcmUsIHZpc2lvbjo6QmluYXJ5RmVhdHVyZU1hdGNoZXI8OTY+Pjo6cXVlcnkoY29uc3QgdmlzaW9uOjpHYXVzc2lhblNjYWxlU3BhY2VQeXJhbWlkICopIFtGRUFUVVJFX0VYVFJBQ1RPUiA9IHZpc2lvbjo6RlJFQUtFeHRyYWN0b3IsIFNUT1JFID0gdmlzaW9uOjpCaW5hcnlGZWF0dXJlU3RvcmUsIE1BVENIRVIgPSB2aXNpb246OkJpbmFyeUZlYXR1cmVNYXRjaGVyPDk2Pl0AQdTrAQvxC7K+uT4S3KC+kL45PhLcoL6Qvjm+AAAAgLK+ub4S3KA+kL45vhLcoD6Qvjk+0nIYvwAAAADScpi+OgYEv9JymD46BgS/0nIYPwAAAIDScpg+OgYEP9JymL46BgQ/AAAAgFa4Pb9mTSQ/Vri9vmZNJD9WuL0+AAAAAFa4PT9mTSS/Vri9PmZNJL9WuL2+DOlYPwAAAIAM6dg+mdk7Pwzp2L6Z2Ts/DOlYvwAAAAAM6di+mdk7vwzp2D6Z2Tu/AAAAAPxTbj/xZU6/DVTuPvFlTr8NVO6+AAAAgPxTbr/xZU4/DVTuvvFlTj8NVO4+AACAvwAAAAAAAAC/0LNdvwAAAD/Qs12/AACAPwAAAIAAAAA/0LNdPwAAAL/Qs10/AAAAAFh3AAAWAAAAGwAAABwAAAAdAAAAHgAAAE5TdDNfXzIyMF9fc2hhcmVkX3B0cl9wb2ludGVySVBoMTZOdWxsQXJyYXlEZWxldGVySWhFTlNfOWFsbG9jYXRvckloRUVFRQAAAAAE+QAADHcAAED2AAAxNk51bGxBcnJheURlbGV0ZXJJaEUAAAAAAAAA5HcAABYAAAAfAAAAIAAAACEAAAAiAAAATlN0M19fMjIwX19zaGFyZWRfcHRyX3BvaW50ZXJJUGhOU18xNGRlZmF1bHRfZGVsZXRlSWhFRU5TXzlhbGxvY2F0b3JJaEVFRUUAAAT5AACYdwAAQPYAAE5TdDNfXzIxNGRlZmF1bHRfZGVsZXRlSWhFRQB2aXNpb246OlNjb3BlZFRpbWVyOjp+U2NvcGVkVGltZXIoKQBUcmFja2luZyBsb3N0LiAlZAoAVHJhY2tlZCBwYWdlICVkIChtYXggJWQpLgoAaWRkZGRkZGRkZGRkZGQAaQBFcnJvcjogYXIyQ3JlYXRlSGFuZGxlLgoAUmVhZGluZyAlcy5mc2V0MwoAZnNldDMARXJyb3IgcmVhZGluZyBLUE0gZGF0YSBmcm9tICVzLmZzZXQzCgAgIEFzc2lnbmVkIHBhZ2Ugbm8uICVkLgoARXJyb3I6IGtwbUNoYW5nZVBhZ2VOb09mUmVmRGF0YVNldAoARXJyb3I6IGtwbU1lcmdlUmVmRGF0YVNldAoAICBEb25lLgoAUmVhZGluZyAlcy5mc2V0CgBmc2V0AEVycm9yIHJlYWRpbmcgZGF0YSBmcm9tICVzLmZzZXQKAEVycm9yOiBrcG1TZXRSZWZEYXRhU2V0CgBMb2FkaW5nIG9mIE5GVCBkYXRhIGNvbXBsZXRlLgoAbG9hZENhbWVyYSgpOiBFcnJvciBsb2FkaW5nIHBhcmFtZXRlciBmaWxlICVzIGZvciBjYW1lcmEuCgAqKiogQ2FtZXJhIFBhcmFtZXRlciByZXNpemVkIGZyb20gJWQsICVkLiAqKioKAHNldENhbWVyYSgpOiBFcnJvcjogYXJQYXJhbUxUQ3JlYXRlLgoAc2V0Q2FtZXJhKCk6IEVycm9yOiBhckNyZWF0ZUhhbmRsZS4KAHNldENhbWVyYSgpOiBFcnJvciBjcmVhdGluZyAzRCBoYW5kbGUAQVJUb29sS2l0SlMoKTogVW5hYmxlIHRvIHNldCB1cCBBUiBtYXJrZXIuCgBBUlRvb2xLaXRKUygpOiBVbmFibGUgdG8gc2V0IHVwIE5GVCBtYXJrZXIuCgBBUlRvb2xLaXRKUygpOiBVbmFibGUgdG8gc2V0IHVwIEFSIG11bHRpbWFya2VyLgoAUGF0dGVybiBkZXRlY3Rpb24gbW9kZSBzZXQgdG8gJWQuCgBQYXR0ZXJuIHJhdGlvIHNpemUgc2V0IHRvICVmLgoATGFiZWxpbmcgbW9kZSBzZXQgdG8gJWQKAFRocmVzaG9sZCBzZXQgdG8gJWQKAFRocmVzaG9sZCBtb2RlIHNldCB0byAlZAoARGVidWcgbW9kZSBzZXQgdG8gJXMKAG9uLgBvZmYuAEltYWdlIHByb2MuIG1vZGUgc2V0IHRvICVkLgoAaWlpZABB0PcBC7QTaWlpaWlpaWRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRpAHNldHVwKCk6IEVycm9yOiBhclBhdHRDcmVhdGVIYW5kbGUuCgBBbGxvY2F0ZWQgdmlkZW9GcmFtZVNpemUgJWQKAGlpaWlpaQBzZXR1cAB0ZWFyZG93bgBzZXR1cEFSMgBfYWRkTWFya2VyAF9hZGRNdWx0aU1hcmtlcgBfYWRkTkZUTWFya2VyAGdldE11bHRpTWFya2VyTnVtAGdldE11bHRpTWFya2VyQ291bnQAX2xvYWRDYW1lcmEAc2V0TWFya2VySW5mb0RpcgBzZXRNYXJrZXJJbmZvVmVydGV4AGdldFRyYW5zTWF0U3F1YXJlAGdldFRyYW5zTWF0U3F1YXJlQ29udABnZXRUcmFuc01hdE11bHRpU3F1YXJlAGdldFRyYW5zTWF0TXVsdGlTcXVhcmVSb2J1c3QAZGV0ZWN0TWFya2VyAGdldE1hcmtlck51bQBkZXRlY3RORlRNYXJrZXIAZ2V0TXVsdGlFYWNoTWFya2VyAGdldE1hcmtlcgBnZXRORlRNYXJrZXIAc2V0RGVidWdNb2RlAGdldERlYnVnTW9kZQBnZXRQcm9jZXNzaW5nSW1hZ2UAc2V0TG9nTGV2ZWwAZ2V0TG9nTGV2ZWwAc2V0UHJvamVjdGlvbk5lYXJQbGFuZQBnZXRQcm9qZWN0aW9uTmVhclBsYW5lAHNldFByb2plY3Rpb25GYXJQbGFuZQBnZXRQcm9qZWN0aW9uRmFyUGxhbmUAc2V0VGhyZXNob2xkTW9kZQBnZXRUaHJlc2hvbGRNb2RlAHNldFRocmVzaG9sZABnZXRUaHJlc2hvbGQAc2V0UGF0dGVybkRldGVjdGlvbk1vZGUAZ2V0UGF0dGVybkRldGVjdGlvbk1vZGUAc2V0UGF0dFJhdGlvAGdldFBhdHRSYXRpbwBzZXRNYXRyaXhDb2RlVHlwZQBnZXRNYXRyaXhDb2RlVHlwZQBzZXRMYWJlbGluZ01vZGUAZ2V0TGFiZWxpbmdNb2RlAHNldEltYWdlUHJvY01vZGUAZ2V0SW1hZ2VQcm9jTW9kZQBFUlJPUl9BUkNPTlRST0xMRVJfTk9UX0ZPVU5EAEVSUk9SX01VTFRJTUFSS0VSX05PVF9GT1VORABFUlJPUl9NQVJLRVJfSU5ERVhfT1VUX09GX0JPVU5EUwBBUl9ERUJVR19ESVNBQkxFAEFSX0RFQlVHX0VOQUJMRQBBUl9ERUZBVUxUX0RFQlVHX01PREUAQVJfTEFCRUxJTkdfV0hJVEVfUkVHSU9OAEFSX0xBQkVMSU5HX0JMQUNLX1JFR0lPTgBBUl9ERUZBVUxUX0xBQkVMSU5HX01PREUAQVJfREVGQVVMVF9MQUJFTElOR19USFJFU0gAQVJfSU1BR0VfUFJPQ19GUkFNRV9JTUFHRQBBUl9JTUFHRV9QUk9DX0ZJRUxEX0lNQUdFAEFSX0RFRkFVTFRfSU1BR0VfUFJPQ19NT0RFAEFSX1RFTVBMQVRFX01BVENISU5HX0NPTE9SAEFSX1RFTVBMQVRFX01BVENISU5HX01PTk8AQVJfTUFUUklYX0NPREVfREVURUNUSU9OAEFSX1RFTVBMQVRFX01BVENISU5HX0NPTE9SX0FORF9NQVRSSVgAQVJfVEVNUExBVEVfTUFUQ0hJTkdfTU9OT19BTkRfTUFUUklYAEFSX0RFRkFVTFRfUEFUVEVSTl9ERVRFQ1RJT05fTU9ERQBBUl9VU0VfVFJBQ0tJTkdfSElTVE9SWQBBUl9OT1VTRV9UUkFDS0lOR19ISVNUT1JZAEFSX1VTRV9UUkFDS0lOR19ISVNUT1JZX1YyAEFSX0RFRkFVTFRfTUFSS0VSX0VYVFJBQ1RJT05fTU9ERQBBUl9NQVhfTE9PUF9DT1VOVABBUl9MT09QX0JSRUFLX1RIUkVTSABBUl9MT0dfTEVWRUxfREVCVUcAQVJfTE9HX0xFVkVMX0lORk8AQVJfTE9HX0xFVkVMX1dBUk4AQVJfTE9HX0xFVkVMX0VSUk9SAEFSX0xPR19MRVZFTF9SRUxfSU5GTwBBUl9NQVRSSVhfQ09ERV8zeDMAQVJfTUFUUklYX0NPREVfM3gzX0hBTU1JTkc2MwBBUl9NQVRSSVhfQ09ERV8zeDNfUEFSSVRZNjUAQVJfTUFUUklYX0NPREVfNHg0AEFSX01BVFJJWF9DT0RFXzR4NF9CQ0hfMTNfOV8zAEFSX01BVFJJWF9DT0RFXzR4NF9CQ0hfMTNfNV81AEFSX0xBQkVMSU5HX1RIUkVTSF9NT0RFX01BTlVBTABBUl9MQUJFTElOR19USFJFU0hfTU9ERV9BVVRPX01FRElBTgBBUl9MQUJFTElOR19USFJFU0hfTU9ERV9BVVRPX09UU1UAQVJfTEFCRUxJTkdfVEhSRVNIX01PREVfQVVUT19BREFQVElWRQBBUl9NQVJLRVJfSU5GT19DVVRPRkZfUEhBU0VfTk9ORQBBUl9NQVJLRVJfSU5GT19DVVRPRkZfUEhBU0VfUEFUVEVSTl9FWFRSQUNUSU9OAEFSX01BUktFUl9JTkZPX0NVVE9GRl9QSEFTRV9NQVRDSF9HRU5FUklDAEFSX01BUktFUl9JTkZPX0NVVE9GRl9QSEFTRV9NQVRDSF9DT05UUkFTVABBUl9NQVJLRVJfSU5GT19DVVRPRkZfUEhBU0VfTUFUQ0hfQkFSQ09ERV9OT1RfRk9VTkQAQVJfTUFSS0VSX0lORk9fQ1VUT0ZGX1BIQVNFX01BVENIX0JBUkNPREVfRURDX0ZBSUwAQVJfTUFSS0VSX0lORk9fQ1VUT0ZGX1BIQVNFX01BVENIX0NPTkZJREVOQ0UAQVJfTUFSS0VSX0lORk9fQ1VUT0ZGX1BIQVNFX1BPU0VfRVJST1IAQVJfTUFSS0VSX0lORk9fQ1VUT0ZGX1BIQVNFX1BPU0VfRVJST1JfTVVMVEkAQVJfTUFSS0VSX0lORk9fQ1VUT0ZGX1BIQVNFX0hFVVJJU1RJQ19UUk9VQkxFU09NRV9NQVRSSVhfQ09ERVMAbG9hZE1hcmtlcigpOiBFcnJvciBsb2FkaW5nIHBhdHRlcm4gZmlsZSAlcy4KAGNvbmZpZyBkYXRhIGxvYWQgZXJyb3IgISEKAABhbGxvY2F0b3I8VD46OmFsbG9jYXRlKHNpemVfdCBuKSAnbicgZXhjZWVkcyBtYXhpbXVtIHN1cHBvcnRlZCBzaXplAEGQiwIL0yd4+AAAePgAAHj4AAB4+AAAaWlpaWkAAAB4+AAAePgAAGlpaQB4+AAAePgAADCGAABOU3QzX18yMTJiYXNpY19zdHJpbmdJY05TXzExY2hhcl90cmFpdHNJY0VFTlNfOWFsbG9jYXRvckljRUVFRQBOU3QzX18yMjFfX2Jhc2ljX3N0cmluZ19jb21tb25JTGIxRUVFAAAAANz4AAD/hQAAYPkAAMCFAAAAAAAAAQAAACiGAAAAAAAAaWlpaQAAAAB4+AAAePgAAHj4AAB4+AAAMIYAACT4AAB4+AAAdmlpAHj4AABpaQAAJPgAAHj4AADM+AAAdmlpZAAAAADM+AAAePgAAGRpaQAk+AAAePgAAHj4AAB2aWlpAAAAACT4AAB4+AAAwPgAAHZpaWYAT3V0IG9mIG1lbW9yeSEhCgAjIyMgRmVhdHVyZSBjYW5kaWRhdGVzIGZvciB0cmFja2luZyBhcmUgb3ZlcmZsb3cuCgBFcnJvcjogbWFsbG9jCgBCb2d1cyBtZXNzYWdlIGNvZGUgJWQAQUxJR05fVFlQRSBpcyB3cm9uZywgcGxlYXNlIGZpeABNQVhfQUxMT0NfQ0hVTksgaXMgd3JvbmcsIHBsZWFzZSBmaXgAQm9ndXMgYnVmZmVyIGNvbnRyb2wgbW9kZQBJbnZhbGlkIGNvbXBvbmVudCBJRCAlZCBpbiBTT1MASW52YWxpZCBjcm9wIHJlcXVlc3QARENUIGNvZWZmaWNpZW50IG91dCBvZiByYW5nZQBEQ1Qgc2NhbGVkIGJsb2NrIHNpemUgJWR4JWQgbm90IHN1cHBvcnRlZABDb21wb25lbnQgaW5kZXggJWQ6IG1pc21hdGNoaW5nIHNhbXBsaW5nIHJhdGlvICVkOiVkLCAlZDolZCwgJWMAQm9ndXMgSHVmZm1hbiB0YWJsZSBkZWZpbml0aW9uAEJvZ3VzIGlucHV0IGNvbG9yc3BhY2UAQm9ndXMgSlBFRyBjb2xvcnNwYWNlAEJvZ3VzIG1hcmtlciBsZW5ndGgAV3JvbmcgSlBFRyBsaWJyYXJ5IHZlcnNpb246IGxpYnJhcnkgaXMgJWQsIGNhbGxlciBleHBlY3RzICVkAFNhbXBsaW5nIGZhY3RvcnMgdG9vIGxhcmdlIGZvciBpbnRlcmxlYXZlZCBzY2FuAEludmFsaWQgbWVtb3J5IHBvb2wgY29kZSAlZABVbnN1cHBvcnRlZCBKUEVHIGRhdGEgcHJlY2lzaW9uICVkAEludmFsaWQgcHJvZ3Jlc3NpdmUgcGFyYW1ldGVycyBTcz0lZCBTZT0lZCBBaD0lZCBBbD0lZABJbnZhbGlkIHByb2dyZXNzaXZlIHBhcmFtZXRlcnMgYXQgc2NhbiBzY3JpcHQgZW50cnkgJWQAQm9ndXMgc2FtcGxpbmcgZmFjdG9ycwBJbnZhbGlkIHNjYW4gc2NyaXB0IGF0IGVudHJ5ICVkAEltcHJvcGVyIGNhbGwgdG8gSlBFRyBsaWJyYXJ5IGluIHN0YXRlICVkAEpQRUcgcGFyYW1ldGVyIHN0cnVjdCBtaXNtYXRjaDogbGlicmFyeSB0aGlua3Mgc2l6ZSBpcyAldSwgY2FsbGVyIGV4cGVjdHMgJXUAQm9ndXMgdmlydHVhbCBhcnJheSBhY2Nlc3MAQnVmZmVyIHBhc3NlZCB0byBKUEVHIGxpYnJhcnkgaXMgdG9vIHNtYWxsAFN1c3BlbnNpb24gbm90IGFsbG93ZWQgaGVyZQBDQ0lSNjAxIHNhbXBsaW5nIG5vdCBpbXBsZW1lbnRlZCB5ZXQAVG9vIG1hbnkgY29sb3IgY29tcG9uZW50czogJWQsIG1heCAlZABVbnN1cHBvcnRlZCBjb2xvciBjb252ZXJzaW9uIHJlcXVlc3QAQm9ndXMgREFDIGluZGV4ICVkAEJvZ3VzIERBQyB2YWx1ZSAweCV4AEJvZ3VzIERIVCBpbmRleCAlZABCb2d1cyBEUVQgaW5kZXggJWQARW1wdHkgSlBFRyBpbWFnZSAoRE5MIG5vdCBzdXBwb3J0ZWQpAFJlYWQgZnJvbSBFTVMgZmFpbGVkAFdyaXRlIHRvIEVNUyBmYWlsZWQARGlkbid0IGV4cGVjdCBtb3JlIHRoYW4gb25lIHNjYW4ASW5wdXQgZmlsZSByZWFkIGVycm9yAE91dHB1dCBmaWxlIHdyaXRlIGVycm9yIC0tLSBvdXQgb2YgZGlzayBzcGFjZT8ARnJhY3Rpb25hbCBzYW1wbGluZyBub3QgaW1wbGVtZW50ZWQgeWV0AEh1ZmZtYW4gY29kZSBzaXplIHRhYmxlIG92ZXJmbG93AE1pc3NpbmcgSHVmZm1hbiBjb2RlIHRhYmxlIGVudHJ5AE1heGltdW0gc3VwcG9ydGVkIGltYWdlIGRpbWVuc2lvbiBpcyAldSBwaXhlbHMARW1wdHkgaW5wdXQgZmlsZQBQcmVtYXR1cmUgZW5kIG9mIGlucHV0IGZpbGUAQ2Fubm90IHRyYW5zY29kZSBkdWUgdG8gbXVsdGlwbGUgdXNlIG9mIHF1YW50aXphdGlvbiB0YWJsZSAlZABTY2FuIHNjcmlwdCBkb2VzIG5vdCB0cmFuc21pdCBhbGwgZGF0YQBJbnZhbGlkIGNvbG9yIHF1YW50aXphdGlvbiBtb2RlIGNoYW5nZQBOb3QgaW1wbGVtZW50ZWQgeWV0AFJlcXVlc3RlZCBmZWF0dXJlIHdhcyBvbWl0dGVkIGF0IGNvbXBpbGUgdGltZQBBcml0aG1ldGljIHRhYmxlIDB4JTAyeCB3YXMgbm90IGRlZmluZWQAQmFja2luZyBzdG9yZSBub3Qgc3VwcG9ydGVkAEh1ZmZtYW4gdGFibGUgMHglMDJ4IHdhcyBub3QgZGVmaW5lZABKUEVHIGRhdGFzdHJlYW0gY29udGFpbnMgbm8gaW1hZ2UAUXVhbnRpemF0aW9uIHRhYmxlIDB4JTAyeCB3YXMgbm90IGRlZmluZWQATm90IGEgSlBFRyBmaWxlOiBzdGFydHMgd2l0aCAweCUwMnggMHglMDJ4AEluc3VmZmljaWVudCBtZW1vcnkgKGNhc2UgJWQpAENhbm5vdCBxdWFudGl6ZSBtb3JlIHRoYW4gJWQgY29sb3IgY29tcG9uZW50cwBDYW5ub3QgcXVhbnRpemUgdG8gZmV3ZXIgdGhhbiAlZCBjb2xvcnMAQ2Fubm90IHF1YW50aXplIHRvIG1vcmUgdGhhbiAlZCBjb2xvcnMASW52YWxpZCBKUEVHIGZpbGUgc3RydWN0dXJlOiAlcyBiZWZvcmUgU09GAEludmFsaWQgSlBFRyBmaWxlIHN0cnVjdHVyZTogdHdvIFNPRiBtYXJrZXJzAEludmFsaWQgSlBFRyBmaWxlIHN0cnVjdHVyZTogbWlzc2luZyBTT1MgbWFya2VyAFVuc3VwcG9ydGVkIEpQRUcgcHJvY2VzczogU09GIHR5cGUgMHglMDJ4AEludmFsaWQgSlBFRyBmaWxlIHN0cnVjdHVyZTogdHdvIFNPSSBtYXJrZXJzAEZhaWxlZCB0byBjcmVhdGUgdGVtcG9yYXJ5IGZpbGUgJXMAUmVhZCBmYWlsZWQgb24gdGVtcG9yYXJ5IGZpbGUAU2VlayBmYWlsZWQgb24gdGVtcG9yYXJ5IGZpbGUAV3JpdGUgZmFpbGVkIG9uIHRlbXBvcmFyeSBmaWxlIC0tLSBvdXQgb2YgZGlzayBzcGFjZT8AQXBwbGljYXRpb24gdHJhbnNmZXJyZWQgdG9vIGZldyBzY2FubGluZXMAVW5zdXBwb3J0ZWQgbWFya2VyIHR5cGUgMHglMDJ4AFZpcnR1YWwgYXJyYXkgY29udHJvbGxlciBtZXNzZWQgdXAASW1hZ2UgdG9vIHdpZGUgZm9yIHRoaXMgaW1wbGVtZW50YXRpb24AUmVhZCBmcm9tIFhNUyBmYWlsZWQAV3JpdGUgdG8gWE1TIGZhaWxlZABDb3B5cmlnaHQgKEMpIDIwMTgsIFRob21hcyBHLiBMYW5lLCBHdWlkbyBWb2xsYmVkaW5nADljICAxNC1KYW4tMjAxOABDYXV0aW9uOiBxdWFudGl6YXRpb24gdGFibGVzIGFyZSB0b28gY29hcnNlIGZvciBiYXNlbGluZSBKUEVHAEFkb2JlIEFQUDE0IG1hcmtlcjogdmVyc2lvbiAlZCwgZmxhZ3MgMHglMDR4IDB4JTA0eCwgdHJhbnNmb3JtICVkAFVua25vd24gQVBQMCBtYXJrZXIgKG5vdCBKRklGKSwgbGVuZ3RoICV1AFVua25vd24gQVBQMTQgbWFya2VyIChub3QgQWRvYmUpLCBsZW5ndGggJXUARGVmaW5lIEFyaXRobWV0aWMgVGFibGUgMHglMDJ4OiAweCUwMngARGVmaW5lIEh1ZmZtYW4gVGFibGUgMHglMDJ4AERlZmluZSBRdWFudGl6YXRpb24gVGFibGUgJWQgIHByZWNpc2lvbiAlZABEZWZpbmUgUmVzdGFydCBJbnRlcnZhbCAldQBGcmVlZCBFTVMgaGFuZGxlICV1AE9idGFpbmVkIEVNUyBoYW5kbGUgJXUARW5kIE9mIEltYWdlACAgICAgICAgJTNkICUzZCAlM2QgJTNkICUzZCAlM2QgJTNkICUzZABKRklGIEFQUDAgbWFya2VyOiB2ZXJzaW9uICVkLiUwMmQsIGRlbnNpdHkgJWR4JWQgICVkAFdhcm5pbmc6IHRodW1ibmFpbCBpbWFnZSBzaXplIGRvZXMgbm90IG1hdGNoIGRhdGEgbGVuZ3RoICV1AEpGSUYgZXh0ZW5zaW9uIG1hcmtlcjogdHlwZSAweCUwMngsIGxlbmd0aCAldQAgICAgd2l0aCAlZCB4ICVkIHRodW1ibmFpbCBpbWFnZQBNaXNjZWxsYW5lb3VzIG1hcmtlciAweCUwMngsIGxlbmd0aCAldQBVbmV4cGVjdGVkIG1hcmtlciAweCUwMngAICAgICAgICAlNHUgJTR1ICU0dSAlNHUgJTR1ICU0dSAlNHUgJTR1AFF1YW50aXppbmcgdG8gJWQgPSAlZColZColZCBjb2xvcnMAUXVhbnRpemluZyB0byAlZCBjb2xvcnMAU2VsZWN0ZWQgJWQgY29sb3JzIGZvciBxdWFudGl6YXRpb24AQXQgbWFya2VyIDB4JTAyeCwgcmVjb3ZlcnkgYWN0aW9uICVkAFJTVCVkAFNtb290aGluZyBub3Qgc3VwcG9ydGVkIHdpdGggbm9uc3RhbmRhcmQgc2FtcGxpbmcgcmF0aW9zAFN0YXJ0IE9mIEZyYW1lIDB4JTAyeDogd2lkdGg9JXUsIGhlaWdodD0ldSwgY29tcG9uZW50cz0lZAAgICAgQ29tcG9uZW50ICVkOiAlZGh4JWR2IHE9JWQAU3RhcnQgb2YgSW1hZ2UAU3RhcnQgT2YgU2NhbjogJWQgY29tcG9uZW50cwAgICAgQ29tcG9uZW50ICVkOiBkYz0lZCBhYz0lZAAgIFNzPSVkLCBTZT0lZCwgQWg9JWQsIEFsPSVkAENsb3NlZCB0ZW1wb3JhcnkgZmlsZSAlcwBPcGVuZWQgdGVtcG9yYXJ5IGZpbGUgJXMASkZJRiBleHRlbnNpb24gbWFya2VyOiBKUEVHLWNvbXByZXNzZWQgdGh1bWJuYWlsIGltYWdlLCBsZW5ndGggJXUASkZJRiBleHRlbnNpb24gbWFya2VyOiBwYWxldHRlIHRodW1ibmFpbCBpbWFnZSwgbGVuZ3RoICV1AEpGSUYgZXh0ZW5zaW9uIG1hcmtlcjogUkdCIHRodW1ibmFpbCBpbWFnZSwgbGVuZ3RoICV1AFVucmVjb2duaXplZCBjb21wb25lbnQgSURzICVkICVkICVkLCBhc3N1bWluZyBZQ2JDcgBGcmVlZCBYTVMgaGFuZGxlICV1AE9idGFpbmVkIFhNUyBoYW5kbGUgJXUAVW5rbm93biBBZG9iZSBjb2xvciB0cmFuc2Zvcm0gY29kZSAlZABDb3JydXB0IEpQRUcgZGF0YTogYmFkIGFyaXRobWV0aWMgY29kZQBJbmNvbnNpc3RlbnQgcHJvZ3Jlc3Npb24gc2VxdWVuY2UgZm9yIGNvbXBvbmVudCAlZCBjb2VmZmljaWVudCAlZABDb3JydXB0IEpQRUcgZGF0YTogJXUgZXh0cmFuZW91cyBieXRlcyBiZWZvcmUgbWFya2VyIDB4JTAyeABDb3JydXB0IEpQRUcgZGF0YTogcHJlbWF0dXJlIGVuZCBvZiBkYXRhIHNlZ21lbnQAQ29ycnVwdCBKUEVHIGRhdGE6IGJhZCBIdWZmbWFuIGNvZGUAV2FybmluZzogdW5rbm93biBKRklGIHJldmlzaW9uIG51bWJlciAlZC4lMDJkAFByZW1hdHVyZSBlbmQgb2YgSlBFRyBmaWxlAENvcnJ1cHQgSlBFRyBkYXRhOiBmb3VuZCBtYXJrZXIgMHglMDJ4IGluc3RlYWQgb2YgUlNUJWQASW52YWxpZCBTT1MgcGFyYW1ldGVycyBmb3Igc2VxdWVudGlhbCBKUEVHAEFwcGxpY2F0aW9uIHRyYW5zZmVycmVkIHRvbyBtYW55IHNjYW5saW5lcwBB8LIC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Vhcu32CoVmVhRk9mYuVHZ2PPQWhkPTxjXV43aWYxUmpnD0xraDlGZ2NeQelqJ1Zsa+dQbWeFS25tl1Vva09Q7m8QWnBtIlXwb+tZcXEdWnZvaWQAYm9vbABjaGFyAHNpZ25lZCBjaGFyAHVuc2lnbmVkIGNoYXIAc2hvcnQAdW5zaWduZWQgc2hvcnQAaW50AHVuc2lnbmVkIGludABsb25nAHVuc2lnbmVkIGxvbmcAaW50NjRfdAB1aW50NjRfdABmbG9hdABkb3VibGUAc3RkOjpzdHJpbmcAc3RkOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhcj4Ac3RkOjp3c3RyaW5nAHN0ZDo6dTE2c3RyaW5nAHN0ZDo6dTMyc3RyaW5nAGVtc2NyaXB0ZW46OnZhbABlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxzaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2hvcnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGludD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8bG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgbG9uZz4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MTZfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+AE5TdDNfXzIxMmJhc2ljX3N0cmluZ0loTlNfMTFjaGFyX3RyYWl0c0loRUVOU185YWxsb2NhdG9ySWhFRUVFAAAAYPkAAN+rAAAAAAAAAQAAACiGAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUAAGD5AAA4rAAAAAAAAAEAAAAohgAAAAAAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEc05TXzExY2hhcl90cmFpdHNJRHNFRU5TXzlhbGxvY2F0b3JJRHNFRUVFAAAAYPkAAJCsAAAAAAAAAQAAACiGAAAAAAAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURpTlNfMTFjaGFyX3RyYWl0c0lEaUVFTlNfOWFsbG9jYXRvcklEaUVFRUUAAABg+QAA7KwAAAAAAAABAAAAKIYAAAAAAABOMTBlbXNjcmlwdGVuM3ZhbEUAANz4AABIrQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJY0VFAADc+AAAZK0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWFFRQAA3PgAAIytAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0loRUUAANz4AAC0rQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJc0VFAADc+AAA3K0AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXRFRQAA3PgAAASuAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lpRUUAANz4AAAsrgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJakVFAADc+AAAVK4AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWxFRQAA3PgAAHyuAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ltRUUAANz4AACkrgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZkVFAADc+AAAzK4AAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWRFRQAA3PgAAPSuAAAAAAAAGRJEOwI/LEcUPTMwChsGRktFNw9JDo4XA0AdPGkrNh9KLRwBICUpIQgMFRYiLhA4Pgs0MRhkdHV2L0EJfzkRI0MyQomKiwUEJignDSoeNYwHGkiTE5SVAEGA3wILpA5JbGxlZ2FsIGJ5dGUgc2VxdWVuY2UARG9tYWluIGVycm9yAFJlc3VsdCBub3QgcmVwcmVzZW50YWJsZQBOb3QgYSB0dHkAUGVybWlzc2lvbiBkZW5pZWQAT3BlcmF0aW9uIG5vdCBwZXJtaXR0ZWQATm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeQBObyBzdWNoIHByb2Nlc3MARmlsZSBleGlzdHMAVmFsdWUgdG9vIGxhcmdlIGZvciBkYXRhIHR5cGUATm8gc3BhY2UgbGVmdCBvbiBkZXZpY2UAT3V0IG9mIG1lbW9yeQBSZXNvdXJjZSBidXN5AEludGVycnVwdGVkIHN5c3RlbSBjYWxsAFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlAEludmFsaWQgc2VlawBDcm9zcy1kZXZpY2UgbGluawBSZWFkLW9ubHkgZmlsZSBzeXN0ZW0ARGlyZWN0b3J5IG5vdCBlbXB0eQBDb25uZWN0aW9uIHJlc2V0IGJ5IHBlZXIAT3BlcmF0aW9uIHRpbWVkIG91dABDb25uZWN0aW9uIHJlZnVzZWQASG9zdCBpcyBkb3duAEhvc3QgaXMgdW5yZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBObyBl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3QCalBkAqCmVAGjOKAAJ7bQARJ8gAE6YygBwgmMAfnwjAA+5MgCn9Y4AFFbnACHxCAC1nSoAb35NAKUZUQC1+asAgt/WAJbdYQAWNgIAxDqfAIOioQBy7W0AOY16AIK4qQBrMlwARidbAAA07QDSAHcA/PRVAAFZTQDgcYAAQZODAwtdQPsh+T8AAAAALUR0PgAAAICYRvg8AAAAYFHMeDsAAACAgxvwOQAAAEAgJXo4AAAAgCKC4zYAAAAAHfNpNQAAAAAAAPA/AAAAAAAA+D8AAAAAAAAAAAbQz0Pr/Uw+AEH7gwMLTEADuOI/OGPtPtoPST9emHs/2g/JP2k3rDFoISIztA8UM2ghojPbD0k/2w9Jv+TLFkDkyxbAAAAAAAAAAIDbD0lA2w9JwHJ3YQByd2EAQeyEAwsB6ABBk4UDCwX//////wBB2IUDC1ktKyAgIDBYMHgAKG51bGwpAAAAAAAAAAARAAoAERERAAAAAAUAAAAAAAAJAAAAAAsAAAAAAAAAABEADwoREREDCgcAAQAJCwsAAAkGCwAACwAGEQAAABEREQBBwYYDCyELAAAAAAAAAAARAAoKERERAAoAAAIACQsAAAAJAAsAAAsAQfuGAwsBDABBh4cDCxUMAAAAAAwAAAAACQwAAAAAAAwAAAwAQbWHAwsBDgBBwYcDCxUNAAAABA0AAAAACQ4AAAAAAA4AAA4AQe+HAwsBEABB+4cDCx4PAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAQbKIAwsOEgAAABISEgAAAAAAAAkAQeOIAwsBCwBB74gDCxUKAAAAAAoAAAAACQsAAAAAAAsAAAsAQZ2JAwsBDABBqYkDC5kFDAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAwMTIzNDU2Nzg5QUJDREVGLTBYKzBYIDBYLTB4KzB4IDB4AGluZgBJTkYAbmFuAE5BTgAuAAAAAMj5AABg+gAAaW5maW5pdHkAbmFuAAAAANF0ngBXnb0qgHBSD///PicKAAAAZAAAAOgDAAAQJwAAoIYBAEBCDwCAlpgAAOH1BRgAAAA1AAAAcQAAAGv////O+///kr///wAAAAAAAAAA/////////////////////////////////////////////////////////////////wABAgMEBQYHCAn/////////CgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiP///////8KCwwNDg8QERITFBUWFxgZGhscHR4fICEiI/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAQIEBwMGBQAAAAAAAAACAADAAwAAwAQAAMAFAADABgAAwAcAAMAIAADACQAAwAoAAMALAADADAAAwA0AAMAOAADADwAAwBAAAMARAADAEgAAwBMAAMAUAADAFQAAwBYAAMAXAADAGAAAwBkAAMAaAADAGwAAwBwAAMAdAADAHgAAwB8AAMAAAACzAQAAwwIAAMMDAADDBAAAwwUAAMMGAADDBwAAwwgAAMMJAADDCgAAwwsAAMMMAADDDQAA0w4AAMMPAADDAAAMuwEADMMCAAzDAwAMwwQADNN2ZWN0b3IAQdSOAwufDgIAAAADAAAABQAAAAcAAAALAAAADQAAABEAAAATAAAAFwAAAB0AAAAfAAAAJQAAACkAAAArAAAALwAAADUAAAA7AAAAPQAAAEMAAABHAAAASQAAAE8AAABTAAAAWQAAAGEAAABlAAAAZwAAAGsAAABtAAAAcQAAAH8AAACDAAAAiQAAAIsAAACVAAAAlwAAAJ0AAACjAAAApwAAAK0AAACzAAAAtQAAAL8AAADBAAAAxQAAAMcAAADTAAAAAQAAAAsAAAANAAAAEQAAABMAAAAXAAAAHQAAAB8AAAAlAAAAKQAAACsAAAAvAAAANQAAADsAAAA9AAAAQwAAAEcAAABJAAAATwAAAFMAAABZAAAAYQAAAGUAAABnAAAAawAAAG0AAABxAAAAeQAAAH8AAACDAAAAiQAAAIsAAACPAAAAlQAAAJcAAACdAAAAowAAAKcAAACpAAAArQAAALMAAAC1AAAAuwAAAL8AAADBAAAAxQAAAMcAAADRAAAAX19uZXh0X3ByaW1lIG92ZXJmbG93AAAA2PsAAAAAAABEyQAA7wAAAPAAAADxAAAA8gAAAPMAAAD0AAAA9QAAAPYAAAD3AAAA+AAAAPkAAAD6AAAA+wAAAPwAAABO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";

								function KA(A) {
									try {
										if (A == JA && U) return new Uint8Array(U);
										var I = mg(A);
										if (I) return I;
										if (w) return w(A);
										throw "both async and sync fetching of the wasm failed"
									} catch (A) {
										cA(A)
									}
								}

								function dA() {
									if (!U && (t || s)) {
										if ("function" == typeof fetch && !kA(JA)) return fetch(JA, {
											credentials: "same-origin"
										}).then((function (A) {
											if (!A.ok) throw "failed to load wasm binary file at '" + JA + "'";
											return A.arrayBuffer()
										})).catch((function () {
											return KA(JA)
										}));
										if (G) return new Promise((function (A, I) {
											G(JA, (function (I) {
												A(new Uint8Array(I))
											}), I)
										}))
									}
									return Promise.resolve().then((function () {
										return KA(JA)
									}))
								}

								function lA() {
									var I = {
										a: bg
									};

									function g(I, g) {
										var B = I.exports;
										A.asm = B, EA((d = A.asm.P).buffer), iA = A.asm.U, rA(A.asm.Q), FA()
									}

									function C(A) {
										g(A.instance)
									}

									function Q(A) {
										return dA().then((function (A) {
											return WebAssembly.instantiate(A, I)
										})).then(A, (function (A) {
											M("failed to asynchronously prepare wasm: " + A), cA(A)
										}))
									}
									if (RA(), A.instantiateWasm) try {
										return A.instantiateWasm(I, g)
									} catch (A) {
										return M("Module.instantiateWasm callback failed with error: " + A), !1
									}
									return (U || "function" != typeof WebAssembly.instantiateStreaming || SA(JA) || kA(JA) || "function" != typeof fetch ? Q(C) : fetch(JA, {
										credentials: "same-origin"
									}).then((function (A) {
										return WebAssembly.instantiateStreaming(A, I).then(C, (function (A) {
											return M("wasm streaming compile failed: " + A), M("falling back to ArrayBuffer instantiation"), Q(C)
										}))
									}))).catch(B), {}
								}
								SA(JA) || (JA = F(JA));
								var YA = {
									64620: function () {
										var A = arguments,
											I = 0;
										artoolkit.NFTMarkerInfo || (artoolkit.NFTMarkerInfo = {
											id: 0,
											error: -1,
											found: 0,
											pose: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
										});
										var g = artoolkit.NFTMarkerInfo;
										g.id = A[I++], g.error = A[I++], g.found = 1, g.pose[0] = A[I++], g.pose[1] = A[I++], g.pose[2] = A[I++], g.pose[3] = A[I++], g.pose[4] = A[I++], g.pose[5] = A[I++], g.pose[6] = A[I++], g.pose[7] = A[I++], g.pose[8] = A[I++], g.pose[9] = A[I++], g.pose[10] = A[I++], g.pose[11] = A[I++]
									},
									65317: function () {
										var A = arguments,
											I = 0;
										artoolkit.NFTMarkerInfo || (artoolkit.NFTMarkerInfo = {
											id: 0,
											error: -1,
											found: 0,
											pose: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
										});
										var g = artoolkit.NFTMarkerInfo;
										g.id = A[I++], g.error = -1, g.found = 0, g.pose[0] = 0, g.pose[1] = 0, g.pose[2] = 0, g.pose[3] = 0, g.pose[4] = 0, g.pose[5] = 0, g.pose[6] = 0, g.pose[7] = 0, g.pose[8] = 0, g.pose[9] = 0, g.pose[10] = 0, g.pose[11] = 0
									},
									65937: function (A, I, g, B) {
										artoolkit.multiEachMarkerInfo || (artoolkit.multiEachMarkerInfo = {});
										var C = artoolkit.multiEachMarkerInfo;
										C.visible = A, C.pattId = I, C.pattType = g, C.width = B
									},
									66211: function (A, I, g, B, C, Q, E, i, o, a, D, t) {
										var s = arguments,
											e = 12;
										artoolkit.markerInfo || (artoolkit.markerInfo = {
											pos: [0, 0],
											line: [
												[0, 0, 0],
												[0, 0, 0],
												[0, 0, 0],
												[0, 0, 0]
											],
											vertex: [
												[0, 0],
												[0, 0],
												[0, 0],
												[0, 0]
											]
										});
										var h = artoolkit.markerInfo;
										h.area = A, h.id = I, h.idPatt = g, h.idMatrix = B, h.dir = C, h.dirPatt = Q, h.dirMatrix = E, h.cf = i, h.cfPatt = o, h.cfMatrix = a, h.pos[0] = D, h.pos[1] = t, h.line[0][0] = s[e++], h.line[0][1] = s[e++], h.line[0][2] = s[e++], h.line[1][0] = s[e++], h.line[1][1] = s[e++], h.line[1][2] = s[e++], h.line[2][0] = s[e++], h.line[2][1] = s[e++], h.line[2][2] = s[e++], h.line[3][0] = s[e++], h.line[3][1] = s[e++], h.line[3][2] = s[e++], h.vertex[0][0] = s[e++], h.vertex[0][1] = s[e++], h.vertex[1][0] = s[e++], h.vertex[1][1] = s[e++], h.vertex[2][0] = s[e++], h.vertex[2][1] = s[e++], h.vertex[3][0] = s[e++], h.vertex[3][1] = s[e++], h.errorCorrected = s[e++]
									},
									67546: function (A, I, g, B, C, Q) {
										artoolkit.frameMalloc || (artoolkit.frameMalloc = {});
										var E = artoolkit.frameMalloc;
										E.framepointer = I, E.framesize = g, E.camera = B, E.transform = C, E.videoLumaPointer = Q
									}
								};

								function LA(I) {
									for (; I.length > 0;) {
										var g = I.shift();
										if ("function" != typeof g) {
											var B = g.func;
											"number" == typeof B ? void 0 === g.arg ? iA.get(B)() : iA.get(B)(g.arg) : B(void 0 === g.arg ? null : g.arg)
										} else g(A)
									}
								}
								var qA = 0;

								function HA() {
									return l || qA > 0
								}
								var uA = {
									DESTRUCTOR_OFFSET: 0,
									REFCOUNT_OFFSET: 4,
									TYPE_OFFSET: 8,
									CAUGHT_OFFSET: 12,
									RETHROWN_OFFSET: 13,
									SIZE: 16
								};

								function pA(A) {
									return Wg(A + uA.SIZE) + uA.SIZE
								}

								function mA(A) {
									this.excPtr = A, this.ptr = A - uA.SIZE, this.set_type = function (A) {
										v[this.ptr + uA.TYPE_OFFSET >> 2] = A
									}, this.get_type = function () {
										return v[this.ptr + uA.TYPE_OFFSET >> 2]
									}, this.set_destructor = function (A) {
										v[this.ptr + uA.DESTRUCTOR_OFFSET >> 2] = A
									}, this.get_destructor = function () {
										return v[this.ptr + uA.DESTRUCTOR_OFFSET >> 2]
									}, this.set_refcount = function (A) {
										v[this.ptr + uA.REFCOUNT_OFFSET >> 2] = A
									}, this.set_caught = function (A) {
										A = A ? 1 : 0, W[this.ptr + uA.CAUGHT_OFFSET >> 0] = A
									}, this.get_caught = function () {
										return 0 != W[this.ptr + uA.CAUGHT_OFFSET >> 0]
									}, this.set_rethrown = function (A) {
										A = A ? 1 : 0, W[this.ptr + uA.RETHROWN_OFFSET >> 0] = A
									}, this.get_rethrown = function () {
										return 0 != W[this.ptr + uA.RETHROWN_OFFSET >> 0]
									}, this.init = function (A, I) {
										this.set_type(A), this.set_destructor(I), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
									}, this.add_ref = function () {
										var A = v[this.ptr + uA.REFCOUNT_OFFSET >> 2];
										v[this.ptr + uA.REFCOUNT_OFFSET >> 2] = A + 1
									}, this.release_ref = function () {
										var A = v[this.ptr + uA.REFCOUNT_OFFSET >> 2];
										return v[this.ptr + uA.REFCOUNT_OFFSET >> 2] = A - 1, 1 === A
									}
								}

								function fA(A, I, g) {
									throw new mA(A).init(I, g), A
								}

								function bA() {
									if (!bA.called) {
										bA.called = !0;
										var A = (new Date).getFullYear(),
											I = new Date(A, 0, 1),
											g = new Date(A, 6, 1),
											B = I.getTimezoneOffset(),
											C = g.getTimezoneOffset(),
											Q = Math.max(B, C);
										v[Tg() >> 2] = 60 * Q, v[Xg() >> 2] = Number(B != C);
										var E = D(I),
											i = D(g),
											o = gA(E),
											a = gA(i);
										C < B ? (v[vg() >> 2] = o, v[vg() + 4 >> 2] = a) : (v[vg() >> 2] = a, v[vg() + 4 >> 2] = o)
									}

									function D(A) {
										var I = A.toTimeString().match(/\(([A-Za-z ]+)\)$/);
										return I ? I[1] : "GMT"
									}
								}

								function WA(A, I) {
									bA();
									var g = new Date(1e3 * v[A >> 2]);
									v[I >> 2] = g.getSeconds(), v[I + 4 >> 2] = g.getMinutes(), v[I + 8 >> 2] = g.getHours(), v[I + 12 >> 2] = g.getDate(), v[I + 16 >> 2] = g.getMonth(), v[I + 20 >> 2] = g.getFullYear() - 1900, v[I + 24 >> 2] = g.getDay();
									var B = new Date(g.getFullYear(), 0, 1),
										C = (g.getTime() - B.getTime()) / 864e5 | 0;
									v[I + 28 >> 2] = C, v[I + 36 >> 2] = -60 * g.getTimezoneOffset();
									var Q = new Date(g.getFullYear(), 6, 1).getTimezoneOffset(),
										E = B.getTimezoneOffset(),
										i = 0 | (Q != E && g.getTimezoneOffset() == Math.min(E, Q));
									v[I + 32 >> 2] = i;
									var o = v[vg() + (i ? 4 : 0) >> 2];
									return v[I + 40 >> 2] = o, I
								}

								function ZA(A, I) {
									return WA(A, I)
								}

								function xA(A) {
									return v[xg() >> 2] = A, A
								}
								var VA = {
									splitPath: function (A) {
										return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(A).slice(1)
									},
									normalizeArray: function (A, I) {
										for (var g = 0, B = A.length - 1; B >= 0; B--) {
											var C = A[B];
											"." === C ? A.splice(B, 1) : ".." === C ? (A.splice(B, 1), g++) : g && (A.splice(B, 1), g--)
										}
										if (I)
											for (; g; g--) A.unshift("..");
										return A
									},
									normalize: function (A) {
										var I = "/" === A.charAt(0),
											g = "/" === A.substr(-1);
										return (A = VA.normalizeArray(A.split("/").filter((function (A) {
											return !!A
										})), !I).join("/")) || I || (A = "."), A && g && (A += "/"), (I ? "/" : "") + A
									},
									dirname: function (A) {
										var I = VA.splitPath(A),
											g = I[0],
											B = I[1];
										return g || B ? (B && (B = B.substr(0, B.length - 1)), g + B) : "."
									},
									basename: function (A) {
										if ("/" === A) return "/";
										var I = (A = (A = VA.normalize(A)).replace(/\/$/, "")).lastIndexOf("/");
										return -1 === I ? A : A.substr(I + 1)
									},
									extname: function (A) {
										return VA.splitPath(A)[3]
									},
									join: function () {
										var A = Array.prototype.slice.call(arguments, 0);
										return VA.normalize(A.join("/"))
									},
									join2: function (A, I) {
										return VA.normalize(A + "/" + I)
									}
								};

								function vA() {
									if ("object" === ("undefined" == typeof crypto ? "undefined" : a(crypto)) && "function" == typeof crypto.getRandomValues) {
										var A = new Uint8Array(1);
										return function () {
											return crypto.getRandomValues(A), A[0]
										}
									}
									if (e) try {
										var I = g(654);
										return function () {
											return I.randomBytes(1)[0]
										}
									} catch (A) {}
									return function () {
										cA("randomDevice")
									}
								}
								var XA = {
										resolve: function () {
											for (var A = "", I = !1, g = arguments.length - 1; g >= -1 && !I; g--) {
												var B = g >= 0 ? arguments[g] : PA.cwd();
												if ("string" != typeof B) throw new TypeError("Arguments to path.resolve must be strings");
												if (!B) return "";
												A = B + "/" + A, I = "/" === B.charAt(0)
											}
											return (I ? "/" : "") + (A = VA.normalizeArray(A.split("/").filter((function (A) {
												return !!A
											})), !I).join("/")) || "."
										},
										relative: function (A, I) {
											function g(A) {
												for (var I = 0; I < A.length && "" === A[I]; I++);
												for (var g = A.length - 1; g >= 0 && "" === A[g]; g--);
												return I > g ? [] : A.slice(I, g - I + 1)
											}
											A = XA.resolve(A).substr(1), I = XA.resolve(I).substr(1);
											for (var B = g(A.split("/")), C = g(I.split("/")), Q = Math.min(B.length, C.length), E = Q, i = 0; i < Q; i++)
												if (B[i] !== C[i]) {
													E = i;
													break
												}
											var o = [];
											for (i = E; i < B.length; i++) o.push("..");
											return (o = o.concat(C.slice(E))).join("/")
										}
									},
									TA = {
										ttys: [],
										init: function () {},
										shutdown: function () {},
										register: function (A, I) {
											TA.ttys[A] = {
												input: [],
												output: [],
												ops: I
											}, PA.registerDevice(A, TA.stream_ops)
										},
										stream_ops: {
											open: function (A) {
												var I = TA.ttys[A.node.rdev];
												if (!I) throw new PA.ErrnoError(43);
												A.tty = I, A.seekable = !1
											},
											close: function (A) {
												A.tty.ops.flush(A.tty)
											},
											flush: function (A) {
												A.tty.ops.flush(A.tty)
											},
											read: function (A, I, g, B, C) {
												if (!A.tty || !A.tty.ops.get_char) throw new PA.ErrnoError(60);
												for (var Q = 0, E = 0; E < B; E++) {
													var i;
													try {
														i = A.tty.ops.get_char(A.tty)
													} catch (A) {
														throw new PA.ErrnoError(29)
													}
													if (void 0 === i && 0 === Q) throw new PA.ErrnoError(6);
													if (null == i) break;
													Q++, I[g + E] = i
												}
												return Q && (A.node.timestamp = Date.now()), Q
											},
											write: function (A, I, g, B, C) {
												if (!A.tty || !A.tty.ops.put_char) throw new PA.ErrnoError(60);
												try {
													for (var Q = 0; Q < B; Q++) A.tty.ops.put_char(A.tty, I[g + Q])
												} catch (A) {
													throw new PA.ErrnoError(29)
												}
												return B && (A.node.timestamp = Date.now()), Q
											}
										},
										default_tty_ops: {
											get_char: function (A) {
												if (!A.input.length) {
													var I = null;
													if (e) {
														var g = Buffer.alloc ? Buffer.alloc(256) : new Buffer(256),
															B = 0;
														try {
															B = n.readSync(process.stdin.fd, g, 0, 256, null)
														} catch (A) {
															if (!A.toString().includes("EOF")) throw A;
															B = 0
														}
														I = B > 0 ? g.slice(0, B).toString("utf-8") : null
													} else "undefined" != typeof window && "function" == typeof window.prompt ? null !== (I = window.prompt("Input: ")) && (I += "\n") : "function" == typeof readline && null !== (I = readline()) && (I += "\n");
													if (!I) return null;
													A.input = qg(I, !0)
												}
												return A.input.shift()
											},
											put_char: function (A, I) {
												null === I || 10 === I ? (c(H(A.output, 0)), A.output = []) : 0 != I && A.output.push(I)
											},
											flush: function (A) {
												A.output && A.output.length > 0 && (c(H(A.output, 0)), A.output = [])
											}
										},
										default_tty1_ops: {
											put_char: function (A, I) {
												null === I || 10 === I ? (M(H(A.output, 0)), A.output = []) : 0 != I && A.output.push(I)
											},
											flush: function (A) {
												A.output && A.output.length > 0 && (M(H(A.output, 0)), A.output = [])
											}
										}
									};

								function jA(A) {
									for (var I = k(A, 65536), g = Wg(I); A < I;) W[g + A++] = 0;
									return g
								}
								var OA = {
										ops_table: null,
										mount: function (A) {
											return OA.createNode(null, "/", 16895, 0)
										},
										createNode: function (A, I, g, B) {
											if (PA.isBlkdev(g) || PA.isFIFO(g)) throw new PA.ErrnoError(63);
											OA.ops_table || (OA.ops_table = {
												dir: {
													node: {
														getattr: OA.node_ops.getattr,
														setattr: OA.node_ops.setattr,
														lookup: OA.node_ops.lookup,
														mknod: OA.node_ops.mknod,
														rename: OA.node_ops.rename,
														unlink: OA.node_ops.unlink,
														rmdir: OA.node_ops.rmdir,
														readdir: OA.node_ops.readdir,
														symlink: OA.node_ops.symlink
													},
													stream: {
														llseek: OA.stream_ops.llseek
													}
												},
												file: {
													node: {
														getattr: OA.node_ops.getattr,
														setattr: OA.node_ops.setattr
													},
													stream: {
														llseek: OA.stream_ops.llseek,
														read: OA.stream_ops.read,
														write: OA.stream_ops.write,
														allocate: OA.stream_ops.allocate,
														mmap: OA.stream_ops.mmap,
														msync: OA.stream_ops.msync
													}
												},
												link: {
													node: {
														getattr: OA.node_ops.getattr,
														setattr: OA.node_ops.setattr,
														readlink: OA.node_ops.readlink
													},
													stream: {}
												},
												chrdev: {
													node: {
														getattr: OA.node_ops.getattr,
														setattr: OA.node_ops.setattr
													},
													stream: PA.chrdev_stream_ops
												}
											});
											var C = PA.createNode(A, I, g, B);
											return PA.isDir(C.mode) ? (C.node_ops = OA.ops_table.dir.node, C.stream_ops = OA.ops_table.dir.stream, C.contents = {}) : PA.isFile(C.mode) ? (C.node_ops = OA.ops_table.file.node, C.stream_ops = OA.ops_table.file.stream, C.usedBytes = 0, C.contents = null) : PA.isLink(C.mode) ? (C.node_ops = OA.ops_table.link.node, C.stream_ops = OA.ops_table.link.stream) : PA.isChrdev(C.mode) && (C.node_ops = OA.ops_table.chrdev.node, C.stream_ops = OA.ops_table.chrdev.stream), C.timestamp = Date.now(), A && (A.contents[I] = C, A.timestamp = C.timestamp), C
										},
										getFileDataAsTypedArray: function (A) {
											return A.contents ? A.contents.subarray ? A.contents.subarray(0, A.usedBytes) : new Uint8Array(A.contents) : new Uint8Array(0)
										},
										expandFileStorage: function (A, I) {
											var g = A.contents ? A.contents.length : 0;
											if (!(g >= I)) {
												I = Math.max(I, g * (g < 1048576 ? 2 : 1.125) >>> 0), 0 != g && (I = Math.max(I, 256));
												var B = A.contents;
												A.contents = new Uint8Array(I), A.usedBytes > 0 && A.contents.set(B.subarray(0, A.usedBytes), 0)
											}
										},
										resizeFileStorage: function (A, I) {
											if (A.usedBytes != I)
												if (0 == I) A.contents = null, A.usedBytes = 0;
												else {
													var g = A.contents;
													A.contents = new Uint8Array(I), g && A.contents.set(g.subarray(0, Math.min(I, A.usedBytes))), A.usedBytes = I
												}
										},
										node_ops: {
											getattr: function (A) {
												var I = {};
												return I.dev = PA.isChrdev(A.mode) ? A.id : 1, I.ino = A.id, I.mode = A.mode, I.nlink = 1, I.uid = 0, I.gid = 0, I.rdev = A.rdev, PA.isDir(A.mode) ? I.size = 4096 : PA.isFile(A.mode) ? I.size = A.usedBytes : PA.isLink(A.mode) ? I.size = A.link.length : I.size = 0, I.atime = new Date(A.timestamp), I.mtime = new Date(A.timestamp), I.ctime = new Date(A.timestamp), I.blksize = 4096, I.blocks = Math.ceil(I.size / I.blksize), I
											},
											setattr: function (A, I) {
												void 0 !== I.mode && (A.mode = I.mode), void 0 !== I.timestamp && (A.timestamp = I.timestamp), void 0 !== I.size && OA.resizeFileStorage(A, I.size)
											},
											lookup: function (A, I) {
												throw PA.genericErrors[44]
											},
											mknod: function (A, I, g, B) {
												return OA.createNode(A, I, g, B)
											},
											rename: function (A, I, g) {
												if (PA.isDir(A.mode)) {
													var B;
													try {
														B = PA.lookupNode(I, g)
													} catch (A) {}
													if (B)
														for (var C in B.contents) throw new PA.ErrnoError(55)
												}
												delete A.parent.contents[A.name], A.parent.timestamp = Date.now(), A.name = g, I.contents[g] = A, I.timestamp = A.parent.timestamp, A.parent = I
											},
											unlink: function (A, I) {
												delete A.contents[I], A.timestamp = Date.now()
											},
											rmdir: function (A, I) {
												var g = PA.lookupNode(A, I);
												for (var B in g.contents) throw new PA.ErrnoError(55);
												delete A.contents[I], A.timestamp = Date.now()
											},
											readdir: function (A) {
												var I = [".", ".."];
												for (var g in A.contents) A.contents.hasOwnProperty(g) && I.push(g);
												return I
											},
											symlink: function (A, I, g) {
												var B = OA.createNode(A, I, 41471, 0);
												return B.link = g, B
											},
											readlink: function (A) {
												if (!PA.isLink(A.mode)) throw new PA.ErrnoError(28);
												return A.link
											}
										},
										stream_ops: {
											read: function (A, I, g, B, C) {
												var Q = A.node.contents;
												if (C >= A.node.usedBytes) return 0;
												var E = Math.min(A.node.usedBytes - C, B);
												if (E > 8 && Q.subarray) I.set(Q.subarray(C, C + E), g);
												else
													for (var i = 0; i < E; i++) I[g + i] = Q[C + i];
												return E
											},
											write: function (A, I, g, B, C, Q) {
												if (I.buffer === W.buffer && (Q = !1), !B) return 0;
												var E = A.node;
												if (E.timestamp = Date.now(), I.subarray && (!E.contents || E.contents.subarray)) {
													if (Q) return E.contents = I.subarray(g, g + B), E.usedBytes = B, B;
													if (0 === E.usedBytes && 0 === C) return E.contents = I.slice(g, g + B), E.usedBytes = B, B;
													if (C + B <= E.usedBytes) return E.contents.set(I.subarray(g, g + B), C), B
												}
												if (OA.expandFileStorage(E, C + B), E.contents.subarray && I.subarray) E.contents.set(I.subarray(g, g + B), C);
												else
													for (var i = 0; i < B; i++) E.contents[C + i] = I[g + i];
												return E.usedBytes = Math.max(E.usedBytes, C + B), B
											},
											llseek: function (A, I, g) {
												var B = I;
												if (1 === g ? B += A.position : 2 === g && PA.isFile(A.node.mode) && (B += A.node.usedBytes), B < 0) throw new PA.ErrnoError(28);
												return B
											},
											allocate: function (A, I, g) {
												OA.expandFileStorage(A.node, I + g), A.node.usedBytes = Math.max(A.node.usedBytes, I + g)
											},
											mmap: function (A, I, g, B, C, Q) {
												if (0 !== I) throw new PA.ErrnoError(28);
												if (!PA.isFile(A.node.mode)) throw new PA.ErrnoError(43);
												var E, i, o = A.node.contents;
												if (2 & Q || o.buffer !== b) {
													if ((B > 0 || B + g < o.length) && (o = o.subarray ? o.subarray(B, B + g) : Array.prototype.slice.call(o, B, B + g)), i = !0, !(E = jA(g))) throw new PA.ErrnoError(48);
													W.set(o, E)
												} else i = !1, E = o.byteOffset;
												return {
													ptr: E,
													allocated: i
												}
											},
											msync: function (A, I, g, B, C) {
												if (!PA.isFile(A.node.mode)) throw new PA.ErrnoError(43);
												return 2 & C || OA.stream_ops.write(A, I, 0, B, g, !1), 0
											}
										}
									},
									PA = {
										root: null,
										mounts: [],
										devices: {},
										streams: [],
										nextInode: 1,
										nameTable: null,
										currentPath: "/",
										initialized: !1,
										ignorePermissions: !0,
										trackingDelegate: {},
										tracking: {
											openFlags: {
												READ: 1,
												WRITE: 2
											}
										},
										ErrnoError: null,
										genericErrors: {},
										filesystems: null,
										syncFSRequests: 0,
										lookupPath: function (A, I) {
											if (I = I || {}, !(A = XA.resolve(PA.cwd(), A))) return {
												path: "",
												node: null
											};
											var g = {
												follow_mount: !0,
												recurse_count: 0
											};
											for (var B in g) void 0 === I[B] && (I[B] = g[B]);
											if (I.recurse_count > 8) throw new PA.ErrnoError(32);
											for (var C = VA.normalizeArray(A.split("/").filter((function (A) {
													return !!A
												})), !1), Q = PA.root, E = "/", i = 0; i < C.length; i++) {
												var o = i === C.length - 1;
												if (o && I.parent) break;
												if (Q = PA.lookupNode(Q, C[i]), E = VA.join2(E, C[i]), PA.isMountpoint(Q) && (!o || o && I.follow_mount) && (Q = Q.mounted.root), !o || I.follow)
													for (var a = 0; PA.isLink(Q.mode);) {
														var D = PA.readlink(E);
														if (E = XA.resolve(VA.dirname(E), D), Q = PA.lookupPath(E, {
																recurse_count: I.recurse_count
															}).node, a++ > 40) throw new PA.ErrnoError(32)
													}
											}
											return {
												path: E,
												node: Q
											}
										},
										getPath: function (A) {
											for (var I;;) {
												if (PA.isRoot(A)) {
													var g = A.mount.mountpoint;
													return I ? "/" !== g[g.length - 1] ? g + "/" + I : g + I : g
												}
												I = I ? A.name + "/" + I : A.name, A = A.parent
											}
										},
										hashName: function (A, I) {
											for (var g = 0, B = 0; B < I.length; B++) g = (g << 5) - g + I.charCodeAt(B) | 0;
											return (A + g >>> 0) % PA.nameTable.length
										},
										hashAddNode: function (A) {
											var I = PA.hashName(A.parent.id, A.name);
											A.name_next = PA.nameTable[I], PA.nameTable[I] = A
										},
										hashRemoveNode: function (A) {
											var I = PA.hashName(A.parent.id, A.name);
											if (PA.nameTable[I] === A) PA.nameTable[I] = A.name_next;
											else
												for (var g = PA.nameTable[I]; g;) {
													if (g.name_next === A) {
														g.name_next = A.name_next;
														break
													}
													g = g.name_next
												}
										},
										lookupNode: function (A, I) {
											var g = PA.mayLookup(A);
											if (g) throw new PA.ErrnoError(g, A);
											for (var B = PA.hashName(A.id, I), C = PA.nameTable[B]; C; C = C.name_next) {
												var Q = C.name;
												if (C.parent.id === A.id && Q === I) return C
											}
											return PA.lookup(A, I)
										},
										createNode: function (A, I, g, B) {
											var C = new PA.FSNode(A, I, g, B);
											return PA.hashAddNode(C), C
										},
										destroyNode: function (A) {
											PA.hashRemoveNode(A)
										},
										isRoot: function (A) {
											return A === A.parent
										},
										isMountpoint: function (A) {
											return !!A.mounted
										},
										isFile: function (A) {
											return 32768 == (61440 & A)
										},
										isDir: function (A) {
											return 16384 == (61440 & A)
										},
										isLink: function (A) {
											return 40960 == (61440 & A)
										},
										isChrdev: function (A) {
											return 8192 == (61440 & A)
										},
										isBlkdev: function (A) {
											return 24576 == (61440 & A)
										},
										isFIFO: function (A) {
											return 4096 == (61440 & A)
										},
										isSocket: function (A) {
											return 49152 == (49152 & A)
										},
										flagModes: {
											r: 0,
											"r+": 2,
											w: 577,
											"w+": 578,
											a: 1089,
											"a+": 1090
										},
										modeStringToFlags: function (A) {
											var I = PA.flagModes[A];
											if (void 0 === I) throw new Error("Unknown file open mode: " + A);
											return I
										},
										flagsToPermissionString: function (A) {
											var I = ["r", "w", "rw"][3 & A];
											return 512 & A && (I += "w"), I
										},
										nodePermissions: function (A, I) {
											return PA.ignorePermissions || (!I.includes("r") || 292 & A.mode) && (!I.includes("w") || 146 & A.mode) && (!I.includes("x") || 73 & A.mode) ? 0 : 2
										},
										mayLookup: function (A) {
											return PA.nodePermissions(A, "x") || (A.node_ops.lookup ? 0 : 2)
										},
										mayCreate: function (A, I) {
											try {
												return PA.lookupNode(A, I), 20
											} catch (A) {}
											return PA.nodePermissions(A, "wx")
										},
										mayDelete: function (A, I, g) {
											var B;
											try {
												B = PA.lookupNode(A, I)
											} catch (A) {
												return A.errno
											}
											var C = PA.nodePermissions(A, "wx");
											if (C) return C;
											if (g) {
												if (!PA.isDir(B.mode)) return 54;
												if (PA.isRoot(B) || PA.getPath(B) === PA.cwd()) return 10
											} else if (PA.isDir(B.mode)) return 31;
											return 0
										},
										mayOpen: function (A, I) {
											return A ? PA.isLink(A.mode) ? 32 : PA.isDir(A.mode) && ("r" !== PA.flagsToPermissionString(I) || 512 & I) ? 31 : PA.nodePermissions(A, PA.flagsToPermissionString(I)) : 44
										},
										MAX_OPEN_FDS: 4096,
										nextfd: function (A, I) {
											A = A || 0, I = I || PA.MAX_OPEN_FDS;
											for (var g = A; g <= I; g++)
												if (!PA.streams[g]) return g;
											throw new PA.ErrnoError(33)
										},
										getStream: function (A) {
											return PA.streams[A]
										},
										createStream: function (A, I, g) {
											PA.FSStream || (PA.FSStream = function () {}, PA.FSStream.prototype = {
												object: {
													get: function () {
														return this.node
													},
													set: function (A) {
														this.node = A
													}
												},
												isRead: {
													get: function () {
														return 1 != (2097155 & this.flags)
													}
												},
												isWrite: {
													get: function () {
														return 0 != (2097155 & this.flags)
													}
												},
												isAppend: {
													get: function () {
														return 1024 & this.flags
													}
												}
											});
											var B = new PA.FSStream;
											for (var C in A) B[C] = A[C];
											A = B;
											var Q = PA.nextfd(I, g);
											return A.fd = Q, PA.streams[Q] = A, A
										},
										closeStream: function (A) {
											PA.streams[A] = null
										},
										chrdev_stream_ops: {
											open: function (A) {
												var I = PA.getDevice(A.node.rdev);
												A.stream_ops = I.stream_ops, A.stream_ops.open && A.stream_ops.open(A)
											},
											llseek: function () {
												throw new PA.ErrnoError(70)
											}
										},
										major: function (A) {
											return A >> 8
										},
										minor: function (A) {
											return 255 & A
										},
										makedev: function (A, I) {
											return A << 8 | I
										},
										registerDevice: function (A, I) {
											PA.devices[A] = {
												stream_ops: I
											}
										},
										getDevice: function (A) {
											return PA.devices[A]
										},
										getMounts: function (A) {
											for (var I = [], g = [A]; g.length;) {
												var B = g.pop();
												I.push(B), g.push.apply(g, B.mounts)
											}
											return I
										},
										syncfs: function (A, I) {
											"function" == typeof A && (I = A, A = !1), PA.syncFSRequests++, PA.syncFSRequests > 1 && M("warning: " + PA.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
											var g = PA.getMounts(PA.root.mount),
												B = 0;

											function C(A) {
												return PA.syncFSRequests--, I(A)
											}

											function Q(A) {
												if (A) return Q.errored ? void 0 : (Q.errored = !0, C(A));
												++B >= g.length && C(null)
											}
											g.forEach((function (I) {
												if (!I.type.syncfs) return Q(null);
												I.type.syncfs(I, A, Q)
											}))
										},
										mount: function (A, I, g) {
											var B, C = "/" === g,
												Q = !g;
											if (C && PA.root) throw new PA.ErrnoError(10);
											if (!C && !Q) {
												var E = PA.lookupPath(g, {
													follow_mount: !1
												});
												if (g = E.path, B = E.node, PA.isMountpoint(B)) throw new PA.ErrnoError(10);
												if (!PA.isDir(B.mode)) throw new PA.ErrnoError(54)
											}
											var i = {
													type: A,
													opts: I,
													mountpoint: g,
													mounts: []
												},
												o = A.mount(i);
											return o.mount = i, i.root = o, C ? PA.root = o : B && (B.mounted = i, B.mount && B.mount.mounts.push(i)), o
										},
										unmount: function (A) {
											var I = PA.lookupPath(A, {
												follow_mount: !1
											});
											if (!PA.isMountpoint(I.node)) throw new PA.ErrnoError(28);
											var g = I.node,
												B = g.mounted,
												C = PA.getMounts(B);
											Object.keys(PA.nameTable).forEach((function (A) {
												for (var I = PA.nameTable[A]; I;) {
													var g = I.name_next;
													C.includes(I.mount) && PA.destroyNode(I), I = g
												}
											})), g.mounted = null;
											var Q = g.mount.mounts.indexOf(B);
											g.mount.mounts.splice(Q, 1)
										},
										lookup: function (A, I) {
											return A.node_ops.lookup(A, I)
										},
										mknod: function (A, I, g) {
											var B = PA.lookupPath(A, {
													parent: !0
												}).node,
												C = VA.basename(A);
											if (!C || "." === C || ".." === C) throw new PA.ErrnoError(28);
											var Q = PA.mayCreate(B, C);
											if (Q) throw new PA.ErrnoError(Q);
											if (!B.node_ops.mknod) throw new PA.ErrnoError(63);
											return B.node_ops.mknod(B, C, I, g)
										},
										create: function (A, I) {
											return I = void 0 !== I ? I : 438, I &= 4095, I |= 32768, PA.mknod(A, I, 0)
										},
										mkdir: function (A, I) {
											return I = void 0 !== I ? I : 511, I &= 1023, I |= 16384, PA.mknod(A, I, 0)
										},
										mkdirTree: function (A, I) {
											for (var g = A.split("/"), B = "", C = 0; C < g.length; ++C)
												if (g[C]) {
													B += "/" + g[C];
													try {
														PA.mkdir(B, I)
													} catch (A) {
														if (20 != A.errno) throw A
													}
												}
										},
										mkdev: function (A, I, g) {
											return void 0 === g && (g = I, I = 438), I |= 8192, PA.mknod(A, I, g)
										},
										symlink: function (A, I) {
											if (!XA.resolve(A)) throw new PA.ErrnoError(44);
											var g = PA.lookupPath(I, {
												parent: !0
											}).node;
											if (!g) throw new PA.ErrnoError(44);
											var B = VA.basename(I),
												C = PA.mayCreate(g, B);
											if (C) throw new PA.ErrnoError(C);
											if (!g.node_ops.symlink) throw new PA.ErrnoError(63);
											return g.node_ops.symlink(g, B, A)
										},
										rename: function (A, I) {
											var g, B, C = VA.dirname(A),
												Q = VA.dirname(I),
												E = VA.basename(A),
												i = VA.basename(I);
											if (g = PA.lookupPath(A, {
													parent: !0
												}).node, B = PA.lookupPath(I, {
													parent: !0
												}).node, !g || !B) throw new PA.ErrnoError(44);
											if (g.mount !== B.mount) throw new PA.ErrnoError(75);
											var o, a = PA.lookupNode(g, E),
												D = XA.relative(A, Q);
											if ("." !== D.charAt(0)) throw new PA.ErrnoError(28);
											if ("." !== (D = XA.relative(I, C)).charAt(0)) throw new PA.ErrnoError(55);
											try {
												o = PA.lookupNode(B, i)
											} catch (A) {}
											if (a !== o) {
												var t = PA.isDir(a.mode),
													s = PA.mayDelete(g, E, t);
												if (s) throw new PA.ErrnoError(s);
												if (s = o ? PA.mayDelete(B, i, t) : PA.mayCreate(B, i)) throw new PA.ErrnoError(s);
												if (!g.node_ops.rename) throw new PA.ErrnoError(63);
												if (PA.isMountpoint(a) || o && PA.isMountpoint(o)) throw new PA.ErrnoError(10);
												if (B !== g && (s = PA.nodePermissions(g, "w"))) throw new PA.ErrnoError(s);
												try {
													PA.trackingDelegate.willMovePath && PA.trackingDelegate.willMovePath(A, I)
												} catch (g) {
													M("FS.trackingDelegate['willMovePath']('" + A + "', '" + I + "') threw an exception: " + g.message)
												}
												PA.hashRemoveNode(a);
												try {
													g.node_ops.rename(a, B, i)
												} catch (A) {
													throw A
												} finally {
													PA.hashAddNode(a)
												}
												try {
													PA.trackingDelegate.onMovePath && PA.trackingDelegate.onMovePath(A, I)
												} catch (g) {
													M("FS.trackingDelegate['onMovePath']('" + A + "', '" + I + "') threw an exception: " + g.message)
												}
											}
										},
										rmdir: function (A) {
											var I = PA.lookupPath(A, {
													parent: !0
												}).node,
												g = VA.basename(A),
												B = PA.lookupNode(I, g),
												C = PA.mayDelete(I, g, !0);
											if (C) throw new PA.ErrnoError(C);
											if (!I.node_ops.rmdir) throw new PA.ErrnoError(63);
											if (PA.isMountpoint(B)) throw new PA.ErrnoError(10);
											try {
												PA.trackingDelegate.willDeletePath && PA.trackingDelegate.willDeletePath(A)
											} catch (I) {
												M("FS.trackingDelegate['willDeletePath']('" + A + "') threw an exception: " + I.message)
											}
											I.node_ops.rmdir(I, g), PA.destroyNode(B);
											try {
												PA.trackingDelegate.onDeletePath && PA.trackingDelegate.onDeletePath(A)
											} catch (I) {
												M("FS.trackingDelegate['onDeletePath']('" + A + "') threw an exception: " + I.message)
											}
										},
										readdir: function (A) {
											var I = PA.lookupPath(A, {
												follow: !0
											}).node;
											if (!I.node_ops.readdir) throw new PA.ErrnoError(54);
											return I.node_ops.readdir(I)
										},
										unlink: function (A) {
											var I = PA.lookupPath(A, {
													parent: !0
												}).node,
												g = VA.basename(A),
												B = PA.lookupNode(I, g),
												C = PA.mayDelete(I, g, !1);
											if (C) throw new PA.ErrnoError(C);
											if (!I.node_ops.unlink) throw new PA.ErrnoError(63);
											if (PA.isMountpoint(B)) throw new PA.ErrnoError(10);
											try {
												PA.trackingDelegate.willDeletePath && PA.trackingDelegate.willDeletePath(A)
											} catch (I) {
												M("FS.trackingDelegate['willDeletePath']('" + A + "') threw an exception: " + I.message)
											}
											I.node_ops.unlink(I, g), PA.destroyNode(B);
											try {
												PA.trackingDelegate.onDeletePath && PA.trackingDelegate.onDeletePath(A)
											} catch (I) {
												M("FS.trackingDelegate['onDeletePath']('" + A + "') threw an exception: " + I.message)
											}
										},
										readlink: function (A) {
											var I = PA.lookupPath(A).node;
											if (!I) throw new PA.ErrnoError(44);
											if (!I.node_ops.readlink) throw new PA.ErrnoError(28);
											return XA.resolve(PA.getPath(I.parent), I.node_ops.readlink(I))
										},
										stat: function (A, I) {
											var g = PA.lookupPath(A, {
												follow: !I
											}).node;
											if (!g) throw new PA.ErrnoError(44);
											if (!g.node_ops.getattr) throw new PA.ErrnoError(63);
											return g.node_ops.getattr(g)
										},
										lstat: function (A) {
											return PA.stat(A, !0)
										},
										chmod: function (A, I, g) {
											var B;
											if (!(B = "string" == typeof A ? PA.lookupPath(A, {
													follow: !g
												}).node : A).node_ops.setattr) throw new PA.ErrnoError(63);
											B.node_ops.setattr(B, {
												mode: 4095 & I | -4096 & B.mode,
												timestamp: Date.now()
											})
										},
										lchmod: function (A, I) {
											PA.chmod(A, I, !0)
										},
										fchmod: function (A, I) {
											var g = PA.getStream(A);
											if (!g) throw new PA.ErrnoError(8);
											PA.chmod(g.node, I)
										},
										chown: function (A, I, g, B) {
											var C;
											if (!(C = "string" == typeof A ? PA.lookupPath(A, {
													follow: !B
												}).node : A).node_ops.setattr) throw new PA.ErrnoError(63);
											C.node_ops.setattr(C, {
												timestamp: Date.now()
											})
										},
										lchown: function (A, I, g) {
											PA.chown(A, I, g, !0)
										},
										fchown: function (A, I, g) {
											var B = PA.getStream(A);
											if (!B) throw new PA.ErrnoError(8);
											PA.chown(B.node, I, g)
										},
										truncate: function (A, I) {
											if (I < 0) throw new PA.ErrnoError(28);
											var g;
											if (!(g = "string" == typeof A ? PA.lookupPath(A, {
													follow: !0
												}).node : A).node_ops.setattr) throw new PA.ErrnoError(63);
											if (PA.isDir(g.mode)) throw new PA.ErrnoError(31);
											if (!PA.isFile(g.mode)) throw new PA.ErrnoError(28);
											var B = PA.nodePermissions(g, "w");
											if (B) throw new PA.ErrnoError(B);
											g.node_ops.setattr(g, {
												size: I,
												timestamp: Date.now()
											})
										},
										ftruncate: function (A, I) {
											var g = PA.getStream(A);
											if (!g) throw new PA.ErrnoError(8);
											if (0 == (2097155 & g.flags)) throw new PA.ErrnoError(28);
											PA.truncate(g.node, I)
										},
										utime: function (A, I, g) {
											var B = PA.lookupPath(A, {
												follow: !0
											}).node;
											B.node_ops.setattr(B, {
												timestamp: Math.max(I, g)
											})
										},
										open: function (I, g, B, C, Q) {
											if ("" === I) throw new PA.ErrnoError(44);
											var E;
											if (B = void 0 === B ? 438 : B, B = 64 & (g = "string" == typeof g ? PA.modeStringToFlags(g) : g) ? 4095 & B | 32768 : 0, "object" === a(I)) E = I;
											else {
												I = VA.normalize(I);
												try {
													E = PA.lookupPath(I, {
														follow: !(131072 & g)
													}).node
												} catch (A) {}
											}
											var i = !1;
											if (64 & g)
												if (E) {
													if (128 & g) throw new PA.ErrnoError(20)
												} else E = PA.mknod(I, B, 0), i = !0;
											if (!E) throw new PA.ErrnoError(44);
											if (PA.isChrdev(E.mode) && (g &= -513), 65536 & g && !PA.isDir(E.mode)) throw new PA.ErrnoError(54);
											if (!i) {
												var o = PA.mayOpen(E, g);
												if (o) throw new PA.ErrnoError(o)
											}
											512 & g && PA.truncate(E, 0), g &= -131713;
											var D = PA.createStream({
												node: E,
												path: PA.getPath(E),
												flags: g,
												seekable: !0,
												position: 0,
												stream_ops: E.stream_ops,
												ungotten: [],
												error: !1
											}, C, Q);
											D.stream_ops.open && D.stream_ops.open(D), !A.logReadFiles || 1 & g || (PA.readFiles || (PA.readFiles = {}), I in PA.readFiles || (PA.readFiles[I] = 1, M("FS.trackingDelegate error on read file: " + I)));
											try {
												if (PA.trackingDelegate.onOpenFile) {
													var t = 0;
													1 != (2097155 & g) && (t |= PA.tracking.openFlags.READ), 0 != (2097155 & g) && (t |= PA.tracking.openFlags.WRITE), PA.trackingDelegate.onOpenFile(I, t)
												}
											} catch (A) {
												M("FS.trackingDelegate['onOpenFile']('" + I + "', flags) threw an exception: " + A.message)
											}
											return D
										},
										close: function (A) {
											if (PA.isClosed(A)) throw new PA.ErrnoError(8);
											A.getdents && (A.getdents = null);
											try {
												A.stream_ops.close && A.stream_ops.close(A)
											} catch (A) {
												throw A
											} finally {
												PA.closeStream(A.fd)
											}
											A.fd = null
										},
										isClosed: function (A) {
											return null === A.fd
										},
										llseek: function (A, I, g) {
											if (PA.isClosed(A)) throw new PA.ErrnoError(8);
											if (!A.seekable || !A.stream_ops.llseek) throw new PA.ErrnoError(70);
											if (0 != g && 1 != g && 2 != g) throw new PA.ErrnoError(28);
											return A.position = A.stream_ops.llseek(A, I, g), A.ungotten = [], A.position
										},
										read: function (A, I, g, B, C) {
											if (B < 0 || C < 0) throw new PA.ErrnoError(28);
											if (PA.isClosed(A)) throw new PA.ErrnoError(8);
											if (1 == (2097155 & A.flags)) throw new PA.ErrnoError(8);
											if (PA.isDir(A.node.mode)) throw new PA.ErrnoError(31);
											if (!A.stream_ops.read) throw new PA.ErrnoError(28);
											var Q = void 0 !== C;
											if (Q) {
												if (!A.seekable) throw new PA.ErrnoError(70)
											} else C = A.position;
											var E = A.stream_ops.read(A, I, g, B, C);
											return Q || (A.position += E), E
										},
										write: function (A, I, g, B, C, Q) {
											if (B < 0 || C < 0) throw new PA.ErrnoError(28);
											if (PA.isClosed(A)) throw new PA.ErrnoError(8);
											if (0 == (2097155 & A.flags)) throw new PA.ErrnoError(8);
											if (PA.isDir(A.node.mode)) throw new PA.ErrnoError(31);
											if (!A.stream_ops.write) throw new PA.ErrnoError(28);
											A.seekable && 1024 & A.flags && PA.llseek(A, 0, 2);
											var E = void 0 !== C;
											if (E) {
												if (!A.seekable) throw new PA.ErrnoError(70)
											} else C = A.position;
											var i = A.stream_ops.write(A, I, g, B, C, Q);
											E || (A.position += i);
											try {
												A.path && PA.trackingDelegate.onWriteToFile && PA.trackingDelegate.onWriteToFile(A.path)
											} catch (I) {
												M("FS.trackingDelegate['onWriteToFile']('" + A.path + "') threw an exception: " + I.message)
											}
											return i
										},
										allocate: function (A, I, g) {
											if (PA.isClosed(A)) throw new PA.ErrnoError(8);
											if (I < 0 || g <= 0) throw new PA.ErrnoError(28);
											if (0 == (2097155 & A.flags)) throw new PA.ErrnoError(8);
											if (!PA.isFile(A.node.mode) && !PA.isDir(A.node.mode)) throw new PA.ErrnoError(43);
											if (!A.stream_ops.allocate) throw new PA.ErrnoError(138);
											A.stream_ops.allocate(A, I, g)
										},
										mmap: function (A, I, g, B, C, Q) {
											if (0 != (2 & C) && 0 == (2 & Q) && 2 != (2097155 & A.flags)) throw new PA.ErrnoError(2);
											if (1 == (2097155 & A.flags)) throw new PA.ErrnoError(2);
											if (!A.stream_ops.mmap) throw new PA.ErrnoError(43);
											return A.stream_ops.mmap(A, I, g, B, C, Q)
										},
										msync: function (A, I, g, B, C) {
											return A && A.stream_ops.msync ? A.stream_ops.msync(A, I, g, B, C) : 0
										},
										munmap: function (A) {
											return 0
										},
										ioctl: function (A, I, g) {
											if (!A.stream_ops.ioctl) throw new PA.ErrnoError(59);
											return A.stream_ops.ioctl(A, I, g)
										},
										readFile: function (A, I) {
											if ((I = I || {}).flags = I.flags || 0, I.encoding = I.encoding || "binary", "utf8" !== I.encoding && "binary" !== I.encoding) throw new Error('Invalid encoding type "' + I.encoding + '"');
											var g, B = PA.open(A, I.flags),
												C = PA.stat(A).size,
												Q = new Uint8Array(C);
											return PA.read(B, Q, 0, C, 0), "utf8" === I.encoding ? g = H(Q, 0) : "binary" === I.encoding && (g = Q), PA.close(B), g
										},
										writeFile: function (A, I, g) {
											(g = g || {}).flags = g.flags || 577;
											var B = PA.open(A, g.flags, g.mode);
											if ("string" == typeof I) {
												var C = new Uint8Array(f(I) + 1),
													Q = p(I, C, 0, C.length);
												PA.write(B, C, 0, Q, void 0, g.canOwn)
											} else {
												if (!ArrayBuffer.isView(I)) throw new Error("Unsupported data type");
												PA.write(B, I, 0, I.byteLength, void 0, g.canOwn)
											}
											PA.close(B)
										},
										cwd: function () {
											return PA.currentPath
										},
										chdir: function (A) {
											var I = PA.lookupPath(A, {
												follow: !0
											});
											if (null === I.node) throw new PA.ErrnoError(44);
											if (!PA.isDir(I.node.mode)) throw new PA.ErrnoError(54);
											var g = PA.nodePermissions(I.node, "x");
											if (g) throw new PA.ErrnoError(g);
											PA.currentPath = I.path
										},
										createDefaultDirectories: function () {
											PA.mkdir("/tmp"), PA.mkdir("/home"), PA.mkdir("/home/web_user")
										},
										createDefaultDevices: function () {
											PA.mkdir("/dev"), PA.registerDevice(PA.makedev(1, 3), {
												read: function () {
													return 0
												},
												write: function (A, I, g, B, C) {
													return B
												}
											}), PA.mkdev("/dev/null", PA.makedev(1, 3)), TA.register(PA.makedev(5, 0), TA.default_tty_ops), TA.register(PA.makedev(6, 0), TA.default_tty1_ops), PA.mkdev("/dev/tty", PA.makedev(5, 0)), PA.mkdev("/dev/tty1", PA.makedev(6, 0));
											var A = vA();
											PA.createDevice("/dev", "random", A), PA.createDevice("/dev", "urandom", A), PA.mkdir("/dev/shm"), PA.mkdir("/dev/shm/tmp")
										},
										createSpecialDirectories: function () {
											PA.mkdir("/proc");
											var A = PA.mkdir("/proc/self");
											PA.mkdir("/proc/self/fd"), PA.mount({
												mount: function () {
													var I = PA.createNode(A, "fd", 16895, 73);
													return I.node_ops = {
														lookup: function (A, I) {
															var g = +I,
																B = PA.getStream(g);
															if (!B) throw new PA.ErrnoError(8);
															var C = {
																parent: null,
																mount: {
																	mountpoint: "fake"
																},
																node_ops: {
																	readlink: function () {
																		return B.path
																	}
																}
															};
															return C.parent = C, C
														}
													}, I
												}
											}, {}, "/proc/self/fd")
										},
										createStandardStreams: function () {
											A.stdin ? PA.createDevice("/dev", "stdin", A.stdin) : PA.symlink("/dev/tty", "/dev/stdin"), A.stdout ? PA.createDevice("/dev", "stdout", null, A.stdout) : PA.symlink("/dev/tty", "/dev/stdout"), A.stderr ? PA.createDevice("/dev", "stderr", null, A.stderr) : PA.symlink("/dev/tty1", "/dev/stderr"), PA.open("/dev/stdin", 0), PA.open("/dev/stdout", 1), PA.open("/dev/stderr", 1)
										},
										ensureErrnoError: function () {
											PA.ErrnoError || (PA.ErrnoError = function (A, I) {
												this.node = I, this.setErrno = function (A) {
													this.errno = A
												}, this.setErrno(A), this.message = "FS error"
											}, PA.ErrnoError.prototype = new Error, PA.ErrnoError.prototype.constructor = PA.ErrnoError, [44].forEach((function (A) {
												PA.genericErrors[A] = new PA.ErrnoError(A), PA.genericErrors[A].stack = "<generic error, no stack>"
											})))
										},
										staticInit: function () {
											PA.ensureErrnoError(), PA.nameTable = new Array(4096), PA.mount(OA, {}, "/"), PA.createDefaultDirectories(), PA.createDefaultDevices(), PA.createSpecialDirectories(), PA.filesystems = {
												MEMFS: OA
											}
										},
										init: function (I, g, B) {
											PA.init.initialized = !0, PA.ensureErrnoError(), A.stdin = I || A.stdin, A.stdout = g || A.stdout, A.stderr = B || A.stderr, PA.createStandardStreams()
										},
										quit: function () {
											PA.init.initialized = !1;
											var I = A._fflush;
											I && I(0);
											for (var g = 0; g < PA.streams.length; g++) {
												var B = PA.streams[g];
												B && PA.close(B)
											}
										},
										getMode: function (A, I) {
											var g = 0;
											return A && (g |= 365), I && (g |= 146), g
										},
										findObject: function (A, I) {
											var g = PA.analyzePath(A, I);
											return g.exists ? g.object : null
										},
										analyzePath: function (A, I) {
											try {
												A = (B = PA.lookupPath(A, {
													follow: !I
												})).path
											} catch (A) {}
											var g = {
												isRoot: !1,
												exists: !1,
												error: 0,
												name: null,
												path: null,
												object: null,
												parentExists: !1,
												parentPath: null,
												parentObject: null
											};
											try {
												var B = PA.lookupPath(A, {
													parent: !0
												});
												g.parentExists = !0, g.parentPath = B.path, g.parentObject = B.node, g.name = VA.basename(A), B = PA.lookupPath(A, {
													follow: !I
												}), g.exists = !0, g.path = B.path, g.object = B.node, g.name = B.node.name, g.isRoot = "/" === B.path
											} catch (A) {
												g.error = A.errno
											}
											return g
										},
										createPath: function (A, I, g, B) {
											A = "string" == typeof A ? A : PA.getPath(A);
											for (var C = I.split("/").reverse(); C.length;) {
												var Q = C.pop();
												if (Q) {
													var E = VA.join2(A, Q);
													try {
														PA.mkdir(E)
													} catch (A) {}
													A = E
												}
											}
											return E
										},
										createFile: function (A, I, g, B, C) {
											var Q = VA.join2("string" == typeof A ? A : PA.getPath(A), I),
												E = PA.getMode(B, C);
											return PA.create(Q, E)
										},
										createDataFile: function (A, I, g, B, C, Q) {
											var E = I ? VA.join2("string" == typeof A ? A : PA.getPath(A), I) : A,
												i = PA.getMode(B, C),
												o = PA.create(E, i);
											if (g) {
												if ("string" == typeof g) {
													for (var a = new Array(g.length), D = 0, t = g.length; D < t; ++D) a[D] = g.charCodeAt(D);
													g = a
												}
												PA.chmod(o, 146 | i);
												var s = PA.open(o, 577);
												PA.write(s, g, 0, g.length, 0, Q), PA.close(s), PA.chmod(o, i)
											}
											return o
										},
										createDevice: function (A, I, g, B) {
											var C = VA.join2("string" == typeof A ? A : PA.getPath(A), I),
												Q = PA.getMode(!!g, !!B);
											PA.createDevice.major || (PA.createDevice.major = 64);
											var E = PA.makedev(PA.createDevice.major++, 0);
											return PA.registerDevice(E, {
												open: function (A) {
													A.seekable = !1
												},
												close: function (A) {
													B && B.buffer && B.buffer.length && B(10)
												},
												read: function (A, I, B, C, Q) {
													for (var E = 0, i = 0; i < C; i++) {
														var o;
														try {
															o = g()
														} catch (A) {
															throw new PA.ErrnoError(29)
														}
														if (void 0 === o && 0 === E) throw new PA.ErrnoError(6);
														if (null == o) break;
														E++, I[B + i] = o
													}
													return E && (A.node.timestamp = Date.now()), E
												},
												write: function (A, I, g, C, Q) {
													for (var E = 0; E < C; E++) try {
														B(I[g + E])
													} catch (A) {
														throw new PA.ErrnoError(29)
													}
													return C && (A.node.timestamp = Date.now()), E
												}
											}), PA.mkdev(C, Q, E)
										},
										forceLoadFile: function (A) {
											if (A.isDevice || A.isFolder || A.link || A.contents) return !0;
											if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
											if (!r) throw new Error("Cannot load without read() or XMLHttpRequest.");
											try {
												A.contents = qg(r(A.url), !0), A.usedBytes = A.contents.length
											} catch (A) {
												throw new PA.ErrnoError(29)
											}
										},
										createLazyFile: function (A, I, g, B, C) {
											function Q() {
												this.lengthKnown = !1, this.chunks = []
											}
											if (Q.prototype.get = function (A) {
													if (!(A > this.length - 1 || A < 0)) {
														var I = A % this.chunkSize,
															g = A / this.chunkSize | 0;
														return this.getter(g)[I]
													}
												}, Q.prototype.setDataGetter = function (A) {
													this.getter = A
												}, Q.prototype.cacheLength = function () {
													var A = new XMLHttpRequest;
													if (A.open("HEAD", g, !1), A.send(null), !(A.status >= 200 && A.status < 300 || 304 === A.status)) throw new Error("Couldn't load " + g + ". Status: " + A.status);
													var I, B = Number(A.getResponseHeader("Content-length")),
														C = (I = A.getResponseHeader("Accept-Ranges")) && "bytes" === I,
														Q = (I = A.getResponseHeader("Content-Encoding")) && "gzip" === I,
														E = 1048576;
													C || (E = B);
													var i = this;
													i.setDataGetter((function (A) {
														var I = A * E,
															C = (A + 1) * E - 1;
														if (C = Math.min(C, B - 1), void 0 === i.chunks[A] && (i.chunks[A] = function (A, I) {
																if (A > I) throw new Error("invalid range (" + A + ", " + I + ") or no bytes requested!");
																if (I > B - 1) throw new Error("only " + B + " bytes available! programmer error!");
																var C = new XMLHttpRequest;
																if (C.open("GET", g, !1), B !== E && C.setRequestHeader("Range", "bytes=" + A + "-" + I), "undefined" != typeof Uint8Array && (C.responseType = "arraybuffer"), C.overrideMimeType && C.overrideMimeType("text/plain; charset=x-user-defined"), C.send(null), !(C.status >= 200 && C.status < 300 || 304 === C.status)) throw new Error("Couldn't load " + g + ". Status: " + C.status);
																return void 0 !== C.response ? new Uint8Array(C.response || []) : qg(C.responseText || "", !0)
															}(I, C)), void 0 === i.chunks[A]) throw new Error("doXHR failed!");
														return i.chunks[A]
													})), !Q && B || (E = B = 1, B = this.getter(0).length, E = B, c("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = B, this._chunkSize = E, this.lengthKnown = !0
												}, "undefined" != typeof XMLHttpRequest) {
												if (!s) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
												var E = new Q;
												Object.defineProperties(E, {
													length: {
														get: function () {
															return this.lengthKnown || this.cacheLength(), this._length
														}
													},
													chunkSize: {
														get: function () {
															return this.lengthKnown || this.cacheLength(), this._chunkSize
														}
													}
												});
												var i = {
													isDevice: !1,
													contents: E
												}
											} else i = {
												isDevice: !1,
												url: g
											};
											var o = PA.createFile(A, I, i, B, C);
											i.contents ? o.contents = i.contents : i.url && (o.contents = null, o.url = i.url), Object.defineProperties(o, {
												usedBytes: {
													get: function () {
														return this.contents.length
													}
												}
											});
											var a = {};
											return Object.keys(o.stream_ops).forEach((function (A) {
												var I = o.stream_ops[A];
												a[A] = function () {
													return PA.forceLoadFile(o), I.apply(null, arguments)
												}
											})), a.read = function (A, I, g, B, C) {
												PA.forceLoadFile(o);
												var Q = A.node.contents;
												if (C >= Q.length) return 0;
												var E = Math.min(Q.length - C, B);
												if (Q.slice)
													for (var i = 0; i < E; i++) I[g + i] = Q[C + i];
												else
													for (i = 0; i < E; i++) I[g + i] = Q.get(C + i);
												return E
											}, o.stream_ops = a, o
										},
										createPreloadedFile: function (I, g, B, C, Q, E, i, o, a, D) {
											Browser.init();
											var t = g ? XA.resolve(VA.join2(I, g)) : I;

											function s(B) {
												function s(A) {
													D && D(), o || PA.createDataFile(I, g, A, C, Q, a), E && E(), FA()
												}
												var e = !1;
												A.preloadPlugins.forEach((function (A) {
													e || A.canHandle(t) && (A.handle(B, t, s, (function () {
														i && i(), FA()
													})), e = !0)
												})), e || s(B)
											}
											RA(), "string" == typeof B ? Browser.asyncLoad(B, (function (A) {
												s(A)
											}), i) : s(B)
										},
										indexedDB: function () {
											return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
										},
										DB_NAME: function () {
											return "EM_FS_" + window.location.pathname
										},
										DB_VERSION: 20,
										DB_STORE_NAME: "FILE_DATA",
										saveFilesToDB: function (A, I, g) {
											I = I || function () {}, g = g || function () {};
											var B = PA.indexedDB();
											try {
												var C = B.open(PA.DB_NAME(), PA.DB_VERSION)
											} catch (A) {
												return g(A)
											}
											C.onupgradeneeded = function () {
												c("creating db"), C.result.createObjectStore(PA.DB_STORE_NAME)
											}, C.onsuccess = function () {
												var B = C.result.transaction([PA.DB_STORE_NAME], "readwrite"),
													Q = B.objectStore(PA.DB_STORE_NAME),
													E = 0,
													i = 0,
													o = A.length;

												function a() {
													0 == i ? I() : g()
												}
												A.forEach((function (A) {
													var I = Q.put(PA.analyzePath(A).object.contents, A);
													I.onsuccess = function () {
														++E + i == o && a()
													}, I.onerror = function () {
														i++, E + i == o && a()
													}
												})), B.onerror = g
											}, C.onerror = g
										},
										loadFilesFromDB: function (A, I, g) {
											I = I || function () {}, g = g || function () {};
											var B = PA.indexedDB();
											try {
												var C = B.open(PA.DB_NAME(), PA.DB_VERSION)
											} catch (A) {
												return g(A)
											}
											C.onupgradeneeded = g, C.onsuccess = function () {
												var B = C.result;
												try {
													var Q = B.transaction([PA.DB_STORE_NAME], "readonly")
												} catch (A) {
													return void g(A)
												}
												var E = Q.objectStore(PA.DB_STORE_NAME),
													i = 0,
													o = 0,
													a = A.length;

												function D() {
													0 == o ? I() : g()
												}
												A.forEach((function (A) {
													var I = E.get(A);
													I.onsuccess = function () {
														PA.analyzePath(A).exists && PA.unlink(A), PA.createDataFile(VA.dirname(A), VA.basename(A), I.result, !0, !0, !0), ++i + o == a && D()
													}, I.onerror = function () {
														o++, i + o == a && D()
													}
												})), Q.onerror = g
											}, C.onerror = g
										}
									},
									zA = {
										mappings: {},
										DEFAULT_POLLMASK: 5,
										umask: 511,
										calculateAt: function (A, I, g) {
											if ("/" === I[0]) return I;
											var B;
											if (-100 === A) B = PA.cwd();
											else {
												var C = PA.getStream(A);
												if (!C) throw new PA.ErrnoError(8);
												B = C.path
											}
											if (0 == I.length) {
												if (!g) throw new PA.ErrnoError(44);
												return B
											}
											return VA.join2(B, I)
										},
										doStat: function (A, I, g) {
											try {
												var B = A(I)
											} catch (A) {
												if (A && A.node && VA.normalize(I) !== VA.normalize(PA.getPath(A.node))) return -54;
												throw A
											}
											return v[g >> 2] = B.dev, v[g + 4 >> 2] = 0, v[g + 8 >> 2] = B.ino, v[g + 12 >> 2] = B.mode, v[g + 16 >> 2] = B.nlink, v[g + 20 >> 2] = B.uid, v[g + 24 >> 2] = B.gid, v[g + 28 >> 2] = B.rdev, v[g + 32 >> 2] = 0, NA = [B.size >>> 0, (UA = B.size, +Math.abs(UA) >= 1 ? UA > 0 ? (0 | Math.min(+Math.floor(UA / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((UA - +(~~UA >>> 0)) / 4294967296) >>> 0 : 0)], v[g + 40 >> 2] = NA[0], v[g + 44 >> 2] = NA[1], v[g + 48 >> 2] = 4096, v[g + 52 >> 2] = B.blocks, v[g + 56 >> 2] = B.atime.getTime() / 1e3 | 0, v[g + 60 >> 2] = 0, v[g + 64 >> 2] = B.mtime.getTime() / 1e3 | 0, v[g + 68 >> 2] = 0, v[g + 72 >> 2] = B.ctime.getTime() / 1e3 | 0, v[g + 76 >> 2] = 0, NA = [B.ino >>> 0, (UA = B.ino, +Math.abs(UA) >= 1 ? UA > 0 ? (0 | Math.min(+Math.floor(UA / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((UA - +(~~UA >>> 0)) / 4294967296) >>> 0 : 0)], v[g + 80 >> 2] = NA[0], v[g + 84 >> 2] = NA[1], 0
										},
										doMsync: function (A, I, g, B, C) {
											var Q = Z.slice(A, A + g);
											PA.msync(I, Q, C, g, B)
										},
										doMkdir: function (A, I) {
											return "/" === (A = VA.normalize(A))[A.length - 1] && (A = A.substr(0, A.length - 1)), PA.mkdir(A, I, 0), 0
										},
										doMknod: function (A, I, g) {
											switch (61440 & I) {
												case 32768:
												case 8192:
												case 24576:
												case 4096:
												case 49152:
													break;
												default:
													return -28
											}
											return PA.mknod(A, I, g), 0
										},
										doReadlink: function (A, I, g) {
											if (g <= 0) return -28;
											var B = PA.readlink(A),
												C = Math.min(g, f(B)),
												Q = W[I + C];
											return m(B, I, g + 1), W[I + C] = Q, C
										},
										doAccess: function (A, I) {
											if (-8 & I) return -28;
											var g;
											if (!(g = PA.lookupPath(A, {
													follow: !0
												}).node)) return -44;
											var B = "";
											return 4 & I && (B += "r"), 2 & I && (B += "w"), 1 & I && (B += "x"), B && PA.nodePermissions(g, B) ? -2 : 0
										},
										doDup: function (A, I, g) {
											var B = PA.getStream(g);
											return B && PA.close(B), PA.open(A, I, 0, g, g).fd
										},
										doReadv: function (A, I, g, B) {
											for (var C = 0, Q = 0; Q < g; Q++) {
												var E = v[I + 8 * Q >> 2],
													i = v[I + (8 * Q + 4) >> 2],
													o = PA.read(A, W, E, i, B);
												if (o < 0) return -1;
												if (C += o, o < i) break
											}
											return C
										},
										doWritev: function (A, I, g, B) {
											for (var C = 0, Q = 0; Q < g; Q++) {
												var E = v[I + 8 * Q >> 2],
													i = v[I + (8 * Q + 4) >> 2],
													o = PA.write(A, W, E, i, B);
												if (o < 0) return -1;
												C += o
											}
											return C
										},
										varargs: void 0,
										get: function () {
											return zA.varargs += 4, v[zA.varargs - 4 >> 2]
										},
										getStr: function (A) {
											return u(A)
										},
										getStreamFromFD: function (A) {
											var I = PA.getStream(A);
											if (!I) throw new PA.ErrnoError(8);
											return I
										},
										get64: function (A, I) {
											return A
										}
									};

								function _A(A, I, g) {
									zA.varargs = g;
									try {
										var B = zA.getStreamFromFD(A);
										switch (I) {
											case 0:
												return (C = zA.get()) < 0 ? -28 : PA.open(B.path, B.flags, 0, C).fd;
											case 1:
											case 2:
											case 13:
											case 14:
												return 0;
											case 3:
												return B.flags;
											case 4:
												var C = zA.get();
												return B.flags |= C, 0;
											case 12:
												return C = zA.get(), x[C + 0 >> 1] = 2, 0;
											case 16:
											case 8:
											default:
												return -28;
											case 9:
												return xA(28), -1
										}
									} catch (A) {
										return void 0 !== PA && A instanceof PA.ErrnoError || cA(A), -A.errno
									}
								}

								function $A(A, I, g) {
									zA.varargs = g;
									try {
										var B = zA.getStreamFromFD(A);
										switch (I) {
											case 21509:
											case 21505:
											case 21510:
											case 21511:
											case 21512:
											case 21506:
											case 21507:
											case 21508:
											case 21523:
											case 21524:
												return B.tty ? 0 : -59;
											case 21519:
												if (!B.tty) return -59;
												var C = zA.get();
												return v[C >> 2] = 0, 0;
											case 21520:
												return B.tty ? -28 : -59;
											case 21531:
												return C = zA.get(), PA.ioctl(B, I, C);
											default:
												cA("bad ioctl syscall " + I)
										}
									} catch (A) {
										return void 0 !== PA && A instanceof PA.ErrnoError || cA(A), -A.errno
									}
								}

								function AI(A, I, g) {
									zA.varargs = g;
									try {
										var B = zA.getStr(A),
											C = g ? zA.get() : 0;
										return PA.open(B, I, C).fd
									} catch (A) {
										return void 0 !== PA && A instanceof PA.ErrnoError || cA(A), -A.errno
									}
								}

								function II(A, I, g, B, C) {}

								function gI(A) {
									switch (A) {
										case 1:
											return 0;
										case 2:
											return 1;
										case 4:
											return 2;
										case 8:
											return 3;
										default:
											throw new TypeError("Unknown type size: " + A)
									}
								}

								function BI() {
									for (var A = new Array(256), I = 0; I < 256; ++I) A[I] = String.fromCharCode(I);
									CI = A
								}
								var CI = void 0;

								function QI(A) {
									for (var I = "", g = A; Z[g];) I += CI[Z[g++]];
									return I
								}
								var EI = {},
									iI = {},
									oI = {},
									aI = 48,
									DI = 57;

								function tI(A) {
									if (void 0 === A) return "_unknown";
									var I = (A = A.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
									return I >= aI && I <= DI ? "_" + A : A
								}

								function sI(A, I) {
									return A = tI(A), new Function("body", "return function " + A + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(I)
								}

								function eI(A, I) {
									var g = sI(I, (function (A) {
										this.name = I, this.message = A;
										var g = new Error(A).stack;
										void 0 !== g && (this.stack = this.toString() + "\n" + g.replace(/^Error(:[^\n]*)?\n/, ""))
									}));
									return g.prototype = Object.create(A.prototype), g.prototype.constructor = g, g.prototype.toString = function () {
										return void 0 === this.message ? this.name : this.name + ": " + this.message
									}, g
								}
								var hI = void 0;

								function rI(A) {
									throw new hI(A)
								}
								var GI = void 0;

								function wI(A) {
									throw new GI(A)
								}

								function nI(A, I, g) {
									function B(I) {
										var B = g(I);
										B.length !== A.length && wI("Mismatched type converter count");
										for (var C = 0; C < A.length; ++C) yI(A[C], B[C])
									}
									A.forEach((function (A) {
										oI[A] = I
									}));
									var C = new Array(I.length),
										Q = [],
										E = 0;
									I.forEach((function (A, I) {
										iI.hasOwnProperty(A) ? C[I] = iI[A] : (Q.push(A), EI.hasOwnProperty(A) || (EI[A] = []), EI[A].push((function () {
											C[I] = iI[A], ++E === Q.length && B(C)
										})))
									})), 0 === Q.length && B(C)
								}

								function yI(A, I, g) {
									if (g = g || {}, !("argPackAdvance" in I)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
									var B = I.name;
									if (A || rI('type "' + B + '" must have a positive integer typeid pointer'), iI.hasOwnProperty(A)) {
										if (g.ignoreDuplicateRegistrations) return;
										rI("Cannot register type '" + B + "' twice")
									}
									if (iI[A] = I, delete oI[A], EI.hasOwnProperty(A)) {
										var C = EI[A];
										delete EI[A], C.forEach((function (A) {
											A()
										}))
									}
								}

								function RI(A, I, g, B, C) {
									var Q = gI(g);
									yI(A, {
										name: I = QI(I),
										fromWireType: function (A) {
											return !!A
										},
										toWireType: function (A, I) {
											return I ? B : C
										},
										argPackAdvance: 8,
										readValueFromPointer: function (A) {
											var B;
											if (1 === g) B = W;
											else if (2 === g) B = x;
											else {
												if (4 !== g) throw new TypeError("Unknown boolean type size: " + I);
												B = v
											}
											return this.fromWireType(B[A >> Q])
										},
										destructorFunction: null
									})
								}

								function FI(I, g, B) {
									I = QI(I), nI([], [g], (function (g) {
										return g = g[0], A[I] = g.fromWireType(B), []
									}))
								}
								var cI = [],
									MI = [{}, {
										value: void 0
									}, {
										value: null
									}, {
										value: !0
									}, {
										value: !1
									}];

								function SI(A) {
									A > 4 && 0 == --MI[A].refcount && (MI[A] = void 0, cI.push(A))
								}

								function kI() {
									for (var A = 0, I = 5; I < MI.length; ++I) void 0 !== MI[I] && ++A;
									return A
								}

								function UI() {
									for (var A = 5; A < MI.length; ++A)
										if (void 0 !== MI[A]) return MI[A];
									return null
								}

								function NI() {
									A.count_emval_handles = kI, A.get_first_emval = UI
								}

								function JI(A) {
									switch (A) {
										case void 0:
											return 1;
										case null:
											return 2;
										case !0:
											return 3;
										case !1:
											return 4;
										default:
											var I = cI.length ? cI.pop() : MI.length;
											return MI[I] = {
												refcount: 1,
												value: A
											}, I
									}
								}

								function KI(A) {
									return this.fromWireType(X[A >> 2])
								}

								function dI(A, I) {
									yI(A, {
										name: I = QI(I),
										fromWireType: function (A) {
											var I = MI[A].value;
											return SI(A), I
										},
										toWireType: function (A, I) {
											return JI(I)
										},
										argPackAdvance: 8,
										readValueFromPointer: KI,
										destructorFunction: null
									})
								}

								function lI(A) {
									if (null === A) return "null";
									var I = a(A);
									return "object" === I || "array" === I || "function" === I ? A.toString() : "" + A
								}

								function YI(A, I) {
									switch (I) {
										case 2:
											return function (A) {
												return this.fromWireType(T[A >> 2])
											};
										case 3:
											return function (A) {
												return this.fromWireType(j[A >> 3])
											};
										default:
											throw new TypeError("Unknown float type: " + A)
									}
								}

								function LI(A, I, g) {
									var B = gI(g);
									yI(A, {
										name: I = QI(I),
										fromWireType: function (A) {
											return A
										},
										toWireType: function (A, I) {
											if ("number" != typeof I && "boolean" != typeof I) throw new TypeError('Cannot convert "' + lI(I) + '" to ' + this.name);
											return I
										},
										argPackAdvance: 8,
										readValueFromPointer: YI(I, B),
										destructorFunction: null
									})
								}

								function qI(A, I) {
									if (!(A instanceof Function)) throw new TypeError("new_ called with constructor type " + a(A) + " which is not a function");
									var g = sI(A.name || "unknownFunctionName", (function () {}));
									g.prototype = A.prototype;
									var B = new g,
										C = A.apply(B, I);
									return C instanceof Object ? C : B
								}

								function HI(A) {
									for (; A.length;) {
										var I = A.pop();
										A.pop()(I)
									}
								}

								function uI(A, I, g, B, C) {
									var Q = I.length;
									Q < 2 && rI("argTypes array size mismatch! Must at least get return value and 'this' types!");
									for (var E = null !== I[1] && null !== g, i = !1, o = 1; o < I.length; ++o)
										if (null !== I[o] && void 0 === I[o].destructorFunction) {
											i = !0;
											break
										}
									var a = "void" !== I[0].name,
										D = "",
										t = "";
									for (o = 0; o < Q - 2; ++o) D += (0 !== o ? ", " : "") + "arg" + o, t += (0 !== o ? ", " : "") + "arg" + o + "Wired";
									var s = "return function " + tI(A) + "(" + D + ") {\nif (arguments.length !== " + (Q - 2) + ") {\nthrowBindingError('function " + A + " called with ' + arguments.length + ' arguments, expected " + (Q - 2) + " args!');\n}\n";
									i && (s += "var destructors = [];\n");
									var e = i ? "destructors" : "null",
										h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
										r = [rI, B, C, HI, I[0], I[1]];
									for (E && (s += "var thisWired = classParam.toWireType(" + e + ", this);\n"), o = 0; o < Q - 2; ++o) s += "var arg" + o + "Wired = argType" + o + ".toWireType(" + e + ", arg" + o + "); // " + I[o + 2].name + "\n", h.push("argType" + o), r.push(I[o + 2]);
									if (E && (t = "thisWired" + (t.length > 0 ? ", " : "") + t), s += (a ? "var rv = " : "") + "invoker(fn" + (t.length > 0 ? ", " : "") + t + ");\n", i) s += "runDestructors(destructors);\n";
									else
										for (o = E ? 1 : 2; o < I.length; ++o) {
											var G = 1 === o ? "thisWired" : "arg" + (o - 2) + "Wired";
											null !== I[o].destructorFunction && (s += G + "_dtor(" + G + "); // " + I[o].name + "\n", h.push(G + "_dtor"), r.push(I[o].destructorFunction))
										}
									return a && (s += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), s += "}\n", h.push(s), qI(Function, h).apply(null, r)
								}

								function pI(A, I, g) {
									if (void 0 === A[I].overloadTable) {
										var B = A[I];
										A[I] = function () {
											return A[I].overloadTable.hasOwnProperty(arguments.length) || rI("Function '" + g + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + A[I].overloadTable + ")!"), A[I].overloadTable[arguments.length].apply(this, arguments)
										}, A[I].overloadTable = [], A[I].overloadTable[B.argCount] = B
									}
								}

								function mI(I, g, B) {
									A.hasOwnProperty(I) ? ((void 0 === B || void 0 !== A[I].overloadTable && void 0 !== A[I].overloadTable[B]) && rI("Cannot register public name '" + I + "' twice"), pI(A, I, I), A.hasOwnProperty(B) && rI("Cannot register multiple overloads of a function with the same number of arguments (" + B + ")!"), A[I].overloadTable[B] = g) : (A[I] = g, void 0 !== B && (A[I].numArguments = B))
								}

								function fI(A, I) {
									for (var g = [], B = 0; B < A; B++) g.push(v[(I >> 2) + B]);
									return g
								}

								function bI(I, g, B) {
									A.hasOwnProperty(I) || wI("Replacing nonexistant public symbol"), void 0 !== A[I].overloadTable && void 0 !== B ? A[I].overloadTable[B] = g : (A[I] = g, A[I].argCount = B)
								}

								function WI(I, g, B) {
									var C = A["dynCall_" + I];
									return B && B.length ? C.apply(null, [g].concat(B)) : C.call(null, g)
								}

								function ZI(A, I, g) {
									return A.includes("j") ? WI(A, I, g) : iA.get(I).apply(null, g)
								}

								function xI(A, I) {
									var g = [];
									return function () {
										g.length = arguments.length;
										for (var B = 0; B < arguments.length; B++) g[B] = arguments[B];
										return ZI(A, I, g)
									}
								}

								function VI(A, I) {
									var g = (A = QI(A)).includes("j") ? xI(A, I) : iA.get(I);
									return "function" != typeof g && rI("unknown function pointer with signature " + A + ": " + I), g
								}
								var vI = void 0;

								function XI(A) {
									var I = Vg(A),
										g = QI(I);
									return Zg(I), g
								}

								function TI(A, I) {
									var g = [],
										B = {};
									throw I.forEach((function A(I) {
										B[I] || iI[I] || (oI[I] ? oI[I].forEach(A) : (g.push(I), B[I] = !0))
									})), new vI(A + ": " + g.map(XI).join([", "]))
								}

								function jI(A, I, g, B, C, Q) {
									var E = fI(I, g);
									A = QI(A), C = VI(B, C), mI(A, (function () {
										TI("Cannot call " + A + " due to unbound types", E)
									}), I - 1), nI([], E, (function (g) {
										var B = [g[0], null].concat(g.slice(1));
										return bI(A, uI(A, B, null, C, Q), I - 1), []
									}))
								}

								function OI(A, I, g) {
									switch (I) {
										case 0:
											return g ? function (A) {
												return W[A]
											} : function (A) {
												return Z[A]
											};
										case 1:
											return g ? function (A) {
												return x[A >> 1]
											} : function (A) {
												return V[A >> 1]
											};
										case 2:
											return g ? function (A) {
												return v[A >> 2]
											} : function (A) {
												return X[A >> 2]
											};
										default:
											throw new TypeError("Unknown integer type: " + A)
									}
								}

								function PI(A, I, g, B, C) {
									I = QI(I), -1 === C && (C = 4294967295);
									var Q = gI(g),
										E = function (A) {
											return A
										};
									if (0 === B) {
										var i = 32 - 8 * g;
										E = function (A) {
											return A << i >>> i
										}
									}
									var o = I.includes("unsigned");
									yI(A, {
										name: I,
										fromWireType: E,
										toWireType: function (A, g) {
											if ("number" != typeof g && "boolean" != typeof g) throw new TypeError('Cannot convert "' + lI(g) + '" to ' + this.name);
											if (g < B || g > C) throw new TypeError('Passing a number "' + lI(g) + '" from JS side to C/C++ side to an argument of type "' + I + '", which is outside the valid range [' + B + ", " + C + "]!");
											return o ? g >>> 0 : 0 | g
										},
										argPackAdvance: 8,
										readValueFromPointer: OI(I, Q, 0 !== B),
										destructorFunction: null
									})
								}

								function zI(A, I, g) {
									var B = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][I];

									function C(A) {
										var I = X,
											g = I[A >>= 2],
											C = I[A + 1];
										return new B(b, C, g)
									}
									yI(A, {
										name: g = QI(g),
										fromWireType: C,
										argPackAdvance: 8,
										readValueFromPointer: C
									}, {
										ignoreDuplicateRegistrations: !0
									})
								}

								function _I(A, I) {
									var g = "std::string" === (I = QI(I));
									yI(A, {
										name: I,
										fromWireType: function (A) {
											var I, B = X[A >> 2];
											if (g)
												for (var C = A + 4, Q = 0; Q <= B; ++Q) {
													var E = A + 4 + Q;
													if (Q == B || 0 == Z[E]) {
														var i = u(C, E - C);
														void 0 === I ? I = i : (I += String.fromCharCode(0), I += i), C = E + 1
													}
												} else {
													var o = new Array(B);
													for (Q = 0; Q < B; ++Q) o[Q] = String.fromCharCode(Z[A + 4 + Q]);
													I = o.join("")
												}
											return Zg(A), I
										},
										toWireType: function (A, I) {
											I instanceof ArrayBuffer && (I = new Uint8Array(I));
											var B = "string" == typeof I;
											B || I instanceof Uint8Array || I instanceof Uint8ClampedArray || I instanceof Int8Array || rI("Cannot pass non-string to std::string");
											var C = (g && B ? function () {
													return f(I)
												} : function () {
													return I.length
												})(),
												Q = Wg(4 + C + 1);
											if (X[Q >> 2] = C, g && B) m(I, Q + 4, C + 1);
											else if (B)
												for (var E = 0; E < C; ++E) {
													var i = I.charCodeAt(E);
													i > 255 && (Zg(Q), rI("String has UTF-16 code units that do not fit in 8 bits")), Z[Q + 4 + E] = i
												} else
													for (E = 0; E < C; ++E) Z[Q + 4 + E] = I[E];
											return null !== A && A.push(Zg, Q), Q
										},
										argPackAdvance: 8,
										readValueFromPointer: KI,
										destructorFunction: function (A) {
											Zg(A)
										}
									})
								}

								function $I(A, I, g) {
									var B, C, Q, E, i;
									g = QI(g), 2 === I ? (B = P, C = z, E = _, Q = function () {
										return V
									}, i = 1) : 4 === I && (B = $, C = AA, E = IA, Q = function () {
										return X
									}, i = 2), yI(A, {
										name: g,
										fromWireType: function (A) {
											for (var g, C = X[A >> 2], E = Q(), o = A + 4, a = 0; a <= C; ++a) {
												var D = A + 4 + a * I;
												if (a == C || 0 == E[D >> i]) {
													var t = B(o, D - o);
													void 0 === g ? g = t : (g += String.fromCharCode(0), g += t), o = D + I
												}
											}
											return Zg(A), g
										},
										toWireType: function (A, B) {
											"string" != typeof B && rI("Cannot pass non-string to C++ string type " + g);
											var Q = E(B),
												o = Wg(4 + Q + I);
											return X[o >> 2] = Q >> i, C(B, o + 4, Q + I), null !== A && A.push(Zg, o), o
										},
										argPackAdvance: 8,
										readValueFromPointer: KI,
										destructorFunction: function (A) {
											Zg(A)
										}
									})
								}

								function Ag(A, I) {
									yI(A, {
										isVoid: !0,
										name: I = QI(I),
										argPackAdvance: 0,
										fromWireType: function () {},
										toWireType: function (A, I) {}
									})
								}

								function Ig() {
									cA()
								}
								var gg = [];

								function Bg(A, I) {
									var g;
									for (gg.length = 0, I >>= 2; g = Z[A++];) {
										var B = g < 105;
										B && 1 & I && I++, gg.push(B ? j[I++ >> 1] : v[I]), ++I
									}
									return gg
								}

								function Cg(A, I, g) {
									var B = Bg(I, g);
									return YA[A].apply(null, B)
								}

								function Qg(A, I) {
									throw Pg(A, I || 1), "longjmp"
								}

								function Eg(A, I) {
									return Qg(A, I)
								}

								function ig(A) {
									try {
										return d.grow(A - b.byteLength + 65535 >>> 16), EA(d.buffer), 1
									} catch (A) {}
								}

								function og(A) {
									var I = Z.length,
										g = 2147483648;
									if ((A >>>= 0) > g) return !1;
									for (var B = 1; B <= 4; B *= 2) {
										var C = I * (1 + .2 / B);
										if (C = Math.min(C, A + 100663296), ig(Math.min(g, QA(Math.max(A, C), 65536)))) return !0
									}
									return !1
								}
								var ag = {};

								function Dg() {
									return i || "./this.program"
								}

								function tg() {
									if (!tg.strings) {
										var A = {
											USER: "web_user",
											LOGNAME: "web_user",
											PATH: "/",
											PWD: "/",
											HOME: "/home/web_user",
											LANG: ("object" === ("undefined" == typeof navigator ? "undefined" : a(navigator)) && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
											_: Dg()
										};
										for (var I in ag) A[I] = ag[I];
										var g = [];
										for (var I in A) g.push(I + "=" + A[I]);
										tg.strings = g
									}
									return tg.strings
								}

								function sg(A, I) {
									try {
										var g = 0;
										return tg().forEach((function (B, C) {
											var Q = I + g;
											v[A + 4 * C >> 2] = Q, CA(B, Q), g += B.length + 1
										})), 0
									} catch (A) {
										return void 0 !== PA && A instanceof PA.ErrnoError || cA(A), A.errno
									}
								}

								function eg(A, I) {
									try {
										var g = tg();
										v[A >> 2] = g.length;
										var B = 0;
										return g.forEach((function (A) {
											B += A.length + 1
										})), v[I >> 2] = B, 0
									} catch (A) {
										return void 0 !== PA && A instanceof PA.ErrnoError || cA(A), A.errno
									}
								}

								function hg(A) {
									EB(A)
								}

								function rg(A) {
									try {
										var I = zA.getStreamFromFD(A);
										return PA.close(I), 0
									} catch (A) {
										return void 0 !== PA && A instanceof PA.ErrnoError || cA(A), A.errno
									}
								}

								function Gg(A, I, g, B) {
									try {
										var C = zA.getStreamFromFD(A),
											Q = zA.doReadv(C, I, g);
										return v[B >> 2] = Q, 0
									} catch (A) {
										return void 0 !== PA && A instanceof PA.ErrnoError || cA(A), A.errno
									}
								}

								function wg(A, I, g, B, C) {
									try {
										var Q = zA.getStreamFromFD(A),
											E = 4294967296 * g + (I >>> 0),
											i = 9007199254740992;
										return E <= -i || E >= i ? -61 : (PA.llseek(Q, E, B), NA = [Q.position >>> 0, (UA = Q.position, +Math.abs(UA) >= 1 ? UA > 0 ? (0 | Math.min(+Math.floor(UA / 4294967296), 4294967295)) >>> 0 : ~~+Math.ceil((UA - +(~~UA >>> 0)) / 4294967296) >>> 0 : 0)], v[C >> 2] = NA[0], v[C + 4 >> 2] = NA[1], Q.getdents && 0 === E && 0 === B && (Q.getdents = null), 0)
									} catch (A) {
										return void 0 !== PA && A instanceof PA.ErrnoError || cA(A), A.errno
									}
								}

								function ng(A, I, g, B) {
									try {
										var C = zA.getStreamFromFD(A),
											Q = zA.doWritev(C, I, g);
										return v[B >> 2] = Q, 0
									} catch (A) {
										return void 0 !== PA && A instanceof PA.ErrnoError || cA(A), A.errno
									}
								}

								function yg() {
									return K()
								}

								function Rg(A) {
									var I = Date.now();
									return v[A >> 2] = I / 1e3 | 0, v[A + 4 >> 2] = I % 1e3 * 1e3 | 0, 0
								}

								function Fg(A) {
									J(A)
								}

								function cg(A) {
									return A % 4 == 0 && (A % 100 != 0 || A % 400 == 0)
								}

								function Mg(A, I) {
									for (var g = 0, B = 0; B <= I; g += A[B++]);
									return g
								}
								var Sg = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
									kg = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

								function Ug(A, I) {
									for (var g = new Date(A.getTime()); I > 0;) {
										var B = cg(g.getFullYear()),
											C = g.getMonth(),
											Q = (B ? Sg : kg)[C];
										if (!(I > Q - g.getDate())) return g.setDate(g.getDate() + I), g;
										I -= Q - g.getDate() + 1, g.setDate(1), C < 11 ? g.setMonth(C + 1) : (g.setMonth(0), g.setFullYear(g.getFullYear() + 1))
									}
									return g
								}

								function Ng(A, I, g, B) {
									var C = v[B + 40 >> 2],
										Q = {
											tm_sec: v[B >> 2],
											tm_min: v[B + 4 >> 2],
											tm_hour: v[B + 8 >> 2],
											tm_mday: v[B + 12 >> 2],
											tm_mon: v[B + 16 >> 2],
											tm_year: v[B + 20 >> 2],
											tm_wday: v[B + 24 >> 2],
											tm_yday: v[B + 28 >> 2],
											tm_isdst: v[B + 32 >> 2],
											tm_gmtoff: v[B + 36 >> 2],
											tm_zone: C ? u(C) : ""
										},
										E = u(g),
										i = {
											"%c": "%a %b %d %H:%M:%S %Y",
											"%D": "%m/%d/%y",
											"%F": "%Y-%m-%d",
											"%h": "%b",
											"%r": "%I:%M:%S %p",
											"%R": "%H:%M",
											"%T": "%H:%M:%S",
											"%x": "%m/%d/%y",
											"%X": "%H:%M:%S",
											"%Ec": "%c",
											"%EC": "%C",
											"%Ex": "%m/%d/%y",
											"%EX": "%H:%M:%S",
											"%Ey": "%y",
											"%EY": "%Y",
											"%Od": "%d",
											"%Oe": "%e",
											"%OH": "%H",
											"%OI": "%I",
											"%Om": "%m",
											"%OM": "%M",
											"%OS": "%S",
											"%Ou": "%u",
											"%OU": "%U",
											"%OV": "%V",
											"%Ow": "%w",
											"%OW": "%W",
											"%Oy": "%y"
										};
									for (var o in i) E = E.replace(new RegExp(o, "g"), i[o]);
									var a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
										D = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

									function t(A, I, g) {
										for (var B = "number" == typeof A ? A.toString() : A || ""; B.length < I;) B = g[0] + B;
										return B
									}

									function s(A, I) {
										return t(A, I, "0")
									}

									function e(A, I) {
										function g(A) {
											return A < 0 ? -1 : A > 0 ? 1 : 0
										}
										var B;
										return 0 === (B = g(A.getFullYear() - I.getFullYear())) && 0 === (B = g(A.getMonth() - I.getMonth())) && (B = g(A.getDate() - I.getDate())), B
									}

									function h(A) {
										switch (A.getDay()) {
											case 0:
												return new Date(A.getFullYear() - 1, 11, 29);
											case 1:
												return A;
											case 2:
												return new Date(A.getFullYear(), 0, 3);
											case 3:
												return new Date(A.getFullYear(), 0, 2);
											case 4:
												return new Date(A.getFullYear(), 0, 1);
											case 5:
												return new Date(A.getFullYear() - 1, 11, 31);
											case 6:
												return new Date(A.getFullYear() - 1, 11, 30)
										}
									}

									function r(A) {
										var I = Ug(new Date(A.tm_year + 1900, 0, 1), A.tm_yday),
											g = new Date(I.getFullYear(), 0, 4),
											B = new Date(I.getFullYear() + 1, 0, 4),
											C = h(g),
											Q = h(B);
										return e(C, I) <= 0 ? e(Q, I) <= 0 ? I.getFullYear() + 1 : I.getFullYear() : I.getFullYear() - 1
									}
									var G = {
										"%a": function (A) {
											return a[A.tm_wday].substring(0, 3)
										},
										"%A": function (A) {
											return a[A.tm_wday]
										},
										"%b": function (A) {
											return D[A.tm_mon].substring(0, 3)
										},
										"%B": function (A) {
											return D[A.tm_mon]
										},
										"%C": function (A) {
											return s((A.tm_year + 1900) / 100 | 0, 2)
										},
										"%d": function (A) {
											return s(A.tm_mday, 2)
										},
										"%e": function (A) {
											return t(A.tm_mday, 2, " ")
										},
										"%g": function (A) {
											return r(A).toString().substring(2)
										},
										"%G": function (A) {
											return r(A)
										},
										"%H": function (A) {
											return s(A.tm_hour, 2)
										},
										"%I": function (A) {
											var I = A.tm_hour;
											return 0 == I ? I = 12 : I > 12 && (I -= 12), s(I, 2)
										},
										"%j": function (A) {
											return s(A.tm_mday + Mg(cg(A.tm_year + 1900) ? Sg : kg, A.tm_mon - 1), 3)
										},
										"%m": function (A) {
											return s(A.tm_mon + 1, 2)
										},
										"%M": function (A) {
											return s(A.tm_min, 2)
										},
										"%n": function () {
											return "\n"
										},
										"%p": function (A) {
											return A.tm_hour >= 0 && A.tm_hour < 12 ? "AM" : "PM"
										},
										"%S": function (A) {
											return s(A.tm_sec, 2)
										},
										"%t": function () {
											return "\t"
										},
										"%u": function (A) {
											return A.tm_wday || 7
										},
										"%U": function (A) {
											var I = new Date(A.tm_year + 1900, 0, 1),
												g = 0 === I.getDay() ? I : Ug(I, 7 - I.getDay()),
												B = new Date(A.tm_year + 1900, A.tm_mon, A.tm_mday);
											if (e(g, B) < 0) {
												var C = Mg(cg(B.getFullYear()) ? Sg : kg, B.getMonth() - 1) - 31,
													Q = 31 - g.getDate() + C + B.getDate();
												return s(Math.ceil(Q / 7), 2)
											}
											return 0 === e(g, I) ? "01" : "00"
										},
										"%V": function (A) {
											var I, g = new Date(A.tm_year + 1900, 0, 4),
												B = new Date(A.tm_year + 1901, 0, 4),
												C = h(g),
												Q = h(B),
												E = Ug(new Date(A.tm_year + 1900, 0, 1), A.tm_yday);
											return e(E, C) < 0 ? "53" : e(Q, E) <= 0 ? "01" : (I = C.getFullYear() < A.tm_year + 1900 ? A.tm_yday + 32 - C.getDate() : A.tm_yday + 1 - C.getDate(), s(Math.ceil(I / 7), 2))
										},
										"%w": function (A) {
											return A.tm_wday
										},
										"%W": function (A) {
											var I = new Date(A.tm_year, 0, 1),
												g = 1 === I.getDay() ? I : Ug(I, 0 === I.getDay() ? 1 : 7 - I.getDay() + 1),
												B = new Date(A.tm_year + 1900, A.tm_mon, A.tm_mday);
											if (e(g, B) < 0) {
												var C = Mg(cg(B.getFullYear()) ? Sg : kg, B.getMonth() - 1) - 31,
													Q = 31 - g.getDate() + C + B.getDate();
												return s(Math.ceil(Q / 7), 2)
											}
											return 0 === e(g, I) ? "01" : "00"
										},
										"%y": function (A) {
											return (A.tm_year + 1900).toString().substring(2)
										},
										"%Y": function (A) {
											return A.tm_year + 1900
										},
										"%z": function (A) {
											var I = A.tm_gmtoff,
												g = I >= 0;
											return I = (I = Math.abs(I) / 60) / 60 * 100 + I % 60, (g ? "+" : "-") + String("0000" + I).slice(-4)
										},
										"%Z": function (A) {
											return A.tm_zone
										},
										"%%": function () {
											return "%"
										}
									};
									for (var o in G) E.includes(o) && (E = E.replace(new RegExp(o, "g"), G[o](Q)));
									var w = qg(E, !1);
									return w.length > I ? 0 : (BA(w, A), w.length - 1)
								}

								function Jg(A, I, g, B) {
									return Ng(A, I, g, B)
								}

								function Kg(A) {
									var I = Date.now() / 1e3 | 0;
									return A && (v[A >> 2] = I), I
								}
								var dg = function (A, I, g, B) {
										A || (A = this), this.parent = A, this.mount = A.mount, this.mounted = null, this.id = PA.nextInode++, this.name = I, this.mode = g, this.node_ops = {}, this.stream_ops = {}, this.rdev = B
									},
									lg = 365,
									Yg = 146;
								Object.defineProperties(dg.prototype, {
									read: {
										get: function () {
											return (this.mode & lg) === lg
										},
										set: function (A) {
											A ? this.mode |= lg : this.mode &= ~lg
										}
									},
									write: {
										get: function () {
											return (this.mode & Yg) === Yg
										},
										set: function (A) {
											A ? this.mode |= Yg : this.mode &= ~Yg
										}
									},
									isFolder: {
										get: function () {
											return PA.isDir(this.mode)
										}
									},
									isDevice: {
										get: function () {
											return PA.isChrdev(this.mode)
										}
									}
								}), PA.FSNode = dg, PA.staticInit(), BI(), hI = A.BindingError = eI(Error, "BindingError"), GI = A.InternalError = eI(Error, "InternalError"), NI(), vI = A.UnboundTypeError = eI(Error, "UnboundTypeError");
								var Lg = !1;

								function qg(A, I, g) {
									var B = g > 0 ? g : f(A) + 1,
										C = new Array(B),
										Q = p(A, C, 0, C.length);
									return I && (C.length = Q), C
								}

								function Hg(A) {
									for (var I = [], g = 0; g < A.length; g++) {
										var B = A[g];
										B > 255 && (Lg && L(!1, "Character code " + B + " (" + String.fromCharCode(B) + ")  at offset " + g + " not in 0x00-0xFF."), B &= 255), I.push(String.fromCharCode(B))
									}
									return I.join("")
								}
								var ug = "function" == typeof atob ? atob : function (A) {
									var I, g, B, C, Q, E, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
										o = "",
										a = 0;
									A = A.replace(/[^A-Za-z0-9\+\/\=]/g, "");
									do {
										I = i.indexOf(A.charAt(a++)) << 2 | (C = i.indexOf(A.charAt(a++))) >> 4, g = (15 & C) << 4 | (Q = i.indexOf(A.charAt(a++))) >> 2, B = (3 & Q) << 6 | (E = i.indexOf(A.charAt(a++))), o += String.fromCharCode(I), 64 !== Q && (o += String.fromCharCode(g)), 64 !== E && (o += String.fromCharCode(B))
									} while (a < A.length);
									return o
								};

								function pg(A) {
									if ("boolean" == typeof e && e) {
										var I;
										try {
											I = Buffer.from(A, "base64")
										} catch (g) {
											I = new Buffer(A, "base64")
										}
										return new Uint8Array(I.buffer, I.byteOffset, I.byteLength)
									}
									try {
										for (var g = ug(A), B = new Uint8Array(g.length), C = 0; C < g.length; ++C) B[C] = g.charCodeAt(C);
										return B
									} catch (A) {
										throw new Error("Converting base64 string to bytes failed.")
									}
								}

								function mg(A) {
									if (SA(A)) return pg(A.slice(MA.length))
								}
								var fg, bg = {
										i: pA,
										h: fA,
										G: ZA,
										p: _A,
										I: $A,
										J: AI,
										B: II,
										L: RI,
										t: FI,
										K: dI,
										r: LI,
										f: jI,
										g: PI,
										e: zI,
										s: _I,
										n: $I,
										M: Ag,
										a: Ig,
										k: Cg,
										j: Eg,
										C: og,
										E: sg,
										F: eg,
										b: hg,
										q: rg,
										H: Gg,
										A: wg,
										o: ng,
										d: yg,
										u: Rg,
										w: zg,
										x: IB,
										O: BB,
										l: _g,
										y: AB,
										z: $g,
										m: gB,
										c: Fg,
										N: Ng,
										D: Jg,
										v: Kg
									},
									Wg = (lA(), A.___wasm_call_ctors = function () {
										return (A.___wasm_call_ctors = A.asm.Q).apply(null, arguments)
									}, A._malloc = function () {
										return (Wg = A._malloc = A.asm.R).apply(null, arguments)
									}),
									Zg = A._free = function () {
										return (Zg = A._free = A.asm.S).apply(null, arguments)
									},
									xg = A.___errno_location = function () {
										return (xg = A.___errno_location = A.asm.T).apply(null, arguments)
									},
									Vg = A.___getTypeName = function () {
										return (Vg = A.___getTypeName = A.asm.V).apply(null, arguments)
									},
									vg = (A.___embind_register_native_and_builtin_types = function () {
										return (A.___embind_register_native_and_builtin_types = A.asm.W).apply(null, arguments)
									}, A.__get_tzname = function () {
										return (vg = A.__get_tzname = A.asm.X).apply(null, arguments)
									}),
									Xg = A.__get_daylight = function () {
										return (Xg = A.__get_daylight = A.asm.Y).apply(null, arguments)
									},
									Tg = A.__get_timezone = function () {
										return (Tg = A.__get_timezone = A.asm.Z).apply(null, arguments)
									},
									jg = A.stackSave = function () {
										return (jg = A.stackSave = A.asm._).apply(null, arguments)
									},
									Og = A.stackRestore = function () {
										return (Og = A.stackRestore = A.asm.$).apply(null, arguments)
									},
									Pg = A._setThrew = function () {
										return (Pg = A._setThrew = A.asm.aa).apply(null, arguments)
									};

								function zg(A, I) {
									var g = jg();
									try {
										return iA.get(A)(I)
									} catch (A) {
										if (Og(g), A !== A + 0 && "longjmp" !== A) throw A;
										Pg(1, 0)
									}
								}

								function _g(A, I) {
									var g = jg();
									try {
										iA.get(A)(I)
									} catch (A) {
										if (Og(g), A !== A + 0 && "longjmp" !== A) throw A;
										Pg(1, 0)
									}
								}

								function $g(A, I, g, B) {
									var C = jg();
									try {
										iA.get(A)(I, g, B)
									} catch (A) {
										if (Og(C), A !== A + 0 && "longjmp" !== A) throw A;
										Pg(1, 0)
									}
								}

								function AB(A, I, g) {
									var B = jg();
									try {
										iA.get(A)(I, g)
									} catch (A) {
										if (Og(B), A !== A + 0 && "longjmp" !== A) throw A;
										Pg(1, 0)
									}
								}

								function IB(A, I, g) {
									var B = jg();
									try {
										return iA.get(A)(I, g)
									} catch (A) {
										if (Og(B), A !== A + 0 && "longjmp" !== A) throw A;
										Pg(1, 0)
									}
								}

								function gB(A, I, g, B, C) {
									var Q = jg();
									try {
										iA.get(A)(I, g, B, C)
									} catch (A) {
										if (Og(Q), A !== A + 0 && "longjmp" !== A) throw A;
										Pg(1, 0)
									}
								}

								function BB(A, I, g, B) {
									var C = jg();
									try {
										return iA.get(A)(I, g, B)
									} catch (A) {
										if (Og(C), A !== A + 0 && "longjmp" !== A) throw A;
										Pg(1, 0)
									}
								}

								function CB(A) {
									this.name = "ExitStatus", this.message = "Program terminated with exit(" + A + ")", this.status = A
								}

								function QB(g) {
									function B() {
										fg || (fg = !0, A.calledRun = !0, Y || (sA(), I(A), A.onRuntimeInitialized && A.onRuntimeInitialized(), eA()))
									}
									g = g || E, wA > 0 || (tA(), wA > 0 || (A.setStatus ? (A.setStatus("Running..."), setTimeout((function () {
										setTimeout((function () {
											A.setStatus("")
										}), 1), B()
									}), 1)) : B()))
								}

								function EB(I, g) {
									g && HA() && 0 === I || (HA() || (A.onExit && A.onExit(I), Y = !0), o(I, new CB(I)))
								}
								if (A.dynCall_jiji = function () {
										return (A.dynCall_jiji = A.asm.ba).apply(null, arguments)
									}, A.dynCall_viijii = function () {
										return (A.dynCall_viijii = A.asm.ca).apply(null, arguments)
									}, A.dynCall_iiiiij = function () {
										return (A.dynCall_iiiiij = A.asm.da).apply(null, arguments)
									}, A.dynCall_iiiiijj = function () {
										return (A.dynCall_iiiiijj = A.asm.ea).apply(null, arguments)
									}, A.dynCall_iiiiiijj = function () {
										return (A.dynCall_iiiiiijj = A.asm.fa).apply(null, arguments)
									}, A.FS = PA, yA = function A() {
										fg || QB(), fg || (yA = A)
									}, A.run = QB, A.preInit)
									for ("function" == typeof A.preInit && (A.preInit = [A.preInit]); A.preInit.length > 0;) A.preInit.pop()();
								return QB(), A.ready
							});
							const s = t;
							var e = g(669),
								h = g.n(e),
								r = function () {
									function A() {
										C(this, A)
									}
									var g;
									return E(A, null, [{
										key: "fetchRemoteData",
										value: (g = I(o().mark((function A(I) {
											var g;
											return o().wrap((function (A) {
												for (;;) switch (A.prev = A.next) {
													case 0:
														return A.prev = 0, A.next = 3, h().get(I, {
															responseType: "arraybuffer"
														});
													case 3:
														return g = A.sent, A.abrupt("return", new Uint8Array(g.data));
													case 7:
														throw A.prev = 7, A.t0 = A.catch(0), A.t0;
													case 10:
													case "end":
														return A.stop()
												}
											}), A, null, [
												[0, 7]
											])
										}))), function (A) {
											return g.apply(this, arguments)
										})
									}, {
										key: "string2Uint8Data",
										value: function (A) {
											for (var I = new Uint8Array(A.length), g = 0; g < I.length; g++) I[g] = 255 & A.charCodeAt(g);
											return I
										}
									}, {
										key: "uint8Data2String",
										value: function (A) {
											return String.fromCharCode.apply(String, A)
										}
									}, {
										key: "parseMultiFile",
										value: function (I) {
											var g = A.uint8Data2String(I).split("\n"),
												B = [],
												C = 0;
											return g.forEach((function (A) {
												if ((A = A.trim()) && !A.startsWith("#")) switch (C) {
													case 0:
														return void(C = 1);
													case 1:
														A.match(/^\d+$/) || B.push(A);
													case 2:
													case 3:
													case 4:
														return void C++;
													case 5:
														return void(C = 1)
												}
											})), B
										}
									}]), A
								}(),
								G = function () {
									function A() {
										C(this, A), this.instance, this.markerCount = 0, this.multiMarkerCount = 0, this.cameraCount = 0, this.version = "0.1.3", console.info("ARToolkit ", this.version)
									}
									var B, Q, i, a, D;
									return E(A, [{
										key: "init",
										value: (D = I(o().mark((function A() {
											var I;
											return o().wrap((function (A) {
												for (;;) switch (A.prev = A.next) {
													case 0:
														return A.next = 2, new Promise((function (A) {
															s({
																onRuntimeInitialized: function () {
																	A({
																		instance: this
																	})
																}
															})
														}));
													case 2:
														return I = A.sent, this.instance = I.instance, this._decorate(), ("undefined" != typeof window ? window : g.g).artoolkit = this, A.abrupt("return", this);
													case 8:
													case "end":
														return A.stop()
												}
											}), A, this)
										}))), function () {
											return D.apply(this, arguments)
										})
									}, {
										key: "_decorate",
										value: function () {
											var A = this;
											for (var I in ["setup", "teardown", "setupAR2", "setLogLevel", "getLogLevel", "setDebugMode", "getDebugMode", "getProcessingImage", "setMarkerInfoDir", "setMarkerInfoVertex", "getTransMatSquare", "getTransMatSquareCont", "getTransMatMultiSquare", "getTransMatMultiSquareRobust", "getMultiMarkerNum", "getMultiMarkerCount", "detectMarker", "getMarkerNum", "detectNFTMarker", "getNFTMarker", "getMarker", "getMultiEachMarker", "setProjectionNearPlane", "getProjectionNearPlane", "setProjectionFarPlane", "getProjectionFarPlane", "setThresholdMode", "getThresholdMode", "setThreshold", "getThreshold", "setPatternDetectionMode", "getPatternDetectionMode", "setMatrixCodeType", "getMatrixCodeType", "setLabelingMode", "getLabelingMode", "setPattRatio", "getPattRatio", "setImageProcMode", "getImageProcMode"].forEach((function (I) {
													A[I] = A.instance[I]
												})), this.instance) I.match(/^AR/) && (this[I] = this.instance[I])
										}
									}, {
										key: "loadCamera",
										value: (a = I(o().mark((function A(I) {
											var g, B;
											return o().wrap((function (A) {
												for (;;) switch (A.prev = A.next) {
													case 0:
														if (g = "/camera_param_" + this.cameraCount++, !(I instanceof Uint8Array)) {
															A.next = 5;
															break
														}
														B = I, A.next = 14;
														break;
													case 5:
														return A.prev = 5, A.next = 8, r.fetchRemoteData(I);
													case 8:
														B = A.sent, A.next = 14;
														break;
													case 11:
														throw A.prev = 11, A.t0 = A.catch(5), A.t0;
													case 14:
														return this._storeDataFile(B, g), A.abrupt("return", this.instance._loadCamera(g));
													case 16:
													case "end":
														return A.stop()
												}
											}), A, this, [
												[5, 11]
											])
										}))), function (A) {
											return a.apply(this, arguments)
										})
									}, {
										key: "addMarker",
										value: (i = I(o().mark((function A(I, g) {
											var B, C;
											return o().wrap((function (A) {
												for (;;) switch (A.prev = A.next) {
													case 0:
														if (B = "/marker_" + this.markerCount++, -1 === g.indexOf("\n")) {
															A.next = 5;
															break
														}
														C = r.string2Uint8Data(g), A.next = 14;
														break;
													case 5:
														return A.prev = 5, A.next = 8, r.fetchRemoteData(g);
													case 8:
														C = A.sent, A.next = 14;
														break;
													case 11:
														throw A.prev = 11, A.t0 = A.catch(5), A.t0;
													case 14:
														return this._storeDataFile(C, B), A.abrupt("return", this.instance._addMarker(I, B));
													case 16:
													case "end":
														return A.stop()
												}
											}), A, this, [
												[5, 11]
											])
										}))), function (A, I) {
											return i.apply(this, arguments)
										})
									}, {
										key: "addMultiMarker",
										value: (Q = I(o().mark((function A(g, B) {
											var C, Q, E, i, a, D, t;
											return o().wrap((function (A) {
												for (;;) switch (A.prev = A.next) {
													case 0:
														return C = "/multi_marker_" + this.multiMarkerCount++, A.next = 3, r.fetchRemoteData(B);
													case 3:
														return Q = A.sent, E = r.parseMultiFile(Q), i = function () {
															var A = I(o().mark((function A(I) {
																var g, C;
																return o().wrap((function (A) {
																	for (;;) switch (A.prev = A.next) {
																		case 0:
																			return g = new URL(I, B).toString(), A.next = 3, r.fetchRemoteData(g);
																		case 3:
																			C = A.sent, this._storeDataFile(C, I);
																		case 5:
																		case "end":
																			return A.stop()
																	}
																}), A, this)
															})));
															return function (I) {
																return A.apply(this, arguments)
															}
														}(), a = E.map(i, this), A.next = 9, Promise.all(a);
													case 9:
														return D = this.instance._addMultiMarker(g, C), t = this.instance.getMultiMarkerNum(g, D), A.abrupt("return", [D, t]);
													case 12:
													case "end":
														return A.stop()
												}
											}), A, this)
										}))), function (A, I) {
											return Q.apply(this, arguments)
										})
									}, {
										key: "addNFTMarker",
										value: (B = I(o().mark((function A(g, B) {
											var C, Q, E, i;
											return o().wrap((function (A) {
												for (;;) switch (A.prev = A.next) {
													case 0:
														return C = "/markerNFT_" + this.markerCount++, Q = ["fset", "iset", "fset3"], E = function () {
															var A = I(o().mark((function A(I) {
																var g, Q, E;
																return o().wrap((function (A) {
																	for (;;) switch (A.prev = A.next) {
																		case 0:
																			return g = B + "." + I, Q = C + "." + I, A.next = 4, r.fetchRemoteData(g);
																		case 4:
																			E = A.sent, this._storeDataFile(E, Q);
																		case 6:
																		case "end":
																			return A.stop()
																	}
																}), A, this)
															})));
															return function (I) {
																return A.apply(this, arguments)
															}
														}(), i = Q.map(E, this), A.next = 6, Promise.all(i);
													case 6:
														return A.abrupt("return", this.instance._addNFTMarker(g, C));
													case 7:
													case "end":
														return A.stop()
												}
											}), A, this)
										}))), function (A, I) {
											return B.apply(this, arguments)
										})
									}, {
										key: "_storeDataFile",
										value: function (A, I) {
											this.instance.FS.writeFile(I, A, {
												encoding: "binary"
											})
										}
									}], [{
										key: "UNKNOWN_MARKER",
										get: function () {
											return -1
										}
									}, {
										key: "PATTERN_MARKER",
										get: function () {
											return 0
										}
									}, {
										key: "BARCODE_MARKER",
										get: function () {
											return 1
										}
									}, {
										key: "NFT_MARKER",
										get: function () {
											return 2
										}
									}]), A
								}();

							function w(A, I, g) {
								return I in A ? Object.defineProperty(A, I, {
									value: g,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : A[I] = g, A
							}

							function n(A, I) {
								var g = Object.keys(A);
								if (Object.getOwnPropertySymbols) {
									var B = Object.getOwnPropertySymbols(A);
									I && (B = B.filter((function (I) {
										return Object.getOwnPropertyDescriptor(A, I).enumerable
									}))), g.push.apply(g, B)
								}
								return g
							}

							function y(A) {
								for (var I = 1; I < arguments.length; I++) {
									var g = null != arguments[I] ? arguments[I] : {};
									I % 2 ? n(Object(g), !0).forEach((function (I) {
										w(A, I, g[I])
									})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(g)) : n(Object(g)).forEach((function (I) {
										Object.defineProperty(A, I, Object.getOwnPropertyDescriptor(g, I))
									}))
								}
								return A
							}
							var R = function () {
								function A(I, g, B, Q) {
									C(this, A), this.options = y(y({}, {
										canvas: null,
										orientation: "landscape"
									}), Q), this.id = -1, this.width = I, this.height = g, this.image, this.orientation = this.options.orientation, this.cameraParam = B, this.cameraId = -1, this.cameraLoaded = !1, this.artoolkit, this.listeners = {}, this.defaultMarkerWidth = 1, this.patternMarkers = {}, this.barcodeMarkers = {}, this.nftMarkers = {}, this.transform_mat = new Float32Array(16), this.transformGL_RH = new Float64Array(16), this.videoWidth = I, this.videoHeight = g, this.videoSize = this.videoWidth * this.videoHeight, this.framepointer = null, this.framesize = null, this.dataHeap = null, this.videoLuma = null, this.camera_mat = null, this.marker_transform_mat = null, this.videoLumaPointer = null, this.options.canvas ? this.canvas = this.options.canvas : "undefined" != typeof document && (this.canvas = document.createElement("canvas")), this.canvas ? (this.canvas.width = I, this.canvas.height = g, this.ctx = this.canvas.getContext("2d")) : console.warn("No canvas available"), this.nftMarkerFound = !1, this.nftMarkerFoundTime = !1, this.nftMarkerCount = 0, this._bwpointer = !1
								}
								var g, B, Q, i, a, D;
								return E(A, [{
									key: "dispose",
									value: function () {
										for (var A in this.cameraId = -1, this.cameraParam = "", this.cameraLoaded = !1, this.id > -1 && this.artoolkit.teardown(this.id), this.image && this.image.srcObject, this) this[A] = null
									}
								}, {
									key: "process",
									value: function (A) {
										var I = this.detectMarker(A);
										0 != I && console.error("[ARController]", "detectMarker error:", I);
										var g, B, C = this.getMarkerNum();
										for (g in this.patternMarkers)(B = this.patternMarkers[g]).inPrevious = B.inCurrent, B.inCurrent = !1;
										for (g in this.barcodeMarkers)(B = this.barcodeMarkers[g]).inPrevious = B.inCurrent, B.inCurrent = !1;
										for (g in this.nftMarkers)(B = this.nftMarkers[g]).inPrevious = B.inCurrent, B.inCurrent = !1;
										for (var Q = 0; Q < C; Q++) {
											var E = this.getMarker(Q),
												i = G.UNKNOWN_MARKER,
												o = this.trackPatternMarkerId(-1);
											E.idPatt > -1 && (E.id === E.idPatt || -1 === E.idMatrix) ? (o = this.trackPatternMarkerId(E.idPatt), i = G.PATTERN_MARKER, E.dir !== E.dirPatt && this.setMarkerInfoDir(Q, E.dirPatt)) : E.idMatrix > -1 && (o = this.trackBarcodeMarkerId(E.idMatrix), i = G.BARCODE_MARKER, E.dir !== E.dirMatrix && this.setMarkerInfoDir(Q, E.dirMatrix)), i !== G.UNKNOWN_MARKER && o.inPrevious ? this.getTransMatSquareCont(Q, o.markerWidth, o.matrix, o.matrix) : this.getTransMatSquare(Q, o.markerWidth, o.matrix), o.inCurrent = !0, this.transMatToGLMat(o.matrix, this.transform_mat), this.transformGL_RH = this.arglCameraViewRHf(this.transform_mat), this.dispatchEvent({
												name: "getMarker",
												target: this,
												data: {
													index: Q,
													type: i,
													marker: E,
													matrix: this.transform_mat,
													matrixGL_RH: this.transformGL_RH
												}
											})
										}
										var a = this.nftMarkerCount;
										this.detectNFTMarker();
										for (var D = 0; D < a; D++) {
											var t = this.getNFTMarker(D),
												s = G.NFT_MARKER;
											if (t.found) {
												this.nftMarkerFound = D, this.nftMarkerFoundTime = Date.now();
												var e = this.trackNFTMarkerId(D);
												e.matrix.set(t.pose), e.inCurrent = !0, this.transMatToGLMat(e.matrix, this.transform_mat), this.transformGL_RH = this.arglCameraViewRHf(this.transform_mat), this.dispatchEvent({
													name: "getNFTMarker",
													target: this,
													data: {
														index: D,
														type: s,
														marker: t,
														matrix: this.transform_mat,
														matrixGL_RH: this.transformGL_RH
													}
												})
											} else self.nftMarkerFound === D && Date.now() - this.nftMarkerFoundTime > 200 && (this.nftMarkerFound = !1, this.dispatchEvent({
												name: "lostNFTMarker",
												target: this,
												data: {
													index: D,
													type: s,
													marker: t,
													matrix: this.transform_mat,
													matrixGL_RH: this.transformGL_RH
												}
											}))
										}
										for (var h = this.getMultiMarkerCount(), r = 0; r < h; r++) {
											var w = this.getMultiMarkerPatternCount(r),
												n = !1;
											this.artoolkit.getTransMatMultiSquareRobust(this.id, r), this.transMatToGLMat(this.marker_transform_mat, this.transform_mat), this.transformGL_RH = this.arglCameraViewRHf(this.transform_mat);
											for (var y = 0; y < w; y++)
												if ((F = this.getMultiEachMarker(r, y)).visible >= 0) {
													n = !0, this.dispatchEvent({
														name: "getMultiMarker",
														target: this,
														data: {
															multiMarkerId: r,
															matrix: this.transform_mat,
															matrixGL_RH: this.transformGL_RH
														}
													});
													break
												}
											if (n)
												for (var R = 0; R < w; R++) {
													var F = this.getMultiEachMarker(r, R);
													this.transMatToGLMat(this.marker_transform_mat, this.transform_mat), this.transformGL_RH = this.arglCameraViewRHf(this.transform_mat), this.dispatchEvent({
														name: "getMultiMarkerSub",
														target: this,
														data: {
															multiMarkerId: r,
															markerIndex: R,
															marker: F,
															matrix: this.transform_mat,
															matrixGL_RH: this.transformGL_RH
														}
													})
												}
										}
										this._bwpointer && this.debugDraw()
									}
								}, {
									key: "detectNFTMarker",
									value: function () {
										this.artoolkit.detectNFTMarker(this.id)
									}
								}, {
									key: "trackPatternMarkerId",
									value: function (A, I) {
										var g = this.patternMarkers[A];
										return g || (this.patternMarkers[A] = g = {
											inPrevious: !1,
											inCurrent: !1,
											matrix: new Float64Array(12),
											matrixGL_RH: new Float64Array(12),
											markerWidth: I || this.defaultMarkerWidth
										}), I && (g.markerWidth = I), g
									}
								}, {
									key: "trackBarcodeMarkerId",
									value: function (A, I) {
										var g = this.barcodeMarkers[A];
										return g || (this.barcodeMarkers[A] = g = {
											inPrevious: !1,
											inCurrent: !1,
											matrix: new Float64Array(12),
											matrixGL_RH: new Float64Array(12),
											markerWidth: I || this.defaultMarkerWidth
										}), I && (g.markerWidth = I), g
									}
								}, {
									key: "trackNFTMarkerId",
									value: function (A, I) {
										var g = this.nftMarkers[A];
										return g || (this.nftMarkers[A] = g = {
											inPrevious: !1,
											inCurrent: !1,
											matrix: new Float64Array(12),
											matrixGL_RH: new Float64Array(12),
											markerWidth: I || this.defaultMarkerWidth
										}), I && (g.markerWidth = I), g
									}
								}, {
									key: "getMultiMarkerCount",
									value: function () {
										return this.artoolkit.getMultiMarkerCount(this.id)
									}
								}, {
									key: "getMultiMarkerPatternCount",
									value: function (A) {
										return this.artoolkit.getMultiMarkerNum(this.id, A)
									}
								}, {
									key: "addEventListener",
									value: function (A, I) {
										this.listeners[A] || (this.listeners[A] = []), this.listeners[A].push(I)
									}
								}, {
									key: "removeEventListener",
									value: function (A, I) {
										if (this.listeners[A]) {
											var g = this.listeners[A].indexOf(I);
											g > -1 && this.listeners[A].splice(g, 1)
										}
									}
								}, {
									key: "dispatchEvent",
									value: function (A) {
										var I = this.listeners[A.name];
										if (I)
											for (var g = 0; g < I.length; g++) I[g].call(this, A)
									}
								}, {
									key: "debugSetup",
									value: function () {
										"undefined" != typeof document ? (document.body.appendChild(this.canvas), this.setDebugMode(!0), this._bwpointer = this.getProcessingImage()) : console.log("debugSetup() currently only supports Browser environments")
									}
								}, {
									key: "debugDraw",
									value: function () {
										for (var A = new Uint8ClampedArray(this.artoolkit.instance.HEAPU8.buffer, this._bwpointer, this.framesize), I = new ImageData(new Uint8ClampedArray(this.canvas.width * this.canvas.height * 4), this.canvas.width, this.canvas.height), g = 0, B = 0; g < A.length; g++, B += 4) {
											var C = A[g];
											I.data[B + 0] = C, I.data[B + 1] = C, I.data[B + 2] = C, I.data[B + 3] = 255
										}
										this.ctx.putImageData(I, 0, 0);
										for (var Q = this.getMarkerNum(), E = 0; E < Q; E++) this.drawDebugMarker(this.getMarker(E))
									}
								}, {
									key: "drawDebugMarker",
									value: function (A) {
										var I = A.vertex,
											g = A.pos,
											B = this.ctx;
										B.lineWidth = 5, B.strokeStyle = "red", B.beginPath(), B.moveTo(I[0][0], I[0][1]), B.lineTo(I[1][0], I[1][1]), B.stroke(), B.beginPath(), B.moveTo(I[2][0], I[2][1]), B.lineTo(I[3][0], I[3][1]), B.stroke(), B.strokeStyle = "green", B.beginPath(), B.lineTo(I[1][0], I[1][1]), B.lineTo(I[2][0], I[2][1]), B.stroke(), B.beginPath(), B.moveTo(I[3][0], I[3][1]), B.lineTo(I[0][0], I[0][1]), B.stroke(), B.beginPath(), B.arc(g[0], g[1], 8, 0, 2 * Math.PI), B.fillStyle = "red", B.fill()
									}
								}, {
									key: "loadMarker",
									value: (D = I(o().mark((function A(I) {
										return o().wrap((function (A) {
											for (;;) switch (A.prev = A.next) {
												case 0:
													return A.next = 2, this.artoolkit.addMarker(this.id, I);
												case 2:
													return A.abrupt("return", A.sent);
												case 3:
												case "end":
													return A.stop()
											}
										}), A, this)
									}))), function (A) {
										return D.apply(this, arguments)
									})
								}, {
									key: "loadMultiMarker",
									value: (a = I(o().mark((function A(I) {
										return o().wrap((function (A) {
											for (;;) switch (A.prev = A.next) {
												case 0:
													return A.next = 2, this.artoolkit.addMultiMarker(this.id, I);
												case 2:
													return A.abrupt("return", A.sent);
												case 3:
												case "end":
													return A.stop()
											}
										}), A, this)
									}))), function (A) {
										return a.apply(this, arguments)
									})
								}, {
									key: "loadNFTMarker",
									value: (i = I(o().mark((function A(I) {
										var g;
										return o().wrap((function (A) {
											for (;;) switch (A.prev = A.next) {
												case 0:
													return A.next = 2, this.artoolkit.addNFTMarker(this.id, I);
												case 2:
													return g = A.sent, this.nftMarkerCount = g + 1, A.abrupt("return", g);
												case 5:
												case "end":
													return A.stop()
											}
										}), A, this)
									}))), function (A) {
										return i.apply(this, arguments)
									})
								}, {
									key: "getTransMatSquare",
									value: function (A, I, g) {
										return this.artoolkit.getTransMatSquare(this.id, A, I), g.set(this.marker_transform_mat), g
									}
								}, {
									key: "getTransMatSquareCont",
									value: function (A, I, g, B) {
										return this.marker_transform_mat.set(g), this.artoolkit.getTransMatSquareCont(this.id, A, I), B.set(this.marker_transform_mat), B
									}
								}, {
									key: "getTransMatMultiSquare",
									value: function (A, I) {
										return this.artoolkit.getTransMatMultiSquare(this.id, A), I.set(this.marker_transform_mat), I
									}
								}, {
									key: "getTransMatMultiSquareRobust",
									value: function (A, I) {
										return this.artoolkit.getTransMatMultiSquare(this.id, A), I.set(this.marker_transform_mat), I
									}
								}, {
									key: "transMatToGLMat",
									value: function (A, I, g) {
										return null == I && (I = new Float64Array(16)), I[0] = A[0], I[4] = A[1], I[8] = A[2], I[12] = A[3], I[1] = A[4], I[5] = A[5], I[9] = A[6], I[13] = A[7], I[2] = A[8], I[6] = A[9], I[10] = A[10], I[14] = A[11], I[3] = 0, I[7] = 0, I[11] = 0, I[15] = 1, null != g && 0 !== g && (I[12] *= g, I[13] *= g, I[14] *= g), I
									}
								}, {
									key: "arglCameraViewRHf",
									value: function (A, I, g) {
										var B;
										return (B = null == I ? new Float64Array(16) : I)[0] = A[0], B[4] = A[4], B[8] = A[8], B[12] = A[12], B[1] = -A[1], B[5] = -A[5], B[9] = -A[9], B[13] = -A[13], B[2] = -A[2], B[6] = -A[6], B[10] = -A[10], B[14] = -A[14], B[3] = 0, B[7] = 0, B[11] = 0, B[15] = 1, null != g && 0 !== g && (B[12] *= g, B[13] *= g, B[14] *= g), B
									}
								}, {
									key: "detectMarker",
									value: function (A) {
										return this._copyImageToHeap(A) ? this.artoolkit.detectMarker(this.id) : -99
									}
								}, {
									key: "getMarkerNum",
									value: function () {
										return this.artoolkit.getMarkerNum(this.id)
									}
								}, {
									key: "getMarker",
									value: function (A) {
										if (0 === this.artoolkit.getMarker(this.id, A)) return this.artoolkit.markerInfo
									}
								}, {
									key: "getNFTMarker",
									value: function (A) {
										if (0 === this.artoolkit.getNFTMarker(this.id, A)) return this.artoolkit.NFTMarkerInfo
									}
								}, {
									key: "setMarkerInfoVertex",
									value: function (A, I) {
										for (var g = 0; g < I.length; g++) this.marker_transform_mat[2 * g + 0] = I[g][0], this.marker_transform_mat[2 * g + 1] = I[g][1];
										return this.artoolkit.setMarkerInfoVertex(this.id, A)
									}
								}, {
									key: "cloneMarkerInfo",
									value: function (A) {
										return JSON.parse(JSON.stringify(A))
									}
								}, {
									key: "getMultiEachMarker",
									value: function (A, I) {
										if (0 === this.artoolkit.getMultiEachMarker(this.id, A, I)) return this.artoolkit.multiEachMarkerInfo
									}
								}, {
									key: "getTransformationMatrix",
									value: function () {
										return this.transform_mat
									}
								}, {
									key: "getCameraMatrix",
									value: function () {
										return this.camera_mat
									}
								}, {
									key: "getMarkerTransformationMatrix",
									value: function () {
										return this.marker_transform_mat
									}
								}, {
									key: "setDebugMode",
									value: function (A) {
										return this.artoolkit.setDebugMode(this.id, A)
									}
								}, {
									key: "getDebugMode",
									value: function () {
										return this.artoolkit.getDebugMode(this.id)
									}
								}, {
									key: "getProcessingImage",
									value: function () {
										return this.artoolkit.getProcessingImage(this.id)
									}
								}, {
									key: "setLogLevel",
									value: function (A) {
										return this.artoolkit.setLogLevel(A)
									}
								}, {
									key: "getLogLevel",
									value: function () {
										return this.artoolkit.getLogLevel()
									}
								}, {
									key: "setMarkerInfoDir",
									value: function (A, I) {
										return this.artoolkit.setMarkerInfoDir(this.id, A, I)
									}
								}, {
									key: "setProjectionNearPlane",
									value: function (A) {
										return this.artoolkit.setProjectionNearPlane(this.id, A)
									}
								}, {
									key: "getProjectionNearPlane",
									value: function () {
										return this.artoolkit.getProjectionNearPlane(this.id)
									}
								}, {
									key: "setProjectionFarPlane",
									value: function (A) {
										return this.artoolkit.setProjectionFarPlane(this.id, A)
									}
								}, {
									key: "getProjectionFarPlane",
									value: function () {
										return this.artoolkit.getProjectionFarPlane(this.id)
									}
								}, {
									key: "setThresholdMode",
									value: function (A) {
										return this.artoolkit.setThresholdMode(this.id, A)
									}
								}, {
									key: "getThresholdMode",
									value: function () {
										return this.artoolkit.getThresholdMode(this.id)
									}
								}, {
									key: "setThreshold",
									value: function (A) {
										return this.artoolkit.setThreshold(this.id, A)
									}
								}, {
									key: "getThreshold",
									value: function () {
										return this.artoolkit.getThreshold(this.id)
									}
								}, {
									key: "setPatternDetectionMode",
									value: function (A) {
										return this.artoolkit.setPatternDetectionMode(this.id, A)
									}
								}, {
									key: "getPatternDetectionMode",
									value: function () {
										return this.artoolkit.getPatternDetectionMode(this.id)
									}
								}, {
									key: "setMatrixCodeType",
									value: function (A) {
										return this.artoolkit.setMatrixCodeType(this.id, A)
									}
								}, {
									key: "getMatrixCodeType",
									value: function () {
										return this.artoolkit.getMatrixCodeType(this.id)
									}
								}, {
									key: "setLabelingMode",
									value: function (A) {
										return this.artoolkit.setLabelingMode(this.id, A)
									}
								}, {
									key: "getLabelingMode",
									value: function () {
										return this.artoolkit.getLabelingMode(this.id)
									}
								}, {
									key: "setPattRatio",
									value: function (A) {
										return this.artoolkit.setPattRatio(this.id, A)
									}
								}, {
									key: "getPattRatio",
									value: function () {
										return this.artoolkit.getPattRatio(this.id)
									}
								}, {
									key: "setImageProcMode",
									value: function (A) {
										return this.artoolkit.setImageProcMode(this.id, A)
									}
								}, {
									key: "getImageProcMode",
									value: function () {
										return this.artoolkit.getImageProcMode(this.id)
									}
								}, {
									key: "_initialize",
									value: (Q = I(o().mark((function A() {
										var I, g = this;
										return o().wrap((function (A) {
											for (;;) switch (A.prev = A.next) {
												case 0:
													return A.next = 2, (new G).init();
												case 2:
													return this.artoolkit = A.sent, console.log("[ARController]", "ARToolkit initialized"), A.next = 6, this.artoolkit.loadCamera(this.cameraParam);
												case 6:
													return this.cameraId = A.sent, console.log("[ARController]", "Camera params loaded with ID", this.cameraId), this.id = this.artoolkit.setup(this.width, this.height, this.cameraId), console.log("[ARController]", "Got ID from setup", this.id), this._initNFT(), I = artoolkit.frameMalloc, this.framepointer = I.framepointer, this.framesize = I.framesize, this.videoLumaPointer = I.videoLumaPointer, this.dataHeap = new Uint8Array(this.artoolkit.instance.HEAPU8.buffer, this.framepointer, this.framesize), this.videoLuma = new Uint8Array(this.artoolkit.instance.HEAPU8.buffer, this.videoLumaPointer, this.framesize / 4), this.camera_mat = new Float64Array(this.artoolkit.instance.HEAPU8.buffer, I.camera, 16), this.marker_transform_mat = new Float64Array(this.artoolkit.instance.HEAPU8.buffer, I.transform, 12), this.setProjectionNearPlane(.1), this.setProjectionFarPlane(1e3), setTimeout((function () {
														g.dispatchEvent({
															name: "load",
															target: g
														})
													}), 1), A.abrupt("return", this);
												case 23:
												case "end":
													return A.stop()
											}
										}), A, this)
									}))), function () {
										return Q.apply(this, arguments)
									})
								}, {
									key: "_initNFT",
									value: function () {
										this.artoolkit.setupAR2(this.id)
									}
								}, {
									key: "_copyImageToHeap",
									value: function (A) {
										var I;
										if (A || (A = this.image), A.data) I = A.data;
										else {
											if (this.ctx.save(), "portrait" === this.orientation) {
												this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
												var g = this.canvas.height / this.canvas.width,
													B = this.canvas.width * g,
													C = this.canvas.height * g,
													Q = (this.canvas.width - C) / 2;
												this.ctx.drawImage(A, Q, 0, C, B)
											} else this.ctx.drawImage(A, 0, 0, this.canvas.width, this.canvas.height);
											this.ctx.restore(), I = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data
										}
										if (this.videoLuma)
											for (var E = 0, i = 0; i < this.videoSize; i++) {
												var o = I[E + 0],
													a = I[E + 1],
													D = I[E + 2];
												this.videoLuma[i] = o + o + o + D + a + a + a + a >> 3, E += 4
											}
										return !!this.dataHeap && (this.dataHeap.set(I), !0)
									}
								}], [{
									key: "initWithDimensions",
									value: (B = I(o().mark((function I(g, B, C, Q) {
										var E;
										return o().wrap((function (I) {
											for (;;) switch (I.prev = I.next) {
												case 0:
													return E = new A(g, B, C, Q), I.next = 3, E._initialize();
												case 3:
													return I.abrupt("return", I.sent);
												case 4:
												case "end":
													return I.stop()
											}
										}), I)
									}))), function (A, I, g, C) {
										return B.apply(this, arguments)
									})
								}, {
									key: "initWithImage",
									value: (g = I(o().mark((function I(g, B, C) {
										var Q, E, i;
										return o().wrap((function (I) {
											for (;;) switch (I.prev = I.next) {
												case 0:
													return Q = g.videoWidth || g.width, E = g.videoHeight || g.height, I.next = 4, A.initWithDimensions(Q, E, B, C);
												case 4:
													return (i = I.sent).image = g, I.abrupt("return", i);
												case 7:
												case "end":
													return I.stop()
											}
										}), I)
									}))), function (A, I, B) {
										return g.apply(this, arguments)
									})
								}]), A
							}();
							const F = {
								ARToolkit: G,
								ARController: R
							}
						})(), B.default
					})()
				},
				477: A => {
					"use strict";
					A.exports = function (A, I, g, B) {
						var C = self || window;
						try {
							try {
								var Q;
								try {
									Q = new C.Blob([A])
								} catch (I) {
									(Q = new(C.BlobBuilder || C.WebKitBlobBuilder || C.MozBlobBuilder || C.MSBlobBuilder)).append(A), Q = Q.getBlob()
								}
								var E = C.URL || C.webkitURL,
									i = E.createObjectURL(Q),
									o = new C[I](i, g);
								return E.revokeObjectURL(i), o
							} catch (B) {
								return new C[I]("data:application/javascript,".concat(encodeURIComponent(A)), g)
							}
						} catch (A) {
							if (!B) throw Error("Inline worker is not supported");
							return new C[I](B, g)
						}
					}
				},
				223: I => {
					"use strict";
					I.exports = A
				},
				381: A => {
					"use strict";
					A.exports = I
				}
			},
			B = {};

		function C(A) {
			var I = B[A];
			if (void 0 !== I) return I.exports;
			var Q = B[A] = {
				exports: {}
			};
			return g[A].call(Q.exports, Q, Q.exports, C), Q.exports
		}
		C.n = A => {
			var I = A && A.__esModule ? () => A.default : () => A;
			return C.d(I, {
				a: I
			}), I
		}, C.d = (A, I) => {
			for (var g in I) C.o(I, g) && !C.o(A, g) && Object.defineProperty(A, g, {
				enumerable: !0,
				get: I[g]
			})
		}, C.o = (A, I) => Object.prototype.hasOwnProperty.call(A, I), C.r = A => {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(A, "__esModule", {
				value: !0
			})
		};
		var Q = {};
		return (() => {
			"use strict";
			C.r(Q);
			var A = C(223),
				I = C(381);
			const g = function (A) {
				this.id = g.id++, this.object3d = A, this.object3d.matrixAutoUpdate = !1, this.object3d.visible = !1
			};
			g.id = 0, g.prototype = Object.create(I.EventDispatcher.prototype), g.prototype.update = function () {
				console.assert(!1, "you need to implement your own update")
			}, g.prototype.name = function () {
				return console.assert(!1, "you need to implement your own .name()"), "Not yet implemented - name()"
			};
			const B = g;
			var E = C(477),
				i = C.n(E);

			function o() {
			}
			var a = C(799),
				D = C.n(a);
			const {
				ARToolkit: t
			} = D(), s = function (A, I, g) {
				var C = this;
				B.call(this, I), this.context = A, this.parameters = {
					size: 1,
					type: "unknown",
					patternUrl: null,
					barcodeValue: null,
					descriptorsUrl: null,
					changeMatrixMode: "modelViewMatrix",
					minConfidence: .6,
					smooth: !1,
					smoothCount: 5,
					smoothTolerance: .01,
					smoothThreshold: 2
				};
				var Q = ["pattern", "barcode", "nft", "unknown"];
				console.assert(-1 !== Q.indexOf(this.parameters.type), "illegal value", this.parameters.type), Q = ["modelViewMatrix", "cameraTransformMatrix"], console.assert(-1 !== Q.indexOf(this.parameters.changeMatrixMode), "illegal value", this.parameters.changeMatrixMode), this.object3d = I, this.object3d.matrixAutoUpdate = !1, this.object3d.visible = !1,
					function (A) {
						if (void 0 !== A)
							for (var I in A) {
								var g = A[I];
								void 0 !== g ? void 0 !== C.parameters[I] ? C.parameters[I] = g : console.warn("ArMarkerControls: '" + I + "' is not a property of this material.") : console.warn("ArMarkerControls: '" + I + "' parameter is undefined.")
							}
					}(g), this.parameters.smooth && (this.smoothMatrices = []), A.addMarker(this), "artoolkit" === C.context.parameters.trackingBackend ? this._initArtoolkit() : console.assert(!1)
			};
			(s.prototype = Object.create(B.prototype)).constructor = s, s.prototype.dispose = function () {
				this.context.removeMarker(this)
			}, s.prototype.updateWithModelViewMatrix = function (A) {
				var g = this.object3d;
				if (g.visible = !0, "artoolkit" === this.context.parameters.trackingBackend) {
					var B = (new I.Matrix4).copy(this.context._artoolkitProjectionAxisTransformMatrix);
					B.multiply(A), A.copy(B)
				} else console.assert(!1);
				var C = (new I.Matrix4).makeRotationX(Math.PI / 2);
				A.multiply(C);
				var Q = !1;
				if ("modelViewMatrix" === this.parameters.changeMatrixMode)
					if (this.parameters.smooth) {
						var E, i, o, a, D = 0;
						if (this.smoothMatrices.push(A.elements.slice()), this.smoothMatrices.length < this.parameters.smoothCount + 1) g.matrix.copy(A);
						else {
							for (i in this.smoothMatrices.shift(), a = [], A.elements) {
								for (o in E = 0, this.smoothMatrices) E += this.smoothMatrices[o][i];
								a[i] = E / this.parameters.smoothCount, Math.abs(a[i] - A.elements[i]) >= this.parameters.smoothTolerance && D++
							}
							if (D >= this.parameters.smoothThreshold) {
								for (i in A.elements) A.elements[i] = a[i];
								g.matrix.copy(A), Q = !0
							}
						}
					} else g.matrix.copy(A);
				else "cameraTransformMatrix" === this.parameters.changeMatrixMode ? g.matrix.copy(A).invert() : console.assert(!1);
				return g.matrix.decompose(g.position, g.quaternion, g.scale), this.dispatchEvent({
					type: "markerFound"
				}), Q
			}, s.prototype.name = function () {
				var A = "";
				return A += this.parameters.type, "pattern" === this.parameters.type ? A += " - " + this.parameters.patternUrl.replace(/^.*\//g, "") : "barcode" === this.parameters.type ? A += " - " + this.parameters.barcodeValue : "nft" === this.parameters.type ? A += " - " + this.parameters.descriptorsUrl.replace(/^.*\//g, "") : console.assert(!1, "no .name() implemented for this marker controls"), A
			}, s.prototype._initArtoolkit = function () {
				var A = this,
					g = null,
					B = setInterval((() => {
						var I;
						null !== A.context.arController && (clearInterval(B), B = null, I = A.context.arController, console.assert(null !== I), "pattern" === A.parameters.type ? I.loadMarker(A.parameters.patternUrl).then((function (B) {
							g = B, I.trackPatternMarkerId(g, A.parameters.size)
						})) : "barcode" === A.parameters.type ? (g = A.parameters.barcodeValue, I.trackBarcodeMarkerId(g, A.parameters.size)) : "nft" === A.parameters.type ? function (I, g) {
							var B = new o;
							window.addEventListener("arjs-video-loaded", (function (Q) {
								var E = Q.detail.component,
									i = E.clientWidth,
									o = E.clientHeight,
									a = 320 / Math.max(i, o / 3 * 4);
								const D = i * a,
									s = o * a,
									e = Math.max(D, s / 3 * 4),
									h = Math.max(s, D / 4 * 3),
									r = (e - D) / 2,
									G = (h - s) / 2;
								g.canvas.style.clientWidth = e + "px", g.canvas.style.clientHeight = h + "px", g.canvas.width = e, g.canvas.height = h;
								var w = g.canvas.getContext("2d");
								B.postMessage({
									type: "init",
									pw: e,
									ph: h,
									marker: I,
									param: g.cameraParam
								}), B.onmessage = function (I) {
									if (I && I.data && "endLoading" === I.data.type) {
										var g = document.querySelector(".arjs-loader");
										g && g.remove();
										var Q = new Event("arjs-nft-loaded");
										window.dispatchEvent(Q)
									}
									if (I && I.data && "loaded" === I.data.type) {
										var a = JSON.parse(I.data.proj),
											n = e / D,
											y = h / s;
										a[0] *= n, a[4] *= n, a[8] *= n, a[12] *= n, a[1] *= y, a[5] *= y, a[9] *= y, a[13] *= y,
											function (A, I) {
												var g = [];
												for (var B in I) g[B] = I[B];
												"function" == typeof A.elements.set ? A.elements.set(g) : A.elements = [].slice.call(g)
											}(A.object3d.matrix, a)
									}
									if (I && I.data && "found" === I.data.type) {
										var R = JSON.parse(I.data.matrix);
										C({
											data: {
												type: t.NFT_MARKER,
												matrix: R,
												msg: I.data.type
											}
										}), A.context.arController.showObject = !0
									} else A.context.arController.showObject = !1;
									! function () {
										w.fillStyle = "black", w.fillRect(0, 0, e, h), w.drawImage(E, 0, 0, i, o, r, G, D, s);
										var A = w.getImageData(0, 0, e, h);
										B.postMessage({
											type: "process",
											imagedata: A
										}, [A.data.buffer])
									}()
								}
							}))
						}(A.parameters.descriptorsUrl, I) : "unknown" === A.parameters.type ? g = null : console.log(!1, "invalid marker type", A.parameters.type), I.addEventListener("getMarker", (function (I) {
							if (I.data.type === t.PATTERN_MARKER && "pattern" === A.parameters.type) {
								if (null === g) return;
								I.data.marker.idPatt === g && C(I)
							} else if (I.data.type === t.BARCODE_MARKER && "barcode" === A.parameters.type) {
								if (null === g) return;
								I.data.marker.idMatrix === g && C(I)
							} else I.data.type === t.UNKNOWN_MARKER && "unknown" === A.parameters.type && C(I)
						})))
					}), 20);
				return;

				function C(g) {
					if (!(g.data.type === t.PATTERN_MARKER && g.data.marker.cfPatt < A.parameters.minConfidence || g.data.type === t.BARCODE_MARKER && g.data.marker.cfMatrix < A.parameters.minConfidence)) {
						var B = (new I.Matrix4).fromArray(g.data.matrix);
						A.updateWithModelViewMatrix(B)
					}
				}
			};
			const e = s,
				h = function (A) {
					this.object3d = new I.Group;
					var g = new I.AxesHelper;
					this.object3d.add(g);
					var B = A.id,
						C = document.createElement("canvas");
					C.width = 64, C.height = 64;
					var Q = C.getContext("2d"),
						E = new I.CanvasTexture(C);
					Q.font = "48px monospace", Q.fillStyle = "rgba(192,192,255, 0.5)", Q.fillRect(0, 0, C.width, C.height), Q.fillStyle = "darkblue", Q.fillText(B, C.width / 4, 3 * C.height / 4), E.needsUpdate = !0;
					var i = new I.PlaneGeometry(1, 1),
						o = new I.MeshBasicMaterial({
							map: E,
							transparent: !0
						});
					(g = new I.Mesh(i, o)).rotation.x = -Math.PI / 2, this.object3d.add(g)
				},
				r = function (A, I) {
					var g = this;
					B.call(this, A), this.object3d.visible = !1, this._lastLerpStepAt = null, this._visibleStartedAt = null, this._unvisibleStartedAt = null, I = I || {}, this.parameters = {
							lerpPosition: .8,
							lerpQuaternion: .2,
							lerpScale: .7,
							lerpStepDelay: 1 / 60,
							minVisibleDelay: 0,
							minUnvisibleDelay: .2
						},
						function (A) {
							if (void 0 !== A)
								for (var I in A) {
									var B = A[I];
									void 0 !== B ? void 0 !== g.parameters[I] ? g.parameters[I] = B : console.warn("ArSmoothedControls: '" + I + "' is not a property of this material.") : console.warn("ArSmoothedControls: '" + I + "' parameter is undefined.")
								}
						}(I)
				};
			(r.prototype = Object.create(B.prototype)).constructor = r, r.prototype.update = function (A) {
				var I = this.object3d,
					g = this.parameters,
					B = I.visible,
					C = performance.now() / 1e3;
				if (!1 === A.visible && (this._visibleStartedAt = null), !0 === A.visible && (this._unvisibleStartedAt = null), !0 === A.visible && null === this._visibleStartedAt && (this._visibleStartedAt = C), !1 === A.visible && null === this._unvisibleStartedAt && (this._unvisibleStartedAt = C), !1 === B && !0 === A.visible && C - this._visibleStartedAt >= this.parameters.minVisibleDelay && (I.visible = !0, I.position.copy(A.position), I.quaternion.copy(A.quaternion), I.scale.copy(A.scale)), !0 === B && !1 === A.visible && C - this._unvisibleStartedAt >= this.parameters.minUnvisibleDelay && (I.visible = !1), null === this._lastLerpStepAt) i(), this._lastLerpStepAt = C;
				else
					for (var Q = Math.floor((C - this._lastLerpStepAt) / this.parameters.lerpStepDelay), E = 0; E < Q; E++) i(), this._lastLerpStepAt += this.parameters.lerpStepDelay;
				return this.object3d.updateMatrix(), !1 === B && !0 === I.visible && this.dispatchEvent({
					type: "becameVisible"
				}), void(!0 === B && !1 === I.visible && this.dispatchEvent({
					type: "becameUnVisible"
				}));

				function i() {
					I.position.lerp(A.position, g.lerpPosition), I.quaternion.slerp(A.quaternion, g.lerpQuaternion), I.scale.lerp(A.scale, g.lerpScale)
				}
			};
			const G = r,
				{
					ARToolkit: w
				} = D(),
				n = function (A, I, g) {
					var C = this;
					B.call(this, I), this.context = A, this.parameters = {
						size: 1,
						type: "unknown",
						patternUrl: null,
						barcodeValue: null,
						changeMatrixMode: "modelViewMatrix",
						minConfidence: .6,
						smooth: !1,
						smoothCount: 5,
						smoothTolerance: .01,
						smoothThreshold: 2
					};
					var Q = ["pattern", "barcode", "unknown"];
					console.assert(-1 !== Q.indexOf(this.parameters.type), "illegal value", this.parameters.type), Q = ["modelViewMatrix", "cameraTransformMatrix"], console.assert(-1 !== Q.indexOf(this.parameters.changeMatrixMode), "illegal value", this.parameters.changeMatrixMode), this.object3d = I, this.object3d.matrixAutoUpdate = !1, this.object3d.visible = !1,
						function (A) {
							if (void 0 !== A)
								for (var I in A) {
									var g = A[I];
									void 0 !== g ? void 0 !== C.parameters[I] ? C.parameters[I] = g : console.warn("ArMarkerControls: '" + I + "' is not a property of this material.") : console.warn("ArMarkerControls: '" + I + "' parameter is undefined.")
								}
						}(g), this.parameters.smooth && (this.smoothMatrices = []), A.addMarker(this), "artoolkit" === C.context.parameters.trackingBackend ? this._initArtoolkit() : console.assert(!1)
				};
			(n.prototype = Object.create(B.prototype)).constructor = n, n.prototype.dispose = function () {
				this.context && this.context.arController && this.context.arController.removeEventListener("getMarker", this.onGetMarker), this.context.removeMarker(this), this.object3d = null, this.smoothMatrices = []
			}, n.prototype.updateWithModelViewMatrix = function (A) {
				var g = this.object3d;
				if (g.visible = !0, "artoolkit" === this.context.parameters.trackingBackend) {
					var B = (new I.Matrix4).copy(this.context._artoolkitProjectionAxisTransformMatrix);
					B.multiply(A), A.copy(B)
				} else console.assert(!1);
				var C = (new I.Matrix4).makeRotationX(Math.PI / 2);
				A.multiply(C);
				var Q = !1;
				if ("modelViewMatrix" === this.parameters.changeMatrixMode)
					if (this.parameters.smooth) {
						var E, i, o, a, D = 0;
						if (this.smoothMatrices.push(A.elements.slice()), this.smoothMatrices.length < this.parameters.smoothCount + 1) g.matrix.copy(A);
						else {
							for (i in this.smoothMatrices.shift(), a = [], A.elements) {
								for (o in E = 0, this.smoothMatrices) E += this.smoothMatrices[o][i];
								a[i] = E / this.parameters.smoothCount, Math.abs(a[i] - A.elements[i]) >= this.parameters.smoothTolerance && D++
							}
							if (D >= this.parameters.smoothThreshold) {
								for (i in A.elements) A.elements[i] = a[i];
								g.matrix.copy(A), Q = !0
							}
						}
					} else g.matrix.copy(A);
				else "cameraTransformMatrix" === this.parameters.changeMatrixMode ? g.matrix.copy(A).invert() : console.assert(!1);
				return g.matrix.decompose(g.position, g.quaternion, g.scale), this.dispatchEvent({
					type: "markerFound"
				}), Q
			}, n.prototype.name = function () {
				var A = "";
				return A += this.parameters.type, "pattern" === this.parameters.type ? A += " - " + this.parameters.patternUrl.replace(/^.*\//g, "") : "barcode" === this.parameters.type ? A += " - " + this.parameters.barcodeValue : console.assert(!1, "no .name() implemented for this marker controls"), A
			}, n.prototype._initArtoolkit = function () {
				var A = this,
					g = null,
					B = setInterval((function () {
						var I;
						null !== A.context.arController && (clearInterval(B), B = null, I = A.context.arController, console.assert(null !== I), "pattern" === A.parameters.type ? I.loadMarker(A.parameters.patternUrl).then((function (B) {
							g = B, I.trackPatternMarkerId(g, A.parameters.size)
						})) : "barcode" === A.parameters.type ? (g = A.parameters.barcodeValue, I.trackBarcodeMarkerId(g, A.parameters.size)) : "unknown" === A.parameters.type ? g = null : console.log(!1, "invalid marker type", A.parameters.type), I.addEventListener("getMarker", Q))
					}), 20);
				return;

				function C(g) {
					if (!(g.data.type === w.PATTERN_MARKER && g.data.marker.cfPatt < A.parameters.minConfidence || g.data.type === w.BARCODE_MARKER && g.data.marker.cfMatrix < A.parameters.minConfidence)) {
						var B = (new I.Matrix4).fromArray(g.data.matrix);
						A.updateWithModelViewMatrix(B)
					}
				}

				function Q(I) {
					if (I.data.type === w.PATTERN_MARKER && "pattern" === A.parameters.type) {
						if (null === g) return;
						I.data.marker.idPatt === g && C(I)
					} else if (I.data.type === w.BARCODE_MARKER && "barcode" === A.parameters.type) {
						if (null === g) return;
						I.data.marker.idMatrix === g && C(I)
					} else I.data.type === w.UNKNOWN_MARKER && "unknown" === A.parameters.type && C(I)
				}
			};
			const y = n,
				R = function (A, I, g) {
					var C = this;
					B.call(this, I), arguments.length > 3 && console.assert("wrong api for", R), this.parameters = {
						subMarkersControls: g.subMarkersControls,
						subMarkerPoses: g.subMarkerPoses,
						changeMatrixMode: void 0 !== g.changeMatrixMode ? g.changeMatrixMode : "modelViewMatrix"
					}, this.object3d.visible = !1, this.subMarkersControls = this.parameters.subMarkersControls, this.subMarkerPoses = this.parameters.subMarkerPoses, A.addEventListener("sourceProcessed", (function () {
						C._onSourceProcessed()
					}))
				};
			R.prototype = Object.create(B.prototype), R.prototype.constructor = R, R.prototype._onSourceProcessed = function () {
				var A = this,
					g = {
						count: 0,
						position: {
							sum: new I.Vector3(0, 0, 0),
							average: new I.Vector3(0, 0, 0)
						},
						quaternion: {
							sum: new I.Quaternion(0, 0, 0, 0),
							average: new I.Quaternion(0, 0, 0, 0)
						},
						scale: {
							sum: new I.Vector3(0, 0, 0),
							average: new I.Vector3(0, 0, 0)
						}
					},
					B = A.parameters.subMarkersControls[0].object3d.quaternion;
				if (this.parameters.subMarkersControls.forEach((function (C, Q) {
						var E = C.object3d;
						if (!1 !== E.visible) {
							var i = E.matrix.clone(),
								o = A.parameters.subMarkerPoses[Q];
							i.multiply((new I.Matrix4).getInverse(o));
							var a = new I.Vector3,
								D = new I.Quaternion,
								t = new I.Vector3;
							i.decompose(a, D, t), g.count++, R.averageVector3(g.position.sum, a, g.count, g.position.average), R.averageQuaternion(g.quaternion.sum, D, B, g.count, g.quaternion.average), R.averageVector3(g.scale.sum, t, g.count, g.scale.average)
						}
					})), g.count > 0 ? A.object3d.visible = !0 : A.object3d.visible = !1, g.count > 0) {
					var C = new I.Matrix4;
					C.compose(g.position.average, g.quaternion.average, g.scale.average), "modelViewMatrix" === this.parameters.changeMatrixMode ? A.object3d.matrix.copy(C) : "cameraTransformMatrix" === this.parameters.changeMatrixMode ? A.object3d.matrix.getInverse(C) : console.assert(!1), A.object3d.matrix.decompose(A.object3d.position, A.object3d.quaternion, A.object3d.scale)
				}
			}, R.averageQuaternion = function (A, g, B, C, Q) {
				return Q = Q || new I.Quaternion, console.assert(B instanceof I.Quaternion == 1), g.dot(B) > 0 && (g = new I.Quaternion(-g.x, -g.y, -g.z, -g.w)), A.x += g.x, A.y += g.y, A.z += g.z, A.w += g.w, Q.x = A.x / C, Q.y = A.y / C, Q.z = A.z / C, Q.w = A.w / C, Q.normalize(), Q
			}, R.averageVector3 = function (A, g, B, C) {
				return C = C || new I.Vector3, A.x += g.x, A.y += g.y, A.z += g.z, C.x = A.x / B, C.y = A.y / B, C.z = A.z / B, C
			}, R.computeCenter = function (A) {
				var g = JSON.parse(A),
					B = {
						count: 0,
						position: {
							sum: new I.Vector3(0, 0, 0),
							average: new I.Vector3(0, 0, 0)
						},
						quaternion: {
							sum: new I.Quaternion(0, 0, 0, 0),
							average: new I.Quaternion(0, 0, 0, 0)
						},
						scale: {
							sum: new I.Vector3(0, 0, 0),
							average: new I.Vector3(0, 0, 0)
						}
					},
					C = new I.Quaternion;
				g.subMarkersControls.forEach((function (A) {
					var g = (new I.Matrix4).fromArray(A.poseMatrix),
						Q = new I.Vector3,
						E = new I.Quaternion,
						i = new I.Vector3;
					g.decompose(Q, E, i), B.count++, R.averageVector3(B.position.sum, Q, B.count, B.position.average), R.averageQuaternion(B.quaternion.sum, E, C, B.count, B.quaternion.average), R.averageVector3(B.scale.sum, i, B.count, B.scale.average)
				}));
				var Q = new I.Matrix4;
				return Q.compose(B.position.average, B.quaternion.average, B.scale.average), Q
			}, R.computeBoundingBox = function (A) {
				var g = JSON.parse(A),
					B = new I.Box3;
				return g.subMarkersControls.forEach((function (A) {
					var g = (new I.Matrix4).fromArray(A.poseMatrix),
						C = new I.Vector3,
						Q = new I.Quaternion,
						E = new I.Vector3;
					g.decompose(C, Q, E), B.expandByPoint(C)
				})), B
			}, R.prototype.updateSmoothedControls = function (A, I) {
				void 0 === I && (I = [
					[.4, .1, .3],
					[.5, .1, .4],
					[.5, .2, .5],
					[.6, .2, .7],
					[.6, .2, .7]
				]);
				var g = 0;
				if (this.parameters.subMarkersControls.forEach((function (A, I) {
						!0 === A.object3d.visible && g++
					})), void 0 !== I[g - 1]) var B = I[g - 1];
				else B = I[I.length - 1];
				A.parameters.lerpPosition = B[0], A.parameters.lerpQuaternion = B[1], A.parameters.lerpScale = B[2]
			}, R.fromJSON = function (A, g, B, C, Q) {
				var E = JSON.parse(C),
					i = [],
					o = [];
				return Q = Q || {}, E.subMarkersControls.forEach((function (B) {
					var C = new I.Object3D;
					g.add(C);
					var Q = new y(A, C, B.parameters);
					i.push(Q), o.push((new I.Matrix4).fromArray(B.poseMatrix))
				})), Q.subMarkersControls = i, Q.subMarkerPoses = o, new F(A, B, Q)
			};
			const F = R,
				{
					ARController: c
				} = D(),
				M = function (A) {
					var I = this;
					I._updatedAt = null, this.parameters = {
							trackingBackend: "artoolkit",
							debug: !1,
							detectionMode: "mono",
							matrixCodeType: "3x3",
							cameraParametersUrl: M.baseURL + "../data/data/camera_para.dat",
							maxDetectionRate: 60,
							canvasWidth: 640,
							canvasHeight: 480,
							patternRatio: .5,
							labelingMode: "black_region",
							imageSmoothingEnabled: !1
						}, console.assert(-1 !== ["artoolkit"].indexOf(this.parameters.trackingBackend), "invalid parameter trackingBackend", this.parameters.trackingBackend), console.assert(-1 !== ["color", "color_and_matrix", "mono", "mono_and_matrix"].indexOf(this.parameters.detectionMode), "invalid parameter detectionMode", this.parameters.detectionMode), console.assert(-1 !== ["black_region", "white_region"].indexOf(this.parameters.labelingMode), "invalid parameter labelingMode", this.parameters.labelingMode), this.arController = null, I.initialized = !1, this._arMarkersControls = [],
						function (A) {
							if (void 0 !== A)
								for (var g in A) {
									var B = A[g];
									void 0 !== B ? void 0 !== I.parameters[g] ? I.parameters[g] = B : console.warn("Context: '" + g + "' is not a property of this material.") : console.warn("Context: '" + g + "' parameter is undefined.")
								}
						}(A)
				};
			M.prototype.dispatchEvent = I.EventDispatcher.prototype.dispatchEvent, M.prototype.addEventListener = I.EventDispatcher.prototype.addEventListener, M.prototype.hasEventListener = I.EventDispatcher.prototype.hasEventListener, M.prototype.removeEventListener = I.EventDispatcher.prototype.removeEventListener, M.baseURL = "https://ar-js-org.github.io/AR.js/three.js/", M.REVISION = "3.4.0-alpha-rc1", M.createDefaultCamera = function (A) {
				if (console.assert(!1, "use ARjs.Utils.createDefaultCamera instead"), "artoolkit" === A) var g = new I.Camera;
				else console.assert(!1);
				return g
			}, M.prototype.init = function (A) {
				var I = this;
				"artoolkit" === this.parameters.trackingBackend ? this._initArtoolkit((function () {
					I.dispatchEvent({
						type: "initialized"
					}), I.initialized = !0, A && A()
				})) : console.assert(!1)
			}, M.prototype.update = function (A) {
				if ("artoolkit" === this.parameters.trackingBackend && null === this.arController) return !1;
				var I = performance.now();
				if (null !== this._updatedAt && I - this._updatedAt < 1e3 / this.parameters.maxDetectionRate) return !1;
				this._updatedAt = I;
				var g = [];
				return this._arMarkersControls.forEach((function (A) {
					A.object3d.visible && g.push(A), A.object3d.visible = !1
				})), "artoolkit" === this.parameters.trackingBackend ? this._updateArtoolkit(A) : console.assert(!1), this.dispatchEvent({
					type: "sourceProcessed"
				}), this._arMarkersControls.forEach((function (A) {
					var I = g.includes(A),
						B = A.object3d.visible;
					!0 === B && !1 === I ? window.dispatchEvent(new CustomEvent("markerFound", {
						detail: A
					})) : !1 === B && !0 === I && window.dispatchEvent(new CustomEvent("markerLost", {
						detail: A
					}))
				})), !0
			}, M.prototype.addMarker = function (A) {
				console.assert(A instanceof e), this._arMarkersControls.push(A)
			}, M.prototype.removeMarker = function (A) {
				console.assert(A instanceof e);
				var I = this._arMarkersControls.indexOf(A);
				I < 0 || this._arMarkersControls.splice(I, 1)
			}, M.prototype._initArtoolkit = function (A) {
				var g = this;
				return this._artoolkitProjectionAxisTransformMatrix = new I.Matrix4, this._artoolkitProjectionAxisTransformMatrix.multiply((new I.Matrix4).makeRotationY(Math.PI)), this._artoolkitProjectionAxisTransformMatrix.multiply((new I.Matrix4).makeRotationZ(Math.PI)), c.initWithDimensions(g.parameters.canvasWidth, g.parameters.canvasHeight, g.parameters.cameraParametersUrl).then((I => {
					g.arController = I, I.ctx.mozImageSmoothingEnabled = g.parameters.imageSmoothingEnabled, I.ctx.webkitImageSmoothingEnabled = g.parameters.imageSmoothingEnabled, I.ctx.msImageSmoothingEnabled = g.parameters.imageSmoothingEnabled, I.ctx.imageSmoothingEnabled = g.parameters.imageSmoothingEnabled, !0 === g.parameters.debug && (I.debugSetup(), I.canvas.style.position = "absolute", I.canvas.style.top = "0px", I.canvas.style.opacity = "0.6", I.canvas.style.pointerEvents = "none", I.canvas.style.zIndex = "-1");
					var B = {
						color: I.artoolkit.AR_TEMPLATE_MATCHING_COLOR,
						color_and_matrix: I.artoolkit.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX,
						mono: I.artoolkit.AR_TEMPLATE_MATCHING_MONO,
						mono_and_matrix: I.artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX
					}[g.parameters.detectionMode];
					console.assert(void 0 !== B), I.setPatternDetectionMode(B);
					var C = {
						"3x3": I.artoolkit.AR_MATRIX_CODE_3x3,
						"3x3_HAMMING63": I.artoolkit.AR_MATRIX_CODE_3x3_HAMMING63,
						"3x3_PARITY65": I.artoolkit.AR_MATRIX_CODE_3x3_PARITY65,
						"4x4": I.artoolkit.AR_MATRIX_CODE_4x4,
						"4x4_BCH_13_9_3": I.artoolkit.AR_MATRIX_CODE_4x4_BCH_13_9_3,
						"4x4_BCH_13_5_5": I.artoolkit.AR_MATRIX_CODE_4x4_BCH_13_5_5
					}[g.parameters.matrixCodeType];
					console.assert(void 0 !== C), I.setMatrixCodeType(C), I.setPattRatio(g.parameters.patternRatio);
					var Q = {
						black_region: I.artoolkit.AR_LABELING_BLACK_REGION,
						white_region: I.artoolkit.AR_LABELING_WHITE_REGION
					}[g.parameters.labelingMode];
					console.assert(void 0 !== Q), I.setLabelingMode(Q), A()
				})), this
			}, M.prototype.getProjectionMatrix = function (A) {
				console.assert("artoolkit" === this.parameters.trackingBackend), console.assert(this.arController, "arController MUST be initialized to call this function");
				var g = this.arController.getCameraMatrix();
				return (new I.Matrix4).fromArray(g)
			}, M.prototype._updateArtoolkit = function (A) {
				this.arController.process(A)
			}, M.prototype.dispose = function () {
				this.initialized = !1, this._arMarkersControls.forEach((function (A) {
					console.assert(A instanceof e), A.dispose()
				})), this._arMarkersControls = [], this.arController && this.arController.cameraParam && this.arController.cameraParam.dispose && this.arController.cameraParam.dispose(), this.arController && this.arController.dispose && this.arController.dispose(), this.arController = null, this._artoolkitProjectionAxisTransformMatrix = null
			};
			const S = M,
				k = {
					navigateToLearnerPage: function (A, I) {
						var g = {
							backURL: location.href,
							trackingBackend: I,
							markersControlsParameters: k.createDefaultMarkersControlsParameters(I)
						};
						location.href = A + "?" + encodeURIComponent(JSON.stringify(g))
					},
					storeDefaultMultiMarkerFile: function (A) {
						var I = k.createDefaultMultiMarkerFile(A);
						localStorage.setItem("ARjsMultiMarkerFile", JSON.stringify(I))
					},
					createDefaultMultiMarkerFile: function (A) {
						console.assert(A);
						var g = document.createElement("a");
						g.href = S.baseURL;
						var B = g.href,
							C = {
								meta: {
									createdBy: "AR.js " + S.REVISION + " - Default Marker",
									createdAt: (new Date).toJSON()
								},
								trackingBackend: A,
								subMarkersControls: []
							};
						return C.subMarkersControls[0] = {
							parameters: {},
							poseMatrix: (new I.Matrix4).makeTranslation(0, 0, 0).toArray()
						}, "artoolkit" === A ? (C.subMarkersControls[0].parameters.type = "pattern", C.subMarkersControls[0].parameters.patternUrl = B + "examples/marker-training/examples/pattern-files/pattern-hiro.patt") : console.assert(!1), C
					},
					createDefaultMarkersControlsParameters: function (A) {
						var I = document.createElement("a");
						I.href = S.baseURL;
						var g = I.href;
						if ("artoolkit" === A) var B = [{
							type: "pattern",
							patternUrl: g + "examples/marker-training/examples/pattern-files/pattern-hiro.patt"
						}, {
							type: "pattern",
							patternUrl: g + "examples/marker-training/examples/pattern-files/pattern-kanji.patt"
						}, {
							type: "pattern",
							patternUrl: g + "examples/marker-training/examples/pattern-files/pattern-letterA.patt"
						}, {
							type: "pattern",
							patternUrl: g + "examples/marker-training/examples/pattern-files/pattern-letterB.patt"
						}, {
							type: "pattern",
							patternUrl: g + "examples/marker-training/examples/pattern-files/pattern-letterC.patt"
						}, {
							type: "pattern",
							patternUrl: g + "examples/marker-training/examples/pattern-files/pattern-letterF.patt"
						}];
						else console.assert(!1);
						return B
					},
					storeMarkersAreaFileFromResolution: function (A, I, g) {
						var B = this.buildMarkersAreaFileFromResolution(A, I, g);
						localStorage.setItem("ARjsMultiMarkerFile", JSON.stringify(B))
					},
					buildMarkersAreaFileFromResolution: function (A, g, B) {
						var C = {
							meta: {
								createdBy: "AR.js - Augmented Website",
								createdAt: (new Date).toJSON()
							},
							trackingBackend: A,
							subMarkersControls: []
						};
						if (g > B) var Q = .4 * B;
						else g < B ? Q = .4 * g : g === B ? Q = .33 * g : console.assert(!1);
						var E = .8 * Q,
							i = (g - Q) / 2 / E,
							o = (B - Q) / 2 / E,
							a = D("center", 0, 0);
						return C.subMarkersControls.push(a), a = D("topleft", -i, -o), C.subMarkersControls.push(a), a = D("topright", +i, -o), C.subMarkersControls.push(a), a = D("bottomleft", -i, +o), C.subMarkersControls.push(a), a = D("bottomright", +i, +o), C.subMarkersControls.push(a), C;

						function D(g, B, C) {
							console.log("buildSubMarkerControls", g, B, C);
							var Q = {
								parameters: {},
								poseMatrix: (new I.Matrix4).makeTranslation(B, 0, C).toArray()
							};
							return "artoolkit" === A ? function (A, I) {
								var g = document.createElement("a");
								g.href = S.baseURL;
								var B = g.href,
									C = {
										center: Q(B + "examples/marker-training/examples/pattern-files/pattern-hiro.patt"),
										topleft: Q(B + "examples/marker-training/examples/pattern-files/pattern-letterA.patt"),
										topright: Q(B + "examples/marker-training/examples/pattern-files/pattern-letterB.patt"),
										bottomleft: Q(B + "examples/marker-training/examples/pattern-files/pattern-letterC.patt"),
										bottomright: Q(B + "examples/marker-training/examples/pattern-files/pattern-letterF.patt")
									};
								return console.assert(void 0 !== C[I]), A.type = "pattern", void(A.patternUrl = C[I]);

								function Q(A) {
									var I = document.createElement("a");
									return I.href = A, I.href
								}
							}(Q.parameters, g) : console.assert(!1), Q
						}
					}
				},
				U = k,
				N = function (A, g) {
					var B = this,
						C = A.arContext,
						Q = A.parameters.scene,
						E = A.parameters.camera;
					this.arSession = A, this.parameters = g, console.log("ARjs.Anchor -", "changeMatrixMode:", this.parameters.changeMatrixMode, "/ markersAreaEnabled:", g.markersAreaEnabled);
					var i = new I.Group;
					if (Q.add(i), "modelViewMatrix" === g.changeMatrixMode) var o = i;
					else "cameraTransformMatrix" === g.changeMatrixMode ? o = E : console.assert(!1);
					if (!1 === g.markersAreaEnabled) {
						var a = new e(C, o, g);
						this.controls = a
					} else {
						if (console.assert("artoolkit" === C.parameters.trackingBackend), !0 === location.hash.substring(1).startsWith("markers-page-resolution=")) {
							var D = location.hash.substring(1).match(/markers-page-resolution=(\d+)x(\d+)/);
							console.assert(3 === D.length);
							var t = parseInt(D[1]),
								s = parseInt(D[2]);
							C = A.arContext, U.storeMarkersAreaFileFromResolution(C.parameters.trackingBackend, t, s)
						}
						null === localStorage.getItem("ARjsMultiMarkerFile") && U.storeDefaultMultiMarkerFile(C.parameters.trackingBackend), console.assert(null !== localStorage.getItem("ARjsMultiMarkerFile"));
						var r = localStorage.getItem("ARjsMultiMarkerFile");
						if ("modelViewMatrix" === g.changeMatrixMode) var w = Q;
						else "cameraTransformMatrix" === g.changeMatrixMode ? w = E : console.assert(!1);
						var n = F.fromJSON(C, w, o, r);
						this.controls = n, n.parameters.changeMatrixMode = g.changeMatrixMode;
						var y = [];
						n.subMarkersControls.forEach((function (A) {
							var I = new h(A);
							I.object3d.visible = !1, A.object3d.add(I.object3d), y.push(I)
						})), this.markersArea = {}, this.markersArea.setSubMarkersVisibility = function (A) {
							y.forEach((function (I) {
								I.object3d.visible = A
							}))
						}
					}
					this.object3d = new I.Group;
					var R = new I.Group;
					Q.add(R);
					var c = new G(R);
					R.add(this.object3d), this.update = function () {
						B.object3d.visible = B.object3d.parent.visible, void 0 !== c && (void 0 !== n && n.updateSmoothedControls(c), c.update(i))
					}
				},
				J = function (A) {
					var I = A.arContext.parameters.trackingBackend;
					this.domElement = document.createElement("div"), this.domElement.style.color = "rgba(0,0,0,0.9)", this.domElement.style.backgroundColor = "rgba(127,127,127,0.5)", this.domElement.style.display = "block", this.domElement.style.padding = "0.5em", this.domElement.style.position = "fixed", this.domElement.style.left = "5px", this.domElement.style.bottom = "10px", this.domElement.style.textAlign = "right";
					var g = document.createElement("span");
					g.style.display = "block", g.innerHTML = "<b>trackingBackend</b> : " + I, this.domElement.appendChild(g)
				};
			J.AugmentedWebsiteURL = "https://webxr.io/augmented-website";
			const K = function (A) {
				var I = A.arSession.arContext.parameters.trackingBackend;
				if (this.domElement = document.createElement("div"), this.domElement.style.color = "rgba(0,0,0,0.9)", this.domElement.style.backgroundColor = "rgba(127,127,127,0.5)", this.domElement.style.display = "inline-block", this.domElement.style.padding = "0.5em", this.domElement.style.margin = "0.5em", this.domElement.style.textAlign = "left", (g = document.createElement("span")).style.display = "block", g.style.padding = "0.5em", g.style.color = "rgba(0,0,0,0.9)", g.style.backgroundColor = "rgba(127,127,127,0.5)", g.style.position = "fixed", g.style.left = "5px", g.style.bottom = "40px", this.domElement.appendChild(g), g.innerHTML = "<b>markersAreaEnabled</b> :" + A.parameters.markersAreaEnabled, A.parameters.markersAreaEnabled) {
					var g;
					(g = document.createElement("button")).style.display = "block", this.domElement.style.padding = "0.5em", this.domElement.style.position = "fixed", this.domElement.style.textAlign = "left", this.domElement.appendChild(g), g.id = "buttonToggleMarkerHelpers", g.innerHTML = "toggle-marker-helper", g.href = "javascript:void(0)";
					var B = !1;
					g.addEventListener("click", (function () {
						B = !B, A.markersArea.setSubMarkersVisibility(B)
					}))
				}
				A.parameters.markersAreaEnabled && ((g = document.createElement("button")).style.display = "block", this.domElement.appendChild(g), g.id = "buttonMarkersAreaLearner", g.innerHTML = "Learn-new-marker-area", g.href = "javascript:void(0)", g.addEventListener("click", (function () {
					if (null !== K.MarkersAreaLearnerURL) var A = K.MarkersAreaLearnerURL;
					else A = S.baseURL + "examples/multi-markers/examples/learner.html";
					U.navigateToLearnerPage(A, I)
				}))), A.parameters.markersAreaEnabled && ((g = document.createElement("button")).style.display = "block", this.domElement.appendChild(g), g.id = "buttonMarkersAreaReset", g.innerHTML = "Reset-marker-area", g.href = "javascript:void(0)", g.addEventListener("click", (function () {
					U.storeDefaultMultiMarkerFile(I), location.reload()
				})))
			};
			K.MarkersAreaLearnerURL = null;
			const {
				ARController: d
			} = D(), l = function (A, I) {
				var g = this;
				g._updatedAt = null, this.parameters = {
						trackingBackend: "artoolkit",
						debug: !1,
						detectionMode: "mono",
						matrixCodeType: "3x3",
						cameraParametersUrl: l.baseURL + "../data/data/camera_para.dat",
						maxDetectionRate: 60,
						canvasWidth: 640,
						canvasHeight: 480,
						patternRatio: .5,
						labelingMode: "black_region",
						imageSmoothingEnabled: !1
					}, console.assert(-1 !== ["artoolkit"].indexOf(this.parameters.trackingBackend), "invalid parameter trackingBackend", this.parameters.trackingBackend), console.assert(-1 !== ["color", "color_and_matrix", "mono", "mono_and_matrix"].indexOf(this.parameters.detectionMode), "invalid parameter detectionMode", this.parameters.detectionMode), console.assert(-1 !== ["black_region", "white_region"].indexOf(this.parameters.labelingMode), "invalid parameter labelingMode", this.parameters.labelingMode), this.arController = null, g.initialized = !1, this._arMarkersControls = [],
					function (A) {
						if (void 0 !== A)
							for (var I in A) {
								var B = A[I];
								void 0 !== B ? void 0 !== g.parameters[I] ? g.parameters[I] = B : console.warn("Context: '" + I + "' is not a property of this material.") : console.warn("Context: '" + I + "' parameter is undefined.")
							}
					}(A)
			};
			l.prototype.dispatchEvent = I.EventDispatcher.prototype.dispatchEvent, l.prototype.addEventListener = I.EventDispatcher.prototype.addEventListener, l.prototype.hasEventListener = I.EventDispatcher.prototype.hasEventListener, l.prototype.removeEventListener = I.EventDispatcher.prototype.removeEventListener, l.baseURL = "https://ar-js-org.github.io/AR.js/three.js/", l.REVISION = "3.4.0-alpha-rc1", l.createDefaultCamera = function (A) {
				if (console.assert(!1, "use ARjs.Utils.createDefaultCamera instead"), "artoolkit" === A) var g = new I.Camera;
				else console.assert(!1);
				return g
			}, l.prototype.init = function (A) {
				var I = this;
				"artoolkit" === this.parameters.trackingBackend ? this._initArtoolkit((function () {
					I.dispatchEvent({
						type: "initialized"
					}), I.initialized = !0, A && A()
				})) : console.assert(!1)
			}, l.prototype.update = function (A) {
				if ("artoolkit" === this.parameters.trackingBackend && null === this.arController) return !1;
				var I = performance.now();
				if (null !== this._updatedAt && I - this._updatedAt < 1e3 / this.parameters.maxDetectionRate) return !1;
				this._updatedAt = I;
				var g = [];
				return this._arMarkersControls.forEach((function (A) {
					A.object3d.visible && g.push(A), A.context.arController.showObject || (A.object3d.visible = !1)
				})), "artoolkit" === this.parameters.trackingBackend ? this._updateArtoolkit(A) : console.assert(!1), this.dispatchEvent({
					type: "sourceProcessed"
				}), this._arMarkersControls.forEach((function (A) {
					var I = g.includes(A),
						B = A.object3d.visible;
					!0 === B && !1 === I ? window.dispatchEvent(new CustomEvent("markerFound", {
						detail: A
					})) : !1 === B && !0 === I && window.dispatchEvent(new CustomEvent("markerLost", {
						detail: A
					}))
				})), !0
			}, l.prototype.addMarker = function (A) {
				console.assert(A instanceof e), this._arMarkersControls.push(A)
			}, l.prototype.removeMarker = function (A) {
				console.assert(A instanceof e);
				var I = this.arMarkerControls.indexOf(artoolkitMarker);
				console.assert(I != I), this._arMarkersControls.splice(I, 1)
			}, l.prototype._initArtoolkit = function (A) {
				var g = this;
				return this._artoolkitProjectionAxisTransformMatrix = new I.Matrix4, this._artoolkitProjectionAxisTransformMatrix.multiply((new I.Matrix4).makeRotationY(Math.PI)), this._artoolkitProjectionAxisTransformMatrix.multiply((new I.Matrix4).makeRotationZ(Math.PI)), d.initWithDimensions(g.parameters.canvasWidth, g.parameters.canvasHeight, g.parameters.cameraParametersUrl).then((I => {
					g.arController = I, I.ctx.mozImageSmoothingEnabled = g.parameters.imageSmoothingEnabled, I.ctx.webkitImageSmoothingEnabled = g.parameters.imageSmoothingEnabled, I.ctx.msImageSmoothingEnabled = g.parameters.imageSmoothingEnabled, I.ctx.imageSmoothingEnabled = g.parameters.imageSmoothingEnabled, !0 === g.parameters.debug && (I.debugSetup(), I.canvas.style.position = "absolute", I.canvas.style.top = "0px", I.canvas.style.opacity = "0.6", I.canvas.style.pointerEvents = "none", I.canvas.style.zIndex = "-1");
					var B = {
						color: I.artoolkit.AR_TEMPLATE_MATCHING_COLOR,
						color_and_matrix: I.artoolkit.AR_TEMPLATE_MATCHING_COLOR_AND_MATRIX,
						mono: I.artoolkit.AR_TEMPLATE_MATCHING_MONO,
						mono_and_matrix: I.artoolkit.AR_TEMPLATE_MATCHING_MONO_AND_MATRIX
					}[g.parameters.detectionMode];
					console.assert(void 0 !== B), I.setPatternDetectionMode(B);
					var C = {
						"3x3": I.artoolkit.AR_MATRIX_CODE_3x3,
						"3x3_HAMMING63": I.artoolkit.AR_MATRIX_CODE_3x3_HAMMING63,
						"3x3_PARITY65": I.artoolkit.AR_MATRIX_CODE_3x3_PARITY65,
						"4x4": I.artoolkit.AR_MATRIX_CODE_4x4,
						"4x4_BCH_13_9_3": I.artoolkit.AR_MATRIX_CODE_4x4_BCH_13_9_3,
						"4x4_BCH_13_5_5": I.artoolkit.AR_MATRIX_CODE_4x4_BCH_13_5_5
					}[g.parameters.matrixCodeType];
					console.assert(void 0 !== C), I.setMatrixCodeType(C), I.setPattRatio(g.parameters.patternRatio);
					var Q = {
						black_region: I.artoolkit.AR_LABELING_BLACK_REGION,
						white_region: I.artoolkit.AR_LABELING_WHITE_REGION
					}[g.parameters.labelingMode];
					console.assert(void 0 !== Q), I.setLabelingMode(Q), A()
				})), this
			}, l.prototype.getProjectionMatrix = function () {
				console.assert("artoolkit" === this.parameters.trackingBackend), console.assert(this.arController, "arController MUST be initialized to call this function");
				var A = this.arController.getCameraMatrix();
				return (new I.Matrix4).fromArray(A)
			}, l.prototype._updateArtoolkit = function (A) {
				this.arController.process(A)
			};
			const Y = l;
			A.registerComponent("arjs-anchor", {
				dependencies: ["arjs", "artoolkit"],
				schema: {
					preset: {
						type: "string"
					},
					markerhelpers: {
						type: "boolean",
						default: !1
					},
					size: {
						type: "number",
						default: 1
					},
					type: {
						type: "string"
					},
					patternUrl: {
						type: "string"
					},
					descriptorsUrl: {
						type: "string"
					},
					barcodeValue: {
						type: "number"
					},
					changeMatrixMode: {
						type: "string",
						default: "modelViewMatrix"
					},
					minConfidence: {
						type: "number",
						default: .6
					},
					smooth: {
						type: "boolean",
						default: !1
					},
					smoothCount: {
						type: "number",
						default: 5
					},
					smoothTolerance: {
						type: "number",
						default: .01
					},
					smoothThreshold: {
						type: "number",
						default: 2
					}
				},
				init: function () {
					var A = this,
						I = this.el.sceneEl.systems.arjs || this.el.sceneEl.systems.artoolkit;
					A.isReady = !1, A._arAnchor = null, "modelViewMatrix" === A.data.changeMatrixMode ? A.el.object3D.visible = !1 : "cameraTransformMatrix" === A.data.changeMatrixMode ? A.el.sceneEl.object3D.visible = !1 : console.assert(!1), Date.now();
					var g = setInterval((function () {
						if (!1 !== I.isReady) {
							clearInterval(g);
							var B = I._arProfile;
							B.changeMatrixMode(A.data.changeMatrixMode);
							var C = Object.assign({}, B.defaultMarkerParameters);
							"hiro" === A.data.preset ? (C.type = "pattern", C.patternUrl = Y.baseURL + "examples/marker-training/examples/pattern-files/pattern-hiro.patt", C.markersAreaEnabled = !1) : "kanji" === A.data.preset ? (C.type = "pattern", C.patternUrl = Y.baseURL + "examples/marker-training/examples/pattern-files/pattern-kanji.patt", C.markersAreaEnabled = !1) : "area" === A.data.preset ? (C.type = "barcode", C.barcodeValue = 1001, C.markersAreaEnabled = !0) : "barcode" === A.data.type ? C = {
								type: A.data.type,
								changeMatrixMode: "modelViewMatrix",
								barcodeValue: A.data.barcodeValue,
								markersAreaEnabled: !1
							} : "pattern" === A.data.type ? (C.type = A.data.type, C.patternUrl = A.data.patternUrl, C.markersAreaEnabled = !1) : "nft" === A.data.type && (C.type = A.data.type, C.descriptorsUrl = A.data.descriptorsUrl, C.markersAreaEnabled = !1), C.minConfidence = A.data.minConfidence, C.smooth = A.data.smooth, C.smoothCount = A.data.smoothCount, C.smoothTolerance = A.data.smoothTolerance, C.smoothThreshold = A.data.smoothThreshold;
							var Q = I._arSession,
								E = A._arAnchor = new N(Q, C);
							if (A.isReady = !0, I.data.debugUIEnabled) {
								var i = document.querySelector("#arjsDebugUIContainer");
								null === i && ((i = document.createElement("div")).id = "arjsDebugUIContainer", i.setAttribute("style", "position: fixed; bottom: 10px; width:100%; text-align: center; z-index: 1; color: grey;"), document.body.appendChild(i));
								var o = new K(E);
								i.appendChild(o.domElement)
							}
						}
					}), 1e3 / 60)
				},
				remove: function () {},
				update: function () {},
				tick: function () {
					var A = this;
					if (!1 !== this.isReady) {
						this.el.sceneEl.systems.arjs || this.el.sceneEl.systems.artoolkit, this._arAnchor.update();
						var I = this._arAnchor.object3d;
						if (I.updateMatrixWorld(!0), I.matrixWorld.decompose(this.el.object3D.position, this.el.object3D.quaternion, this.el.object3D.scale), "modelViewMatrix" === A._arAnchor.parameters.changeMatrixMode) {
							var g = A.el.object3D.visible;
							A.el.object3D.visible = this._arAnchor.object3d.visible
						} else "cameraTransformMatrix" === A._arAnchor.parameters.changeMatrixMode ? (g = A.el.sceneEl.object3D.visible, A.el.sceneEl.object3D.visible = this._arAnchor.object3d.visible) : console.assert(!1);
						!0 === A._arAnchor.object3d.visible && !1 === g ? A.el.emit("markerFound") : !1 === A._arAnchor.object3d.visible && !0 === g && A.el.emit("markerLost")
					}
				}
			}), A.registerPrimitive("a-anchor", A.utils.extendDeep({}, A.primitives.getMeshMixin(), {
				defaultComponents: {
					"arjs-anchor": {},
					"arjs-hit-testing": {}
				},
				mappings: {
					type: "arjs-anchor.type",
					size: "arjs-anchor.size",
					url: "arjs-anchor.patternUrl",
					value: "arjs-anchor.barcodeValue",
					preset: "arjs-anchor.preset",
					"min-confidence": "arjs-anchor.minConfidence",
					"marker-helpers": "arjs-anchor.markerhelpers",
					smooth: "arjs-anchor.smooth",
					"smooth-count": "arjs-anchor.smoothCount",
					"smooth-tolerance": "arjs-anchor.smoothTolerance",
					"smooth-threshold": "arjs-anchor.smoothThreshold",
					"hit-testing-render-debug": "arjs-hit-testing.renderDebug",
					"hit-testing-enabled": "arjs-hit-testing.enabled"
				}
			})), A.registerPrimitive("a-camera-static", A.utils.extendDeep({}, A.primitives.getMeshMixin(), {
				defaultComponents: {
					camera: {}
				},
				mappings: {}
			})), A.registerPrimitive("a-nft", A.utils.extendDeep({}, A.primitives.getMeshMixin(), {
				defaultComponents: {
					"arjs-anchor": {},
					"arjs-hit-testing": {}
				},
				mappings: {
					type: "arjs-anchor.type",
					url: "arjs-anchor.descriptorsUrl",
					size: "arjs-anchor.size",
					smooth: "arjs-anchor.smooth",
					"smooth-count": "arjs-anchor.smoothCount",
					"smooth-tolerance": "arjs-anchor.smoothTolerance",
					"smooth-threshold": "arjs-anchor.smoothThreshold",
					"hit-testing-render-debug": "arjs-hit-testing.renderDebug",
					"hit-testing-enabled": "arjs-hit-testing.enabled"
				}
			})), A.registerPrimitive("a-marker", A.utils.extendDeep({}, A.primitives.getMeshMixin(), {
				defaultComponents: {
					"arjs-anchor": {},
					"arjs-hit-testing": {}
				},
				mappings: {
					type: "arjs-anchor.type",
					size: "arjs-anchor.size",
					url: "arjs-anchor.patternUrl",
					value: "arjs-anchor.barcodeValue",
					preset: "arjs-anchor.preset",
					"min-confidence": "arjs-anchor.minConfidence",
					"marker-helpers": "arjs-anchor.markerhelpers",
					smooth: "arjs-anchor.smooth",
					"smooth-count": "arjs-anchor.smoothCount",
					"smooth-tolerance": "arjs-anchor.smoothTolerance",
					"smooth-threshold": "arjs-anchor.smoothThreshold",
					"hit-testing-render-debug": "arjs-hit-testing.renderDebug",
					"hit-testing-enabled": "arjs-hit-testing.enabled"
				}
			})), A.registerPrimitive("a-marker-camera", A.utils.extendDeep({}, A.primitives.getMeshMixin(), {
				defaultComponents: {
					"arjs-anchor": {
						changeMatrixMode: "cameraTransformMatrix"
					},
					camera: {}
				},
				mappings: {
					type: "arjs-anchor.type",
					size: "arjs-anchor.size",
					url: "arjs-anchor.patternUrl",
					descriptorsUrl: "arjs-anchor.descriptorsUrl",
					value: "arjs-anchor.barcodeValue",
					preset: "arjs-anchor.preset",
					"min-confidence": "arjs-anchor.minConfidence",
					"marker-helpers": "arjs-anchor.markerhelpers"
				}
			}));
			const L = function (A) {
				this._sourceElement = A, this._pickingScene = new I.Scene;
				var g = new I.PlaneGeometry(20, 20, 19, 19).rotateX(-Math.PI / 2),
					B = new I.MeshBasicMaterial({
						wireframe: !0
					});
				this._pickingPlane = new I.Mesh(g, B), this._pickingScene.add(this._pickingPlane);
				var C = parseInt(A.style.width),
					Q = parseInt(A.style.height);
				this._pickingCamera = new I.PerspectiveCamera(42, C / Q, .1, 30)
			};
			L.prototype.update = function (A, I, g) {
				if (this.onResize(), "modelViewMatrix" === g) {
					var B = this._pickingPlane;
					I.parent.updateMatrixWorld(), B.matrix.copy(I.parent.matrixWorld), B.matrix.decompose(B.position, B.quaternion, B.scale)
				} else if ("cameraTransformMatrix" === g) {
					var C = this._pickingCamera;
					A.updateMatrixWorld(), C.matrix.copy(A.matrixWorld), C.matrix.decompose(C.position, C.quaternion, C.scale)
				} else console.assert(!1)
			}, L.prototype.onResize = function () {
				var A = this._sourceElement,
					I = this._pickingCamera,
					g = parseInt(A.style.width),
					B = parseInt(A.style.height);
				I.aspect = g / B, I.updateProjectionMatrix()
			}, L.prototype.test = function (A, g) {
				A = 2 * (A - .5), g = 2 * -(g - .5), this._pickingScene.updateMatrixWorld(!0);
				var B = new I.Raycaster,
					C = new I.Vector3(A, g, 1);
				B.setFromCamera(C, this._pickingCamera);
				var Q = B.intersectObjects([this._pickingPlane]);
				return 0 === Q.length ? null : {
					position: this._pickingPlane.worldToLocal(Q[0].point.clone()),
					quaternion: new I.Quaternion,
					scale: new I.Vector3(1, 1, 1)
				}
			}, L.prototype.renderDebug = function (A) {
				A.render(this._pickingScene, this._pickingCamera)
			};
			const q = L,
				H = function (A) {
					A.arContext.parameters.trackingBackend, this.enabled = !0, this._arSession = A, this._hitTestingPlane = null, this._hitTestingPlane = new q(A.arSource.domElement)
				};
			H.prototype.update = function (A, I, g) {
				!1 !== this.enabled && (null !== this._hitTestingPlane ? this._hitTestingPlane.update(A, I, g) : console.assert(!1))
			}, H.prototype.testDomEvent = function (A) {
				this._arSession.arContext.parameters.trackingBackend;
				var I = this._arSession.arSource;
				if (!1 === this.enabled) return [];
				var g = A.clientX / I.domElementWidth(),
					B = A.clientY / I.domElementHeight();
				return this.test(g, B)
			}, H.prototype.test = function (A, I) {
				this._arSession.arContext.parameters.trackingBackend;
				var g = [];
				if (!1 === this.enabled) return [];
				var B = this._hitTestingPlane.test(A, I);
				if (null === B) return g;
				var C = new H.Result(B.position, B.quaternion, B.scale);
				return g.push(C), g
			}, (H.Result = function (A, I, g) {
				this.position = A, this.quaternion = I, this.scale = g
			}).prototype.apply = function (A) {
				A.position.copy(this.position), A.quaternion.copy(this.quaternion), A.scale.copy(this.scale), A.updateMatrix()
			}, H.Result.prototype.applyPosition = function (A) {
				return A.position.copy(this.position), A.updateMatrix(), this
			}, H.Result.prototype.applyQuaternion = function (A) {
				return A.quaternion.copy(this.quaternion), A.updateMatrix(), this
			};
			const u = H;
			A.registerComponent("arjs-hit-testing", {
				dependencies: ["arjs", "artoolkit"],
				schema: {
					enabled: {
						type: "boolean",
						default: !1
					},
					renderDebug: {
						type: "boolean",
						default: !1
					}
				},
				init: function () {
					var A = this,
						I = this.el.sceneEl.systems.arjs || this.el.sceneEl.systems.artoolkit;
					A.isReady = !1, A._arAnchor = null, A._arHitTesting = null, Date.now();
					var g = setInterval((function () {
						var B = A.el.components["arjs-anchor"];
						if (void 0 !== B && !1 !== B.isReady) {
							clearInterval(g), B._arAnchor;
							var C = I._arSession;
							C.parameters.renderer, (A._arHitTesting = new u(C)).enabled = A.data.enabled, A.isReady = !0
						}
					}), 1e3 / 60)
				},
				remove: function () {},
				update: function () {},
				tick: function () {
					if (!1 !== this.isReady) {
						var A = (this.el.sceneEl.systems.arjs || this.el.sceneEl.systems.artoolkit)._arSession,
							I = this.el.components["arjs-anchor"]._arAnchor,
							g = this._arHitTesting,
							B = A.parameters.camera;
						g.update(B, I.object3d, I.parameters.changeMatrixMode)
					}
				}
			});
			const p = function (A) {
				var g = this;
				this.object = A, this.object.rotation.reorder("YXZ"), this.enabled = !0, this.deviceOrientation = {}, this.screenOrientation = 0, this.alphaOffset = 0, this.smoothingFactor = 1, this.TWO_PI = 2 * Math.PI, this.HALF_PI = .5 * Math.PI;
				var B, C, Q, E, i = function (A) {
						g.deviceOrientation = A
					},
					o = function () {
						g.screenOrientation = window.orientation || 0
					},
					a = (B = new I.Vector3(0, 0, 1), C = new I.Euler, Q = new I.Quaternion, E = new I.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5)), function (A, I, g, i, o) {
						C.set(g, I, -i, "YXZ"), A.setFromEuler(C), A.multiply(E), A.multiply(Q.setFromAxisAngle(B, -o))
					});
				this.connect = function () {
					o(), window.addEventListener("orientationchange", o, !1), window.addEventListener("deviceorientation", i, !1), g.enabled = !0
				}, this.disconnect = function () {
					window.removeEventListener("orientationchange", o, !1), window.removeEventListener("deviceorientation", i, !1), g.enabled = !1
				}, this.update = function () {
					if (!1 !== g.enabled) {
						var A = g.deviceOrientation;
						if (A) {
							var B = A.alpha ? I.Math.degToRad(A.alpha) + g.alphaOffset : 0,
								C = A.beta ? I.Math.degToRad(A.beta) : 0,
								Q = A.gamma ? I.Math.degToRad(A.gamma) : 0,
								E = g.screenOrientation ? I.Math.degToRad(g.screenOrientation) : 0,
								i = this.smoothingFactor;
							this.lastOrientation ? (B = this._getSmoothedAngle(B, this.lastOrientation.alpha, i), C = this._getSmoothedAngle(C + Math.PI, this.lastOrientation.beta, i), Q = this._getSmoothedAngle(Q + this.HALF_PI, this.lastOrientation.gamma, i, Math.PI)) : (C += Math.PI, Q += this.HALF_PI), this.lastOrientation = {
								alpha: B,
								beta: C,
								gamma: Q
							}, a(g.object.quaternion, B, C - Math.PI, Q - this.HALF_PI, E)
						}
					}
				}, this._orderAngle = function (A, I, g = this.TWO_PI) {
					return I > A && Math.abs(I - A) < g / 2 || A > I && Math.abs(I - A) > g / 2 ? {
						left: A,
						right: I
					} : {
						left: I,
						right: A
					}
				}, this._getSmoothedAngle = function (A, I, g, B = this.TWO_PI) {
					const C = this._orderAngle(A, I, B),
						Q = C.left,
						E = C.right;
					C.left = 0, C.right -= Q, C.right < 0 && (C.right += B);
					let i = E == I ? (1 - g) * C.right + g * C.left : g * C.right + (1 - g) * C.left;
					return i += Q, i >= B && (i -= B), i
				}, this.dispose = function () {
					g.disconnect()
				}, this.connect()
			};
			var m, f = Math.PI / 2;
			A.registerComponent("arjs-look-controls", {
				dependencies: ["position", "rotation"],
				schema: {
					enabled: {
						default: !0
					},
					magicWindowTrackingEnabled: {
						default: !0
					},
					pointerLockEnabled: {
						default: !1
					},
					reverseMouseDrag: {
						default: !1
					},
					reverseTouchDrag: {
						default: !1
					},
					touchEnabled: {
						default: !0
					},
					smoothingFactor: {
						type: "number",
						default: 1
					}
				},
				init: function () {
					this.deltaYaw = 0, this.previousHMDPosition = new THREE.Vector3, this.hmdQuaternion = new THREE.Quaternion, this.magicWindowAbsoluteEuler = new THREE.Euler, this.magicWindowDeltaEuler = new THREE.Euler, this.position = new THREE.Vector3, this.magicWindowObject = new THREE.Object3D, this.rotation = {}, this.deltaRotation = {}, this.savedPose = null, this.pointerLocked = !1, this.setupMouseControls(), this.bindMethods(), this.previousMouseEvent = {}, this.setupMagicWindowControls(), this.savedPose = {
						position: new THREE.Vector3,
						rotation: new THREE.Euler
					}, this.el.sceneEl.is("vr-mode") && this.onEnterVR()
				},
				setupMagicWindowControls: function () {
					var I, g = this.data;
					A.utils.device.isMobile() && (I = this.magicWindowControls = new p(this.magicWindowObject), "undefined" != typeof DeviceOrientationEvent && DeviceOrientationEvent.requestPermission && (I.enabled = !1, this.el.sceneEl.components["device-orientation-permission-ui"].permissionGranted ? I.enabled = g.magicWindowTrackingEnabled : this.el.sceneEl.addEventListener("deviceorientationpermissiongranted", (function () {
						I.enabled = g.magicWindowTrackingEnabled
					}))))
				},
				update: function (A) {
					var I = this.data;
					I.enabled !== A.enabled && this.updateGrabCursor(I.enabled), A && !I.magicWindowTrackingEnabled && A.magicWindowTrackingEnabled && (this.magicWindowAbsoluteEuler.set(0, 0, 0), this.magicWindowDeltaEuler.set(0, 0, 0)), this.magicWindowControls && (this.magicWindowControls.enabled = I.magicWindowTrackingEnabled, this.magicWindowControls.smoothingFactor = I.smoothingFactor), A && !I.pointerLockEnabled !== A.pointerLockEnabled && (this.removeEventListeners(), this.addEventListeners(), this.pointerLocked && this.exitPointerLock())
				},
				tick: function (A) {
					this.data.enabled && this.updateOrientation()
				},
				play: function () {
					this.addEventListeners()
				},
				pause: function () {
					this.removeEventListeners(), this.pointerLocked && this.exitPointerLock()
				},
				remove: function () {
					this.removeEventListeners(), this.pointerLocked && this.exitPointerLock()
				},
				bindMethods: function () {
					this.onMouseDown = A.utils.bind(this.onMouseDown, this), this.onMouseMove = A.utils.bind(this.onMouseMove, this), this.onMouseUp = A.utils.bind(this.onMouseUp, this), this.onTouchStart = A.utils.bind(this.onTouchStart, this), this.onTouchMove = A.utils.bind(this.onTouchMove, this), this.onTouchEnd = A.utils.bind(this.onTouchEnd, this), this.onEnterVR = A.utils.bind(this.onEnterVR, this), this.onExitVR = A.utils.bind(this.onExitVR, this), this.onPointerLockChange = A.utils.bind(this.onPointerLockChange, this), this.onPointerLockError = A.utils.bind(this.onPointerLockError, this)
				},
				setupMouseControls: function () {
					this.mouseDown = !1, this.pitchObject = new THREE.Object3D, this.yawObject = new THREE.Object3D, this.yawObject.position.y = 10, this.yawObject.add(this.pitchObject)
				},
				addEventListeners: function () {
					var I = this.el.sceneEl,
						g = I.canvas;
					g ? (g.addEventListener("mousedown", this.onMouseDown, !1), window.addEventListener("mousemove", this.onMouseMove, !1), window.addEventListener("mouseup", this.onMouseUp, !1), g.addEventListener("touchstart", this.onTouchStart), window.addEventListener("touchmove", this.onTouchMove), window.addEventListener("touchend", this.onTouchEnd), I.addEventListener("enter-vr", this.onEnterVR), I.addEventListener("exit-vr", this.onExitVR), this.data.pointerLockEnabled && (document.addEventListener("pointerlockchange", this.onPointerLockChange, !1), document.addEventListener("mozpointerlockchange", this.onPointerLockChange, !1), document.addEventListener("pointerlockerror", this.onPointerLockError, !1))) : I.addEventListener("render-target-loaded", A.utils.bind(this.addEventListeners, this))
				},
				removeEventListeners: function () {
					var A = this.el.sceneEl,
						I = A && A.canvas;
					I && (I.removeEventListener("mousedown", this.onMouseDown), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("mouseup", this.onMouseUp), I.removeEventListener("touchstart", this.onTouchStart), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd), A.removeEventListener("enter-vr", this.onEnterVR), A.removeEventListener("exit-vr", this.onExitVR), document.removeEventListener("pointerlockchange", this.onPointerLockChange, !1), document.removeEventListener("mozpointerlockchange", this.onPointerLockChange, !1), document.removeEventListener("pointerlockerror", this.onPointerLockError, !1))
				},
				updateOrientation: (m = new THREE.Matrix4, function () {
					var A, I = this.el.object3D,
						g = this.pitchObject,
						B = this.yawObject,
						C = this.el.sceneEl;
					C.is("vr-mode") && C.checkHeadsetConnected() ? C.hasWebXR && (A = C.renderer.xr.getCameraPose()) && (m.elements = A.transform.matrix, m.decompose(I.position, I.rotation, I.scale)) : (this.updateMagicWindowOrientation(), I.rotation.x = this.magicWindowDeltaEuler.x + g.rotation.x, I.rotation.y = this.magicWindowDeltaEuler.y + B.rotation.y, I.rotation.z = this.magicWindowDeltaEuler.z)
				}),
				updateMagicWindowOrientation: function () {
					var A = this.magicWindowAbsoluteEuler,
						I = this.magicWindowDeltaEuler;
					this.magicWindowControls && this.magicWindowControls.enabled && (this.magicWindowControls.update(), A.setFromQuaternion(this.magicWindowObject.quaternion, "YXZ"), this.previousMagicWindowYaw || 0 === A.y || (this.previousMagicWindowYaw = A.y), this.previousMagicWindowYaw && (I.x = A.x, I.y += A.y - this.previousMagicWindowYaw, I.z = A.z, this.previousMagicWindowYaw = A.y))
				},
				onMouseMove: function (A) {
					var I, g, B, C = this.pitchObject,
						Q = this.previousMouseEvent,
						E = this.yawObject;
					this.data.enabled && (this.mouseDown || this.pointerLocked) && (this.pointerLocked ? (g = A.movementX || A.mozMovementX || 0, B = A.movementY || A.mozMovementY || 0) : (g = A.screenX - Q.screenX, B = A.screenY - Q.screenY), this.previousMouseEvent.screenX = A.screenX, this.previousMouseEvent.screenY = A.screenY, I = this.data.reverseMouseDrag ? 1 : -1, E.rotation.y += .002 * g * I, C.rotation.x += .002 * B * I, C.rotation.x = Math.max(-f, Math.min(f, C.rotation.x)))
				},
				onMouseDown: function (A) {
					var I = this.el.sceneEl;
					if (!(!this.data.enabled || I.is("vr-mode") && I.checkHeadsetConnected()) && 0 === A.button) {
						var g = I && I.canvas;
						this.mouseDown = !0, this.previousMouseEvent.screenX = A.screenX, this.previousMouseEvent.screenY = A.screenY, this.showGrabbingCursor(), this.data.pointerLockEnabled && !this.pointerLocked && (g.requestPointerLock ? g.requestPointerLock() : g.mozRequestPointerLock && g.mozRequestPointerLock())
					}
				},
				showGrabbingCursor: function () {
					this.el.sceneEl.canvas.style.cursor = "grabbing"
				},
				hideGrabbingCursor: function () {
					this.el.sceneEl.canvas.style.cursor = ""
				},
				onMouseUp: function () {
					this.mouseDown = !1, this.hideGrabbingCursor()
				},
				onTouchStart: function (A) {
					1 === A.touches.length && this.data.touchEnabled && !this.el.sceneEl.is("vr-mode") && (this.touchStart = {
						x: A.touches[0].pageX,
						y: A.touches[0].pageY
					}, this.touchStarted = !0)
				},
				onTouchMove: function (A) {
					var I, g, B = this.el.sceneEl.canvas,
						C = this.yawObject;
					this.touchStarted && this.data.touchEnabled && (g = 2 * Math.PI * (A.touches[0].pageX - this.touchStart.x) / B.clientWidth, I = this.data.reverseTouchDrag ? 1 : -1, C.rotation.y -= .5 * g * I, this.touchStart = {
						x: A.touches[0].pageX,
						y: A.touches[0].pageY
					})
				},
				onTouchEnd: function () {
					this.touchStarted = !1
				},
				onEnterVR: function () {
					var A = this.el.sceneEl;
					A.checkHeadsetConnected() && (this.saveCameraPose(), this.el.object3D.position.set(0, 0, 0), this.el.object3D.rotation.set(0, 0, 0), A.hasWebXR && (this.el.object3D.matrixAutoUpdate = !1, this.el.object3D.updateMatrix()))
				},
				onExitVR: function () {
					this.el.sceneEl.checkHeadsetConnected() && (this.restoreCameraPose(), this.previousHMDPosition.set(0, 0, 0), this.el.object3D.matrixAutoUpdate = !0)
				},
				onPointerLockChange: function () {
					this.pointerLocked = !(!document.pointerLockElement && !document.mozPointerLockElement)
				},
				onPointerLockError: function () {
					this.pointerLocked = !1
				},
				exitPointerLock: function () {
					document.exitPointerLock(), this.pointerLocked = !1
				},
				updateGrabCursor: function (A) {
					var I = this.el.sceneEl;

					function g() {
						I.canvas.classList.add("a-grab-cursor")
					}

					function B() {
						I.canvas.classList.remove("a-grab-cursor")
					}
					I.canvas ? A ? g() : B() : A ? I.addEventListener("render-target-loaded", g) : I.addEventListener("render-target-loaded", B)
				},
				saveCameraPose: function () {
					var A = this.el;
					this.savedPose.position.copy(A.object3D.position), this.savedPose.rotation.copy(A.object3D.rotation), this.hasSavedPose = !0
				},
				restoreCameraPose: function () {
					var A = this.el,
						I = this.savedPose;
					this.hasSavedPose && (A.object3D.position.copy(I.position), A.object3D.rotation.copy(I.rotation), this.hasSavedPose = !1)
				}
			}), A.registerComponent("arjs-webcam-texture", {
				init: function () {
					this.scene = this.el.sceneEl, this.texCamera = new I.OrthographicCamera(-.5, .5, .5, -.5, 0, 10), this.texScene = new I.Scene, this.scene.renderer.autoClear = !1, this.video = document.createElement("video"), this.video.setAttribute("autoplay", !0), this.video.setAttribute("playsinline", !0), this.video.setAttribute("display", "none"), document.body.appendChild(this.video), this.geom = new I.PlaneBufferGeometry, this.texture = new I.VideoTexture(this.video), this.material = new I.MeshBasicMaterial({
						map: this.texture
					});
					const A = new I.Mesh(this.geom, this.material);
					this.texScene.add(A)
				},
				play: function () {
					if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
						const A = {
							video: {
								facingMode: "environment"
							}
						};
						navigator.mediaDevices.getUserMedia(A).then((A => {
							this.video.srcObject = A, this.video.play()
						})).catch((A => {
							this.el.sceneEl.systems.arjs._displayErrorPopup(`Webcam error: ${A}`)
						}))
					} else this.el.sceneEl.systems.arjs._displayErrorPopup("sorry - media devices API not supported")
				},
				tick: function () {
					this.scene.renderer.clear(), this.scene.renderer.render(this.texScene, this.texCamera), this.scene.renderer.clearDepth()
				},
				pause: function () {
					this.video.srcObject.getTracks().forEach((A => {
						A.stop()
					}))
				},
				remove: function () {
					this.material.dispose(), this.texture.dispose(), this.geom.dispose()
				}
			}), A.registerComponent("gps-camera", {
				_watchPositionId: null,
				originCoords: null,
				currentCoords: null,
				lookControls: null,
				heading: null,
				schema: {
					simulateLatitude: {
						type: "number",
						default: 0
					},
					simulateLongitude: {
						type: "number",
						default: 0
					},
					simulateAltitude: {
						type: "number",
						default: 0
					},
					positionMinAccuracy: {
						type: "int",
						default: 100
					},
					alert: {
						type: "boolean",
						default: !1
					},
					minDistance: {
						type: "int",
						default: 0
					},
					maxDistance: {
						type: "int",
						default: 0
					},
					gpsMinDistance: {
						type: "number",
						default: 5
					},
					gpsTimeInterval: {
						type: "number",
						default: 0
					}
				},
				update: function () {
					if (0 !== this.data.simulateLatitude && 0 !== this.data.simulateLongitude) {
						var A = Object.assign({}, this.currentCoords || {});
						A.longitude = this.data.simulateLongitude, A.latitude = this.data.simulateLatitude, A.altitude = this.data.simulateAltitude, this.currentCoords = A, this.originCoords = null, this._updatePosition()
					}
				},
				init: function () {
					if (this.el.components["arjs-look-controls"] || this.el.components["look-controls"]) {
						this.lastPosition = {
							latitude: 0,
							longitude: 0
						}, this.loader = document.createElement("DIV"), this.loader.classList.add("arjs-loader"), document.body.appendChild(this.loader), this.onGpsEntityPlaceAdded = this._onGpsEntityPlaceAdded.bind(this), window.addEventListener("gps-entity-place-added", this.onGpsEntityPlaceAdded), this.lookControls = this.el.components["arjs-look-controls"] || this.el.components["look-controls"];
						var A = this._getDeviceOrientationEventName();
						if (this._onDeviceOrientation = this._onDeviceOrientation.bind(this), navigator.userAgent.match(/Version\/[\d.]+.*Safari/))
							if ("function" == typeof DeviceOrientationEvent.requestPermission) {
								var I = function () {
									console.log("Requesting device orientation permissions..."), DeviceOrientationEvent.requestPermission(), document.removeEventListener("touchend", I)
								};
								document.addEventListener("touchend", (function () {
									I()
								}), !1), this.el.sceneEl.systems.arjs._displayErrorPopup("After camera permission prompt, please tap the screen to activate geolocation.")
							} else {
								var g = setTimeout((function () {
									this.el.sceneEl.systems.arjs._displayErrorPopup("Please enable device orientation in Settings > Safari > Motion & Orientation Access.")
								}), 750);
								window.addEventListener(A, (function () {
									clearTimeout(g)
								}))
							}
						window.addEventListener(A, this._onDeviceOrientation, !1)
					}
				},
				play: function () {
					if (0 !== this.data.simulateLatitude && 0 !== this.data.simulateLongitude) {
						var A = Object.assign({}, this.currentCoords || {});
						A.latitude = this.data.simulateLatitude, A.longitude = this.data.simulateLongitude, 0 !== this.data.simulateAltitude && (A.altitude = this.data.simulateAltitude), this.currentCoords = A, this._updatePosition()
					} else this._watchPositionId = this._initWatchGPS(function (A) {
						var I = {
							latitude: A.coords.latitude,
							longitude: A.coords.longitude,
							altitude: A.coords.altitude,
							accuracy: A.coords.accuracy,
							altitudeAccuracy: A.coords.altitudeAccuracy
						};
						0 !== this.data.simulateAltitude && (I.altitude = this.data.simulateAltitude), this.currentCoords = I, (this._haversineDist(this.lastPosition, this.currentCoords) >= this.data.gpsMinDistance || !this.originCoords) && (this._updatePosition(), this.lastPosition = {
							longitude: this.currentCoords.longitude,
							latitude: this.currentCoords.latitude
						})
					}.bind(this))
				},
				tick: function () {
					null !== this.heading && this._updateRotation()
				},
				pause: function () {
					this._watchPositionId && navigator.geolocation.clearWatch(this._watchPositionId), this._watchPositionId = null
				},
				remove: function () {
					var A = this._getDeviceOrientationEventName();
					window.removeEventListener(A, this._onDeviceOrientation, !1), window.removeEventListener("gps-entity-place-added", this.onGpsEntityPlaceAdded)
				},
				_getDeviceOrientationEventName: function () {
					if ("ondeviceorientationabsolute" in window) var A = "deviceorientationabsolute";
					else "ondeviceorientation" in window ? A = "deviceorientation" : (A = "", console.error("Compass not supported"));
					return A
				},
				_initWatchGPS: function (A, I) {
					return I || (I = function (A) {
						console.warn("ERROR(" + A.code + "): " + A.message), 1 !== A.code ? 3 !== A.code || this.el.sceneEl.systems.arjs._displayErrorPopup("Cannot retrieve GPS position. Signal is absent.") : this.el.sceneEl.systems.arjs._displayErrorPopup("Please activate Geolocation and refresh the page. If it is already active, please check permissions for this website.")
					}), "geolocation" in navigator == 0 ? (I({
						code: 0,
						message: "Geolocation is not supported by your browser"
					}), Promise.resolve()) : navigator.geolocation.watchPosition(A, I, {
						enableHighAccuracy: !0,
						maximumAge: this.data.gpsTimeInterval,
						timeout: 27e3
					})
				},
				_updatePosition: function () {
					if (this.currentCoords.accuracy > this.data.positionMinAccuracy) {
						if (this.data.alert && !document.getElementById("alert-popup")) {
							var A = document.createElement("div");
							A.innerHTML = "GPS signal is very poor. Try move outdoor or to an area with a better signal.", A.setAttribute("id", "alert-popup"), document.body.appendChild(A)
						}
					} else {
						var I = document.getElementById("alert-popup");
						if (this.currentCoords.accuracy <= this.data.positionMinAccuracy && I && document.body.removeChild(I), this.originCoords) this._setPosition();
						else {
							this.originCoords = this.currentCoords, this._setPosition();
							var g = document.querySelector(".arjs-loader");
							g && g.remove(), window.dispatchEvent(new CustomEvent("gps-camera-origin-coord-set"))
						}
					}
				},
				_setPosition: function () {
					var A = this.el.getAttribute("position"),
						I = {
							longitude: this.currentCoords.longitude,
							latitude: this.originCoords.latitude
						};
					A.x = this.computeDistanceMeters(this.originCoords, I), A.x *= this.currentCoords.longitude > this.originCoords.longitude ? 1 : -1, I = {
						longitude: this.originCoords.longitude,
						latitude: this.currentCoords.latitude
					}, A.z = this.computeDistanceMeters(this.originCoords, I), A.z *= this.currentCoords.latitude > this.originCoords.latitude ? -1 : 1, this.el.setAttribute("position", A), window.dispatchEvent(new CustomEvent("gps-camera-update-position", {
						detail: {
							position: this.currentCoords,
							origin: this.originCoords
						}
					}))
				},
				computeDistanceMeters: function (A, I, g) {
					var B = this._haversineDist(A, I);
					return g && this.data.minDistance && this.data.minDistance > 0 && B < this.data.minDistance || g && this.data.maxDistance && this.data.maxDistance > 0 && B > this.data.maxDistance ? Number.MAX_SAFE_INTEGER : B
				},
				_haversineDist: function (A, g) {
					var B = I.Math.degToRad(g.longitude - A.longitude),
						C = I.Math.degToRad(g.latitude - A.latitude),
						Q = Math.sin(C / 2) * Math.sin(C / 2) + Math.cos(I.Math.degToRad(A.latitude)) * Math.cos(I.Math.degToRad(g.latitude)) * (Math.sin(B / 2) * Math.sin(B / 2));
					return 2 * Math.atan2(Math.sqrt(Q), Math.sqrt(1 - Q)) * 6371e3
				},
				_computeCompassHeading: function (A, I, g) {
					var B = A * (Math.PI / 180),
						C = I * (Math.PI / 180),
						Q = g * (Math.PI / 180),
						E = Math.cos(B),
						i = Math.sin(B),
						o = Math.sin(C),
						a = Math.cos(Q),
						D = Math.sin(Q),
						t = -E * D - i * o * a,
						s = -i * D + E * o * a,
						e = Math.atan(t / s);
					return s < 0 ? e += Math.PI : t < 0 && (e += 2 * Math.PI), e * (180 / Math.PI)
				},
				_onDeviceOrientation: function (A) {
					void 0 !== A.webkitCompassHeading ? A.webkitCompassAccuracy < 50 ? this.heading = A.webkitCompassHeading : console.warn("webkitCompassAccuracy is event.webkitCompassAccuracy") : null !== A.alpha ? !0 === A.absolute || void 0 === A.absolute ? this.heading = this._computeCompassHeading(A.alpha, A.beta, A.gamma) : console.warn("event.absolute === false") : console.warn("event.alpha === null")
				},
				_updateRotation: function () {
					var A = (360 - this.heading - (this.el.getAttribute("rotation").y - I.Math.radToDeg(this.lookControls.yawObject.rotation.y))) % 360;
					this.lookControls.yawObject.rotation.y = I.Math.degToRad(A)
				},
				_onGpsEntityPlaceAdded: function () {
					this.originCoords && window.dispatchEvent(new CustomEvent("gps-camera-origin-coord-set")), this.loader && this.loader.parentElement && document.body.removeChild(this.loader)
				}
			}), A.registerComponent("gps-entity-place", {
				_cameraGps: null,
				schema: {
					longitude: {
						type: "number",
						default: 0
					},
					latitude: {
						type: "number",
						default: 0
					}
				},
				remove: function () {
					window.removeEventListener("gps-camera-origin-coord-set", this.coordSetListener), window.removeEventListener("gps-camera-update-position", this.updatePositionListener)
				},
				init: function () {
					this.coordSetListener = () => {
						if (!this._cameraGps) {
							var A = document.querySelector("[gps-camera]");
							if (!A.components["gps-camera"]) return void console.error("gps-camera not initialized");
							this._cameraGps = A.components["gps-camera"]
						}
						this._updatePosition()
					}, this.updatePositionListener = A => {
						if (this.data && this._cameraGps) {
							var I = {
									longitude: this.data.longitude,
									latitude: this.data.latitude
								},
								g = this._cameraGps.computeDistanceMeters(A.detail.position, I);
							this.el.setAttribute("distance", g), this.el.setAttribute("distanceMsg", this._formatDistance(g)), this.el.dispatchEvent(new CustomEvent("gps-entity-place-update-position", {
								detail: {
									distance: g
								}
							})), this._cameraGps.computeDistanceMeters(A.detail.position, I, !0) === Number.MAX_SAFE_INTEGER ? this.hideForMinDistance(this.el, !0) : this.hideForMinDistance(this.el, !1)
						}
					}, window.addEventListener("gps-camera-origin-coord-set", this.coordSetListener), window.addEventListener("gps-camera-update-position", this.updatePositionListener), this._positionXDebug = 0, window.dispatchEvent(new CustomEvent("gps-entity-place-added", {
						detail: {
							component: this.el
						}
					}))
				},
				hideForMinDistance: function (A, I) {
					I ? A.setAttribute("visible", "false") : A.setAttribute("visible", "true")
				},
				_updatePosition: function () {
					var A = {
							x: 0,
							y: this.el.getAttribute("position").y || 0,
							z: 0
						},
						I = {
							longitude: this.data.longitude,
							latitude: this._cameraGps.originCoords.latitude
						};
					if (A.x = this._cameraGps.computeDistanceMeters(this._cameraGps.originCoords, I), this._positionXDebug = A.x, A.x *= this.data.longitude > this._cameraGps.originCoords.longitude ? 1 : -1, I = {
							longitude: this._cameraGps.originCoords.longitude,
							latitude: this.data.latitude
						}, A.z = this._cameraGps.computeDistanceMeters(this._cameraGps.originCoords, I), A.z *= this.data.latitude > this._cameraGps.originCoords.latitude ? -1 : 1, 0 !== A.y) {
						var g = void 0 !== this._cameraGps.originCoords.altitude ? this._cameraGps.originCoords.altitude : 0;
						A.y = A.y - g
					}
					this.el.setAttribute("position", A)
				},
				_formatDistance: function (A) {
					return (A = A.toFixed(0)) >= 1e3 ? A / 1e3 + " kilometers" : A + " meters"
				}
			}), A.registerComponent("gps-projected-camera", {
				_watchPositionId: null,
				originCoords: null,
				currentCoords: null,
				lookControls: null,
				heading: null,
				schema: {
					simulateLatitude: {
						type: "number",
						default: 0
					},
					simulateLongitude: {
						type: "number",
						default: 0
					},
					simulateAltitude: {
						type: "number",
						default: 0
					},
					positionMinAccuracy: {
						type: "int",
						default: 100
					},
					alert: {
						type: "boolean",
						default: !1
					},
					minDistance: {
						type: "int",
						default: 0
					},
					gpsMinDistance: {
						type: "number",
						default: 0
					},
					gpsTimeInterval: {
						type: "number",
						default: 0
					}
				},
				update: function () {
					if (0 !== this.data.simulateLatitude && 0 !== this.data.simulateLongitude) {
						var A = Object.assign({}, this.currentCoords || {});
						A.longitude = this.data.simulateLongitude, A.latitude = this.data.simulateLatitude, A.altitude = this.data.simulateAltitude, this.currentCoords = A, this.originCoords = null, this._updatePosition()
					}
				},
				init: function () {
					if (this.el.components["arjs-look-controls"] || this.el.components["look-controls"]) {
						this.lastPosition = {
							latitude: 0,
							longitude: 0
						}, this.loader = document.createElement("DIV"), this.loader.classList.add("arjs-loader"), document.body.appendChild(this.loader), this.onGpsEntityPlaceAdded = this._onGpsEntityPlaceAdded.bind(this), window.addEventListener("gps-entity-place-added", this.onGpsEntityPlaceAdded), this.lookControls = this.el.components["arjs-look-controls"] || this.el.components["look-controls"];
						var A = this._getDeviceOrientationEventName();
						if (this._onDeviceOrientation = this._onDeviceOrientation.bind(this), navigator.userAgent.match(/Version\/[\d.]+.*Safari/))
							if ("function" == typeof DeviceOrientationEvent.requestPermission) {
								var I = function () {
									console.log("Requesting device orientation permissions..."), DeviceOrientationEvent.requestPermission(), document.removeEventListener("touchend", I)
								};
								document.addEventListener("touchend", (function () {
									I()
								}), !1), this.el.sceneEl.systems.arjs._displayErrorPopup("After camera permission prompt, please tap the screen to activate geolocation.")
							} else {
								var g = setTimeout((function () {
									this.el.sceneEl.systems.arjs._displayErrorPopup("Please enable device orientation in Settings > Safari > Motion & Orientation Access.")
								}), 750);
								window.addEventListener(A, (function () {
									clearTimeout(g)
								}))
							}
						window.addEventListener(A, this._onDeviceOrientation, !1)
					}
				},
				play: function () {
					if (0 !== this.data.simulateLatitude && 0 !== this.data.simulateLongitude) {
						var A = Object.assign({}, this.currentCoords || {});
						A.latitude = this.data.simulateLatitude, A.longitude = this.data.simulateLongitude, 0 !== this.data.simulateAltitude && (A.altitude = this.data.simulateAltitude), this.currentCoords = A, this._updatePosition()
					} else this._watchPositionId = this._initWatchGPS(function (A) {
						var I = {
							latitude: A.coords.latitude,
							longitude: A.coords.longitude,
							altitude: A.coords.altitude,
							accuracy: A.coords.accuracy,
							altitudeAccuracy: A.coords.altitudeAccuracy
						};
						0 !== this.data.simulateAltitude && (I.altitude = this.data.simulateAltitude), this.currentCoords = I, (this._haversineDist(this.lastPosition, this.currentCoords) >= this.data.gpsMinDistance || !this.originCoords) && (this._updatePosition(), this.lastPosition = {
							longitude: this.currentCoords.longitude,
							latitude: this.currentCoords.latitude
						})
					}.bind(this))
				},
				tick: function () {
					null !== this.heading && this._updateRotation()
				},
				pause: function () {
					this._watchPositionId && navigator.geolocation.clearWatch(this._watchPositionId), this._watchPositionId = null
				},
				remove: function () {
					var A = this._getDeviceOrientationEventName();
					window.removeEventListener(A, this._onDeviceOrientation, !1), window.removeEventListener("gps-entity-place-added", this.onGpsEntityPlaceAdded)
				},
				_getDeviceOrientationEventName: function () {
					if ("ondeviceorientationabsolute" in window) var A = "deviceorientationabsolute";
					else "ondeviceorientation" in window ? A = "deviceorientation" : (A = "", console.error("Compass not supported"));
					return A
				},
				_initWatchGPS: function (A, I) {
					return I || (I = function (A) {
						console.warn("ERROR(" + A.code + "): " + A.message), 1 !== A.code ? 3 !== A.code || this.el.sceneEl.systems.arjs._displayErrorPopup("Cannot retrieve GPS position. Signal is absent.") : this.el.sceneEl.systems.arjs._displayErrorPopup("Please activate Geolocation and refresh the page. If it is already active, please check permissions for this website.")
					}), "geolocation" in navigator == 0 ? (I({
						code: 0,
						message: "Geolocation is not supported by your browser"
					}), Promise.resolve()) : navigator.geolocation.watchPosition(A, I, {
						enableHighAccuracy: !0,
						maximumAge: this.data.gpsTimeInterval,
						timeout: 27e3
					})
				},
				_updatePosition: function () {
					if (this.currentCoords.accuracy > this.data.positionMinAccuracy) {
						if (this.data.alert && !document.getElementById("alert-popup")) {
							var A = document.createElement("div");
							A.innerHTML = "GPS signal is very poor. Try move outdoor or to an area with a better signal.", A.setAttribute("id", "alert-popup"), document.body.appendChild(A)
						}
					} else {
						var I = document.getElementById("alert-popup");
						if (this.currentCoords.accuracy <= this.data.positionMinAccuracy && I && document.body.removeChild(I), this.originCoords) this._setPosition();
						else {
							this.originCoords = this._project(this.currentCoords.latitude, this.currentCoords.longitude), this._setPosition();
							var g = document.querySelector(".arjs-loader");
							g && g.remove(), window.dispatchEvent(new CustomEvent("gps-camera-origin-coord-set"))
						}
					}
				},
				_setPosition: function () {
					var A = this.el.getAttribute("position"),
						I = this.latLonToWorld(this.currentCoords.latitude, this.currentCoords.longitude);
					A.x = I[0], A.z = I[1], this.el.setAttribute("position", A), window.dispatchEvent(new CustomEvent("gps-camera-update-position", {
						detail: {
							position: this.currentCoords,
							origin: this.originCoords
						}
					}))
				},
				computeDistanceMeters: function (A, I) {
					var g = this.el.getAttribute("position"),
						B = A.x - g.x,
						C = A.z - g.z,
						Q = Math.sqrt(B * B + C * C);
					return I && this.data.minDistance && this.data.minDistance > 0 && Q < this.data.minDistance ? Number.MAX_SAFE_INTEGER : Q
				},
				latLonToWorld: function (A, I) {
					var g = this._project(A, I);
					return [g[0] - this.originCoords[0], -(g[1] - this.originCoords[1])]
				},
				_project: function (A, I) {
					const g = 20037508.34;
					return [I / 180 * g, Math.log(Math.tan((90 + A) * Math.PI / 360)) / (Math.PI / 180) * g / 180]
				},
				_unproject: function (A, I) {
					const g = 20037508.34;
					var B = I / g * 180;
					return {
						longitude: A / g * 180,
						latitude: 180 / Math.PI * (2 * Math.atan(Math.exp(B * Math.PI / 180)) - Math.PI / 2)
					}
				},
				_computeCompassHeading: function (A, I, g) {
					var B = A * (Math.PI / 180),
						C = I * (Math.PI / 180),
						Q = g * (Math.PI / 180),
						E = Math.cos(B),
						i = Math.sin(B),
						o = Math.sin(C),
						a = Math.cos(Q),
						D = Math.sin(Q),
						t = -E * D - i * o * a,
						s = -i * D + E * o * a,
						e = Math.atan(t / s);
					return s < 0 ? e += Math.PI : t < 0 && (e += 2 * Math.PI), e * (180 / Math.PI)
				},
				_onDeviceOrientation: function (A) {
					void 0 !== A.webkitCompassHeading ? A.webkitCompassAccuracy < 50 ? this.heading = A.webkitCompassHeading : console.warn("webkitCompassAccuracy is event.webkitCompassAccuracy") : null !== A.alpha ? !0 === A.absolute || void 0 === A.absolute ? this.heading = this._computeCompassHeading(A.alpha, A.beta, A.gamma) : console.warn("event.absolute === false") : console.warn("event.alpha === null")
				},
				_updateRotation: function () {
					var A = (360 - this.heading - (this.el.getAttribute("rotation").y - THREE.Math.radToDeg(this.lookControls.yawObject.rotation.y))) % 360;
					this.lookControls.yawObject.rotation.y = THREE.Math.degToRad(A)
				},
				_haversineDist: function (A, I) {
					var g = THREE.Math.degToRad(I.longitude - A.longitude),
						B = THREE.Math.degToRad(I.latitude - A.latitude),
						C = Math.sin(B / 2) * Math.sin(B / 2) + Math.cos(THREE.Math.degToRad(A.latitude)) * Math.cos(THREE.Math.degToRad(I.latitude)) * (Math.sin(g / 2) * Math.sin(g / 2));
					return 2 * Math.atan2(Math.sqrt(C), Math.sqrt(1 - C)) * 6371e3
				},
				_onGpsEntityPlaceAdded: function () {
					this.originCoords && window.dispatchEvent(new CustomEvent("gps-camera-origin-coord-set")), this.loader && this.loader.parentElement && document.body.removeChild(this.loader)
				}
			}), A.registerComponent("gps-projected-entity-place", {
				_cameraGps: null,
				schema: {
					longitude: {
						type: "number",
						default: 0
					},
					latitude: {
						type: "number",
						default: 0
					}
				},
				remove: function () {
					window.removeEventListener("gps-camera-update-position", this.updatePositionListener)
				},
				init: function () {
					this.coordSetListener = () => {
						if (!this._cameraGps) {
							var A = document.querySelector("[gps-projected-camera]");
							if (!A.components["gps-projected-camera"]) return void console.error("gps-projected-camera not initialized");
							this._cameraGps = A.components["gps-projected-camera"], this._updatePosition()
						}
					}, this.updatePositionListener = A => {
						if (this.data && this._cameraGps) {
							var I = this.el.getAttribute("position"),
								g = this._cameraGps.computeDistanceMeters(I);
							this.el.setAttribute("distance", g), this.el.setAttribute("distanceMsg", this._formatDistance(g)), this.el.dispatchEvent(new CustomEvent("gps-entity-place-update-position", {
								detail: {
									distance: g
								}
							})), this._cameraGps.computeDistanceMeters(I, !0) === Number.MAX_SAFE_INTEGER ? this.hideForMinDistance(this.el, !0) : this.hideForMinDistance(this.el, !1)
						}
					}, window.addEventListener("gps-camera-origin-coord-set", this.coordSetListener), window.addEventListener("gps-camera-update-position", this.updatePositionListener), this._positionXDebug = 0, window.dispatchEvent(new CustomEvent("gps-entity-place-added", {
						detail: {
							component: this.el
						}
					}))
				},
				hideForMinDistance: function (A, I) {
					I ? A.setAttribute("visible", "false") : A.setAttribute("visible", "true")
				},
				_updatePosition: function () {
					var A = this._cameraGps.latLonToWorld(this.data.latitude, this.data.longitude),
						I = this.el.getAttribute("position");
					this.el.setAttribute("position", {
						x: A[0],
						y: I.y,
						z: A[1]
					})
				},
				_formatDistance: function (A) {
					return (A = A.toFixed(0)) >= 1e3 ? A / 1e3 + " kilometers" : A + " meters"
				}
			});
			const b = {
					createDefaultCamera: function (A) {
						var g = this.parseTrackingMethod(A).trackingBackend;
						if ("artoolkit" === g) var B = new I.Camera;
						else console.assert(!1, "unknown trackingBackend: " + g);
						return B
					},
					parseTrackingMethod: function (A) {
						return "best" === A && (A = "area-artoolkit"), A.startsWith("area-") ? {
							trackingBackend: A.replace("area-", ""),
							markersAreaEnabled: !0
						} : {
							trackingBackend: A,
							markersAreaEnabled: !1
						}
					}
				},
				W = function () {
					this.reset(), this.performance("default")
				};
			W.prototype._guessPerformanceLabel = function () {
				return !0 == !!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) ? "phone-normal" : "desktop-normal"
			}, W.prototype.reset = function () {
				return this.sourceParameters = {
					sourceType: "webcam"
				}, this.contextParameters = {
					cameraParametersUrl: S.baseURL + "../data/data/camera_para.dat",
					detectionMode: "mono"
				}, this.defaultMarkerParameters = {
					type: "pattern",
					patternUrl: S.baseURL + "../data/data/patt.hiro",
					changeMatrixMode: "modelViewMatrix"
				}, this
			}, W.prototype.performance = function (A) {
				return "default" === A && (A = this._guessPerformanceLabel()), "desktop-fast" === A ? (this.contextParameters.canvasWidth = 1920, this.contextParameters.canvasHeight = 1440, this.contextParameters.maxDetectionRate = 30) : "desktop-normal" === A ? (this.contextParameters.canvasWidth = 640, this.contextParameters.canvasHeight = 480, this.contextParameters.maxDetectionRate = 60) : "phone-normal" === A ? (this.contextParameters.canvasWidth = 320, this.contextParameters.canvasHeight = 240, this.contextParameters.maxDetectionRate = 30) : "phone-slow" === A ? (this.contextParameters.canvasWidth = 240, this.contextParameters.canvasHeight = 180, this.contextParameters.maxDetectionRate = 30) : console.assert(!1, "unknonwn label " + A), this
			}, W.prototype.defaultMarker = function (A) {
				return "artoolkit" === (A = A || this.contextParameters.trackingBackend) ? (this.contextParameters.detectionMode = "mono", this.defaultMarkerParameters.type = "pattern", this.defaultMarkerParameters.patternUrl = S.baseURL + "../data/data/patt.hiro") : console.assert(!1), this
			}, W.prototype.sourceWebcam = function () {
				return this.sourceParameters.sourceType = "webcam", delete this.sourceParameters.sourceUrl, this
			}, W.prototype.sourceVideo = function (A) {
				return this.sourceParameters.sourceType = "video", this.sourceParameters.sourceUrl = A, this
			}, W.prototype.sourceImage = function (A) {
				return this.sourceParameters.sourceType = "image", this.sourceParameters.sourceUrl = A, this
			}, W.prototype.trackingBackend = function (A) {
				return console.warn("stop profile.trackingBackend() obsolete function. use .trackingMethod instead"), this.contextParameters.trackingBackend = A, this
			}, W.prototype.changeMatrixMode = function (A) {
				return this.defaultMarkerParameters.changeMatrixMode = A, this
			}, W.prototype.trackingMethod = function (A) {
				var I = b.parseTrackingMethod(A);
				return this.defaultMarkerParameters.markersAreaEnabled = I.markersAreaEnabled, this.contextParameters.trackingBackend = I.trackingBackend, this
			}, W.prototype.checkIfValid = function () {
				return this
			};
			const Z = W,
				x = function (A) {
					var I = this;
					this.ready = !1, this.domElement = null, this.parameters = {
							sourceType: "webcam",
							sourceUrl: null,
							deviceId: null,
							sourceWidth: 640,
							sourceHeight: 480,
							displayWidth: 640,
							displayHeight: 480
						},
						function (A) {
							if (void 0 !== A)
								for (var g in A) {
									var B = A[g];
									void 0 !== B ? void 0 !== I.parameters[g] ? I.parameters[g] = B : console.warn("ArToolkitSource: '" + g + "' is not a property of this material.") : console.warn("ArToolkitSource: '" + g + "' parameter is undefined.")
								}
						}(A), this.onInitialClick = function () {
							this.domElement && this.domElement.play && this.domElement.play().then((() => {}))
						}
				};
			x.prototype.init = function (A, I) {
				var g = this;
				if ("image" === this.parameters.sourceType) var B = this._initSourceImage(C, I);
				else "video" === this.parameters.sourceType ? B = this._initSourceVideo(C, I) : "webcam" === this.parameters.sourceType ? B = this._initSourceWebcam(C, I) : console.assert(!1);
				return this.domElement = B, this.domElement.style.position = "absolute", this.domElement.style.top = "0px", this.domElement.style.left = "0px", this.domElement.style.zIndex = "-2", this.domElement.setAttribute("id", "arjs-video"), this;

				function C() {
					g.domElement && (document.body.appendChild(g.domElement), window.dispatchEvent(new CustomEvent("arjs-video-loaded", {
						detail: {
							component: document.querySelector("#arjs-video")
						}
					})), g.ready = !0, A && A())
				}
			}, x.prototype._initSourceImage = function (A) {
				var I = document.createElement("img");
				return I.src = this.parameters.sourceUrl, I.width = this.parameters.sourceWidth, I.height = this.parameters.sourceHeight, I.style.width = this.parameters.displayWidth + "px", I.style.height = this.parameters.displayHeight + "px", I.onload = A, I
			}, x.prototype._initSourceVideo = function (A) {
				var I = document.createElement("video");
				return I.src = this.parameters.sourceUrl, I.style.objectFit = "initial", I.autoplay = !0, I.webkitPlaysinline = !0, I.controls = !1, I.loop = !0, I.muted = !0, document.body.addEventListener("click", this.onInitialClick, {
					once: !0
				}), I.width = this.parameters.sourceWidth, I.height = this.parameters.sourceHeight, I.style.width = this.parameters.displayWidth + "px", I.style.height = this.parameters.displayHeight + "px", I.onloadeddata = A, I
			}, x.prototype._initSourceWebcam = function (A, I) {
				var g = this;
				I = I || function (A) {
					var I = new CustomEvent("camera-error", {
						error: A
					});
					window.dispatchEvent(I), setTimeout((() => {
						if (!document.getElementById("error-popup")) {
							var I = document.createElement("div");
							I.innerHTML = "Webcam Error\nName: " + A.name + "\nMessage: " + A.message, I.setAttribute("id", "error-popup"), document.body.appendChild(I)
						}
					}), 1e3)
				};
				var B = document.createElement("video");
				if (B.setAttribute("autoplay", ""), B.setAttribute("muted", ""), B.setAttribute("playsinline", ""), B.style.width = this.parameters.displayWidth + "px", B.style.height = this.parameters.displayHeight + "px", void 0 === navigator.mediaDevices || void 0 === navigator.mediaDevices.enumerateDevices || void 0 === navigator.mediaDevices.getUserMedia) {
					if (void 0 === navigator.mediaDevices) var C = "navigator.mediaDevices";
					else void 0 === navigator.mediaDevices.enumerateDevices ? C = "navigator.mediaDevices.enumerateDevices" : void 0 === navigator.mediaDevices.getUserMedia ? C = "navigator.mediaDevices.getUserMedia" : console.assert(!1);
					return I({
						name: "",
						message: "WebRTC issue-! " + C + " not present in your browser"
					}), null
				}

				const backCameraKeywords = [
					"rear",
					"back",
					"rück",
					"arrière",
					"trasera",
					"trás",
					"traseira",
					"posteriore",
					"后面",
					"後面",
					"背面",
					"后置", // alternative
					"後置", // alternative
					"背置", // alternative
					"задней",
					"الخلفية",
					"후",
					"arka",
					"achterzijde",
					"หลัง",
					"baksidan",
					"bagside",
					"sau",
					"bak",
					"tylny",
					"takakamera",
					"belakang",
					"אחורית",
					"πίσω",
					"spate",
					"hátsó",
					"zadní",
					"darrere",
					"zadná",
					"задня",
					"stražnja",
					"belakang",
					"बैक"
				];				

				return navigator.mediaDevices.enumerateDevices().then((function (devices) {

					const mainBackCamera = devices
					.filter(x => x.kind === "videoinput")
					.filter(camera => {
						const lowercaseLabel = camera.label.toLowerCase();
						return backCameraKeywords.some(keyword => lowercaseLabel.includes(keyword));
					})
					.sort((camera1, camera2) => camera1.label.localeCompare(camera2.label))[0];

					var userMediaConstraints = {
						audio: !1,
						video: {
							facingMode: "environment",
							width: {
								ideal: g.parameters.sourceWidth
							},
							height: {
								ideal: g.parameters.sourceHeight
							}
						}
					};

					const deviceId = g.parameters.deviceId || (mainBackCamera ? mainBackCamera.deviceId : null);

					deviceId && (userMediaConstraints.video.deviceId = {
						exact: deviceId
					}), navigator.mediaDevices.getUserMedia(userMediaConstraints).then((function (I) {
						B.srcObject = I;
						var C = new CustomEvent("camera-init", {
							stream: I
						});
						window.dispatchEvent(C), document.body.addEventListener("click", g.onInitialClick, {
							once: !0
						}), A()
					})).catch((function (A) {
						I({
							name: A.name,
							message: A.message
						})
					}))
				})).catch((function (A) {
					I({
						message: A.message
					})
				})), B
			}, x.prototype.dispose = function () {
				switch (this.ready = !1, this.parameters.sourceType) {
					case "image":
						this._disposeSourceImage();
						break;
					case "video":
						this._disposeSourceVideo();
						break;
					case "webcam":
						this._disposeSourceWebcam()
				}
				this.domElement = null, document.body.removeEventListener("click", this.onInitialClick, {
					once: !0
				})
			}, x.prototype._disposeSourceImage = function () {
				var A = document.querySelector("#arjs-video");
				A && A.remove()
			}, x.prototype._disposeSourceVideo = function () {
				var A = document.querySelector("#arjs-video");
				A && (A.pause(), A.removeAttribute("src"), A.load(), A.remove())
			}, x.prototype._disposeSourceWebcam = function () {
				var A = document.querySelector("#arjs-video");
				A && (A.srcObject && A.srcObject.getTracks && A.srcObject.getTracks().map((A => A.stop())), A.remove())
			}, x.prototype.hasMobileTorch = function () {
				var A = arToolkitSource.domElement.srcObject;
				if (A instanceof MediaStream == 0) return !1;
				void 0 === this._currentTorchStatus && (this._currentTorchStatus = !1);
				var I = A.getVideoTracks()[0];
				return void 0 !== I.getCapabilities && !!I.getCapabilities().torch
			}, x.prototype.toggleMobileTorch = function () {
				console.assert(!0 === this.hasMobileTorch());
				var A = arToolkitSource.domElement.srcObject;
				if (A instanceof MediaStream != 0) {
					void 0 === this._currentTorchStatus && (this._currentTorchStatus = !1);
					var I = A.getVideoTracks()[0];
					I.getCapabilities().torch ? (this._currentTorchStatus = !1 === this._currentTorchStatus, I.applyConstraints({
						advanced: [{
							torch: this._currentTorchStatus
						}]
					}).catch((function (A) {
						console.log(A)
					}))) : document.getElementById("error-popup") || ((g = document.createElement("div")).innerHTML = "no mobile torch is available on your camera", g.setAttribute("id", "error-popup"), document.body.appendChild(g))
				} else {
					var g;
					document.getElementById("error-popup") || ((g = document.createElement("div")).innerHTML = "enabling mobile torch is available only on webcam", g.setAttribute("id", "error-popup"), document.body.appendChild(g))
				}
			}, x.prototype.domElementWidth = function () {
				return parseInt(this.domElement.style.width)
			}, x.prototype.domElementHeight = function () {
				return parseInt(this.domElement.style.height)
			}, x.prototype.onResizeElement = function () {
				var A = window.innerWidth,
					I = window.innerHeight;
				if (console.assert(0 === arguments.length), "IMG" === this.domElement.nodeName) var g = this.domElement.naturalWidth,
					B = this.domElement.naturalHeight;
				else "VIDEO" === this.domElement.nodeName ? (g = this.domElement.videoWidth, B = this.domElement.videoHeight) : console.assert(!1);
				var C = g / B,
					Q = A / I;
				if (Q < C) {
					var E = C * I;
					this.domElement.style.width = E + "px", this.domElement.style.marginLeft = -(E - A) / 2 + "px", this.domElement.style.height = I + "px", this.domElement.style.marginTop = "0px"
				} else {
					var i = 1 / (C / A);
					this.domElement.style.height = i + "px", this.domElement.style.marginTop = -(i - I) / 2 + "px", this.domElement.style.width = A + "px", this.domElement.style.marginLeft = "0px"
				}
			}, x.prototype.copyElementSizeTo = function (A) {
				window.innerWidth > window.innerHeight ? (A.style.width = this.domElement.style.width, A.style.height = this.domElement.style.height, A.style.marginLeft = this.domElement.style.marginLeft, A.style.marginTop = this.domElement.style.marginTop) : (A.style.height = this.domElement.style.height, A.style.width = 4 * parseInt(A.style.height) / 3 + "px", A.style.marginLeft = (window.innerWidth - parseInt(A.style.width)) / 2 + "px", A.style.marginTop = 0)
			}, x.prototype.copySizeTo = function () {
				console.warn("obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"), this.copyElementSizeTo.apply(this, arguments)
			}, x.prototype.onResize = function (A, I, g) {
				if (3 !== arguments.length) return console.warn("obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"), this.onResizeElement.apply(this, arguments);
				var B = A.parameters.trackingBackend;
				if ("artoolkit" === B) {
					this.onResizeElement();
					var C = !!I.domElement.dataset.aframeCanvas;
					!1 === C && this.copyElementSizeTo(I.domElement), null !== A.arController && this.copyElementSizeTo(A.arController.canvas)
				} else console.assert(!1, "unhandled trackingBackend " + B);
				"artoolkit" === B ? null !== A.arController && g.projectionMatrix.copy(A.getProjectionMatrix()) : console.assert(!1, "unhandled trackingBackend " + B)
			};
			const V = x,
				v = function (A) {
					var g = this;
					this.parameters = {
							renderer: null,
							camera: null,
							scene: null,
							sourceParameters: {},
							contextParameters: {}
						},
						function (A) {
							if (void 0 !== A)
								for (var I in A) {
									var B = A[I];
									void 0 !== B ? void 0 !== g.parameters[I] ? g.parameters[I] = B : console.warn("THREEx.Session: '" + I + "' is not a property of this material.") : console.warn("THREEx.Session: '" + I + "' parameter is undefined.")
								}
						}(A), console.assert(this.parameters.renderer instanceof I.WebGLRenderer), console.assert(this.parameters.camera instanceof I.Camera), console.assert(this.parameters.scene instanceof I.Scene), Object.defineProperty(this, "renderer", {
							get: function () {
								return console.warn("use .parameters.renderer renderer"), this.parameters.renderer
							}
						}), Object.defineProperty(this, "camera", {
							get: function () {
								return console.warn("use .parameters.camera instead"), this.parameters.camera
							}
						}), Object.defineProperty(this, "scene", {
							get: function () {
								return console.warn("use .parameters.scene instead"), this.parameters.scene
							}
						}), console.log("AR.js", S.REVISION, "- trackingBackend:", A.contextParameters.trackingBackend);
					var B = g.arSource = new V(A.sourceParameters);
					B.init((function () {
						B.onResize(C, g.parameters.renderer, g.parameters.camera)
					})), window.addEventListener("resize", (function () {
						B.onResize(C, g.parameters.renderer, g.parameters.camera)
					}));
					var C = g.arContext = new S(A.contextParameters);

					function Q() {
						return console.log(g), g ? (console.log("actual source dimensions", B.domElement.clientWidth, B.domElement.clientHeight), B.domElement.clientWidth > B.domElement.clientHeight ? (console.log("source orientation", "landscape"), "landscape") : (console.log("source orientation", "portrait"), "portrait")) : null
					}
					window.addEventListener("arjs-video-loaded", (function () {
						C.init((() => {
							C.arController.orientation = Q(), C.arController.options.orientation = Q()
						}))
					})), C.addEventListener("initialized", (function (A) {
						B.onResize(C, g.parameters.renderer, g.parameters.camera)
					})), this.update = function () {
						!1 !== B.ready && C.update(B.domElement)
					}
				};
			v.prototype.onResize = function () {
				this.arSource.onResize(this.arContext, this.parameters.renderer, this.parameters.camera)
			};
			const X = v;
			A.registerSystem("arjs", {
				schema: {
					trackingMethod: {
						type: "string",
						default: "best"
					},
					debugUIEnabled: {
						type: "boolean",
						default: !1
					},
					areaLearningButton: {
						type: "boolean",
						default: !0
					},
					performanceProfile: {
						type: "string",
						default: "default"
					},
					labelingMode: {
						type: "string",
						default: ""
					},
					videoTexture: {
						type: "boolean",
						default: !1
					},
					debug: {
						type: "boolean",
						default: !1
					},
					detectionMode: {
						type: "string",
						default: ""
					},
					matrixCodeType: {
						type: "string",
						default: ""
					},
					patternRatio: {
						type: "number",
						default: -1
					},
					cameraParametersUrl: {
						type: "string",
						default: ""
					},
					maxDetectionRate: {
						type: "number",
						default: -1
					},
					sourceType: {
						type: "string",
						default: ""
					},
					sourceUrl: {
						type: "string",
						default: ""
					},
					sourceWidth: {
						type: "number",
						default: -1
					},
					sourceHeight: {
						type: "number",
						default: -1
					},
					deviceId: {
						type: "string",
						default: ""
					},
					displayWidth: {
						type: "number",
						default: -1
					},
					displayHeight: {
						type: "number",
						default: -1
					},
					canvasWidth: {
						type: "number",
						default: -1
					},
					canvasHeight: {
						type: "number",
						default: -1
					},
					errorPopup: {
						type: "string",
						default: ""
					}
				},
				init: function () {
					var A = this;
					if (!0 === this.data.videoTexture && "webcam" === this.data.sourceType) {
						var I = document.createElement("a-entity");
						return I.setAttribute("arjs-webcam-texture", !0), void this.el.sceneEl.appendChild(I)
					}
					var g = this._arProfile = (new Z).trackingMethod(this.data.trackingMethod).performance(this.data.performanceProfile).defaultMarker();
					!1 !== this.data.debug && (g.contextParameters.debug = this.data.debug), "" !== this.data.detectionMode && (g.contextParameters.detectionMode = this.data.detectionMode), "" !== this.data.matrixCodeType && (g.contextParameters.matrixCodeType = this.data.matrixCodeType), -1 !== this.data.patternRatio && (g.contextParameters.patternRatio = this.data.patternRatio), "" !== this.data.labelingMode && (g.contextParameters.labelingMode = this.data.labelingMode), "" !== this.data.cameraParametersUrl && (g.contextParameters.cameraParametersUrl = this.data.cameraParametersUrl), -1 !== this.data.maxDetectionRate && (g.contextParameters.maxDetectionRate = this.data.maxDetectionRate), -1 !== this.data.canvasWidth && (g.contextParameters.canvasWidth = this.data.canvasWidth), -1 !== this.data.canvasHeight && (g.contextParameters.canvasHeight = this.data.canvasHeight), "" !== this.data.sourceType && (g.sourceParameters.sourceType = this.data.sourceType), "" !== this.data.sourceUrl && (g.sourceParameters.sourceUrl = this.data.sourceUrl), -1 !== this.data.sourceWidth && (g.sourceParameters.sourceWidth = this.data.sourceWidth), -1 !== this.data.sourceHeight && (g.sourceParameters.sourceHeight = this.data.sourceHeight), "" !== this.data.deviceId && (g.sourceParameters.deviceId = this.data.deviceId), -1 !== this.data.displayWidth && (g.sourceParameters.displayWidth = this.data.displayWidth), -1 !== this.data.displayHeight && (g.sourceParameters.displayHeight = this.data.displayHeight), g.checkIfValid(), this._arSession = null, A.isReady = !1, A.needsOverride = !0, this.el.sceneEl.addEventListener("renderstart", (function () {
							var I = A.el.sceneEl.object3D,
								B = A.el.sceneEl.camera,
								C = A.el.sceneEl.renderer,
								Q = A._arSession = new X({
									scene: I,
									renderer: C,
									camera: B,
									sourceParameters: g.sourceParameters,
									contextParameters: g.contextParameters
								});
							A.isReady = !0, window.addEventListener("resize", (function () {
								var I = A._arSession.arSource;
								"tango" !== g.contextParameters.trackingBackend && I.copyElementSizeTo(document.body);
								var B = document.querySelector(".a-enter-vr");
								B && (B.style.position = "fixed")
							})), A.data.debugUIEnabled && function () {
								var A = document.querySelector("#arjsDebugUIContainer");
								null === A && ((A = document.createElement("div")).id = "arjsDebugUIContainer", A.setAttribute("style", "position: fixed; bottom: 10px; width:100%; text-align: center; z-index: 1;color: grey;"), document.body.appendChild(A));
								var I = new J(Q);
								A.appendChild(I.domElement)
							}()
						})),
						function (A, I = 1 / 0, g = 1e3) {
							if (null == A || "[object Function]" != Object.prototype.toString.call(A)) return;
							let B = 33.3,
								C = Date.now(),
								Q = function () {
									B = 2 * B < g ? 2 * B : g, setTimeout((function () {
										A(), (I == 1 / 0 || Date.now() - C < I) && Q()
									}), B)
								};
							Q()
						}((() => {
							window.dispatchEvent(new Event("resize"))
						}))
				},
				tick: function () {
					!1 !== this.isReady && !0 !== this.data.videoTexture && (this._arSession.update(), this._arSession.onResize())
				},
				_displayErrorPopup: function (A) {
					if ("" !== this.data.errorPopup) {
						let I = document.getElementById(this.data.errorPopup);
						I || (I = document.createElement("div"), I.setAttribute("id", this.data.errorPopup), document.body.appendChild(I)), I.innerHTML = A
					} else alert(A)
				}
			})
		})(), Q
	})()
}));
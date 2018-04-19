/*!
 * Fotorama 4.6.0 | http://fotorama.io/license/
 */
fotoramaVersion = "4.6.0",
	function (a, b, c, d, e) {
		"use strict";

		function f(a) {
			var b = "bez_" + d.makeArray(arguments).join("_").replace(".", "p");
			if ("function" != typeof d.easing[b]) {
				var c = function (a, b) {
					var c = [null, null],
						d = [null, null],
						e = [null, null],
						f = function (f, g) {
							return e[g] = 3 * a[g], d[g] = 3 * (b[g] - a[g]) - e[g], c[g] = 1 - e[g] - d[g], f * (e[g] + f * (d[g] + f * c[g]))
						},
						g = function (a) {
							return e[0] + a * (2 * d[0] + 3 * c[0] * a)
						},
						h = function (a) {
							for (var b, c = a, d = 0; ++d < 14 && (b = f(c, 0) - a, !(Math.abs(b) < .001));) c -= b / g(c);
							return c
						};
					return function (a) {
						return f(h(a), 1)
					}
				};
				d.easing[b] = function (b, d, e, f, g) {
					return f * c([a[0], a[1]], [a[2], a[3]])(d / g) + e
				}
			}
			return b
		}

		function g() {}

		function h(a, b, c) {
			return Math.max(isNaN(b) ? -1 / 0 : b, Math.min(isNaN(c) ? 1 / 0 : c, a))
		}

		function i(a) {
			return a.match(/ma/) && a.match(/-?\d+(?!d)/g)[a.match(/3d/) ? 12 : 4]
		}

		function j(a) {
			return Lc ? +i(a.css("transform")) : +a.css("left").replace("px", "")
		}

		function k(a) {
			var b = {};
			return Lc ? b.transform = "translate3d(" + a + "px,0,0)" : b.left = a, b
		}

		function l(a) {
			return {
				"transition-duration": a + "ms"
			}
		}

		function m(a, b) {
			return a = +String(a).replace(b || "px", ""), isNaN(a) ? e : a
		}

		function n(a) {
			return /%$/.test(a) ? m(a, "%") : e
		}

		function o(a, b) {
			return n(a) / 100 * b || m(a)
		}

		function p(a) {
			return (!isNaN(m(a)) || !isNaN(m(a, "%"))) && a
		}

		function q(a, b, c, d) {
			return (a - (d || 0)) * (b + (c || 0))
		}

		function r(a, b, c, d) {
			return -Math.round(a / (b + (c || 0)) - (d || 0))
		}

		function s(a) {
			var b = a.data();
			if (!b.tEnd) {
				var c = a[0],
					d = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						msTransition: "MSTransitionEnd",
						transition: "transitionend"
					};
				S(c, d[tc.prefixed("transition")], function (a) {
					b.tProp && a.propertyName.match(b.tProp) && b.onEndFn()
				}), b.tEnd = !0
			}
		}

		function t(a, b, c, d) {
			var e, f = a.data();
			f && (f.onEndFn = function () {
				e || (e = !0, clearTimeout(f.tT), c())
			}, f.tProp = b, clearTimeout(f.tT), f.tT = setTimeout(function () {
				f.onEndFn()
			}, 1.5 * d), s(a))
		}

		function u(a, b) {
			if (a.length) {
				var c = a.data();
				Lc ? (a.css(l(0)), c.onEndFn = g, clearTimeout(c.tT)) : a.stop();
				var d = v(b, function () {
					return j(a)
				});
				return a.css(k(d)), d
			}
		}

		function v() {
			for (var a, b = 0, c = arguments.length; c > b && (a = b ? arguments[b]() : arguments[b], "number" != typeof a); b++);
			return a
		}

		function w(a, b) {
			return Math.round(a + (b - a) / 1.5)
		}

		function x() {
			return x.p = x.p || ("https:" === c.protocol ? "https://" : "http://"), x.p
		}

		function y(a) {
			var c = b.createElement("a");
			return c.href = a, c
		}

		function z(a, b) {
			if ("string" != typeof a) return a;
			a = y(a);
			var c, d;
			if (a.host.match(/youtube\.com/) && a.search) {
				if (c = a.search.split("v=")[1]) {
					var e = c.indexOf("&"); - 1 !== e && (c = c.substring(0, e)), d = "youtube"
				}
			} else a.host.match(/youtube\.com|youtu\.be/) ? (c = a.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), d = "youtube") : a.host.match(/vimeo\.com/) && (d = "vimeo", c = a.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
			return c && d || !b || (c = a.href, d = "custom"), c ? {
				id: c,
				type: d,
				s: a.search.replace(/^\?/, ""),
				p: x()
			} : !1
		}

		function A(a, b, c) {
			var e, f, g = a.video;
			return "youtube" === g.type ? (f = x() + "img.youtube.com/vi/" + g.id + "/default.jpg", e = f.replace(/\/default.jpg$/, "/hqdefault.jpg"), a.thumbsReady = !0) : "vimeo" === g.type ? d.ajax({
				url: x() + "vimeo.com/api/v2/video/" + g.id + ".json",
				dataType: "jsonp",
				success: function (d) {
					a.thumbsReady = !0, B(b, {
						img: d[0].thumbnail_large,
						thumb: d[0].thumbnail_small
					}, a.i, c)
				}
			}) : a.thumbsReady = !0, {
				img: e,
				thumb: f
			}
		}

		function B(a, b, c, e) {
			for (var f = 0, g = a.length; g > f; f++) {
				var h = a[f];
				if (h.i === c && h.thumbsReady) {
					var i = {
						videoReady: !0
					};
					i[$c] = i[ad] = i[_c] = !1, e.splice(f, 1, d.extend({}, h, i, b));
					break
				}
			}
		}

		function C(a) {
			function b(a, b, e) {
				var f = a.children("img").eq(0),
					g = a.attr("href"),
					h = a.attr("src"),
					i = f.attr("src"),
					j = b.video,
					k = e ? z(g, j === !0) : !1;
				k ? g = !1 : k = j, c(a, f, d.extend(b, {
					video: k,
					img: b.img || g || h || i,
					thumb: b.thumb || i || h || g
				}))
			}

			function c(a, b, c) {
				var e = c.thumb && c.img !== c.thumb,
					f = m(c.width || a.attr("width")),
					g = m(c.height || a.attr("height"));
				d.extend(c, {
					width: f,
					height: g,
					thumbratio: R(c.thumbratio || m(c.thumbwidth || b && b.attr("width") || e || f) / m(c.thumbheight || b && b.attr("height") || e || g))
				})
			}
			var e = [];
			return a.children().each(function () {
				var a = d(this),
					f = Q(d.extend(a.data(), {
						id: a.attr("id")
					}));
				if (a.is("a, img")) b(a, f, !0);
				else {
					if (a.is(":empty")) return;
					c(a, null, d.extend(f, {
						html: this,
						_html: a.html()
					}))
				}
				e.push(f)
			}), e
		}

		function D(a) {
			return 0 === a.offsetWidth && 0 === a.offsetHeight
		}

		function E(a) {
			return !d.contains(b.documentElement, a)
		}

		function F(a, b, c) {
			a() ? b() : setTimeout(function () {
				F(a, b)
			}, c || 100)
		}

		function G(a) {
			c.replace(c.protocol + "//" + c.host + c.pathname.replace(/^\/?/, "/") + c.search + "#" + a)
		}

		function H(a, b, c, d) {
			var e = a.data(),
				f = e.measures;
			if (f && (!e.l || e.l.W !== f.width || e.l.H !== f.height || e.l.r !== f.ratio || e.l.w !== b.w || e.l.h !== b.h || e.l.m !== c || e.l.p !== d)) {
				var g = f.width,
					i = f.height,
					j = b.w / b.h,
					k = f.ratio >= j,
					l = "scaledown" === c,
					m = "contain" === c,
					n = "cover" === c,
					p = Z(d);
				k && (l || m) || !k && n ? (g = h(b.w, 0, l ? g : 1 / 0), i = g / f.ratio) : (k && n || !k && (l || m)) && (i = h(b.h, 0, l ? i : 1 / 0), g = i * f.ratio), a.css({
					width: Math.ceil(g),
					height: Math.ceil(i),
					left: Math.floor(o(p.x, b.w - g)),
					top: Math.floor(o(p.y, b.h - i))
				}), e.l = {
					W: f.width,
					H: f.height,
					r: f.ratio,
					w: b.w,
					h: b.h,
					m: c,
					p: d
				}
			}
			return !0
		}

		function I(a, b) {
			var c = a[0];
			c.styleSheet ? c.styleSheet.cssText = b : a.html(b)
		}

		function J(a, b, c) {
			return b === c ? !1 : b >= a ? "left" : a >= c ? "right" : "left right"
		}

		function K(a, b, c, d) {
			if (!c) return !1;
			if (!isNaN(a)) return a - (d ? 0 : 1);
			for (var e, f = 0, g = b.length; g > f; f++) {
				var h = b[f];
				if (h.id === a) {
					e = f;
					break
				}
			}
			return e
		}

		function L(a, b, c) {
			c = c || {}, a.each(function () {
				var a, e = d(this),
					f = e.data();
				f.clickOn || (f.clickOn = !0, d.extend(bb(e, {
					onStart: function (b) {
						a = b, (c.onStart || g).call(this, b)
					},
					onMove: c.onMove || g,
					onTouchEnd: c.onTouchEnd || g,
					onEnd: function (c) {
						c.moved || b.call(this, a)
					}
				}), {
					noMove: !0
				}))
			})
		}

		function M(a, b) {
			return '<div class="' + a + '">' + (b || "") + "</div>"
		}

		function N(a) {
			for (var b = a.length; b;) {
				var c = Math.floor(Math.random() * b--),
					d = a[b];
				a[b] = a[c], a[c] = d
			}
			return a
		}

		function O(a) {
			return "[object Array]" == Object.prototype.toString.call(a) && d.map(a, function (a) {
				return d.extend({}, a)
			})
		}

		function P(a, b, c) {
			a.scrollLeft(b || 0).scrollTop(c || 0)
		}

		function Q(a) {
			if (a) {
				var b = {};
				return d.each(a, function (a, c) {
					b[a.toLowerCase()] = c
				}), b
			}
		}

		function R(a) {
			if (a) {
				var b = +a;
				return isNaN(b) ? (b = a.split("/"), +b[0] / +b[1] || e) : b
			}
		}

		function S(a, b, c, d) {
			b && (a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent("on" + b, c))
		}

		function T(a) {
			return !!a.getAttribute("disabled")
		}

		function U(a) {
			return {
				tabindex: -1 * a + "",
				disabled: a
			}
		}

		function V(a, b) {
			S(a, "keyup", function (c) {
				T(a) || 13 == c.keyCode && b.call(a, c)
			})
		}

		function W(a, b) {
			S(a, "focus", a.onfocusin = function (c) {
				b.call(a, c)
			}, !0)
		}

		function X(a, b) {
			a.preventDefault ? a.preventDefault() : a.returnValue = !1, b && a.stopPropagation && a.stopPropagation()
		}

		function Y(a) {
			return a ? ">" : "<"
		}

		function Z(a) {
			return a = (a + "").split(/\s+/), {
				x: p(a[0]) || ed,
				y: p(a[1]) || ed
			}
		}

		function $(a, b) {
			var c = a.data(),
				e = Math.round(b.pos),
				f = function () {
					c.sliding = !1, (b.onEnd || g)()
				};
			"undefined" != typeof b.overPos && b.overPos !== b.pos && (e = b.overPos, f = function () {
				$(a, d.extend({}, b, {
					overPos: b.pos,
					time: Math.max(Tc, b.time / 2)
				}))
			});
			var h = d.extend(k(e), b.width && {
				width: b.width
			});
			c.sliding = !0, Lc ? (a.css(d.extend(l(b.time), h)), b.time > 10 ? t(a, "transform", f, b.time) : f()) : a.stop().animate(h, b.time, cd, f)
		}

		function _(a, b, c, e, f, h) {
			var i = "undefined" != typeof h;
			if (i || (f.push(arguments), Array.prototype.push.call(arguments, f.length), !(f.length > 1))) {
				a = a || d(a), b = b || d(b);
				var j = a[0],
					k = b[0],
					l = "crossfade" === e.method,
					m = function () {
						if (!m.done) {
							m.done = !0;
							var a = (i || f.shift()) && f.shift();
							a && _.apply(this, a), (e.onEnd || g)(!!a)
						}
					},
					n = e.time / (h || 1);
				c.removeClass(Qb + " " + Pb), a.stop().addClass(Qb), b.stop().addClass(Pb), l && k && a.fadeTo(0, 0), a.fadeTo(l ? n : 0, 1, l && m), b.fadeTo(n, 0, m), j && l || k || m()
			}
		}

		function ab(a) {
			var b = (a.touches || [])[0] || a;
			a._x = b.pageX, a._y = b.clientY, a._now = d.now()
		}

		function bb(a, c) {
			function e(a) {
				return m = d(a.target), u.checked = p = q = s = !1, k || u.flow || a.touches && a.touches.length > 1 || a.which > 1 || Dc && Dc.type !== a.type && Fc || (p = c.select && m.is(c.select, t)) ? p : (o = "touchstart" === a.type, q = m.is("a, a *", t), n = u.control, r = u.noMove || u.noSwipe || n ? 16 : u.snap ? 0 : 4, ab(a), l = Dc = a, Ec = a.type.replace(/down|start/, "move").replace(/Down/, "Move"), (c.onStart || g).call(t, a, {
					control: n,
					$target: m
				}), k = u.flow = !0, void((!o || u.go) && X(a)))
			}

			function f(a) {
				if (a.touches && a.touches.length > 1 || Qc && !a.isPrimary || Ec !== a.type || !k) return k && h(), void(c.onTouchEnd || g)();
				ab(a);
				var b = Math.abs(a._x - l._x),
					d = Math.abs(a._y - l._y),
					e = b - d,
					f = (u.go || u.x || e >= 0) && !u.noSwipe,
					i = 0 > e;
				o && !u.checked ? (k = f) && X(a) : (X(a), (c.onMove || g).call(t, a, {
					touch: o
				})), !s && Math.sqrt(Math.pow(b, 2) + Math.pow(d, 2)) > r && (s = !0), u.checked = u.checked || f || i
			}

			function h(a) {
				(c.onTouchEnd || g)();
				var b = k;
				u.control = k = !1, b && (u.flow = !1), !b || q && !u.checked || (a && X(a), Fc = !0, clearTimeout(Gc), Gc = setTimeout(function () {
					Fc = !1
				}, 1e3), (c.onEnd || g).call(t, {
					moved: s,
					$target: m,
					control: n,
					touch: o,
					startEvent: l,
					aborted: !a || "MSPointerCancel" === a.type
				}))
			}

			function i() {
				u.flow || setTimeout(function () {
					u.flow = !0
				}, 10)
			}

			function j() {
				u.flow && setTimeout(function () {
					u.flow = !1
				}, Sc)
			}
			var k, l, m, n, o, p, q, r, s, t = a[0],
				u = {};
			return Qc ? (S(t, "MSPointerDown", e), S(b, "MSPointerMove", f), S(b, "MSPointerCancel", h), S(b, "MSPointerUp", h)) : (S(t, "touchstart", e), S(t, "touchmove", f), S(t, "touchend", h), S(b, "touchstart", i), S(b, "touchend", j), S(b, "touchcancel", j), Hc.on("scroll", j), a.on("mousedown", e), Ic.on("mousemove", f).on("mouseup", h)), a.on("click", "a", function (a) {
				u.checked && X(a)
			}), u
		}

		function cb(a, b) {
			function c(c, d) {
				A = !0, j = l = c._x, q = c._now, p = [
					[q, j]
				], m = n = D.noMove || d ? 0 : u(a, (b.getPos || g)()), (b.onStart || g).call(B, c)
			}

			function e(a, b) {
				s = D.min, t = D.max, v = D.snap, x = a.altKey, A = z = !1, y = b.control, y || C.sliding || c(a)
			}

			function f(d, e) {
				D.noSwipe || (A || c(d), l = d._x, p.push([d._now, l]), n = m - (j - l), o = J(n, s, t), s >= n ? n = w(n, s) : n >= t && (n = w(n, t)), D.noMove || (a.css(k(n)), z || (z = !0, e.touch || Qc || a.addClass(dc)), (b.onMove || g).call(B, d, {
					pos: n,
					edge: o
				})))
			}

			function i(e) {
				if (!D.noSwipe || !e.moved) {
					A || c(e.startEvent, !0), e.touch || Qc || a.removeClass(dc), r = d.now();
					for (var f, i, j, k, o, q, u, w, y, z = r - Sc, C = null, E = Tc, F = b.friction, G = p.length - 1; G >= 0; G--) {
						if (f = p[G][0], i = Math.abs(f - z), null === C || j > i) C = f, k = p[G][1];
						else if (C === z || i > j) break;
						j = i
					}
					u = h(n, s, t);
					var H = k - l,
						I = H >= 0,
						J = r - C,
						K = J > Sc,
						L = !K && n !== m && u === n;
					v && (u = h(Math[L ? I ? "floor" : "ceil" : "round"](n / v) * v, s, t), s = t = u), L && (v || u === n) && (y = -(H / J), E *= h(Math.abs(y), b.timeLow, b.timeHigh), o = Math.round(n + y * E / F), v || (u = o), (!I && o > t || I && s > o) && (q = I ? s : t, w = o - q, v || (u = q), w = h(u + .03 * w, q - 50, q + 50), E = Math.abs((n - w) / (y / F)))), E *= x ? 10 : 1, (b.onEnd || g).call(B, d.extend(e, {
						moved: e.moved || K && v,
						pos: n,
						newPos: u,
						overPos: w,
						time: E
					}))
				}
			}
			var j, l, m, n, o, p, q, r, s, t, v, x, y, z, A, B = a[0],
				C = a.data(),
				D = {};
			return D = d.extend(bb(b.$wrap, d.extend({}, b, {
				onStart: e,
				onMove: f,
				onEnd: i
			})), D)
		}

		function db(a, b) {
			var c, e, f, h = a[0],
				i = {
					prevent: {}
				};
			return S(h, Rc, function (a) {
				var h = a.wheelDeltaY || -1 * a.deltaY || 0,
					j = a.wheelDeltaX || -1 * a.deltaX || 0,
					k = Math.abs(j) && !Math.abs(h),
					l = Y(0 > j),
					m = e === l,
					n = d.now(),
					o = Sc > n - f;
				e = l, f = n, k && i.ok && (!i.prevent[l] || c) && (X(a, !0), c && m && o || (b.shift && (c = !0, clearTimeout(i.t), i.t = setTimeout(function () {
					c = !1
				}, Uc)), (b.onEnd || g)(a, b.shift ? l : j)))
			}), i
		}

		function eb() {
			d.each(d.Fotorama.instances, function (a, b) {
				b.index = a
			})
		}

		function fb(a) {
			d.Fotorama.instances.push(a), eb()
		}

		function gb(a) {
			d.Fotorama.instances.splice(a.index, 1), eb()
		}
		var hb = "fotorama",
			ib = "fullscreen",
			jb = hb + "__wrap",
			kb = jb + "--css2",
			lb = jb + "--css3",
			mb = jb + "--video",
			nb = jb + "--fade",
			ob = jb + "--slide",
			pb = jb + "--no-controls",
			qb = jb + "--no-shadows",
			rb = jb + "--pan-y",
			sb = jb + "--rtl",
			tb = jb + "--only-active",
			ub = jb + "--no-captions",
			vb = jb + "--toggle-arrows",
			wb = hb + "__stage",
			xb = wb + "__frame",
			yb = xb + "--video",
			zb = wb + "__shaft",
			Ab = hb + "__grab",
			Bb = hb + "__pointer",
			Cb = hb + "__arr",
			Db = Cb + "--disabled",
			Eb = Cb + "--prev",
			Fb = Cb + "--next",
			Gb = hb + "__nav",
			Hb = Gb + "-wrap",
			Ib = Gb + "__shaft",
			Jb = Gb + "--dots",
			Kb = Gb + "--thumbs",
			Lb = Gb + "__frame",
			Mb = Lb + "--dot",
			Nb = Lb + "--thumb",
			Ob = hb + "__fade",
			Pb = Ob + "-front",
			Qb = Ob + "-rear",
			Rb = hb + "__shadow",
			Sb = Rb + "s",
			Tb = Sb + "--left",
			Ub = Sb + "--right",
			Vb = hb + "__active",
			Wb = hb + "__select",
			Xb = hb + "--hidden",
			Yb = hb + "--fullscreen",
			Zb = hb + "__fullscreen-icon",
			$b = hb + "__error",
			_b = hb + "__loading",
			ac = hb + "__loaded",
			bc = ac + "--full",
			cc = ac + "--img",
			dc = hb + "__grabbing",
			ec = hb + "__img",
			fc = ec + "--full",
			gc = hb + "__dot",
			hc = hb + "__thumb",
			ic = hc + "-border",
			jc = hb + "__html",
			kc = hb + "__video",
			lc = kc + "-play",
			mc = kc + "-close",
			nc = hb + "__caption",
			oc = hb + "__caption__wrap",
			pc = hb + "__spinner",
			qc = '" tabindex="0" role="button',
			rc = d && d.fn.jquery.split(".");
		if (!rc || rc[0] < 1 || 1 == rc[0] && rc[1] < 8) throw "Fotorama requires jQuery 1.8 or later and will not run without it.";
		var sc = {},
			tc = function (a, b, c) {
				function d(a) {
					r.cssText = a
				}

				function e(a, b) {
					return typeof a === b
				}

				function f(a, b) {
					return !!~("" + a).indexOf(b)
				}

				function g(a, b) {
					for (var d in a) {
						var e = a[d];
						if (!f(e, "-") && r[e] !== c) return "pfx" == b ? e : !0
					}
					return !1
				}

				function h(a, b, d) {
					for (var f in a) {
						var g = b[a[f]];
						if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
					}
					return !1
				}

				function i(a, b, c) {
					var d = a.charAt(0).toUpperCase() + a.slice(1),
						f = (a + " " + u.join(d + " ") + d).split(" ");
					return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + v.join(d + " ") + d).split(" "), h(f, b, c))
				}
				var j, k, l, m = "2.6.2",
					n = {},
					o = b.documentElement,
					p = "modernizr",
					q = b.createElement(p),
					r = q.style,
					s = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
					t = "Webkit Moz O ms",
					u = t.split(" "),
					v = t.toLowerCase().split(" "),
					w = {},
					x = [],
					y = x.slice,
					z = function (a, c, d, e) {
						var f, g, h, i, j = b.createElement("div"),
							k = b.body,
							l = k || b.createElement("body");
						if (parseInt(d, 10))
							for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : p + (d + 1), j.appendChild(h);
						return f = ["&#173;", '<style id="s', p, '">', a, "</style>"].join(""), j.id = p, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = o.style.overflow, o.style.overflow = "hidden", o.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), o.style.overflow = i), !!g
					},
					A = {}.hasOwnProperty;
				l = e(A, "undefined") || e(A.call, "undefined") ? function (a, b) {
					return b in a && e(a.constructor.prototype[b], "undefined")
				} : function (a, b) {
					return A.call(a, b)
				}, Function.prototype.bind || (Function.prototype.bind = function (a) {
					var b = this;
					if ("function" != typeof b) throw new TypeError;
					var c = y.call(arguments, 1),
						d = function () {
							if (this instanceof d) {
								var e = function () {};
								e.prototype = b.prototype;
								var f = new e,
									g = b.apply(f, c.concat(y.call(arguments)));
								return Object(g) === g ? g : f
							}
							return b.apply(a, c.concat(y.call(arguments)))
						};
					return d
				}), w.csstransforms3d = function () {
					var a = !!i("perspective");
					return a
				};
				for (var B in w) l(w, B) && (k = B.toLowerCase(), n[k] = w[B](), x.push((n[k] ? "" : "no-") + k));
				return n.addTest = function (a, b) {
					if ("object" == typeof a)
						for (var d in a) l(a, d) && n.addTest(d, a[d]);
					else {
						if (a = a.toLowerCase(), n[a] !== c) return n;
						b = "function" == typeof b ? b() : b, "undefined" != typeof enableClasses && enableClasses && (o.className += " " + (b ? "" : "no-") + a), n[a] = b
					}
					return n
				}, d(""), q = j = null, n._version = m, n._prefixes = s, n._domPrefixes = v, n._cssomPrefixes = u, n.testProp = function (a) {
					return g([a])
				}, n.testAllProps = i, n.testStyles = z, n.prefixed = function (a, b, c) {
					return b ? i(a, b, c) : i(a, "pfx")
				}, n
			}(a, b),
			uc = {
				ok: !1,
				is: function () {
					return !1
				},
				request: function () {},
				cancel: function () {},
				event: "",
				prefix: ""
			},
			vc = "webkit moz o ms khtml".split(" ");
		if ("undefined" != typeof b.cancelFullScreen) uc.ok = !0;
		else
			for (var wc = 0, xc = vc.length; xc > wc; wc++)
				if (uc.prefix = vc[wc], "undefined" != typeof b[uc.prefix + "CancelFullScreen"]) {
					uc.ok = !0;
					break
				}
		uc.ok && (uc.event = uc.prefix + "fullscreenchange", uc.is = function () {
			switch (this.prefix) {
				case "":
					return b.fullScreen;
				case "webkit":
					return b.webkitIsFullScreen;
				default:
					return b[this.prefix + "FullScreen"]
			}
		}, uc.request = function (a) {
			return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
		}, uc.cancel = function () {
			return "" === this.prefix ? b.cancelFullScreen() : b[this.prefix + "CancelFullScreen"]()
		});
		var yc, zc = {
				lines: 12,
				length: 5,
				width: 2,
				radius: 7,
				corners: 1,
				rotate: 15,
				color: "rgba(128, 128, 128, .75)",
				hwaccel: !0
			},
			Ac = {
				top: "auto",
				left: "auto",
				className: ""
			};
		! function (a, b) {
			yc = b()
		}(this, function () {
			function a(a, c) {
				var d, e = b.createElement(a || "div");
				for (d in c) e[d] = c[d];
				return e
			}

			function c(a) {
				for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
				return a
			}

			function d(a, b, c, d) {
				var e = ["opacity", b, ~~(100 * a), c, d].join("-"),
					f = .01 + c / d * 100,
					g = Math.max(1 - (1 - a) / b * (100 - f), a),
					h = m.substring(0, m.indexOf("Animation")).toLowerCase(),
					i = h && "-" + h + "-" || "";
				return o[e] || (p.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", p.cssRules.length), o[e] = 1), e
			}

			function f(a, b) {
				var c, d, f = a.style;
				for (b = b.charAt(0).toUpperCase() + b.slice(1), d = 0; d < n.length; d++)
					if (c = n[d] + b, f[c] !== e) return c;
				return f[b] !== e ? b : void 0
			}

			function g(a, b) {
				for (var c in b) a.style[f(a, c) || c] = b[c];
				return a
			}

			function h(a) {
				for (var b = 1; b < arguments.length; b++) {
					var c = arguments[b];
					for (var d in c) a[d] === e && (a[d] = c[d])
				}
				return a
			}

			function i(a) {
				for (var b = {
						x: a.offsetLeft,
						y: a.offsetTop
					}; a = a.offsetParent;) b.x += a.offsetLeft, b.y += a.offsetTop;
				return b
			}

			function j(a, b) {
				return "string" == typeof a ? a : a[b % a.length]
			}

			function k(a) {
				return "undefined" == typeof this ? new k(a) : void(this.opts = h(a || {}, k.defaults, q))
			}

			function l() {
				function b(b, c) {
					return a("<" + b + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', c)
				}
				p.addRule(".spin-vml", "behavior:url(#default#VML)"), k.prototype.lines = function (a, d) {
					function e() {
						return g(b("group", {
							coordsize: k + " " + k,
							coordorigin: -i + " " + -i
						}), {
							width: k,
							height: k
						})
					}

					function f(a, f, h) {
						c(m, c(g(e(), {
							rotation: 360 / d.lines * a + "deg",
							left: ~~f
						}), c(g(b("roundrect", {
							arcsize: d.corners
						}), {
							width: i,
							height: d.width,
							left: d.radius,
							top: -d.width >> 1,
							filter: h
						}), b("fill", {
							color: j(d.color, a),
							opacity: d.opacity
						}), b("stroke", {
							opacity: 0
						}))))
					}
					var h, i = d.length + d.width,
						k = 2 * i,
						l = 2 * -(d.width + d.length) + "px",
						m = g(e(), {
							position: "absolute",
							top: l,
							left: l
						});
					if (d.shadow)
						for (h = 1; h <= d.lines; h++) f(h, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
					for (h = 1; h <= d.lines; h++) f(h);
					return c(a, m)
				}, k.prototype.opacity = function (a, b, c, d) {
					var e = a.firstChild;
					d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
				}
			}
			var m, n = ["webkit", "Moz", "ms", "O"],
				o = {},
				p = function () {
					var d = a("style", {
						type: "text/css"
					});
					return c(b.getElementsByTagName("head")[0], d), d.sheet || d.styleSheet
				}(),
				q = {
					lines: 12,
					length: 7,
					width: 5,
					radius: 10,
					rotate: 0,
					corners: 1,
					color: "#000",
					direction: 1,
					speed: 1,
					trail: 100,
					opacity: .25,
					fps: 20,
					zIndex: 2e9,
					className: "spinner",
					top: "auto",
					left: "auto",
					position: "relative"
				};
			k.defaults = {}, h(k.prototype, {
				spin: function (b) {
					this.stop();
					var c, d, e = this,
						f = e.opts,
						h = e.el = g(a(0, {
							className: f.className
						}), {
							position: f.position,
							width: 0,
							zIndex: f.zIndex
						}),
						j = f.radius + f.length + f.width;
					if (b && (b.insertBefore(h, b.firstChild || null), d = i(b), c = i(h), g(h, {
							left: ("auto" == f.left ? d.x - c.x + (b.offsetWidth >> 1) : parseInt(f.left, 10) + j) + "px",
							top: ("auto" == f.top ? d.y - c.y + (b.offsetHeight >> 1) : parseInt(f.top, 10) + j) + "px"
						})), h.setAttribute("role", "progressbar"), e.lines(h, e.opts), !m) {
						var k, l = 0,
							n = (f.lines - 1) * (1 - f.direction) / 2,
							o = f.fps,
							p = o / f.speed,
							q = (1 - f.opacity) / (p * f.trail / 100),
							r = p / f.lines;
						! function s() {
							l++;
							for (var a = 0; a < f.lines; a++) k = Math.max(1 - (l + (f.lines - a) * r) % p * q, f.opacity), e.opacity(h, a * f.direction + n, k, f);
							e.timeout = e.el && setTimeout(s, ~~(1e3 / o))
						}()
					}
					return e
				},
				stop: function () {
					var a = this.el;
					return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = e), this
				},
				lines: function (b, e) {
					function f(b, c) {
						return g(a(), {
							position: "absolute",
							width: e.length + e.width + "px",
							height: e.width + "px",
							background: b,
							boxShadow: c,
							transformOrigin: "left",
							transform: "rotate(" + ~~(360 / e.lines * i + e.rotate) + "deg) translate(" + e.radius + "px,0)",
							borderRadius: (e.corners * e.width >> 1) + "px"
						})
					}
					for (var h, i = 0, k = (e.lines - 1) * (1 - e.direction) / 2; i < e.lines; i++) h = g(a(), {
						position: "absolute",
						top: 1 + ~(e.width / 2) + "px",
						transform: e.hwaccel ? "translate3d(0,0,0)" : "",
						opacity: e.opacity,
						animation: m && d(e.opacity, e.trail, k + i * e.direction, e.lines) + " " + 1 / e.speed + "s linear infinite"
					}), e.shadow && c(h, g(f("#000", "0 0 4px #000"), {
						top: "2px"
					})), c(b, c(h, f(j(e.color, i), "0 0 1px rgba(0,0,0,.1)")));
					return b
				},
				opacity: function (a, b, c) {
					b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
				}
			});
			var r = g(a("group"), {
				behavior: "url(#default#VML)"
			});
			return !f(r, "transform") && r.adj ? l() : m = f(r, "animation"), k
		});
		var Bc, Cc, Dc, Ec, Fc, Gc, Hc = d(a),
			Ic = d(b),
			Jc = "quirks" === c.hash.replace("#", ""),
			Kc = tc.csstransforms3d,
			Lc = Kc && !Jc,
			Mc = Kc || "CSS1Compat" === b.compatMode,
			Nc = uc.ok,
			Oc = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
			Pc = !Lc || Oc,
			Qc = navigator.msPointerEnabled,
			Rc = "onwheel" in b.createElement("div") ? "wheel" : b.onmousewheel !== e ? "mousewheel" : "DOMMouseScroll",
			Sc = 250,
			Tc = 300,
			Uc = 1400,
			Vc = 5e3,
			Wc = 2,
			Xc = 64,
			Yc = 500,
			Zc = 333,
			$c = "$stageFrame",
			_c = "$navDotFrame",
			ad = "$navThumbFrame",
			bd = "auto",
			cd = f([.1, 0, .25, 1]),
			dd = 99999,
			ed = "50%",
			fd = {
				width: null,
				minwidth: null,
				maxwidth: "100%",
				height: null,
				minheight: null,
				maxheight: null,
				ratio: null,
				margin: Wc,
				glimpse: 0,
				fit: "contain",
				position: ed,
				thumbposition: ed,
				nav: "dots",
				navposition: "bottom",
				navwidth: null,
				thumbwidth: Xc,
				thumbheight: Xc,
				thumbmargin: Wc,
				thumbborderwidth: Wc,
				thumbfit: "cover",
				allowfullscreen: !1,
				transition: "slide",
				clicktransition: null,
				transitionduration: Tc,
				captions: !0,
				hash: !1,
				startindex: 0,
				loop: !1,
				autoplay: !1,
				stopautoplayontouch: !0,
				keyboard: !1,
				arrows: !0,
				click: !0,
				swipe: !0,
				trackpad: !1,
				controlsonstart: !0,
				shuffle: !1,
				direction: "ltr",
				shadows: !0,
				spinner: null
			},
			gd = {
				left: !0,
				right: !0,
				down: !1,
				up: !1,
				space: !1,
				home: !1,
				end: !1
			};
		jQuery.Fotorama = function (a, e) {
			function f() {
				d.each(yd, function (a, b) {
					if (!b.i) {
						b.i = le++;
						var c = z(b.video, !0);
						if (c) {
							var d = {};
							b.video = c, b.img || b.thumb ? b.thumbsReady = !0 : d = A(b, yd, he), B(yd, {
								img: d.img,
								thumb: d.thumb
							}, b.i, he)
						}
					}
				})
			}

			function g(a) {
				return Yd[a] || he.fullScreen
			}

			function i(a) {
				var b = "keydown." + hb,
					c = hb + ie,
					d = "keydown." + c,
					f = "resize." + c + " orientationchange." + c;
				a ? (Ic.on(d, function (a) {
					var b, c;
					Cd && 27 === a.keyCode ? (b = !0, md(Cd, !0, !0)) : (he.fullScreen || e.keyboard && !he.index) && (27 === a.keyCode ? (b = !0, he.cancelFullScreen()) : a.shiftKey && 32 === a.keyCode && g("space") || 37 === a.keyCode && g("left") || 38 === a.keyCode && g("up") ? c = "<" : 32 === a.keyCode && g("space") || 39 === a.keyCode && g("right") || 40 === a.keyCode && g("down") ? c = ">" : 36 === a.keyCode && g("home") ? c = "<<" : 35 === a.keyCode && g("end") && (c = ">>")), (b || c) && X(a), c && he.show({
						index: c,
						slow: a.altKey,
						user: !0
					})
				}), he.index || Ic.off(b).on(b, "textarea, input, select", function (a) {
					!Cc.hasClass(ib) && a.stopPropagation()
				}), Hc.on(f, he.resize)) : (Ic.off(d), Hc.off(f))
			}

			function j(b) {
				b !== j.f && (b ? (a.html("").addClass(hb + " " + je).append(pe).before(ne).before(oe), fb(he)) : (pe.detach(), ne.detach(), oe.detach(), a.html(me.urtext).removeClass(je), gb(he)), i(b), j.f = b)
			}

			function n() {
				yd = he.data = yd || O(e.data) || C(a), zd = he.size = yd.length, !xd.ok && e.shuffle && N(yd), f(), Ie = y(Ie), zd && j(!0)
			}

			function s() {
				var a = 2 > zd || Cd;
				Le.noMove = a || Rd, Le.noSwipe = a || !e.swipe, !Vd && re.toggleClass(Ab, !e.click && !Le.noMove && !Le.noSwipe), Qc && pe.toggleClass(rb, !Le.noSwipe)
			}

			function t(a) {
				a === !0 && (a = ""), e.autoplay = Math.max(+a || Vc, 1.5 * Ud)
			}

			function w() {
				function a(a, c) {
					b[a ? "add" : "remove"].push(c)
				}
				he.options = e = Q(e), Rd = "crossfade" === e.transition || "dissolve" === e.transition, Ld = e.loop && (zd > 2 || Rd && (!Vd || "slide" !== Vd)), Ud = +e.transitionduration || Tc, Xd = "rtl" === e.direction, Yd = d.extend({}, e.keyboard && gd, e.keyboard);
				var b = {
					add: [],
					remove: []
				};
				Md = e.nav, Od = "top" === e.navposition, b.remove.push(Wb), ve.toggle(!!e.arrows), Rb(), Bd = new yc(d.extend(zc, e.spinner, Ac, {
					direction: Xd ? -1 : 1
				})), Ec(), Fc(), e.autoplay && t(e.autoplay), Sd = m(e.thumbwidth) || Xc, Td = m(e.thumbheight) || Xc, Me.ok = Oe.ok = e.trackpad && !Pc, s(), cd(e, [Ke]), Nd = "thumbs" === Md, Nd ? (rc(zd, "navThumb"), Ad = Ae, ge = ad, I(ne, d.Fotorama.jst.style({
					w: Sd,
					h: Td,
					b: e.thumbborderwidth,
					m: e.thumbmargin,
					s: ie,
					q: !Mc
				})), xe.addClass(Kb).removeClass(Jb)) : "dots" === Md ? (rc(zd, "navDot"), Ad = ze, ge = _c, xe.addClass(Jb).removeClass(Kb)) : (Md = !1, xe.removeClass(Kb + " " + Jb)), Md && (Od ? we.insertBefore(qe) : we.insertAfter(qe), wc.nav = !1, wc(Ad, ye, "nav")), Pd = e.allowfullscreen, Pd ? (Ce.prependTo(qe), Qd = Nc && "native" === Pd) : (Ce.detach(), Qd = !1), a(Rd, nb), a(!Rd, ob), a(!e.captions, ub), a(Xd, sb), a("always" !== e.arrows, vb), Wd = e.shadows && !Pc, a(!Wd, qb), pe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")), Je = d.extend({}, e)
			}

			function x(a) {
				return 0 > a ? (zd + a % zd) % zd : a >= zd ? a % zd : a
			}

			function y(a) {
				return h(a, 0, zd - 1)
			}

			function D(a) {
				return Ld ? x(a) : y(a)
			}

			function T(a) {
				return a > 0 || Ld ? a - 1 : !1
			}

			function Z(a) {
				return zd - 1 > a || Ld ? a + 1 : !1
			}

			function ab() {
				Le.min = Ld ? -1 / 0 : -q(zd - 1, Ke.w, e.margin, Fd), Le.max = Ld ? 1 / 0 : -q(0, Ke.w, e.margin, Fd), Le.snap = Ke.w + e.margin
			}

			function bb() {
				Ne.min = Math.min(0, Ke.nw - ye.width()), Ne.max = 0, ye.toggleClass(Ab, !(Ne.noMove = Ne.min === Ne.max))
			}

			function eb(a, b, c) {
				if ("number" == typeof a) {
					a = new Array(a);
					var e = !0
				}
				return d.each(a, function (a, d) {
					if (e && (d = a), "number" == typeof d) {
						var f = yd[x(d)];
						if (f) {
							var g = "$" + b + "Frame",
								h = f[g];
							c.call(this, a, d, f, h, g, h && h.data())
						}
					}
				})
			}

			function Ob(a, b, c, d) {
				(!Zd || "*" === Zd && d === Kd) && (a = p(e.width) || p(a) || Yc, b = p(e.height) || p(b) || Zc, he.resize({
					width: a,
					ratio: e.ratio || c || a / b
				}, 0, d !== Kd && "*"))
			}

			function Pb(a, b, c, f, g, h) {
				eb(a, b, function (a, i, j, k, l, m) {
					function n(a) {
						var b = x(i);
						ed(a, {
							index: b,
							src: w,
							frame: yd[b]
						})
					}

					function o() {
						t.remove(), d.Fotorama.cache[w] = "error", j.html && "stage" === b || !y || y === w ? (!w || j.html || r ? "stage" === b && (k.trigger("f:load").removeClass(_b + " " + $b).addClass(ac), n("load"), Ob()) : (k.trigger("f:error").removeClass(_b).addClass($b), n("error")), m.state = "error", !(zd > 1 && yd[i] === j) || j.html || j.deleted || j.video || r || (j.deleted = !0, he.splice(i, 1))) : (j[v] = w = y, Pb([i], b, c, f, g, !0))
					}

					function p() {
						d.Fotorama.measures[w] = u.measures = d.Fotorama.measures[w] || {
							width: s.width,
							height: s.height,
							ratio: s.width / s.height
						}, Ob(u.measures.width, u.measures.height, u.measures.ratio, i), t.off("load error").addClass(ec + (r ? " " + fc : "")).prependTo(k), H(t, (d.isFunction(c) ? c() : c) || Ke, f || j.fit || e.fit, g || j.position || e.position), d.Fotorama.cache[w] = m.state = "loaded", setTimeout(function () {
							k.trigger("f:load").removeClass(_b + " " + $b).addClass(ac + " " + (r ? bc : cc)), "stage" === b ? n("load") : (j.thumbratio === bd || !j.thumbratio && e.thumbratio === bd) && (j.thumbratio = u.measures.ratio, vd())
						}, 0)
					}

					function q() {
						var a = 10;
						F(function () {
							return !ee || !a-- && !Pc
						}, function () {
							p()
						})
					}
					if (k) {
						var r = he.fullScreen && j.full && j.full !== j.img && !m.$full && "stage" === b;
						if (!m.$img || h || r) {
							var s = new Image,
								t = d(s),
								u = t.data();
							m[r ? "$full" : "$img"] = t;
							var v = "stage" === b ? r ? "full" : "img" : "thumb",
								w = j[v],
								y = r ? null : j["stage" === b ? "thumb" : "img"];
							if ("navThumb" === b && (k = m.$wrap), !w) return void o();
							d.Fotorama.cache[w] ? ! function z() {
								"error" === d.Fotorama.cache[w] ? o() : "loaded" === d.Fotorama.cache[w] ? setTimeout(q, 0) : setTimeout(z, 100)
							}() : (d.Fotorama.cache[w] = "*", t.on("load", q).on("error", o)), m.state = "", s.src = w
						}
					}
				})
			}

			function Qb(a) {
				He.append(Bd.spin().el).appendTo(a)
			}

			function Rb() {
				He.detach(), Bd && Bd.stop()
			}

			function dc() {
				var a = Dd[$c];
				a && !a.data().state && (Qb(a), a.on("f:load f:error", function () {
					a.off("f:load f:error"), Rb()
				}))
			}

			function kc(a) {
				V(a, sd), W(a, function () {
					setTimeout(function () {
						P(xe)
					}, 0), Kc({
						time: Ud,
						guessIndex: d(this).data().eq,
						minMax: Ne
					})
				})
			}

			function rc(a, b) {
				eb(a, b, function (a, c, e, f, g, h) {
					if (!f) {
						f = e[g] = pe[g].clone(), h = f.data(), h.data = e;
						var i = f[0];
						"stage" === b ? (e.html && d('<div class="' + jc + '"></div>').append(e._html ? d(e.html).removeAttr("id").html(e._html) : e.html).appendTo(f), e.caption && d(M(nc, M(oc, e.caption))).appendTo(f), e.video && f.addClass(yb).append(Ee.clone()), W(i, function () {
							setTimeout(function () {
								P(qe)
							}, 0), pd({
								index: h.eq,
								user: !0
							})
						}), se = se.add(f)) : "navDot" === b ? (kc(i), ze = ze.add(f)) : "navThumb" === b && (kc(i), h.$wrap = f.children(":first"), Ae = Ae.add(f), e.video && h.$wrap.append(Ee.clone()))
					}
				})
			}

			function sc(a, b, c, d) {
				return a && a.length && H(a, b, c, d)
			}

			function tc(a) {
				eb(a, "stage", function (a, b, c, f, g, h) {
					if (f) {
						var i = x(b),
							j = c.fit || e.fit,
							k = c.position || e.position;
						h.eq = i, Qe[$c][i] = f.css(d.extend({
							left: Rd ? 0 : q(b, Ke.w, e.margin, Fd)
						}, Rd && l(0))), E(f[0]) && (f.appendTo(re), md(c.$video)), sc(h.$img, Ke, j, k), sc(h.$full, Ke, j, k)
					}
				})
			}

			function vc(a, b) {
				if ("thumbs" === Md && !isNaN(a)) {
					var c = -a,
						f = -a + Ke.nw;
					Ae.each(function () {
						var a = d(this),
							g = a.data(),
							h = g.eq,
							i = function () {
								return {
									h: Td,
									w: g.w
								}
							},
							j = i(),
							k = yd[h] || {},
							l = k.thumbfit || e.thumbfit,
							m = k.thumbposition || e.thumbposition;
						j.w = g.w, g.l + g.w < c || g.l > f || sc(g.$img, j, l, m) || b && Pb([h], "navThumb", i, l, m)
					})
				}
			}

			function wc(a, b, c) {
				if (!wc[c]) {
					var f = "nav" === c && Nd,
						g = 0;
					b.append(a.filter(function () {
						for (var a, b = d(this), c = b.data(), e = 0, f = yd.length; f > e; e++)
							if (c.data === yd[e]) {
								a = !0, c.eq = e;
								break
							}
						return a || b.remove() && !1
					}).sort(function (a, b) {
						return d(a).data().eq - d(b).data().eq
					}).each(function () {
						if (f) {
							var a = d(this),
								b = a.data(),
								c = Math.round(Td * b.data.thumbratio) || Sd;
							b.l = g, b.w = c, a.css({
								width: c
							}), g += c + e.thumbmargin
						}
					})), wc[c] = !0
				}
			}

			function xc(a) {
				return a - Re > Ke.w / 3
			}

			function Dc(a) {
				return !(Ld || Ie + a && Ie - zd + a || Cd)
			}

			function Ec() {
				var a = Dc(0),
					b = Dc(1);
				te.toggleClass(Db, a).attr(U(a)), ue.toggleClass(Db, b).attr(U(b))
			}

			function Fc() {
				Me.ok && (Me.prevent = {
					"<": Dc(0),
					">": Dc(1)
				})
			}

			function Gc(a) {
				var b, c, d = a.data();
				return Nd ? (b = d.l, c = d.w) : (b = a.position().left, c = a.width()), {
					c: b + c / 2,
					min: -b + 10 * e.thumbmargin,
					max: -b + Ke.w - c - 10 * e.thumbmargin
				}
			}

			function Jc(a) {
				var b = Dd[ge].data();
				$(Be, {
					time: 1.2 * a,
					pos: b.l,
					width: b.w - 2 * e.thumbborderwidth
				})
			}

			function Kc(a) {
				var b = yd[a.guessIndex][ge];
				if (b) {
					var c = Ne.min !== Ne.max,
						d = a.minMax || c && Gc(Dd[ge]),
						e = c && (a.keep && Kc.l ? Kc.l : h((a.coo || Ke.nw / 2) - Gc(b).c, d.min, d.max)),
						f = c && h(e, Ne.min, Ne.max),
						g = 1.1 * a.time;
					$(ye, {
						time: g,
						pos: f || 0,
						onEnd: function () {
							vc(f, !0)
						}
					}), ld(xe, J(f, Ne.min, Ne.max)), Kc.l = e
				}
			}

			function Oc() {
				Rc(ge), Pe[ge].push(Dd[ge].addClass(Vb))
			}

			function Rc(a) {
				for (var b = Pe[a]; b.length;) b.shift().removeClass(Vb)
			}

			function Uc(a) {
				var b = Qe[a];
				d.each(Ed, function (a, c) {
					delete b[x(c)]
				}), d.each(b, function (a, c) {
					delete b[a], c.detach()
				})
			}

			function Wc(a) {
				Fd = Gd = Ie;
				var b = Dd[$c];
				b && (Rc($c), Pe[$c].push(b.addClass(Vb)), a || he.show.onEnd(!0), u(re, 0, !0), Uc($c), tc(Ed), ab(), bb())
			}

			function cd(a, b) {
				a && d.each(b, function (b, c) {
					c && d.extend(c, {
						width: a.width || c.width,
						height: a.height,
						minwidth: a.minwidth,
						maxwidth: a.maxwidth,
						minheight: a.minheight,
						maxheight: a.maxheight,
						ratio: R(a.ratio)
					})
				})
			}

			function ed(b, c) {
				a.trigger(hb + ":" + b, [he, c])
			}

			function fd() {
				clearTimeout(hd.t), ee = 1, e.stopautoplayontouch ? he.stopAutoplay() : be = !0
			}

			function hd() {
				e.stopautoplayontouch || (id(), jd()), hd.t = setTimeout(function () {
					ee = 0
				}, Tc + Sc)
			}

			function id() {
				be = !(!Cd && !ce)
			}

			function jd() {
				if (clearTimeout(jd.t), !e.autoplay || be) return void(he.autoplay && (he.autoplay = !1, ed("stopautoplay")));
				he.autoplay || (he.autoplay = !0, ed("startautoplay"));
				var a = Ie,
					b = Dd[$c].data();
				F(function () {
					return b.state || a !== Ie
				}, function () {
					jd.t = setTimeout(function () {
						be || a !== Ie || he.show(Ld ? Y(!Xd) : x(Ie + (Xd ? -1 : 1)))
					}, e.autoplay)
				})
			}

			function kd() {
				he.fullScreen && (he.fullScreen = !1, Nc && uc.cancel(ke), Cc.removeClass(ib), Bc.removeClass(ib), a.removeClass(Yb).insertAfter(oe), Ke = d.extend({}, de), md(Cd, !0, !0), rd("x", !1), he.resize(), Pb(Ed, "stage"), P(Hc, _d, $d), ed("fullscreenexit"))
			}

			function ld(a, b) {
				Wd && (a.removeClass(Tb + " " + Ub), b && !Cd && a.addClass(b.replace(/^|\s/g, " " + Sb + "--")))
			}

			function md(a, b, c) {
				b && (pe.removeClass(mb), Cd = !1, s()), a && a !== Cd && (a.remove(), ed("unloadvideo")), c && (id(), jd())
			}

			function nd(a) {
				pe.toggleClass(pb, a)
			}

			function od(a) {
				if (!Le.flow) {
					var b = a ? a.pageX : od.x,
						c = b && !Dc(xc(b)) && e.click;
					od.p !== c && qe.toggleClass(Bb, c) && (od.p = c, od.x = b)
				}
			}

			function pd(a) {
				clearTimeout(pd.t), e.clicktransition && e.clicktransition !== e.transition ? setTimeout(function () {
					var b = e.transition;
					he.setOptions({
						transition: e.clicktransition
					}), Vd = b, pd.t = setTimeout(function () {
						he.show(a)
					}, 10)
				}, 0) : he.show(a)
			}

			function qd(a, b) {
				var c = a.target,
					f = d(c);
				f.hasClass(lc) ? he.playVideo() : c === De ? he.toggleFullScreen() : Cd ? c === Ge && md(Cd, !0, !0) : b ? nd() : e.click && pd({
					index: a.shiftKey || Y(xc(a._x)),
					slow: a.altKey,
					user: !0
				})
			}

			function rd(a, b) {
				Le[a] = Ne[a] = b
			}

			function sd(a) {
				var b = d(this).data().eq;
				pd({
					index: b,
					slow: a.altKey,
					user: !0,
					coo: a._x - xe.offset().left
				})
			}

			function td(a) {
				pd({
					index: ve.index(this) ? ">" : "<",
					slow: a.altKey,
					user: !0
				})
			}

			function ud(a) {
				W(a, function () {
					setTimeout(function () {
						P(qe)
					}, 0), nd(!1)
				})
			}

			function vd() {
				if (n(), w(), !vd.i) {
					vd.i = !0;
					var a = e.startindex;
					(a || e.hash && c.hash) && (Kd = K(a || c.hash.replace(/^#/, ""), yd, 0 === he.index || a, a)), Ie = Fd = Gd = Hd = Kd = D(Kd) || 0
				}
				if (zd) {
					if (wd()) return;
					Cd && md(Cd, !0), Ed = [], Uc($c), vd.ok = !0, he.show({
						index: Ie,
						time: 0
					}), he.resize()
				} else he.destroy()
			}

			function wd() {
				return !wd.f === Xd ? (wd.f = Xd, Ie = zd - 1 - Ie, he.reverse(), !0) : void 0
			}

			function xd() {
				xd.ok || (xd.ok = !0, ed("ready"))
			}
			Bc = d("html"), Cc = d("body");
			var yd, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, _d, ae, be, ce, de, ee, fe, ge, he = this,
				ie = d.now(),
				je = hb + ie,
				ke = a[0],
				le = 1,
				me = a.data(),
				ne = d("<style></style>"),
				oe = d(M(Xb)),
				pe = d(M(jb)),
				qe = d(M(wb)).appendTo(pe),
				re = (qe[0], d(M(zb)).appendTo(qe)),
				se = d(),
				te = d(M(Cb + " " + Eb + qc)),
				ue = d(M(Cb + " " + Fb + qc)),
				ve = te.add(ue).appendTo(qe),
				we = d(M(Hb)),
				xe = d(M(Gb)).appendTo(we),
				ye = d(M(Ib)).appendTo(xe),
				ze = d(),
				Ae = d(),
				Be = (re.data(), ye.data(), d(M(ic)).appendTo(ye)),
				Ce = d(M(Zb + qc)),
				De = Ce[0],
				Ee = d(M(lc)),
				Fe = d(M(mc)).appendTo(qe),
				Ge = Fe[0],
				He = d(M(pc)),
				Ie = !1,
				Je = {},
				Ke = {},
				Le = {},
				Me = {},
				Ne = {},
				Oe = {},
				Pe = {},
				Qe = {},
				Re = 0,
				Se = [];
			pe[$c] = d(M(xb)), pe[ad] = d(M(Lb + " " + Nb + qc, M(hc))), pe[_c] = d(M(Lb + " " + Mb + qc, M(gc))), Pe[$c] = [], Pe[ad] = [], Pe[_c] = [], Qe[$c] = {}, pe.addClass(Lc ? lb : kb).toggleClass(pb, !e.controlsonstart), me.fotorama = this, he.startAutoplay = function (a) {
				return he.autoplay ? this : (be = ce = !1, t(a || e.autoplay), jd(), this)
			}, he.stopAutoplay = function () {
				return he.autoplay && (be = ce = !0, jd()), this
			}, he.show = function (a) {
				var b;
				"object" != typeof a ? (b = a, a = {}) : b = a.index, b = ">" === b ? Gd + 1 : "<" === b ? Gd - 1 : "<<" === b ? 0 : ">>" === b ? zd - 1 : b, b = isNaN(b) ? K(b, yd, !0) : b, b = "undefined" == typeof b ? Ie || 0 : b, he.activeIndex = Ie = D(b), Id = T(Ie), Jd = Z(Ie), Ed = [Ie, Id, Jd], Gd = Ld ? b : Ie;
				var c = Math.abs(Hd - Gd),
					d = v(a.time, function () {
						return Math.min(Ud * (1 + (c - 1) / 12), 2 * Ud)
					}),
					f = a.overPos;
				a.slow && (d *= 10);
				var g = Dd;
				he.activeFrame = Dd = yd[Ie];
				var i = g === Dd && !a.user;
				md(Cd, Dd.i !== yd[x(Fd)].i), rc(Ed, "stage"), tc(Pc ? [Gd] : [Gd, T(Gd), Z(Gd)]), rd("go", !0), i || ed("show", {
					user: a.user,
					time: d
				}), be = !0;
				var j = he.show.onEnd = function (b) {
					if (!j.ok) {
						if (j.ok = !0, b || Wc(!0), i || ed("showend", {
								user: a.user
							}), !b && Vd && Vd !== e.transition) return he.setOptions({
							transition: Vd
						}), void(Vd = !1);
						dc(), Pb(Ed, "stage"), rd("go", !1), Fc(), od(), id(), jd()
					}
				};
				if (Rd) {
					var k = Dd[$c],
						l = Ie !== Hd ? yd[Hd][$c] : null;
					_(k, l, se, {
						time: d,
						method: e.transition,
						onEnd: j
					}, Se)
				} else $(re, {
					pos: -q(Gd, Ke.w, e.margin, Fd),
					overPos: f,
					time: d,
					onEnd: j
				});
				if (Ec(), Md) {
					Oc();
					var m = y(Ie + h(Gd - Hd, -1, 1));
					Kc({
						time: d,
						coo: m !== Ie && a.coo,
						guessIndex: "undefined" != typeof a.coo ? m : Ie,
						keep: i
					}), Nd && Jc(d)
				}
				return ae = "undefined" != typeof Hd && Hd !== Ie, Hd = Ie, e.hash && ae && !he.eq && G(Dd.id || Ie + 1), this
			}, he.requestFullScreen = function () {
				return Pd && !he.fullScreen && ($d = Hc.scrollTop(), _d = Hc.scrollLeft(), P(Hc), rd("x", !0), de = d.extend({}, Ke), a.addClass(Yb).appendTo(Cc.addClass(ib)), Bc.addClass(ib), md(Cd, !0, !0), he.fullScreen = !0, Qd && uc.request(ke), he.resize(), Pb(Ed, "stage"), dc(), ed("fullscreenenter")), this
			}, he.cancelFullScreen = function () {
				return Qd && uc.is() ? uc.cancel(b) : kd(), this
			}, he.toggleFullScreen = function () {
				return he[(he.fullScreen ? "cancel" : "request") + "FullScreen"]()
			}, S(b, uc.event, function () {
				!yd || uc.is() || Cd || kd()
			}), he.resize = function (a) {
				if (!yd) return this;
				var b = arguments[1] || 0,
					c = arguments[2];
				cd(he.fullScreen ? {
					width: "100%",
					maxwidth: null,
					minwidth: null,
					height: "100%",
					maxheight: null,
					minheight: null
				} : Q(a), [Ke, c || he.fullScreen || e]);
				var d = Ke.width,
					f = Ke.height,
					g = Ke.ratio,
					i = Hc.height() - (Md ? xe.height() : 0);
				return p(d) && (pe.addClass(tb).css({
					width: d,
					minWidth: Ke.minwidth || 0,
					maxWidth: Ke.maxwidth || dd
				}), d = Ke.W = Ke.w = pe.width(), Ke.nw = Md && o(e.navwidth, d) || d, e.glimpse && (Ke.w -= Math.round(2 * (o(e.glimpse, d) || 0))), re.css({
					width: Ke.w,
					marginLeft: (Ke.W - Ke.w) / 2
				}), f = o(f, i), f = f || g && d / g, f && (d = Math.round(d), f = Ke.h = Math.round(h(f, o(Ke.minheight, i), o(Ke.maxheight, i))), qe.stop().animate({
					width: d,
					height: f
				}, b, function () {
					pe.removeClass(tb)
				}), Wc(), Md && (xe.stop().animate({
					width: Ke.nw
				}, b), Kc({
					guessIndex: Ie,
					time: b,
					keep: !0
				}), Nd && wc.nav && Jc(b)), Zd = c || !0, xd())), Re = qe.offset().left, this
			}, he.setOptions = function (a) {
				return d.extend(e, a), vd(), this
			}, he.shuffle = function () {
				return yd && N(yd) && vd(), this
			}, he.destroy = function () {
				return he.cancelFullScreen(), he.stopAutoplay(), yd = he.data = null, j(), Ed = [], Uc($c), vd.ok = !1, this
			}, he.playVideo = function () {
				var a = Dd,
					b = a.video,
					c = Ie;
				return "object" == typeof b && a.videoReady && (Qd && he.fullScreen && he.cancelFullScreen(), F(function () {
					return !uc.is() || c !== Ie
				}, function () {
					c === Ie && (a.$video = a.$video || d(d.Fotorama.jst.video(b)), a.$video.appendTo(a[$c]), pe.addClass(mb), Cd = a.$video, s(), ve.blur(), Ce.blur(), ed("loadvideo"))
				})), this
			}, he.stopVideo = function () {
				return md(Cd, !0, !0), this
			}, qe.on("mousemove", od), Le = cb(re, {
				onStart: fd,
				onMove: function (a, b) {
					ld(qe, b.edge)
				},
				onTouchEnd: hd,
				onEnd: function (a) {
					ld(qe);
					var b = (Qc && !fe || a.touch) && e.arrows && "always" !== e.arrows;
					if (a.moved || b && a.pos !== a.newPos && !a.control) {
						var c = r(a.newPos, Ke.w, e.margin, Fd);
						he.show({
							index: c,
							time: Rd ? Ud : a.time,
							overPos: a.overPos,
							user: !0
						})
					} else a.aborted || a.control || qd(a.startEvent, b)
				},
				timeLow: 1,
				timeHigh: 1,
				friction: 2,
				select: "." + Wb + ", ." + Wb + " *",
				$wrap: qe
			}), Ne = cb(ye, {
				onStart: fd,
				onMove: function (a, b) {
					ld(xe, b.edge)
				},
				onTouchEnd: hd,
				onEnd: function (a) {
					function b() {
						Kc.l = a.newPos, id(), jd(), vc(a.newPos, !0)
					}
					if (a.moved) a.pos !== a.newPos ? (be = !0, $(ye, {
						time: a.time,
						pos: a.newPos,
						overPos: a.overPos,
						onEnd: b
					}), vc(a.newPos), Wd && ld(xe, J(a.newPos, Ne.min, Ne.max))) : b();
					else {
						var c = a.$target.closest("." + Lb, ye)[0];
						c && sd.call(c, a.startEvent)
					}
				},
				timeLow: .5,
				timeHigh: 2,
				friction: 5,
				$wrap: xe
			}), Me = db(qe, {
				shift: !0,
				onEnd: function (a, b) {
					fd(), hd(), he.show({
						index: b,
						slow: a.altKey
					})
				}
			}), Oe = db(xe, {
				onEnd: function (a, b) {
					fd(), hd();
					var c = u(ye) + .25 * b;
					ye.css(k(h(c, Ne.min, Ne.max))), Wd && ld(xe, J(c, Ne.min, Ne.max)), Oe.prevent = {
						"<": c >= Ne.max,
						">": c <= Ne.min
					}, clearTimeout(Oe.t), Oe.t = setTimeout(function () {
						Kc.l = c, vc(c, !0)
					}, Sc), vc(c)
				}
			}), pe.hover(function () {
				setTimeout(function () {
					ee || nd(!(fe = !0))
				}, 0)
			}, function () {
				fe && nd(!(fe = !1))
			}), L(ve, function (a) {
				X(a), td.call(this, a)
			}, {
				onStart: function () {
					fd(), Le.control = !0
				},
				onTouchEnd: hd
			}), ve.each(function () {
				V(this, function (a) {
					td.call(this, a)
				}), ud(this)
			}), V(De, he.toggleFullScreen), ud(De), d.each("load push pop shift unshift reverse sort splice".split(" "), function (a, b) {
				he[b] = function () {
					return yd = yd || [], "load" !== b ? Array.prototype[b].apply(yd, arguments) : arguments[0] && "object" == typeof arguments[0] && arguments[0].length && (yd = O(arguments[0])), vd(), he
				}
			}), vd()
		}, d.fn.fotorama = function (b) {
			return this.each(function () {
				var c = this,
					e = d(this),
					f = e.data(),
					g = f.fotorama;
				g ? g.setOptions(b, !0) : F(function () {
					return !D(c)
				}, function () {
					f.urtext = e.html(), new d.Fotorama(e, d.extend({}, fd, a.fotoramaDefaults, b, f))
				})
			})
		}, d.Fotorama.instances = [], d.Fotorama.cache = {}, d.Fotorama.measures = {}, d = d || {}, d.Fotorama = d.Fotorama || {}, d.Fotorama.jst = d.Fotorama.jst || {}, d.Fotorama.jst.style = function (a) {
			{
				var b, c = "";
				sc.escape
			}
			return c += ".fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:" + (null == (b = a.m) ? "" : b) + "px;\nheight:" + (null == (b = a.h) ? "" : b) + "px}\n.fotorama" + (null == (b = a.s) ? "" : b) + " .fotorama__thumb-border{\nheight:" + (null == (b = a.h - a.b * (a.q ? 0 : 2)) ? "" : b) + "px;\nborder-width:" + (null == (b = a.b) ? "" : b) + "px;\nmargin-top:" + (null == (b = a.m) ? "" : b) + "px}"
		}, d.Fotorama.jst.video = function (a) {
			function b() {
				c += d.call(arguments, "")
			}
			var c = "",
				d = (sc.escape, Array.prototype.join);
			return c += '<div class="fotorama__video"><iframe src="', b(("youtube" == a.type ? a.p + "youtube.com/embed/" + a.id + "?autoplay=1" : "vimeo" == a.type ? a.p + "player.vimeo.com/video/" + a.id + "?autoplay=1&badge=0" : a.id) + (a.s && "custom" != a.type ? "&" + a.s : "")), c += '" frameborder="0" allowfullscreen></iframe></div>\n'
		}, d(function () {
			d("." + hb + ':not([data-auto="false"])').fotorama(), "http://" === x() && c.host.match(/\./) && !a.blockFotoramaData && d("body").append('<iframe src="http://data.fotorama.io/?version=' + fotoramaVersion + '" style="display: none;"></iframe>')
		})
	}(window, document, location, "undefined" != typeof jQuery && jQuery);
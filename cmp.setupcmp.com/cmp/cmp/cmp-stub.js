(() => {
    let e = "__tcfapiLocator",
        t = [],
        a = window,
        n = a,
        s, c;
    for (; n;) {
        try {
            if (n.frames[e]) {
                s = n;
                break
            }
        } catch (o) {}
        if (n === a.top) break;
        n = a.parent
    }
    s || (! function t() {
        let n = a.document,
            s = !!a.frames[e];
        if (!s) {
            if (n.body) {
                let c = n.createElement("iframe");
                c.style.cssText = "display:none", c.name = e, n.body.appendChild(c)
            } else setTimeout(t, 5)
        }
        return !s
    }(), a.__tcfapi = function e(...a) {
        if (!a.length) return t;
        "setGdprApplies" === a[0] ? a.length > 3 && 2 === parseInt(a[1], 10) && "boolean" == typeof a[3] && (c = a[3], "function" == typeof a[2] && a[2]("set", !0)) : "ping" === a[0] ? "function" == typeof a[2] && a[2]({
            gdprApplies: c,
            cmpLoaded: !1,
            cmpStatus: "stub"
        }) : t.push(a)
    }, a.addEventListener("message", function e(t) {
        let a = "string" == typeof t.data,
            n = {};
        if (a) try {
            n = JSON.parse(t.data)
        } catch (s) {} else n = t.data;
        let c = "object" == typeof n && null !== n ? n.__tcfapiCall : null;
        c && window.__tcfapi(c.command, c.version, function(e, n) {
            let s = {
                __tcfapiReturn: {
                    returnValue: e,
                    success: n,
                    callId: c.callId
                }
            };
            t && t.source && t.source.postMessage && t.source.postMessage(a ? JSON.stringify(s) : s, "*")
        }, c.parameter)
    }, !1))
})();
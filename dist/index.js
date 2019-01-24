"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var calamari_1 = require("calamari");
var classNameApplyer = function (className_data) { return ({
    className: calamari_1.createClassName(className_data),
}); };
var nodeCreator = function (_a) {
    var component = _a.component, rest = __rest(_a, ["component"]);
    return calamari_1.createNode(__assign({}, rest, { component: component || 'div' }), classNameApplyer);
};
function createCalamari(block, elements) {
    return calamari_1.default(block, elements, nodeCreator);
}
exports.default = createCalamari;
;

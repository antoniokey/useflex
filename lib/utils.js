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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.createReactElement = function (elementType, style, className, children) {
    var el = react_1.default.createElement(elementType, {
        style: style,
        className: className,
    }, children);
    return el;
};
exports.fetchFlexContainerStyle = function (props) { return (__assign({ display: 'flex', flexDirection: props.direction, width: props.width, height: props.height, justifyContent: props.justifyContent, alignItems: props.alignItems, flex: props.flex, flexGrow: props.flexGrow, flexShrink: props.flexShrink, flexBasis: props.flexBasis, alignSelf: props.alignSelf, flexWrap: props.flexWrap }, props.style)); };
exports.fetchContainerElementType = function (props) { return props.flexContainerElementType ? props.flexContainerElementType : 'div'; };
exports.fetchFlexItemStyle = function (props) { return (__assign({ flex: props.flex, flexGrow: props.flexGrow, flexShrink: props.flexShrink, flexBasis: props.flexBasis, alignSelf: props.alignSelf, height: props.height, width: props.width }, props.style)); };
exports.fetchFlexItemElementType = function (props) { return props.itemType ? props.itemType : props.children.type; };
exports.fetchFlexItemElementChildren = function (props) { return props.itemType ? props.children : props.children.props.children; };

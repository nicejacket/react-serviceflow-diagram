(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("raphael"));
	else if(typeof define === 'function' && define.amd)
		define("react-serviceflow-diagram", ["react", "react-dom", "raphael"], factory);
	else if(typeof exports === 'object')
		exports["react-serviceflow-diagram"] = factory(require("react"), require("react-dom"), require("raphael"));
	else
		root["react-serviceflow-diagram"] = factory(root["react"], root["react-dom"], root["raphael"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Element_1 = __webpack_require__(7);
var Path = (function (_super) {
    __extends(Path, _super);
    function Path() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = null;
        return _this;
    }
    Path.prototype.getElement = function () {
        return this.element.getElement();
    };
    Path.prototype.render = function () {
        var _this = this;
        return (React.createElement(Element_1.default, __assign({ id: this.props.id, ref: function (node) { _this.element = node; }, type: "path" }, this.props)));
    };
    Path.defaultProps = {
        stroke: '#000',
        strokeWidth: 1,
    };
    return Path;
}(React.Component));
exports.default = Path;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENT_COLOR = '#66AA66';
exports.COMPLETED_COLOR = '#2674AA';
exports.ACTIVITY_STROKE_COLOR = '#bbbbbb';
exports.MAIN_STROKE_COLOR = '#585858';
exports.ACTIVITY_FILL_COLOR = '#f9f9f9';
exports.TASK_STROKE = 1;
exports.TASK_HIGHLIGHT_STROKE = 2;
exports.CALL_ACTIVITY_STROKE = 2;
var totalColors;
function setTotalColors(totalColors) {
    this.totalColors = totalColors;
}
exports.setTotalColors = setTotalColors;
function getFillOpacity() {
    return 0.6;
}
exports.getFillOpacity = getFillOpacity;
function getFillColour(key) {
    if (this.totalColors && this.totalColors.hasOwnProperty(key)) {
        var colorPercentage = this.totalColors[key];
        return this.convertColorToHsb(colorPercentage);
    }
    else {
        return exports.ACTIVITY_FILL_COLOR;
    }
}
exports.getFillColour = getFillColour;
function getBpmnColor(data, defaultColor) {
    if (data.current) {
        return exports.CURRENT_COLOR;
    }
    else if (data.completed) {
        return exports.COMPLETED_COLOR;
    }
    else {
        return defaultColor;
    }
}
exports.getBpmnColor = getBpmnColor;
function getBpmnStrokeWidth(data) {
    if (data.current || data.completed) {
        return exports.TASK_HIGHLIGHT_STROKE;
    }
    else {
        return exports.TASK_STROKE;
    }
}
exports.getBpmnStrokeWidth = getBpmnStrokeWidth;
function convertColorToHsb(colorPercentage) {
    var hue = (120.0 - (colorPercentage * 1.2)) / 360.0;
    return 'hsb(' + hue + ', 1, 1)';
}
exports.convertColorToHsb = convertColorToHsb;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(9);
var Set_1 = __webpack_require__(5);
__webpack_require__(29);
var CLS_PREFIX = 'sf-tooltip-diagram';
exports.POSITION = {
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
    BOTTOM: 'bottom',
};
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: false,
        };
        _this.root = null;
        _this.tooltip = null;
        _this.leave = true;
        _this.loopSet = function (set) {
            set.forEach(function (item) {
                if (item.type === 'set') {
                    _this.loopSet(item);
                }
                else {
                    item.mouseup(_this.onMouseEnterHandler);
                    item.mouseover(_this.onMouseEnterHandler);
                    item.touchend(_this.onMouseEnterHandler);
                    item.mouseout(_this.onMouseLevelAndScrollHandler);
                }
            });
        };
        _this.onMouseEnterHandler = function (e) {
            _this.leave = false;
            if (e.persist)
                e.persist();
            setTimeout(_this.onShowTooltipHandler.bind(_this, e), 10);
        };
        _this.onShowTooltipHandler = function (e) {
            var tooltip = ReactDOM.findDOMNode(_this.tooltip);
            var props = e.target.getBoundingClientRect();
            var top = props.top + (props.height / 2);
            var marginLeft = -1 * (tooltip.offsetWidth / 2);
            var marginTop = -1 * (tooltip.offsetHeight / 2);
            var left = props.left + (props.width / 2);
            if (_this.state.visible)
                return;
            if (_this.props.position === exports.POSITION.LEFT || _this.props.position === exports.POSITION.RIGHT) {
                left = (props.width / 2);
                if (top + marginTop < 0) {
                    tooltip.style.top = '0';
                    tooltip.style.marginTop = '0';
                }
                else {
                    tooltip.style.top = top + "px";
                    tooltip.style.marginTop = marginTop + "px";
                }
            }
            else {
                if (left + marginLeft < 0) {
                    tooltip.style.left = '0';
                    tooltip.style.marginLeft = '0';
                }
                else {
                    tooltip.style.left = left + "px";
                    tooltip.style.marginLeft = marginLeft + "px";
                }
            }
            if (_this.props.position === exports.POSITION.TOP) {
                tooltip.style.top = props.top - tooltip.offsetHeight - 10 + 'px';
            }
            else if (_this.props.position === exports.POSITION.RIGHT) {
                tooltip.style.left = props.left + props.width + 10 + 'px';
            }
            else if (_this.props.position === exports.POSITION.LEFT) {
                tooltip.style.left = props.left - tooltip.offsetWidth - 10 + 'px';
            }
            else {
                tooltip.style.top = props.top + props.height + 10 + 'px';
            }
            _this.setState({ visible: true });
        };
        _this.onHideHandler = function () {
            if (_this.leave) {
                _this.setState({ visible: false });
            }
        };
        _this.onMouseLevelAndScrollHandler = function (e) {
            _this.leave = true;
            setTimeout(_this.onHideHandler, 100);
        };
        return _this;
    }
    Tooltip.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            _this.loopSet(_this.root.getSet());
            window.addEventListener('scroll', _this.onMouseLevelAndScrollHandler, true);
            window.addEventListener('touchstart', _this.onMouseLevelAndScrollHandler);
        }, 0);
    };
    Tooltip.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.onMouseLevelAndScrollHandler);
        window.removeEventListener('touchstart', this.onMouseLevelAndScrollHandler);
    };
    Tooltip.prototype.render = function () {
        var _this = this;
        var cls = this.state.visible ? CLS_PREFIX + "-tooltip is-active" : CLS_PREFIX + "-tooltip";
        var _a = this.props.data, data = _a === void 0 ? {} : _a;
        return (React.createElement(Set_1.default, { ref: function (node) { _this.root = node; } },
            React.createElement("div", { ref: function (node) { _this.tooltip = node; }, className: cls, onMouseEnter: this.onMouseEnterHandler, onMouseLeave: this.onMouseLevelAndScrollHandler },
                React.createElement("div", { className: CLS_PREFIX + "-tooltip-header" },
                    data.type,
                    " ",
                    data.name || data.id),
                React.createElement("div", { className: CLS_PREFIX + "-tooltip-body" },
                    data.name ? React.createElement("div", { className: CLS_PREFIX + "-tooltip-name-property" },
                        React.createElement("span", { className: CLS_PREFIX + "-propertyName" }, "Name:"),
                        React.createElement("span", { className: CLS_PREFIX + "-propertyValue" }, data.name)) : null,
                    data.properties ? data.properties.map(function (prop) { return React.createElement("div", { className: CLS_PREFIX + "-tooltip-general-property", key: prop.name + "-" + prop.value },
                        React.createElement("span", { className: CLS_PREFIX + "-propertyName" }, prop.name),
                        React.createElement("span", { className: CLS_PREFIX + "-propertyValue" }, prop.value)); }) : null)),
            this.props.children));
    };
    Tooltip.defaultProps = {
        position: exports.POSITION.BOTTOM,
    };
    return Tooltip;
}(React.Component));
exports.default = Tooltip;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var React = __webpack_require__(0);
var Circle_1 = __webpack_require__(18);
var RaphaelIconCircle = (function (_super) {
    __extends(RaphaelIconCircle, _super);
    function RaphaelIconCircle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconCircle.prototype.render = function () {
        var _a = this.props, id = _a.id, x = _a.x, y = _a.y, radius = _a.radius, others = __rest(_a, ["id", "x", "y", "radius"]);
        return (React.createElement(Circle_1.default, __assign({ id: id, x: x, y: y, r: radius }, others)));
    };
    RaphaelIconCircle.defaultProps = {
        x: 0,
        y: 0,
        strokeWidth: 2.5,
        radius: 9.75,
    };
    return RaphaelIconCircle;
}(React.Component));
exports.default = RaphaelIconCircle;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(9);
var Utils_1 = __webpack_require__(12);
var Set = (function (_super) {
    __extends(Set, _super);
    function Set(props) {
        var _this = _super.call(this, props) || this;
        _this.set = null;
        _this.state = {
            loaded: false
        };
        return _this;
    }
    Set.prototype.componentDidMount = function () {
        var root = ReactDOM.findDOMNode(this.refs.root);
        var parentId = root.parentElement.getAttribute("data-id");
        var set = Utils_1.createSet(parentId, this.props, this.handleLoad.bind(this));
        this.set = set;
        this.setState({
            loaded: true,
            id: set.id
        });
    };
    Set.prototype.getSet = function () {
        return this.set;
    };
    Set.prototype.handleLoad = function (set) {
        if (this.props.load) {
            this.props.load(set);
        }
    };
    Set.prototype.componentWillUnmout = function () {
        Utils_1.removeSet(this.set);
    };
    Set.prototype.render = function () {
        if (this.state.loaded) {
            return (React.createElement("div", { ref: "root", className: "raphael-set", "data-id": this.state.id }, this.props.children));
        }
        else {
            return (React.createElement("div", { ref: "root", className: "raphael-set", "data-id": this.state.id }));
        }
    };
    return Set;
}(React.Component));
exports.default = Set;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tooltip_1 = __webpack_require__(3);
var Rect_1 = __webpack_require__(8);
var MultilineText_1 = __webpack_require__(50);
var Utils_1 = __webpack_require__(19);
var DiagramColorService_1 = __webpack_require__(2);
var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Task.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, text = _a.text, data = _a.data, children = _a.children;
        var _b = Utils_1.getStrokeAndFill(data), stroke = _b.stroke, strokeWidth = _b.strokeWidth, fill = _b.fill, fillOpacity = _b.fillOpacity;
        var childProps = {};
        if (stroke !== DiagramColorService_1.MAIN_STROKE_COLOR) {
            childProps.stroke = stroke;
            childProps.fill = stroke;
        }
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(Rect_1.default, { id: data.id, x: x, y: y, width: width, height: height, r: radius, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }),
            React.createElement(MultilineText_1.default, { x: x + width / 2, y: y + height / 2, color: stroke, text: text, width: width }),
            React.Children.map(children, function (child) { return React.cloneElement(child, childProps); })));
    };
    Task.defaultProps = {
        x: 0,
        y: 0,
        radius: 4,
    };
    return Task;
}(React.Component));
exports.default = Task;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(9);
var Utils_1 = __webpack_require__(12);
var Element = (function (_super) {
    __extends(Element, _super);
    function Element(props) {
        var _this = _super.call(this, props) || this;
        _this.element = null;
        _this.state = {
            loaded: false
        };
        return _this;
    }
    Element.prototype.componentDidMount = function () {
        var id = this.props.id;
        var root = ReactDOM.findDOMNode(this.refs.root);
        var parentId = root.parentElement.getAttribute('data-id');
        var element = Utils_1.createElement(parentId, this.props.type, this.props, this.handleLoad.bind(this));
        this.element = element;
        if (id)
            this.element.node.id = id;
        this.setState({ loaded: true });
    };
    Element.prototype.componentDidUpdate = function () {
        Utils_1.updateElement(this.element, this.props.type, this.props, this.handleUpdate.bind(this));
    };
    Element.prototype.componentWillUnmount = function () {
        Utils_1.removeElement(this.element);
    };
    Element.prototype.getElement = function () {
        return this.element;
    };
    Element.prototype.handleLoad = function (element) {
        if (this.props.load) {
            this.props.load(element);
        }
    };
    Element.prototype.handleUpdate = function (element) {
        if (this.props.update) {
            this.props.update(element);
        }
    };
    Element.prototype.render = function () {
        if (this.state.loaded)
            return null;
        return (React.createElement("div", { ref: 'root', className: "raphael-" + this.props.type }));
    };
    return Element;
}(React.Component));
exports.default = Element;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Element_1 = __webpack_require__(7);
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = null;
        return _this;
    }
    Rect.prototype.getElement = function () {
        return this.element.getElement();
    };
    Rect.prototype.render = function () {
        var _this = this;
        return (React.createElement(Element_1.default, __assign({ ref: function (node) { _this.element = node; }, type: "rect" }, this.props)));
    };
    Rect.defaultProps = {
        x: 0,
        y: 0,
        width: 80,
        height: 32,
        r: 0,
    };
    return Rect;
}(React.Component));
exports.default = Rect;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var DiagramIconTimer_1 = __webpack_require__(27);
var DiagramIconError_1 = __webpack_require__(31);
var DiagramIconSignal_1 = __webpack_require__(33);
var DiagramIconMessage_1 = __webpack_require__(35);
var DiagramIconCompensate_1 = __webpack_require__(37);
var DiagramContainerIconEvent = (function (_super) {
    __extends(DiagramContainerIconEvent, _super);
    function DiagramContainerIconEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramContainerIconEvent.prototype.render = function () {
        var _a = this.props, type = _a.type, x = _a.x, y = _a.y, width = _a.width, height = _a.height, data = _a.data, stroke = _a.stroke, fill = _a.fill;
        var baseProps = { x: x, y: y, width: width, height: height, stroke: stroke, data: data };
        switch (type) {
            case 'timer': {
                return React.createElement(DiagramIconTimer_1.default, __assign({}, baseProps));
            }
            case 'error': {
                return React.createElement(DiagramIconError_1.default, __assign({}, baseProps, { fill: fill }));
            }
            case 'signal': {
                return React.createElement(DiagramIconSignal_1.default, __assign({}, baseProps, { fill: fill }));
            }
            case 'message': {
                return React.createElement(DiagramIconMessage_1.default, __assign({}, baseProps));
            }
            case 'compensate': {
                return React.createElement(DiagramIconCompensate_1.default, __assign({}, baseProps, { fill: fill }));
            }
        }
        return null;
    };
    return DiagramContainerIconEvent;
}(React.Component));
exports.default = DiagramContainerIconEvent;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tooltip_1 = __webpack_require__(3);
var DiagramColorService_1 = __webpack_require__(2);
var Rhombus_1 = __webpack_require__(41);
var Gateway = (function (_super) {
    __extends(Gateway, _super);
    function Gateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gateway.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, strokeWidth = _a.strokeWidth, data = _a.data;
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(Rhombus_1.default, { id: data.id, x: x, y: y, width: width, height: height, stroke: DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR), strokeWidth: strokeWidth, fill: DiagramColorService_1.getFillColour(data.id), fillOpacity: DiagramColorService_1.getFillOpacity() }),
            this.props.children));
    };
    Gateway.defaultProps = {
        x: 0,
        y: 0,
        strokeWidth: 2,
    };
    return Gateway;
}(React.Component));
exports.default = Gateway;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var Raphael = __webpack_require__(14);
var PAPERS = [];
var ELEMENTS = [];
function createPaper(container, props) {
    var width = props.width, height = props.height, viewbox = props.viewbox;
    var paper = Raphael(container, width, height);
    if (viewbox) {
        var arr = viewbox.split(' ');
        paper.setViewBox(arr[0] || 0, arr[1] || 0, arr[2] || 0, arr[3] || 3, true);
    }
    paper.id = container.id || ("paper-" + new Date().valueOf() + "-" + Math.random().toFixed(10));
    PAPERS.push(paper);
    return paper;
}
exports.createPaper = createPaper;
function findParentById(id) {
    var papers = PAPERS.filter(function (ele) { return ele.id == id; });
    if (papers.length > 0) {
        return { parent: papers[0], paper: papers[0] };
    }
    else {
        var sets = ELEMENTS.filter(function (ele) { return ele.element.id == id; });
        if (sets.length > 0) {
            if (!sets[0].element)
                return sets[0].element;
            return { parent: sets[0].element, paper: sets[0].element.paper };
        }
    }
    return { parent: null, paper: null };
}
exports.findParentById = findParentById;
function create(parentId, type, props) {
    var element = null;
    var findedParent = findParentById(parentId);
    if (!findedParent.paper)
        return findedParent.paper;
    switch (type) {
        case 'set': {
            element = findedParent.paper.set();
            element.id = "set-" + new Date().valueOf() + "-" + Math.random().toFixed(10);
            break;
        }
        case 'circle': {
            var x = props.x, y = props.y, r = props.r, others = __rest(props, ["x", "y", "r"]);
            element = findedParent.paper.circle(x, y, r).attr(convertProps(others));
            break;
        }
        case 'ellipse': {
            var x = props.x, y = props.y, rx = props.rx, ry = props.ry;
            element = findedParent.paper.ellipse(x, y, rx, ry);
            break;
        }
        case 'image': {
            var src = props.src, x = props.x, y = props.y, width = props.width, height = props.height;
            element = findedParent.paper.image(src, x, y, width, height);
            break;
        }
        case 'path': {
            var d = props.d, others = __rest(props, ["d"]);
            if (!d || d.length == 0)
                d = 'M0,0L0,0Z';
            element = findedParent.paper.path(d).attr(convertProps(others));
            break;
        }
        case 'print': {
            var x = props.x, y = props.y, text = props.text, fontFamily = props.fontFamily, fontWeight = props.fontWeight, fontStyle = props.fontStyle, fontStretch = props.fontStretch, fontSize = props.fontSize, letterSpacing = props.letterSpacing;
            var font = findedParent.paper.getFont(fontFamily, fontWeight, fontStyle, fontStretch);
            element = findedParent.paper.print(x, y, text, font, fontSize, letterSpacing);
            break;
        }
        case 'rect': {
            var x = props.x, y = props.y, width = props.width, height = props.height, r = props.r, others = __rest(props, ["x", "y", "width", "height", "r"]);
            element = findedParent.paper.rect(x, y, width, height, r).attr(convertProps(others));
            break;
        }
        case 'text': {
            var x = props.x, y = props.y, text = props.text, others = __rest(props, ["x", "y", "text"]);
            element = findedParent.paper.text(x, y, text).attr(convertProps(others));
            break;
        }
        default: break;
    }
    if (element) {
        if (findedParent.parent.type === 'set') {
            element.set = findedParent.parent;
            findedParent.parent.push(element);
        }
    }
    updateElementProps(element, props);
    return element;
}
exports.create = create;
function createElement(parentId, type, props, callback) {
    var element = create(parentId, type, props);
    ELEMENTS.push({
        type: type,
        props: props,
        callback: callback,
        element: element
    });
    if (callback)
        callback(element);
    return element;
}
exports.createElement = createElement;
function createSet(parentId, props, callback) {
    var set = create(parentId, 'set', props);
    ELEMENTS.push({
        type: 'set',
        element: set
    });
    if (callback)
        callback(set);
    return set;
}
exports.createSet = createSet;
function updatePaper(paper, props) {
    var width = props.width, height = props.height;
    paper.setSize(width, height);
}
exports.updatePaper = updatePaper;
function updateElementProps(element, props) {
    if (element) {
        // fix matrix bug
        element.matrix = Raphael.matrix(null, null, null, null, null, null);
        element.attr('transform', '');
        for (var key in props) {
            switch (key) {
                case 'attr': {
                    if (typeof props[key] === 'object')
                        element.attr(props.attr);
                    break;
                }
                case 'animate': {
                    if (typeof props[key] === 'object')
                        element.animate(props.animate);
                    break;
                }
                case 'animateWith': {
                    if (typeof props[key] === 'object')
                        element.animateWith(props.animateWith);
                    break;
                }
                case 'click': {
                    if (typeof props[key] === 'function') {
                        element.unclick();
                        element.click(props.click);
                    }
                    break;
                }
                case 'data': {
                    if (typeof props[key] === 'object') {
                        for (var key_1 in props.data)
                            element.data(key_1, props.data[key_1]);
                        element.items = props.data;
                    }
                    break;
                }
                case 'dblclick': {
                    if (typeof props[key] === 'function') {
                        element.undblclick();
                        element.dblclick(props.dblclick);
                    }
                    break;
                }
                case 'drag': {
                    if (typeof props[key] === 'object') {
                        element.undrag();
                        element.drag(props.drag.move, props.drag.start, props.drag.end, props.drag.mcontext, props.drag.scontext, props.drag.econtext);
                    }
                    break;
                }
                case 'glow': {
                    if (typeof props[key] === 'object')
                        element.glow(props.glow);
                    break;
                }
                case 'hover': {
                    if (typeof props[key] === 'object') {
                        element.unhover();
                        element.hover(props.hover.in, props.hover.out, props.hover.icontext, props.hover.ocontext);
                    }
                    break;
                }
                case 'hide': {
                    if (typeof props[key] === 'boolean')
                        props.hide ? element.hide() : element.show();
                    break;
                }
                case 'mousedown': {
                    if (typeof props[key] === 'function') {
                        element.unmousedown();
                        element.mousedown(props.mousedown);
                    }
                    break;
                }
                case 'mousemove': {
                    if (typeof props[key] === 'function') {
                        element.unmousemove();
                        element.mousemove(props.mousemove);
                    }
                    break;
                }
                case 'mouseout': {
                    if (typeof props[key] === 'function') {
                        element.unmouseout();
                        element.mouseout(props.mouseout);
                    }
                    break;
                }
                case 'mouseover': {
                    if (typeof props[key] === 'function') {
                        element.unmouseover();
                        element.mouseover(props.mouseover);
                    }
                    break;
                }
                case 'mouseup': {
                    if (typeof props[key] === 'function') {
                        element.unmouseup();
                        element.mouseup(props.mouseup);
                    }
                    break;
                }
                case 'rotate': {
                    if (typeof props[key] === 'object') {
                        var _a = props.rotate, deg = _a.deg, cx = _a.cx, cy = _a.cy;
                        element.rotate(deg, cx, cy);
                    }
                    break;
                }
                case 'scale': {
                    if (typeof props[key] === 'object') {
                        var _b = props.scale, sx = _b.sx, sy = _b.sy, cx = _b.cx, cy = _b.cy;
                        element.scale(sx, sy, cx, cy);
                    }
                    break;
                }
                case 'touchcancel': {
                    if (typeof props[key] === 'function') {
                        element.untouchcancel();
                        element.touchcancel(props.touchcancel);
                    }
                    break;
                }
                case 'touchend': {
                    if (typeof props[key] === 'function') {
                        element.untouchend();
                        element.touchend(props.touchend);
                    }
                    break;
                }
                case 'touchmove': {
                    if (typeof props[key] === 'function') {
                        element.untouchmove();
                        element.touchmove(props.touchmove);
                    }
                    break;
                }
                case 'touchstart': {
                    if (typeof props[key] === 'function') {
                        element.untouchstart();
                        element.touchstart(props.touchstart);
                    }
                    break;
                }
                case 'transform': {
                    if (typeof props[key] === 'string')
                        element.transform(props.transform);
                    break;
                }
                case 'translate': {
                    if (typeof props[key] === 'object')
                        element.translate(props.translate.x, props.translate.y);
                    break;
                }
            }
        }
        // fix raphael #491
        if (Raphael.svg && element.node && element.node.nodeName == 'text' && element.node.childNodes.length > 0) {
            setTimeout(function () {
                if (element.node) {
                    var nodeY = element.node.getAttribute('y');
                    var childNode = element.node.childNodes[0];
                    var childDy = childNode.getAttribute('dy');
                    if (nodeY == childDy) {
                        childNode.setAttribute('dy', '0');
                    }
                }
            });
        }
    }
}
exports.updateElementProps = updateElementProps;
function updateElement(element, type, props, callback) {
    switch (type) {
        case 'circle': {
            var x = props.x, y = props.y, r = props.r;
            element.attr({ cx: x, cy: y, r: r });
            break;
        }
        case 'ellipse': {
            var x = props.x, y = props.y, rx = props.rx, ry = props.ry;
            element.attr({ cx: x, cy: y, rx: rx, ry: ry });
            break;
        }
        case 'image': {
            var src = props.src, x = props.x, y = props.y, width = props.width, height = props.height;
            element.attr({ src: src, x: x, y: y, width: width, height: height });
            break;
        }
        case 'path': {
            var d = props.d;
            if (!d || d.length == 0)
                d = 'M0,0L0,0Z';
            element.attr({ path: d });
            break;
        }
        case 'print': {
            var x = props.x, y = props.y, text = props.text, fontFamily = props.fontFamily, fontWeight = props.fontWeight, fontStyle = props.fontStyle, fontStretch = props.fontStretch, fontSize = props.fontSize, letterSpacing = props.letterSpacing;
            element.attr({ x: x, y: y, text: text, 'font-style': fontStyle, 'font-family': fontFamily, 'font-size': fontSize, 'font-weight': fontWeight, 'font-stretch': fontStretch, 'letter-scpacing': letterSpacing });
            break;
        }
        case 'rect': {
            element.attr(props);
            break;
        }
        case 'text': {
            var x = props.x, y = props.y, text = props.text;
            element.attr({ x: x, y: y, text: text });
            break;
        }
    }
    updateElementProps(element, props);
    if (callback)
        callback(element);
    return element;
}
exports.updateElement = updateElement;
function removePaper(paper) {
    var papers = PAPERS.filter(function (ele) { return ele === paper; });
    if (papers.length > 0)
        papers[0].remove();
}
exports.removePaper = removePaper;
function removeSet(set) {
    removeElement(set);
}
exports.removeSet = removeSet;
function removeElement(element) {
    var elements = ELEMENTS.filter(function (ele) { return ele.element === element; });
    if (elements.length > 0)
        elements[0].element.remove();
}
exports.removeElement = removeElement;
function convertProps(props) {
    var newProps = {};
    Object.keys(props).forEach(function (prop) {
        var newPropName = prop.replace(/[A-Z]/g, function (c) { return "-" + c.toLowerCase(); });
        newProps[newPropName] = props[prop];
    });
    return newProps;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Element_1 = __webpack_require__(7);
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = null;
        return _this;
    }
    Text.prototype.getElement = function () {
        return this.element.getElement();
    };
    Text.prototype.render = function () {
        var _this = this;
        return (React.createElement(Element_1.default, __assign({ ref: function (node) { _this.element = node; }, type: "text" }, this.props)));
    };
    Text.defaultProps = {
        x: 0,
        y: 0,
        text: '',
    };
    return Text;
}(React.Component));
exports.default = Text;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(25);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconCircle_1 = __webpack_require__(4);
var DiagramContainerIconEvent_1 = __webpack_require__(10);
var Tooltip_1 = __webpack_require__(3);
var Event = (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Event.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity, iconFill = _a.iconFill, data = _a.data;
        var type = data && data.eventDefinition && data.eventDefinition.type;
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(RaphaelIconCircle_1.default, { id: data.id, x: x + width / 2, y: y + height / 2, radius: radius, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }),
            React.createElement(DiagramContainerIconEvent_1.default, { type: type, x: x, y: y, width: width, height: height, fill: stroke, stroke: stroke, data: data })));
    };
    Event.defaultProps = {
        x: 0,
        y: 0,
    };
    return Event;
}(React.Component));
exports.default = Event;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Element_1 = __webpack_require__(7);
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = null;
        return _this;
    }
    Circle.prototype.getElement = function () {
        return this.element.getElement();
    };
    Circle.prototype.render = function () {
        var _this = this;
        return (React.createElement(Element_1.default, __assign({ id: this.props.id, ref: function (node) { _this.element = node; }, type: "circle" }, this.props)));
    };
    Circle.defaultProps = {
        x: 0,
        y: 0,
        r: 10,
    };
    return Circle;
}(React.Component));
exports.default = Circle;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DiagramColorService_1 = __webpack_require__(2);
function getStrokeAndFill(data) {
    return {
        stroke: DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR),
        strokeWidth: DiagramColorService_1.getBpmnStrokeWidth(data),
        fill: DiagramColorService_1.getFillColour(data.id),
        fillOpacity: DiagramColorService_1.getFillOpacity(),
    };
}
exports.getStrokeAndFill = getStrokeAndFill;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var Diagram_1 = __webpack_require__(21);
exports.Diagram = Diagram_1.default;
__export(__webpack_require__(81));
__export(__webpack_require__(82));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var React = __webpack_require__(0);
var Paper_1 = __webpack_require__(22);
var StartEvent_1 = __webpack_require__(26);
var ExclusiveGateway_1 = __webpack_require__(40);
var InclusiveGateway_1 = __webpack_require__(43);
var EventGateway_1 = __webpack_require__(44);
var ParallelGateway_1 = __webpack_require__(46);
var EndEvent_1 = __webpack_require__(48);
var UserTask_1 = __webpack_require__(49);
var ManualTask_1 = __webpack_require__(53);
var ServiceTask_1 = __webpack_require__(56);
var ReceiveTask_1 = __webpack_require__(59);
var ScriptTask_1 = __webpack_require__(62);
var BusinessRuleTask_1 = __webpack_require__(65);
var BoundaryEvent_1 = __webpack_require__(68);
var ThrowEvent_1 = __webpack_require__(69);
var IntermediateCatchingEvent_1 = __webpack_require__(70);
var SubProcess_1 = __webpack_require__(71);
var EventSubProcess_1 = __webpack_require__(72);
var SequenceFlow_1 = __webpack_require__(73);
var Pools_1 = __webpack_require__(77);
var PADDING_WIDTH = 60;
var PADDING_HEIGHT = 60;
var Diagram = (function (_super) {
    __extends(Diagram, _super);
    function Diagram(props) {
        var _this = _super.call(this, props) || this;
        _this.onMouseEnterHandler = function (e) {
            // const id = e.target.id;
            // const newTotalColors: any = {};
            // const newDiagram: DiagramModel = (Object as any).assign({}, this.state.diagram);
            // newTotalColors[id] = true;
            // setTotalColors(newTotalColors);
            // newDiagram.elements.forEach(ele => {
            //   ele.current = ele.id === id;
            // });
            // newDiagram.flows.forEach(flow => {
            //   flow.current = flow.id === id;
            // });
            // this.setState({ diagram: newDiagram });
        };
        _this.renderElement = function (ele) {
            if (_this.props.customerActivities) {
                var element = _this.props.customerActivities(ele);
                if (element)
                    return element;
            }
            var x = ele.x, y = ele.y, width = ele.width, height = ele.height, data = __rest(ele, ["x", "y", "width", "height"]);
            var id = data.id, name = data.name;
            var props = { x: +x, y: +y, width: +width, height: +height, data: data };
            switch (ele.type) {
                case 'StartEvent':
                    return React.createElement(StartEvent_1.default, __assign({}, props, { key: id }));
                case 'ExclusiveGateway':
                    return React.createElement(ExclusiveGateway_1.default, __assign({}, props, { key: id }));
                case 'InclusiveGateway':
                    return React.createElement(InclusiveGateway_1.default, __assign({}, props, { key: id }));
                case 'EventGateway':
                    return React.createElement(EventGateway_1.default, __assign({}, props, { key: id }));
                case 'ParallelGateway':
                    return React.createElement(ParallelGateway_1.default, __assign({}, props, { key: id }));
                case 'EndEvent':
                    return React.createElement(EndEvent_1.default, __assign({}, props, { key: id }));
                case 'UserTask':
                    return React.createElement(UserTask_1.default, __assign({}, props, { text: name, key: id }));
                case 'ManualTask':
                    return React.createElement(ManualTask_1.default, __assign({}, props, { text: name, key: id }));
                case 'ServiceTask':
                    return React.createElement(ServiceTask_1.default, __assign({}, props, { text: name, key: id }));
                case 'ReceiveTask':
                    return React.createElement(ReceiveTask_1.default, __assign({}, props, { text: name, key: id }));
                case 'ScriptTask':
                    return React.createElement(ScriptTask_1.default, __assign({}, props, { text: name, key: id }));
                case 'BusinessRuleTask':
                    return React.createElement(BusinessRuleTask_1.default, __assign({}, props, { text: name }));
                case 'BoundaryEvent':
                    return React.createElement(BoundaryEvent_1.default, __assign({}, props, { key: id }));
                case 'ThrowEvent':
                    return React.createElement(ThrowEvent_1.default, __assign({}, props, { key: id }));
                case 'IntermediateCatchEvent':
                    return React.createElement(IntermediateCatchingEvent_1.default, __assign({}, props, { key: id }));
                case 'SubProcess':
                    return React.createElement(SubProcess_1.default, __assign({}, props, { key: id }));
                case 'EventSubProcess':
                    return React.createElement(EventSubProcess_1.default, __assign({}, props, { key: id }));
            }
        };
        var diagram = props.diagram;
        _this.state = { diagram: diagram };
        return _this;
    }
    Diagram.prototype.componentWillReceiveProps = function (_a) {
        var diagram = _a.diagram;
        this.setState({ diagram: diagram });
    };
    Diagram.prototype.render = function () {
        var _a = this.props.diagram, diagramBeginX = _a.diagramBeginX, diagramBeginY = _a.diagramBeginY, diagramWidth = _a.diagramWidth, diagramHeight = _a.diagramHeight, elements = _a.elements, flows = _a.flows, pools = _a.pools;
        return (React.createElement(Paper_1.default, { x: diagramBeginX, y: diagramBeginY, width: diagramWidth + 10, height: diagramHeight, onMouseEnter: this.onMouseEnterHandler, onClick: this.props.onClick },
            elements.map(this.renderElement),
            flows.map(function (flow) { return React.createElement(SequenceFlow_1.default, { flow: flow, key: flow.id }); }),
            pools ? React.createElement(Pools_1.default, { pools: pools }) : null));
    };
    Diagram.defaultProps = {
        onClick: function () { },
    };
    return Diagram;
}(React.Component));
exports.default = Diagram;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(9);
var Utils_1 = __webpack_require__(12);
__webpack_require__(23);
var Paper = (function (_super) {
    __extends(Paper, _super);
    function Paper(props) {
        var _this = _super.call(this, props) || this;
        _this.paper = null;
        _this.container = null;
        _this.onClickHandler = function (e) {
            var onClick = _this.props.onClick;
            if (onClick && e.target.id)
                onClick(e.target.id);
        };
        _this.onMouseEnterHandler = function (e) {
            if (_this.props.onMouseEnter) {
                _this.props.onMouseEnter(e);
            }
        };
        _this.state = {
            loaded: false
        };
        return _this;
    }
    Paper.prototype.componentDidMount = function () {
        var container = ReactDOM.findDOMNode(this.container);
        var paper = Utils_1.createPaper(container, this.props);
        this.paper = paper;
        this.setState({
            loaded: true,
            id: paper.id,
        });
    };
    Paper.prototype.componentDidUpdate = function () {
        Utils_1.updatePaper(this.paper, this.props);
    };
    Paper.prototype.componentWillUnmount = function () {
        this.paper.remove();
    };
    Paper.prototype.getPaper = function () {
        return this.paper;
    };
    Paper.prototype.genElementsContainer = function () {
        if (this.state.loaded) {
            return (React.createElement("div", { className: 'raphael-paper', "data-id": this.state.id }, this.props.children));
        }
        else {
            return (React.createElement("div", { className: 'raphael-paper' }));
        }
    };
    Paper.prototype.render = function () {
        var _this = this;
        var eleContainer = this.genElementsContainer();
        var _a = this.props.container, style = _a.style, className = _a.className, others = __rest(_a, ["style", "className"]);
        return (React.createElement("div", { className: 'react-raphael' },
            eleContainer,
            React.createElement("div", __assign({ ref: function (node) { _this.container = node; }, className: "paper-container " + className, style: style }, others, { onClick: this.onClickHandler, onMouseOver: this.onMouseEnterHandler, onTouchEnd: this.onMouseEnterHandler }))));
    };
    Paper.defaultProps = {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        container: {
            style: {},
            className: '',
        },
        viewbox: '',
    };
    return Paper;
}(React.Component));
exports.default = Paper;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./Paper.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./Paper.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports


// module
exports.push([module.i, ".paper-container svg * {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var React = __webpack_require__(0);
var Event_1 = __webpack_require__(17);
var DiagramColorService_1 = __webpack_require__(2);
var StartEvent = (function (_super) {
    __extends(StartEvent, _super);
    function StartEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartEvent.prototype.render = function () {
        var _a = this.props, stroke = _a.stroke, fill = _a.fill, fillOpacity = _a.fillOpacity, data = _a.data, others = __rest(_a, ["stroke", "fill", "fillOpacity", "data"]);
        return (React.createElement(Event_1.default, __assign({ stroke: DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR), fill: DiagramColorService_1.getFillColour(data.id), fillOpacity: DiagramColorService_1.getFillOpacity(), data: data }, others)));
    };
    StartEvent.defaultProps = {
        radius: 15,
        strokeWidth: 1,
        iconFill: 'none',
    };
    return StartEvent;
}(React.Component));
exports.default = StartEvent;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconCircle_1 = __webpack_require__(4);
var RaphaelIconTImer_1 = __webpack_require__(28);
var Tooltip_1 = __webpack_require__(3);
var DiagramIconTimer = (function (_super) {
    __extends(DiagramIconTimer, _super);
    function DiagramIconTimer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconTimer.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, circle = _a.circle, timer = _a.timer, data = _a.data;
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(RaphaelIconCircle_1.default, { x: x + width / 2, y: y + height / 2, radius: circle.radius, stroke: circle.stroke, strokeWidth: circle.strokeWidth, fill: circle.fill, fillOpacity: circle.fillOpacity }),
            React.createElement(RaphaelIconTImer_1.default, { x: x + 5, y: y + 5, stroke: timer.stroke, strokeWidth: timer.strokeWidth, fill: timer.fill, fillOpacity: timer.fillOpacity })));
    };
    DiagramIconTimer.defaultProps = {
        x: 0,
        y: 0,
        width: 20,
        height: 20,
        circle: {
            stroke: 'black',
            fill: 'none',
        },
        timer: {
            stroke: 'none',
            fill: '#585858'
        }
    };
    return DiagramIconTimer;
}(React.Component));
exports.default = DiagramIconTimer;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = "M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20\n      10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5\n      L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217\n      15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125\n      10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007\n      8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5\n      L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z";
var RaphaelIconTimer = (function (_super) {
    __extends(RaphaelIconTimer, _super);
    function RaphaelIconTimer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconTimer.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, fill = _a.fill;
        return (React.createElement(Path_1.default, { d: PATH, stroke: stroke, fill: fill, transform: "T" + x + "," + y }));
    };
    return RaphaelIconTimer;
}(React.Component));
exports.default = RaphaelIconTimer;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(16)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./Tooltip.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js!./Tooltip.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(undefined);
// imports


// module
exports.push([module.i, ".sf-tooltip-diagram-tooltip {\n  transform: scale(0);\n  transform-origin: top center;\n  z-index: 999;\n  display: inline-block;\n  font-weight: 500;\n  line-height: 14px;\n  font-size: 14px;\n  max-width: 300px;\n  position: fixed;\n  top: -500px;\n  left: -500px;\n  text-align: left;\n  will-change: unset;\n  border: 1px solid #c5c5c5;\n  word-wrap: break-word;\n}\n.sf-tooltip-diagram-tooltip.is-active {\n  animation: tooltipAnimation 200ms cubic-bezier(0, 0, 0.2, 1) forwards;\n}\n.sf-tooltip-diagram-tooltip-header {\n  background-color: rgba(43, 65, 79, 0.95);\n  color: #FFF;\n  padding: 8px;\n  font-weight: bold;\n  min-width: 200px;\n  line-height: 20px;\n}\n.sf-tooltip-diagram-tooltip-body {\n  color: #4a4a4a;\n  background-color: rgba(255, 255, 255, 0.95);\n}\n.sf-tooltip-diagram-tooltip-body > div {\n  padding: 4px 8px;\n}\n.sf-tooltip-diagram-tooltip-body > div:first-child {\n  padding-top: 8px;\n}\n.sf-tooltip-diagram-tooltip-body > div:last-child {\n  padding-bottom: 8px;\n}\n.sf-tooltip-diagram-propertyName {\n  font-weight: bold;\n  margin-right: 5px;\n}\n.sf-tooltip-diagram-propertyValue {\n  font-style: italic;\n}\n@keyframes tooltipAnimation {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(0.99);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n    visibility: visible;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconError_1 = __webpack_require__(32);
var DiagramIconError = (function (_super) {
    __extends(DiagramIconError, _super);
    function DiagramIconError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconError.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(RaphaelIconError_1.default, { x: x - 1, y: y - 1, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    DiagramIconError.defaultProps = {
        x: 0,
        y: 0,
        stroke: 'black',
        strokeWidth: 1,
    };
    return DiagramIconError;
}(React.Component));
exports.default = DiagramIconError;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = "M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607\n      L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z";
;
var RaphaelIconError = (function (_super) {
    __extends(RaphaelIconError, _super);
    function RaphaelIconError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconError.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, fill = _a.fill;
        return React.createElement(Path_1.default, { d: PATH, stroke: stroke, fill: fill, transform: "T" + x + "," + y });
    };
    return RaphaelIconError;
}(React.Component));
exports.default = RaphaelIconError;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconSignal_1 = __webpack_require__(34);
var DiagramIconSignal = (function (_super) {
    __extends(DiagramIconSignal, _super);
    function DiagramIconSignal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconSignal.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(RaphaelIconSignal_1.default, { x: x - 1, y: y - 1, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    DiagramIconSignal.defaultProps = {
        x: 0,
        y: 0,
        width: 40,
        height: 40,
        stroke: 'black',
        strokeWidth: 1,
    };
    return DiagramIconSignal;
}(React.Component));
exports.default = DiagramIconSignal;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = "M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z";
var RaphaelIconSignal = (function (_super) {
    __extends(RaphaelIconSignal, _super);
    function RaphaelIconSignal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconSignal.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, others = __rest(_a, ["x", "y", "width", "height"]);
        return React.createElement(Path_1.default, __assign({ d: PATH, transform: "T" + x + "," + y }, others));
    };
    return RaphaelIconSignal;
}(React.Component));
exports.default = RaphaelIconSignal;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconMessage_1 = __webpack_require__(36);
var DiagramIconMessage = (function (_super) {
    __extends(DiagramIconMessage, _super);
    function DiagramIconMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconMessage.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(RaphaelIconMessage_1.default, { x: x + 6, y: y + 6, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    DiagramIconMessage.defaultProps = {
        x: 0,
        y: 0,
        width: 40,
        height: 40,
        fill: '#585858',
        strokeWidth: 1,
        stroke: 'none',
    };
    return DiagramIconMessage;
}(React.Component));
exports.default = DiagramIconMessage;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = "M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15\n      L 17 15 L 12 10 L 9 13 L 6 10 z";
var RaphaelIconMessage = (function (_super) {
    __extends(RaphaelIconMessage, _super);
    function RaphaelIconMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconMessage.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(Path_1.default, { d: PATH, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity, transform: "T" + x + "," + y }));
    };
    return RaphaelIconMessage;
}(React.Component));
exports.default = RaphaelIconMessage;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tooltip_1 = __webpack_require__(3);
var RaphaelIconCompensate_1 = __webpack_require__(38);
var DiagramIconCompensate = (function (_super) {
    __extends(DiagramIconCompensate, _super);
    function DiagramIconCompensate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconCompensate.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity, data = _a.data;
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(RaphaelIconCompensate_1.default, { x: x + width / 2, y: y + height / 2, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity })));
    };
    DiagramIconCompensate.defaultProps = {
        x: 0,
        y: 0,
        width: 20,
        height: 20,
        stroke: '#585858',
    };
    return DiagramIconCompensate;
}(React.Component));
exports.default = DiagramIconCompensate;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var React = __webpack_require__(0);
var Set_1 = __webpack_require__(5);
var ArrowLeft_1 = __webpack_require__(39);
var RaphaelIconCompensate = (function (_super) {
    __extends(RaphaelIconCompensate, _super);
    function RaphaelIconCompensate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconCompensate.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, others = __rest(_a, ["x", "y"]);
        return (React.createElement(Set_1.default, null,
            React.createElement(ArrowLeft_1.default, __assign({ transform: "T" + (x - 18) + "," + (y - 11) }, others)),
            React.createElement(ArrowLeft_1.default, __assign({ transform: "T" + (x - 26) + "," + (y - 11) }, others))));
    };
    return RaphaelIconCompensate;
}(React.Component));
exports.default = RaphaelIconCompensate;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = 'M24.39730641414141 2.1768707482993195 16.387205404040404 11.609977324263038 24.39730641414141 21.04308390022676Z';
var ArrowLeft = (function (_super) {
    __extends(ArrowLeft, _super);
    function ArrowLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrowLeft.prototype.render = function () {
        return (React.createElement(Path_1.default, __assign({ d: PATH }, this.props)));
    };
    return ArrowLeft;
}(React.Component));
exports.default = ArrowLeft;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Gateway_1 = __webpack_require__(11);
var RaphaelIconCross_1 = __webpack_require__(42);
var DiagramColorService_1 = __webpack_require__(2);
var ExclusiveGateway = (function (_super) {
    __extends(ExclusiveGateway, _super);
    function ExclusiveGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExclusiveGateway.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, strokeWidth = _a.strokeWidth, data = _a.data;
        return (React.createElement(Gateway_1.default, { x: x, y: y, width: width, height: height, data: data },
            React.createElement(RaphaelIconCross_1.default, { x: x, y: y, width: width, height: height, stroke: DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR), strokeWidth: strokeWidth, fill: DiagramColorService_1.getFillColour(data.id), fillOpacity: DiagramColorService_1.getFillOpacity() })));
    };
    ExclusiveGateway.defaultProps = {
        x: 0,
        y: 0,
        strokeWidth: 3,
    };
    return ExclusiveGateway;
}(React.Component));
exports.default = ExclusiveGateway;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var Rhombus = (function (_super) {
    __extends(Rhombus, _super);
    function Rhombus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rhombus.prototype.render = function () {
        var _a = this.props, id = _a.id, x = _a.x, y = _a.y, width = _a.width, height = _a.height, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        var PATH = 'M' + x + ' ' + (y + (height / 2)) +
            'L' + (x + (width / 2)) + ' ' + (y + height) +
            'L' + (x + width) + ' ' + (y + (height / 2)) +
            'L' + (x + (width / 2)) + ' ' + y + 'z';
        return (React.createElement(Path_1.default, { id: id, d: PATH, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    Rhombus.defaultProps = {
        x: 0,
        y: 0,
    };
    return Rhombus;
}(React.Component));
exports.default = Rhombus;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var RaphaelIconCross = (function (_super) {
    __extends(RaphaelIconCross, _super);
    function RaphaelIconCross() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconCross.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, others = __rest(_a, ["x", "y", "width", "height"]);
        var quarterWidth = width / 4;
        var quarterHeight = height / 4;
        var PATH = 'M' + (x + quarterWidth + 3) + ' ' + (y + quarterHeight + 3) +
            'L' + (x + 3 * quarterWidth - 3) + ' ' + (y + 3 * quarterHeight - 3) +
            'M' + (x + quarterWidth + 3) + ' ' + (y + 3 * quarterHeight - 3) +
            'L' + (x + 3 * quarterWidth - 3) + ' ' + (y + quarterHeight + 3);
        return React.createElement(Path_1.default, __assign({ d: PATH }, others));
    };
    RaphaelIconCross.defaultProps = {
        x: 0,
        y: 0,
        width: 64,
        height: 64,
        strokeWidth: 3,
    };
    return RaphaelIconCross;
}(React.Component));
exports.default = RaphaelIconCross;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Gateway_1 = __webpack_require__(11);
var RaphaelIconCircle_1 = __webpack_require__(4);
var DiagramColorService_1 = __webpack_require__(2);
var InclusiveGateway = (function (_super) {
    __extends(InclusiveGateway, _super);
    function InclusiveGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InclusiveGateway.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, strokeWidth = _a.strokeWidth, data = _a.data;
        return (React.createElement(Gateway_1.default, { x: x, y: y, width: width, height: height, data: data },
            React.createElement(RaphaelIconCircle_1.default, { x: x + width / 2, y: y + height / 2, radius: radius, stroke: DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR), strokeWidth: strokeWidth, fill: DiagramColorService_1.getFillColour(data.id), fillOpacity: DiagramColorService_1.getFillOpacity() })));
    };
    InclusiveGateway.defaultProps = {
        x: 0,
        y: 0,
        strokeWidth: 2.5,
        radius: 9.75,
    };
    return InclusiveGateway;
}(React.Component));
exports.default = InclusiveGateway;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Gateway_1 = __webpack_require__(11);
var RaphaelIconCircle_1 = __webpack_require__(4);
var Pentagon_1 = __webpack_require__(45);
var DiagramColorService_1 = __webpack_require__(2);
var EventGateway = (function (_super) {
    __extends(EventGateway, _super);
    function EventGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventGateway.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, circleRadiusInner = _a.circleRadiusInner, circleRadiusOuter = _a.circleRadiusOuter, pentaStrokeWidth = _a.pentaStrokeWidth, strokeWidth = _a.strokeWidth, data = _a.data;
        var stroke = DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR);
        var fill = DiagramColorService_1.getFillColour(data.id);
        var fillOpacity = DiagramColorService_1.getFillOpacity();
        return (React.createElement(Gateway_1.default, { x: x, y: y, width: width, height: height, data: data },
            React.createElement(RaphaelIconCircle_1.default, { x: x + width / 2, y: y + height / 2, radius: circleRadiusInner, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }),
            React.createElement(RaphaelIconCircle_1.default, { x: x + width / 2, y: y + height / 2, radius: circleRadiusOuter, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }),
            React.createElement(Pentagon_1.default, { x: x, y: y, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity })));
    };
    EventGateway.defaultProps = {
        x: 0,
        y: 0,
        strokeWidth: 0.5,
        circleRadiusInner: 10.4,
        circleRadiusOuter: 11.7,
        pentaStrokeWidth: 1.39999998,
    };
    return EventGateway;
}(React.Component));
exports.default = EventGateway;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = 'M 20.327514,22.344972 L 11.259248,22.344216 L 8.4577203,13.719549' +
    ' L 15.794545,8.389969 L 23.130481,13.720774 L 20.327514,22.344972 z';
var Pentagon = (function (_super) {
    __extends(Pentagon, _super);
    function Pentagon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pentagon.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y;
        return React.createElement(Path_1.default, { d: PATH, transform: "T" + (x + 4) + ", " + (y + 4) });
    };
    Pentagon.defaultProps = {
        x: 0,
        y: 0,
        strokeLinejoin: 'bevel',
    };
    return Pentagon;
}(React.Component));
exports.default = Pentagon;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Gateway_1 = __webpack_require__(11);
var RaphaelIconPlus_1 = __webpack_require__(47);
var DiagramColorService_1 = __webpack_require__(2);
var ParallelGatway = (function (_super) {
    __extends(ParallelGatway, _super);
    function ParallelGatway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParallelGatway.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, strokeWidth = _a.strokeWidth, data = _a.data;
        return (React.createElement(Gateway_1.default, { x: x, y: y, width: width, height: height, data: data },
            React.createElement(RaphaelIconPlus_1.default, { x: x, y: y, stroke: DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR), strokeWidth: strokeWidth, fill: DiagramColorService_1.getFillColour(data.id), fillOpacity: DiagramColorService_1.getFillOpacity() })));
    };
    ParallelGatway.defaultProps = {
        x: 0,
        y: 0,
        strokeWidth: 3,
    };
    return ParallelGatway;
}(React.Component));
exports.default = ParallelGatway;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var RaphaelIconPlus = (function (_super) {
    __extends(RaphaelIconPlus, _super);
    function RaphaelIconPlus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconPlus.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var px = x + ((width - 32) / 2);
        var py = y + ((height - 32) / 2);
        var PATH = 'M 6.75,16 L 25.75,16 M 16,6.75 L 16,25.75';
        var transform = "T" + px + "," + py;
        return React.createElement(Path_1.default, __assign({ d: PATH }, this.props, { transform: transform }));
    };
    RaphaelIconPlus.defaultProps = {
        x: 0,
        y: 0,
        width: 40,
        height: 40,
        strokeWidth: 3,
    };
    return RaphaelIconPlus;
}(React.Component));
exports.default = RaphaelIconPlus;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var React = __webpack_require__(0);
var Event_1 = __webpack_require__(17);
var DiagramColorService_1 = __webpack_require__(2);
var EndEvent = (function (_super) {
    __extends(EndEvent, _super);
    function EndEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EndEvent.prototype.render = function () {
        var _a = this.props, stroke = _a.stroke, fill = _a.fill, fillOpacity = _a.fillOpacity, data = _a.data, others = __rest(_a, ["stroke", "fill", "fillOpacity", "data"]);
        return (React.createElement(Event_1.default, __assign({ stroke: DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR), fill: DiagramColorService_1.getFillColour(data.id), fillOpacity: DiagramColorService_1.getFillOpacity(), data: data }, others)));
    };
    EndEvent.defaultProps = {
        radius: 14,
        strokeWidth: 4,
        iconFill: 'black',
    };
    return EndEvent;
}(React.Component));
exports.default = EndEvent;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Task_1 = __webpack_require__(6);
var DiagramIconUserTask_1 = __webpack_require__(51);
var UserTask = (function (_super) {
    __extends(UserTask, _super);
    function UserTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserTask.prototype.render = function () {
        return (React.createElement(Task_1.default, __assign({}, this.props),
            React.createElement(DiagramIconUserTask_1.default, __assign({}, this.props))));
    };
    return UserTask;
}(React.Component));
exports.default = UserTask;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Text_1 = __webpack_require__(13);
var TEXT_PADDING = 3;
var MultilineText = (function (_super) {
    __extends(MultilineText, _super);
    function MultilineText(props) {
        var _this = _super.call(this, props) || this;
        _this.textPaper = null;
        _this.formatText = function () {
            var _a = _this.props, width = _a.width, text = _a.text;
            var textPaper = _this.textPaper.getElement();
            var pText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            textPaper.attr({
                'text': pText
            });
            var letterWidth = textPaper.getBBox().width / pText.length;
            var removedLineBreaks = text.split('\n');
            var actualRowLength = 0;
            var formattedText = [];
            removedLineBreaks.forEach(function (senteces) {
                var words = senteces.split(' ');
                words.forEach(function (word) {
                    var length = word.length;
                    if (actualRowLength + (length * letterWidth) > width) {
                        formattedText.push('\n');
                        actualRowLength = 0;
                    }
                    actualRowLength += length * letterWidth;
                    formattedText.push(word + ' ');
                });
                formattedText.push('\n');
                actualRowLength = 0;
            });
            return formattedText.join('');
        };
        var text = props.text;
        _this.state = { text: text };
        return _this;
    }
    MultilineText.prototype.componentDidMount = function () {
        var formattedText = this.formatText();
        this.setState({ text: formattedText });
    };
    MultilineText.prototype.render = function () {
        var _this = this;
        var _a = this.props, x = _a.x, y = _a.y, color = _a.color, transform = _a.transform;
        return (React.createElement(Text_1.default, { ref: function (node) { _this.textPaper = node; }, text: this.state.text, x: x + TEXT_PADDING, y: y + TEXT_PADDING, fill: color, fontSize: 11, fontFamily: "Arial", textAnchor: "middle", transform: transform }));
    };
    MultilineText.defaultProps = {
        x: 0,
        y: 0,
        color: '#373e48',
    };
    return MultilineText;
}(React.Component));
exports.default = MultilineText;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconUser_1 = __webpack_require__(52);
var DiagramIconUserTask = (function (_super) {
    __extends(DiagramIconUserTask, _super);
    function DiagramIconUserTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconUserTask.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(RaphaelIconUser_1.default, { x: x + 4, y: y + 4, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    DiagramIconUserTask.defaultProps = {
        x: 0,
        y: 0,
        stroke: 'none',
        fill: '#d1b575',
    };
    return DiagramIconUserTask;
}(React.Component));
exports.default = DiagramIconUserTask;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = "m 1,17 16,0 0,-1.7778 -5.333332,-3.5555 0,-1.7778 c 1.244444,0 1.244444,-2.3111 1.244444,-2.3111\n      l 0,-3.0222 C 12.555557,0.8221 9.0000001,1.0001 9.0000001,1.0001 c 0,0 -3.5555556,-0.178 -3.9111111,3.5555 l 0,3.0222 c\n      0,0 0,2.3111 1.2444443,2.3111 l 0,1.7778 L 1,15.2222 1,17 17,17";
var RaphaelIconUser = (function (_super) {
    __extends(RaphaelIconUser, _super);
    function RaphaelIconUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconUser.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, fill = _a.fill, stroke = _a.stroke, fillOpacity = _a.fillOpacity;
        return (React.createElement(Path_1.default, { d: PATH, transform: "T" + x + "," + y, fillOpacity: fillOpacity, stroke: stroke, fill: fill }));
    };
    RaphaelIconUser.defaultProps = {
        fillOpacity: 1,
    };
    return RaphaelIconUser;
}(React.Component));
exports.default = RaphaelIconUser;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Task_1 = __webpack_require__(6);
var DiagramIconManualTask_1 = __webpack_require__(54);
var ManualTask = (function (_super) {
    __extends(ManualTask, _super);
    function ManualTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManualTask.prototype.render = function () {
        return (React.createElement(Task_1.default, __assign({}, this.props),
            React.createElement(DiagramIconManualTask_1.default, __assign({}, this.props))));
    };
    return ManualTask;
}(React.Component));
exports.default = ManualTask;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconManual_1 = __webpack_require__(55);
var DiagramIconManualTask = (function (_super) {
    __extends(DiagramIconManualTask, _super);
    function DiagramIconManualTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconManualTask.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(RaphaelIconManual_1.default, { x: x + 4, y: y + 4, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    DiagramIconManualTask.defaultProps = {
        x: 0,
        y: 0,
        stroke: 'none',
        fill: '#d1b575',
    };
    return DiagramIconManualTask;
}(React.Component));
exports.default = DiagramIconManualTask;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = "m 17,9.3290326 c -0.0069,0.5512461 -0.455166,1.0455894 -0.940778,1.0376604 l -5.792746,0 c\n      0.0053,0.119381 0.0026,0.237107 0.0061,0.355965 l 5.154918,0 c 0.482032,-0.0096 0.925529,0.49051 0.919525,1.037574 -0.0078,0.537128\n      -0.446283,1.017531 -0.919521,1.007683 l -5.245273,0 c -0.01507,0.104484 -0.03389,0.204081 -0.05316,0.301591 l 2.630175,0\n      c 0.454137,-0.0096 0.872112,0.461754 0.866386,0.977186 C 13.619526,14.554106 13.206293,15.009498 12.75924,15 L 3.7753054,15\n      C 3.6045812,15 3.433552,14.94423 3.2916363,14.837136 c -0.00174,0 -0.00436,0 -0.00609,0 C 1.7212035,14.367801\n      0.99998255,11.458641 1,11.458641 L 1,7.4588393 c 0,0 0.6623144,-1.316333 1.8390583,-2.0872584 1.1767614,-0.7711868\n      6.8053358,-2.40497 7.2587847,-2.8052901 0.453484,-0.40032 1.660213,1.4859942 0.04775,2.4010487 C 8.5332315,5.882394\n      8.507351,5.7996113 8.4370292,5.7936859 l 6.3569748,-0.00871 c 0.497046,-0.00958 0.952273,0.5097676 0.94612,1.0738232\n      -0.0053,0.556126 -0.456176,1.0566566 -0.94612,1.0496854 l -4.72435,0 c 0.01307,0.1149374 0.0244,0.2281319 0.03721,0.3498661\n      l 5.952195,0 c 0.494517,-0.00871 0.947906,0.5066305 0.940795,1.0679848 z";
var RaphaelIconManual = (function (_super) {
    __extends(RaphaelIconManual, _super);
    function RaphaelIconManual() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconManual.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, fill = _a.fill;
        return (React.createElement(Path_1.default, { d: PATH, stroke: stroke, fill: fill, fillOpacity: 1, transform: "T" + x + "," + y }));
    };
    return RaphaelIconManual;
}(React.Component));
exports.default = RaphaelIconManual;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Task_1 = __webpack_require__(6);
var DiagramIconServiceTask_1 = __webpack_require__(57);
var ServiceTask = (function (_super) {
    __extends(ServiceTask, _super);
    function ServiceTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceTask.prototype.render = function () {
        return (React.createElement(Task_1.default, __assign({}, this.props),
            React.createElement(DiagramIconServiceTask_1.default, __assign({}, this.props))));
    };
    return ServiceTask;
}(React.Component));
exports.default = ServiceTask;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconService_1 = __webpack_require__(58);
var DiagramIconServiceTask = (function (_super) {
    __extends(DiagramIconServiceTask, _super);
    function DiagramIconServiceTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconServiceTask.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(RaphaelIconService_1.default, { x: x + 4, y: y + 4, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    DiagramIconServiceTask.defaultProps = {
        x: 0,
        y: 0,
        stroke: 'none',
        fill: '#72a7d0',
    };
    return DiagramIconServiceTask;
}(React.Component));
exports.default = DiagramIconServiceTask;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = 'M 8,1 7.5,2.875 c 0,0 -0.02438,0.250763 -0.40625,0.4375 C 7.05724,3.330353 7.04387,3.358818 7,3.375' +
    ' 6.6676654,3.4929791 6.3336971,3.6092802 6.03125,3.78125 6.02349,3.78566 6.007733,3.77681 6,3.78125 5.8811373,3.761018' +
    ' 5.8125,3.71875 5.8125,3.71875 l -1.6875,-1 -1.40625,1.4375 0.96875,1.65625 c 0,0 0.065705,0.068637 0.09375,0.1875' +
    ' 0.002,0.00849 -0.00169,0.022138 0,0.03125 C 3.6092802,6.3336971 3.4929791,6.6676654 3.375,7 3.3629836,7.0338489' +
    ' 3.3239228,7.0596246 3.3125,7.09375 3.125763,7.4756184 2.875,7.5 2.875,7.5 L 1,8 l 0,2 1.875,0.5 c 0,0 0.250763,0.02438' +
    ' 0.4375,0.40625 0.017853,0.03651 0.046318,0.04988 0.0625,0.09375 0.1129372,0.318132 0.2124732,0.646641 0.375,0.9375' +
    ' -0.00302,0.215512 -0.09375,0.34375 -0.09375,0.34375 L 2.6875,13.9375 4.09375,15.34375 5.78125,14.375 c 0,0' +
    ' 0.1229911,-0.09744 0.34375,-0.09375 0.2720511,0.147787 0.5795915,0.23888 0.875,0.34375 0.033849,0.01202 0.059625,0.05108' +
    ' 0.09375,0.0625 C 7.4756199,14.874237 7.5,15.125 7.5,15.125 L 8,17 l 2,0 0.5,-1.875 c 0,0 0.02438,-0.250763 0.40625,-0.4375' +
    ' 0.03651,-0.01785 0.04988,-0.04632 0.09375,-0.0625 0.332335,-0.117979 0.666303,-0.23428 0.96875,-0.40625 0.177303,0.0173' +
    ' 0.28125,0.09375 0.28125,0.09375 l 1.65625,0.96875 1.40625,-1.40625 -0.96875,-1.65625 c 0,0 -0.07645,-0.103947' +
    ' -0.09375,-0.28125 0.162527,-0.290859 0.262063,-0.619368 0.375,-0.9375 0.01618,-0.04387 0.04465,-0.05724 0.0625,-0.09375 C' +
    ' 14.874237,10.52438 15.125,10.5 15.125,10.5 L 17,10 17,8 15.125,7.5 c 0,0 -0.250763,-0.024382 -0.4375,-0.40625 C' +
    ' 14.669647,7.0572406 14.641181,7.0438697 14.625,7 14.55912,6.8144282 14.520616,6.6141566 14.4375,6.4375 c -0.224363,-0.4866' +
    ' 0,-0.71875 0,-0.71875 L 15.40625,4.0625 14,2.625 l -1.65625,1 c 0,0 -0.253337,0.1695664 -0.71875,-0.03125 l -0.03125,0 C' +
    ' 11.405359,3.5035185 11.198648,3.4455201 11,3.375 10.95613,3.3588185 10.942759,3.3303534 10.90625,3.3125 10.524382,3.125763' +
    ' 10.5,2.875 10.5,2.875 L 10,1 8,1 z m 1,5 c 1.656854,0 3,1.3431458 3,3 0,1.656854 -1.343146,3 -3,3 C 7.3431458,12' +
    ' 6,10.656854 6,9 6,7.3431458 7.3431458,6 9,6 z';
var RaphaelIconService = (function (_super) {
    __extends(RaphaelIconService, _super);
    function RaphaelIconService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconService.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, fill = _a.fill;
        return (React.createElement(Path_1.default, { d: PATH, stroke: stroke, fill: fill, transform: "T" + x + "," + y }));
    };
    return RaphaelIconService;
}(React.Component));
exports.default = RaphaelIconService;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Task_1 = __webpack_require__(6);
var DiagramIconReceiveTask_1 = __webpack_require__(60);
var ReceiveTask = (function (_super) {
    __extends(ReceiveTask, _super);
    function ReceiveTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReceiveTask.prototype.render = function () {
        return (React.createElement(Task_1.default, __assign({}, this.props),
            React.createElement(DiagramIconReceiveTask_1.default, __assign({}, this.props))));
    };
    return ReceiveTask;
}(React.Component));
exports.default = ReceiveTask;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconReceive_1 = __webpack_require__(61);
var DiagramIconReceiveTask = (function (_super) {
    __extends(DiagramIconReceiveTask, _super);
    function DiagramIconReceiveTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconReceiveTask.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(RaphaelIconReceive_1.default, { x: x + 4, y: y + 2, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    DiagramIconReceiveTask.defaultProps = {
        x: 0,
        y: 0,
        stroke: 'none',
        fill: '#16964d',
    };
    return DiagramIconReceiveTask;
}(React.Component));
exports.default = DiagramIconReceiveTask;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = "m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z\n      M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z";
var RaphaelIconReceive = (function (_super) {
    __extends(RaphaelIconReceive, _super);
    function RaphaelIconReceive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconReceive.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, fill = _a.fill;
        return (React.createElement(Path_1.default, { d: PATH, stroke: stroke, fill: fill, transform: "T" + x + "," + y }));
    };
    return RaphaelIconReceive;
}(React.Component));
exports.default = RaphaelIconReceive;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Task_1 = __webpack_require__(6);
var DiagramIconScriptTask_1 = __webpack_require__(63);
var ScriptTask = (function (_super) {
    __extends(ScriptTask, _super);
    function ScriptTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScriptTask.prototype.render = function () {
        return (React.createElement(Task_1.default, __assign({}, this.props),
            React.createElement(DiagramIconScriptTask_1.default, __assign({}, this.props))));
    };
    return ScriptTask;
}(React.Component));
exports.default = ScriptTask;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconScript_1 = __webpack_require__(64);
var DiagramIconScriptTask = (function (_super) {
    __extends(DiagramIconScriptTask, _super);
    function DiagramIconScriptTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconScriptTask.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(RaphaelIconScript_1.default, { x: x + 4, y: y + 4, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    DiagramIconScriptTask.defaultProps = {
        x: 0,
        y: 0,
        fill: '#72a7d0',
        stroke: 'none',
    };
    return DiagramIconScriptTask;
}(React.Component));
exports.default = DiagramIconScriptTask;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = "m 5,2 0,0.094 c 0.23706,0.064 0.53189,0.1645 0.8125,0.375 0.5582,0.4186 1.05109,1.228 1.15625,2.5312\n      l 8.03125,0 1,0 1,0 c 0,-3 -2,-3 -2,-3 l -10,0 z M 4,3 4,13 2,13 c 0,3 2,3 2,3 l 9,0 c 0,0 2,0 2,-3 L 15,6 6,6 6,5.5 C 6,4.1111\n      5.5595,3.529 5.1875,3.25 4.8155,2.971 4.5,3 4.5,3 L 4,3 z";
var RaphaelIconScript = (function (_super) {
    __extends(RaphaelIconScript, _super);
    function RaphaelIconScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconScript.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, fill = _a.fill;
        return (React.createElement(Path_1.default, { d: PATH, stroke: stroke, fill: fill, transform: "T" + x + "," + y }));
    };
    return RaphaelIconScript;
}(React.Component));
exports.default = RaphaelIconScript;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Task_1 = __webpack_require__(6);
var DiagramIconBusinessRuleTask_1 = __webpack_require__(66);
var BusinessRuleTask = (function (_super) {
    __extends(BusinessRuleTask, _super);
    function BusinessRuleTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BusinessRuleTask.prototype.render = function () {
        return (React.createElement(Task_1.default, __assign({}, this.props),
            React.createElement(DiagramIconBusinessRuleTask_1.default, __assign({}, this.props))));
    };
    return BusinessRuleTask;
}(React.Component));
exports.default = BusinessRuleTask;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var RaphaelIconBusinessRule_1 = __webpack_require__(67);
var DiagramIconBusinessRuleTask = (function (_super) {
    __extends(DiagramIconBusinessRuleTask, _super);
    function DiagramIconBusinessRuleTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DiagramIconBusinessRuleTask.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity;
        return (React.createElement(RaphaelIconBusinessRule_1.default, { x: x + 4, y: y + 4, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }));
    };
    DiagramIconBusinessRuleTask.defaultProps = {
        x: 0,
        y: 0,
        stroke: 'none',
        fill: '#72a7d0',
    };
    return DiagramIconBusinessRuleTask;
}(React.Component));
exports.default = DiagramIconBusinessRuleTask;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Path_1 = __webpack_require__(1);
var PATH = "m 1,2 0,14 16,0 0,-14 z m 1.45458,5.6000386 2.90906,0 0,2.7999224 -2.90906,0 z m 4.36364,0 8.72718,0\n      0,2.7999224 -8.72718,0 z m -4.36364,4.1998844 2.90906,0 0,2.800116 -2.90906,0 z m\n      4.36364,0 8.72718,0 0,2.800116 -8.72718,0 z";
var RaphaelIconBusinessRule = (function (_super) {
    __extends(RaphaelIconBusinessRule, _super);
    function RaphaelIconBusinessRule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RaphaelIconBusinessRule.prototype.render = function () {
        var _a = this.props, stroke = _a.stroke, fill = _a.fill, x = _a.x, y = _a.y;
        return (React.createElement(Path_1.default, { d: PATH, stroke: stroke, fill: fill, transform: "T" + x + "," + y }));
    };
    return RaphaelIconBusinessRule;
}(React.Component));
exports.default = RaphaelIconBusinessRule;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tooltip_1 = __webpack_require__(3);
var RaphaelIconCircle_1 = __webpack_require__(4);
var DiagramContainerIconEvent_1 = __webpack_require__(10);
var DiagramColorService_1 = __webpack_require__(2);
var BoundaryEvent = (function (_super) {
    __extends(BoundaryEvent, _super);
    function BoundaryEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundaryEvent.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, circleRadiusInner = _a.circleRadiusInner, circleRadiusOuter = _a.circleRadiusOuter, strokeWidth = _a.strokeWidth, signalFill = _a.signalFill, data = _a.data;
        var stroke = DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR);
        var fill = DiagramColorService_1.getFillColour(data.id);
        var fillOpacity = DiagramColorService_1.getFillOpacity();
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(RaphaelIconCircle_1.default, { x: x + width / 2, y: y + height / 2, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity, radius: circleRadiusInner }),
            React.createElement(RaphaelIconCircle_1.default, { id: data.id, x: x + width / 2, y: y + height / 2, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity, radius: circleRadiusOuter }),
            React.createElement(DiagramContainerIconEvent_1.default, { x: x, y: y, width: width, height: height, type: data && data.eventDefinition && data.eventDefinition.type, data: data, fill: signalFill, stroke: stroke })));
    };
    BoundaryEvent.defaultProps = {
        x: 0,
        y: 0,
        strokeWidth: 1,
        circleRadiusInner: 12,
        circleRadiusOuter: 15,
        signalFill: 'none',
    };
    return BoundaryEvent;
}(React.Component));
exports.default = BoundaryEvent;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tooltip_1 = __webpack_require__(3);
var RaphaelIconCircle_1 = __webpack_require__(4);
var DiagramContainerIconEvent_1 = __webpack_require__(10);
var DiagramColorService_1 = __webpack_require__(2);
var ThrowEvent = (function (_super) {
    __extends(ThrowEvent, _super);
    function ThrowEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThrowEvent.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, strokeWidth = _a.strokeWidth, signalFill = _a.signalFill, circleRadiusInner = _a.circleRadiusInner, circleRadiusOuter = _a.circleRadiusOuter, data = _a.data;
        var stroke = DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR);
        var fill = DiagramColorService_1.getFillColour(data.id);
        var fillOpacity = DiagramColorService_1.getFillOpacity();
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(RaphaelIconCircle_1.default, { x: x + width / 2, y: y + height / 2, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity, radius: circleRadiusInner }),
            React.createElement(RaphaelIconCircle_1.default, { id: data.id, x: x + width / 2, y: y + height / 2, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity, radius: circleRadiusOuter }),
            React.createElement(DiagramContainerIconEvent_1.default, { x: x, y: y, width: width, height: height, type: data && data.eventDefinition && data.eventDefinition.type, data: data, fill: signalFill })));
    };
    ThrowEvent.defaultProps = {
        x: 0,
        y: 0,
        strokeWidth: 1,
        signalFill: 'black',
        circleRadiusInner: 12,
        circleRadiusOuter: 15,
    };
    return ThrowEvent;
}(React.Component));
exports.default = ThrowEvent;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tooltip_1 = __webpack_require__(3);
var RaphaelIconCircle_1 = __webpack_require__(4);
var DiagramContainerIconEvent_1 = __webpack_require__(10);
var DiagramColorService_1 = __webpack_require__(2);
var IntermediateCatchingEvent = (function (_super) {
    __extends(IntermediateCatchingEvent, _super);
    function IntermediateCatchingEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntermediateCatchingEvent.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, strokeWidth = _a.strokeWidth, circleRadiusInner = _a.circleRadiusInner, circleRadiusOuter = _a.circleRadiusOuter, data = _a.data;
        var stroke = DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR);
        var fill = DiagramColorService_1.getFillColour(data.id);
        var fillOpacity = DiagramColorService_1.getFillOpacity();
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(RaphaelIconCircle_1.default, { x: x + width / 2, y: y + height / 2, radius: circleRadiusInner, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }),
            React.createElement(RaphaelIconCircle_1.default, { id: data.id, x: x + width / 2, y: y + height / 2, radius: circleRadiusOuter, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }),
            React.createElement(DiagramContainerIconEvent_1.default, { x: x, y: y, width: width, height: height, type: data && data.eventDefinition && data.eventDefinition.type, data: data })));
    };
    IntermediateCatchingEvent.defaultProps = {
        x: 0,
        y: 0,
        strokeWidth: 1,
        circleRadiusInner: 12,
        circleRadiusOuter: 15,
    };
    return IntermediateCatchingEvent;
}(React.Component));
exports.default = IntermediateCatchingEvent;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tooltip_1 = __webpack_require__(3);
var Rect_1 = __webpack_require__(8);
var DiagramColorService_1 = __webpack_require__(2);
var SubProcess = (function (_super) {
    __extends(SubProcess, _super);
    function SubProcess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubProcess.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity, data = _a.data;
        var stroke = DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR);
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(Rect_1.default, { id: data.id, x: x, y: y, width: width, height: height, r: radius, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity })));
    };
    SubProcess.defaultProps = {
        x: 0,
        y: 0,
        radius: 4,
        strokeWidth: 1,
        fill: 'none',
    };
    return SubProcess;
}(React.Component));
exports.default = SubProcess;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tooltip_1 = __webpack_require__(3);
var Rect_1 = __webpack_require__(8);
var DiagramColorService_1 = __webpack_require__(2);
var EventSubProcess = (function (_super) {
    __extends(EventSubProcess, _super);
    function EventSubProcess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventSubProcess.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity, data = _a.data;
        var stroke = DiagramColorService_1.getBpmnColor(data, DiagramColorService_1.MAIN_STROKE_COLOR);
        return (React.createElement(Tooltip_1.default, { data: data },
            React.createElement(Rect_1.default, { id: data.id, x: x, y: y, width: width, height: height, r: radius, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity })));
    };
    EventSubProcess.defaultProps = {
        x: 0,
        y: 0,
        radius: 4,
        strokeWidth: 1,
        fill: 'none',
    };
    return EventSubProcess;
}(React.Component));
exports.default = EventSubProcess;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Tooltip_1 = __webpack_require__(3);
var FlowArrow_1 = __webpack_require__(74);
var SequenceFlow = (function (_super) {
    __extends(SequenceFlow, _super);
    function SequenceFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SequenceFlow.prototype.render = function () {
        return (React.createElement(Tooltip_1.default, { data: this.props.flow },
            React.createElement(FlowArrow_1.default, { flow: this.props.flow })));
    };
    return SequenceFlow;
}(React.Component));
exports.default = SequenceFlow;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Set_1 = __webpack_require__(5);
var Polyline_1 = __webpack_require__(75);
var Path_1 = __webpack_require__(1);
var Raphael = __webpack_require__(14);
var Utils_1 = __webpack_require__(19);
var ARROW_WIDTH = 4;
var SEQUENCEFLOW_STROKE = 2;
var FlowArrow = (function (_super) {
    __extends(FlowArrow, _super);
    function FlowArrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.line = null;
        _this.renderLine = function () {
            var flow = _this.props.flow;
            var stroke = Utils_1.getStrokeAndFill(flow).stroke;
            var polyline = new Polyline_1.Polyline(flow.id, flow.waypoints, SEQUENCEFLOW_STROKE);
            var lastLineIndex = polyline.getLinesCount() - 1;
            _this.line = polyline.getLine(lastLineIndex);
            return (React.createElement(Path_1.default, { id: flow.id, d: polyline.path, stroke: stroke, strokeWidth: SEQUENCEFLOW_STROKE }));
        };
        _this.renderArrow = function () {
            var stroke = Utils_1.getStrokeAndFill(_this.props.flow).stroke;
            var line = _this.line;
            var doubleArrowWidth = 2 * ARROW_WIDTH;
            var width = ARROW_WIDTH / 2 + .5;
            var arrowHead = "M0 0L-" + width + "-" + doubleArrowWidth + "L" + width + "-" + doubleArrowWidth + "z";
            var angle = Raphael.deg(line.angle - Math.PI / 2);
            var transform = "t" + line.x2 + "," + line.y2 + "r" + angle + " 0 0";
            return (React.createElement(Path_1.default, { id: _this.props.flow.id, d: arrowHead, stroke: stroke, strokeWidth: SEQUENCEFLOW_STROKE, fill: stroke, transform: transform }));
        };
        return _this;
    }
    FlowArrow.prototype.render = function () {
        return (React.createElement(Set_1.default, null,
            this.renderLine(),
            this.renderArrow()));
    };
    FlowArrow.defaultProps = {
        x: 0,
        y: 0,
    };
    return FlowArrow;
}(React.Component));
exports.default = FlowArrow;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Anchor_1 = __webpack_require__(76);
/* tslint:disable */
var Polyline = (function () {
    function Polyline(uuid, points, strokeWidth) {
        this.id = null;
        this.points = [];
        this.path = [];
        this.anchors = [];
        this.strokeWidth = 1;
        this.radius = 1;
        this.showDetails = false;
        this.element = null;
        this.isDefaultConditionAvailable = false;
        this.closePath = false;
        /* Array on coordinates:
         * points: [{x: 410, y: 110}, 1
         *			{x: 570, y: 110}, 1 2
         *			{x: 620, y: 240},   2 3
         *			{x: 750, y: 270},     3 4
         *			{x: 650, y: 370}];      4
         */
        this.points = points;
        /*
         * path for graph
         * [['M', x1, y1], ['L', x2, y2], ['C', ax, ay, bx, by, x3, y3], ['L', x3, y3]]
         */
        this.path = [];
        this.anchors = [];
        if (strokeWidth) {
            this.strokeWidth = strokeWidth;
        }
        this.closePath = false;
        this.init();
    }
    Polyline.prototype.init = function () {
        var linesCount = this.getLinesCount();
        if (linesCount < 1) {
            return;
        }
        this.normalizeCoordinates();
        // create anchors
        this.pushAnchor(Anchor_1.Anchor.ANCHOR_TYPE.first, this.getLine(0).x1, this.getLine(0).y1);
        for (var i = 1; i < linesCount; i++) {
            var line1 = this.getLine(i - 1);
            this.pushAnchor(Anchor_1.Anchor.ANCHOR_TYPE.main, line1.x2, line1.y2);
        }
        this.pushAnchor(Anchor_1.Anchor.ANCHOR_TYPE.last, this.getLine(linesCount - 1).x2, this.getLine(linesCount - 1).y2);
        this.rebuildPath();
    };
    Polyline.prototype.normalizeCoordinates = function () {
        for (var i = 0; i < this.points.length; i++) {
            this.points[i].x = parseFloat(this.points[i].x);
            this.points[i].y = parseFloat(this.points[i].y);
        }
    };
    Polyline.prototype.getLinesCount = function () {
        return this.points.length - 1;
    };
    Polyline.prototype._getLine = function (i) {
        if (this.points.length > i && this.points[i]) {
            return { x1: this.points[i].x, y1: this.points[i].y, x2: this.points[i + 1].x, y2: this.points[i + 1].y };
        }
        else {
            return undefined;
        }
    };
    Polyline.prototype.getLine = function (i) {
        var line = this._getLine(i);
        if (line !== undefined) {
            line.angle = this.getLineAngle(i);
        }
        return line;
    };
    Polyline.prototype.getLineAngle = function (i) {
        var line = this._getLine(i);
        return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
    };
    Polyline.prototype.getLineLengthX = function (i) {
        var line = this.getLine(i);
        return (line.x2 - line.x1);
    };
    Polyline.prototype.getLineLengthY = function (i) {
        var line = this.getLine(i);
        return (line.y2 - line.y1);
    };
    Polyline.prototype.getLineLength = function (i) {
        return Math.sqrt(Math.pow(this.getLineLengthX(i), 2) + Math.pow(this.getLineLengthY(i), 2));
    };
    Polyline.prototype.getAnchors = function () {
        return this.anchors;
    };
    Polyline.prototype.getAnchorsCount = function (type) {
        if (type === void 0) { type = null; }
        if (!type) {
            return this.anchors.length;
        }
        else {
            var count = 0;
            for (var i = 0; i < this.getAnchorsCount(null); i++) {
                var anchor = this.anchors[i];
                if (anchor.getType() === type) {
                    count++;
                }
            }
            return count;
        }
    };
    Polyline.prototype.pushAnchor = function (type, x, y) {
        var index, typeIndex;
        if (type === Anchor_1.Anchor.ANCHOR_TYPE.first) {
            index = 0;
            typeIndex = 0;
        }
        else if (type === Anchor_1.Anchor.ANCHOR_TYPE.last) {
            index = this.getAnchorsCount();
            typeIndex = 0;
        }
        else if (!index) {
            index = this.anchors.length;
        }
        else {
            for (var i = 0; i < this.getAnchorsCount(); i++) {
                var anchor = this.anchors[i];
                if (anchor.index > index) {
                    anchor.index++;
                    anchor.typeIndex++;
                }
            }
        }
        var anchor = new Anchor_1.Anchor(this.id, Anchor_1.Anchor.ANCHOR_TYPE.main, x, y);
        this.anchors.push(anchor);
    };
    Polyline.prototype.getAnchor = function (position) {
        return this.anchors[position];
    };
    Polyline.prototype.getAnchorByType = function (type, position) {
        if (type === Anchor_1.Anchor.ANCHOR_TYPE.first) {
            return this.anchors[0];
        }
        if (type === Anchor_1.Anchor.ANCHOR_TYPE.last) {
            return this.anchors[this.getAnchorsCount() - 1];
        }
        for (var i = 0; i < this.getAnchorsCount(); i++) {
            var anchor = this.anchors[i];
            if (anchor.type === type) {
                if (position === anchor.position) {
                    return anchor;
                }
            }
        }
        return null;
    };
    Polyline.prototype.addNewPoint = function (position, x, y) {
        //
        for (var i = 0; i < this.getLinesCount(); i++) {
            var line = this.getLine(i);
            if (x > line.x1 && x < line.x2 && y > line.y1 && y < line.y2) {
                this.points.splice(i + 1, 0, { x: x, y: y });
                break;
            }
        }
        this.rebuildPath();
    };
    Polyline.prototype.rebuildPath = function () {
        var path = [];
        for (var i = 0; i < this.getAnchorsCount(); i++) {
            var anchor = this.getAnchor(i);
            var pathType = '';
            if (i === 0) {
                pathType = 'M';
            }
            else {
                pathType = 'L';
            }
            // TODO: save previous points and calculate new path just if points are updated, and then save currents values as previous
            var targetX = anchor.x, targetY = anchor.y;
            if (i > 0 && i < this.getAnchorsCount() - 1) {
                // get new x,y
                var cx = anchor.x, cy = anchor.y;
                // pivot point of prev line
                var AO = this.getLineLength(i - 1);
                if (AO < this.radius) {
                    AO = this.radius;
                }
                this.isDefaultConditionAvailable = (this.isDefaultConditionAvailable || (i === 1 && AO > 10));
                var ED = this.getLineLengthY(i - 1) * this.radius / AO;
                var OD = this.getLineLengthX(i - 1) * this.radius / AO;
                targetX = anchor.x - OD;
                targetY = anchor.y - ED;
                if (AO < 2 * this.radius && i > 1) {
                    targetX = anchor.x - this.getLineLengthX(i - 1) / 2;
                    targetY = anchor.y - this.getLineLengthY(i - 1) / 2;
                }
                // pivot point of next line
                var AO = this.getLineLength(i);
                if (AO < this.radius) {
                    AO = this.radius;
                }
                var ED = this.getLineLengthY(i) * this.radius / AO;
                var OD = this.getLineLengthX(i) * this.radius / AO;
                var nextSrcX = anchor.x + OD;
                var nextSrcY = anchor.y + ED;
                if (AO < 2 * this.radius && i < this.getAnchorsCount() - 2) {
                    nextSrcX = anchor.x + this.getLineLengthX(i) / 2;
                    nextSrcY = anchor.y + this.getLineLengthY(i) / 2;
                    ;
                }
                var dx0 = (cx - targetX) / 3, dy0 = (cy - targetY) / 3, ax = cx - dx0, ay = cy - dy0, dx1 = (cx - nextSrcX) / 3, dy1 = (cy - nextSrcY) / 3, bx = cx - dx1, by = cy - dy1, zx = nextSrcX, zy = nextSrcY;
            }
            else if (i === 1 && this.getAnchorsCount() === 2) {
                var AO = this.getLineLength(i - 1);
                if (AO < this.radius) {
                    AO = this.radius;
                }
                this.isDefaultConditionAvailable = (this.isDefaultConditionAvailable || (i === 1 && AO > 10));
            }
            // anti smoothing
            if (this.strokeWidth % 2 === 1) {
                targetX += 0.5;
                targetY += 0.5;
            }
            path.push([pathType, targetX, targetY]);
            if (i > 0 && i < this.getAnchorsCount() - 1) {
                path.push(['C', ax, ay, bx, by, zx, zy]);
            }
        }
        if (this.closePath) {
            path.push(['Z']);
        }
        this.path = path;
    };
    Polyline.prototype.transform = function (transformation) {
        this.element.transform(transformation);
    };
    Polyline.prototype.function = function (attrs) {
        this.element.attr(attrs);
    };
    return Polyline;
}());
exports.Polyline = Polyline;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Anchor = (function () {
    function Anchor(uuid, type, x, y) {
        this.uuid = null;
        this.x = 0;
        this.y = 0;
        this.isFirst = false;
        this.isLast = false;
        this.typeIndex = 0;
        this.type = Anchor.ANCHOR_TYPE.main;
        this.uuid = uuid;
        this.x = x;
        this.y = y;
        this.type = (type === Anchor.ANCHOR_TYPE.middle) ? Anchor.ANCHOR_TYPE.middle : Anchor.ANCHOR_TYPE.main;
    }
    Anchor.ANCHOR_TYPE = {
        main: 'main',
        middle: 'middle',
        first: 'first',
        last: 'last'
    };
    return Anchor;
}());
exports.Anchor = Anchor;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
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
var React = __webpack_require__(0);
var Set_1 = __webpack_require__(5);
var Pool_1 = __webpack_require__(78);
var Lanes_1 = __webpack_require__(79);
var defaultPools = [];
var Pools = (function (_super) {
    __extends(Pools, _super);
    function Pools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pools.prototype.render = function () {
        var pools = this.props.pools;
        if (!pools || !pools.length)
            return null;
        return (React.createElement(Set_1.default, null, pools.map(function (pool, i) {
            var lanes = pool.lanes, others = __rest(pool, ["lanes"]);
            return (React.createElement(Set_1.default, { key: i },
                React.createElement(Pool_1.default, __assign({}, others)),
                React.createElement(Lanes_1.default, { lanes: pool.lanes })));
        })));
    };
    Pools.defaultProps = {
        pools: defaultPools,
    };
    return Pools;
}(React.Component));
exports.default = Pools;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Set_1 = __webpack_require__(5);
var Rect_1 = __webpack_require__(8);
var Text_1 = __webpack_require__(13);
var Pool = (function (_super) {
    __extends(Pool, _super);
    function Pool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pool.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity, text = _a.text, textTransform = _a.textTransform;
        return (React.createElement(Set_1.default, null,
            React.createElement(Rect_1.default, { x: x, y: y, width: width, height: height, r: radius, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }),
            React.createElement(Text_1.default, { x: x + 14, y: y + height / 2, text: text, transform: textTransform })));
    };
    Pool.defaultProps = {
        x: 0,
        y: 0,
        stroke: '#000',
        fill: 'none',
        strokeWidth: 1,
        radius: 0,
        textTransform: 'r270',
    };
    return Pool;
}(React.Component));
exports.default = Pool;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Lane_1 = __webpack_require__(80);
var Set_1 = __webpack_require__(5);
var defaultLanes = [];
var Lanes = (function (_super) {
    __extends(Lanes, _super);
    function Lanes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lanes.prototype.render = function () {
        var lanes = this.props.lanes;
        if (!lanes || !lanes.length)
            return null;
        return (React.createElement(Set_1.default, null, this.props.lanes.map(function (lane, i) { return React.createElement(Lane_1.default, __assign({ key: i, text: lane.name }, lane)); })));
    };
    Lanes.defaultProps = {
        lanes: defaultLanes,
    };
    return Lanes;
}(React.Component));
exports.default = Lanes;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Set_1 = __webpack_require__(5);
var Rect_1 = __webpack_require__(8);
var Text_1 = __webpack_require__(13);
var Lane = (function (_super) {
    __extends(Lane, _super);
    function Lane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lane.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, radius = _a.radius, stroke = _a.stroke, strokeWidth = _a.strokeWidth, fill = _a.fill, fillOpacity = _a.fillOpacity, text = _a.text, textTransform = _a.textTransform;
        return (React.createElement(Set_1.default, null,
            React.createElement(Rect_1.default, { x: x, y: y, width: width, height: height, r: radius, stroke: stroke, strokeWidth: strokeWidth, fill: fill, fillOpacity: fillOpacity }),
            React.createElement(Text_1.default, { x: x + 10, y: y + height / 2, text: text, transform: textTransform })));
    };
    Lane.defaultProps = {
        x: 0,
        y: 0,
        stroke: '#000',
        fill: 'none',
        strokeWidth: 1,
        radius: 0,
    };
    return Lane;
}(React.Component));
exports.default = Lane;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DiagramModel = (function () {
    function DiagramModel(obj) {
        var _this = this;
        this.elements = [];
        this.flows = [];
        this.pools = [];
        if (obj) {
            this.diagramBeginX = obj.diagramBeginX;
            this.diagramBeginY = obj.diagramBeginY;
            this.diagramHeight = obj.diagramHeight;
            this.diagramWidth = obj.diagramWidth;
            if (obj.elements) {
                obj.elements.forEach(function (element) {
                    _this.elements.push(new DiagramElementModel(element));
                });
            }
            if (obj.flows) {
                obj.flows.forEach(function (flow) {
                    _this.flows.push(new DiagramFlowElementModel(flow));
                });
            }
            if (obj.pools) {
                obj.pools.forEach(function (pool) {
                    _this.pools.push(new DiagramPoolElementModel(pool));
                });
            }
        }
    }
    return DiagramModel;
}());
exports.DiagramModel = DiagramModel;
var DiagramElementModel = (function () {
    function DiagramElementModel(obj) {
        var _this = this;
        this.properties = [];
        this.dataType = '';
        this.taskType = '';
        if (obj) {
            this.completed = obj.completed || false;
            this.current = obj.current || false;
            this.height = obj.height || '';
            this.id = obj.id || '';
            this.name = obj.name || '';
            this.type = obj.type || '';
            this.width = obj.width || '';
            this.value = obj.value || '';
            this.x = obj.x || '';
            this.y = obj.y || '';
            this.taskType = obj.taskType || '';
            if (obj.properties) {
                obj.properties.forEach(function (property) {
                    _this.properties.push(new DiagramElementPropertyModel(property));
                });
            }
            this.dataType = obj.dataType || '';
            if (obj.eventDefinition) {
                this.eventDefinition = new DiagramEventDefinitionModel(obj.eventDefinition);
            }
        }
    }
    return DiagramElementModel;
}());
exports.DiagramElementModel = DiagramElementModel;
var DiagramElementPropertyModel = (function () {
    function DiagramElementPropertyModel(obj) {
        if (obj) {
            this.name = obj.name;
            this.type = obj.type;
            this.value = obj.value;
        }
    }
    return DiagramElementPropertyModel;
}());
exports.DiagramElementPropertyModel = DiagramElementPropertyModel;
var DiagramFlowElementModel = (function () {
    function DiagramFlowElementModel(obj) {
        var _this = this;
        this.properties = [];
        this.waypoints = [];
        if (obj) {
            this.completed = obj.completed || false;
            this.current = obj.current || false;
            this.id = obj.id;
            this.properties = obj.properties;
            this.sourceRef = obj.sourceRef;
            this.targetRef = obj.targetRef;
            this.type = obj.type;
            if (obj.waypoints) {
                obj.waypoints.forEach(function (waypoint) {
                    _this.waypoints.push(new DiagramWayPointModel(waypoint));
                });
            }
        }
    }
    return DiagramFlowElementModel;
}());
exports.DiagramFlowElementModel = DiagramFlowElementModel;
var DiagramWayPointModel = (function () {
    function DiagramWayPointModel(obj) {
        if (obj) {
            this.x = obj.x;
            this.y = obj.y;
        }
    }
    return DiagramWayPointModel;
}());
exports.DiagramWayPointModel = DiagramWayPointModel;
var DiagramEventDefinitionModel = (function () {
    function DiagramEventDefinitionModel(obj) {
        if (obj) {
            this.timeCycle = obj.timeCycle;
            this.type = obj.type;
        }
    }
    return DiagramEventDefinitionModel;
}());
exports.DiagramEventDefinitionModel = DiagramEventDefinitionModel;
var DiagramPoolElementModel = (function () {
    function DiagramPoolElementModel(obj) {
        var _this = this;
        this.lanes = [];
        if (obj) {
            this.height = obj.height;
            this.id = obj.id;
            this.name = obj.name;
            this.properties = obj.properties;
            this.width = obj.width;
            this.x = obj.x;
            this.y = obj.y;
            if (obj.lanes) {
                obj.lanes.forEach(function (lane) {
                    _this.lanes.push(new DiagramLaneElementModel(lane));
                });
            }
        }
    }
    return DiagramPoolElementModel;
}());
exports.DiagramPoolElementModel = DiagramPoolElementModel;
var DiagramLaneElementModel = (function () {
    function DiagramLaneElementModel(obj) {
        if (obj) {
            this.height = obj.height;
            this.id = obj.id;
            this.name = obj.name;
            this.width = obj.width;
            this.x = obj.x;
            this.y = obj.y;
        }
    }
    return DiagramLaneElementModel;
}());
exports.DiagramLaneElementModel = DiagramLaneElementModel;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = __webpack_require__(18);
exports.RaphaelCircle = Circle_1.default;
var Element_1 = __webpack_require__(7);
exports.RaphaelElement = Element_1.default;


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map
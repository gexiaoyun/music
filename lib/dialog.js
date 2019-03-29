"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    _classCallCheck(this, Dialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Dialog).apply(this, arguments));
  }

  _createClass(Dialog, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          footer = _this$props.footer,
          onOk = _this$props.onOk,
          onCancel = _this$props.onCancel,
          maskOpen = _this$props.maskOpen;
      return _react.default.createElement("div", null, maskOpen ? _react.default.createElement("div", {
        className: "mask"
      }) : null, _react.default.createElement("div", {
        className: "dialog"
      }, _react.default.createElement("div", {
        className: "g-modal"
      }, _react.default.createElement("div", {
        className: "g-modal-header"
      }, title ? title : "Modal"), _react.default.createElement("div", {
        className: "g-modal-body"
      }, "\u6C99\u53D1\u8212\u670D\u6492\u5230\u53D1\u75AF \u963F\u8428\u5FB7\u6492"), footer === true ? _react.default.createElement("div", {
        className: "g-modal-footer"
      }, _react.default.createElement("button", {
        onClick: onOk
      }, "ok"), _react.default.createElement("button", {
        onClick: onCancel
      }, "cancel")) : null)));
    }
  }]);

  return Dialog;
}(_react.default.Component);

var _default = Dialog;
exports.default = _default;
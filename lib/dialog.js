"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "maskClosable", function (e) {
      var props = _this.props;

      if (props.maskClose !== false) {
        if (e.target === e.currentTarget) {
          props.onCancel();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getMaskElement", function () {
      var props = _this.props;
      var maskElement;

      if (props.maskOpen !== false) {
        maskElement = _react.default.createElement("div", {
          className: "mask"
        });
      }

      return maskElement;
    });

    _defineProperty(_assertThisInitialized(_this), "getDialogElement", function () {
      var props = _this.props;
      var dest = {};

      if (props.width !== undefined) {
        dest.width = props.width;
      }

      if (props.height !== undefined) {
        dest.height = props.height;
      }

      var style = _objectSpread({}, props.style, dest);

      var headerElement, footerElement;

      if (props.header !== false) {
        headerElement = _react.default.createElement("div", {
          className: "g-modal-header"
        }, props.title ? props.title : "Modal");
      }

      if (props.footer !== false) {
        footerElement = _react.default.createElement("div", {
          className: "g-modal-footer"
        }, _react.default.createElement("button", {
          className: "modal-submit",
          onClick: props.onOk
        }, props.okText || 'ok'), _react.default.createElement("button", {
          className: "modal-cancel",
          onClick: props.onCancel
        }, props.cancelText || 'cancel'));
      }

      return _react.default.createElement("div", {
        className: "g-modal",
        style: style
      }, headerElement, _react.default.createElement("div", {
        className: "g-modal-body"
      }, props.children), footerElement);
    });

    return _this;
  }

  _createClass(Dialog, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return _react.default.createElement("div", null, this.getMaskElement(), _react.default.createElement("div", {
        className: "dialog",
        onClick: function onClick(e) {
          _this2.maskClosable(e);
        }
      }, this.getDialogElement()));
    }
  }]);

  return Dialog;
}(_react.default.Component);

var _default = Dialog;
exports.default = _default;
Dialog.prototypes = {
  maskOpen: _propTypes.default.bool,
  maskClose: _propTypes.default.bool,
  header: _propTypes.default.bool,
  title: _propTypes.default.string,
  footer: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object, _propTypes.default.elementType]),
  onOk: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  width: _propTypes.default.string,
  heiht: _propTypes.default.string,
  style: _propTypes.default.object,
  okText: _propTypes.default.string,
  cancelText: _propTypes.default.string
};
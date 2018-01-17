'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _materialUi = require('material-ui');

var _materialUiIcons = require('material-ui-icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileInput = function (_Component) {
  _inherits(FileInput, _Component);

  function FileInput(props) {
    _classCallCheck(this, FileInput);

    var _this = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this, props));

    _this.state = {
      file: ''
    };
    return _this;
  }

  _createClass(FileInput, [{
    key: 'handleClickUploadButton',
    value: function handleClickUploadButton() {
      this.fileInputRef.click();
    }
  }, {
    key: 'getFileName',
    value: function getFileName(file) {
      return file && file.name;
    }
  }, {
    key: 'handleFileChange',
    value: function handleFileChange(event) {
      var file = event.target.files[0];

      if (!file) return;

      this.setState({ file: file });

      this.props.onChange(file);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _materialUi.FormControl,
        _extends({ fullWidth: true }, this.props.formControlProps),
        _react2.default.createElement(
          _materialUi.InputLabel,
          _extends({
            htmlFor: this.props.name,
            shrink: true
          }, this.props.inputLabelProps),
          this.props.label
        ),
        _react2.default.createElement(_materialUi.Input, _extends({
          type: 'text',
          endAdornment: _react2.default.createElement(_materialUiIcons.FileUpload, null),
          value: this.getFileName(this.state.file),
          onClick: function onClick() {
            return _this2.handleClickUploadButton();
          }
        }, this.props.inputProps)),
        _react2.default.createElement('input', {
          ref: function ref(input) {
            _this2.fileInputRef = input;
          },
          type: 'file',
          style: { display: 'none' },
          onChange: function onChange(e) {
            return _this2.handleFileChange(e);
          }
        }),
        this.props.helperText && _react2.default.createElement(
          _materialUi.FormHelperText,
          null,
          this.props.helperText
        )
      );
    }
  }]);

  return FileInput;
}(_react.Component);

FileInput.propTypes = {
  name: _propTypes2.default.string,
  label: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  helperText: _propTypes2.default.string,
  formControlProps: _propTypes2.default.object,
  inputLabelProps: _propTypes2.default.object,
  inputProps: _propTypes2.default.object
};

exports.default = FileInput;
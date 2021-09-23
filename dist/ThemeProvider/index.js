"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useTheme = exports["default"] = void 0;

var _core = require("@emotion/react");

var _emotionTheming = require("@emotion/react");

var _react = require("react");

/** @jsx jsx */
var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
    children = _ref.children;
  return (0, _core.jsx)(_emotionTheming.ThemeProvider, {
    theme: theme
  }, children);
};

var useTheme = function useTheme() {
  var theme = (0, _react.useContext)(_core.ThemeContext);

  if (theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return theme;
};

exports.useTheme = useTheme;
var _default = ThemeProvider;
exports["default"] = _default;
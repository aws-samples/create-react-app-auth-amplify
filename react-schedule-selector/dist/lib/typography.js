"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Subtitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Subtitle = _styledComponents.default.h2.withConfig({
  displayName: "typography__Subtitle",
  componentId: "jsvm8p-0"
})(["font-size:20px;font-weight:400;color:", ";text-align:", ";@media (max-width:700px){font-size:18px;}"], _colors.default.black, props => props.align || 'center');

exports.Subtitle = Subtitle;

const Text = _styledComponents.default.p.withConfig({
  displayName: "typography__Text",
  componentId: "jsvm8p-1"
})(["font-size:14px;font-weight:300;line-height:", "px;color:", ";margin:5px 0;"], 14 * 1.37, _colors.default.grey);

exports.Text = Text;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdHlwb2dyYXBoeS50cyJdLCJuYW1lcyI6WyJTdWJ0aXRsZSIsInN0eWxlZCIsImgyIiwiY29sb3JzIiwiYmxhY2siLCJwcm9wcyIsImFsaWduIiwiVGV4dCIsInAiLCJncmV5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFTyxNQUFNQSxRQUFRLEdBQUdDLDBCQUFPQyxFQUFWO0FBQUE7QUFBQTtBQUFBLDRHQUdWQyxnQkFBT0MsS0FIRyxFQUlMQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixJQUFlLFFBSm5CLENBQWQ7Ozs7QUFXQSxNQUFNQyxJQUFJLEdBQUdOLDBCQUFPTyxDQUFWO0FBQUE7QUFBQTtBQUFBLG1GQUdBLEtBQUssSUFITCxFQUlOTCxnQkFBT00sSUFKRCxDQUFWIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnXG5cbmV4cG9ydCBjb25zdCBTdWJ0aXRsZSA9IHN0eWxlZC5oMjx7IGFsaWduPzogc3RyaW5nfT5gXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICR7Y29sb3JzLmJsYWNrfTtcbiAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiBwcm9wcy5hbGlnbiB8fCAnY2VudGVyJ307XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6ICR7MTQgKiAxLjM3fXB4O1xuICBjb2xvcjogJHtjb2xvcnMuZ3JleX07XG4gIG1hcmdpbjogNXB4IDA7XG5gXG4iXX0=
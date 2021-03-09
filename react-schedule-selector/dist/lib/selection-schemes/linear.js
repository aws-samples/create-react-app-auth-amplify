"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _is_before = _interopRequireDefault(require("date-fns/is_before"));

var dateUtils = _interopRequireWildcard(require("../date-utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const linear = (selectionStart, selectionEnd, dateList) => {
  let selected = [];

  if (selectionEnd == null) {
    if (selectionStart) selected = [selectionStart];
  } else if (selectionStart) {
    const reverseSelection = (0, _is_before.default)(selectionEnd, selectionStart);
    selected = dateList.reduce((acc, dayOfTimes) => acc.concat(dayOfTimes.filter(t => selectionStart && selectionEnd && dateUtils.dateHourIsBetween(reverseSelection ? selectionEnd : selectionStart, t, reverseSelection ? selectionStart : selectionEnd))), []);
  }

  return selected;
};

var _default = linear;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VsZWN0aW9uLXNjaGVtZXMvbGluZWFyLnRzIl0sIm5hbWVzIjpbImxpbmVhciIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwiZGF0ZUxpc3QiLCJzZWxlY3RlZCIsInJldmVyc2VTZWxlY3Rpb24iLCJyZWR1Y2UiLCJhY2MiLCJkYXlPZlRpbWVzIiwiY29uY2F0IiwiZmlsdGVyIiwidCIsImRhdGVVdGlscyIsImRhdGVIb3VySXNCZXR3ZWVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUNDLGNBQUQsRUFBOEJDLFlBQTlCLEVBQXlEQyxRQUF6RCxLQUF1RztBQUNwSCxNQUFJQyxRQUFxQixHQUFHLEVBQTVCOztBQUNBLE1BQUlGLFlBQVksSUFBSSxJQUFwQixFQUEwQjtBQUN4QixRQUFJRCxjQUFKLEVBQW9CRyxRQUFRLEdBQUcsQ0FBQ0gsY0FBRCxDQUFYO0FBQ3JCLEdBRkQsTUFFTyxJQUFJQSxjQUFKLEVBQW9CO0FBQ3pCLFVBQU1JLGdCQUFnQixHQUFHLHdCQUFTSCxZQUFULEVBQXVCRCxjQUF2QixDQUF6QjtBQUNBRyxJQUFBQSxRQUFRLEdBQUdELFFBQVEsQ0FBQ0csTUFBVCxDQUNULENBQUNDLEdBQUQsRUFBTUMsVUFBTixLQUNFRCxHQUFHLENBQUNFLE1BQUosQ0FDRUQsVUFBVSxDQUFDRSxNQUFYLENBQ0VDLENBQUMsSUFDQ1YsY0FBYyxJQUNkQyxZQURBLElBRUFVLFNBQVMsQ0FBQ0MsaUJBQVYsQ0FDRVIsZ0JBQWdCLEdBQUdILFlBQUgsR0FBa0JELGNBRHBDLEVBRUVVLENBRkYsRUFHRU4sZ0JBQWdCLEdBQUdKLGNBQUgsR0FBb0JDLFlBSHRDLENBSkosQ0FERixDQUZPLEVBY1QsRUFkUyxDQUFYO0FBZ0JEOztBQUNELFNBQU9FLFFBQVA7QUFDRCxDQXhCRDs7ZUEwQmVKLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNCZWZvcmUgZnJvbSAnZGF0ZS1mbnMvaXNfYmVmb3JlJ1xuXG5pbXBvcnQgKiBhcyBkYXRlVXRpbHMgZnJvbSAnLi4vZGF0ZS11dGlscydcblxuY29uc3QgbGluZWFyID0gKHNlbGVjdGlvblN0YXJ0OiBEYXRlIHwgbnVsbCwgc2VsZWN0aW9uRW5kOiBEYXRlIHwgbnVsbCwgZGF0ZUxpc3Q6IEFycmF5PEFycmF5PERhdGU+Pik6IEFycmF5PERhdGU+ID0+IHtcbiAgbGV0IHNlbGVjdGVkOiBBcnJheTxEYXRlPiA9IFtdXG4gIGlmIChzZWxlY3Rpb25FbmQgPT0gbnVsbCkge1xuICAgIGlmIChzZWxlY3Rpb25TdGFydCkgc2VsZWN0ZWQgPSBbc2VsZWN0aW9uU3RhcnRdXG4gIH0gZWxzZSBpZiAoc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBjb25zdCByZXZlcnNlU2VsZWN0aW9uID0gaXNCZWZvcmUoc2VsZWN0aW9uRW5kLCBzZWxlY3Rpb25TdGFydClcbiAgICBzZWxlY3RlZCA9IGRhdGVMaXN0LnJlZHVjZShcbiAgICAgIChhY2MsIGRheU9mVGltZXMpID0+XG4gICAgICAgIGFjYy5jb25jYXQoXG4gICAgICAgICAgZGF5T2ZUaW1lcy5maWx0ZXIoXG4gICAgICAgICAgICB0ID0+XG4gICAgICAgICAgICAgIHNlbGVjdGlvblN0YXJ0ICYmXG4gICAgICAgICAgICAgIHNlbGVjdGlvbkVuZCAmJlxuICAgICAgICAgICAgICBkYXRlVXRpbHMuZGF0ZUhvdXJJc0JldHdlZW4oXG4gICAgICAgICAgICAgICAgcmV2ZXJzZVNlbGVjdGlvbiA/IHNlbGVjdGlvbkVuZCA6IHNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAgICAgcmV2ZXJzZVNlbGVjdGlvbiA/IHNlbGVjdGlvblN0YXJ0IDogc2VsZWN0aW9uRW5kXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICBbXVxuICAgIClcbiAgfVxuICByZXR1cm4gc2VsZWN0ZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGluZWFyXG4iXX0=
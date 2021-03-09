"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _is_before = _interopRequireDefault(require("date-fns/is_before"));

var _start_of_day = _interopRequireDefault(require("date-fns/start_of_day"));

var dateUtils = _interopRequireWildcard(require("../date-utils"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const square = (selectionStart, selectionEnd, dateList) => {
  let selected = [];

  if (selectionEnd == null) {
    if (selectionStart) selected = [selectionStart];
  } else if (selectionStart) {
    const dateIsReversed = (0, _is_before.default)((0, _start_of_day.default)(selectionEnd), (0, _start_of_day.default)(selectionStart));
    const timeIsReversed = selectionStart.getHours() > selectionEnd.getHours();
    selected = dateList.reduce((acc, dayOfTimes) => acc.concat(dayOfTimes.filter(t => selectionStart && selectionEnd && dateUtils.dateIsBetween(dateIsReversed ? selectionEnd : selectionStart, t, dateIsReversed ? selectionStart : selectionEnd) && dateUtils.timeIsBetween(timeIsReversed ? selectionEnd : selectionStart, t, timeIsReversed ? selectionStart : selectionEnd))), []);
  }

  return selected;
};

var _default = square;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VsZWN0aW9uLXNjaGVtZXMvc3F1YXJlLnRzIl0sIm5hbWVzIjpbInNxdWFyZSIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwiZGF0ZUxpc3QiLCJzZWxlY3RlZCIsImRhdGVJc1JldmVyc2VkIiwidGltZUlzUmV2ZXJzZWQiLCJnZXRIb3VycyIsInJlZHVjZSIsImFjYyIsImRheU9mVGltZXMiLCJjb25jYXQiLCJmaWx0ZXIiLCJ0IiwiZGF0ZVV0aWxzIiwiZGF0ZUlzQmV0d2VlbiIsInRpbWVJc0JldHdlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQ0MsY0FBRCxFQUE4QkMsWUFBOUIsRUFBeURDLFFBQXpELEtBQXVHO0FBQ3BILE1BQUlDLFFBQXFCLEdBQUcsRUFBNUI7O0FBQ0EsTUFBSUYsWUFBWSxJQUFJLElBQXBCLEVBQTBCO0FBQ3hCLFFBQUlELGNBQUosRUFBb0JHLFFBQVEsR0FBRyxDQUFDSCxjQUFELENBQVg7QUFDckIsR0FGRCxNQUVPLElBQUlBLGNBQUosRUFBb0I7QUFDekIsVUFBTUksY0FBYyxHQUFHLHdCQUFTLDJCQUFXSCxZQUFYLENBQVQsRUFBbUMsMkJBQVdELGNBQVgsQ0FBbkMsQ0FBdkI7QUFDQSxVQUFNSyxjQUFjLEdBQUdMLGNBQWMsQ0FBQ00sUUFBZixLQUE0QkwsWUFBWSxDQUFDSyxRQUFiLEVBQW5EO0FBRUFILElBQUFBLFFBQVEsR0FBR0QsUUFBUSxDQUFDSyxNQUFULENBQ1QsQ0FBQ0MsR0FBRCxFQUFNQyxVQUFOLEtBQ0VELEdBQUcsQ0FBQ0UsTUFBSixDQUNFRCxVQUFVLENBQUNFLE1BQVgsQ0FDRUMsQ0FBQyxJQUNDWixjQUFjLElBQ2RDLFlBREEsSUFFQVksU0FBUyxDQUFDQyxhQUFWLENBQ0VWLGNBQWMsR0FBR0gsWUFBSCxHQUFrQkQsY0FEbEMsRUFFRVksQ0FGRixFQUdFUixjQUFjLEdBQUdKLGNBQUgsR0FBb0JDLFlBSHBDLENBRkEsSUFPQVksU0FBUyxDQUFDRSxhQUFWLENBQ0VWLGNBQWMsR0FBR0osWUFBSCxHQUFrQkQsY0FEbEMsRUFFRVksQ0FGRixFQUdFUCxjQUFjLEdBQUdMLGNBQUgsR0FBb0JDLFlBSHBDLENBVEosQ0FERixDQUZPLEVBbUJULEVBbkJTLENBQVg7QUFxQkQ7O0FBRUQsU0FBT0UsUUFBUDtBQUNELENBaENEOztlQWtDZUosTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0JlZm9yZSBmcm9tICdkYXRlLWZucy9pc19iZWZvcmUnXG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9kYXknXG5cbmltcG9ydCAqIGFzIGRhdGVVdGlscyBmcm9tICcuLi9kYXRlLXV0aWxzJ1xuXG5jb25zdCBzcXVhcmUgPSAoc2VsZWN0aW9uU3RhcnQ6IERhdGUgfCBudWxsLCBzZWxlY3Rpb25FbmQ6IERhdGUgfCBudWxsLCBkYXRlTGlzdDogQXJyYXk8QXJyYXk8RGF0ZT4+KTogQXJyYXk8RGF0ZT4gPT4ge1xuICBsZXQgc2VsZWN0ZWQ6IEFycmF5PERhdGU+ID0gW11cbiAgaWYgKHNlbGVjdGlvbkVuZCA9PSBudWxsKSB7XG4gICAgaWYgKHNlbGVjdGlvblN0YXJ0KSBzZWxlY3RlZCA9IFtzZWxlY3Rpb25TdGFydF1cbiAgfSBlbHNlIGlmIChzZWxlY3Rpb25TdGFydCkge1xuICAgIGNvbnN0IGRhdGVJc1JldmVyc2VkID0gaXNCZWZvcmUoc3RhcnRPZkRheShzZWxlY3Rpb25FbmQpLCBzdGFydE9mRGF5KHNlbGVjdGlvblN0YXJ0KSlcbiAgICBjb25zdCB0aW1lSXNSZXZlcnNlZCA9IHNlbGVjdGlvblN0YXJ0LmdldEhvdXJzKCkgPiBzZWxlY3Rpb25FbmQuZ2V0SG91cnMoKVxuXG4gICAgc2VsZWN0ZWQgPSBkYXRlTGlzdC5yZWR1Y2UoXG4gICAgICAoYWNjLCBkYXlPZlRpbWVzKSA9PlxuICAgICAgICBhY2MuY29uY2F0KFxuICAgICAgICAgIGRheU9mVGltZXMuZmlsdGVyKFxuICAgICAgICAgICAgdCA9PlxuICAgICAgICAgICAgICBzZWxlY3Rpb25TdGFydCAmJlxuICAgICAgICAgICAgICBzZWxlY3Rpb25FbmQgJiZcbiAgICAgICAgICAgICAgZGF0ZVV0aWxzLmRhdGVJc0JldHdlZW4oXG4gICAgICAgICAgICAgICAgZGF0ZUlzUmV2ZXJzZWQgPyBzZWxlY3Rpb25FbmQgOiBzZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICB0LFxuICAgICAgICAgICAgICAgIGRhdGVJc1JldmVyc2VkID8gc2VsZWN0aW9uU3RhcnQgOiBzZWxlY3Rpb25FbmRcbiAgICAgICAgICAgICAgKSAmJlxuICAgICAgICAgICAgICBkYXRlVXRpbHMudGltZUlzQmV0d2VlbihcbiAgICAgICAgICAgICAgICB0aW1lSXNSZXZlcnNlZCA/IHNlbGVjdGlvbkVuZCA6IHNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAgICAgdGltZUlzUmV2ZXJzZWQgPyBzZWxlY3Rpb25TdGFydCA6IHNlbGVjdGlvbkVuZFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgW11cbiAgICApXG4gIH1cblxuICByZXR1cm4gc2VsZWN0ZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3F1YXJlXG4iXX0=
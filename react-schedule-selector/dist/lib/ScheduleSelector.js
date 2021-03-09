"use strict";

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.preventScroll = exports.GridCell = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _add_minutes = _interopRequireDefault(require("date-fns/add_minutes"));

var _add_hours = _interopRequireDefault(require("date-fns/add_hours"));

var _add_days = _interopRequireDefault(require("date-fns/add_days"));

var _start_of_day = _interopRequireDefault(require("date-fns/start_of_day"));

var _is_same_minute = _interopRequireDefault(require("date-fns/is_same_minute"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _typography = require("./typography");

var _colors = _interopRequireDefault(require("./colors"));

var _selectionSchemes = _interopRequireDefault(require("./selection-schemes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Import only the methods we need from date-fns in order to keep build size small
const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "ScheduleSelector__Wrapper",
  componentId: "sc-1ke4ka2-0"
})(["display:flex;align-items:center;width:100%;user-select:none;"]);

const Grid = _styledComponents.default.div.withConfig({
  displayName: "ScheduleSelector__Grid",
  componentId: "sc-1ke4ka2-1"
})(["display:grid;grid-template-columns:auto repeat(", ",1fr);grid-template-rows:auto repeat(", ",1fr);column-gap:", ";row-gap:", ";width:100%;"], props => props.columns, props => props.rows, props => props.columnGap, props => props.rowGap);

const GridCell = _styledComponents.default.div.withConfig({
  displayName: "ScheduleSelector__GridCell",
  componentId: "sc-1ke4ka2-2"
})(["place-self:stretch;touch-action:none;"]);

exports.GridCell = GridCell;

const DateCell = _styledComponents.default.div.withConfig({
  displayName: "ScheduleSelector__DateCell",
  componentId: "sc-1ke4ka2-3"
})(["width:100%;height:25px;background-color:", ";&:hover{background-color:", ";}"], props => props.selected ? props.selectedColor : props.unselectedColor, props => props.hoveredColor);

const DateLabel = (0, _styledComponents.default)(_typography.Subtitle).withConfig({
  displayName: "ScheduleSelector__DateLabel",
  componentId: "sc-1ke4ka2-4"
})(["@media (max-width:699px){font-size:12px;}margin:0;margin-bottom:4px;"]);
const TimeText = (0, _styledComponents.default)(_typography.Text).withConfig({
  displayName: "ScheduleSelector__TimeText",
  componentId: "sc-1ke4ka2-5"
})(["@media (max-width:699px){font-size:10px;}text-align:right;margin:0;margin-right:4px;"]);

const preventScroll = e => {
  e.preventDefault();
};

exports.preventScroll = preventScroll;

class ScheduleSelector extends React.Component {
  // documentMouseUpHandler: () => void = () => {}
  // endSelection: () => void = () => {}
  // handleTouchMoveEvent: (event: React.SyntheticTouchEvent<*>) => void
  // handleTouchEndEvent: () => void
  // handleMouseUpEvent: (date: Date) => void
  // handleMouseEnterEvent: (date: Date) => void
  // handleSelectionStartEvent: (date: Date) => void
  static getDerivedStateFromProps(props, state) {
    // As long as the user isn't in the process of selecting, allow prop changes to re-populate selection state
    if (state.selectionStart == null) {
      return {
        selectionDraft: [...props.selection],
        dates: ScheduleSelector.computeDatesMatrix(props)
      };
    }

    return null;
  }

  static computeDatesMatrix(props) {
    const startTime = (0, _start_of_day.default)(props.startDate);
    const dates = [];
    const minutesInChunk = Math.floor(60 / props.hourlyChunks);

    for (let d = 0; d < props.numDays; d += 1) {
      const currentDay = [];

      for (let h = props.minTime; h < props.maxTime; h += 1) {
        for (let c = 0; c < props.hourlyChunks; c += 1) {
          currentDay.push((0, _add_minutes.default)((0, _add_hours.default)((0, _add_days.default)(startTime, d), h), c * minutesInChunk));
        }
      }

      dates.push(currentDay);
    }

    return dates;
  }

  constructor(props) {
    super(props);
    this.cellToDate = new Map();
    this.gridRef = null;

    this.renderDateCellWrapper = time => {
      const startHandler = () => {
        this.handleSelectionStartEvent(time);
      };

      const selected = Boolean(this.state.selectionDraft.find(a => (0, _is_same_minute.default)(a, time)));
      return /*#__PURE__*/React.createElement(GridCell, {
        className: "rgdp__grid-cell",
        role: "presentation",
        key: time.toISOString() // Mouse handlers
        ,
        onMouseDown: startHandler,
        onMouseEnter: () => {
          this.handleMouseEnterEvent(time);
        },
        onMouseUp: () => {
          this.handleMouseUpEvent(time);
        } // Touch handlers
        // Since touch events fire on the event where the touch-drag started, there's no point in passing
        // in the time parameter, instead these handlers will do their job using the default Event
        // parameters
        ,
        onTouchStart: startHandler,
        onTouchMove: this.handleTouchMoveEvent,
        onTouchEnd: this.handleTouchEndEvent
      }, this.renderDateCell(time, selected));
    };

    this.renderDateCell = (time, selected) => {
      const refSetter = dateCell => {
        if (dateCell) {
          this.cellToDate.set(dateCell, time);
        }
      };

      if (this.props.renderDateCell) {
        return this.props.renderDateCell(time, selected, refSetter);
      } else {
        return /*#__PURE__*/React.createElement(DateCell, {
          selected: selected,
          ref: refSetter,
          selectedColor: this.props.selectedColor,
          unselectedColor: this.props.unselectedColor,
          hoveredColor: this.props.hoveredColor
        });
      }
    };

    this.renderTimeLabel = time => {
      if (this.props.renderTimeLabel) {
        return this.props.renderTimeLabel(time);
      } else {
        return /*#__PURE__*/React.createElement(TimeText, null, (0, _format.default)(time, this.props.timeFormat));
      }
    };

    this.renderDateLabel = date => {
      if (this.props.renderDateLabel) {
        return this.props.renderDateLabel(date);
      } else {
        return /*#__PURE__*/React.createElement(DateLabel, null, (0, _format.default)(date, this.props.dateFormat));
      }
    };

    this.state = {
      selectionDraft: [...this.props.selection],
      // copy it over
      selectionType: null,
      selectionStart: null,
      isTouchDragging: false,
      dates: ScheduleSelector.computeDatesMatrix(props)
    };
    this.selectionSchemeHandlers = {
      linear: _selectionSchemes.default.linear,
      square: _selectionSchemes.default.square
    };
    this.endSelection = this.endSelection.bind(this);
    this.handleMouseUpEvent = this.handleMouseUpEvent.bind(this);
    this.handleMouseEnterEvent = this.handleMouseEnterEvent.bind(this);
    this.handleTouchMoveEvent = this.handleTouchMoveEvent.bind(this);
    this.handleTouchEndEvent = this.handleTouchEndEvent.bind(this);
    this.handleSelectionStartEvent = this.handleSelectionStartEvent.bind(this);
  }

  componentDidMount() {
    // We need to add the endSelection event listener to the document itself in order
    // to catch the cases where the users ends their mouse-click somewhere besides
    // the date cells (in which case none of the DateCell's onMouseUp handlers would fire)
    //
    // This isn't necessary for touch events since the `touchend` event fires on
    // the element where the touch/drag started so it's always caught.
    document.addEventListener('mouseup', this.endSelection); // Prevent page scrolling when user is dragging on the date cells

    this.cellToDate.forEach((value, dateCell) => {
      if (dateCell && dateCell.addEventListener) {
        // @ts-ignore
        dateCell.addEventListener('touchmove', preventScroll, {
          passive: false
        });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.endSelection);
    this.cellToDate.forEach((value, dateCell) => {
      if (dateCell && dateCell.removeEventListener) {
        // @ts-ignore
        dateCell.removeEventListener('touchmove', preventScroll);
      }
    });
  } // Performs a lookup into this.cellToDate to retrieve the Date that corresponds to
  // the cell where this touch event is right now. Note that this method will only work
  // if the event is a `touchmove` event since it's the only one that has a `touches` list.


  getTimeFromTouchEvent(event) {
    const {
      touches
    } = event;
    if (!touches || touches.length === 0) return null;
    const {
      clientX,
      clientY
    } = touches[0];
    const targetElement = document.elementFromPoint(clientX, clientY);

    if (targetElement) {
      const cellTime = this.cellToDate.get(targetElement);
      return cellTime !== null && cellTime !== void 0 ? cellTime : null;
    }

    return null;
  }

  endSelection() {
    this.props.onChange(this.state.selectionDraft);
    this.setState({
      selectionType: null,
      selectionStart: null
    });
  } // Given an ending Date, determines all the dates that should be selected in this draft


  updateAvailabilityDraft(selectionEnd, callback) {
    const {
      selectionType,
      selectionStart
    } = this.state;
    if (selectionType === null || selectionStart === null) return;
    let newSelection = [];

    if (selectionStart && selectionEnd && selectionType) {
      newSelection = this.selectionSchemeHandlers[this.props.selectionScheme](selectionStart, selectionEnd, this.state.dates);
    }

    let nextDraft = [...this.props.selection];

    if (selectionType === 'add') {
      nextDraft = Array.from(new Set([...nextDraft, ...newSelection]));
    } else if (selectionType === 'remove') {
      nextDraft = nextDraft.filter(a => !newSelection.find(b => (0, _is_same_minute.default)(a, b)));
    }

    this.setState({
      selectionDraft: nextDraft
    }, callback);
  } // Isomorphic (mouse and touch) handler since starting a selection works the same way for both classes of user input


  handleSelectionStartEvent(startTime) {
    // Check if the startTime cell is selected/unselected to determine if this drag-select should
    // add values or remove values
    const timeSelected = this.props.selection.find(a => (0, _is_same_minute.default)(a, startTime));
    this.setState({
      selectionType: timeSelected ? 'remove' : 'add',
      selectionStart: startTime
    });
  }

  handleMouseEnterEvent(time) {
    // Need to update selection draft on mouseup as well in order to catch the cases
    // where the user just clicks on a single cell (because no mouseenter events fire
    // in this scenario)
    this.updateAvailabilityDraft(time);
  }

  handleMouseUpEvent(time) {
    this.updateAvailabilityDraft(time); // Don't call this.endSelection() here because the document mouseup handler will do it
  }

  handleTouchMoveEvent(event) {
    this.setState({
      isTouchDragging: true
    });
    const cellTime = this.getTimeFromTouchEvent(event);

    if (cellTime) {
      this.updateAvailabilityDraft(cellTime);
    }
  }

  handleTouchEndEvent() {
    if (!this.state.isTouchDragging) {
      // Going down this branch means the user tapped but didn't drag -- which
      // means the availability draft hasn't yet been updated (since
      // handleTouchMoveEvent was never called) so we need to do it now
      this.updateAvailabilityDraft(null, () => {
        this.endSelection();
      });
    } else {
      this.endSelection();
    }

    this.setState({
      isTouchDragging: false
    });
  }

  renderFullDateGrid() {
    const flattenedDates = [];
    const numDays = this.state.dates.length;
    const numTimes = this.state.dates[0].length;

    for (let j = 0; j < numTimes; j += 1) {
      for (let i = 0; i < numDays; i += 1) {
        flattenedDates.push(this.state.dates[i][j]);
      }
    }

    const dateGridElements = flattenedDates.map(this.renderDateCellWrapper);

    for (let i = 0; i < numTimes; i += 1) {
      const index = i * numDays;
      const time = this.state.dates[0][i]; // Inject the time label at the start of every row

      dateGridElements.splice(index + i, 0, this.renderTimeLabel(time));
    }

    return [
    /*#__PURE__*/
    // Empty top left corner
    React.createElement("div", {
      key: "topleft"
    }), // Top row of dates
    ...this.state.dates.map((dayOfTimes, index) => /*#__PURE__*/React.cloneElement(this.renderDateLabel(dayOfTimes[0]), {
      key: "date-".concat(index)
    })), // Every row after that
    ...dateGridElements.map((element, index) => /*#__PURE__*/React.cloneElement(element, {
      key: "time-".concat(index)
    }))];
  }

  render() {
    return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Grid, {
      columns: this.state.dates.length,
      rows: this.state.dates[0].length,
      columnGap: this.props.columnGap,
      rowGap: this.props.rowGap,
      ref: el => {
        this.gridRef = el;
      }
    }, this.renderFullDateGrid()));
  }

}

exports.default = ScheduleSelector;
ScheduleSelector.defaultProps = {
  selection: [],
  selectionScheme: 'square',
  numDays: 7,
  minTime: 9,
  maxTime: 23,
  hourlyChunks: 1,
  startDate: new Date(),
  timeFormat: 'ha',
  dateFormat: 'M/D',
  columnGap: '4px',
  rowGap: '4px',
  selectedColor: _colors.default.blue,
  unselectedColor: _colors.default.paleBlue,
  hoveredColor: _colors.default.lightBlue,
  onChange: () => {}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvU2NoZWR1bGVTZWxlY3Rvci50c3giXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkdyaWQiLCJwcm9wcyIsImNvbHVtbnMiLCJyb3dzIiwiY29sdW1uR2FwIiwicm93R2FwIiwiR3JpZENlbGwiLCJEYXRlQ2VsbCIsInNlbGVjdGVkIiwic2VsZWN0ZWRDb2xvciIsInVuc2VsZWN0ZWRDb2xvciIsImhvdmVyZWRDb2xvciIsIkRhdGVMYWJlbCIsIlN1YnRpdGxlIiwiVGltZVRleHQiLCJUZXh0IiwicHJldmVudFNjcm9sbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlNjaGVkdWxlU2VsZWN0b3IiLCJSZWFjdCIsIkNvbXBvbmVudCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsInN0YXRlIiwic2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25EcmFmdCIsInNlbGVjdGlvbiIsImRhdGVzIiwiY29tcHV0ZURhdGVzTWF0cml4Iiwic3RhcnRUaW1lIiwic3RhcnREYXRlIiwibWludXRlc0luQ2h1bmsiLCJNYXRoIiwiZmxvb3IiLCJob3VybHlDaHVua3MiLCJkIiwibnVtRGF5cyIsImN1cnJlbnREYXkiLCJoIiwibWluVGltZSIsIm1heFRpbWUiLCJjIiwicHVzaCIsImNvbnN0cnVjdG9yIiwiY2VsbFRvRGF0ZSIsIk1hcCIsImdyaWRSZWYiLCJyZW5kZXJEYXRlQ2VsbFdyYXBwZXIiLCJ0aW1lIiwic3RhcnRIYW5kbGVyIiwiaGFuZGxlU2VsZWN0aW9uU3RhcnRFdmVudCIsIkJvb2xlYW4iLCJmaW5kIiwiYSIsInRvSVNPU3RyaW5nIiwiaGFuZGxlTW91c2VFbnRlckV2ZW50IiwiaGFuZGxlTW91c2VVcEV2ZW50IiwiaGFuZGxlVG91Y2hNb3ZlRXZlbnQiLCJoYW5kbGVUb3VjaEVuZEV2ZW50IiwicmVuZGVyRGF0ZUNlbGwiLCJyZWZTZXR0ZXIiLCJkYXRlQ2VsbCIsInNldCIsInJlbmRlclRpbWVMYWJlbCIsInRpbWVGb3JtYXQiLCJyZW5kZXJEYXRlTGFiZWwiLCJkYXRlIiwiZGF0ZUZvcm1hdCIsInNlbGVjdGlvblR5cGUiLCJpc1RvdWNoRHJhZ2dpbmciLCJzZWxlY3Rpb25TY2hlbWVIYW5kbGVycyIsImxpbmVhciIsInNlbGVjdGlvblNjaGVtZXMiLCJzcXVhcmUiLCJlbmRTZWxlY3Rpb24iLCJiaW5kIiwiY29tcG9uZW50RGlkTW91bnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwidmFsdWUiLCJwYXNzaXZlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ2V0VGltZUZyb21Ub3VjaEV2ZW50IiwiZXZlbnQiLCJ0b3VjaGVzIiwibGVuZ3RoIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0YXJnZXRFbGVtZW50IiwiZWxlbWVudEZyb21Qb2ludCIsImNlbGxUaW1lIiwiZ2V0Iiwib25DaGFuZ2UiLCJzZXRTdGF0ZSIsInVwZGF0ZUF2YWlsYWJpbGl0eURyYWZ0Iiwic2VsZWN0aW9uRW5kIiwiY2FsbGJhY2siLCJuZXdTZWxlY3Rpb24iLCJzZWxlY3Rpb25TY2hlbWUiLCJuZXh0RHJhZnQiLCJBcnJheSIsImZyb20iLCJTZXQiLCJmaWx0ZXIiLCJiIiwidGltZVNlbGVjdGVkIiwicmVuZGVyRnVsbERhdGVHcmlkIiwiZmxhdHRlbmVkRGF0ZXMiLCJudW1UaW1lcyIsImoiLCJpIiwiZGF0ZUdyaWRFbGVtZW50cyIsIm1hcCIsImluZGV4Iiwic3BsaWNlIiwiZGF5T2ZUaW1lcyIsImNsb25lRWxlbWVudCIsImtleSIsImVsZW1lbnQiLCJyZW5kZXIiLCJlbCIsImRlZmF1bHRQcm9wcyIsIkRhdGUiLCJjb2xvcnMiLCJibHVlIiwicGFsZUJsdWUiLCJsaWdodEJsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztBQVZBO0FB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QUFBLFNBQVMsRUFBRSxLQUFLdEYsS0FBTCxDQUFXRyxTQUh4QjtBQUlFLE1BQUEsTUFBTSxFQUFFLEtBQUtILEtBQUwsQ0FBV0ksTUFKckI7QUFLRSxNQUFBLEdBQUcsRUFBRXFILEVBQUUsSUFBSTtBQUNULGFBQUs1RSxPQUFMLEdBQWU0RSxFQUFmO0FBQ0Q7QUFQSCxPQVNHLEtBQUtkLGtCQUFMLEVBVEgsQ0FERixDQURGO0FBZUQ7O0FBNVRpRjs7O0FBQS9EekYsZ0IsQ0FZWndHLFksR0FBbUM7QUFDeENqRyxFQUFBQSxTQUFTLEVBQUUsRUFENkI7QUFFeEMwRSxFQUFBQSxlQUFlLEVBQUUsUUFGdUI7QUFHeENoRSxFQUFBQSxPQUFPLEVBQUUsQ0FIK0I7QUFJeENHLEVBQUFBLE9BQU8sRUFBRSxDQUorQjtBQUt4Q0MsRUFBQUEsT0FBTyxFQUFFLEVBTCtCO0FBTXhDTixFQUFBQSxZQUFZLEVBQUUsQ0FOMEI7QUFPeENKLEVBQUFBLFNBQVMsRUFBRSxJQUFJOEYsSUFBSixFQVA2QjtBQVF4QzVELEVBQUFBLFVBQVUsRUFBRSxJQVI0QjtBQVN4Q0csRUFBQUEsVUFBVSxFQUFFLEtBVDRCO0FBVXhDL0QsRUFBQUEsU0FBUyxFQUFFLEtBVjZCO0FBV3hDQyxFQUFBQSxNQUFNLEVBQUUsS0FYZ0M7QUFZeENJLEVBQUFBLGFBQWEsRUFBRW9ILGdCQUFPQyxJQVprQjtBQWF4Q3BILEVBQUFBLGVBQWUsRUFBRW1ILGdCQUFPRSxRQWJnQjtBQWN4Q3BILEVBQUFBLFlBQVksRUFBRWtILGdCQUFPRyxTQWRtQjtBQWV4Q2xDLEVBQUFBLFFBQVEsRUFBRSxNQUFNLENBQUU7QUFmc0IsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLy8gSW1wb3J0IG9ubHkgdGhlIG1ldGhvZHMgd2UgbmVlZCBmcm9tIGRhdGUtZm5zIGluIG9yZGVyIHRvIGtlZXAgYnVpbGQgc2l6ZSBzbWFsbFxuaW1wb3J0IGFkZE1pbnV0ZXMgZnJvbSAnZGF0ZS1mbnMvYWRkX21pbnV0ZXMnXG5pbXBvcnQgYWRkSG91cnMgZnJvbSAnZGF0ZS1mbnMvYWRkX2hvdXJzJ1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkX2RheXMnXG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tICdkYXRlLWZucy9zdGFydF9vZl9kYXknXG5pbXBvcnQgaXNTYW1lTWludXRlIGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfbWludXRlJ1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xuXG5pbXBvcnQgeyBUZXh0LCBTdWJ0aXRsZSB9IGZyb20gJy4vdHlwb2dyYXBoeSdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9jb2xvcnMnXG5pbXBvcnQgc2VsZWN0aW9uU2NoZW1lcywgeyBTZWxlY3Rpb25TY2hlbWVUeXBlLCBTZWxlY3Rpb25UeXBlIH0gZnJvbSAnLi9zZWxlY3Rpb24tc2NoZW1lcydcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbmBcblxuY29uc3QgR3JpZCA9IHN0eWxlZC5kaXY8eyBjb2x1bW5zOiBudW1iZXI7IHJvd3M6IG51bWJlcjsgY29sdW1uR2FwOiBzdHJpbmc7IHJvd0dhcDogc3RyaW5nIH0+YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gcmVwZWF0KCR7cHJvcHMgPT4gcHJvcHMuY29sdW1uc30sIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byByZXBlYXQoJHtwcm9wcyA9PiBwcm9wcy5yb3dzfSwgMWZyKTtcbiAgY29sdW1uLWdhcDogJHtwcm9wcyA9PiBwcm9wcy5jb2x1bW5HYXB9O1xuICByb3ctZ2FwOiAke3Byb3BzID0+IHByb3BzLnJvd0dhcH07XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgR3JpZENlbGwgPSBzdHlsZWQuZGl2YFxuICBwbGFjZS1zZWxmOiBzdHJldGNoO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG5gXG5cbmNvbnN0IERhdGVDZWxsID0gc3R5bGVkLmRpdjx7XG4gIHNlbGVjdGVkOiBib29sZWFuXG4gIHNlbGVjdGVkQ29sb3I6IHN0cmluZ1xuICB1bnNlbGVjdGVkQ29sb3I6IHN0cmluZ1xuICBob3ZlcmVkQ29sb3I6IHN0cmluZ1xufT5gXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMuc2VsZWN0ZWRDb2xvciA6IHByb3BzLnVuc2VsZWN0ZWRDb2xvcil9O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuaG92ZXJlZENvbG9yfTtcbiAgfVxuYFxuXG5jb25zdCBEYXRlTGFiZWwgPSBzdHlsZWQoU3VidGl0bGUpYFxuICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG5gXG5cbmNvbnN0IFRpbWVUZXh0ID0gc3R5bGVkKFRleHQpYFxuICBAbWVkaWEgKG1heC13aWR0aDogNjk5cHgpIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG5gXG5cbnR5cGUgUHJvcHNUeXBlID0ge1xuICBzZWxlY3Rpb246IEFycmF5PERhdGU+XG4gIHNlbGVjdGlvblNjaGVtZTogU2VsZWN0aW9uU2NoZW1lVHlwZVxuICBvbkNoYW5nZTogKG5ld1NlbGVjdGlvbjogQXJyYXk8RGF0ZT4pID0+IHZvaWRcbiAgc3RhcnREYXRlOiBEYXRlXG4gIG51bURheXM6IG51bWJlclxuICBtaW5UaW1lOiBudW1iZXJcbiAgbWF4VGltZTogbnVtYmVyXG4gIGhvdXJseUNodW5rczogbnVtYmVyXG4gIGRhdGVGb3JtYXQ6IHN0cmluZ1xuICB0aW1lRm9ybWF0OiBzdHJpbmdcbiAgY29sdW1uR2FwOiBzdHJpbmdcbiAgcm93R2FwOiBzdHJpbmdcbiAgdW5zZWxlY3RlZENvbG9yOiBzdHJpbmdcbiAgc2VsZWN0ZWRDb2xvcjogc3RyaW5nXG4gIGhvdmVyZWRDb2xvcjogc3RyaW5nXG4gIHJlbmRlckRhdGVDZWxsPzogKGRhdGV0aW1lOiBEYXRlLCBzZWxlY3RlZDogYm9vbGVhbiwgcmVmU2V0dGVyOiAoZGF0ZUNlbGxFbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gdm9pZCkgPT4gSlNYLkVsZW1lbnRcbiAgcmVuZGVyVGltZUxhYmVsPzogKHRpbWU6IERhdGUpID0+IEpTWC5FbGVtZW50XG4gIHJlbmRlckRhdGVMYWJlbD86IChkYXRlOiBEYXRlKSA9PiBKU1guRWxlbWVudFxufVxuXG50eXBlIFN0YXRlVHlwZSA9IHtcbiAgLy8gSW4gdGhlIGNhc2UgdGhhdCBhIHVzZXIgaXMgZHJhZy1zZWxlY3RpbmcsIHdlIGRvbid0IHdhbnQgdG8gY2FsbCB0aGlzLnByb3BzLm9uQ2hhbmdlKCkgdW50aWwgdGhleSBoYXZlIGNvbXBsZXRlZFxuICAvLyB0aGUgZHJhZy1zZWxlY3QuIHNlbGVjdGlvbkRyYWZ0IHNlcnZlcyBhcyBhIHRlbXBvcmFyeSBjb3B5IGR1cmluZyBkcmFnLXNlbGVjdHMuXG4gIHNlbGVjdGlvbkRyYWZ0OiBBcnJheTxEYXRlPlxuICBzZWxlY3Rpb25UeXBlOiBTZWxlY3Rpb25UeXBlIHwgbnVsbFxuICBzZWxlY3Rpb25TdGFydDogRGF0ZSB8IG51bGxcbiAgaXNUb3VjaERyYWdnaW5nOiBib29sZWFuXG4gIGRhdGVzOiBBcnJheTxBcnJheTxEYXRlPj5cbn1cblxuZXhwb3J0IGNvbnN0IHByZXZlbnRTY3JvbGwgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZWR1bGVTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wc1R5cGUsIFN0YXRlVHlwZT4ge1xuICBzZWxlY3Rpb25TY2hlbWVIYW5kbGVyczogeyBba2V5OiBzdHJpbmddOiAoc3RhcnREYXRlOiBEYXRlLCBlbmREYXRlOiBEYXRlLCBmb286IEFycmF5PEFycmF5PERhdGU+PikgPT4gRGF0ZVtdIH1cbiAgY2VsbFRvRGF0ZTogTWFwPEVsZW1lbnQsIERhdGU+ID0gbmV3IE1hcCgpXG4gIC8vIGRvY3VtZW50TW91c2VVcEhhbmRsZXI6ICgpID0+IHZvaWQgPSAoKSA9PiB7fVxuICAvLyBlbmRTZWxlY3Rpb246ICgpID0+IHZvaWQgPSAoKSA9PiB7fVxuICAvLyBoYW5kbGVUb3VjaE1vdmVFdmVudDogKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNUb3VjaEV2ZW50PCo+KSA9PiB2b2lkXG4gIC8vIGhhbmRsZVRvdWNoRW5kRXZlbnQ6ICgpID0+IHZvaWRcbiAgLy8gaGFuZGxlTW91c2VVcEV2ZW50OiAoZGF0ZTogRGF0ZSkgPT4gdm9pZFxuICAvLyBoYW5kbGVNb3VzZUVudGVyRXZlbnQ6IChkYXRlOiBEYXRlKSA9PiB2b2lkXG4gIC8vIGhhbmRsZVNlbGVjdGlvblN0YXJ0RXZlbnQ6IChkYXRlOiBEYXRlKSA9PiB2b2lkXG4gIGdyaWRSZWY6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGxcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzOiBQYXJ0aWFsPFByb3BzVHlwZT4gPSB7XG4gICAgc2VsZWN0aW9uOiBbXSxcbiAgICBzZWxlY3Rpb25TY2hlbWU6ICdzcXVhcmUnLFxuICAgIG51bURheXM6IDcsXG4gICAgbWluVGltZTogOSxcbiAgICBtYXhUaW1lOiAyMyxcbiAgICBob3VybHlDaHVua3M6IDEsXG4gICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgpLFxuICAgIHRpbWVGb3JtYXQ6ICdoYScsXG4gICAgZGF0ZUZvcm1hdDogJ00vRCcsXG4gICAgY29sdW1uR2FwOiAnNHB4JyxcbiAgICByb3dHYXA6ICc0cHgnLFxuICAgIHNlbGVjdGVkQ29sb3I6IGNvbG9ycy5ibHVlLFxuICAgIHVuc2VsZWN0ZWRDb2xvcjogY29sb3JzLnBhbGVCbHVlLFxuICAgIGhvdmVyZWRDb2xvcjogY29sb3JzLmxpZ2h0Qmx1ZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge31cbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHM6IFByb3BzVHlwZSwgc3RhdGU6IFN0YXRlVHlwZSk6IFBhcnRpYWw8U3RhdGVUeXBlPiB8IG51bGwge1xuICAgIC8vIEFzIGxvbmcgYXMgdGhlIHVzZXIgaXNuJ3QgaW4gdGhlIHByb2Nlc3Mgb2Ygc2VsZWN0aW5nLCBhbGxvdyBwcm9wIGNoYW5nZXMgdG8gcmUtcG9wdWxhdGUgc2VsZWN0aW9uIHN0YXRlXG4gICAgaWYgKHN0YXRlLnNlbGVjdGlvblN0YXJ0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGlvbkRyYWZ0OiBbLi4ucHJvcHMuc2VsZWN0aW9uXSxcbiAgICAgICAgZGF0ZXM6IFNjaGVkdWxlU2VsZWN0b3IuY29tcHV0ZURhdGVzTWF0cml4KHByb3BzKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgc3RhdGljIGNvbXB1dGVEYXRlc01hdHJpeChwcm9wczogUHJvcHNUeXBlKTogQXJyYXk8QXJyYXk8RGF0ZT4+IHtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBzdGFydE9mRGF5KHByb3BzLnN0YXJ0RGF0ZSlcbiAgICBjb25zdCBkYXRlczogQXJyYXk8QXJyYXk8RGF0ZT4+ID0gW11cbiAgICBjb25zdCBtaW51dGVzSW5DaHVuayA9IE1hdGguZmxvb3IoNjAgLyBwcm9wcy5ob3VybHlDaHVua3MpXG4gICAgZm9yIChsZXQgZCA9IDA7IGQgPCBwcm9wcy5udW1EYXlzOyBkICs9IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnREYXkgPSBbXVxuICAgICAgZm9yIChsZXQgaCA9IHByb3BzLm1pblRpbWU7IGggPCBwcm9wcy5tYXhUaW1lOyBoICs9IDEpIHtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwcm9wcy5ob3VybHlDaHVua3M7IGMgKz0gMSkge1xuICAgICAgICAgIGN1cnJlbnREYXkucHVzaChhZGRNaW51dGVzKGFkZEhvdXJzKGFkZERheXMoc3RhcnRUaW1lLCBkKSwgaCksIGMgKiBtaW51dGVzSW5DaHVuaykpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRhdGVzLnB1c2goY3VycmVudERheSlcbiAgICB9XG4gICAgcmV0dXJuIGRhdGVzXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHNUeXBlKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0aW9uRHJhZnQ6IFsuLi50aGlzLnByb3BzLnNlbGVjdGlvbl0sIC8vIGNvcHkgaXQgb3ZlclxuICAgICAgc2VsZWN0aW9uVHlwZTogbnVsbCxcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiBudWxsLFxuICAgICAgaXNUb3VjaERyYWdnaW5nOiBmYWxzZSxcbiAgICAgIGRhdGVzOiBTY2hlZHVsZVNlbGVjdG9yLmNvbXB1dGVEYXRlc01hdHJpeChwcm9wcylcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdGlvblNjaGVtZUhhbmRsZXJzID0ge1xuICAgICAgbGluZWFyOiBzZWxlY3Rpb25TY2hlbWVzLmxpbmVhcixcbiAgICAgIHNxdWFyZTogc2VsZWN0aW9uU2NoZW1lcy5zcXVhcmVcbiAgICB9XG5cbiAgICB0aGlzLmVuZFNlbGVjdGlvbiA9IHRoaXMuZW5kU2VsZWN0aW9uLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZU1vdXNlVXBFdmVudCA9IHRoaXMuaGFuZGxlTW91c2VVcEV2ZW50LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZU1vdXNlRW50ZXJFdmVudCA9IHRoaXMuaGFuZGxlTW91c2VFbnRlckV2ZW50LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVRvdWNoTW92ZUV2ZW50ID0gdGhpcy5oYW5kbGVUb3VjaE1vdmVFdmVudC5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVUb3VjaEVuZEV2ZW50ID0gdGhpcy5oYW5kbGVUb3VjaEVuZEV2ZW50LmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVNlbGVjdGlvblN0YXJ0RXZlbnQgPSB0aGlzLmhhbmRsZVNlbGVjdGlvblN0YXJ0RXZlbnQuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gV2UgbmVlZCB0byBhZGQgdGhlIGVuZFNlbGVjdGlvbiBldmVudCBsaXN0ZW5lciB0byB0aGUgZG9jdW1lbnQgaXRzZWxmIGluIG9yZGVyXG4gICAgLy8gdG8gY2F0Y2ggdGhlIGNhc2VzIHdoZXJlIHRoZSB1c2VycyBlbmRzIHRoZWlyIG1vdXNlLWNsaWNrIHNvbWV3aGVyZSBiZXNpZGVzXG4gICAgLy8gdGhlIGRhdGUgY2VsbHMgKGluIHdoaWNoIGNhc2Ugbm9uZSBvZiB0aGUgRGF0ZUNlbGwncyBvbk1vdXNlVXAgaGFuZGxlcnMgd291bGQgZmlyZSlcbiAgICAvL1xuICAgIC8vIFRoaXMgaXNuJ3QgbmVjZXNzYXJ5IGZvciB0b3VjaCBldmVudHMgc2luY2UgdGhlIGB0b3VjaGVuZGAgZXZlbnQgZmlyZXMgb25cbiAgICAvLyB0aGUgZWxlbWVudCB3aGVyZSB0aGUgdG91Y2gvZHJhZyBzdGFydGVkIHNvIGl0J3MgYWx3YXlzIGNhdWdodC5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5lbmRTZWxlY3Rpb24pXG5cbiAgICAvLyBQcmV2ZW50IHBhZ2Ugc2Nyb2xsaW5nIHdoZW4gdXNlciBpcyBkcmFnZ2luZyBvbiB0aGUgZGF0ZSBjZWxsc1xuICAgIHRoaXMuY2VsbFRvRGF0ZS5mb3JFYWNoKCh2YWx1ZSwgZGF0ZUNlbGwpID0+IHtcbiAgICAgIGlmIChkYXRlQ2VsbCAmJiBkYXRlQ2VsbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZGF0ZUNlbGwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudFNjcm9sbCwgeyBwYXNzaXZlOiBmYWxzZSB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5lbmRTZWxlY3Rpb24pXG4gICAgdGhpcy5jZWxsVG9EYXRlLmZvckVhY2goKHZhbHVlLCBkYXRlQ2VsbCkgPT4ge1xuICAgICAgaWYgKGRhdGVDZWxsICYmIGRhdGVDZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkYXRlQ2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50U2Nyb2xsKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyBQZXJmb3JtcyBhIGxvb2t1cCBpbnRvIHRoaXMuY2VsbFRvRGF0ZSB0byByZXRyaWV2ZSB0aGUgRGF0ZSB0aGF0IGNvcnJlc3BvbmRzIHRvXG4gIC8vIHRoZSBjZWxsIHdoZXJlIHRoaXMgdG91Y2ggZXZlbnQgaXMgcmlnaHQgbm93LiBOb3RlIHRoYXQgdGhpcyBtZXRob2Qgd2lsbCBvbmx5IHdvcmtcbiAgLy8gaWYgdGhlIGV2ZW50IGlzIGEgYHRvdWNobW92ZWAgZXZlbnQgc2luY2UgaXQncyB0aGUgb25seSBvbmUgdGhhdCBoYXMgYSBgdG91Y2hlc2AgbGlzdC5cbiAgZ2V0VGltZUZyb21Ub3VjaEV2ZW50KGV2ZW50OiBSZWFjdC5Ub3VjaEV2ZW50PGFueT4pOiBEYXRlIHwgbnVsbCB7XG4gICAgY29uc3QgeyB0b3VjaGVzIH0gPSBldmVudFxuICAgIGlmICghdG91Y2hlcyB8fCB0b3VjaGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IHRvdWNoZXNbMF1cbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjbGllbnRYLCBjbGllbnRZKVxuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICBjb25zdCBjZWxsVGltZSA9IHRoaXMuY2VsbFRvRGF0ZS5nZXQodGFyZ2V0RWxlbWVudClcbiAgICAgIHJldHVybiBjZWxsVGltZSA/PyBudWxsXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBlbmRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLnNlbGVjdGlvbkRyYWZ0KVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0aW9uVHlwZTogbnVsbCxcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIC8vIEdpdmVuIGFuIGVuZGluZyBEYXRlLCBkZXRlcm1pbmVzIGFsbCB0aGUgZGF0ZXMgdGhhdCBzaG91bGQgYmUgc2VsZWN0ZWQgaW4gdGhpcyBkcmFmdFxuICB1cGRhdGVBdmFpbGFiaWxpdHlEcmFmdChzZWxlY3Rpb25FbmQ6IERhdGUgfCBudWxsLCBjYWxsYmFjaz86ICgpID0+IHZvaWQpIHtcbiAgICBjb25zdCB7IHNlbGVjdGlvblR5cGUsIHNlbGVjdGlvblN0YXJ0IH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoc2VsZWN0aW9uVHlwZSA9PT0gbnVsbCB8fCBzZWxlY3Rpb25TdGFydCA9PT0gbnVsbCkgcmV0dXJuXG5cbiAgICBsZXQgbmV3U2VsZWN0aW9uOiBBcnJheTxEYXRlPiA9IFtdXG4gICAgaWYgKHNlbGVjdGlvblN0YXJ0ICYmIHNlbGVjdGlvbkVuZCAmJiBzZWxlY3Rpb25UeXBlKSB7XG4gICAgICBuZXdTZWxlY3Rpb24gPSB0aGlzLnNlbGVjdGlvblNjaGVtZUhhbmRsZXJzW3RoaXMucHJvcHMuc2VsZWN0aW9uU2NoZW1lXShcbiAgICAgICAgc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgIHNlbGVjdGlvbkVuZCxcbiAgICAgICAgdGhpcy5zdGF0ZS5kYXRlc1xuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBuZXh0RHJhZnQgPSBbLi4udGhpcy5wcm9wcy5zZWxlY3Rpb25dXG4gICAgaWYgKHNlbGVjdGlvblR5cGUgPT09ICdhZGQnKSB7XG4gICAgICBuZXh0RHJhZnQgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLm5leHREcmFmdCwgLi4ubmV3U2VsZWN0aW9uXSkpXG4gICAgfSBlbHNlIGlmIChzZWxlY3Rpb25UeXBlID09PSAncmVtb3ZlJykge1xuICAgICAgbmV4dERyYWZ0ID0gbmV4dERyYWZ0LmZpbHRlcihhID0+ICFuZXdTZWxlY3Rpb24uZmluZChiID0+IGlzU2FtZU1pbnV0ZShhLCBiKSkpXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGlvbkRyYWZ0OiBuZXh0RHJhZnQgfSwgY2FsbGJhY2spXG4gIH1cblxuICAvLyBJc29tb3JwaGljIChtb3VzZSBhbmQgdG91Y2gpIGhhbmRsZXIgc2luY2Ugc3RhcnRpbmcgYSBzZWxlY3Rpb24gd29ya3MgdGhlIHNhbWUgd2F5IGZvciBib3RoIGNsYXNzZXMgb2YgdXNlciBpbnB1dFxuICBoYW5kbGVTZWxlY3Rpb25TdGFydEV2ZW50KHN0YXJ0VGltZTogRGF0ZSkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBzdGFydFRpbWUgY2VsbCBpcyBzZWxlY3RlZC91bnNlbGVjdGVkIHRvIGRldGVybWluZSBpZiB0aGlzIGRyYWctc2VsZWN0IHNob3VsZFxuICAgIC8vIGFkZCB2YWx1ZXMgb3IgcmVtb3ZlIHZhbHVlc1xuICAgIGNvbnN0IHRpbWVTZWxlY3RlZCA9IHRoaXMucHJvcHMuc2VsZWN0aW9uLmZpbmQoYSA9PiBpc1NhbWVNaW51dGUoYSwgc3RhcnRUaW1lKSlcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGlvblR5cGU6IHRpbWVTZWxlY3RlZCA/ICdyZW1vdmUnIDogJ2FkZCcsXG4gICAgICBzZWxlY3Rpb25TdGFydDogc3RhcnRUaW1lXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRW50ZXJFdmVudCh0aW1lOiBEYXRlKSB7XG4gICAgLy8gTmVlZCB0byB1cGRhdGUgc2VsZWN0aW9uIGRyYWZ0IG9uIG1vdXNldXAgYXMgd2VsbCBpbiBvcmRlciB0byBjYXRjaCB0aGUgY2FzZXNcbiAgICAvLyB3aGVyZSB0aGUgdXNlciBqdXN0IGNsaWNrcyBvbiBhIHNpbmdsZSBjZWxsIChiZWNhdXNlIG5vIG1vdXNlZW50ZXIgZXZlbnRzIGZpcmVcbiAgICAvLyBpbiB0aGlzIHNjZW5hcmlvKVxuICAgIHRoaXMudXBkYXRlQXZhaWxhYmlsaXR5RHJhZnQodGltZSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlVXBFdmVudCh0aW1lOiBEYXRlKSB7XG4gICAgdGhpcy51cGRhdGVBdmFpbGFiaWxpdHlEcmFmdCh0aW1lKVxuICAgIC8vIERvbid0IGNhbGwgdGhpcy5lbmRTZWxlY3Rpb24oKSBoZXJlIGJlY2F1c2UgdGhlIGRvY3VtZW50IG1vdXNldXAgaGFuZGxlciB3aWxsIGRvIGl0XG4gIH1cblxuICBoYW5kbGVUb3VjaE1vdmVFdmVudChldmVudDogUmVhY3QuVG91Y2hFdmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1RvdWNoRHJhZ2dpbmc6IHRydWUgfSlcbiAgICBjb25zdCBjZWxsVGltZSA9IHRoaXMuZ2V0VGltZUZyb21Ub3VjaEV2ZW50KGV2ZW50KVxuICAgIGlmIChjZWxsVGltZSkge1xuICAgICAgdGhpcy51cGRhdGVBdmFpbGFiaWxpdHlEcmFmdChjZWxsVGltZSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb3VjaEVuZEV2ZW50KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc1RvdWNoRHJhZ2dpbmcpIHtcbiAgICAgIC8vIEdvaW5nIGRvd24gdGhpcyBicmFuY2ggbWVhbnMgdGhlIHVzZXIgdGFwcGVkIGJ1dCBkaWRuJ3QgZHJhZyAtLSB3aGljaFxuICAgICAgLy8gbWVhbnMgdGhlIGF2YWlsYWJpbGl0eSBkcmFmdCBoYXNuJ3QgeWV0IGJlZW4gdXBkYXRlZCAoc2luY2VcbiAgICAgIC8vIGhhbmRsZVRvdWNoTW92ZUV2ZW50IHdhcyBuZXZlciBjYWxsZWQpIHNvIHdlIG5lZWQgdG8gZG8gaXQgbm93XG4gICAgICB0aGlzLnVwZGF0ZUF2YWlsYWJpbGl0eURyYWZ0KG51bGwsICgpID0+IHtcbiAgICAgICAgdGhpcy5lbmRTZWxlY3Rpb24oKVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRTZWxlY3Rpb24oKVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNUb3VjaERyYWdnaW5nOiBmYWxzZSB9KVxuICB9XG5cbiAgcmVuZGVyRGF0ZUNlbGxXcmFwcGVyID0gKHRpbWU6IERhdGUpOiBKU1guRWxlbWVudCA9PiB7XG4gICAgY29uc3Qgc3RhcnRIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3Rpb25TdGFydEV2ZW50KHRpbWUpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBCb29sZWFuKHRoaXMuc3RhdGUuc2VsZWN0aW9uRHJhZnQuZmluZChhID0+IGlzU2FtZU1pbnV0ZShhLCB0aW1lKSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEdyaWRDZWxsXG4gICAgICAgIGNsYXNzTmFtZT1cInJnZHBfX2dyaWQtY2VsbFwiXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICBrZXk9e3RpbWUudG9JU09TdHJpbmcoKX1cbiAgICAgICAgLy8gTW91c2UgaGFuZGxlcnNcbiAgICAgICAgb25Nb3VzZURvd249e3N0YXJ0SGFuZGxlcn1cbiAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVNb3VzZUVudGVyRXZlbnQodGltZSlcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZVVwPXsoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVNb3VzZVVwRXZlbnQodGltZSlcbiAgICAgICAgfX1cbiAgICAgICAgLy8gVG91Y2ggaGFuZGxlcnNcbiAgICAgICAgLy8gU2luY2UgdG91Y2ggZXZlbnRzIGZpcmUgb24gdGhlIGV2ZW50IHdoZXJlIHRoZSB0b3VjaC1kcmFnIHN0YXJ0ZWQsIHRoZXJlJ3Mgbm8gcG9pbnQgaW4gcGFzc2luZ1xuICAgICAgICAvLyBpbiB0aGUgdGltZSBwYXJhbWV0ZXIsIGluc3RlYWQgdGhlc2UgaGFuZGxlcnMgd2lsbCBkbyB0aGVpciBqb2IgdXNpbmcgdGhlIGRlZmF1bHQgRXZlbnRcbiAgICAgICAgLy8gcGFyYW1ldGVyc1xuICAgICAgICBvblRvdWNoU3RhcnQ9e3N0YXJ0SGFuZGxlcn1cbiAgICAgICAgb25Ub3VjaE1vdmU9e3RoaXMuaGFuZGxlVG91Y2hNb3ZlRXZlbnR9XG4gICAgICAgIG9uVG91Y2hFbmQ9e3RoaXMuaGFuZGxlVG91Y2hFbmRFdmVudH1cbiAgICAgID5cbiAgICAgICAge3RoaXMucmVuZGVyRGF0ZUNlbGwodGltZSwgc2VsZWN0ZWQpfVxuICAgICAgPC9HcmlkQ2VsbD5cbiAgICApXG4gIH1cblxuICByZW5kZXJEYXRlQ2VsbCA9ICh0aW1lOiBEYXRlLCBzZWxlY3RlZDogYm9vbGVhbik6IEpTWC5FbGVtZW50ID0+IHtcbiAgICBjb25zdCByZWZTZXR0ZXIgPSAoZGF0ZUNlbGw6IEhUTUxFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKGRhdGVDZWxsKSB7XG4gICAgICAgIHRoaXMuY2VsbFRvRGF0ZS5zZXQoZGF0ZUNlbGwsIHRpbWUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnJlbmRlckRhdGVDZWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZW5kZXJEYXRlQ2VsbCh0aW1lLCBzZWxlY3RlZCwgcmVmU2V0dGVyKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGF0ZUNlbGxcbiAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgcmVmPXtyZWZTZXR0ZXJ9XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcj17dGhpcy5wcm9wcy5zZWxlY3RlZENvbG9yfVxuICAgICAgICAgIHVuc2VsZWN0ZWRDb2xvcj17dGhpcy5wcm9wcy51bnNlbGVjdGVkQ29sb3J9XG4gICAgICAgICAgaG92ZXJlZENvbG9yPXt0aGlzLnByb3BzLmhvdmVyZWRDb2xvcn1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXJUaW1lTGFiZWwgPSAodGltZTogRGF0ZSk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5yZW5kZXJUaW1lTGFiZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlbmRlclRpbWVMYWJlbCh0aW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPFRpbWVUZXh0Pntmb3JtYXREYXRlKHRpbWUsIHRoaXMucHJvcHMudGltZUZvcm1hdCl9PC9UaW1lVGV4dD5cbiAgICB9XG4gIH1cblxuICByZW5kZXJEYXRlTGFiZWwgPSAoZGF0ZTogRGF0ZSk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5yZW5kZXJEYXRlTGFiZWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlbmRlckRhdGVMYWJlbChkYXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPERhdGVMYWJlbD57Zm9ybWF0RGF0ZShkYXRlLCB0aGlzLnByb3BzLmRhdGVGb3JtYXQpfTwvRGF0ZUxhYmVsPlxuICAgIH1cbiAgfVxuXG4gIHJlbmRlckZ1bGxEYXRlR3JpZCgpOiBBcnJheTxKU1guRWxlbWVudD4ge1xuICAgIGNvbnN0IGZsYXR0ZW5lZERhdGVzOiBEYXRlW10gPSBbXVxuICAgIGNvbnN0IG51bURheXMgPSB0aGlzLnN0YXRlLmRhdGVzLmxlbmd0aFxuICAgIGNvbnN0IG51bVRpbWVzID0gdGhpcy5zdGF0ZS5kYXRlc1swXS5sZW5ndGhcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bVRpbWVzOyBqICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGF5czsgaSArPSAxKSB7XG4gICAgICAgIGZsYXR0ZW5lZERhdGVzLnB1c2godGhpcy5zdGF0ZS5kYXRlc1tpXVtqXSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGF0ZUdyaWRFbGVtZW50cyA9IGZsYXR0ZW5lZERhdGVzLm1hcCh0aGlzLnJlbmRlckRhdGVDZWxsV3JhcHBlcilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRpbWVzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gaSAqIG51bURheXNcbiAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLnN0YXRlLmRhdGVzWzBdW2ldXG4gICAgICAvLyBJbmplY3QgdGhlIHRpbWUgbGFiZWwgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IHJvd1xuICAgICAgZGF0ZUdyaWRFbGVtZW50cy5zcGxpY2UoaW5kZXggKyBpLCAwLCB0aGlzLnJlbmRlclRpbWVMYWJlbCh0aW1lKSlcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIEVtcHR5IHRvcCBsZWZ0IGNvcm5lclxuICAgICAgPGRpdiBrZXk9XCJ0b3BsZWZ0XCIgLz4sXG4gICAgICAvLyBUb3Agcm93IG9mIGRhdGVzXG4gICAgICAuLi50aGlzLnN0YXRlLmRhdGVzLm1hcCgoZGF5T2ZUaW1lcywgaW5kZXgpID0+XG4gICAgICAgIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnJlbmRlckRhdGVMYWJlbChkYXlPZlRpbWVzWzBdKSwgeyBrZXk6IGBkYXRlLSR7aW5kZXh9YCB9KVxuICAgICAgKSxcbiAgICAgIC8vIEV2ZXJ5IHJvdyBhZnRlciB0aGF0XG4gICAgICAuLi5kYXRlR3JpZEVsZW1lbnRzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IFJlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7IGtleTogYHRpbWUtJHtpbmRleH1gIH0pKVxuICAgIF1cbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGNvbHVtbnM9e3RoaXMuc3RhdGUuZGF0ZXMubGVuZ3RofVxuICAgICAgICAgIHJvd3M9e3RoaXMuc3RhdGUuZGF0ZXNbMF0ubGVuZ3RofVxuICAgICAgICAgIGNvbHVtbkdhcD17dGhpcy5wcm9wcy5jb2x1bW5HYXB9XG4gICAgICAgICAgcm93R2FwPXt0aGlzLnByb3BzLnJvd0dhcH1cbiAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFJlZiA9IGVsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckZ1bGxEYXRlR3JpZCgpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKVxuICB9XG59XG4iXX0=
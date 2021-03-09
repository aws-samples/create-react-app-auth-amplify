# React Schedule Selector

[![npm version](https://badge.fury.io/js/react-schedule-selector.svg)](https://badge.fury.io/js/react-schedule-selector) [![Build Status](https://travis-ci.com/bibekg/react-schedule-selector.svg?branch=master)](https://travis-ci.com/bibekg/react-schedule-selector) [![Coverage Status](https://coveralls.io/repos/github/bibekg/react-schedule-selector/badge.svg?branch=master)](https://coveralls.io/github/bibekg/react-schedule-selector?branch=master)

A mobile-friendly when2meet-style grid-based schedule selector built with [styled components](https://github.com/styled-components/styled-components) and [date-fns](https://date-fns.org/).

[Live example](http://react-schedule-selector.surge.sh/)

![image](https://image.ibb.co/jDKJBT/react_grid_date_picker.png)

## Getting Started

```
yarn add react-schedule-selector styled-components
```

```js
import ScheduleSelector from 'react-schedule-selector'

class App extends React.Component {
  state = { schedule = [] }

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule })
  }

  render() {
    return (
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={5}
        minTime={8}
        maxTime={22}
        hourlyChunks={2}
        onChange={this.handleChange}
      />
    )
  }
}
```

## `<ScheduleSelector />`

`ScheduleSelector` is a controlled component that can be used easily with the default settings. Just provide a controlled value for `selection` and include an `onChange` handler and you're good to go. Further customization can be done using the props outlined below.

To customize the UI, you can either:

1.  Specify values for the color, margin, format, etc. props
2.  Use the `renderDateCell` render prop to handle rendering yourself.

### `Props`

#### `selection`

**type**: `Array<Date>`

**description**: List of dates that should be filled in on the grid (reflect the start time of each cell).

**required**: yes

#### `selectionScheme`

**type**: `'square'` | `'linear'`

**description**: The behavior for selection when dragging. `square` selects a square with the start and end cells at opposite corners. `linear` selects all the cells that are chronologically between the start and end cells.

**required**: no

**default value**: `'square'`

#### `onChange`

**type**: `(Array<Date>) => void`

**description**: Called when selected availability is changed. The new list of selected dates is passed in as the first parameter.

**required**: yes

#### `startDate`

**type**: `Date`

**description**: The date on which the grid should start (time portion is ignored, specify start time via `minTime`)

**required**: no

**default value**: today

#### `numDays`

**type**: `number`

**description**: The number of days to show, starting from today

**required**: no

**default value**: `7`

#### `hourlyChunks`

**type**: `number`

**description**: How many chunks to divide each hour into (e.g. `2` divides the hour into half-hour steps, `4` into 15-minute steps)

**required**: no

**default value**: `1`

#### `minTime`

**type**: `number`

**description**: The minimum hour to show (0-23)

**required**: no

**default value**: `9`

#### `maxTime`

**type**: `number`

**description**: The maximum hour to show (0-23)

**required**: no

**default value**: `23`

#### `dateFormat`

**type**: `string`

**description**: The [date format](https://date-fns.org/v1.29.0/docs/format) to be used for the column headers

**required**: no

**default value**: `'M/D'`

#### `timeFormat`

**type**: `string`

**description**: The [time format](https://date-fns.org/v1.29.0/docs/format) to be used for the row labels

**required**: no

**default value**: `'ha'`

#### `margin` (removed in v3.0, use `columnGap` and `rowGap` instead)

**type**: `number`

**description**: The margin between grid cells (in pixels)

**required**: no

**default value**: `3`

#### `columnGap`

**type**: `string`

**description**: The gap between grid columns, specified using any valid CSS units

**required**: no

**default value**: `'4 px'`

#### `rowGap`

**type**: `string`

**description**: The gap between grid rows, specified using any valid CSS units

**required**: no

**default value**: `'4 px'`

#### `unselectedColor`

**type**: `string`

**description**: The color of an unselected cell

**required**: no

**default value**: `'rgba(89, 154, 242, 1)'`

#### `selectedColor`

**type**: `string`

**description**: The color of an unselected cell

**required**: no

**default value**: `'rgba(162, 198, 248, 1)'`

#### `hoveredColor`

**type**: `string`

**description**: The color of a hovered cell

**required**: no

**default value**: `'#dbedff'`

#### `renderDateCell`

**type**: `(datetime: Date, selected: boolean, refSetter: (dateCell: HTMLElement | null) => void) => React.Node`

**description**: A render prop function that accepts the time this cell is representing and whether the cell is selected or not and should return a React element. It is your responsibility to apply the `refSetter` as a ref to the component you render -- neglecting to do so will cause the component to not work properly for touch devices. If you choose to use this custom render function, the color props above have no effect.

**required**: no

#### `renderTimeLabel`

**type**: `(time: Date) => React.Node`

**description**: A render prop function that accepts the time a given row is representing and should return a React element.

**required**: no

#### `renderDateLabel`

**type**: `(date: Date) => React.Node`

**description**: A render prop function that accepts the time a given row is representing and should return a React element.

**required**: no

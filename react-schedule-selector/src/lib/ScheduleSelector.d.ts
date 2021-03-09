import * as React from 'react';
import { SelectionSchemeType, SelectionType } from './selection-schemes';
export declare const GridCell: import("styled-components").StyledComponent<"div", any, {}, never>;
declare type PropsType = {
    selection: Array<Date>;
    selectionScheme: SelectionSchemeType;
    onChange: (newSelection: Array<Date>) => void;
    startDate: Date;
    numDays: number;
    minTime: number;
    maxTime: number;
    hourlyChunks: number;
    dateFormat: string;
    timeFormat: string;
    columnGap: string;
    rowGap: string;
    unselectedColor: string;
    selectedColor: string;
    hoveredColor: string;
    renderDateCell?: (datetime: Date, selected: boolean, refSetter: (dateCellElement: HTMLElement) => void) => JSX.Element;
    renderTimeLabel?: (time: Date) => JSX.Element;
    renderDateLabel?: (date: Date) => JSX.Element;
};
declare type StateType = {
    selectionDraft: Array<Date>;
    selectionType: SelectionType | null;
    selectionStart: Date | null;
    isTouchDragging: boolean;
    dates: Array<Array<Date>>;
};
export declare const preventScroll: (e: TouchEvent) => void;
export default class ScheduleSelector extends React.Component<PropsType, StateType> {
    selectionSchemeHandlers: {
        [key: string]: (startDate: Date, endDate: Date, foo: Array<Array<Date>>) => Date[];
    };
    cellToDate: Map<Element, Date>;
    gridRef: HTMLElement | null;
    static defaultProps: Partial<PropsType>;
    static getDerivedStateFromProps(props: PropsType, state: StateType): Partial<StateType> | null;
    static computeDatesMatrix(props: PropsType): Array<Array<Date>>;
    constructor(props: PropsType);
    componentDidMount(): void;
    componentWillUnmount(): void;
    getTimeFromTouchEvent(event: React.TouchEvent<any>): Date | null;
    endSelection(): void;
    updateAvailabilityDraft(selectionEnd: Date | null, callback?: () => void): void;
    handleSelectionStartEvent(startTime: Date): void;
    handleMouseEnterEvent(time: Date): void;
    handleMouseUpEvent(time: Date): void;
    handleTouchMoveEvent(event: React.TouchEvent): void;
    handleTouchEndEvent(): void;
    renderDateCellWrapper: (time: Date) => JSX.Element;
    renderDateCell: (time: Date, selected: boolean) => JSX.Element;
    renderTimeLabel: (time: Date) => JSX.Element;
    renderDateLabel: (date: Date) => JSX.Element;
    renderFullDateGrid(): Array<JSX.Element>;
    render(): JSX.Element;
}
export {};

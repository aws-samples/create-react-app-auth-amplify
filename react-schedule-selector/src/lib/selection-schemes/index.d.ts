declare const _default: {
    linear: (selectionStart: Date | null, selectionEnd: Date | null, dateList: Date[][]) => Date[];
    square: (selectionStart: Date | null, selectionEnd: Date | null, dateList: Date[][]) => Date[];
};
export default _default;
export declare type SelectionType = 'add' | 'remove';
export declare type SelectionSchemeType = 'linear' | 'square';

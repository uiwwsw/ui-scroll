export declare enum Direction {
    Y = "y",
    X = "x"
}
export declare enum Size {
    Y = "height",
    X = "width"
}
export interface Option<T> {
    starting?: T;
    doing?: T;
    ending?: T;
    frame?: number;
}
export interface InputOption extends Option<string> {
    startTopMargin?: string;
    endTopMargin?: string;
    startBottomMargin?: string;
    endBottomMargin?: string;
}
export interface OutputOption extends Option<string> {
    index: number;
    size: number;
    startTopPosition: number;
    endTopPosition: number;
    startBottomPosition: number;
    endBottomPosition: number;
}
export interface IndexOption<T> {
    [T: number]: T;
}
export interface Props {
    selector: string;
    throttleTimer?: number;
    commonOptions?: InputOption;
    options?: IndexOption<InputOption>;
}
export default class Scroll {
    #private;
    protected readonly elements: HTMLElement[];
    protected options: OutputOption[];
    protected scrollSize: number;
    protected scrollPosition: number;
    protected windowSize: number;
    protected scrollDirection: number;
    readonly onResize: Function;
    readonly onScroll: Function;
    constructor(props: Props);
    get scrollBottomPosition(): number;
    get scrollTopPosition(): number;
    onStarting(index: number): true | void;
    onDoing(index: number): true | void;
    onEnding(index: number): true | void;
}

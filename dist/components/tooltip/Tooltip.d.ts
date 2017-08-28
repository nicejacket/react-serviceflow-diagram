import * as React from 'react';
import './Tooltip.less';
export interface TooltipState {
    visible?: boolean;
}
export interface TooltipProps {
    position?: string;
    data?: any;
}
export declare const POSITION: {
    LEFT: string;
    RIGHT: string;
    TOP: string;
    BOTTOM: string;
};
export default class Tooltip extends React.Component<TooltipProps, TooltipState> {
    static defaultProps: {
        position: string;
    };
    state: {
        visible: boolean;
    };
    root: React.ReactInstance;
    tooltip: React.ReactInstance;
    leave: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    loopSet: (set: RaphaelSet) => void;
    onMouseEnterHandler: (e: any) => void;
    onShowTooltipHandler: (e: any) => void;
    onHideHandler: () => void;
    onMouseLevelAndScrollHandler: (e: any) => void;
    render(): JSX.Element;
}

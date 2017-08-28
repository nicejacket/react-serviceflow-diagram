import * as React from 'react';
export interface DiagramIconTimerCircleProps {
    radius?: number;
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    fillOpacity?: number;
}
export interface DiagramIconTimerTimerProps {
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    fillOpacity?: number;
}
export interface DiagramIconTimerProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    circle?: DiagramIconTimerCircleProps;
    timer?: DiagramIconTimerTimerProps;
    data?: any;
}
export default class DiagramIconTimer extends React.Component<DiagramIconTimerProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        circle: {
            stroke: string;
            fill: string;
        };
        timer: {
            stroke: string;
            fill: string;
        };
    };
    render(): JSX.Element;
}

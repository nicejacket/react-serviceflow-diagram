import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface BoundaryEventProps extends BaseElementProps {
    circleRadiusInner?: number;
    circleRadiusOuter?: number;
    signalFill?: string;
}
export default class BoundaryEvent extends React.Component<BoundaryEventProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeWidth: number;
        circleRadiusInner: number;
        circleRadiusOuter: number;
        signalFill: string;
    };
    render(): JSX.Element;
}

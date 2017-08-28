import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface ThrowEventProps extends BaseElementProps {
    circleRadiusInner?: number;
    circleRadiusOuter?: number;
    signalFill?: string;
}
export default class ThrowEvent extends React.Component<ThrowEventProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeWidth: number;
        signalFill: string;
        circleRadiusInner: number;
        circleRadiusOuter: number;
    };
    render(): JSX.Element;
}

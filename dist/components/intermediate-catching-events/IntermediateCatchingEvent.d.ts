import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface IntermediateCatchingEventProps extends BaseElementProps {
    circleRadiusInner?: number;
    circleRadiusOuter?: number;
}
export default class IntermediateCatchingEvent extends React.Component<IntermediateCatchingEventProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeWidth: number;
        circleRadiusInner: number;
        circleRadiusOuter: number;
    };
    render(): JSX.Element;
}

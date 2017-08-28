import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface EventGatewayProps extends BaseElementProps {
    circleRadiusInner?: number;
    circleRadiusOuter?: number;
    pentaStrokeWidth?: number;
}
export default class EventGateway extends React.Component<EventGatewayProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeWidth: number;
        circleRadiusInner: number;
        circleRadiusOuter: number;
        pentaStrokeWidth: number;
    };
    render(): JSX.Element;
}

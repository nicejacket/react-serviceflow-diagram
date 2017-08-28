import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface EventSubProcessProps extends BaseElementProps {
    radius?: number;
}
export default class EventSubProcess extends React.Component<EventSubProcessProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        radius: number;
        strokeWidth: number;
        fill: string;
    };
    render(): JSX.Element;
}

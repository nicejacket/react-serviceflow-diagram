import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface EventProps extends BaseElementProps {
    radius?: number;
    iconFill?: string;
    eventDefinition?: object;
}
export default class Event extends React.Component<EventProps, any> {
    static defaultProps: {
        x: number;
        y: number;
    };
    render(): JSX.Element;
}

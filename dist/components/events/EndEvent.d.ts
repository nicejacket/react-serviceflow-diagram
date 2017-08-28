import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface EndEventProps extends BaseElementProps {
    radius?: number;
    iconFill?: string;
}
export default class EndEvent extends React.Component<EndEventProps, any> {
    static defaultProps: {
        radius: number;
        strokeWidth: number;
        iconFill: string;
    };
    render(): JSX.Element;
}

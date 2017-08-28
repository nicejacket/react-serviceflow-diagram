import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface StartEventProps extends BaseElementProps {
    radius?: number;
    iconFill?: string;
}
export default class StartEvent extends React.Component<StartEventProps, any> {
    static defaultProps: {
        radius: number;
        strokeWidth: number;
        iconFill: string;
    };
    render(): JSX.Element;
}

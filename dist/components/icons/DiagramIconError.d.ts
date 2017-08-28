import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconErrorProps extends BaseElementProps {
}
export default class DiagramIconError extends React.Component<DiagramIconErrorProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        stroke: string;
        strokeWidth: number;
    };
    render(): JSX.Element;
}

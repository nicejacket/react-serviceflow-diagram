import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconMessageProps extends BaseElementProps {
}
export default class DiagramIconMessage extends React.Component<DiagramIconMessageProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        fill: string;
        strokeWidth: number;
        stroke: string;
    };
    render(): JSX.Element;
}

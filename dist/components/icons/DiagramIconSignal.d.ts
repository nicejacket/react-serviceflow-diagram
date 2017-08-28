import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconSignalProps extends BaseElementProps {
}
export default class DiagramIconSignal extends React.Component<DiagramIconSignalProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        stroke: string;
        strokeWidth: number;
    };
    render(): JSX.Element;
}

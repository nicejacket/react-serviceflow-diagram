import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconReceiveTaskProps extends BaseElementProps {
}
export default class DiagramIconReceiveTask extends React.Component<DiagramIconReceiveTaskProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        stroke: string;
        fill: string;
    };
    render(): JSX.Element;
}

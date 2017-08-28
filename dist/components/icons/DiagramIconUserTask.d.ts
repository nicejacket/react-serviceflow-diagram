import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconUserTaskProps extends BaseElementProps {
}
export default class DiagramIconUserTask extends React.Component<DiagramIconUserTaskProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        stroke: string;
        fill: string;
    };
    render(): JSX.Element;
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconServiceTaskProps extends BaseElementProps {
}
export default class DiagramIconServiceTask extends React.Component<DiagramIconServiceTaskProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        stroke: string;
        fill: string;
    };
    render(): JSX.Element;
}

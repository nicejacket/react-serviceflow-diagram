import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconManualTaskProps extends BaseElementProps {
}
export default class DiagramIconManualTask extends React.Component<DiagramIconManualTaskProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        stroke: string;
        fill: string;
    };
    render(): JSX.Element;
}

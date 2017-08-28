import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconCompensateProps extends BaseElementProps {
}
export default class DiagramIconCompensate extends React.Component<DiagramIconCompensateProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        stroke: string;
    };
    render(): JSX.Element;
}

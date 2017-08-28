import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconScriptTaskProps extends BaseElementProps {
}
export default class DiagramIconScriptTask extends React.Component<DiagramIconScriptTaskProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        fill: string;
        stroke: string;
    };
    render(): JSX.Element;
}

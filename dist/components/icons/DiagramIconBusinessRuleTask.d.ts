import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramIconBusinessRuleTaskProps extends BaseElementProps {
}
export default class DiagramIconBusinessRuleTask extends React.Component<DiagramIconBusinessRuleTaskProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        stroke: string;
        fill: string;
    };
    render(): JSX.Element;
}

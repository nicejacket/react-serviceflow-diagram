import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface LaneProps extends BaseElementProps {
    text?: string;
    textTransform?: string;
    radius?: number;
}
export default class Lane extends React.Component<LaneProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        stroke: string;
        fill: string;
        strokeWidth: number;
        radius: number;
    };
    render(): JSX.Element;
}

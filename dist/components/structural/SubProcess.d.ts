import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface SubProcessProps extends BaseElementProps {
    radius?: number;
}
export default class SubProcess extends React.Component<SubProcessProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        radius: number;
        strokeWidth: number;
        fill: string;
    };
    render(): JSX.Element;
}

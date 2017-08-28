import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface PoolProps extends BaseElementProps {
    text?: string;
    textTransform?: string;
    radius?: number;
}
export default class Pool extends React.Component<PoolProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        stroke: string;
        fill: string;
        strokeWidth: number;
        radius: number;
        textTransform: string;
    };
    render(): JSX.Element;
}

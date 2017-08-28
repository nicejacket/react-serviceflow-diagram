import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface ParallelGatewayProps extends BaseElementProps {
}
export default class ParallelGatway extends React.Component<ParallelGatewayProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeWidth: number;
    };
    render(): JSX.Element;
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface InclusiveGatewayProps extends BaseElementProps {
    radius?: number;
}
export default class InclusiveGateway extends React.Component<InclusiveGatewayProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeWidth: number;
        radius: number;
    };
    render(): JSX.Element;
}

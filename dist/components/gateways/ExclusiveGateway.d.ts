import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface ExclusiveGatewayProps extends BaseElementProps {
}
export default class ExclusiveGateway extends React.Component<ExclusiveGatewayProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeWidth: number;
    };
    render(): JSX.Element;
}

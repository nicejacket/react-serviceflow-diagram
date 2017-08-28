import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface GatewayProps extends BaseElementProps {
}
export default class Gateway extends React.Component<GatewayProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeWidth: number;
    };
    render(): JSX.Element;
}

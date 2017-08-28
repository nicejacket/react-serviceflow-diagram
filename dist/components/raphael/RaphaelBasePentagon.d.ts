import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface RaphaelBasePentagonProps extends BaseElementProps {
    strokeLinejoin?: string;
}
export declare class RaphaelBasePentagon extends React.Component<RaphaelBasePentagonProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeLinejoin: string;
    };
    render(): JSX.Element;
}

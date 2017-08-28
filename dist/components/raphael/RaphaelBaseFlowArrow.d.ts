import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { Polyline } from './Polyline';
export interface RaphaelBaseFlowArrowProps extends BaseElementProps {
    flow: any;
}
export declare class RaphaelBaseFlowArrow extends React.Component<RaphaelBaseFlowArrowProps, any> {
    static defaultProps: {
        x: number;
        y: number;
    };
    line: Polyline;
    renderLine: () => JSX.Element;
    renderArrow: () => JSX.Element;
    render(): JSX.Element;
}

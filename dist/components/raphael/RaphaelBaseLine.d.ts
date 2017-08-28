import * as React from 'react';
import { RaphaelBasePath } from './RaphaelBasePath';
export interface RaphaelBaseLineProps {
    x1?: number;
    y1?: number;
    x2?: number;
    y2?: number;
    animate?: any;
    attr?: any;
    stroke?: string;
    strokeWidth?: number;
}
export declare class RaphaelBaseLine extends React.Component<RaphaelBaseLineProps, any> {
    static defaultProps: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    path: RaphaelBasePath;
    getElement(): RaphaelElement;
    render(): JSX.Element;
}

import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';
export interface RaphaelBasePathProps {
    d: string | Array<String>;
    stroke?: string;
    strokeWidth?: number;
    strokeDasharray?: string;
    fill?: string;
    fillOpacity?: number;
    transform?: string;
    attr?: any;
    animate?: any;
    id?: string;
}
export declare class RaphaelBasePath extends React.Component<RaphaelBasePathProps, any> {
    static defaultProps: {
        stroke: string;
        strokeWidth: number;
    };
    element: RaphaelBaseElement;
    getElement(): RaphaelElement;
    render(): JSX.Element;
}

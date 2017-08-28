import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';
export interface RaphaelBasePrintProps {
    x?: number;
    y?: number;
    text?: string;
    fontFamily?: string;
}
export declare class RaphaelBasePrint extends React.Component {
    static defaultProps: {
        x: number;
        y: number;
        text: string;
        fontFamily: string;
    };
    element: RaphaelBaseElement;
    getElement(): RaphaelElement;
    render(): JSX.Element;
}

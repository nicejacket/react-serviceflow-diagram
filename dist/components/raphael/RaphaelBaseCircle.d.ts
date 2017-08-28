import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';
export interface RaphaelBaseCircleProps {
    id?: string;
    x?: number;
    y?: number;
    r?: number;
}
export declare class RaphaelBaseCircle extends React.Component<RaphaelBaseCircleProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        r: number;
    };
    element: RaphaelBaseElement;
    getElement(): RaphaelElement;
    render(): JSX.Element;
}

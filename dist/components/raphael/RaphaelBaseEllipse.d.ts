import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';
export interface RaphaelBaseEllipseProps {
    x?: number;
    y?: number;
    rx?: number;
    ry?: number;
}
export declare class RaphaelBaseEllipse extends React.Component<RaphaelBaseEllipseProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        rx: number;
        ry: number;
    };
    element: RaphaelBaseElement;
    getElement(): RaphaelElement;
    render(): JSX.Element;
}

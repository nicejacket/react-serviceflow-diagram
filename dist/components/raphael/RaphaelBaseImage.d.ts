import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';
export interface RaphaelBaseImageProps {
    src: string;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
export declare class RaphaelBaseImage extends React.Component<RaphaelBaseImageProps, any> {
    static defaultProps: {
        src: string;
        x: number;
        y: number;
        width: number;
        height: number;
    };
    element: RaphaelBaseElement;
    getElement(): RaphaelElement;
    render(): JSX.Element;
}

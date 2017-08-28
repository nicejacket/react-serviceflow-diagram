import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';
import BaseElementProps from '../BaseElementProps';
export interface RaphaelBaseRectProps extends BaseElementProps {
    r?: number;
}
export declare class RaphaelBaseRect extends React.Component<RaphaelBaseRectProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        r: number;
    };
    element: RaphaelBaseElement;
    getElement(): RaphaelElement;
    render(): JSX.Element;
}

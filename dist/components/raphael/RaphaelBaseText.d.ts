import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';
import BaseElementProps from '../BaseElementProps';
export interface RaphaelBaseTextProps extends BaseElementProps {
    text?: string;
    transform?: string;
    fontSize?: number;
    fontFamily?: string;
    textAnchor?: string;
}
export declare class RaphaelBaseText extends React.Component<RaphaelBaseTextProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        text: string;
    };
    element: RaphaelBaseElement;
    getElement(): RaphaelElement;
    render(): JSX.Element;
}

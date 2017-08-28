import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { RaphaelBaseText } from './RaphaelBaseText';
export interface RaphaelBaseMultilineTextProps extends BaseElementProps {
    text: string;
    transform?: string;
    color?: string;
}
export declare class RaphaelBaseMultilineText extends React.Component<RaphaelBaseMultilineTextProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        color: string;
    };
    textPaper: RaphaelBaseText;
    constructor(props: RaphaelBaseMultilineTextProps);
    componentDidMount(): void;
    private formatText;
    render(): JSX.Element;
}

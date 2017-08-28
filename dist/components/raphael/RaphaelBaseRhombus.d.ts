import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface RaphaelBaseRhombusProps extends BaseElementProps {
}
export declare class RaphaelBaseRhombus extends React.Component<RaphaelBaseRhombusProps, any> {
    static defaultProps: {
        x: number;
        y: number;
    };
    render(): JSX.Element;
}

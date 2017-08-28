import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
export interface RaphaelIconCrossProps extends BaseElementProps {
}
export default class RaphaelIconCross extends React.Component<RaphaelIconCrossProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        strokeWidth: number;
    };
    render(): JSX.Element;
}

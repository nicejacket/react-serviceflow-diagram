import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
export interface RaphaelIconPlusProps extends BaseElementProps {
}
export default class RaphaelIconPlus extends React.Component<RaphaelIconPlusProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        strokeWidth: number;
    };
    render(): JSX.Element;
}

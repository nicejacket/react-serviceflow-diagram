import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
export interface RaphaelIconCircleProps extends BaseElementProps {
    radius?: number;
}
export default class RaphaelIconCircle extends React.Component<RaphaelIconCircleProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        strokeWidth: number;
        radius: number;
    };
    render(): JSX.Element;
}

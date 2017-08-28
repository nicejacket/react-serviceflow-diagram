import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { Polyline } from './Polyline';
export interface RaphaelBaseAssociationProps extends BaseElementProps {
    association: any;
}
export declare class RaphaelBaseAssociation extends React.Component<RaphaelBaseAssociationProps, any> {
    static defaultProps: {
        x: number;
        y: number;
    };
    line: Polyline;
    renderLine: () => JSX.Element;
    renderArrow: () => JSX.Element;
    render(): JSX.Element;
}

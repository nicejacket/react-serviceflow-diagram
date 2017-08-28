import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
export interface RaphaelIconUserProps extends BaseElementProps {
}
export default class RaphaelIconUser extends React.Component<RaphaelIconUserProps, any> {
    static defaultProps: {
        fillOpacity: number;
    };
    render(): JSX.Element;
}

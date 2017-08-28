import * as React from 'react';
export interface PoolsProps {
    pools?: Array<any>;
}
export default class Pools extends React.Component<PoolsProps, any> {
    static defaultProps: {
        pools: any[];
    };
    render(): JSX.Element;
}

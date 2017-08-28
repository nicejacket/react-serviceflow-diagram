import * as React from 'react';
export interface RaphaelBaseSetProps {
    load?: (set: RaphaelSet) => {};
}
export interface RaphaelBaseSetState {
    loaded: boolean;
    id?: string;
}
export declare class RaphaelBaseSet extends React.Component<RaphaelBaseSetProps, RaphaelBaseSetState> {
    constructor(props: RaphaelBaseSetProps);
    set: RaphaelSet;
    componentDidMount(): void;
    getSet(): RaphaelSet;
    handleLoad(set: RaphaelSet): void;
    componentWillUnmout(): void;
    render(): JSX.Element;
}

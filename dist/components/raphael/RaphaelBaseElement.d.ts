import * as React from 'react';
export declare class RaphaelBaseElement extends React.Component<any, any> {
    constructor(props: any);
    element: RaphaelElement;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    getElement(): RaphaelElement;
    handleLoad(element: RaphaelElement): void;
    handleUpdate(element: Element): void;
    render(): JSX.Element;
}

import * as React from 'react';
export interface LanesProps {
    lanes?: Array<any>;
}
export default class Lanes extends React.Component<LanesProps, any> {
    static defaultProps: {
        lanes: any[];
    };
    render(): JSX.Element;
}

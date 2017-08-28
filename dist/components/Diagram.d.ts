import * as React from 'react';
import { DiagramModel } from '../models/DiagramModel';
import { DiagramElementModel } from '../models/DiagramModel';
export interface DiagramProps {
    diagram: DiagramModel;
    customerActivities?: (ele: DiagramElementModel) => any;
    onClick?: (e: any) => void;
}
export default class Diagram extends React.Component<DiagramProps, any> {
    static defaultProps: {
        onClick: () => void;
    };
    constructor(props: DiagramProps);
    componentWillReceiveProps({diagram}: DiagramProps): void;
    onMouseEnterHandler: (e: any) => void;
    renderElement: (ele: DiagramElementModel) => any;
    render(): JSX.Element;
}

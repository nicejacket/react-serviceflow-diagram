import * as React from 'react';
import BaseElementProps from './BaseElementProps';
import { DiagramFlowElementModel } from '../models/DiagramModel';
export interface SequenceFlowProps extends BaseElementProps {
    flow: DiagramFlowElementModel;
}
export default class SequenceFlow extends React.Component<SequenceFlowProps, any> {
    render(): JSX.Element;
}

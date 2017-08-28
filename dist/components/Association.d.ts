import * as React from 'react';
import BaseElementProps from './BaseElementProps';
import { DiagramFlowElementModel } from '../models/DiagramModel';
export interface AssociationProps extends BaseElementProps {
    association: DiagramFlowElementModel;
}
export default class Association extends React.Component<AssociationProps, any> {
    render(): JSX.Element;
}

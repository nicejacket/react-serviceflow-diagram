import * as React from 'react';
import BaseElementProps from './BaseElementProps';
import Tooltip from './tooltip/Tooltip';
import { DiagramFlowElementModel } from '../models/DiagramModel';
import { RaphaelBaseAssociation } from './raphael/RaphaelBaseAssociation';

export interface AssociationProps extends BaseElementProps {
  association: DiagramFlowElementModel;
}

export default class Association extends React.Component<AssociationProps, any> {
  render() {
    return (<Tooltip data={this.props.association}>
      <RaphaelBaseAssociation association={this.props.association}/>
    </Tooltip>);
  }
}

import * as React from 'react';
import { DiagramFlowElementModel } from '../models/DiagramModel';
import BaseElementProps from './BaseElementProps';
import { RaphaelBaseAssociation } from './raphael/RaphaelBaseAssociation';
import Tooltip from './tooltip/Tooltip';

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

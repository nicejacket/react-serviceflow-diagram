import * as React from 'react';
import { DiagramFlowElementModel } from '../models/DiagramModel';
import BaseElementProps from './BaseElementProps';
import { RaphaelBaseFlowArrow } from './raphael/RaphaelBaseFlowArrow';
import Tooltip from './tooltip/Tooltip';

export interface SequenceFlowProps extends BaseElementProps {
  flow: DiagramFlowElementModel;
}

export default class SequenceFlow extends React.Component<SequenceFlowProps, any> {
  render() {
    return (<Tooltip data={this.props.flow}>
      <RaphaelBaseFlowArrow flow={this.props.flow}/>
    </Tooltip>);
  }
}

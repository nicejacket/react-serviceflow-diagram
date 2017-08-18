import * as React from 'react';
import BaseElementProps from './BaseElementProps';
import Tooltip from './tooltip/Tooltip';
import FlowArrow from './raphael/FlowArrow';
import { DiagramFlowElementModel } from '../models/DiagramModel';

export interface SequenceFlowProps extends BaseElementProps {
  flow: DiagramFlowElementModel;
}

export default class SequenceFlow extends React.Component<SequenceFlowProps, any> {
  render() {
    return (<Tooltip data={this.props.flow}>
      <FlowArrow points={this.props.flow.waypoints}/>
    </Tooltip>)
  }
}

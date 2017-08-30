import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Event from './Event';
import { getBpmnColor, getFillColour, getFillOpacity, MAIN_STROKE_COLOR } from '../../services/DiagramColorService';

export interface EndEventProps extends BaseElementProps {
  radius?: number;
  iconFill?: string;
}

export default class EndEvent extends React.Component<EndEventProps, any> {
  static defaultProps = {
    radius: 14,
    strokeWidth: 4,
    iconFill: 'black'
  };

  render() {
    const { stroke, fill, fillOpacity, data, ...others } = this.props;
    return (<Event
      stroke={getBpmnColor(data, MAIN_STROKE_COLOR)}
      fill={getFillColour(data.id)}
      fillOpacity={getFillOpacity()}
      data={data}
      {...others}
    />);
  }
}

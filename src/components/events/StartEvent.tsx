import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Event from './Event';
import { getBpmnColor, getFillColour, getFillOpacity, MAIN_STROKE_COLOR } from '../../services/DiagramColorService';

export interface StartEventProps extends BaseElementProps {
  radius?: number;
  iconFill?: string;
}

export default class StartEvent extends React.Component<StartEventProps, any> {
  static defaultProps = {
    radius: 15,
    strokeWidth: 1,
    iconFill: 'none'
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

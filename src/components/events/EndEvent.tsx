import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { getStrokeAndFill } from '../Utils';
import Event from './Event';

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
    const strokAndFill = getStrokeAndFill(data);
    return (<Event
      stroke={strokAndFill.stroke}
      fill={strokAndFill.fill}
      fillOpacity={strokAndFill.fillOpacity}
      data={data}
      {...others}
    />);
  }
}

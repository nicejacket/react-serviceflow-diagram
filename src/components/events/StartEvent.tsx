import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { getStrokeAndFill } from '../Utils';
import Event from './Event';

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
    const strokeAndFill = getStrokeAndFill(data);

    return (<Event
      stroke={strokeAndFill.stroke}
      fill={strokeAndFill.fill}
      fillOpacity={strokeAndFill.fillOpacity}
      data={data}
      {...others}
    />);
  }
}

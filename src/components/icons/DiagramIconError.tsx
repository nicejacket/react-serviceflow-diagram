import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconError from '../raphael/icons/RaphaelIconError';

export interface DiagramIconErrorProps extends BaseElementProps {}

export default class DiagramIconError extends React.Component<DiagramIconErrorProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'black',
    strokeWidth: 1
  };

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconError
      x={x - 1}
      y={y - 1}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconReceive from '../raphael/icons/RaphaelIconReceive';

export interface DiagramIconReceiveTaskProps extends BaseElementProps { }

export default class DiagramIconReceiveTask extends React.Component<DiagramIconReceiveTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'none',
    fill: '#16964d',
  }

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconReceive
      x={x + 4}
      y={y + 2}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

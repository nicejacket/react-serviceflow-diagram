import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconService from '../raphael/icons/RaphaelIconService';

export interface DiagramIconServiceTaskProps extends BaseElementProps { }

export default class DiagramIconServiceTask extends React.Component<DiagramIconServiceTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'none',
    fill: '#72a7d0'
  };

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconService
      x={x + 4}
      y={y + 4}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconRestCall from '../raphael/icons/RaphaelIconRestCall';

export interface DiagramIconRestCallTaskProps extends BaseElementProps { }

export default class DiagramIconRestCallTask extends React.Component<DiagramIconRestCallTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'none',
    fill: '#bd4848'
  };

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconRestCall
      x={x + 2}
      y={y + 2}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconUser from '../raphael/icons/RaphaelIconUser';

export interface DiagramIconUserTaskProps extends BaseElementProps { }

export default class DiagramIconUserTask extends React.Component<DiagramIconUserTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'none',
    fill: '#d1b575'
  };

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconUser
      x={x + 4}
      y={y + 4}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

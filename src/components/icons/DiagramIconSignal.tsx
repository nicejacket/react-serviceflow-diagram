import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconSignal from '../raphael/icons/RaphaelIconSignal';

export interface DiagramIconSignalProps extends BaseElementProps {}

export default class DiagramIconSignal extends React.Component<DiagramIconSignalProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    stroke: 'black',
    strokeWidth: 1
  };

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconSignal
      x={x - 1}
      y={y - 1}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

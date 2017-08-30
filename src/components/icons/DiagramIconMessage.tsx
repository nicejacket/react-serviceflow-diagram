import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconMessage from '../raphael/icons/RaphaelIconMessage';

export interface DiagramIconMessageProps extends BaseElementProps {}

export default class DiagramIconMessage extends React.Component<DiagramIconMessageProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    fill: '#585858',
    strokeWidth: 1,
    stroke: 'none'
  };

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconMessage
      x={x + 6}
      y={y + 6}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

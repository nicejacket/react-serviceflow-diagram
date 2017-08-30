import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconCamel from '../raphael/icons/RaphaelIconCamel';

export interface DiagramIconCamelTaskProps extends BaseElementProps { }

export default class DiagramIconCamelTask extends React.Component<DiagramIconCamelTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'none',
    fill: '#bd4848'
  };

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconCamel
      x={x + 8}
      y={y + 6}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

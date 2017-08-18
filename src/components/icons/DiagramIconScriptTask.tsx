import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconScript from '../raphael/icons/RaphaelIconScript';

export interface DiagramIconScriptTaskProps extends BaseElementProps { }

export default class DiagramIconScriptTask extends React.Component<DiagramIconScriptTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    fill: '#72a7d0',
    stroke: 'none',
  }

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconScript
      x={x + 4}
      y={y + 4}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

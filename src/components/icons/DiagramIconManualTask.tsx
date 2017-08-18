import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconManual from '../raphael/icons/RaphaelIconManual';

export interface DiagramIconManualTaskProps extends BaseElementProps { }

export default class DiagramIconManualTask extends React.Component<DiagramIconManualTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'none',
    fill: '#d1b575',
  }

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconManual
      x={x + 4}
      y={y + 4}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

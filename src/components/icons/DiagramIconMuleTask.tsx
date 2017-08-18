import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconMule from '../raphael/icons/RaphaelIconMule';

export interface DiagramIconMuleTaskProps extends BaseElementProps { }

export default class DiagramIconMuleTask extends React.Component<DiagramIconMuleTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'none',
    fill: '#bd4848',
  }

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconMule
      x={x + 2}
      y={y + 2}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconBusinessRule from '../raphael/icons/RaphaelIconBusinessRule';

export interface DiagramIconBusinessRuleTaskProps extends BaseElementProps { }

export default class DiagramIconBusinessRuleTask extends React.Component<DiagramIconBusinessRuleTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'none',
    fill: '#72a7d0',
  }

  render() {
    const { x, y, stroke, strokeWidth, fill, fillOpacity } = this.props;
    return (<RaphaelIconBusinessRule
      x={x + 4}
      y={y + 4}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

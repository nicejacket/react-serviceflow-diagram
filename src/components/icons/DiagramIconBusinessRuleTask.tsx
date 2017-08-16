import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconBusinessRule from '../raphael/icons/RaphaelIconBusinessRule';

export interface DiagramIconBusinessRuleTaskProps extends BaseElementProps { }

export default class DiagramIconBusinessRuleTask extends React.Component<DiagramIconBusinessRuleTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<RaphaelIconBusinessRule
      x={x + 4}
      y={y + 4}
      stroke="none"
      fill="#72a7d0"
      {...others}
    />);
  }
}

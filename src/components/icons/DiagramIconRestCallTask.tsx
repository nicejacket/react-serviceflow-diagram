import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconRestCall from '../raphael/icons/RaphaelIconRestCall';

export interface DiagramIconRestCallTaskProps extends BaseElementProps { }

export default class DiagramIconRestCallTask extends React.Component<DiagramIconRestCallTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<RaphaelIconRestCall
      x={x + 2}
      y={y + 2}
      fill="#bd4848"
      stroke="none"
      {...others}
    />);
  }
}

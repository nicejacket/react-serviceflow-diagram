import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconReceive from '../raphael/icons/RaphaelIconReceive';

export interface DiagramIconReceiveTaskProps extends BaseElementProps { }

export default class DiagramIconReceiveTask extends React.Component<DiagramIconReceiveTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<RaphaelIconReceive
      x={x + 4}
      y={y + 2}
      fill="#16964d"
      stroke="none"
      {...others}
    />);
  }
}

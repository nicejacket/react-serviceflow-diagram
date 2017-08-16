import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconUser from '../raphael/icons/RaphaelIconUser';

export interface DiagramIconUserTaskProps extends BaseElementProps {
  opacity?: number;
}

export default class DiagramIconUserTask extends React.Component<DiagramIconUserTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<RaphaelIconUser
      x={x + 4}
      y={y + 4}
      fill="#d1b575"
      stroke="none"
      {...others}
    />);
  }
}

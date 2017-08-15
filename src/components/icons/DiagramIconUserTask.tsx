import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconUserTask from './RaphaelIconUserTask';

export interface DiagramIconUserTaskProps extends BaseElementProps {
  opacity?: number;
}

export default class DiagramIconUserTask extends React.Component<DiagramIconUserTaskProps, any> {
  static defaultProps = {
    stroke: 'none',
    fill: '#d1b575',
  }

  render() {
    const { x, y, ...others } = this.props;
    return <RaphaelIconUserTask x={x + 4} y={y + 4} {...others} />;
  }
}

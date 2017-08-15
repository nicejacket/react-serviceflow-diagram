import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconUser from './RaphaelIconUser';

export interface DiagramIconUserProps extends BaseElementProps {
  opacity?: number;
}

export default class DiagramIconUser extends React.Component<DiagramIconUserProps, any> {
  static defaultProps = {
    stroke: 'none',
    fill: '#d1b575',
  }

  render() {
    const { x, y, ...others } = this.props;
    return <RaphaelIconUser x={x + 4} y={y + 4} {...others} />;
  }
}

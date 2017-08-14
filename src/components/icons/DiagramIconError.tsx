import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconError from './RaphaelIconError';

export interface DiagramIconErrorProps extends BaseElementProps {}

export default class DiagramIconError extends React.Component<DiagramIconErrorProps, any> {
  static defaultProps = {
    width: 40,
    height: 40,
    stroke: 'black',
    strokeWidth: 1,
  }

  render() {
    const { x, y, ...others } = this.props;
    return <RaphaelIconError x={x - 1} y={y - 1} {...others} />
  }
}
import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconSignal from './RaphaelIconSignal';

export interface DiagramIconSignalProps extends BaseElementProps {}

export default class DiagramIconSignal extends React.Component<DiagramIconSignalProps, any> {
  static defaultProps = {
    width: 40,
    height: 40,
    stroke: 'black',
    strokeWidth: 1,
  }

  render() {
    const { x, y, ...others } = this.props;
    return <RaphaelIconSignal x={x - 1} y={y - 1} {...others} />;
  }
}

import * as React from 'react';
import IconCircle from '../icons/RaphaelIconCircle';

export interface EventProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  fillOpacity?: string;
  strokeWidth?: number;
  radius?: number;
}

export default class Event extends React.Component<EventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 32,
    height: 32,
  }

  render() {
    const { x, y, width, height } = this.props;
    return <IconCircle {...this.props} />;
  }
}

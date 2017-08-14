import * as React from 'react';
import RaphaelIconCircle from '../icons/RaphaelIconCircle';
import BaseElementProps from '../BaseElementProps';

export interface EventProps extends BaseElementProps {
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
    return <RaphaelIconCircle {...this.props} />;
  }
}

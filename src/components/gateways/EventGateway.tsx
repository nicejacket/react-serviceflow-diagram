import * as React from 'react';
import Set from '../Raphael/Set';
import Gateway from './Gateway';
import IconPentagon from '../icons/RaphaelIconPentagon';

export interface EventGatewayProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: string;
}

export default class EventGateway extends React.Component<EventGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
  }

  render() {
    return (<Set>
      <Gateway {...this.props} />
      <IconPentagon {...this.props} />
    </Set>);
  }
}

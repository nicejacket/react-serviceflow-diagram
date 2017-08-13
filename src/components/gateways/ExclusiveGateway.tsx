import * as React from 'react';
import Set from '../Raphael/Set';
import Gateway from './Gateway';
import IconCross from '../icons/RaphaelIconCross';

export interface ExclusiveGatewayProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  fillOpacity?: string;
  strokeWidth?: number;
}

export default class ExclusiveGateway extends React.Component<ExclusiveGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    strokeWidth: 3,
  }

  render() {
    return (<Set>
        <Gateway {...this.props} />
        <IconCross {...this.props} />
      </Set>);
  }
}

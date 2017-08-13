import * as React from 'react';
import Gateway from './Gateway';
import Set from '../Raphael/Set';
import IconCircle from '../icons/IconCircle';

export interface InclusiveGatewayProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: string;
  radius?: number;
}

export default class InclusiveGateway extends React.Component<InclusiveGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    strokeWidth: 2.5,
    radius: 9.75,
  }

  render() {
    const { radius, ...others } = this.props;
    return (<Set>
      <IconCircle radius={radius} {...others} />
      <Gateway {...others} />
    </Set>);
  }
}

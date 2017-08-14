import * as React from 'react';
import Gateway from './Gateway';
import Set from '../Raphael/Set';
import RaphaelIconCircle from '../icons/RaphaelIconCircle';
import BaseElementProps from '../BaseElementProps';

export interface InclusiveGatewayProps extends BaseElementProps {
  radius?: number;
}

export default class InclusiveGateway extends React.Component<InclusiveGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    strokeWidth: 2.5,
    radius: 9.75,
  }

  render() {
    const { x, y, width, height } = this.props;
    return (<Set>
      <RaphaelIconCircle {...this.props} />
      <Gateway x={x} y={y} width={width} height={height} />
    </Set>);
  }
}

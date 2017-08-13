import * as React from 'react';
import Set from '../Raphael/Set';
import Gateway from './Gateway';
import IconPlus from '../icons/IconPlus';

export interface ParallelGatewayProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  fillOpacity?: string;
  strokeWidth?: number;
}

export default class ParallelGatway extends React.Component<ParallelGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    strokeWidth: 3,
  }

  render() {

    return <Set>
        <Gateway {...this.props} />
        <IconPlus {...this.props} />
      </Set>;
  }
}

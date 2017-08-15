import * as React from 'react';
import Set from '../Raphael/Set';
import Gateway from './Gateway';
import IconPlus from '../icons/RaphaelIconPlus';
import BaseElementProps from '../BaseElementProps';

export interface ParallelGatewayProps extends BaseElementProps {
}

export default class ParallelGatway extends React.Component<ParallelGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    strokeWidth: 3,
  }

  render() {
    const { x, y, width, height } = this.props;
    return (<Gateway x={x} y={y} width={width} height={height}>
      <IconPlus {...this.props} />
    </Gateway>);
  }
}

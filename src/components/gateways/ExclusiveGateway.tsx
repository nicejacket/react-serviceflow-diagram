import * as React from 'react';
import Set from '../Raphael/Set';
import Gateway from './Gateway';
import IconCross from '../icons/RaphaelIconCross';
import BaseElementProps from '../BaseElementProps';

export interface ExclusiveGatewayProps extends BaseElementProps {}

export default class ExclusiveGateway extends React.Component<ExclusiveGatewayProps, any> {
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
      <IconCross {...this.props} />
    </Gateway>);
  }
}

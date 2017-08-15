import * as React from 'react';
import Path from '../Raphael/Path';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';

export interface GatewayProps extends BaseElementProps {}

export default class Gateway extends React.Component<GatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    stroke: '#585858',
    strokeWidth: 2,
    fill: '#FFF',
    fillOpacity: '',
  }

  render() {
    const { x, y, width, height } = this.props;
    const path = 'M' + x + ' ' + (y + (height / 2)) +
            'L' + (x + (width / 2)) + ' ' + (y + height) +
            'L' + (x + width) + ' ' + (y + (height / 2)) +
            'L' + (x + (width / 2)) + ' ' + y + 'z';
    return <Tooltip><Path d={path} {...this.props} />{this.props.children}</Tooltip>;
  }
}

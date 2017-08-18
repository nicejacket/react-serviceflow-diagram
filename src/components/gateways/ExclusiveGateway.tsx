import * as React from 'react';
import Set from '../raphael/Set';
import Gateway from './Gateway';
import IconCross from '../raphael/icons/RaphaelIconCross';
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
    const { strokeWidth, ...others } = this.props;
    return (<Gateway {...others}>
      <IconCross {...this.props} />
    </Gateway>);
  }
}

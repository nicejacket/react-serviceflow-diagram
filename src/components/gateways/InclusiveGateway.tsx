import * as React from 'react';
import Gateway from './Gateway';
import Set from '../raphael/Set';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
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
    const { radius, strokeWidth, ...others } = this.props;
    return (<Gateway {...others}>
      <RaphaelIconCircle {...this.props} />
    </Gateway>);
  }
}

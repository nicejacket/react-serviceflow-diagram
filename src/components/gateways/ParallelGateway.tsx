import * as React from 'react';
import Set from '../raphael/Set';
import Gateway from './Gateway';
import IconPlus from '../raphael/icons/RaphaelIconPlus';
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
    const { strokeWidth, ...others } = this.props;
    return (<Gateway {...others}>
      <IconPlus {...this.props} />
    </Gateway>);
  }
}

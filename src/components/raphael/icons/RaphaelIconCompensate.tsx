import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import Set from '../Set';
import ArrowLeft from '../ArrowLeft';

export interface RaphaelIconCompensateProps extends BaseElementProps {}

export default class RaphaelIconCompensate extends React.Component<RaphaelIconCompensateProps, any> {
  render() {
    const { x, y, ...others } = this.props;
    return (<Set>
      <ArrowLeft transform={`T${x - 18},${y - 11}`} {...others} />
      <ArrowLeft transform={`T${x - 26},${y - 11}`} {...others} />
    </Set>);
  }
}

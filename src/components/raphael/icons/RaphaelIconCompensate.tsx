import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import { RaphaelBaseSet } from '../RaphaelBaseSet';
import { RaphaelBaseArrowLeft } from '../RaphaelBaseArrowLeft';

export interface RaphaelIconCompensateProps extends BaseElementProps {}

export default class RaphaelIconCompensate extends React.Component<RaphaelIconCompensateProps, any> {
  render() {
    const { x, y, ...others } = this.props;
    return (<RaphaelBaseSet>
      <RaphaelBaseArrowLeft transform={`T${x - 18},${y - 11}`} {...others} />
      <RaphaelBaseArrowLeft transform={`T${x - 26},${y - 11}`} {...others} />
    </RaphaelBaseSet>);
  }
}

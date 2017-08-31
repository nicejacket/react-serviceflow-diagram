import * as React from 'react';
import { RaphaelBaseSet } from '../raphael/RaphaelBaseSet';
import Lanes from './Lanes';
import Pool from './Pool';

export interface PoolsProps {
  pools?: any[];
}

const defaultPools: any[] = [];

export default class Pools extends React.Component<PoolsProps, any> {
  static defaultProps = { pools: defaultPools };

  render() {
    const { pools } = this.props;

    if (!pools || !pools.length) { return null; }

    return (<RaphaelBaseSet>
      {
        pools.map((pool, i) => {
          const { lanes, ...others } = pool;
          return (<RaphaelBaseSet key={i}>
            <Pool {...others} />
            <Lanes lanes={pool.lanes} />
          </RaphaelBaseSet>);
        })
      }
    </RaphaelBaseSet>);
  }
}

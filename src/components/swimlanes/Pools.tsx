import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Set from '../raphael/Set';
import Pool from './Pool';
import Lanes from './Lanes';

export interface PoolsProps {
  pools?: Array<any>;
}

const defaultPools: Array<any> = [];

export default class Pools extends React.Component<PoolsProps, any> {
  static defaultProps = {
    pools: defaultPools,
  }

  render() {
    const { pools } = this.props;

    if (!pools || !pools.length) return null;

    return (<Set>
      {pools.map(pool => {
          const { lanes, ...others } = pool;
          return (<Set>
            <Pool {...others} />
            <Lanes lanes={pool.lanes} />
          </Set>);
        })
      }
    </Set>);
  }
}

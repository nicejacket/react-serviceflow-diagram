import * as React from 'react';
import { RaphaelBaseSet } from '../raphael/RaphaelBaseSet';
import Lane from './Lane';

export interface LanesProps {
  lanes?: any[];
}

const defaultLanes: any[] = [];

export default class Lanes extends React.Component<LanesProps, any> {
  static defaultProps = { lanes: defaultLanes };

  render() {
    const { lanes } = this.props;
    if (!lanes || !lanes.length) { return null; }

    return (<RaphaelBaseSet>
      {this.props.lanes.map((lane, i) => <Lane key={i} text={lane.name} {...lane} />)}
    </RaphaelBaseSet>);
  }
}

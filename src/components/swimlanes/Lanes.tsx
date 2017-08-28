import * as React from 'react';
import Lane from './Lane';
import { RaphaelBaseSet } from '../raphael/RaphaelBaseSet';

export interface LanesProps {
  lanes?: Array<any>;
}

const defaultLanes: Array<any> = [];

export default class Lanes extends React.Component<LanesProps, any> {
  static defaultProps = {
    lanes: defaultLanes,
  }

  render() {
    const { lanes } = this.props;
    if (!lanes || !lanes.length) return null;

    return (<RaphaelBaseSet>
      { this.props.lanes.map((lane, i) => <Lane key={i} text={lane.name} {...lane} />) }
    </RaphaelBaseSet>);
  }
}

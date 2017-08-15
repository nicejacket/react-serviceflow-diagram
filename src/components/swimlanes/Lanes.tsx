import * as React from 'react';
import Lane from './Lane';
import Set from '../Raphael/Set';

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

    return (<Set>
      { this.props.lanes.map(lane => <Lane {...lane} />) }
    </Set>);
  }
}

import * as React from 'react';
import Path from './Path';
import BaseElementProps from '../BaseElementProps';

const PATH = 'M 20.327514,22.344972 L 11.259248,22.344216 L 8.4577203,13.719549' +
      ' L 15.794545,8.389969 L 23.130481,13.720774 L 20.327514,22.344972 z';

export interface PentagonProps extends BaseElementProps {
  strokeLinejoin?: string;
}

export default class Pentagon extends React.Component<PentagonProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeLinejoin: 'bevel',
  }

  render() {
    const { x, y } = this.props;
    return <Path d={PATH} transform={`T${x + 4}, ${y + 4}`} />
  }
}
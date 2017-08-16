import * as React from 'react';
import Path from '../Path';
import BaseElementProps from '../../BaseElementProps';

export interface RaphaelIconPlusProps extends BaseElementProps {}

export default class RaphaelIconPlus extends React.Component<RaphaelIconPlusProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    strokeWidth: 3,
  }

  render() {
    const { x, y, width, height } = this.props;
    const px = x + ((width - 32) / 2);
    const py = y + ((height - 32) / 2);
    const PATH_DATA = 'M 6.75,16 L 25.75,16 M 16,6.75 L 16,25.75';
    const transform = `T${px},${py}`;

    return <Path d={PATH_DATA} {...this.props} transform={transform} />;
  }
}

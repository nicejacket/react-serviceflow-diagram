import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import Path from '../Path';

export interface RaphaelIconRhombusProps extends BaseElementProps {}

export default class RaphaelIconRhombus extends React.Component<RaphaelIconRhombusProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 18,
    height: 18,
    stroke: '#585858',
  }

  render() {
    const { x, y,  width, height, ...others } = this.props;
    const path = 'M' + x + ' ' + (y + (height / 2)) +
          'L' + (x + (width / 2)) + ' ' + (y + height) +
          'L' + (x + width) + ' ' + (y + (height / 2)) +
          'L' + (x + (width / 2)) + ' ' + y + 'z';
    return (<Path d={path} {...others} />);
  }  
}

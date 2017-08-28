import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import { RaphaelBasePath } from '../RaphaelBasePath';

export interface RaphaelIconCrossProps extends BaseElementProps {}

export default class RaphaelIconCross extends React.Component<RaphaelIconCrossProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 64,
    height: 64,
    strokeWidth: 3,
  }

  render() {
    const { x, y, width, height, ...others } = this.props;
    const quarterWidth = width / 4;
    const quarterHeight = height / 4;

    const PATH = 'M' + (x + quarterWidth + 3) + ' ' + (y + quarterHeight + 3) +
      'L' + (x + 3 * quarterWidth - 3) + ' ' + (y + 3 * quarterHeight - 3) +
      'M' + (x + quarterWidth + 3) + ' ' + (y + 3 * quarterHeight - 3) +
      'L' + (x + 3 * quarterWidth - 3) + ' ' + (y + quarterHeight + 3);
    return <RaphaelBasePath d={PATH} {...others} />;
  }
}

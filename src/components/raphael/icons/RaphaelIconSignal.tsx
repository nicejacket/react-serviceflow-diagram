import * as React from 'react';
import BaseElementProps from '../../BaseElementProps';
import { RaphaelBasePath } from '../RaphaelBasePath';

const PATH = 'M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z';

export interface RaphaelIconSignalProps extends BaseElementProps {}

export default class RaphaelIconSignal extends React.Component<RaphaelIconSignalProps, any> {
  render() {
    const { x, y, width, height, ...others } = this.props;
    return <RaphaelBasePath d={PATH} transform={`T${x},${y}`} {...others} />;
  }
}

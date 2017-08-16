import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Set from '../raphael/Set';
import Rect from '../raphael/Rect';
import Text from '../raphael/Text';

export interface PoolProps extends BaseElementProps {
  text?: string;
  textTransform?: string;
  radius?: number;
}

export default class Pool extends React.Component<PoolProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    stroke: '#000',
    fill: 'none',
    fillOpacity: '',
    strokeWidth: 1,
    radius: 0,
  }

  render() {
    const { x, y, width, height, text, textTransform, ...others } = this.props;

    return (<Set>
      <Rect x={x} y={y} width={width} height={height} {...others} />
      <Text x={x + 14} y={y + height / 2} text={text} transform={textTransform} />
    </Set>);
  }
}

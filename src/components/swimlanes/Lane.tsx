import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Set from '../Raphael/Set';
import Rect from '../Raphael/Rect';
import Text from '../Raphael/Text';

export interface LaneProps extends BaseElementProps {
  text?: string;
  textTransform?: string;
  radius?: number;
}

export default class Lane extends React.Component<LaneProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 80,
    height: 40,
    stroke: '#000',
    fill: 'none',
    strokeWidth: 1,
  }

  render() {
    const { text, textTransform, radius, x, y, width, height, ...others } = this.props;
    return (<Set>
      <Rect x={x} y={y} width={width} height={height} r={radius} {...others} />
      <Text text={text} transform={textTransform} x={x + 10} y={y + height / 2} />
    </Set>);
  }
}

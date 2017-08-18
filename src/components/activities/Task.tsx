import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import Rect from '../raphael/Rect';
import MultilineText from '../raphael/MultilineText';

export interface TaskProps extends BaseElementProps {
  radius?: number;
  text?: string;
}

export default class Task extends React.Component<TaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 100,
    height: 40,
    radius: 4,
    fill: '#FFF',
  }

  render() {
    const { x, y, width, height, text, radius, children, ...others } = this.props;
    const { data } = others;
    return (<Tooltip data={data}>
      <Rect x={x} y={y} width={width} height={height} r={radius} {...others} />
      <MultilineText text={text} x={x + (width / 2)} y={y + (height / 2)} />
      {children}
    </Tooltip>);
  }
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import Rect from '../raphael/Rect';
import MultilineText from '../raphael/MultilineText';
import { getBpmnColor, getBpmnStrokeWidth, getFillColour, getFillOpacity, ACTIVITY_STROKE_COLOR } from '../../services/DiagramColorService';

export interface TaskProps extends BaseElementProps {
  radius?: number;
  text?: string;
}

export default class Task extends React.Component<TaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    radius: 4,
  }

  render() {
    const { x, y, width, height, radius, text, data, children } = this.props;
    const stroke = getBpmnColor(data, ACTIVITY_STROKE_COLOR);
    const strokeWidth = getBpmnStrokeWidth(data);
    const fill = getFillColour(data.id);
    const fillOpacity = getFillOpacity();

    return (<Tooltip data={data}>
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        r={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <MultilineText
        x={x + width / 2}
        y={y + height / 2}
        text={text}
        width={width}
      />
      {children}
    </Tooltip>);
  }
}

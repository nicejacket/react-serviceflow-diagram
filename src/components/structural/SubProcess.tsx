import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import Rect from '../raphael/Rect';
import { getBpmnColor, MAIN_STROKE_COLOR } from '../../services/DiagramColorService';

export interface SubProcessProps extends BaseElementProps {
  radius?: number;
}

export default class SubProcess extends React.Component<SubProcessProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    radius: 4,
    strokeWidth: 1,
    fill: 'none',
  }

  render() {
    const { x, y, width, height, radius, strokeWidth, fill, fillOpacity, data } = this.props;
    const stroke = getBpmnColor(data, MAIN_STROKE_COLOR);

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
    </Tooltip>);
  }
}

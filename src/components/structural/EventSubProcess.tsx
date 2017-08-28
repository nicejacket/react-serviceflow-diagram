import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import { RaphaelBaseRect } from '../raphael/RaphaelBaseRect';
import { getBpmnColor, MAIN_STROKE_COLOR } from '../../services/DiagramColorService';

export interface EventSubProcessProps extends BaseElementProps {
  radius?: number;
}

export default class EventSubProcess extends React.Component<EventSubProcessProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    radius: 4,
    strokeWidth: 1,
    fill: 'none',
  }

  render() {
    const { x, y, width, height, radius, strokeWidth, fill, fillOpacity, data } = this.props;
    const stroke =getBpmnColor(data, MAIN_STROKE_COLOR);

    return (<Tooltip data={data}>
      <RaphaelBaseRect
        id={data.id}
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

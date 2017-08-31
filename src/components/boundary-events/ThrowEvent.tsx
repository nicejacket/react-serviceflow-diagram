import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import DiagramContainerIconEvent from '../icons/DiagramContainerIconEvent';
import { getBpmnColor, getFillColour, getFillOpacity, MAIN_STROKE_COLOR } from '../../services/DiagramColorService';

export interface ThrowEventProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
  signalFill?: string;
}

export default class ThrowEvent extends React.Component<ThrowEventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeWidth: 1,
    signalFill: 'black',
    circleRadiusInner: 12,
    circleRadiusOuter: 15
  };

  render() {
    const { x, y, width, height, strokeWidth, signalFill, circleRadiusInner, circleRadiusOuter, data } = this.props;
    const stroke = getBpmnColor(data, MAIN_STROKE_COLOR);
    const fill = getFillColour(data.id);
    const fillOpacity = getFillOpacity();
    const type = data && data.eventDefinition && data.eventDefinition.type;

    return (<Tooltip data={data}>
      <RaphaelIconCircle
        id={data.id}
        x={x + width / 2}
        y={y + height / 2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
        radius={circleRadiusOuter}
      />
      <RaphaelIconCircle
        x={x + width / 2}
        y={y + height / 2}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
        radius={circleRadiusInner}
      />
      <DiagramContainerIconEvent
        x={type === 'error' ? x + 2 : x}
        y={type === 'error' ? y + 2 : y}
        width={width}
        height={height}
        type={type}
        data={data}
        fill={signalFill}
      />
    </Tooltip>);
  }
}

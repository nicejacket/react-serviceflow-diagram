import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import DiagramContainerIconEvent from '../icons/DiagramContainerIconEvent';
import { getBpmnColor, getFillColour, getFillOpacity, MAIN_STROKE_COLOR } from '../../services/DiagramColorService';

export interface IntermediateCatchingEventProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
}

export default class IntermediateCatchingEvent extends React.Component<IntermediateCatchingEventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    strokeWidth: 1,
    circleRadiusInner: 12,
    circleRadiusOuter: 15,
  }

  render() {
    const { x, y, width, height, strokeWidth, circleRadiusInner, circleRadiusOuter, data } = this.props;
    const stroke = getBpmnColor(data, MAIN_STROKE_COLOR);
    const fill = getFillColour(data.id);
    const fillOpacity = getFillOpacity();

    return (<Tooltip data={data}>
      <RaphaelIconCircle
        x={x + width / 2}
        y={y + height / 2}
        radius={circleRadiusInner}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <RaphaelIconCircle
        x={x + width / 2}
        y={y + height / 2}
        radius={circleRadiusOuter}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <DiagramContainerIconEvent
        x={x}
        y={y}
        width={width}
        height={height}
        type={data && data.eventDefinition && data.eventDefinition.type}
        data={data}
      />
    </Tooltip>);
  }
}

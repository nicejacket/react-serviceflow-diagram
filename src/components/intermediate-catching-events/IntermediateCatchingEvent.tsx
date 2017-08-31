import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramContainerIconEvent from '../icons/DiagramContainerIconEvent';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import Tooltip from '../tooltip/Tooltip';
import { getStrokeAndFill } from '../Utils';

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
    circleRadiusOuter: 15
  };

  render() {
    const { x, y, width, height, strokeWidth, circleRadiusInner, circleRadiusOuter, data } = this.props;
    const { stroke, fill, fillOpacity } = getStrokeAndFill(data);

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
        id={data.id}
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

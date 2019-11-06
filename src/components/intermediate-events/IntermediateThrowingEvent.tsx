import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramContainerIconEvent from '../icons/DiagramContainerIconEvent';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import Tooltip from '../tooltip/Tooltip';
import { getStrokeAndFill } from '../Utils';

export interface IntermediateThrowingEventProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
}

export default class IntermediateThrowingEvent extends React.Component<IntermediateThrowingEventProps, any> {
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
        id={data.id}
        x={x + width / 2}
        y={y + height / 2}
        radius={circleRadiusOuter}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <RaphaelIconCircle
        x={x + width / 2}
        y={y + height / 2}
        radius={circleRadiusInner}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <DiagramContainerIconEvent
        x={x - circleRadiusOuter + width / 2}
        y={y - circleRadiusOuter + height / 2}
        width={width}
        height={height}
        type={data && data.eventDefinition && data.eventDefinition.type}
        data={data}
        fill={'black'}
      />
    </Tooltip>);
  }
}

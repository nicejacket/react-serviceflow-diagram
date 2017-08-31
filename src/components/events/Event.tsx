import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramContainerIconEvent from '../icons/DiagramContainerIconEvent';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import Tooltip from '../tooltip/Tooltip';

export interface EventProps extends BaseElementProps {
  radius?: number;
  iconFill?: string;
  eventDefinition?: object;
}

export default class Event extends React.Component<EventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0
  };

  render() {
    const { x, y, width, height, radius, stroke, strokeWidth, fill, fillOpacity, iconFill, data } = this.props;
    const type = data && data.eventDefinition && data.eventDefinition.type;
    return (<Tooltip data={data}>
      <RaphaelIconCircle
        id={data.id}
        x={x + width / 2}
        y={y + height / 2}
        radius={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
      <DiagramContainerIconEvent
        type={type}
        x={x}
        y={y}
        width={width}
        height={height}
        fill={iconFill}
        stroke={stroke}
        data={data}
      />
    </Tooltip>);
  }
}

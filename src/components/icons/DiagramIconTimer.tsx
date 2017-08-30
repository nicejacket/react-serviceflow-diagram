import * as React from 'react';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import RaphaelIconTimer from '../raphael/icons/RaphaelIconTImer';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';

export interface DiagramIconTimerCircleProps {
  radius?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: number;
}

export interface DiagramIconTimerTimerProps {
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: number;
}

export interface DiagramIconTimerProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  circle?: DiagramIconTimerCircleProps;
  timer?: DiagramIconTimerTimerProps;
  data?: any;
}

export default class DiagramIconTimer extends React.Component<DiagramIconTimerProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    circle: {
      stroke: 'black',
      fill: 'none'
    },
    timer: {
      stroke: 'none',
      fill: '#585858'
    }
  };

  render() {
    const { x, y, width, height, circle, timer, data } = this.props;
    return(<Tooltip data={data}>
        <RaphaelIconCircle
          x={x + width / 2}
          y={y + height / 2}
          radius={circle.radius}
          stroke={circle.stroke}
          strokeWidth={circle.strokeWidth}
          fill={circle.fill}
          fillOpacity={circle.fillOpacity}
        />
        <RaphaelIconTimer
          x={x + 5}
          y={y + 5}
          stroke={timer.stroke}
          strokeWidth={timer.strokeWidth}
          fill={timer.fill}
          fillOpacity={timer.fillOpacity}
        />
      </Tooltip>);
  }
}

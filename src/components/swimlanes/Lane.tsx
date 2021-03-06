import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { RaphaelBaseRect } from '../raphael/RaphaelBaseRect';
import { RaphaelBaseSet } from '../raphael/RaphaelBaseSet';
import { RaphaelBaseText } from '../raphael/RaphaelBaseText';

export interface LaneProps extends BaseElementProps {
  text?: string;
  textTransform?: string;
  radius?: number;
}

export default class Lane extends React.Component<LaneProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: '#000',
    fill: 'none',
    strokeWidth: 1,
    radius: 0
  };

  render() {
    const { x, y, width, height, radius, stroke, strokeWidth, fill, fillOpacity, text, textTransform } = this.props;
    return (<RaphaelBaseSet>
      <RaphaelBaseRect
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
      <RaphaelBaseText
        x={x + 10}
        y={y + height / 2}
        text={text}
        transform={textTransform}
      />
    </RaphaelBaseSet>);
  }
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconSend from '../raphael/icons/RaphaelIconSend';
import Tooltip from '../tooltip/Tooltip';

export interface DiagramIconSendTaskProps extends BaseElementProps { }

export default class DiagramIconSendTask extends React.Component<DiagramIconSendTaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    stroke: 'none',
    fill: '#16964d',
  }

  render() {
    const { x, y, fill, stroke, strokeWidth, fillOpacity, data } = this.props;
    return (<Tooltip data={data}>
      <RaphaelIconSend
        x={x + 4}
        y={y + 4}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </Tooltip>);
  }
}

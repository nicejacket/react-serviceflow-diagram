import * as React from 'react';
import Set from '../raphael/Set';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import RaphaelIconTimer from '../raphael/icons/RaphaelIconTImer';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import RaphaelIconCompensate from '../raphael/icons/RaphaelIconCompensate';

export interface DiagramIconCompensateProps extends BaseElementProps {}

export default class DiagramIconCompensate extends React.Component<DiagramIconCompensateProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    stroke: '#585858',
  }

  render() {
    const { x, y, width, height, stroke, strokeWidth, fill, fillOpacity, data } = this.props;
    return(<Tooltip data={data}>
        <RaphaelIconCompensate
          x={x + width / 2}
          y={y + height / 2}
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </Tooltip>);
  }
}

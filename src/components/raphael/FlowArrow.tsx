import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Set from './Set';
import { Polyline } from './Polyline';
import Path from './Path';
import * as Raphael from 'raphael';

const ARROW_WIDTH = 4;
const SEQUENCEFLOW_STROKE = 2;

export interface FlowArrowProps extends BaseElementProps {
  flow:any;
}

export default class FlowArrow extends React.Component<FlowArrowProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 30,
    height: 30,
    stroke: '#585858',
    fill: '#585858',
  }

  line: Polyline = null;

  renderLine = () => {
    const { flow, stroke } = this.props;
    const polyline = new Polyline(flow.id, flow.waypoints, SEQUENCEFLOW_STROKE);
    const lastLineIndex = polyline.getLinesCount() - 1;
    this.line = polyline.getLine(lastLineIndex);

    return (<Path
      id={flow.id}
      d={polyline.path}
      stroke={stroke}
      strokeWidth={SEQUENCEFLOW_STROKE}
    />);
  }

  renderArrow = () => {
    const line = this.line as any;
    const doubleArrowWidth = 2 * ARROW_WIDTH;
    const width = ARROW_WIDTH / 2 + .5;
    const arrowHead: string = `M0 0L-${width}-${doubleArrowWidth}L${width}-${doubleArrowWidth}z`;
    const angle = Raphael.deg(line.angle - Math.PI / 2);
    const transform = `t${line.x2},${line.y2}r${angle} 0 0`;
    return (<Path
      id={this.props.flow.id}
      d={arrowHead}
      stroke={this.props.stroke}
      strokeWidth={SEQUENCEFLOW_STROKE}
      fill={this.props.fill}
      transform={transform}
    />);
  }

  render() {
    return (<Set>
      {this.renderLine()}
      {this.renderArrow()}
    </Set>);
  }
}

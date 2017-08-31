import * as Raphael from 'raphael';
import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { getStrokeAndFill } from '../Utils';
import { Polyline } from './Polyline';
import { RaphaelBasePath } from './RaphaelBasePath';
import { RaphaelBaseSet } from './RaphaelBaseSet';

const ARROW_WIDTH = 4;
const SEQUENCEFLOW_STROKE = 2;

export interface RaphaelBaseFlowArrowProps extends BaseElementProps {
  flow: any;
}

export class RaphaelBaseFlowArrow extends React.Component<RaphaelBaseFlowArrowProps, any> {
  static defaultProps = { x: 0, y: 0 };

  state = { stroke: null as any, strokeWidth: null as any };
  line: Polyline = null;

  renderLine = () => {
    const { flow } = this.props;
    if (!flow.waypoints || !flow.waypoints.length) { return null; }
    const { stroke } = getStrokeAndFill(flow);
    const polyline = new Polyline(flow.id, flow.waypoints, SEQUENCEFLOW_STROKE);
    const lastLineIndex = polyline.getLinesCount() - 1;
    this.line = polyline.getLine(lastLineIndex);

    return (<RaphaelBasePath
      id={flow.id}
      d={polyline.path}
      stroke={stroke}
      strokeWidth={SEQUENCEFLOW_STROKE}
    />);
  }

  renderArrow = () => {
    const { flow } = this.props;
    if (!flow.waypoints || !flow.waypoints.length) { return null; }
    const { stroke } = getStrokeAndFill(flow);
    const line = this.line as any;
    const doubleArrowWidth = 2 * ARROW_WIDTH;
    const width = ARROW_WIDTH / 2 + .5;
    const arrowHead: string = `M0 0L-${width}-${doubleArrowWidth}L${width}-${doubleArrowWidth}z`;
    const angle = Raphael.deg(line.angle - Math.PI / 2);
    const transform = `t${line.x2},${line.y2}r${angle} 0 0`;

    return (<RaphaelBasePath
      id={flow.id}
      d={arrowHead}
      stroke={stroke}
      strokeWidth={SEQUENCEFLOW_STROKE}
      fill={stroke}
      transform={transform}
    />);
  }

  render() {
    return (<RaphaelBaseSet>
      {this.renderLine()}
      {this.renderArrow()}
    </RaphaelBaseSet>);
  }
}

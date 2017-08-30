import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { RaphaelBaseSet } from './RaphaelBaseSet';
import { Polyline } from './Polyline';
import { RaphaelBasePath } from './RaphaelBasePath';
import * as Raphael from 'raphael';
import { getStrokeAndFill } from '../Utils';
import { ACTIVITY_STROKE_COLOR } from '../../services/DiagramColorService';

const ARROW_WIDTH = 4;
const SEQUENCEFLOW_STROKE = 2;

export interface RaphaelBaseFlowArrowProps extends BaseElementProps {
  flow: any;
}

export class RaphaelBaseFlowArrow extends React.Component<RaphaelBaseFlowArrowProps, any> {
  static defaultProps = { x: 0, y: 0 };

  state = { stroke: null as any, strokeWidth: null as any };
  line: Polyline = null;
  pathLine: RaphaelBasePath;
  pathArrow: RaphaelBasePath;

  onMouseOverHandler = () => {
    const style = { 'stroke-width': SEQUENCEFLOW_STROKE + 2, };
    this.pathLine.getElement().attr(style);
    this.pathArrow.getElement().attr(style);
  }

  onMouseOutHandler = () => {
    const style = { 'stroke-width': SEQUENCEFLOW_STROKE, };
    this.pathLine.getElement().attr(style);
    this.pathArrow.getElement().attr(style);
  }

  bindEvent = () => {
    if (!this.pathLine || !this.pathArrow) {
      setTimeout(this.bindEvent, 50);
    } else {
      this.pathLine.getElement().hover(this.onMouseOverHandler, this.onMouseOutHandler);
      this.pathArrow.getElement().hover(this.onMouseOverHandler, this.onMouseOutHandler);
    }
  }

  componentDidMount() {
    this.bindEvent();
  }

  componentWillUnmount() {
    this.pathLine.getElement().unhover(this.onMouseOverHandler, this.onMouseOutHandler);
    this.pathArrow.getElement().unhover(this.onMouseOverHandler, this.onMouseOutHandler);
  }

  renderLine = () => {
    const { flow } = this.props;
    const { stroke } = getStrokeAndFill(flow);
    const polyline = new Polyline(flow.id, flow.waypoints, SEQUENCEFLOW_STROKE);
    const lastLineIndex = polyline.getLinesCount() - 1;
    this.line = polyline.getLine(lastLineIndex);

    return (<RaphaelBasePath
      id={flow.id}
      d={polyline.path}
      stroke={stroke}
      strokeWidth={SEQUENCEFLOW_STROKE}
      ref={node => { this.pathLine = node; }}
    />);
  }

  renderArrow = () => {
    const { stroke } = getStrokeAndFill(this.props.flow);
    const line = this.line as any;
    const doubleArrowWidth = 2 * ARROW_WIDTH;
    const width = ARROW_WIDTH / 2 + .5;
    const arrowHead: string = `M0 0L-${width}-${doubleArrowWidth}L${width}-${doubleArrowWidth}z`;
    const angle = Raphael.deg(line.angle - Math.PI / 2);
    const transform = `t${line.x2},${line.y2}r${angle} 0 0`;

    return (<RaphaelBasePath
      id={this.props.flow.id}
      d={arrowHead}
      stroke={stroke}
      strokeWidth={SEQUENCEFLOW_STROKE}
      fill={stroke}
      transform={transform}
      ref={node => { this.pathArrow = node; }}
    />);
  }

  render() {
    return (<RaphaelBaseSet>
      {this.renderLine()}
      {this.renderArrow()}
    </RaphaelBaseSet>);
  }
}

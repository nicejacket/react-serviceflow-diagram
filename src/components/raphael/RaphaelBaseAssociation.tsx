import * as Raphael from 'raphael';
import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { getStrokeAndFill } from '../Utils';
import { Polyline } from './Polyline';
import { RaphaelBasePath } from './RaphaelBasePath';
import { RaphaelBaseSet } from './RaphaelBaseSet';

const ARROW_WIDTH = 4;
const SEQUENCEFLOW_STROKE = 2;

export interface RaphaelBaseAssociationProps extends BaseElementProps {
  association: any;
}

export class RaphaelBaseAssociation extends React.Component<RaphaelBaseAssociationProps, any> {
  static defaultProps = {
    x: 0,
    y: 0
  };

  line: Polyline = null;

  renderLine = () => {
    const { association } = this.props;
    if (!association.waypoints || !association.waypoints.length) { return null; }
    const { stroke } = getStrokeAndFill(association);
    const polyline = new Polyline(association.id, association.waypoints, SEQUENCEFLOW_STROKE);
    const lastLineIndex = polyline.getLinesCount() - 1;
    this.line = polyline.getLine(lastLineIndex);

    return (<RaphaelBasePath
      id={association.id}
      d={polyline.path}
      stroke={stroke}
      strokeWidth={SEQUENCEFLOW_STROKE}
      strokeDasharray=". "
    />);
  }

  renderArrow = () => {
    const { association } = this.props;
    if (!association.waypoints || !association.waypoints.length) { return null; }
    const { stroke } = getStrokeAndFill(association);
    const line = this.line as any;
    const doubleArrowWidth = 2 * ARROW_WIDTH;
    const width = ARROW_WIDTH / 2 + .5;
    const arrowHead: string = `M0 0L-${width}-${doubleArrowWidth}L${width}-${doubleArrowWidth}z`;
    const angle = Raphael.deg(line.angle - Math.PI / 2);
    const transform = `t${line.x2},${line.y2}r${angle} 0 0`;

    return (<RaphaelBasePath
      id={association.id}
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

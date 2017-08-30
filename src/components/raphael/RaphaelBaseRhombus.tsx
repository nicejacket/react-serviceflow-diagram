import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { RaphaelBasePath } from './RaphaelBasePath';

export interface RaphaelBaseRhombusProps extends BaseElementProps {}

export class RaphaelBaseRhombus extends React.Component<RaphaelBaseRhombusProps, any> {
  static defaultProps = { x: 0, y: 0 };

  render() {
    const { id, x, y, width, height, stroke, strokeWidth, fill, fillOpacity } = this.props;
    const PATH = `M${x} ${y + (height / 2)}
          L${x + (width / 2)} ${y + height}
          L${x + width} ${y + (height / 2)}
          L${x + (width / 2)} ${y}z`;
    return (<RaphaelBasePath
      id={id}
      d={PATH}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      fillOpacity={fillOpacity}
    />);
  }
}

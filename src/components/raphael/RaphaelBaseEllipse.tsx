import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';

export interface RaphaelBaseEllipseProps {
  x?: number;
  y?: number;
  rx?: number;
  ry?: number;
}

export class RaphaelBaseEllipse extends React.Component<RaphaelBaseEllipseProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    rx: 10,
    ry: 20
  };

  element: RaphaelBaseElement = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<RaphaelBaseElement
      ref={(node: any) => { this.element = node; }}
      type="ellipse"
      {...this.props}
    />);
  }
}

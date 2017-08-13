import * as React from 'react';
import Element from './Element';

export interface EllipseProps {
  x?: number;
  y?: number;
  rx?: number;
  ry?: number;
}

export default class Ellipse extends React.Component<EllipseProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    rx: 10,
    ry: 20,
  }

  element: Element = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<Element
      ref={(node: any) => { this.element = node; }}
      type="ellipse"
      {...this.props}
    />);
  }
}

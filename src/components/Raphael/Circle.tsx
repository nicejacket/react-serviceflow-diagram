import * as React from 'react';
import Element from './Element';

export interface CircleProps {
  x?: number;
  y?: number;
  r?: number;
}

export default class Circle extends React.Component<CircleProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    r: 10,
  }

  element: Element = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<Element
      ref={(node: any) => { this.element = node; }}
      type="circle"
      fill="#FFF"
      {...this.props}
    />);
  }
}

import * as React from 'react';
import Element from './Element';

export interface PathProps {
  d: string | Array<String>;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
  fillOpacity?: number;
  transform?: string;
  attr?: any;
  animate?: any;
}

export default class Path extends React.Component<PathProps, any> {
  static defaultProps = {
    stroke: '#000',
    strokeWidth: 1,
  }

  element: Element = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<Element
      ref={(node: any) => { this.element = node; }}
      type="path"
      {...this.props}
    />);
  }
}

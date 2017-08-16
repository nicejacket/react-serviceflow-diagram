import * as React from 'react';
import Element from './Element';

export interface PrintProps {
  x?: number;
  y?: number;
  text?: string;
  fontFamily?: string;
}

export default class Print extends React.Component {
  static defaultProps = {
    x: 0,
    y: 0,
    text: '',
    fontFamily: 'Arial',
  }

  element: Element = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<Element
      ref={(node: any) => { this.element = node; }}
      type="print"
      {...this.props}
    />);
  }
}

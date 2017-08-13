import * as React from 'react';
import Element from './Element';

export interface TextProps {
  x?: number;
  y?: number;
  text?: string;
}

export default class Text extends React.Component {
  static defaultProps = {
    x: 0,
    y: 0,
    text: '',
  }

  element: Element = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<Element
      ref={(node: any) => { this.element = node; }}
      type="text"
      {...this.props}
    />);
  }
}

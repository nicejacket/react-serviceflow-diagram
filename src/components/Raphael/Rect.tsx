import * as React from 'react';
import Element from './Element';
import BaseElementProps from '../BaseElementProps';

export interface RectProps extends BaseElementProps {
  r?: number;
}

export default class Rect extends React.Component<RectProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 80,
    height: 32,
    r: 0,
  }

  element: Element = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    console.log(this.props, 'rect');
    return (<Element
      ref={(node: any) => { this.element = node; }}
      type="rect"
      {...this.props}
    />);
  }
}

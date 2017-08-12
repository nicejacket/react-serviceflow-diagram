import * as React from 'react';
import Element from './Element';

export interface ImageProps {
  src: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export default class Image extends React.Component<ImageProps, any> {
  static defaultProps = {
    src: '',
    x: 0,
    y: 0,
    width: 64,
    height: 64,
  }

  element: Element = null;

  getElement() {
    return this.element.getElement();
  }

  render(){
    return (<Element ref={(node: Element) => { this.element = node; }} type='image' {...this.props} />);
  }
}

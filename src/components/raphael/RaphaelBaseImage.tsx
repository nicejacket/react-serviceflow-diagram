import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';

export interface RaphaelBaseImageProps {
  src: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export class RaphaelBaseImage extends React.Component<RaphaelBaseImageProps, any> {
  static defaultProps = {
    src: '',
    x: 0,
    y: 0,
    width: 64,
    height: 64
  };

  element: RaphaelBaseElement = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<RaphaelBaseElement
      ref={(node: RaphaelBaseElement) => { this.element = node; }}
      type="image"
      {...this.props}
    />);
  }
}

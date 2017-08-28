import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';

export interface RaphaelBaseCircleProps {
  id?: string;
  x?: number;
  y?: number;
  r?: number;
}

export class RaphaelBaseCircle extends React.Component<RaphaelBaseCircleProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    r: 10,
  }

  element: RaphaelBaseElement = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<RaphaelBaseElement
      id={this.props.id}
      ref={(node: any) => { this.element = node; }}
      type="circle"
      {...this.props}
    />);
  }
}

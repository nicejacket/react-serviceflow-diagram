import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';

export interface RaphaelBasePathProps {
  d: string | Array<String>;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  fill?: string;
  fillOpacity?: number;
  transform?: string;
  attr?: any;
  animate?: any;
  id?: string;
}

export class RaphaelBasePath extends React.Component<RaphaelBasePathProps, any> {
  static defaultProps = {
    stroke: '#000',
    strokeWidth: 1,
  }

  element: RaphaelBaseElement = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<RaphaelBaseElement
      id={this.props.id}
      ref={(node: any) => { this.element = node; }}
      type="path"
      {...this.props}
    />);
  }
}

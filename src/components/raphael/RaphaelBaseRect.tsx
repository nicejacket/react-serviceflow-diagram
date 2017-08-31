import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { RaphaelBaseElement } from './RaphaelBaseElement';

export interface RaphaelBaseRectProps extends BaseElementProps {
  r?: number;
}

export class RaphaelBaseRect extends React.Component<RaphaelBaseRectProps, any> {
  static defaultProps = { x: 0, y: 0, width: 80, height: 32, r: 0 };

  element: RaphaelBaseElement = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<RaphaelBaseElement
      ref={(node: any) => { this.element = node; }}
      type="rect"
      {...this.props}
    />);
  }
}

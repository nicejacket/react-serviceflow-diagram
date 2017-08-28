import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';

export interface RaphaelBasePrintProps {
  x?: number;
  y?: number;
  text?: string;
  fontFamily?: string;
}

export class RaphaelBasePrint extends React.Component {
  static defaultProps = {
    x: 0,
    y: 0,
    text: '',
    fontFamily: 'Arial',
  }

  element: RaphaelBaseElement = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<RaphaelBaseElement
      ref={(node: any) => { this.element = node; }}
      type="print"
      {...this.props}
    />);
  }
}

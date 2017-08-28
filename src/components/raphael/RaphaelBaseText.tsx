import * as React from 'react';
import { RaphaelBaseElement } from './RaphaelBaseElement';
import BaseElementProps from '../BaseElementProps';

export interface RaphaelBaseTextProps extends BaseElementProps {
  text?: string;
  transform?: string;
  fontSize?: number;
  fontFamily?: string;
  textAnchor?: string;
}

export class RaphaelBaseText extends React.Component<RaphaelBaseTextProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    text: '',
  }

  element: RaphaelBaseElement = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<RaphaelBaseElement
      ref={(node: any) => { this.element = node; }}
      type="text"
      {...this.props}
    />);
  }
}

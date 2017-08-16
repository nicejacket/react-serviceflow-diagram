import * as React from 'react';
import Element from './Element';
import BaseElementProps from '../BaseElementProps';

export interface TextProps extends BaseElementProps {
  text?: string;
  transform?: string;
  fontSize?: number;
  fontFamily?: string;
  textAnchor?: string;
}

export default class Text extends React.Component<TextProps, any> {
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

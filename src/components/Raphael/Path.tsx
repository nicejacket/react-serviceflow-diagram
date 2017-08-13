import * as React from 'react';
import Element from './Element';

export interface PathProps {
  d: string & Array<String>;
}

export default class Path extends React.Component<any, any> {
  element: Element = null;

  getElement() {
    return this.element.getElement();
  }

  render() {
    return (<Element
      ref={(node: any) => { this.element = node; }}
      type="path"
      {...this.props}
    />);
  }
}

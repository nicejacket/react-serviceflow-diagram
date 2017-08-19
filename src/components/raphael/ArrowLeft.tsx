import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Path from './Path';
import Set from './Set';

const PATH = 'M24.39730641414141 2.1768707482993195 16.387205404040404 11.609977324263038 24.39730641414141 21.04308390022676Z';

export interface ArrowLeftProps extends BaseElementProps {
  transform?: string;
}

export default class ArrowLeft extends React.Component<ArrowLeftProps, any> {
  render() {
    return (<Path d={PATH} {...this.props} />);
  }
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import { RaphaelBasePath } from './RaphaelBasePath';
import { RaphaelBaseSet } from './RaphaelBaseSet';

const PATH = 'M24.39730641414141 2.1768707482993195 16.387205404040404 11.609977324263038 24.39730641414141 21.04308390022676Z';

export interface RaphaelBaseArrowLeftProps extends BaseElementProps {
  transform?: string;
}

export class RaphaelBaseArrowLeft extends React.Component<RaphaelBaseArrowLeftProps, any> {
  render() {
    return (<RaphaelBasePath d={PATH} {...this.props} />);
  }
}

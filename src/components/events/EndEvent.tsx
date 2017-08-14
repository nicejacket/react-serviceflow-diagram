import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Event from './Event';

export interface EndEventProps extends BaseElementProps {
  radius?: number;
  iconFill?: string;
}

export default class EndEvent extends React.Component<EndEventProps, any> {
  static defaultProps = {
    radius: 14,
    strokeWidth: 3,
    iconFill: 'black',
  }

  render() {
    return <Event {...this.props} />;
  }
}

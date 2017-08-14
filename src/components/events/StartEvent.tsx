import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Event from './Event';

export interface StartEventProps extends BaseElementProps {
  radius?: number;
  iconFill?: string;
}

export default class StartEvent extends React.Component<StartEventProps, any> {
  static defaultProps = {
    iconFill: 'none',
    radius: 15,
    strokeWidth: 1,
  }

  render() {
    return (<Event {...this.props} />)
  }
}

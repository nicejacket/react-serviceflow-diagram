import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconMuleTask from '../icons/DiagramIconMuleTask';
import Task from './Task';

export interface MuleTaskProps extends BaseElementProps {
  text: string;
}

export default class MuleTask extends React.Component<MuleTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconMuleTask {...this.props} />
    </Task>);
  }
}

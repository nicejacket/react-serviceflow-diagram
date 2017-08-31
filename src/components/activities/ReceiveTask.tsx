import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconReceiveTask from '../icons/DiagramIconReceiveTask';
import Task from './Task';

export interface ReceiveTaskProps extends BaseElementProps {
  text: string;
}

export default class ReceiveTask extends React.Component<ReceiveTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconReceiveTask {...this.props} />
    </Task>);
  }
}

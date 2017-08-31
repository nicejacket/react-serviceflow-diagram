import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconServiceTask from '../icons/DiagramIconServiceTask';
import Task from './Task';

export interface ServiceTaskProps extends BaseElementProps {
  text: string;
}

export default class ServiceTask extends React.Component<ServiceTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconServiceTask {...this.props} />
    </Task>);
  }
}

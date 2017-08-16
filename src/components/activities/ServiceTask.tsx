import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Task from './Task';
import DiagramIconServiceTask from '../icons/DiagramIconServiceTask';

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

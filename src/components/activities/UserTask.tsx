import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Task from './Task';
import DiagramIconUserTask from '../icons/DiagramIconUserTask';

export interface UserTaskProps extends BaseElementProps {
  text: string;
}

export default class UserTask extends React.Component<UserTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconUserTask {...this.props} />
    </Task>);
  }
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconUserTask from '../icons/DiagramIconUserTask';
import Task from './Task';

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

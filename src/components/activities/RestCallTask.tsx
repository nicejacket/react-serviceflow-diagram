import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconRestCallTask from '../icons/DiagramIconRestCallTask';
import Task from './Task';

export interface RestCallTaskProps extends BaseElementProps {
  text: string;
}

export default class RestCallTask extends React.Component<RestCallTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconRestCallTask {...this.props} />
    </Task>);
  }
}

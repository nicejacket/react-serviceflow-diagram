import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Task from './Task';
import DiagramIconRestCallTask from '../icons/DiagramIconRestCallTask';

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

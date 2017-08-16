import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Task from './Task';
import DiagramIconSendTask from '../icons/DiagramIconSendTask';

export interface SendTaskProps extends BaseElementProps {
  text: string;
}

export default class SendTask extends React.Component<SendTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconSendTask {...this.props} />
    </Task>);
  }
}

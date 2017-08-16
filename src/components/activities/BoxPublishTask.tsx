import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Task from './Task';
import DiagramIconBoxPublishTask from '../icons/DiagramIconBoxPublishTask';

export interface BoxPublishTaskProps extends BaseElementProps {
  text?: string;
}

export default class BoxPublishTask extends React.Component<BoxPublishTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconBoxPublishTask {...this.props} />
    </Task>)
  }
}

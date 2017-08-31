import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconManualTask from '../icons/DiagramIconManualTask';
import Task from './Task';

export interface ManualTaskProps extends BaseElementProps {
  text: string;
}

export default class ManualTask extends React.Component<ManualTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconManualTask {...this.props} />
    </Task>);
  }
}

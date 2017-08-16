import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Task from './Task';
import DiagramIconManualTask from '../icons/DiagramIconManualTask';

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

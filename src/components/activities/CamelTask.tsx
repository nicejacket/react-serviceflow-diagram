import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconCamelTask from '../icons/DiagramIconCamelTask';
import Task from './Task';

export interface CamelTaskProps extends BaseElementProps {
  text: string;
}

export default class CamelTask extends React.Component<CamelTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconCamelTask {...this.props} />
    </Task>);
  }
}

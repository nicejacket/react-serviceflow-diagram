import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Task from './Task';
import DiagramIconScriptTask from '../icons/DiagramIconScriptTask';

export interface ScriptTaskProps extends BaseElementProps {
  text: string;
}

export default class ScriptTask extends React.Component<ScriptTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconScriptTask {...this.props} />
    </Task>);
  }
}

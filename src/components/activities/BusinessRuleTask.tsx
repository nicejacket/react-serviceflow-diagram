import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconBusinessRuleTask from '../icons/DiagramIconBusinessRuleTask';
import Task from './Task';

export interface BusinessRuleTaskProps extends BaseElementProps {
  text: string;
}

export default class BusinessRuleTask extends React.Component<BusinessRuleTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconBusinessRuleTask {...this.props} />
    </Task>);
  }
}

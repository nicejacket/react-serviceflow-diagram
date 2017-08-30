import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Task from './Task';
import DiagramIconBusinessRuleTask from '../icons/DiagramIconBusinessRuleTask';

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

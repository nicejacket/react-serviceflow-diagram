import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface BusinessRuleTaskProps extends BaseElementProps {
    text: string;
}
export default class BusinessRuleTask extends React.Component<BusinessRuleTaskProps, any> {
    render(): JSX.Element;
}

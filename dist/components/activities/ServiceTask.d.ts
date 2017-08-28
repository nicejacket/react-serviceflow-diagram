import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface ServiceTaskProps extends BaseElementProps {
    text: string;
}
export default class ServiceTask extends React.Component<ServiceTaskProps, any> {
    render(): JSX.Element;
}

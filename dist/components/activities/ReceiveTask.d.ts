import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface ReceiveTaskProps extends BaseElementProps {
    text: string;
}
export default class ReceiveTask extends React.Component<ReceiveTaskProps, any> {
    render(): JSX.Element;
}

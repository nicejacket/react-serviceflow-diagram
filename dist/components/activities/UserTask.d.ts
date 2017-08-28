import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface UserTaskProps extends BaseElementProps {
    text: string;
}
export default class UserTask extends React.Component<UserTaskProps, any> {
    render(): JSX.Element;
}

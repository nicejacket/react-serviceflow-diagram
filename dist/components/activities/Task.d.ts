import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface TaskProps extends BaseElementProps {
    radius?: number;
    text?: string;
}
export default class Task extends React.Component<TaskProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        radius: number;
    };
    render(): JSX.Element;
}

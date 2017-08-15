import * as React from 'react';
import BaseElementProps from '../BaseElementProps';

export interface TaskProps extends BaseElementProps {
  radius?: number;
}

export default class Task extends React.Component<TaskProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 24,
    height: 24,
    radius: 4,
  }
}

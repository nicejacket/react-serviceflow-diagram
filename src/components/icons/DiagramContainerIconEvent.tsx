import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconCompensate from './DiagramIconCompensate';
import DiagramIconError from './DiagramIconError';
import DiagramIconMessage from './DiagramIconMessage';
import DiagramIconSignal from './DiagramIconSignal';
import DiagramIconTimer from './DiagramIconTimer';

export interface DiagramContainerIconEventProps extends BaseElementProps {
  type?: string;
}

export default class DiagramContainerIconEvent extends React.Component<DiagramContainerIconEventProps, any> {
  render() {
    const { type, x, y, width, height, data, stroke, fill } = this.props;
    const baseProps = { x, y, width, height, stroke, data };
    switch (type) {
    case 'timer': {
      return <DiagramIconTimer {...baseProps} />;
    }
    case 'error': {
      return <DiagramIconError {...baseProps} fill={fill} />;
    }
    case 'signal': {
      return <DiagramIconSignal {...baseProps} fill={fill} />;
    }
    case 'message': {
      return <DiagramIconMessage {...baseProps} />;
    }
    case 'compensate': {
      return <DiagramIconCompensate {...baseProps} fill={fill} />;
    }
    }
    return null;
  }
}

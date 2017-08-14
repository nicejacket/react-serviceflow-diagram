import * as React from 'react';
import DiagramIconTimer from './DiagramIconTimer';
import DiagramIconError from './DiagramIconError';
import DiagramIconSignal from './DiagramIconSignal';
import DiagramIconMessage from './DiagramIconMessage';
import BaseElementProps from '../BaseElementProps';

export interface DiagramIconContainerEventProps extends BaseElementProps {
  type?: string;
}

export default class DiagramIconContainerEvent extends React.Component<DiagramIconContainerEventProps, any> {
  render() {
    const { type, ...others } = this.props;
    switch (type) {
      case 'timer': {
        return <DiagramIconTimer {...others} />;
      }
      case 'error': {
        return <DiagramIconError {...others} />;
      }
      case 'signal': {
        return <DiagramIconSignal {...others} />;
      }
      case 'message': {
        return <DiagramIconMessage {...others} />;
      }
    }
    return null;
  }
}

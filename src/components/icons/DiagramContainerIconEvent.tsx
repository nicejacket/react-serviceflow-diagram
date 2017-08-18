import * as React from 'react';
import DiagramIconTimer from './DiagramIconTimer';
import DiagramIconError from './DiagramIconError';
import DiagramIconSignal from './DiagramIconSignal';
import DiagramIconMessage from './DiagramIconMessage';
import BaseElementProps from '../BaseElementProps';

export interface DiagramContainerIconEventProps extends BaseElementProps {
  type?: string;
}

export default class DiagramContainerIconEvent extends React.Component<DiagramContainerIconEventProps, any> {
  render() {
    const { type, data, ...others } = this.props;
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

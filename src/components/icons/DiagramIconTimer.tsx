import * as React from 'react';
import Set from '../Raphael/Set';
import IconCircle from './RaphaelIconCircle';
import RaphaelIconTimer from './RaphaelIconTImer';
import BaseElementProps from '../BaseElementProps';

export interface DiagramIconTimerProps extends BaseElementProps {
  raidus?: number;
}

export default class DiagramIconTimer extends React.Component<DiagramIconTimerProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 36,
    height: 36,
    radius: 18,
  }

  render() {
    return(<Set>
        <IconCircle {...this.props} stroke="black" fill="none" />
        <RaphaelIconTimer
          {...this.props}
          stroke="none"
          fill="#585858"
        />
      </Set>);
  }
}

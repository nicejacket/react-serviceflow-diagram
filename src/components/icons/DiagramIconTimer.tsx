import * as React from 'react';
import Set from '../raphael/Set';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import RaphaelIconTimer from '../raphael/icons/RaphaelIconTImer';
import BaseElementProps from '../BaseElementProps';

export interface DiagramIconTimerProps extends BaseElementProps {
  radius?: number;
}

export default class DiagramIconTimer extends React.Component<DiagramIconTimerProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    radius: 10,
    strokeWidth: 1,
  }

  render() {
    const { stroke, fill, radius, ...others } = this.props;
    return(<Set>
        <RaphaelIconCircle {...others} radius={radius} stroke="black" fill="none" />
        <RaphaelIconTimer
          {...others}
          stroke="none"
          fill="#585858"
        />
      </Set>);
  }
}

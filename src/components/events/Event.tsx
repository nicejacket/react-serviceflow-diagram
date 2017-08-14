import * as React from 'react';
import RaphaelIconCircle from '../icons/RaphaelIconCircle';
import BaseElementProps from '../BaseElementProps';
import Set from '../Raphael/Set';
import DiagramIconContainerEvent from '../icons/DragramIconContainerEvent';

export interface EventProps extends BaseElementProps {
  radius?: number;
  iconFill?: string;
  eventDefinition?: object;
}

export default class Event extends React.Component<EventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 32,
    height: 32,
  }

  render() {
    const { x, y, width, height, iconFill } = this.props;
    return (<Set>
      <DiagramIconContainerEvent x={x} y={y} width={width} height={height} fill={iconFill} />
      <RaphaelIconCircle {...this.props} />;
    </Set>);
  }
}

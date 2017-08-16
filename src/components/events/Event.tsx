import * as React from 'react';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import BaseElementProps from '../BaseElementProps';
import DiagramIconContainerEvent from '../icons/DragramIconContainerEvent';
import Tooltip from '../tooltip/Tooltip';

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
    fill: '#FFF',
  }

  render() {
    const { x, y, width, height, fill, iconFill, ...others } = this.props;
    return (<Tooltip>
      <RaphaelIconCircle fill={fill} {...this.props} />
      <DiagramIconContainerEvent x={x} y={y} width={width} height={height} fill={iconFill} />
    </Tooltip>);
  }
}

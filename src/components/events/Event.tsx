import * as React from 'react';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import BaseElementProps from '../BaseElementProps';
import DiagramContainerIconEvent from '../icons/DiagramContainerIconEvent';
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
    const { x, y, width, height, fill, iconFill, data, ...others } = this.props;
    const type = data && data.eventDefinition && data.eventDefinition.type;
    return (<Tooltip data={data}>
      <RaphaelIconCircle fill={fill} {...this.props} />
      <DiagramContainerIconEvent x={x} y={y} type={type} width={width} height={height} fill={iconFill} />
    </Tooltip>);
  }
}

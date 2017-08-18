import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import DiagramContainerIconEvent from '../icons/DiagramContainerIconEvent';

export interface ThrowEventProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
  signalFill?: string;
}

export default class ThrowEvent extends React.Component<ThrowEventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 30,
    height: 30,
    stroke: '#585858',
    fill: '#FFF',
    fillOpacity: '',
    strokeWidth: 1,
    signalFill: 'black',
    circleRadiusInner: 12,
    circleRadiusOuter: 15,
  }

  render() {
    const { fill, signalFill, circleRadiusInner, circleRadiusOuter, data, ...others } = this.props;
    const type = data && data.eventDefinition && data.eventDefinition.type;
    return (<Tooltip>
      <RaphaelIconCircle fill={fill} radius={circleRadiusOuter} {...others} />
      <RaphaelIconCircle fill={fill} radius={circleRadiusInner} {...others} />
      <DiagramContainerIconEvent fill={signalFill} type={type} {...others} />
    </Tooltip>);
  }
}

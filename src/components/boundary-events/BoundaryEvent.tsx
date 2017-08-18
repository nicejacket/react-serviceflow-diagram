import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import DiagramContainerIconEvent from '../icons/DiagramContainerIconEvent';

export interface BoundaryEventProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
  signalFill?: string;
  type?: string;
}

export default class BoundaryEvent extends React.Component<BoundaryEventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    circleRadiusInner: 12,
    circleRadiusOuter: 15,
    width: 30,
    height: 30,
    stroke: '#585858',
    fill: '#FFF',
    fillOpacity: '',
    strokeWidth: 1,
    signalFill: 'none',
  }

  render() {
    const { circleRadiusInner, circleRadiusOuter, signalFill, fill, data, ...others } = this.props;
    const type = data && data.eventDefinition ? data.eventDefinition.type : null;
    return (<Tooltip>
      <RaphaelIconCircle radius={circleRadiusOuter} fill={fill} {...others} />
      <RaphaelIconCircle radius={circleRadiusInner} fill={fill} {...others} />
      <DiagramContainerIconEvent fill={signalFill} type={type} {...others} />
    </Tooltip>);
  }
}

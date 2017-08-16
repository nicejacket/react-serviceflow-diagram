import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';
import DiagramIconContainerEvent from '../icons/DragramIconContainerEvent';

export interface IntermediateCatchingEventProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
  type?: string;
}

export default class IntermediateCatchingEvent extends React.Component<IntermediateCatchingEventProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 30,
    height: 30,
    stroke: '#585858',
    fill: '#FFF',
    fillOpacity: '',
    strokeWidth: 1,
    circleRadiusInner: 12,
    circleRadiusOuter: 15,
  }

  render() {
    const { circleRadiusInner, circleRadiusOuter, type, ...others } = this.props;

    return (<Tooltip>
      <RaphaelIconCircle radius={circleRadiusOuter} {...others} />
      <RaphaelIconCircle radius={circleRadiusInner} {...others} />
      <DiagramIconContainerEvent type={type} {...others} />
    </Tooltip>);
  }
}

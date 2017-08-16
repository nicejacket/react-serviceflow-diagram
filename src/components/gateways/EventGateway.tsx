import * as React from 'react';
import Set from '../raphael/Set';
import Gateway from './Gateway';
import RaphaelIconPentagon from '../raphael/icons/RaphaelIconPentagon';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconCircle from '../raphael/icons/RaphaelIconCircle';

export interface EventGatewayProps extends BaseElementProps {
  circleRadiusInner?: number;
  circleRadiusOuter?: number;
  pentaStrokeWidth?: number;
}

export default class EventGateway extends React.Component<EventGatewayProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 40,
    height: 40,
    strokeWidth: 0.5,
    circleRadiusInner: 10.4,
    circleRadiusOuter: 11.7,
    pentaStrokeWidth: 1.39999998,
  }

  render() {
    const { x, y, width, height, circleRadiusInner, circleRadiusOuter, pentaStrokeWidth, strokeWidth, ...others } = this.props;
    const psProps = { x, y, width, height };
    return (<Gateway {...psProps}>
      <RaphaelIconCircle {...psProps} radius={circleRadiusInner} strokeWidth={strokeWidth} {...others}  />
      <RaphaelIconCircle {...psProps} radius={circleRadiusOuter} strokeWidth={strokeWidth} {...others}  />
      <RaphaelIconPentagon {...psProps} strokeWidth={pentaStrokeWidth} {...others} />
    </Gateway>);
  }
}

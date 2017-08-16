import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconService from '../raphael/icons/RaphaelIconService';

export interface DiagramIconServiceTaskProps extends BaseElementProps { }

export default class DiagramIconServiceTask extends React.Component<DiagramIconServiceTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<RaphaelIconService
      x={x + 4}
      y={y + 4}
      stroke="none"
      fill="#72a7d0"
      {...others}
    />);
  }
}

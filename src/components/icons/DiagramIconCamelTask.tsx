import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconCamel from '../raphael/icons/RaphaelIconCamel';

export interface DiagramIconCamelTaskProps extends BaseElementProps { }

export default class DiagramIconCamelTask extends React.Component<DiagramIconCamelTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<RaphaelIconCamel
      x={x + 8}
      y={y + 6}
      fill="#bd4848"
      stroke="none"
    />);
  }
}

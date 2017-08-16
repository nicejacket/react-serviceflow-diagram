import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconScript from '../raphael/icons/RaphaelIconScript';

export interface DiagramIconScriptTaskProps extends BaseElementProps { }

export default class DiagramIconScriptTask extends React.Component<DiagramIconScriptTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<RaphaelIconScript
      x={x + 4}
      y={y + 4}
      fill="#72a7d0"
      stroke="none"
      {...others}
    />);
  }
}

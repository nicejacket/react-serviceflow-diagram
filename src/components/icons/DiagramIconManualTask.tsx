import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconManual from '../raphael/icons/RaphaelIconManual';

export interface DiagramIconManualTaskProps extends BaseElementProps { }

export default class DiagramIconManualTask extends React.Component<DiagramIconManualTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<RaphaelIconManual
      x={x + 4}
      y={y + 4}
      stroke="none"
      fill="#d1b575"
      {...others}
    />);
  }
}

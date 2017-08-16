import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconMule from '../raphael/icons/RaphaelIconMule';

export interface DiagramIconMuleTaskProps extends BaseElementProps { }

export default class DiagramIconMuleTask extends React.Component<DiagramIconMuleTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<RaphaelIconMule
      x={x + 2}
      y={y + 2}
      fill="#bd4848"
      stroke="none"
      {...others}
    />);
  }
}

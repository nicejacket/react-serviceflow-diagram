import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconSend from '../raphael/icons/RaphaelIconSend';
import Tooltip from '../tooltip/Tooltip';

export interface DiagramIconSendTaskProps extends BaseElementProps { }

export default class DiagramIconSendTask extends React.Component<DiagramIconSendTaskProps, any> {
  render() {
    const { x, y, fill, stroke, ...others } = this.props;
    return (<Tooltip>
      <RaphaelIconSend
        x={x + 4}
        y={y + 4}
        fill="#16964d"
        stroke="none"
        {...others}
      />
    </Tooltip>);
  }
}

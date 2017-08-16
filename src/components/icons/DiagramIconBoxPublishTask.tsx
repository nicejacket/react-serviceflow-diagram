import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconBoxPublish from '../raphael/icons/RaphaelIconBoxPublish';

export interface DiagramIconBoxPublishTaskProps extends BaseElementProps { }

export default class DiagramIconBoxPublishTask extends React.Component<DiagramIconBoxPublishTaskProps, any> {
  render() {
    const { x, y, ...others } = this.props;
    return (<RaphaelIconBoxPublish
      x={x + 6}
      y={y + 6}
      {...others}
    />);
  }
}

import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconMessage from './RaphaelIconMessage';

export interface DiagramIconMessageProps extends BaseElementProps {

}

export default class DiagramIconMessage extends React.Component<DiagramIconMessageProps, any> {
  static defaultProps = {
    width: 40,
    height: 40,
    fill: '#585858',
    strokeWidth: 1,
    stroke: 'none',
  }

  render() {
    return <RaphaelIconMessage {...this.props} />;
  }
}

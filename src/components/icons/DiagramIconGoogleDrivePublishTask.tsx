import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import RaphaelIconGoogleDrivePublish from '../raphael/icons/RaphaelIconGoogleDrivePublish';

export interface DiagramIconGoogleDrivePublishTaskProps extends BaseElementProps { }

export default class DiagramIconGoogleDrivePublishTask extends React.Component<DiagramIconGoogleDrivePublishTaskProps, any> {
  render() {
    const { x, y } = this.props;
    return (<RaphaelIconGoogleDrivePublish
      x={x + 6}
      y={y + 6}
    />);
  }
}

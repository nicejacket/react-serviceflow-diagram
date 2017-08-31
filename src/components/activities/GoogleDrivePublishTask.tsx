import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import DiagramIconGoogleDrivePublishTask from '../icons/DiagramIconGoogleDrivePublishTask';
import Task from './Task';

export interface GoogleDrivePublishTaskProps extends BaseElementProps {
  text: string;
}

export default class GoogleDrivePublishTask extends React.Component<GoogleDrivePublishTaskProps, any> {
  render() {
    return (<Task {...this.props}>
      <DiagramIconGoogleDrivePublishTask {...this.props} />
    </Task>);
  }
}

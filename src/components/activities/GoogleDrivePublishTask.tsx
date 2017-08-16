import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Task from './Task';
import DiagramIconGoogleDrivePublishTask from '../icons/DiagramIconGoogleDrivePublishTask';

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

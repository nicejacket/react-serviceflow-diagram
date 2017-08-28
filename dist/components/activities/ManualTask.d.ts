import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface ManualTaskProps extends BaseElementProps {
    text: string;
}
export default class ManualTask extends React.Component<ManualTaskProps, any> {
    render(): JSX.Element;
}

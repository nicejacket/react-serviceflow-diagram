import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface DiagramContainerIconEventProps extends BaseElementProps {
    type?: string;
}
export default class DiagramContainerIconEvent extends React.Component<DiagramContainerIconEventProps, any> {
    render(): JSX.Element;
}

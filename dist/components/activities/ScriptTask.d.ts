import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
export interface ScriptTaskProps extends BaseElementProps {
    text: string;
}
export default class ScriptTask extends React.Component<ScriptTaskProps, any> {
    render(): JSX.Element;
}

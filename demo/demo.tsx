import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DATA } from './demo-model';
import { Diagram, DiagramModel } from '../src/index';

const diagram = new DiagramModel(DATA);

ReactDOM.render(<Diagram diagram={diagram} />, document.getElementById('example'));

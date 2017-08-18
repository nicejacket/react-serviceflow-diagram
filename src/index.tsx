import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramModel } from './models/DiagramModel';
import { DATA } from './demo-model';
import Diagram from './components/Diagram';

const diagram = new DiagramModel(DATA);

ReactDOM.render(<Diagram diagram={diagram} />, document.getElementById('example'));

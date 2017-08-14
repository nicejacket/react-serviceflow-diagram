import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Paper from './components/Raphael/Paper';
import Set from './components/Raphael/Set';
import IconBoxPublish from './components/icons/IconBoxPublish';
import Gateway from './components/gateways/Gateway';
import InclusiveGateway from './components/gateways/InclusiveGateway';
import ParallelGatway from './components/gateways/ParallelGateway';
import ExclusiveGateway from './components/gateways/ExclusiveGateway';
import EventGateway from './components/gateways/EventGateway';
import Event from './components/events/Event';
import DiagramIconTimer from './components/icons/DiagramIconTimer';
import DiagramIconMessage from './components/icons/DiagramIconMessage';
import DiagramIconError from './components/icons/DiagramIconError';
import DiagramIconSignal from './components/icons/DiagramIconSignal';
import DiagramIconContainerEvent from './components/icons/DragramIconContainerEvent';
import StartEvent from './components/events/StartEvent';
import EndEvent from './components/events/EndEvent';

ReactDOM.render(<Paper width={400} height={500}>
  <Set>
    <IconBoxPublish />
    <Gateway x={0} y={100} />
    <InclusiveGateway x={0} y={140} />
    <ParallelGatway x={0} y={180} />
    <ExclusiveGateway x={0} y={220} />
    <EventGateway x={0} y={260} />
    <DiagramIconTimer x={0} y={300} />
    <DiagramIconMessage x={0} y={340} />
    <DiagramIconError x={0} y={380} />
    <DiagramIconSignal x={0} y={420} />
    <DiagramIconContainerEvent x={0} y={460} type="timer" />
  </Set>
  <Set>
    <Event x={100} y={0} eventDefinition={{ type: 'timer' }} />
    <StartEvent x={100} y={40} />
    <EndEvent x={100} y={80} />
  </Set>
</Paper>, document.getElementById('example'));

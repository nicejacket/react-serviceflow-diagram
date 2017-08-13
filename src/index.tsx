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

ReactDOM.render(<Paper width={400} height={500}>
  <Set>
    <IconBoxPublish />
    <Gateway x={0} y={100}/>
    <InclusiveGateway x={0} y={164} />
    <ParallelGatway x={0} y={228} />
    <ExclusiveGateway x={0} y={292} />
    <EventGateway x={0} y={358} />
  </Set>
</Paper>, document.getElementById('example'));

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Paper from './components/raphael/Paper';
import Set from './components/raphael/Set';
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
import DiagramContainerIconEvent from './components/icons/DiagramContainerIconEvent';
import StartEvent from './components/events/StartEvent';
import EndEvent from './components/events/EndEvent';
import BoundaryEvent from './components/boundary-events/BoundaryEvent';
import ThrowEvent from './components/boundary-events/ThrowEvent';
import IntermediateCatchingEvent from './components/intermediate-catching-events/IntermediateCatchingEvent';
import Pool from './components/swimlanes/Pool';
import Lane from './components/swimlanes/Lane';
import SubProcess from './components/structural/SubProcess';
import EventSubProcess from './components/structural/EventSubProcess';
import DiagramIconUserTask from './components/icons/DiagramIconUserTask';
import RaphaelIconBoxPublish from './components/raphael/icons/RaphaelIconBoxPublish';
import RaphaelIconBusinessRule from './components/raphael/icons/RaphaelIconBusinessRule';
import RaphaelIconCamel from './components/raphael/icons/RaphaelIconCamel';
import RaphaelIconManual from './components/raphael/icons/RaphaelIconManual';
import RaphaelIconGoogleDrivePublish from './components/raphael/icons/RaphaelIconGoogleDrivePublish';
import RaphaelIconMule from './components/raphael/icons/RaphaelIconMule';
import RaphaelIconReceive from './components/raphael/icons/RaphaelIconReceive';
import RaphaelIconRestCall from './components/raphael/icons/RaphaelIconRestCall';
import RaphaelIconScript from './components/raphael/icons/RaphaelIconScript';
import RaphaelIconSend from './components/raphael/icons/RaphaelIconSend';
import RaphaelIconService from './components/raphael/icons/RaphaelIconService';
import RaphaelIconRhombus from './components/raphael/icons/RaphaelIconRhombus';
import FlowArrow from './components/raphael/FlowArrow';
import DiagramIconServiceTask from './components/icons/DiagramIconServiceTask';
import DiagramIconSendTask from './components/icons/DiagramIconSendTask';
import DiagramIconScriptTask from './components/icons/DiagramIconScriptTask';
import DiagramIconRestCallTask from './components/icons/DiagramIconRestCallTask';
import DiagramIconReceiveTask from './components/icons/DiagramIconReceiveTask';
import DiagramIconMuleTask from './components/icons/DiagramIconMuleTask';
import DiagramIconManualTask from './components/icons/DiagramIconManualTask';
import DiagramIconGoogleDrivePublishTask from './components/icons/DiagramIconGoogleDrivePublishTask';
import DiagramIconCamelTask from './components/icons/DiagramIconCamelTask';
import DiagramIconBusinessRuleTask from './components/icons/DiagramIconBusinessRuleTask';
import DiagramIconBoxPublishTask from './components/icons/DiagramIconBoxPublishTask';
import Task from './components/activities/Task';
import UserTask from './components/activities/UserTask';
import ServiceTask from './components/activities/ServiceTask';
import SendTask from './components/activities/SendTask';
import ScriptTask from './components/activities/ScriptTask';
import RestCallTask from './components/activities/RestCallTask';
import ReceiveTask from './components/activities/ReceiveTask';
import MuleTask from './components/activities/MuleTask';
import ManualTask from './components/activities/ManualTask';
import GoogleDrivePublishTask from './components/activities/GoogleDrivePublishTask';
import CamelTask from './components/activities/CamelTask';
import ContainerServiceTask from './components/activities/ContainerServiceTask';
import BusinessRuleTask from './components/activities/BusinessRuleTask';

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

ReactDOM.render(<Paper width={width} height={height}>
  <Set>
    <Gateway x={0} y={100} />
    <InclusiveGateway x={0} y={140} />
    <ParallelGatway x={0} y={180} />
    <ExclusiveGateway x={0} y={220} />
    <EventGateway x={0} y={260} />
    <DiagramIconTimer x={0} y={300} />
    <DiagramIconMessage x={0} y={340} />
    <DiagramIconError x={0} y={380} />
    <DiagramIconSignal x={0} y={420} />
    <DiagramContainerIconEvent x={0} y={460} type="timer" />
  </Set>
  <Set>
    <Event x={100} y={0} eventDefinition={{ type: 'timer' }} />
    <StartEvent x={100} y={40} />
    <EndEvent x={100} y={80} />
    <BoundaryEvent x={100} y={120} type="timer" />
    <ThrowEvent x={100} y={150} type="error" />
    <IntermediateCatchingEvent x={100} y={180} type="message" />
  </Set>
  <Set>
    <Pool x={160} y={0} text="这个是个提示信息pool" width={100} height={36} />
    <Lane x={160} y={40} text="这个是个提示信息lane" width={100} height={36} />
    <SubProcess x={160} y={80} width={100} height={36} stroke="green" fill="#FFF" />
    <EventSubProcess x={160} y={120} width={100} height={36} stroke="red" fill="#FFF" />
    <DiagramIconUserTask x={160} y={160} />
    <RaphaelIconBoxPublish x={180} y={160} width={20} height={20} />
    <RaphaelIconBusinessRule x={200} y={160} stroke="#000" fill="red" />
    <RaphaelIconCamel x={220} y={160} stroke="#000" fill="green" />
    <RaphaelIconManual x={240} y={160} stroke="blue" fill="yellow" />
    <RaphaelIconGoogleDrivePublish x={260} y={160} />
    <RaphaelIconMule x={160} y={200} />
    <RaphaelIconReceive x={180} y={200} />
    <RaphaelIconRestCall x={200} y={200} />
    <RaphaelIconScript x={220} y={200} />
    <RaphaelIconSend x={240} y={200} />
    <RaphaelIconService x={260} y={200} />
    <RaphaelIconRhombus x={160} y={240} stroke="green" fill="green" />
    <FlowArrow x={180} y={240} points={[{ x: 160, y: 240 }, { x: 220, y: 480 }]}/>
    <DiagramIconServiceTask x={180} y={240} />
    <DiagramIconSendTask x={210} y={240} />
    <DiagramIconScriptTask x={240} y={240} />
    <DiagramIconRestCallTask x={270} y={240} />
    <DiagramIconReceiveTask x={160} y={280} />
    <DiagramIconMuleTask x={190} y={280} />
    <DiagramIconManualTask x={220} y={280} />
    <DiagramIconGoogleDrivePublishTask x={250} y={280} />
    <DiagramIconCamelTask x={160} y={320} />
    <DiagramIconBusinessRuleTask x={190} y={320} />
    <DiagramIconBoxPublishTask x={220} y={320} />
  </Set>
  <Set>
    <Task x={320} y={0} text="这个是一个task\ntask" width={100} height={40} />
    <UserTask x={320} y={50} text="这是usertask\ntask" />
    <ServiceTask x={320} y={100} text="这是servicetask\ntask" />
    <SendTask x={320} y={150} text="这是sendtask\ntask" />
    <ScriptTask x={320} y={200} text="这是scripttask\ntask" />
    <RestCallTask x={320} y={250} text="这是restcalltask\ntask" />
    <ReceiveTask x={320} y={300} text="这是receivetask\ntask" />
    <MuleTask x={320} y={350} text="这是muletask\ntask" />
    <ManualTask x={320} y={400} text="这是manualtask\ntask" />
    <GoogleDrivePublishTask x={320} y={450} text="这是googletask\ntask" />
    <CamelTask x={320} y={500} text="这是cameltask\ntask" />
    <ContainerServiceTask x={320} y={550} text="这是containerservicetask\ntask" type="box_publish" />
    <ContainerServiceTask x={320} y={600} text="这是containerservicetask\ntask" type="mail" />
    <BusinessRuleTask x={320} y={650} text="这是businessruletask\ntask" />
  </Set>
</Paper>, document.getElementById('example'));

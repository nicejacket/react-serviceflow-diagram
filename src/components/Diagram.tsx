import * as React from 'react';
import Paper from './raphael/Paper';
import { DiagramModel, DiagramFlowElementModel } from '../models/DiagramModel';
import StartEvent from './events/StartEvent';
import { DiagramElementModel } from '../models/DiagramModel';
import ExclusiveGateway from './gateways/ExclusiveGateway';
import InclusiveGateway from './gateways/InclusiveGateway';
import EventGateway from './gateways/EventGateway';
import ParallelGatway from './gateways/ParallelGateway';
import EndEvent from './events/EndEvent';
import UserTask from './activities/UserTask';
import ManualTask from './activities/ManualTask';
import ServiceTask from './activities/ServiceTask';
import ReceiveTask from './activities/ReceiveTask';
import ScriptTask from './activities/ScriptTask';
import BusinessRuleTask from './activities/BusinessRuleTask';
import BoundaryEvent from './boundary-events/BoundaryEvent';
import ThrowEvent from './boundary-events/ThrowEvent';
import IntermediateCatchingEvent from './intermediate-catching-events/IntermediateCatchingEvent';
import SubProcess from './structural/SubProcess';
import EventSubProcess from './structural/EventSubProcess';
import SequenceFlow from './SequenceFlow';
import Pools from './swimlanes/Pools';
import { setTotalColors } from '../services/DiagramColorService';

const PADDING_WIDTH: number = 60;
const PADDING_HEIGHT: number = 60;

export interface DiagramProps {
  diagram: DiagramModel;
  customerActivities?: (ele: DiagramElementModel) => any;
  onClick?: (e: any) => void;
}

export default class Diagram extends React.Component<DiagramProps, any> {
  static defaultProps = {
    onClick: () => {},
  }

  constructor(props: DiagramProps) {
    super(props);
    const { diagram } = props;
    this.state = { diagram };
  }

  componentWillReceiveProps({ diagram }: DiagramProps) {
    this.setState({ diagram });
  }

  onMouseEnterHandler = (e: any) => {
    // const id = e.target.id;
    // const newTotalColors: any = {};
    // const newDiagram: DiagramModel = (Object as any).assign({}, this.state.diagram);

    // newTotalColors[id] = true;
    // setTotalColors(newTotalColors);

    // newDiagram.elements.forEach(ele => {
    //   ele.current = ele.id === id;
    // });
    // newDiagram.flows.forEach(flow => {
    //   flow.current = flow.id === id;
    // });

    // this.setState({ diagram: newDiagram });
  }

  renderElement = (ele: DiagramElementModel) => {
    if (this.props.customerActivities) {
      const element = this.props.customerActivities(ele);
      if (element) return element;
    }
    const { x, y, width, height, ...data } = ele;
    const { id, name } = data;
    const props = { x: +x, y: +y, width: +width, height: +height, data };
    switch (ele.type) {
      case 'StartEvent':
        return <StartEvent {...props} key={id} />;
      case 'ExclusiveGateway':
        return <ExclusiveGateway {...props} key={id} />;
      case 'InclusiveGateway':
        return <InclusiveGateway {...props} key={id} />;
      case 'EventGateway':
        return <EventGateway {...props} key={id} />;
      case 'ParallelGateway':
        return <ParallelGatway {...props} key={id} />;
      case 'EndEvent':
        return <EndEvent {...props} key={id} />;
      case 'UserTask':
        return <UserTask {...props} text={name} key={id} />;
      case 'ManualTask':
        return <ManualTask {...props} text={name} key={id} />;
      case 'ServiceTask':
        return <ServiceTask {...props} text={name} key={id} />;
      case 'ReceiveTask':
        return <ReceiveTask {...props} text={name} key={id} />;
      case 'ScriptTask':
        return <ScriptTask {...props} text={name} key={id} />;
      case 'BusinessRuleTask':
        return <BusinessRuleTask {...props} text={name} />;
      case 'BoundaryEvent':
        return <BoundaryEvent {...props} key={id} />;
      case 'ThrowEvent':
        return <ThrowEvent {...props} key={id} />;
      case 'IntermediateCatchEvent':
        return <IntermediateCatchingEvent {...props} key={id} />;
      case 'SubProcess':
        return <SubProcess {...props} key={id} />;
      case 'EventSubProcess':
        return <EventSubProcess {...props} key={id} />;
    }
  }

  render() {
    const { diagram: { diagramBeginX, diagramBeginY, diagramWidth, diagramHeight, elements, flows, pools } } = this.props;
    return (<Paper
      x={diagramBeginX}
      y={diagramBeginY}
      width={diagramWidth + 10}
      height={diagramHeight}
      onMouseEnter={this.onMouseEnterHandler}
      onClick={this.props.onClick}
    >
      {elements.map(this.renderElement)}
      {flows.map((flow: DiagramFlowElementModel) => <SequenceFlow flow={flow} key={flow.id} />)}
      {pools ? <Pools pools={pools} /> : null}
    </Paper>);
  }
}

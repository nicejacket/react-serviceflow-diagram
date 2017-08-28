export declare class DiagramModel {
    diagramBeginX: number;
    diagramBeginY: number;
    diagramHeight: number;
    diagramWidth: number;
    elements: DiagramElementModel[];
    flows: DiagramFlowElementModel[];
    pools: DiagramPoolElementModel[];
    associations: DiagramAssociationElementModel[];
    constructor(obj?: any);
}
export declare class DiagramElementModel {
    completed: boolean;
    current: boolean;
    height: string;
    id: string;
    name: string;
    type: string;
    width: string;
    value: string;
    x: string;
    y: string;
    properties: DiagramElementPropertyModel[];
    dataType: string;
    eventDefinition: DiagramEventDefinitionModel;
    taskType: string;
    constructor(obj?: any);
}
export declare class DiagramElementPropertyModel {
    name: string;
    type: string;
    value: any;
    constructor(obj?: any);
}
export declare class DiagramFlowElementModel {
    completed: boolean;
    current: boolean;
    id: string;
    properties: any[];
    sourceRef: string;
    targetRef: string;
    type: string;
    waypoints: DiagramWayPointModel[];
    constructor(obj?: any);
}
export declare class DiagramAssociationElementModel {
    completed: boolean;
    current: boolean;
    id: string;
    properties: any[];
    sourceRef: string;
    targetRef: string;
    type: string;
    waypoints: DiagramWayPointModel[];
    constructor(obj?: any);
}
export declare class DiagramWayPointModel {
    x: number;
    y: number;
    constructor(obj?: any);
}
export declare class DiagramEventDefinitionModel {
    timeCycle: string;
    type: string;
    constructor(obj?: any);
}
export declare class DiagramPoolElementModel {
    height: string;
    id: string;
    name: string;
    properties: any;
    lanes: DiagramLaneElementModel[];
    width: string;
    x: number;
    y: number;
    constructor(obj?: any);
}
export declare class DiagramLaneElementModel {
    height: number;
    id: string;
    name: string;
    width: number;
    x: number;
    y: number;
    constructor(obj?: any);
}

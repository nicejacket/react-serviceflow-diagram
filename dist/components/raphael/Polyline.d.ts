export declare class Polyline {
    id: any;
    points: any;
    path: any;
    anchors: any;
    strokeWidth: any;
    radius: any;
    showDetails: any;
    element: any;
    isDefaultConditionAvailable: any;
    closePath: any;
    constructor(uuid: any, points: any, strokeWidth: any);
    init(): void;
    normalizeCoordinates(): void;
    getLinesCount(): number;
    _getLine(i: number): {
        x1: any;
        y1: any;
        x2: any;
        y2: any;
    };
    getLine(i: number): any;
    getLineAngle(i: number): number;
    getLineLengthX(i: any): number;
    getLineLengthY(i: any): number;
    getLineLength(i: any): number;
    getAnchors(): any;
    getAnchorsCount(type?: any): any;
    pushAnchor(type: string, x: number, y: number): void;
    getAnchor(position: any): any;
    getAnchorByType(type: string, position: any): any;
    addNewPoint(position: any, x: string, y: string): void;
    rebuildPath(): void;
    transform(transformation: string): void;
    function(attrs: any): void;
}

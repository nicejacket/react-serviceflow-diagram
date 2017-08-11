export class Point {
    x: number;
    y: number;

    constructor(obj?: any) {
        this.x = obj && obj.x || 0;
        this.y = obj && obj.y || 0;
    }
}
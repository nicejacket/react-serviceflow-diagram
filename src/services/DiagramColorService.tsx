export class DiagramColorService {

    static CURRENT_COLOR = '#017501';
    static COMPLETED_COLOR = '#2632aa';
    static ACTIVITY_STROKE_COLOR = '#bbbbbb';
    static MAIN_STROKE_COLOR = '#585858';

    static ACTIVITY_FILL_COLOR = '#f9f9f9';

    static TASK_STROKE = 1;
    static TASK_HIGHLIGHT_STROKE = 2;
    static CALL_ACTIVITY_STROKE = 2;

    totalColors: any;

    constructor() {
    }

    setTotalColors(totalColors: any) {
        this.totalColors = totalColors;
    }

    getFillOpacity(): string {
        return '0.6';
    }

    getFillColour(key: string) {
        if (this.totalColors && this.totalColors.hasOwnProperty(key)) {
            let colorPercentage = this.totalColors[key];
            return this.convertColorToHsb(colorPercentage);
        } else {
            return DiagramColorService.ACTIVITY_FILL_COLOR;
        }
    }

    getBpmnColor(data: any, defaultColor: string) {
        if (data.current) {
            return DiagramColorService.CURRENT_COLOR;
        } else if (data.completed) {
            return DiagramColorService.COMPLETED_COLOR;
        } else {
            return defaultColor;
        }
    }

    getBpmnStrokeWidth(data: any) {
        if (data.current || data.completed) {
            return DiagramColorService.TASK_HIGHLIGHT_STROKE;
        } else {
            return DiagramColorService.TASK_STROKE;
        }
    }

    convertColorToHsb(colorPercentage: number): string {
        let hue = (120.0 - (colorPercentage * 1.2)) / 360.0;
        return 'hsb(' + hue + ', 1, 1)';
    }
}

export const CURRENT_COLOR = '#66AA66';
export const COMPLETED_COLOR = '#2674AA';
export const ACTIVITY_STROKE_COLOR = '#bbbbbb';
export const ACTIVE_STROKE_COLOR = '#a3b3c3';
export const MAIN_STROKE_COLOR = '#585858';

export const ACTIVITY_FILL_COLOR = '#f9f9f9';

export const TASK_STROKE = 1;
export const TASK_HIGHLIGHT_STROKE = 2;
export const CALL_ACTIVITY_STROKE = 2;

let totalColors: any = null;

export function setTotalColors(newTotalColors: any) {
  totalColors = newTotalColors;
}

export function getFillOpacity(): number {
  return 0.6;
}

export function getFillColour(key: string) {
  if (totalColors && totalColors.hasOwnProperty(key)) {
    const colorPercentage = totalColors[key];
    return convertColorToHsb(colorPercentage);
  } else {
    return ACTIVITY_FILL_COLOR;
  }
}

export function getBpmnColor(data: any, defaultColor: string) {
  if (data.current) {
    return CURRENT_COLOR;
  } else if (data.completed) {
    return COMPLETED_COLOR;
  } else {
    return defaultColor;
  }
}

export function getBpmnStrokeWidth(data: any) {
  if (data.current || data.completed) {
    return TASK_HIGHLIGHT_STROKE;
  } else {
    return TASK_STROKE;
  }
}

export function convertColorToHsb(colorPercentage: number): string {
  const hue = (120.0 - (colorPercentage * 1.2)) / 360.0;
  return `hsb(${hue}, 1, 1)`;
}

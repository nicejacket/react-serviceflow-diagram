export const CONFIG: any = {
  CURRENT_COLOR: '#66AA66',
  COMPLETED_COLOR: '#2674AA',
  ACTIVITY_STROKE_COLOR: '#bbbbbb',
  ACTIVE_STROKE_COLOR: '#a3b3c3',
  MAIN_STROKE_COLOR: '#585858',
  ACTIVITY_FILL_COLOR: '#f9f9f9',
  TOOLTIP_COLOR: 'rgba(43, 65, 79, 0.95)',
  TASK_STROKE: 1,
  TASK_HIGHLIGHT_STROKE: 2,
  CALL_ACTIVITY_STROKE: 2
};

let totalColors: any = null;

export function config(cfg: any) {
  Object.keys(cfg).forEach(k => {
    if (CONFIG[k] && cfg[k]) { CONFIG[k] = cfg[k]; }
  });
}

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
    return CONFIG.ACTIVITY_FILL_COLOR;
  }
}

export function getBpmnColor(data: any, defaultColor: string) {
  if (data.current) {
    return CONFIG.CURRENT_COLOR;
  } else if (data.completed) {
    return CONFIG.COMPLETED_COLOR;
  } else {
    return defaultColor;
  }
}

export function getBpmnStrokeWidth(data: any) {
  if (data.current || data.completed) {
    return CONFIG.TASK_HIGHLIGHT_STROKE;
  } else {
    return CONFIG.TASK_STROKE;
  }
}

export function convertColorToHsb(colorPercentage: number): string {
  const hue = (120.0 - (colorPercentage * 1.2)) / 360.0;
  return `hsb(${hue}, 1, 1)`;
}

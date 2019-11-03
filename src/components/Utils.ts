import { CONFIG, getBpmnColor, getBpmnStrokeWidth, getFillColour, getFillOpacity } from '../services/DiagramColorService';

export interface StrokeAndFillType {
  stroke: string;
  strokeWidth: number;
  fill: string;
  fillOpacity: number;
}

export function getStrokeAndFill(data: any): StrokeAndFillType {
  return {
    stroke: getBpmnColor(data, CONFIG.MAIN_STROKE_COLOR),
    strokeWidth: getBpmnStrokeWidth(data),
    fill: getFillColour(data.id),
    fillOpacity: getFillOpacity()
  };
}

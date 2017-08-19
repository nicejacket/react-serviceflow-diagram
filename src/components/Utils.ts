import { getBpmnColor, getBpmnStrokeWidth, getFillColour, getFillOpacity, MAIN_STROKE_COLOR } from '../services/DiagramColorService';

export interface StrokeAndFillType {
  stroke: string;
  strokeWidth: number;
  fill: string;
  fillOpacity: number;
}

export function getStrokeAndFill(data: any): StrokeAndFillType {
  return {
    stroke: getBpmnColor(data, MAIN_STROKE_COLOR),
    strokeWidth: getBpmnStrokeWidth(data),
    fill: getFillColour(data.id),
    fillOpacity: getFillOpacity(),
  }
}

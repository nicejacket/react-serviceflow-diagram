"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENT_COLOR = '#66AA66';
exports.COMPLETED_COLOR = '#2674AA';
exports.ACTIVITY_STROKE_COLOR = '#bbbbbb';
exports.ACTIVE_STROKE_COLOR = '#a3b3c3';
exports.MAIN_STROKE_COLOR = '#585858';
exports.ACTIVITY_FILL_COLOR = '#f9f9f9';
exports.TASK_STROKE = 1;
exports.TASK_HIGHLIGHT_STROKE = 2;
exports.CALL_ACTIVITY_STROKE = 2;
let totalColors = null;
function setTotalColors(newTotalColors) {
    totalColors = newTotalColors;
}
exports.setTotalColors = setTotalColors;
function getFillOpacity() {
    return 0.6;
}
exports.getFillOpacity = getFillOpacity;
function getFillColour(key) {
    if (totalColors && totalColors.hasOwnProperty(key)) {
        const colorPercentage = totalColors[key];
        return convertColorToHsb(colorPercentage);
    }
    else {
        return exports.ACTIVITY_FILL_COLOR;
    }
}
exports.getFillColour = getFillColour;
function getBpmnColor(data, defaultColor) {
    if (data.current) {
        return exports.CURRENT_COLOR;
    }
    else if (data.completed) {
        return exports.COMPLETED_COLOR;
    }
    else {
        return defaultColor;
    }
}
exports.getBpmnColor = getBpmnColor;
function getBpmnStrokeWidth(data) {
    if (data.current || data.completed) {
        return exports.TASK_HIGHLIGHT_STROKE;
    }
    else {
        return exports.TASK_STROKE;
    }
}
exports.getBpmnStrokeWidth = getBpmnStrokeWidth;
function convertColorToHsb(colorPercentage) {
    const hue = (120.0 - (colorPercentage * 1.2)) / 360.0;
    return `hsb(${hue}, 1, 1)`;
}
exports.convertColorToHsb = convertColorToHsb;

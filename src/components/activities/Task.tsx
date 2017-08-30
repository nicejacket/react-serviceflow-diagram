import * as React from 'react';
import * as PropTypes from 'prop-types';
import BaseElementProps from '../BaseElementProps';
import Tooltip from '../tooltip/Tooltip';
import { RaphaelBaseRect } from '../raphael/RaphaelBaseRect';
import { RaphaelBaseMultilineText } from '../raphael/RaphaelBaseMultilineText';
import { getStrokeAndFill } from '../Utils';
import { MAIN_STROKE_COLOR, ACTIVE_STROKE_COLOR } from '../../services/DiagramColorService';

export interface TaskProps extends BaseElementProps {
  radius?: number;
  text?: string;
}

export default class Task extends React.Component<TaskProps, any> {
  static defaultProps = { x: 0, y: 0, radius: 4 };
  static contextTypes = { onClick: PropTypes.func };

  rect: RaphaelBaseRect;
  text: RaphaelBaseMultilineText;

  bindEvent = () => {
    if (!this.rect || !this.text) {
      setTimeout(this.bindEvent, 50);
    } else {
      this.rect.getElement().click(this.onClickHandler);
      this.rect.getElement().hover(this.onMouseOverHandler, this.onMouseOutHandler);
      this.text.getElement().click(this.onClickHandler);
      this.text.getElement().hover(this.onMouseOverHandler, this.onMouseOutHandler);
      React.Children.forEach(this.props.children, (child: any) => {
        if (child.getElement && child.getElement().click) {
          child.getElement().click(this.onClickHandler);
          child.getElement().hover(this.onMouseOverHandler, this.onMouseOutHandler);
        }
      });
    }
  }

  componentDidMount() {
    this.bindEvent();
  }

  componentWillUnmount() {
    this.rect.getElement().unclick(this.onClickHandler);
    this.rect.getElement().unhover(this.onMouseOverHandler, this.onMouseOutHandler);
    this.text.getElement().unclick(this.onClickHandler);
    this.text.getElement().unhover(this.onMouseOverHandler, this.onMouseOutHandler);
    React.Children.forEach(this.props.children, (child: any) => {
      if (child.getElement && child.getElement().click) {
        child.getElement().unclick(this.onClickHandler);
        child.getElement().unhover(this.onMouseOverHandler, this.onMouseOutHandler);
      }
    });
  }

  onClickHandler = () => {
    if (this.context.onClick) {
      this.context.onClick(this.props.data);
    }
  }

  onMouseOverHandler = () => {
    const {strokeWidth} = getStrokeAndFill(this.props.data);
    this.rect.getElement().attr({ 'stroke-width': strokeWidth + 2, stroke: ACTIVE_STROKE_COLOR });
  }

  onMouseOutHandler = () => {
    const {stroke, strokeWidth} = getStrokeAndFill(this.props.data);
    this.rect.getElement().attr({ 'stroke-width': strokeWidth, stroke });
  }

  render() {
    const { x, y, width, height, radius, text, data, children } = this.props;
    const {stroke, strokeWidth, fill, fillOpacity} = getStrokeAndFill(data);

    return (<Tooltip data={data}>
      <RaphaelBaseRect
        id={data.id}
        x={x}
        y={y}
        width={width}
        height={height}
        r={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        fillOpacity={fillOpacity}
        ref={node => { this.rect = node; }}
      />
      <RaphaelBaseMultilineText
        x={x + width / 2}
        y={y + height / 2}
        text={text}
        width={width}
        ref={node => { this.text = node; }}
      />
      {children}
    </Tooltip>);
  }
}

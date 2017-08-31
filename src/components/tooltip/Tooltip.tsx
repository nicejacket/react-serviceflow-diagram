import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RaphaelBaseSet } from '../raphael/RaphaelBaseSet';
import { ACTIVE_STROKE_COLOR } from '../../services/DiagramColorService';
import './Tooltip.less';

const CLS_PREFIX = 'sf-tooltip-diagram';

export interface TooltipState {
  visible?: boolean;
}

export interface TooltipProps {
  position?: string;
  data?: any;
}

export const POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom'
};

export default class Tooltip extends React.Component<TooltipProps, TooltipState> {
  static defaultProps = { position: POSITION.BOTTOM };

  state = { visible: false };

  attrsMapping: any = {};
  root: React.ReactInstance = null;
  tooltip: React.ReactInstance = null;
  leave: boolean = true;
  unmounted: boolean = false;

  componentDidMount() {
    this.unmounted = false;
    setTimeout(() => {
      this.loopSet((this.root as RaphaelBaseSet).getSet(), this.bindEvent);
      window.addEventListener('scroll', this.onMouseLevelAndScrollHandler, true);
      window.addEventListener('touchstart', this.onMouseLevelAndScrollHandler);
    }, 0);
  }

  componentWillUnmount() {
    this.unmounted = true;
    window.removeEventListener('scroll', this.onMouseLevelAndScrollHandler);
    window.removeEventListener('touchstart', this.onMouseLevelAndScrollHandler);
  }

  bindEvent = (item: any) => {
    item.mouseup(this.onMouseEnterHandler);
    item.mouseover(this.onMouseEnterHandler);
    item.touchend(this.onMouseEnterHandler);
    item.mouseout(this.onMouseLevelAndScrollHandler);
  }

  setHoverStroke = (item: any) => {
    if (item.node && item.node.id) {
      if (!this.attrsMapping[item.node.id]) {
        this.attrsMapping[item.node.id] = { ...item.attrs };
      }
      item.attr({ stroke: ACTIVE_STROKE_COLOR, 'stroke-width': item.attrs['stroke-width'] + 1 });
    }
  }

  resetHoverStroke = (item: any) => {
    if (item.node && item.node.id) {
      const attrs = this.attrsMapping[item.node.id];
      item.attr({ stroke: attrs.stroke, 'stroke-width': attrs['stroke-width'] });
    }
  }

  loopSet = (set: RaphaelSet, func: (item: any) => void) => {
    set.forEach((item: any) => {
      if (item.type === 'set') {
        this.loopSet(item, func);
      } else {
        func(item);
      }
    });
  }

  onMouseEnterHandler = (e: any) => {
    this.leave = false;
    if (e.persist) { e.persist(); }
    setTimeout(this.onShowTooltipHandler.bind(this, e), 10);
  }

  onShowTooltipHandler = (e: any): any => {
    const tooltip: any = ReactDOM.findDOMNode(this.tooltip);
    const props = e.target.getBoundingClientRect();
    const top = props.top + (props.height / 2);
    const marginLeft = -1 * (tooltip.offsetWidth / 2);
    const marginTop = -1 * (tooltip.offsetHeight / 2);

    let left = props.left + (props.width / 2);

    if (this.state.visible) { return null; }

    if (this.props.position === POSITION.LEFT || this.props.position === POSITION.RIGHT) {
      left = (props.width / 2);
      if (top + marginTop < 0) {
        tooltip.style.top = '0';
        tooltip.style.marginTop = '0';
      } else {
        tooltip.style.top = `${top}px`;
        tooltip.style.marginTop = `${marginTop}px`;
      }
    } else {
      if (left + marginLeft < 0) {
        tooltip.style.left = '0';
        tooltip.style.marginLeft = '0';
      } else {
        tooltip.style.left = `${left}px`;
        tooltip.style.marginLeft = `${marginLeft}px`;
      }
    }

    if (this.props.position === POSITION.TOP) {
      tooltip.style.top = `${props.top - tooltip.offsetHeight - 10}px`;
    } else if (this.props.position === POSITION.RIGHT) {
      tooltip.style.left = `${props.left + props.width + 10}px`;
    } else if (this.props.position === POSITION.LEFT) {
      tooltip.style.left = `${props.left - tooltip.offsetWidth - 10}px`;
    } else {
      tooltip.style.top = `${props.top + props.height + 10}px`;
    }

    this.setState({ visible: true });
    this.loopSet((this.root as RaphaelBaseSet).getSet(), this.setHoverStroke);
  }

  onHideHandler = () => {
    if (this.leave) {
      if (!this.unmounted) {
        this.setState({ visible: false });
        this.loopSet((this.root as RaphaelBaseSet).getSet(), this.resetHoverStroke);
      }
    }
  }

  onMouseLevelAndScrollHandler = (e: any) => {
    this.leave = true;
    setTimeout(this.onHideHandler, 100);
  }

  render() {
    const cls = this.state.visible ? `${CLS_PREFIX}-tooltip is-active` : `${CLS_PREFIX}-tooltip`;
    const { data = {} } = this.props;

    return (<RaphaelBaseSet ref={node => { this.root = node; }}>
      <div
        ref={node => { this.tooltip = node; }}
        className={cls}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLevelAndScrollHandler}
      >
        <div className={`${CLS_PREFIX}-tooltip-header`}>{data.type} {data.name || data.id}</div>
        <div className={`${CLS_PREFIX}-tooltip-body`}>
          {
            data.name ? <div className={`${CLS_PREFIX}-tooltip-name-property`}>
              <span className={`${CLS_PREFIX}-propertyName`}>Name:</span>
              <span className={`${CLS_PREFIX}-propertyValue`}>{data.name}</span>
            </div> : null}
          {
            data.properties ? data.properties.map((prop: any) => <div className={`${CLS_PREFIX}-tooltip-general-property`} key={`${prop.name}-${prop.value}`}>
                <span className={`${CLS_PREFIX}-propertyName`}>{prop.name}</span>
                <span className={`${CLS_PREFIX}-propertyValue`}>{prop.value}</span>
              </div>) : null}
        </div>
      </div>
      {this.props.children}
    </RaphaelBaseSet>);
  }
}

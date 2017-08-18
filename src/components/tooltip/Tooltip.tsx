import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Set from '../raphael/Set';
import Element from '../raphael/Element';
import './Tooltip.less';

const CLS_PREFIX = 'sf-tooltip-diagram';

interface TooltipState {
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
  BOTTOM: 'bottom',
}

export default class Tooltip extends React.Component<TooltipProps, TooltipState> {
  static defaultProps = {
    position: POSITION.BOTTOM,
  }

  state = {
    visible: false,
  }

  root: React.ReactInstance = null;
  tooltip: React.ReactInstance = null;
  leave: boolean = true;

  componentDidMount() {
    setTimeout(() => {
      this.loopSet((this.root as Set).getSet());
      window.addEventListener('scroll', this.onMouseLevelAndScrollHandler, true);
      window.addEventListener('touchstart', this.onMouseLevelAndScrollHandler);
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onMouseLevelAndScrollHandler);
    window.removeEventListener('touchstart', this.onMouseLevelAndScrollHandler);
  }

  loopSet = (set: RaphaelSet) => {
    set.forEach((item: any) => {
      if (item.type === 'set') {
        this.loopSet(item);
      } else {
        item.mouseup(this.onMouseEnterHandler);
        item.mouseover(this.onMouseEnterHandler);
        item.touchend(this.onMouseEnterHandler);
        item.mouseout(this.onMouseLevelAndScrollHandler);
      }
    })
  }

  onMouseEnterHandler = (e: any) => {
    this.leave = false;
    if (e.persist) e.persist();
    setTimeout(this.onShowTooltipHandler.bind(this, e), 10);
  }

  onShowTooltipHandler = (e: any) => {
    const tooltip: any = ReactDOM.findDOMNode(this.tooltip);
    const props = e.target.getBoundingClientRect();
    const top = props.top + (props.height / 2);
    const marginLeft = -1 * (tooltip.offsetWidth / 2);
    const marginTop = -1 * (tooltip.offsetHeight / 2);
    
    let left = props.left + (props.width / 2);

    if (this.state.visible) return;

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
      tooltip.style.top = props.top - tooltip.offsetHeight - 10 + 'px';
    } else if (this.props.position === POSITION.RIGHT) {
      tooltip.style.left = props.left + props.width + 10 + 'px';
    } else if (this.props.position === POSITION.LEFT) {
      tooltip.style.left = props.left - tooltip.offsetWidth - 10 + 'px';
    } else {
      tooltip.style.top = props.top + props.height + 10 + 'px';
    }

    this.setState({ visible: true });
  }

  onHideHandler = () => {
    if (this.leave) {
      this.setState({ visible: false });
    }
  }

  onMouseLevelAndScrollHandler = (e: any) => {
    this.leave = true;
    setTimeout(this.onHideHandler, 500);
  }

  render() {
    const cls = this.state.visible ? `${CLS_PREFIX}-tooltip is-active` : `${CLS_PREFIX}-tooltip`;
    const { data = {} } = this.props;

    return (<Set ref={node => { this.root = node; }}>
      <div ref={node => { this.tooltip = node;}} className={cls} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLevelAndScrollHandler}>
        <div className={`${CLS_PREFIX}-tooltip-header`}>{data.type} {data.name || data.id}</div>
        <div className={`${CLS_PREFIX}-tooltip-body`}>
          {
            data.name ? <div className={`${CLS_PREFIX}-tooltip-name-property`}>
              <span className={`${CLS_PREFIX}-propertyName`}>Name:</span>
              <span className={`${CLS_PREFIX}-propertyValue`}>{data.name}</span>
            </div> : null
          }
          {
            data.properties ? data.properties.map((prop: any) => <div className={`${CLS_PREFIX}-tooltip-general-property`} key={`${prop.name}-${prop.value}`}>
                <span className={`${CLS_PREFIX}-propertyName`}>{prop.name}</span>
                <span className={`${CLS_PREFIX}-propertyValue`}>{prop.value}</span>
              </div>) : null
          }
        </div>
      </div>
      {this.props.children}
    </Set>);
  }
}

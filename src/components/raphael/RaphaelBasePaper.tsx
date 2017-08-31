import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './RaphaelBasePaper.less';
import { createPaper, updatePaper } from './Utils';

/**
 * 该包实现参照react-raphael实现
 * @link https://github.com/liuhong1happy/react-raphael
 */
export interface RaphaelBasePaperProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  viewbox?: string;
  style?: object;
  className?: string;
  container?: any;
  onMouseEnter?: (e: any) => void;
  onClick?: (e: any) => void;
}

export class RaphaelBasePaper extends React.Component<RaphaelBasePaperProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    container: {
      style: {},
      className: ''
    },
    viewbox: ''
  };

  paper: any = null;
  container: React.ReactInstance = null;

  constructor(props: RaphaelBasePaperProps) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const container = ReactDOM.findDOMNode(this.container);
    const paper = createPaper(container, this.props);
    this.paper = paper;
    this.setState({ loaded: true, id: paper.id });
  }

  componentDidUpdate() {
    updatePaper(this.paper, this.props);
  }

  componentWillUnmount() {
    this.paper.remove();
  }

  onClickHandler= (e: any) => {
    const { onClick } = this.props;
    if (onClick && e.target.id) { onClick(e.target.id); }
  }

  onMouseEnterHandler = (e: any) => {
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  }

  getPaper() {
    return this.paper;
  }

  genElementsContainer() {
    if (this.state.loaded) {
      return (<div className="raphael-paper" data-id={this.state.id}>
        {this.props.children}
      </div>);
    } else {
      return (<div className="raphael-paper" />);
    }
  }

  render() {
    const eleContainer = this.genElementsContainer();
    const { style, className, ...others } = this.props.container;
    return (<div className="react-raphael">
      {eleContainer}
      <div
        ref={node => { this.container = node; }}
        className={`paper-container ${className}`}
        style={style}
        {...others}
        onClick={this.onClickHandler}
        onMouseOver={this.onMouseEnterHandler}
        onTouchEnd={this.onMouseEnterHandler}
      />
    </div>);
  }
}

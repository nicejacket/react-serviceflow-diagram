import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Raphael from 'raphael';
import { createPaper, updatePaper } from './Utils';

export interface PaperProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  viewbox?: string;
  style?: object;
  className?: string;
  container?: any;
}

export default class Paper extends React.Component<PaperProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    container: {
      style: {},
      className: '',
    },
    viewbox: '',
  }

  paper: any = null;
  container: React.ReactInstance = null;

  constructor(props: PaperProps) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    const container = ReactDOM.findDOMNode(this.container);
    const paper = createPaper(container, this.props);
    this.paper = paper;
    this.setState({
      loaded: true,
      id: paper.id,
    });
  }

  componentDidUpdate() {
    updatePaper(this.paper, this.props);
  }

  componentWillUnmount() {
    this.paper.remove();
  }

  getPaper() {
    return this.paper;
  }

  genElementsContainer() {
    if (this.state.loaded) {
      return (<div className='raphael-paper' data-id={this.state.id}>
        {this.props.children}
      </div>);
    } else {
      return (<div className='raphael-paper' />);
    }
  }

  render() {
    const eleContainer = this.genElementsContainer();
    const { style, className, ...others } = this.props.container;
    return (<div className='react-raphael'>
      {eleContainer}
      <div ref={node => { this.container = node; }} className={`paper-container ${className}`} style={style} {...others} />
    </div>);
  }
}

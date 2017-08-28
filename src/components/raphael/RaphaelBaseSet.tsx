import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createSet, removeSet } from './Utils';

export interface RaphaelBaseSetProps {
  load?: (set: RaphaelSet) => {};
}

export interface RaphaelBaseSetState {
  loaded: boolean;
  id?: string;
}

export class RaphaelBaseSet extends React.Component<RaphaelBaseSetProps, RaphaelBaseSetState> {
  constructor(props: RaphaelBaseSetProps) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  set: RaphaelSet = null;

  componentDidMount() {
    const root = ReactDOM.findDOMNode(this.refs.root);
    const parentId = root.parentElement.getAttribute("data-id");
    const set = createSet(parentId, this.props, this.handleLoad.bind(this));
    this.set = set;
    this.setState({
      loaded: true,
      id: set.id
    });
  }

  getSet() {
    return this.set;
  }

  handleLoad(set: RaphaelSet) {
    if (this.props.load) {
      this.props.load(set);
    }
  }

  componentWillUnmout() {
    removeSet(this.set);
  }

  render() {
    if (this.state.loaded) {
      return (<div ref="root" className="raphael-set" data-id={this.state.id}>{this.props.children}</div>);
    } else {
      return (<div ref="root" className="raphael-set" data-id={this.state.id} />);
    }
  }
}

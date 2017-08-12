import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createSet, removeSet } from './Utils';

export interface SetProps {
  load?: (set: RaphaelSet) => {};
}

export interface SetState {
  loaded: boolean;
  id?: string;
}

export default class Set extends React.Component<SetProps, SetState> {
  constructor(props: SetProps) {
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

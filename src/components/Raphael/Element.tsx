import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createElement, updateElement, removeElement } from './Utils';

export default class Element extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  element: RaphaelElement = null;

  componentDidMount() {
    const root = ReactDOM.findDOMNode(this.refs.root);
    const parentId = root.parentElement.getAttribute('data-id');
    const element = createElement(parentId, this.props.type, this.props, this.handleLoad.bind(this));
    this.element = element;
    this.setState({
      loaded: true
    });
  }
  componentDidUpdate() {
    updateElement(this.element,this.props.type,this.props,this.handleUpdate.bind(this));
  }
  componentWillUnmount() {
    removeElement(this.element);
  }
  getElement() {
    return this.element;
  }

  handleLoad(element: RaphaelElement) {
    if (this.props.load) {
      this.props.load(element);
    }
  }
  handleUpdate(element: Element) {
    if (this.props.update) {
      this.props.update(element);
    }
  }
  render() {
    if (this.state.loaded) return null;
    return (<div ref='root' className={`raphael-${this.props.type}`} />);
  }
}

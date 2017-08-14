import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Set from '../Raphael/Set';
import Element from '../Raphael/Element';

export default class Tooltip extends React.Component<any, any> {

  refArr: Array<any> = [];

  componentDidMount() {
    Object.keys(this).forEach(prop => {
      console.log(prop);
    })
    this.refArr.forEach(ref => {
      const target = ReactDOM.findDOMNode(ref);
      target.addEventListener('mouseenter', this.onMouseEnterHandler);
      target.addEventListener('touchend', this.onMouseEnterHandler);
      target.addEventListener('mouseleave', this.onMouseLevelAndScrollHandler)
      console.log(target);
    });
  }

  onMouseEnterHandler = (e: any) => {
    console.log(e);
  }

  onMouseLevelAndScrollHandler = (e: any) => {
    console.log(e);
  }

  render() {
    return (<Set>
      {
        React.Children.map(this.props.children, (child, i) => {
          return React.cloneElement(child as React.ReactElement<any>, {
            ref: (node: any) => { (this as any)[`ref${i}`] = node; },
          });
        })
      }
    </Set>);
  }
}

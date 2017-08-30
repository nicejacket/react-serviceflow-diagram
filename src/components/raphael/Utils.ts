import * as Raphael from 'raphael';
import { RaphaelBasePaperProps } from './RaphaelBasePaper';

export interface RcRaphaelPaper extends RaphaelPaper {
  id?: string;
}

interface ElementsType {
  type: string;
  element: RaphaelElement;
  props?: any;
  callback?: (ele: RaphaelElement) => {};
}

const PAPERS: RcRaphaelPaper[] = [];
const ELEMENTS: ElementsType[] = [];

export function createPaper(container: any, props: any) {
  const { width, height, viewbox } = props;
  const paper = Raphael(container, width, height) as RcRaphaelPaper;
  if (viewbox) {
    const arr = viewbox.split(' ');
    paper.setViewBox(arr[0] || 0, arr[1] || 0, arr[2] || 0, arr[3] || 3, true);
  }
  paper.id = container.id || (`paper-${new Date().valueOf()}-${Math.random().toFixed(10)}`);
  PAPERS.push(paper);
  return paper;
}

export function findParentById(id: string): any {
  const papers = PAPERS.filter(ele => ele.id === id);

  if (papers.length > 0) {
    return { parent: papers[0], paper: papers[0] };
  } else {
    const sets = ELEMENTS.filter(ele => ele.element.id === id);

    if (sets.length > 0) {
      if (!sets[0].element) { return sets[0].element; }
      return { parent: sets[0].element, paper: sets[0].element.paper };
    }
  }
  return { parent: null, paper: null };
}

export function create(parentId: string, type: string, props: any) {
  let element = null;
  const findedParent = findParentById(parentId) as any;

  if (!findedParent.paper) { return findedParent.paper; }

  switch (type) {
  case 'set': {
    element = findedParent.paper.set();
    element.id = `set-${new Date().valueOf()}-${Math.random().toFixed(10)}`;
    break;
  }
  case 'circle': {
    const { x, y, r, ...others } = props;
    element = findedParent.paper.circle(x, y, r).attr(convertProps(others));
    break;
  }
  case 'ellipse': {
    const { x, y, rx, ry } = props;
    element = findedParent.paper.ellipse(x, y, rx, ry);
    break;
  }
  case 'image': {
    const { src, x, y, width, height } = props;
    element = findedParent.paper.image(src, x, y, width, height);
    break;
  }
  case 'path': {
    const { d, ...others } = props;
    let path = d;
    if (!path || d.length === 0) { path = 'M0,0L0,0Z'; }
    element = findedParent.paper.path(path).attr(convertProps(others));
    break;
  }
  case 'print': {
    const { x, y, text, fontFamily, fontWeight, fontStyle, fontStretch, fontSize, letterSpacing } = props;
    const font = findedParent.paper.getFont(fontFamily, fontWeight, fontStyle, fontStretch);
    element = findedParent.paper.print(x, y, text, font, fontSize, letterSpacing);
    break;
  }
  case 'rect': {
    const { x, y, width, height, r, ... others } = props;
    element = findedParent.paper.rect(x, y, width, height, r).attr(convertProps(others));
    break;
  }
  case 'text': {
    const { x, y, text, ...others } = props;
    element = findedParent.paper.text(x, y, text).attr(convertProps(others));
    break;
  }
  default: break;
  }

  if (element) {
    if (findedParent.parent.type === 'set') {
      element.set = findedParent.parent;
      findedParent.parent.push(element);
    }
  }
  updateElementProps(element, props);
  return element;
}

export function createElement(parentId: string, type: string, props: any, callback: (ele: RaphaelElement) => {}) {
  const element = create(parentId, type, props);
  ELEMENTS.push({ type, props, callback, element });
  if (callback) { callback(element); }
  return element;
}

export function createSet(parentId: string, props: any, callback: (set: RaphaelSet) => {}) {
  const set = create(parentId, 'set', props);
  ELEMENTS.push({
    type: 'set',
    element: set
  });
  if (callback) { callback(set); }
  return set;
}

export function updatePaper(paper: RcRaphaelPaper, props: RaphaelBasePaperProps) {
  const { width, height } = props;
  paper.setSize(width, height);
}

export function updateElementProps(element: any, props: any) {
  if (element) {
    // fix matrix bug
    element.matrix = Raphael.matrix(null, null, null, null, null, null);
    element.attr('transform', '');
    for (const key in props) {
      if (!props.hasOwnProperty(key)) { continue; }
      switch (key) {
      case 'attr': {
        if (typeof props[key] === 'object') { element.attr(props.attr); }
        break;
      }
      case 'animate': {
        if (typeof props[key] === 'object') { element.animate(props.animate); }
        break;
      }
      case 'animateWith': {
        if (typeof props[key] === 'object') { element.animateWith(props.animateWith); }
        break;
      }
      case 'click': {
        if (typeof props[key] === 'function') { element.unclick(); element.click(props.click); }
        break;
      }
      case 'data': {
        if (typeof props[key] === 'object') {
          for (const innerKey in props.data) {
            if (props.data.hasOwnProperty(innerKey)) {
              element.data(innerKey, props.data[innerKey]);
            }
          }
          element.items = props.data;
        }
        break;
      }
      case 'dblclick': {
        if (typeof props[key] === 'function') { element.undblclick(); element.dblclick(props.dblclick); }
        break;
      }
      case 'drag': {
        if (typeof props[key] === 'object') {
          element.undrag();
          element.drag(props.drag.move, props.drag.start, props.drag.end, props.drag.mcontext, props.drag.scontext, props.drag.econtext);
        }
        break;
      }
      case 'glow': {
        if (typeof props[key] === 'object') { element.glow(props.glow); }
        break;
      }
      case 'hover': {
        if (typeof props[key] === 'object') {
          element.unhover();
          element.hover(props.hover.in, props.hover.out, props.hover.icontext, props.hover.ocontext);
        }
        break;
      }
      case 'hide': {
        if (typeof props[key] === 'boolean') { props.hide ? element.hide() : element.show(); }
        break;
      }
      case 'mousedown': {
        if (typeof props[key] === 'function') { element.unmousedown(); element.mousedown(props.mousedown); }
        break;
      }
      case 'mousemove': {
        if (typeof props[key] === 'function') { element.unmousemove(); element.mousemove(props.mousemove); }
        break;
      }
      case 'mouseout': {
        if (typeof props[key] === 'function') { element.unmouseout(); element.mouseout(props.mouseout); }
        break;
      }
      case 'mouseover': {
        if (typeof props[key] === 'function') { element.unmouseover(); element.mouseover(props.mouseover); }
        break;
      }
      case 'mouseup': {
        if (typeof props[key] === 'function') { element.unmouseup(); element.mouseup(props.mouseup); }
        break;
      }
      case 'rotate': {
        if (typeof props[key] === 'object') { const { deg, cx, cy } = props.rotate; element.rotate(deg, cx, cy); }
        break;
      }
      case 'scale': {
        if (typeof props[key] === 'object') { const { sx, sy, cx, cy } = props.scale; element.scale(sx, sy, cx, cy); }
        break;
      }
      case 'touchcancel': {
        if (typeof props[key] === 'function') { element.untouchcancel(); element.touchcancel(props.touchcancel); }
        break;
      }
      case 'touchend': {
        if (typeof props[key] === 'function') { element.untouchend(); element.touchend(props.touchend); }
        break;
      }
      case 'touchmove': {
        if (typeof props[key] === 'function') { element.untouchmove(); element.touchmove(props.touchmove); }
        break;
      }
      case 'touchstart': {
        if (typeof props[key] === 'function') { element.untouchstart(); element.touchstart(props.touchstart); }
        break;
      }
      case 'transform': {
        if (typeof props[key] === 'string') { element.transform(props.transform); }
        break;
      }
      case 'translate': {
        if (typeof props[key] === 'object') { element.translate(props.translate.x, props.translate.y); }
        break;
      }
      }
    }
    // fix raphael #491
    if (Raphael.svg && element.node && element.node.nodeName === 'text' && element.node.childNodes.length > 0) {
      setTimeout(() => {
        if (element.node) {
          const nodeY = element.node.getAttribute('y');
          const childNode = element.node.childNodes[0] as HTMLElement;
          const childDy = childNode.getAttribute('dy');
          if (nodeY === childDy) {
            childNode.setAttribute('dy', '0');
          }
        }
      });
    }
  }
}

export function updateElement(element: RaphaelElement, type: string, props: any, callback: (ele: RaphaelElement) => {}) {
  switch (type) {
  case 'circle': {
    const { x, y, r } = props;
    element.attr({ cx: x, cy: y, r });
    break;
  }
  case 'ellipse': {
    const { x, y, rx, ry } = props;
    element.attr({ cx: x, cy: y, rx, ry });
    break;
  }
  case 'image': {
    const { src, x, y, width, height } = props;
    element.attr({ src, x, y, width, height });
    break;
  }
  case 'path': {
    let { d } = props;
    if (!d || d.length === 0) { d = 'M0,0L0,0Z'; }
    element.attr({ path: d });
    break;
  }
  case 'print': {
    const { x, y, text, fontFamily, fontWeight, fontStyle, fontStretch, fontSize, letterSpacing } = props;
    element.attr({ x, y, text, 'font-style': fontStyle, 'font-family': fontFamily, 'font-size': fontSize, 'font-weight': fontWeight, 'font-stretch': fontStretch, 'letter-scpacing': letterSpacing });
    break;
  }
  case 'rect': {
    element.attr(props);
    break;
  }
  case 'text': {
    const { x, y, text } = props;
    element.attr({ x, y, text });
    break;
  }
  }
  updateElementProps(element, props);
  if (callback) { callback(element); }
  return element;
}

export function removePaper(paper: RcRaphaelPaper) {
  const papers = PAPERS.filter(ele => ele === paper);
  if (papers.length > 0) { papers[0].remove(); }
}

export function removeSet(set: RaphaelSet) {
  removeElement(set);
}

export function removeElement(element: any) {
  const elements = ELEMENTS.filter(ele => ele.element === element);
  if (elements.length > 0) { elements[0].element.remove(); }
}

function convertProps(props: any) {
  const newProps: any = {};

  Object.keys(props).forEach(prop => {
    const newPropName = prop.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
    newProps[newPropName] = props[prop];
  });

  return newProps;
}

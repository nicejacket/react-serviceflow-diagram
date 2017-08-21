import * as React from 'react';
import BaseElementProps from '../BaseElementProps';
import Text from './Text';
import { createElement } from './Utils';

const TEXT_PADDING = 3;

export interface MultilineTextProps extends BaseElementProps {
  text: string;
  transform?: string;
  color?: string;
}

export default class MultilineText extends React.Component<MultilineTextProps, any> {
  static defaultProps = {
    x: 0,
    y: 0,
    color: '#373e48',
  }

  textPaper: Text = null;

  constructor(props: MultilineTextProps) {
    super(props);
    const { text } = props;
    this.state = { text };
  }

  componentDidMount() {
    const formattedText = this.formatText();
    this.setState({ text: formattedText });
  }

  private formatText = () => {
    const { width, text } = this.props;
    const textPaper = this.textPaper.getElement();
    let pText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    textPaper.attr({
      'text': pText
    });
    let letterWidth = textPaper.getBBox().width / pText.length;
    let removedLineBreaks = text.split('\n');
    let actualRowLength = 0;
    let formattedText: Array<any> = [];
    removedLineBreaks.forEach(senteces => {
      let words = senteces.split(' ');
      words.forEach(word => {
        let length = word.length;
        if (actualRowLength + (length * letterWidth) > width) {
          formattedText.push('\n');
          actualRowLength = 0;
        }
        actualRowLength += length * letterWidth;
        formattedText.push(word + ' ');
      });
      formattedText.push('\n');
      actualRowLength = 0;
    });
    return formattedText.join('');
  }

  render() {
    const { x, y, color, transform } = this.props;

    return (<Text
      ref={node => { this.textPaper = node; }}
      text={this.state.text}
      x={x + TEXT_PADDING}
      y={y + TEXT_PADDING}
      fill={color}
      fontSize={11}
      fontFamily="Arial"
      textAnchor="middle"
      transform={transform}
    />);
  }
}

import * as React from 'react';
import './RaphaelBasePaper.less';
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
export declare class RaphaelBasePaper extends React.Component<RaphaelBasePaperProps, any> {
    static defaultProps: {
        x: number;
        y: number;
        width: number;
        height: number;
        container: {
            style: {};
            className: string;
        };
        viewbox: string;
    };
    paper: any;
    container: React.ReactInstance;
    constructor(props: RaphaelBasePaperProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    onClickHandler: (e: any) => void;
    onMouseEnterHandler: (e: any) => void;
    getPaper(): any;
    genElementsContainer(): JSX.Element;
    render(): JSX.Element;
}

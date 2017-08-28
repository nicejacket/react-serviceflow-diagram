import { RaphaelBasePaperProps } from './RaphaelBasePaper';
export interface RcRaphaelPaper extends RaphaelPaper {
    id?: string;
}
export declare function createPaper(container: any, props: any): RcRaphaelPaper;
export declare function findParentById(id: string): any;
export declare function create(parentId: string, type: string, props: any): any;
export declare function createElement(parentId: string, type: string, props: any, callback: (ele: RaphaelElement) => {}): any;
export declare function createSet(parentId: string, props: any, callback: (set: RaphaelSet) => {}): any;
export declare function updatePaper(paper: RcRaphaelPaper, props: RaphaelBasePaperProps): void;
export declare function updateElementProps(element: any, props: any): void;
export declare function updateElement(element: RaphaelElement, type: string, props: any, callback: (ele: RaphaelElement) => {}): RaphaelElement;
export declare function removePaper(paper: RcRaphaelPaper): void;
export declare function removeSet(set: RaphaelSet): void;
export declare function removeElement(element: any): void;

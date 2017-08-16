export class Anchor {

  public static ANCHOR_TYPE: any = {
    main: 'main',
    middle: 'middle',
    first: 'first',
    last: 'last'
  };

  x: any = 0;
  y: any = 0;
  isFirst: any = false;
  isLast: any = false;
  typeIndex: any = 0;
  type: any = Anchor.ANCHOR_TYPE.main;

  constructor(type: any, x: any, y: any) {
    this.x = x;
    this.y = y;
    this.type = (type === Anchor.ANCHOR_TYPE.middle) ? Anchor.ANCHOR_TYPE.middle : Anchor.ANCHOR_TYPE.main;
  }
}

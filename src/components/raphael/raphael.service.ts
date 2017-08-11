
declare let Raphael: any;

export class RaphaelService {

  paper: any;
  width: number = 300;
  height: number = 400;
  private ctx: any;

  constructor() {
  }

  public getInstance(element: any): any {
    if (!this.paper) {
      this.ctx = element.nativeElement;
      this.refresh();
    }
    return this.paper;
  }

  private refresh(): any {
    this.ngOnDestroy();
    this.paper = this.getPaperBuilder(this.ctx);
  }

  public getPaperBuilder(ctx: any): any {
    if (typeof Raphael === 'undefined') {
      throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
    }
    let paper = new Raphael(ctx, this.width, this.height);
    // paper.setViewBox(0, 0, 583, 344.08374193550003, false);
    // paper.renderfix();
    return paper;
  }

  public ngOnDestroy(): any {
    if (this.paper) {
      this.paper.clear();
      this.paper = void 0;
    }
  }

  public setting(width: number, height: number): void {
    this.width = width;
    this.height = height;
  }

  public reset(): any {
    this.ngOnDestroy();
  }
}
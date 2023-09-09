import { Directive, DoCheck, Host, OnInit, Optional, Renderer2, Self, ViewContainerRef } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';

@Directive({
  selector: '[stylePaginator]'
})
export class StylePaginatorDirective implements OnInit, DoCheck {
  private actualIndex = this.matPaginator.pageIndex;

  constructor(
    @Host() @Self() @Optional() private readonly matPaginator: MatPaginator,
    private readonly viewRef: ViewContainerRef,
    private readonly renderer: Renderer2,
  ) {}

  ngDoCheck(): void {
    if(this.actualIndex != this.matPaginator.pageIndex) this.createButtons();
  }

  ngOnInit(): void {
    this.createButtons();
  }

  public createButtons() {
    this.actualIndex = this.matPaginator.pageIndex;
    const parent = this.viewRef.element.nativeElement.querySelector('div.mat-mdc-paginator-range-actions');
    const nextButton = this.viewRef.element.nativeElement.querySelector('button.mat-mdc-paginator-navigation-next');
    if (this.viewRef.element.nativeElement.querySelector('div.buttons-index')) {
      this.renderer.removeChild(parent, this.viewRef.element.nativeElement.querySelector('div.buttons-index'));
    }
    const buttonsContainer = this.renderer.createElement('div');
    this.renderer.addClass(buttonsContainer, 'buttons-index');
    this.renderer.insertBefore(parent, buttonsContainer, nextButton);
    [
      this.matPaginator.pageIndex-2,
      this.matPaginator.pageIndex-1,
      this.matPaginator.pageIndex,
      this.matPaginator.pageIndex+1,
      this.matPaginator.pageIndex+2,
    ].forEach(v => {
      if(v >= 0 && this.matPaginator.getNumberOfPages() > v) this.renderer.insertBefore(buttonsContainer, this.createPage(v), null);
    });
  }

  private createPage(pageNumber: number): MatButton {
    const linkBtn = this.renderer.createElement('button');
    this.renderer.setAttribute(linkBtn, 'mat-icon-button', '');
    this.renderer.addClass(linkBtn, 'mat-mdc-icon-button');
    this.renderer.setStyle(linkBtn, 'border', 'none');
    if(this.matPaginator.pageIndex == pageNumber){
      this.renderer.setAttribute(linkBtn, 'disabled', 'disabled');
    }
    else {
      this.renderer.setStyle(linkBtn, 'background', 'none');
      this.renderer.listen(linkBtn, 'mouseover', () => {
        this.renderer.removeStyle(linkBtn, 'background');
      });
      this.renderer.listen(linkBtn, 'mouseleave', () => {
        this.renderer.setStyle(linkBtn, 'background', 'none');
      });
    }
    
    this.renderer.listen(linkBtn, 'click', () => {
      this.matPaginator.pageIndex = pageNumber;
    });

    const text = this.renderer.createText(String(pageNumber+1));
    this.renderer.appendChild(linkBtn, text);
    return linkBtn;
  }

}

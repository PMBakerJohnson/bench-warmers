import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef: ElementRef) { }

  // tslint:disable-next-line: no-output-rename
  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }


}

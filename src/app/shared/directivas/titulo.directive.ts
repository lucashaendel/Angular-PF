import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitulo]'
})
export class TituloDirective {

  constructor(private elementRef:ElementRef) { 
    this.elementRef.nativeElement.style.fontSize ="20px";
    this.elementRef.nativeElement.style.textTransform ="uppercase"
  }

}

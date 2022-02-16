import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private elm: ElementRef) { 
  }
  ngOnInit(): void {
  }
  @HostListener('mouseenter') onmouseenter() {
    this.underlineElement('underline');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.underlineElement('');
  }
  private underlineElement(effect: string): void {
    this.elm.nativeElement.style.textDecoration = effect;
  }

}

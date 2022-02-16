import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightAffect]'
})
export class HighlightAffectDirective implements OnInit {
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

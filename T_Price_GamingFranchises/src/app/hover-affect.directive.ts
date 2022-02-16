import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() bold?: string;
  @Input() line?: string;
  constructor(private elm: ElementRef, private elm2: ElementRef) { 
  }
  ngOnInit(): void {
  }
  @HostListener('mouseenter') onmouseenter() {
    this.underlineElement(this.line);
    this.boldElement(this.bold);
  }
  @HostListener('mouseleave') onmouseleave() {
    this.underlineElement('');
    this.boldElement('');
  }
  private underlineElement(effect?: string): void {
    this.elm.nativeElement.style.textDecoration = effect;
  }
  private boldElement(effect?: string): void {
    this.elm.nativeElement.style.fontWeight = effect;
  }

}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() bold?: string;
  @Input() line?: string;
  @Input() card?: string;
  constructor(private elm: ElementRef, private elm2: ElementRef) { 
  }
  ngOnInit(): void {
  }
  @HostListener('mouseenter') onmouseenter() {
    this.underlineElement(this.line);
    this.boldElement(this.bold);
    this.borderElement(this.card);
  }
  @HostListener('mouseleave') onmouseleave() {
    this.underlineElement('');
    this.boldElement('');
    this.borderElement('');
  }
  private underlineElement(effect?: string): void {
    this.elm.nativeElement.style.textDecoration = effect;
  }
  private boldElement(effect?: string): void {
    this.elm.nativeElement.style.fontWeight = effect;
  }
  private borderElement(effect?: string): void {
    if(this.elm.nativeElement.classList.contains('first')) {
      this.elm.nativeElement.style.border = effect;
    }
  }
}

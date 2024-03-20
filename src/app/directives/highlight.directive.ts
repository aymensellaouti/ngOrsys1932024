import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() in = 'yellow';
  @Input() out = 'red';
  /**
  * Quels attributs je gére
  */
  @HostBinding('style.backgroundColor') bgc = this.out;

  @HostBinding('innerHTML') contenuDeLaDiv = 'Du text';
  constructor(
    // Injecttion de dépendance
    private element: ElementRef
  ) { }
  //On a déja le HTML et L'objet du composant tout est prêt
  ngOnInit(): void {
    this.bgc = this.out;
  }
  /**
   * Quel comportement je gére
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
    this.element.nativeElement.innerHTML = 'IN';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
    this.element.nativeElement.innerHTML = 'OUT';
  }

}

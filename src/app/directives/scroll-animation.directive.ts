import { AfterViewInit, Directive, ElementRef, Renderer2 , Input} from "@angular/core";

interface ScrollAnimateOptions {
    animateCss?: string;
  }

@Directive({
    selector: '[appScrollAnimate]',
    standalone: true,
    exportAs: '[appScrollAnimate]',
})
export class ScrollAnimateDirective implements AfterViewInit {
    @Input('appScrollAnimate') options: ScrollAnimateOptions = {};
    private isVisible = false;  
    private debounceTimer: any;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngAfterViewInit() {
        const animateCss = this.options.animateCss || '';
        
        const observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !this.isVisible) {
              this.isVisible = true;
              this.renderer.addClass(this.el.nativeElement, animateCss);
            } else {
              this.isVisible = false;
              this.renderer.removeClass(this.el.nativeElement, animateCss);
            }
          }
        }, { threshold: [.5] });
    
        observer.observe(this.el.nativeElement);
      }
}
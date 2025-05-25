import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {TranslateModule} from "@ngx-translate/core";
import { ScrollBounceDirective } from '../../../directives/scroll-bounce.directive'
import { ScrollAnimateDirective } from '../../../directives/scroll-animation.directive';
import { MenuComponent } from './menu/menu.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-landing-page-mobile',
  standalone: true,
  imports: [TranslateModule, ScrollBounceDirective, ScrollAnimateDirective, MenuComponent, NgStyle],
  templateUrl: './landing-page-mobile.component.html',
  styleUrl: './landing-page-mobile.component.scss'
})
export class LandingPageMobileComponent {
  @ViewChild('logoImg') logoImgRef!: ElementRef;
  showMenu = false;
  wh = 0;
  top = 0;
  left= 0;
  constructor(private translate: TranslateService) {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateLayout();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateLayout();
  }

  calculateLayout() {
    const el = this.logoImgRef.nativeElement as HTMLElement;
      let menuH = 72 + 25;
      let lower = el.offsetHeight < el.offsetWidth ? el.offsetHeight : el.offsetWidth;
      lower += 25;
      let t = el.offsetTop  + menuH - 20;
      this.wh = lower; // or offsetWidth
      this.top = t;
      this.left = (window.innerWidth - this.wh) / 2;
  }
}

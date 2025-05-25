import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {TranslateModule} from "@ngx-translate/core";
import { ScrollBounceDirective } from '../../directives/scroll-bounce.directive'
import { ScrollAnimateDirective } from '../../directives/scroll-animation.directive';
import { LandingPageMobileComponent } from "./landing-page-mobile/landing-page-mobile.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule, ScrollBounceDirective, ScrollAnimateDirective, LandingPageMobileComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private translate: TranslateService) {
  }
}

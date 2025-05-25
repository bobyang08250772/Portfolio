import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ScrollBounceDirective } from '../../directives/scroll-bounce.directive'
import { LangSwitcherComponent } from '../../shared/lang-switcher/lang-switcher.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ScrollBounceDirective, LangSwitcherComponent, TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
    
  constructor(private translate: TranslateService) {

  }

}

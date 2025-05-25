import { Component, Input } from '@angular/core';
import { LangSwitcherComponent } from '../lang-switcher/lang-switcher.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LangSwitcherComponent, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input()title: string = "";

  constructor(private location: Location, private translate: TranslateService) {}

  goBack() {
    this.location.back();
  }
}

import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './lang-switcher.component.html',
  styleUrl: './lang-switcher.component.scss'
})
export class LangSwitcherComponent implements OnInit {
  langs: string[] = ['DE', 'EN', 'ZH'];
  currentLange: string = "DE";

  constructor(private translate: TranslateService) {
    this.currentLange = this.translate.currentLang.toUpperCase();
  }

  ngOnInit(): void {

  }

  changeLange(lang: string) {
    this.currentLange = lang;
    this.translate.use(lang.toLowerCase());
    localStorage.setItem('currentLange', this.currentLange.toLowerCase());
  }
}

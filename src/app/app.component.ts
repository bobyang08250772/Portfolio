import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, TranslateModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  currentLang: string = "";

  constructor(private translate: TranslateService, private router: Router,  @Inject(DOCUMENT) private document: Document) {
    this.translate.addLangs(['de', 'en', 'zh']);

    let storedLang = localStorage.getItem('currentLange');
    if (storedLang) {
      this.setLang(storedLang);
    } else {
      this.setLang('de');
    }
  }

  setLang(l: string) {
    this.translate.setDefaultLang(l);
    this.currentLang = l;
    this.translate.use(l);
  }

  ngOnInit(): void {
    
  }

}

import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from "../shared/header/header.component";
import { TranslateService } from '@ngx-translate/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  title = 'Legal Notice';
  currentLang = '';

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
    
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });  
  }
}

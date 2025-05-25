import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer-mobile',
  standalone:true,
  imports: [TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './footer-mobile.component.html',
  styleUrl: './footer-mobile.component.scss'
})
export class FooterMobileComponent {

}

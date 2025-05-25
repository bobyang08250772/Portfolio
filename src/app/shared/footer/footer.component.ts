import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink, RouterLinkActive } from '@angular/router';
import { FooterMobileComponent } from "../footer-mobile/footer-mobile.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive, FooterMobileComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

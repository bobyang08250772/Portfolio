import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import { ScrollBounceDirective } from '../../../directives/scroll-bounce.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollAnimateDirective } from '../../../directives/scroll-animation.directive';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Contact {
  name: string,
  email: string,
  msg: string,
}

@Component({
  selector: 'app-contact-me-mobile',
  standalone: true,
  imports: [TranslateModule, CommonModule, ScrollBounceDirective, RouterLink, RouterLinkActive, ScrollAnimateDirective, FormsModule],
  templateUrl: './contact-me-mobile.component.html',
  styleUrl: './contact-me-mobile.component.scss'
})
export class ContactMeMobileComponent {
  @Input() scrollContainer!: HTMLElement;
  isChecked: boolean = false;

  nameValid: boolean = true;
  emailValid: boolean = true;
  emailInvalidMsg: string =  'contact.emailrequired';
  msgValid: boolean = true;
  isShowingSuccessMsg = false;
  post = {
      endPoint: 'https://portfolio.yangxin.de/sendMail.php',
      body: (payload: any) => JSON.stringify(payload),
      options: {
        headers: {
          'Content-Type': 'text/plain',
          responseType: 'text',
        },
      },
  }
  http = inject(HttpClient);

  contact: Contact = {name:'', email:'', msg: ''};
  constructor() {
    
  }

  clickCb() {
    
    this.isChecked = !this.isChecked;
  }

  onSumbmitNgForm(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted) {
      console.log(this.contact);
    }
  }

  onSumbmit(myForm: NgForm) {
    const b = this.checkFileds();
    if (b) {
      this.http.post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => {
            this.reset(myForm);
          },
          error: (error) => {
            console.error('Server error:', error);
          },
          complete: () => console.info('send post complete'),
        });
    } 
  }

  reset(myForm: NgForm) {
    this.clickCb();
    this.contact.name = '';
    this.contact.email = '';
    this.contact.msg = '';
    this.isShowingSuccessMsg = true;
    setTimeout(() => {
      this.isShowingSuccessMsg =false;
    }, 3000);
  }

  checkMail() {
    if (this.contact.email.trim().length <= 0) {
      this.emailValid = false;
      this.emailInvalidMsg =  'contact.emailrequired';
      this.contact.email = '';
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.emailValid = emailRegex.test(this.contact.email.trim());
      if(!this.emailValid) {
        this.emailInvalidMsg = 'contact.emailinvalid';
        this.contact.email = '';
      }
    }
  }

  checkFileds() {
    this.nameValid = this.contact.name.trim().length  > 0;
    if (!this.nameValid) this.contact.name = '';
    this.msgValid = this.contact.msg.trim().length  > 0;
    if (!this.msgValid) this.contact.msg = '';
    this.checkMail();

    if (!this.nameValid || !this.msgValid || !this.emailValid) {
      return false;
    } else {
      return true;
    }
  }

}

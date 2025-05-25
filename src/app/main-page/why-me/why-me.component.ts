import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { ScrollBounceDirective } from '../../directives/scroll-bounce.directive';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import {TranslateModule} from "@ngx-translate/core";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [ScrollBounceDirective, TranslateModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent implements OnDestroy {


  typedPart1 = '';
  typedPart2 = '';

  part1 = '';
  part2 = '';
  
  typingTimeoutId :number | null = null;
  showImage = false;
  currentSpan = 1;
  currentIndex = 0;
  currentText = 0;
  isTyping = true;

  typingSpeed = 100;
  private langChangeSub?: Subscription;

  langsArr = [
    ['intro.iam', 'intro.city'],
    ['intro.iamremote', 'intro.remote'],
    ['intro.iamrelocate', 'intro.relocate'],
  ];

  constructor(private translate: TranslateService) {
    this.initTyping();
    this.langChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.initTyping();
    });
    
  }

  initTyping() {
    this.clearTypingTimeout();
    const [p1, p2] = this.langsArr[this.currentText]
    this.translate.get(this.langsArr[this.currentText]).subscribe(translations => {
      this.part1 = translations[p1];
      this.part2 = translations[p2];

      this.resetTypingState();
      this.typeNextChar();
    });
  }

  private resetTypingState(): void {
    this.typedPart1 = '';
    this.typedPart2 = '';
    this.currentSpan = 1;
    this.currentIndex = 0;
    this.isTyping = true;
  }

  typeNextChar() {
    if (this.currentSpan === 1) {
      this.handleImage();
    } else if (this.currentSpan === 2) {
      this.handleFirstSpan();
    } else if (this.currentSpan === 3) {
      this.handleSecondSpan();
    }
    this.typingTimeoutId = window.setTimeout(() => this.typeNextChar(), this.typingSpeed);
  }
 
  handleImage() {
    if (this.isTyping) {
      this.showImage = true;
      this.currentSpan = 2;
    } else {
      this.showImage = false;
      setTimeout(() => {
        this.currentText++;
        if (this.currentText == 3) this.currentText = 0;
        this.initTyping();
      }, this.typingSpeed);
    }
  }

  handleFirstSpan() {
    if(this.isTyping) {
      if (this.currentIndex < this.part1.length) {
        this.typedPart1 += this.part1[this.currentIndex++];
      } else {
        this.currentSpan = 3;
        this.currentIndex = 0;
      }
    } else {
      if (this.currentIndex > -1) {
        this.typedPart1 = this.part1.substring(0, this.currentIndex--);
      } else {
        this.currentSpan = 1;
      }
    }
  }

  handleSecondSpan() {
    if (this.isTyping) {
      if (this.currentIndex < this.part2.length) {
        this.typedPart2 += this.part2[this.currentIndex++];
      } else {
        this.isTyping = false;
      }
    } else {
      if (this.currentIndex > -1) {
        this.typedPart2 = this.part2.substring(0, this.currentIndex--);
      } else {
        this.currentSpan = 2;
        this.currentIndex = this.part1.length;
      }
    }
  }

  clearTypingTimeout() {
    if (this.typingTimeoutId !== null) {
      clearTimeout(this.typingTimeoutId);
      this.typingTimeoutId = null;
    }
  }

  ngOnDestroy() {
    this.langChangeSub?.unsubscribe();
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { WhyMeComponent } from "./why-me/why-me.component";
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LandingPageComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, ContactMeComponent, NavComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  @ViewChild('scrollArea', { static: true }) scrollArea!: ElementRef<HTMLElement>;
}

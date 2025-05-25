import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import { ScrollBounceDirective } from '../../directives/scroll-bounce.directive'
import { ScrollAnimateDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, ScrollAnimateDirective, ScrollBounceDirective],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skillArr: any [] = [
    {name:'Angular', url:'angular'}, 
    {name:'TypeScript', url:'typescript'},
    {name:'JaveScript', url:'javascript'},
    {name:'HTML', url:'html'},
    {name:'CSS', url:'css'},
    {name:'Rest-Api', url:'restapi'},
    {name:'Firebase', url:'firebase'},
    {name:'GIT', url:'git'},
    {name:'Material Design', url:'design'},
    {name:'Scrum', url:'scrum'},
    {name:'SQL', url:'sql'},
  ];
}

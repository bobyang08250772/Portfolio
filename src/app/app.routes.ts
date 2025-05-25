import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';


export const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: 'private-policy', component: PrivatePolicyComponent},
];

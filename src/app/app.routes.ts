import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent }, //In der entsprechenden componetne die href="imprint" beim <a> setzten
  { path: 'privacyPolicy', component: PrivacyPolicyComponent }, //In der entsprechenden componetne die href="privacyPolicy" beim <a> setzten
];

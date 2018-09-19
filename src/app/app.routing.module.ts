import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { SpindleReportsComponent } from './spindle-reports/spindle-reports.component';
import { SpindleService } from './service/SpindleMachineDetailsService.service';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';

const routes: Routes = [
  { path: 'reports', component: SpindleReportsComponent },
  { path: 'settingsmenu', component: SettingsMenuComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [SpindleService
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
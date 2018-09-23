import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { SpindleReportsComponent } from './spindle-reports/spindle-reports.component';
import { SpindleService } from './service/SpindleMachineDetailsService.service';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

const routes: Routes = [
  { path: 'reports', component: SpindleReportsComponent },
  { path: 'settingsmenu', component: SettingsMenuComponent},
  { path: 'dashboard', component: DashBoardComponent}

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
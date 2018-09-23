import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpindleReportsComponent } from './spindle-reports/spindle-reports.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { DashBoardComponent } from './dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    SpindleReportsComponent,
    SettingsMenuComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

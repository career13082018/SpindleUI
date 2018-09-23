import { Component, OnInit } from '@angular/core';
import { SettingsMenuBean } from '../model/SettingsMenuBean.model';
import { Router } from '@angular/router';
import { SpindleService } from '../service/SpindleMachineDetailsService.service';


@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent {

  settingsMenu: SettingsMenuBean = new SettingsMenuBean();

  constructor(private router: Router, private spindleService: SpindleService) { }

  saveSettingsMenu(): void {
    this.spindleService.save(this.settingsMenu)
    .subscribe( data => {
      alert("Settings Menu details saved successfully");
    });
  };
}

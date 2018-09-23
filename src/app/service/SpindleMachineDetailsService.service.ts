import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpindleMachineDetailsBean } from "../model/SpindleMachineDetailsBean.model";
import { SettingsMenuBean } from "../model/SettingsMenuBean.model";


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SpindleService {

    constructor(private http:HttpClient){}

    private spindleUrl= 'http://localhost:8084/machine/spindles';
    //private userUrl = '/api';

    public getSpindleReports(){
        return this.http.get<SpindleMachineDetailsBean[]>(this.spindleUrl);
    }

    // public saveSpindle(){
    //     return this.http.post<SpindleMachineDetailsBean[]>(this.spindleUrl, SpindleMachineDetailsBean)
    // }
    public save(settingsMenu){
        return this.http.post<SettingsMenuBean[]>(this.spindleUrl, settingsMenu);
    }
}
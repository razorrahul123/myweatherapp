import {Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherService} from '../../app/services/weather.service';
import  {WeatherPage} from '../weather/weather';

@Component({
  selector: 'settings-home',
  templateUrl: 'settings.html',
  providers: [WeatherService]
})
export class SettingsPage implements OnInit{
    searchStr: string;
    defaultCity: string;
    results:any;

  constructor(public nav: NavController, private weatherService: WeatherService) {
    this.weatherService = weatherService;
    this.nav = nav;
  }

  ngOnInit(){
      this.getDefaultCity();
  }

  getQuery(){
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

  getDefaultCity(){
    if((<any>localStorage).city !== undefined){
      this.defaultCity = JSON.parse((<any>localStorage).city).name;
    }else {
      this.defaultCity = '';
    }
  }

  setDefaultCity(city){

    this.results = [];
    if(typeof(Storage) !== undefined){
      (<any>localStorage).city = JSON.stringify(city);
        this.searchStr = city.name;
        this.getDefaultCity();
    }else{
      console.log('LocalStorage Not Supported');
    }
  }

  saveChanges(){
    this.nav.setRoot(WeatherPage);
  }
}

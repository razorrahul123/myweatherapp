import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../app/services/weather.service';


@Component({
  selector: 'weather-home',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})
export class WeatherPage implements OnInit{

    weather: string;
    searchStr:string;
    results: any;
    zmw:any;


  constructor(private weatherService: WeatherService) {
      this.weatherService = weatherService;
      this.searchStr;
      this.zmw;

  }

  ngOnInit(){
    this.getDefaultCity();
      this.weatherService.getWeather(this.zmw)
        .subscribe(weather => {
          this.weather = weather.current_observation;
        });
  }

  getQuery(){
    this.weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;

      });
  }

  chooseCity(city){
    this.results = [];
    this.weatherService.getWeather(city.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });

  }
  getDefaultCity(){
    if((<any>localStorage).city !== undefined){
        this.zmw = JSON.parse((<any>localStorage).city).zmw;
    }else {
      this.zmw = '94125.1.99999';
    }
    }
}

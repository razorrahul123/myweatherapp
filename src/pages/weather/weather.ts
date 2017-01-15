import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../../app/services/weather.service';


@Component({
  selector: 'weather-home',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})
export class WeatherPage implements OnInit{
    city :string;
    state: string;
    weather: string;


  constructor(private weatherService: WeatherService) {
      this.weatherService = weatherService;
      this.city = 'Boston';
      this.state = 'MA';
  }

  ngOnInit(){
      this.weatherService.getWeather(this.city,this.state)
        .subscribe(weather => {
          this.weather = weather.current_observation;
        });
  }
}

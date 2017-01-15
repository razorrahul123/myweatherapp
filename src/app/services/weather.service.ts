import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{

    apiKey:any;
    conditionsUrl:string;
    static get parameters(){
      return [Http];
    }

    constructor(private http:Http){
      this.http = http;
      console.log('Service Connected');
      this.apiKey ='353de1909e8a1523';
      this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    }
    getWeather(city,state){
      return this.http.get(this.conditionsUrl+'/'+state + '/' +city+ '.json')
        .map(res => res.json());
    }
}

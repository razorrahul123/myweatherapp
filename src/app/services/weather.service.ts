import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService{

    apiKey:any;
    conditionsUrl:string;
    searchUrl: string;
    static get parameters(){
      return [Http];
    }

    constructor(private http:Http){
      this.http = http;
      console.log('Service Connected');
      this.apiKey ='353de1909e8a1523';
      this.conditionsUrl = 'http://localhost:8100/api/'+this.apiKey+'/conditions/q';
      this.searchUrl = 'http://localhost:8100/search/aq?query=';
    }
    getWeather(zmw){
      return this.http.get(this.conditionsUrl+'/zmw:'+zmw+'.json')
        .map(res => res.json());
    }

    searchCities(searchStr){
      return this.http.get(this.searchUrl+''+searchStr)
        .map(res => res.json());
    }
}

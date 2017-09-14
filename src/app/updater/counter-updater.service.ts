import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CurrentApiCallsService } from '../counter/current-api-calls.service';
import { TotalApiCallsService } from '../counter/total-api-calls.service';

@Injectable()
export class CounterUpdaterService {

  private interval;

  constructor(
    private currentApiCalls: CurrentApiCallsService,
    private totalApiCalls: TotalApiCallsService,
    private http: Http) {
    this.start();
  }

  start(): void {
    this.interval = setInterval(() => {
      this.http.get('http://192.168.1.100:8080/counter/currentCalls/').subscribe(res => {
        const json = res.json();
        this.currentApiCalls.visionApiCalls = json.visionApiCalls;
        this.currentApiCalls.translatedApiCharacters = json.translatedApiCharacters;
      });
    }, 250);
    this.interval = setInterval(() => {
      this.http.get('http://192.168.1.100:8080/counter/totalCalls/').subscribe(res => {
        const json = res.json();
        this.totalApiCalls.visionApiCalls = json.visionApiCalls;
        this.totalApiCalls.translatedApiCharacters = json.translatedApiCharacters;
      });
    }, 250);
  }

}

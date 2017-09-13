import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TranslatedTextService } from '../text/translated-text.service';

@Injectable()
export class TranslatedTextUpdaterService {

  private interval;
  public keys = Object.keys;

  constructor(private translatedTextService: TranslatedTextService, private http: Http) {
    this.start();
  }

  start(): void {
    this.interval = setInterval(() => {
      this.http.get('http://192.168.1.100:8080/dialogText/translated/').subscribe(res => {
        const json = res.json();
        this.translatedTextService.transmitter = json.transmitter;
        this.translatedTextService.message = json.message;
        this.translatedTextService.responses = json.responses;
      });
    }, 250);
  }

}

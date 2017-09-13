import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { OriginalTextService } from './original-text.service';

@Injectable()
export class OriginalTextUpdaterService {

  private interval;

  constructor(private originalTextService: OriginalTextService, private http: Http) {
    this.start();
  }

  start(): void {
    console.log("HERE");
    this.interval = setInterval(() => {
      console.log("Rulando");
      this.http.get('http://localhost:8080/dialogText/original/').subscribe(res => {
        const json = res.json();
        this.originalTextService.transmitter = json.transmitter;
        this.originalTextService.message = json.message;
        this.originalTextService.responses = json.responses;
        console.log(json.responses);
      });
    }, 3000);
  }

}

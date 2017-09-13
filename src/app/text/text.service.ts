import { Injectable } from '@angular/core';

@Injectable()
export class TextService {

  public transmitter;
  public message;
  public responses;

  constructor() {
    this.transmitter = '';
    this.message = '';
    this.responses = {};
  }

}

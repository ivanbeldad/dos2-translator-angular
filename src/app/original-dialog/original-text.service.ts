import { Injectable } from '@angular/core';

@Injectable()
export class OriginalTextService {

  public transmitter;
  public message;
  public responses;

  constructor() {
    this.transmitter = '';
    this.message = '';
    this.responses = {};
  }

}

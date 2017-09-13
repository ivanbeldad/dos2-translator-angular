import { Component, OnInit } from '@angular/core';
import { TranslatedTextService } from './translated-text.service';
import { TranslatedTextUpdaterService } from './translated-text-updater.service';

@Component({
  selector: 'app-translated-dialog',
  templateUrl: './translated-dialog.component.html',
  styleUrls: ['./translated-dialog.component.css']
})
export class TranslatedDialogComponent implements OnInit {

  public transmitter;
  public message;
  public responses;
  public keys = Object.keys;

  constructor(
    public translatedTextService: TranslatedTextService,
    public translatedTextUpdaterService: TranslatedTextUpdaterService,
  ) { }

  ngOnInit() {
    this.transmitter = 'Mr Sandman';
    this.message = '*Behind the Magister, a bloodied mass lies in a heap. Gore and limbs lie at odd angles; you can\'t make out\na face amid the mess.*';
    this.responses = [
      {
        index: 1,
        message: '*Avoid looking into the room. Between the lurching ship and the smell of blood, you feel a little sick.*',
      }, {
        index: 2,
        message: '*Peer into the room and ask what happened.*',
      },{
        index: 3,
        message: '*Take your leave.*',
      }
    ];
  }

}

import { Component, OnInit } from '@angular/core';
import { OriginalTextService } from './original-text.service';
import { OriginalTextUpdaterService } from './original-text-updater.service';

@Component({
  selector: 'app-original-dialog',
  templateUrl: './original-dialog.component.html',
  styleUrls: ['./original-dialog.component.css']
})
export class OriginalDialogComponent implements OnInit {

  public transmitter;
  public message;
  public responses;
  public keys = Object.keys;

  constructor(
    public originalTextService: OriginalTextService,
    public originalTextUpdaterService: OriginalTextUpdaterService,
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

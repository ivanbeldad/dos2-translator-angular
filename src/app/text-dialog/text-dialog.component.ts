import { Component, Input, OnInit } from '@angular/core';
import { OriginalTextService } from '../text/original-text.service';
import { TranslatedTextService } from '../text/translated-text.service';

@Component({
  selector: 'app-text-dialog',
  templateUrl: './text-dialog.component.html',
  styleUrls: ['./text-dialog.component.css']
})
export class TextDialogComponent implements OnInit {

  @Input()
  public textService: OriginalTextService | TranslatedTextService;
  public keys = Object.keys;

  constructor() {
  }

  ngOnInit() {
  }

}

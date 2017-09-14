import { Component } from '@angular/core';
import { OriginalTextService } from './text/original-text.service';
import { TranslatedTextService } from './text/translated-text.service';
import { OriginalTextUpdaterService } from './updater/original-text-updater.service';
import { TranslatedTextUpdaterService } from './updater/translated-text-updater.service';
import { CounterUpdaterService } from './updater/counter-updater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public originalText: OriginalTextService,
    public translatedText: TranslatedTextService,
    public originTextUpdater: OriginalTextUpdaterService,
    public translatedTextUpdater: TranslatedTextUpdaterService,
    public counterUpdater: CounterUpdaterService) {
  }

}

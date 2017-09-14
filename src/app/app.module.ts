import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OriginalTextUpdaterService } from './updater/original-text-updater.service';
import { OriginalTextService } from './text/original-text.service';
import { HttpModule } from '@angular/http';
import { TranslatedTextService } from './text/translated-text.service';
import { TranslatedTextUpdaterService } from './updater/translated-text-updater.service';
import { TextDialogComponent } from './text-dialog-component/text-dialog.component';
import { CurrentApiCallsService } from './counter/current-api-calls.service';
import { TotalApiCallsService } from './counter/total-api-calls.service';
import { CounterUpdaterService } from './updater/counter-updater.service';

@NgModule({
  declarations: [
    AppComponent,
    TextDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    OriginalTextService,
    OriginalTextUpdaterService,
    TranslatedTextService,
    TranslatedTextUpdaterService,
    CurrentApiCallsService,
    TotalApiCallsService,
    CounterUpdaterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

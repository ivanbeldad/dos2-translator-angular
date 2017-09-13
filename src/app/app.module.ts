import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OriginalTextUpdaterService } from './updater/original-text-updater.service';
import { OriginalTextService } from './text/original-text.service';
import { HttpModule } from '@angular/http';
import { TranslatedTextService } from './text/translated-text.service';
import { TranslatedTextUpdaterService } from './updater/translated-text-updater.service';
import { TextDialogComponent } from './text-dialog/text-dialog.component';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OriginalTextUpdaterService } from './original-dialog/original-text-updater.service';
import { OriginalTextService } from './original-dialog/original-text.service';
import { HttpModule } from '@angular/http';
import { TranslatedTextService } from './translated-dialog/translated-text.service';
import { TranslatedTextUpdaterService } from './translated-dialog/translated-text-updater.service';
import { OriginalDialogComponent } from './original-dialog/original-dialog.component';
import { TranslatedDialogComponent } from './translated-dialog/translated-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    OriginalDialogComponent,
    TranslatedDialogComponent,
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

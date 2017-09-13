import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextDialogComponent } from './translated-dialog/translated-dialog.component';
import { OriginalTextUpdaterService } from './translated-dialog/original-text-updater.service';
import { OriginalTextService } from './translated-dialog/original-text.service';
import { HttpModule } from '@angular/http';

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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

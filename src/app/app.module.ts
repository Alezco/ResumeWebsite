import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { ScrollToModule } from 'ng2-scroll-to';
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { ContactService } from './contact/contact.service';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    ScrollToModule.forRoot(),
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

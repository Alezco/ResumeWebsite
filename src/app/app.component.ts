import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  lang: string = this._translateService.getBrowserLang();

  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(['en', 'fr']);
    this._translateService.setDefaultLang('fr');
    this._translateService.use(this.lang.match(/en|fr/) ? this.lang : 'fr');
  }

  public getResume(): string {
    const path = '../assets/documents/';
    return this.lang === 'fr' ? path + 'cv.pdf' : path + 'cv_en.pdf';
  }
}

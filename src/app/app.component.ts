import { Component, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Tour of heroes';

  
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['es', 'en']);
    translate.setDefaultLang('en');
  }
 
  useEnglish(en: string) {
    this.translate.use('en');
  }

  useSpanish(es: string) {
    this.translate.use('es')
  }
}

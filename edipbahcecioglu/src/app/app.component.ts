import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute = '';

  constructor(public router: Router, public translate: TranslateService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them

  } // constructor wird verwendet, wenn wir etwas außerhalb dieser Datei importieren wollen // Der Constructor ist auf public gestellt, dadurch lässt dich der Router von überall zugreifen
}

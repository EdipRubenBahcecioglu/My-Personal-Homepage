import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
 @Input() darkMode = true; // Mit @Input haben wir die Möglichkeit die Variable von au0erhalb der Scriptdatei zu bestimmen z.B. in der HTML Datei

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

const routes: Routes = [ // In diesem Array halten wir fest, welcher Selector/Componente angezeigt werden soll, wenn sich unser Link vom Projekt ändert. Hier drauf achten dass die Componente am Anfang dieser Datei importiert wird. Dies passiert automatisch wenn mann neue routes einfügt 
  {path: '', component: SlideshowComponent}, // Wenn unser Link (siehe Zeile 8) nichts hinterm / stehen hat dann wird unsere Slideshow angezeigt
  {path: 'imprint', component: ImprintComponent}, // Wenn unser Link z.B. edipbahcecioglu/imprirnt heißt, dann soll die Componente bzw. Selector imprint angezeigt werden
  {path: 'data-protection', component: DataProtectionComponent} // Neue Route hinzugefügt z.B. edipbahcecioglu.de/data-protection
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

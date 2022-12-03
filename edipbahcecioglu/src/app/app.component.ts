import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { // Wir implementieren die OnInit Funktion d.h. alles innerhalb dieser OnInit Funktion wird beim Laden der Seite ausgeführt (wie onload) // Innerhlab dieser Klammer wird unser ganzes TypeScript bzw. JavaScript Code geschrieben
  images = ['bbq.png', 'car.png', 'gaming.png']; // Angular erlaubt es uns eine Variable ohne let zu definieren 
  currentImage = 0;
  showImage = true; // Boolean-Variable d.h. die ist entweder false oder true 

  ngOnInit(){ // Alle Funktionen innerhalb dieser Klammer werden beim Laden der Seite ausgeführt
    this.updateImages(); // mit this.FUNKTON rufen wir eine Funktion außerhalb der OnInit Funktion auf
  }

  updateImages(){ // Angular erlaubt es uns eine Funktion auch ohne function davor zu definieren
    setInterval(() => {
     this.currentImage++;
     this.currentImage = this.currentImage % this.images.length; // Mithilfe von % wird currentImage nur solange erhöht, bis die Arraylänge von Images erreicht ist, danach fängt es wieder vom Arraystart an // ModuloOperator % Rechnet den den mathematischen Rest aus z.B. 5 % 2 = 1, weil 5/2 = 2 Rest 1
     this.showImage = false;

     setTimeout(()=>{
      this.showImage = true;
     }, 10);
    }, 8000)
  }






}

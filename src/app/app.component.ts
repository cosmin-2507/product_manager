import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Product_manager';
  public categorii: string[] = ["Laptop Tablete & Telefoane",
    "PC, Periferice & Software",
    "TV, Audio-Video & Foto",
    "Electrocasnice & Climatizare",
    "Gaming, Carti & Birotica",
    "Bacanie",
    "Fashion",
    "Ingrijire personala",
    "Casa, Gradina & Bricolaj",
    "Sport & Activitati in aer liber",
    "Auto, Moto & RCA",
    "Jucarii, Copii & Bebe",
  ];
  public toggleCat: boolean = false;


  toggleCategorii() {
    this.toggleCat = !this.toggleCat;
  }

}

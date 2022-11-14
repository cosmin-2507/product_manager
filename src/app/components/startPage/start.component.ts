import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/interface';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})



export class startComponent {
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
  public toggleCar: boolean = false;
  public produs: IProduct[] = [];
  public filteredByCart: IProduct[] = [];
  public filterArray: IProduct[] = [];


  constructor() {
    if (localStorage.getItem("produs")) {
      this.produs = JSON.parse(localStorage.getItem("produs")!)
    }
    this.filterArray = this.produs;
  }


  toggleCategorii() {
    this.toggleCat = !this.toggleCat;
  }
  toggleCart() {
    this.toggleCar = !this.toggleCar;
  }

  addToCart(id: string) {
    var varProduct = this.produs.find(t => t.id == id)!
    varProduct.cart = true
    this.filterCal()
  }
  filterCal() {
    this.filteredByCart = this.produs.filter(t => t.cart == true)
    console.log(this.filteredByCart);
  }

  filterProduse(categorie: string) {
    this.filterArray = this.produs.filter(p => p.categ == categorie);
  }
  changeImageLeft(id: string) {
    var index = this.produs.findIndex(t => t.id == id)!
    var imagesLength = this.produs[index].images.length;
    if (this.produs[index].currentIndex == 0) {
      this.produs[index].currentIndex = imagesLength - 1;
    }
    else {
      this.produs[index].currentIndex = this.produs[index].currentIndex - 1;
    }
    console.log(this.produs[index].currentIndex);


  }
  changeImageRight(id: string) {
    var index = this.produs.findIndex(t => t.id == id)!
    var imagesLength = this.produs[index].images.length;
    if (this.produs[index].currentIndex < imagesLength - 1) {
      this.produs[index].currentIndex = this.produs[index].currentIndex + 1;
    }
    else {
      this.produs[index].currentIndex = 0;
    }
    console.log(this.produs, id, imagesLength, index);


  }




}

import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/interface';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})



export class formComponent {
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
  public produs: IProduct | null = null;
  public NumeProdus: string = '';
  public NumarProduse: string = '';
  public PretProdus: string = '';
  public CategorieProdus: string = '';
  public imageUrl: any[] = [];
  public produse: IProduct[] = [];


  save() {
    if (localStorage.getItem("produs")) {
      this.produse = JSON.parse(localStorage.getItem("produs")!)
    }
    this.produse.push(this.produs!);
    localStorage.setItem("produs", JSON.stringify(this.produse));

  }


  addNewProduct() {
    var newId = uuidv4()
    var varProduct: IProduct = {
      images: this.imageUrl,
      currentIndex: 0,
      nume: this.NumeProdus,
      nrStock: this.NumarProduse,
      pret: this.PretProdus,
      id: newId,
      categ: this.CategorieProdus,
      cart: false
    }

    this.produs = varProduct;
    console.log(varProduct);
    console.log(this.produs);
    this.save();


  }

  toggleCategorii() {
    this.toggleCat = !this.toggleCat;
  }

  selectCateg(i: number) {
    this.CategorieProdus = this.categorii[i]
  }

  getBase64Image(img: any) {


    for (let image of img.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (_event) => {
        this.imageUrl.push(_event.target!.result);
        console.log(this.imageUrl, _event);

      }
    }


  }

}


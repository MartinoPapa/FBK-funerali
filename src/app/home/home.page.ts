import { Component } from '@angular/core';
import { TipoDefunto } from '../domain/tipo-defunto';
import { TipoFunerale } from '../domain/tipo-funerale';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Defunto: TipoDefunto = new TipoDefunto("Papa Martino", "Mattarello", "oggi", "13 maggio 2001", 14, 98, 13);
  Funerale: TipoFunerale = new TipoFunerale("Papa Martino", "Mattarello", "oggi", "13 maggio 2001", "34", "3333", "CIao")
  isFunerale: boolean = true;
  isFuunerale: boolean = false;
  isRicercaOpen = false;

  constructor() {
  }
  ngOnInit() {
    document.getElementById("ricercaNome").style.display = "none";
    document.getElementById("da").style.display = "none";
    document.getElementById("a").style.display = "none";
    document.getElementById("btnOpen").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0V0z'/><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
  }

  Ricerca() {

  }

  OpenCloseRicerca() {
    if (!this.isRicercaOpen) {
      document.getElementById("ricercaNome").style.display = "inherit";
      document.getElementById("da").style.display = "inherit";
      document.getElementById("a").style.display = "inherit";
      document.getElementById("btnOpen").innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0V0z'/><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'/></svg>";
    }
    else {
      document.getElementById("ricercaNome").style.display = "none";
      document.getElementById("da").style.display = "none";
      document.getElementById("a").style.display = "none";
      document.getElementById("btnOpen").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path fill='none' d='M0 0h24v24H0V0z'/><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>";
    }
    this.isRicercaOpen = !this.isRicercaOpen;
  }

}

import { Component } from '@angular/core';
import { TipoDefunto } from '../domain/tipo-defunto';
import { TipoFunerale } from '../domain/tipo-funerale';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Defunto : TipoDefunto = new TipoDefunto("Papa Martino","Mattarello","oggi","13 maggio 2001",14,98,13);
  Funerale : TipoFunerale = new TipoFunerale("Papa Martino","Mattarello","oggi","13 maggio 2001","34","3333","CIao")
  isFunerale:boolean = true;
  isFuunerale:boolean = false;
  constructor()
  {
  }
  ngOnInit()
  {
  }
}

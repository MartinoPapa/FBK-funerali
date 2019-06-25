import { Component, ViewChild } from '@angular/core';
import { TipoDefunto } from '../domain/tipo-defunto';
import { TipoFunerale } from '../domain/tipo-funerale';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  Defunto: TipoDefunto = new TipoDefunto("Papa Sepolto", "ieri", "oggi", "Mattarello", 14, 98, 13); //defunto test
  Funerale: TipoFunerale = new TipoFunerale("Papa Funerale", "ieri", "oggi", "Trento", "34", "3333", "CIao"); //funerale test
  isRicercaOpen = false; //true se la barra di ricerca è aperta
  isGiorniOpen = false; //true se la barra dei giorni è aperta
  isSepoltura = false; //controlla se ci troviamo in schermata funerali o sepoltura
  linkMappa = "https://www.google.com/maps/search/?api=1&query="; //link a maps

  vetDefunti: TipoDefunto[] = [];
  vetFunerali: TipoFunerale[] = [];

  date = new Date(); //data odierna

  constructor(private social: SocialSharing) { }

  ngOnInit() {
    this.vetFunerali.push(this.Funerale); //aggiunti per test
    this.vetFunerali.push(this.Funerale);
    this.vetDefunti.push(this.Defunto);
    document.getElementById("titleSepoltura").style.fontWeight = "300"; 
    document.getElementById("titleFunerali").style.fontWeight = "600"; //evidenzia il titolo dei funerali
    document.getElementById("ricercaNome").style.display = "none"; //nasconde la ricerca per nome
    document.getElementById("barraGiorni").style.height = "0px"; //nasconde la barra dei giorni
    document.getElementById("data").innerHTML = this.GetFormattedData();
    document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="search"></ion-icon>'; //imposta come svg in alto a destra la lente

  }

  //restituisce la data formattata
  GetFormattedData() {
    return this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear();
  }

  //vai al giorno successivo
  NextDay() {
    this.date.setDate(this.date.getDate() + 1);
    document.getElementById("data").innerHTML = this.GetFormattedData();
  }

  //vai al giorno precedente
  PreviusDay() {
    this.date.setDate(this.date.getDate() - 1);
    document.getElementById("data").innerHTML = this.GetFormattedData();
  }


  Ricerca() {

  }

  //condividi da mobile per i funerali
  CondividiFunerali(i) {
    this.social.canShareViaEmail().then(() => {
      this.social.share(this.vetFunerali[i].nominativo + " " + this.vetFunerali[i].luogoFunerale, null, null);
    }).catch(() => {
      alert("Il servizio di condivisione non è disponibile per questo dispositivo");
    });
  }

  //condividi da mobile per sepolture
  CondividSepolture(i) {
    this.social.canShareViaEmail().then(() => {
      this.social.share(this.vetDefunti[i].nominativo + " " + this.vetDefunti[i].paeseSepoltura, null, null);
    }).catch(() => {
      alert("Il servizio di condivisione non è disponibile per questo dispositivo");
    });
  }

  //apre maps
  IndicazioniFunerali(i) {
    window.open(encodeURI(this.linkMappa + this.vetFunerali[i].luogoFunerale), '_system')
  }

  //apre maps
  IndicazioniSepolture(i) {
    window.open(encodeURI(this.linkMappa + this.vetDefunti[i].paeseSepoltura), '_system')
  }

  //mostra il div contenente i funerali e nasconde le sepolture
  Funerali() {
    document.getElementById("sepolture").style.display = "none";
    document.getElementById("funerali").style.display = "inherit";
    document.getElementById("titleSepoltura").style.fontWeight = "300";
    document.getElementById("titleFunerali").style.fontWeight = "600";
    this.isSepoltura = false;
    this.CloseRicerca();
  }

  //mostra il div contenente le sepolture e nasconde i funerali
  Sepolture() {
    document.getElementById("sepolture").style.display = "inherit";
    document.getElementById("funerali").style.display = "none";
    document.getElementById("titleSepoltura").style.fontWeight = "600";
    document.getElementById("titleFunerali").style.fontWeight = "300";
    this.isSepoltura = true;
    this.CloseRicerca();
  }

  //gestisce l'apertura e la chiusura della ricerca
  OpenCloseRicerca() {
    if (!this.isRicercaOpen) {
      document.getElementById("ricercaNome").style.display = "inherit";
      if (this.isSepoltura) {
        document.getElementById("buttonGiorni").style.visibility = "hidden"; //se è sepoltura nasconde la barra giorni
      }
      else {
        document.getElementById("buttonGiorni").style.visibility = "visible";
      }
      document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="close"></ion-icon>'; //imposta come svg in alto a destra una croce
      this.isRicercaOpen = true;
    }
    else {
      this.CloseRicerca();
    }
  }

  //test per l'infinity scroll
  CaricaDati(){
    this.vetFunerali.push(this.Funerale);
    this.vetFunerali.push(this.Funerale);
    this.vetFunerali.push(this.Funerale);
    this.vetFunerali.push(this.Funerale);
    this.infiniteScroll.complete();
  }

  //chiude la ricerca
  CloseRicerca() {
    document.getElementById("ricercaNome").style.display = "none";
    document.getElementById("barraGiorni").style.height = "0px";
    document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="search"></ion-icon>';
    this.isRicercaOpen = false;
    this.isGiorniOpen = false;
  }

  //apre la barra dei giorni
  OpenBarraGiorni() {
    if (this.isGiorniOpen) {
      document.getElementById("barraGiorni").style.height = "0px";
    }
    else {
      document.getElementById("barraGiorni").style.height = "auto";
    }
    this.isGiorniOpen = !this.isGiorniOpen;
  }
  
  //raggiunge la cima della pagina
  GoOnTop(){
    document.getElementById("top").scrollIntoView();
  }
}

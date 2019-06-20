import { Component } from '@angular/core';
import { TipoDefunto } from '../domain/tipo-defunto';
import { TipoFunerale } from '../domain/tipo-funerale';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Defunto: TipoDefunto = new TipoDefunto("Papa Sepolto", "ieri", "oggi", "Mattarello", 14, 98, 13);
  Funerale: TipoFunerale = new TipoFunerale("Papa Funerale", "ieri", "oggi", "Trento", "34", "3333", "CIao")
  isRicercaOpen = false;
  isGiorniOpen = false;
  isFunerale = true;
  isSepoltura = false;
  linkMappa = "https://www.google.com/maps/search/?api=1&query=";

  vetDefunti: TipoDefunto[] = [];
  vetFunerali: TipoFunerale[] = [];

  date = new Date();

  constructor(private social: SocialSharing) { }

  ngOnInit() {
    this.vetFunerali.push(this.Funerale);
    this.vetDefunti.push(this.Defunto);
    document.getElementById("titleSepoltura").style.fontWeight = "300";
    document.getElementById("titleFunerali").style.fontWeight = "600";
    document.getElementById("ricercaNome").style.display = "none";
    document.getElementById("barraGiorni").style.height = "0px";
    document.getElementById("data").innerHTML = this.GetFormattedData();
    document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="search"></ion-icon>';

  }

  GetFormattedData() {
    return this.date.getDate() + "/" + this.date.getMonth() + "/" + this.date.getFullYear();
  }

  NextDay() {
    this.date.setDate(this.date.getDate() + 1);
    document.getElementById("data").innerHTML = this.GetFormattedData();
  }

  PreviusDay() {
    this.date.setDate(this.date.getDate() - 1);
    document.getElementById("data").innerHTML = this.GetFormattedData();
  }

  Ricerca() {

  }

  CondividiFunerali(i) {
    this.social.canShareViaEmail().then(() => {
      this.social.share(this.vetFunerali[i].nominativo + " " + this.vetFunerali[i].luogoFunerale, null, null);
    }).catch(() => {
      alert("Il servizio di condivisione non è disponibile per questo dispositivo");
    });
  }

  CondividSepolture(i) {
    this.social.canShareViaEmail().then(() => {
      this.social.share(this.vetDefunti[i].nominativo + " " + this.vetDefunti[i].paeseSepoltura, null, null);
    }).catch(() => {
      alert("Il servizio di condivisione non è disponibile per questo dispositivo");
    });
  }
  IndicazioniFunerali(i) {
    window.open(encodeURI(this.linkMappa + this.vetFunerali[i].luogoFunerale), '_system')
  }

  IndicazioniSepolture(i) {
    window.open(encodeURI(this.linkMappa + this.vetDefunti[i].paeseSepoltura), '_system')
  }

  Funerali() {
    document.getElementById("sepolture").style.display = "none";
    document.getElementById("funerali").style.display = "inherit";
    document.getElementById("titleSepoltura").style.fontWeight = "300";
    document.getElementById("titleFunerali").style.fontWeight = "600";
    this.isSepoltura = false;
    this.CloseRicerca();
  }

  Sepolture() {
    document.getElementById("sepolture").style.display = "inherit";
    document.getElementById("funerali").style.display = "none";
    document.getElementById("titleSepoltura").style.fontWeight = "600";
    document.getElementById("titleFunerali").style.fontWeight = "300";
    this.isSepoltura = true;
    this.CloseRicerca();
  }

  OpenCloseRicerca() {
    if (!this.isRicercaOpen) {
      document.getElementById("ricercaNome").style.display = "inherit";
      if (this.isSepoltura) {
        document.getElementById("buttonGiorni").style.visibility = "hidden";
      }
      else {
        document.getElementById("buttonGiorni").style.visibility = "visible";
      }
      document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="close"></ion-icon>';
      this.isRicercaOpen = true;

    }
    else {
      this.CloseRicerca();
    }
  }

  CloseRicerca() {
    document.getElementById("ricercaNome").style.display = "none";
    document.getElementById("barraGiorni").style.height = "0px";
    document.getElementById("btnOpen").innerHTML = '<ion-icon color="dark" name="search"></ion-icon>';
    this.isRicercaOpen = false;
    this.isGiorniOpen = false;
  }

  OpenBarraGiorni() {
    if (this.isGiorniOpen) {
      document.getElementById("barraGiorni").style.height = "0px";
    }
    else {
      document.getElementById("barraGiorni").style.height = "auto";
    }
    this.isGiorniOpen = !this.isGiorniOpen;
  }
}

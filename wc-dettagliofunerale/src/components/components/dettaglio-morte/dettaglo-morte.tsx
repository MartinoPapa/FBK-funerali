import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';
import { TipoDefunto, TipoFunerale } from '../../Dati/tipoDatiFunerali';

//eventi generati: condividi, indicazioni
//versione pacchetto 0.2.3, per compilare in stencil cambiare versione di stencil

@Component({
  tag: 'dettaglio-morte',
  styleUrl: 'dettaglio-morte.css',
  shadow: true
})

export class Sepoltura {

  @Prop() defunto: TipoDefunto; //defunto
  @Prop() funerale: TipoFunerale; //funerale
  @Prop() isFunerale: boolean; //true se è un funerale, false se è un defunto

  @State() height: string = "184px"; //altezza del contenitore
  @State() visibilitàEstesa: string = "hidden"; //visualizzazione estesa
  @State() visibilitàCompatta: string = "visible"; //visualizzazione compatta
  @State() transitionDelay: string = "0.2s"; //delay utile a non far scomparire gli elementi prima della chiusura della finestra

  openHeight: string; //altezza da esteso

  @Event() condividi: EventEmitter; //evento genreato col click di condividi
  @Event() indicazioni: EventEmitter; //evento genrato col click di indicazioni

  condividiEvent(todo: any) {
    this.condividi.emit(todo);
  }
 
  indicazioniEvent(todo: any) {
    this.indicazioni.emit(todo);
  }

  calcolaAltezzaContainer(){
    if(this.isFunerale){
      this.openHeight="490px";
    }
    else{
      this.openHeight="445px";
    }
  }

  //passa a visualizzazione compatta
  close() {
    this.height = "184px";
    this.visibilitàEstesa = "hidden";
    this.visibilitàCompatta = "visible";
    this.transitionDelay = "0s";
  }

  //passa a visualizzazione estesa
  open() {
    this.height = this.openHeight;
    this.visibilitàEstesa = "visible";
    this.visibilitàCompatta = "hidden";
    this.transitionDelay = "0.2s";
  }

  //crea la componente in base al suo tipo (Funerale o Sepoltura)
  createComponent() {
    var styles = {
      '--height': this.height,
      '--visibilità-estesa': this.visibilitàEstesa,
      '--visibiltà-compatta': this.visibilitàCompatta,
      '--transition-delay': this.transitionDelay
    };
    
    if (this.isFunerale) {
      return [
        <div class="bordo" style={styles}>
          <div class="container">

            <h1>{this.funerale.nominativo}</h1>

            <div class="riga">
              <div id="right" class="colonna">
                <p>nato il</p>
                <h2>{this.funerale.dataNascita}</h2>
              </div>

              <div id="left" class="colonna">
                <p>morto il</p>
                <h2>{this.funerale.dataMorte}</h2>
              </div>
            </div>

            <div id="apri" onClick={() => this.open()}>
              <p>maggiori informazioni</p>
              <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7 10l5 5 5-5H7z" /></svg>
            </div>

            <div id="esteso">
              <p id="tipoEvento" class="esteso">funerale celebrato presso</p>

              <h2 id="titoloLuogo" class="luogoFunerale esteso">{this.funerale.luogoFunerale}</h2>
              <p id="comune" class="pFunerale esteso">{this.funerale.comuneFunerale}</p>
              <div class="riga esteso funerale">
                <div id="right" class="colonna">
                  <p>data</p>
                  <h2>{this.funerale.dataFunerale}</h2>
                </div>

                <div id="left" class="colonna">
                  <p>ora</p>
                  <h2>{this.funerale.oraFunerale}</h2>
                </div>
              </div>

              <div class="icone esteso">
                <div class="azioni" onClick={e => this.indicazioniEvent(e)}>
                  <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
                  <p>Indicazioni</p>
                </div>
                <div id="secondaIcona" class="azioni" onClick={e => this.condividiEvent(e)}>
                  <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                  <p>Condividi</p>
                </div>
              </div>

              <div class="chiudi esteso" onClick={() => this.close()}>
                <p>nascondi dettagli</p>
                <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7 14l5-5 5 5H7z" /></svg>
              </div>
            </div>
          </div>

        </div>
      ];
    }
    else {
      return [
        <div class="bordo" style={styles}>
          <div class="container">

            <h1>{this.defunto.nominativo}</h1>

            <div class="riga">
              <div id="right" class="colonna">
                <p>nato il</p>
                <h2>{this.defunto.dataNascita}</h2>
              </div>

              <div id="left" class="colonna">
                <p>morto il</p>
                <h2>{this.defunto.dataMorte}</h2>
              </div>
            </div>

            <div id="apri" onClick={() => this.open()}>
              <p>maggiori informazioni</p>
              <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7 10l5 5 5-5H7z" /></svg>
            </div>

            <div id="esteso">
              <p id="tipoEvento" class="esteso">luogo sepoltura</p>

              <h2 id="titoloLuogo" class="esteso">{this.defunto.paeseSepoltura}</h2>

              <p id="dettaglioSepoltura" class="esteso">
                Fila: {this.defunto.numeroFila} - Colonna: {this.defunto.numeroColonna}<br></br>
                Numero cella: {this.defunto.numeroCella}
              </p>

              <div class="icone esteso">
                <div onClick={e => this.indicazioniEvent(e)}>
                  <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" /></svg>
                  <p>Indicazioni</p>
                </div>
                <div id="secondaIcona" onClick={e => this.condividiEvent(e)}>
                  <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" /></svg>
                  <p>Condividi</p>
                </div>
              </div>

              <div class="chiudi esteso" onClick={() => this.close()}>
                <p>nascondi dettagli</p>
                <svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M7 14l5-5 5 5H7z" /></svg>
              </div>
            </div>
          </div>

        </div>
      ]
    }
  }

  render() {
    this.calcolaAltezzaContainer();
    return [
      <div class="component">
        {this.createComponent()}
      </div>
    ];
  }
}
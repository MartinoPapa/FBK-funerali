export class TipoFunerale {
    constructor(nominativo, dataNascita, dataMorte, luogoFunerale, comuneFunerale, dataFunerale, oraFunerale) {
        this.nominativo = nominativo;
        this.dataNascita = dataNascita;
        this.dataMorte = dataMorte;
        this.luogoFunerale = luogoFunerale;
        this.comuneFunerale = comuneFunerale;
        this.dataFunerale = dataFunerale;
        this.oraFunerale = oraFunerale;
    }
}
export class TipoDefunto {
    constructor(nominativo, dataNascita, dataMorte, paeseSepoltura, numeroCella, numeroFila, numeroColonna) {
        this.nominativo = nominativo;
        this.dataNascita = dataNascita;
        this.dataMorte = dataMorte;
        this.paeseSepoltura = paeseSepoltura;
        this.numeroCella = numeroCella;
        this.numeroFila = numeroFila;
        this.numeroColonna = numeroColonna;
    }
}

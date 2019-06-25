export class TipoFunerale {
    nominativo: string;
    dataNascita: string;
    dataMorte: string;
    luogoFunerale: string;
    comuneFunerale: string;
    dataFunerale: string;
    oraFunerale: string;

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
    nominativo: string;
    dataNascita: string;
    dataMorte: string;
    paeseSepoltura: string;
    numeroCella: number;
    numeroFila: number;
    numeroColonna: number;

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

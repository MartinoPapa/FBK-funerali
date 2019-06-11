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
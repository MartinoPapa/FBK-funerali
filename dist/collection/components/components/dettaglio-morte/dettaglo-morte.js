import { TipoFunerale } from '../../Dati/tipoDatiFunerali';
export class Sepoltura {
    constructor() {
        this.funerale = new TipoFunerale("Martino", "15/07/2001", "20/08/2019", "fbk povo", "povo tn", "oggi", "5:50");
        this.isFunerale = true;
        this.height = "184px";
        this.visibilitàEstesa = "hidden";
        this.visibilitàCompatta = "visible";
        this.transitionDelay = "0.2s";
    }
    condividiEvent(todo) {
        this.share.emit(todo);
    }
    indicazioniEvent(todo) {
        this.indicazioni.emit(todo);
    }
    calcolaAltezzaContainer() {
        if (this.isFunerale) {
            this.openHeight = "490px";
        }
        else {
            this.openHeight = "445px";
        }
    }
    close() {
        this.height = "184px";
        this.visibilitàEstesa = "hidden";
        this.visibilitàCompatta = "visible";
        this.transitionDelay = "0s";
    }
    open() {
        this.height = this.openHeight;
        this.visibilitàEstesa = "visible";
        this.visibilitàCompatta = "hidden";
        this.transitionDelay = "0.2s";
    }
    createComponent() {
        var styles = {
            '--height': this.height,
            '--visibilità-estesa': this.visibilitàEstesa,
            '--visibiltà-compatta': this.visibilitàCompatta,
            '--transition-delay': this.transitionDelay
        };
        if (this.isFunerale) {
            return [
                h("div", { class: "bordo", style: styles },
                    h("div", { class: "container" },
                        h("h1", null, this.funerale.nominativo),
                        h("div", { class: "riga" },
                            h("div", { id: "right", class: "colonna" },
                                h("p", null, "nato il"),
                                h("h2", null, this.funerale.dataNascita)),
                            h("div", { id: "left", class: "colonna" },
                                h("p", null, "morto il"),
                                h("h2", null, this.funerale.dataMorte))),
                        h("div", { id: "apri", onClick: () => this.open() },
                            h("p", null, "maggiori informazioni"),
                            h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                                h("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                                h("path", { d: "M7 10l5 5 5-5H7z" }))),
                        h("div", { id: "esteso" },
                            h("p", { id: "tipoEvento", class: "esteso" }, "funerale celebrato presso"),
                            h("h2", { id: "titoloLuogo", class: "luogoFunerale esteso" }, this.funerale.luogoFunerale),
                            h("p", { id: "comune", class: "pFunerale esteso" }, this.funerale.comuneFunerale),
                            h("div", { class: "riga esteso funerale" },
                                h("div", { id: "right", class: "colonna" },
                                    h("p", null, "data"),
                                    h("h2", null, this.funerale.dataFunerale)),
                                h("div", { id: "left", class: "colonna" },
                                    h("p", null, "ora"),
                                    h("h2", null, this.funerale.oraFunerale))),
                            h("div", { class: "icone esteso" },
                                h("div", { class: "azioni", onClick: e => this.indicazioniEvent(e) },
                                    h("svg", { viewBox: "0 0 24 24" },
                                        h("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                                        h("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" }),
                                        h("circle", { cx: "12", cy: "9", r: "2.5" })),
                                    h("p", null, "Indicazioni")),
                                h("div", { id: "secondaIcona", class: "azioni", onClick: e => this.condividiEvent(e) },
                                    h("svg", { viewBox: "0 0 24 24" },
                                        h("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                                        h("path", { d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" })),
                                    h("p", null, "Condividi"))),
                            h("div", { class: "chiudi esteso", onClick: () => this.close() },
                                h("p", null, "nascondi dettagli"),
                                h("svg", { viewBox: "0 0 24 24" },
                                    h("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                                    h("path", { d: "M7 14l5-5 5 5H7z" }))))))
            ];
        }
        else {
            return [
                h("div", { class: "bordo", style: styles },
                    h("div", { class: "container" },
                        h("h1", null, this.defunto.nominativo),
                        h("div", { class: "riga" },
                            h("div", { id: "right", class: "colonna" },
                                h("p", null, "nato il"),
                                h("h2", null, this.defunto.dataNascita)),
                            h("div", { id: "left", class: "colonna" },
                                h("p", null, "morto il"),
                                h("h2", null, this.defunto.dataMorte))),
                        h("div", { id: "apri", onClick: () => this.open() },
                            h("p", null, "maggiori informazioni"),
                            h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                                h("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                                h("path", { d: "M7 10l5 5 5-5H7z" }))),
                        h("div", { id: "esteso" },
                            h("p", { id: "tipoEvento", class: "esteso" }, "luogo sepoltura"),
                            h("h2", { id: "titoloLuogo", class: "esteso" }, this.defunto.paeseSepoltura),
                            h("p", { id: "dettaglioSepoltura", class: "esteso" },
                                "Fila: ",
                                this.defunto.numeroFila,
                                " - Colonna: ",
                                this.defunto.numeroColonna,
                                h("br", null),
                                "Numero cella: ",
                                this.defunto.numeroCella),
                            h("div", { class: "icone esteso" },
                                h("div", { onClick: e => this.indicazioniEvent(e) },
                                    h("svg", { viewBox: "0 0 24 24" },
                                        h("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                                        h("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" }),
                                        h("circle", { cx: "12", cy: "9", r: "2.5" })),
                                    h("p", null, "Indicazioni")),
                                h("div", { id: "secondaIcona", onClick: e => this.condividiEvent(e) },
                                    h("svg", { viewBox: "0 0 24 24" },
                                        h("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                                        h("path", { d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" })),
                                    h("p", null, "Condividi"))),
                            h("div", { class: "chiudi esteso", onClick: () => this.close() },
                                h("p", null, "nascondi dettagli"),
                                h("svg", { viewBox: "0 0 24 24" },
                                    h("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
                                    h("path", { d: "M7 14l5-5 5 5H7z" }))))))
            ];
        }
    }
    render() {
        this.calcolaAltezzaContainer();
        return [
            h("div", { class: "component" }, this.createComponent())
        ];
    }
    static get is() { return "dettaglio-morte"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "defunto": {
            "type": "Any",
            "attr": "defunto"
        },
        "funerale": {
            "type": "Any",
            "attr": "funerale"
        },
        "height": {
            "state": true
        },
        "isFunerale": {
            "type": Boolean,
            "attr": "is-funerale"
        },
        "transitionDelay": {
            "state": true
        },
        "visibilit\u00E0Compatta": {
            "state": true
        },
        "visibilit\u00E0Estesa": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "share",
            "method": "share",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "indicazioni",
            "method": "indicazioni",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:dettaglio-morte:**/"; }
}

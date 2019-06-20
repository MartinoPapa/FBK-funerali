import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
import { TipoDefunto, TipoFunerale } from '../../Dati/tipoDatiFunerali';
export declare class Sepoltura {
    defunto: TipoDefunto;
    funerale: TipoFunerale;
    isFunerale: boolean;
    height: string;
    visibilitàEstesa: string;
    visibilitàCompatta: string;
    transitionDelay: string;
    openHeight: string;
    share: EventEmitter;
    indicazioni: EventEmitter;
    condividiEvent(todo: any): void;
    indicazioniEvent(todo: any): void;
    calcolaAltezzaContainer(): void;
    close(): void;
    open(): void;
    createComponent(): JSX.Element[];
    render(): JSX.Element[];
}

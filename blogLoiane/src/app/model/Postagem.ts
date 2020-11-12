import { Tema } from './Tema';

export class Postagem {
    public id: number;
    public titulo: string;
    public texo: string;
    public data: Date;
    public tema: Tema;
}
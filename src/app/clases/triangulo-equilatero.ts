import { FiguraGeomerica } from "./figura-geomerica";   

export class TrianguloEquilatero extends FiguraGeomerica   {
    lado: number;
    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularPerimetro(): number {
        return this.lado * 3;
    }
}
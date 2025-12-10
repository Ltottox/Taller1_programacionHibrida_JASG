import { FiguraGeomerica } from "./figura-geomerica";
//clase Circulo que extiende de FiguraGeomerica
export class Circulo extends FiguraGeomerica {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    public calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

import { FiguraGeometrica } from "./figura-geometrica";
//clase Circulo que extiende de FiguraGeometrica
export class Circulo extends FiguraGeometrica {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    public calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

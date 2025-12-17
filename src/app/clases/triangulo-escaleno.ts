import { FiguraGeomerica } from "./figura-geomerica";
//clase TrianguloEscaleno que extiende de FiguraGeomerica
export class TrianguloEscaleno extends FiguraGeomerica {
    ladoA: number;//definición de los lados del triángulo escaleno
    ladoB: number;
    ladoC: number;  

    constructor(ladoA: number, ladoB: number, ladoC: number) {
        super();//llama al constructor de la clase padre FiguraGeomerica
        this.ladoA = ladoA;//inicializa los lados del triángulo escaleno junto a su constructor 
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    // Método para calcular el perímetro del triángulo escaleno
    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
    
}

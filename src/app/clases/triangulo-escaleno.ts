import { FiguraGeometrica } from "./figura-geometrica";  // ← Geometrica
//clase TrianguloEscaleno que extiende de FiguraGeometrica
export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA: number;//definición de los lados del triángulo escaleno
    ladoB: number;
    ladoC: number;  

    constructor(ladoA: number, ladoB: number, ladoC: number) {
        super();//llama al constructor de la clase padre FiguraGeometrica
        this.ladoA = ladoA;//inicializa los lados del triángulo escaleno junto a su constructor 
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }
    // Método para calcular el perímetro del triángulo escaleno
    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
    
}

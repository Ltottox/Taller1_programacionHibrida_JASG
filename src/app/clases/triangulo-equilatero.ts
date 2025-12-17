import { FiguraGeomerica } from "./figura-geomerica";   
// Clase TrianguloEquilatero que extiende de FiguraGeomerica jerarquicamente d
export class TrianguloEquilatero extends FiguraGeomerica   {
    lado: number;
    constructor(lado: number) {//constructor que recibe la longitud de un lado
        super();//llama al constructor de la clase padre FiguraGeomerica
        this.lado = lado;//inicializa el lado del triángulo equilátero
    }
// Método para calcular el perímetro del triángulo equilátero
    calcularPerimetro(): number {// implementación del método calcularPerimetro
        return this.lado * 3; // El perímetro de un triángulo equilátero es 3 veces la longitud de un lado, también se puede usar this.lado + this.lado + this.lado
    }
}
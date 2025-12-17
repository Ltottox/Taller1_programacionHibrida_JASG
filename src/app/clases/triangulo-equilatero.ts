import { FiguraGeometrica } from "./figura-geometrica";   
// Clase TrianguloEquilatero que extiende de FiguraGeometrica jerarquicamente d
export class TrianguloEquilatero extends FiguraGeometrica   {
    lado: number;
    constructor(lado: number) {//constructor que recibe la longitud de un lado
        super();//llama al constructor de la clase padre FiguraGeometrica
        this.lado = lado;//inicializa el lado del triángulo equilátero
    }
// Método para calcular el perímetro del triángulo equilátero
    calcularPerimetro(): number {// implementación del método calcularPerimetro
        return this.lado * 3; // El perímetro de un triángulo equilátero es 3 veces la longitud de un lado, también se puede usar this.lado + this.lado + this.lado
    }
}
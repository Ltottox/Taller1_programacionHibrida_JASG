//metodo abstracto para calcular el perímetro de una figura geométrica
export abstract class FiguraGeometrica {
    private nombre: string;

    constructor(nombreFigura: string) {
        this.nombre = nombreFigura;
    }
    public abstract calcularPerimetro(): number;
}

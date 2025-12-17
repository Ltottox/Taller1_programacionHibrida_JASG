import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonInput, IonImg, IonSelect, IonSelectOption, IonText } from '@ionic/angular/standalone';
import { TrianguloEquilatero } from '../clases/triangulo-equilatero';
import { TrianguloEscaleno } from '../clases/triangulo-escaleno';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Definición del tipo de triángulo
type TipoTriangulo = 'equilatero' | 'escaleno';

//se agrego imports: IonSelect, IonSelectOption
@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton, IonText, IonImg, IonSelect, IonSelectOption]
})
// TrianguloComponent para manejar la lógica del componente
export class TrianguloComponent  implements OnInit {
  tipoTriangulo: TipoTriangulo = 'equilatero';// variable para almacenar el tipo de triángulo seleccionado
  ladoA: number = 0;//valores de los lados del triángulo
  ladoB: number = 0;
  ladoC: number = 0;  
  resultadoPerimetro: number | null = null; //variable para almacenar el resultado del perímetro
  mostrarResultado: boolean = false;
  // Método para calcular el perímetro según el tipo de triángulo seleccionado
  calcularPerimetro() {
    if (this.tipoTriangulo === 'equilatero') {//si es exactamente equilátero
      const triangulo = new TrianguloEquilatero(this.ladoA);//crear instancia de TrianguloEquilatero
      this.resultadoPerimetro = triangulo.calcularPerimetro();//calcula el perímetro
    } else {//si no, es escaleno
      const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);//crear instancia de TrianguloEscaleno
      this.resultadoPerimetro = triangulo.calcularPerimetro();  //calcula el perímetro
    }
    this.mostrarResultado = true;//mostrar el resultado
  }

  onTipoCambio():void {

  }

  constructor() { }

  ngOnInit() {}

}

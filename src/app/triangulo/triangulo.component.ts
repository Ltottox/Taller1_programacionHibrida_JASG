import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonInput, IonImg, IonSelect, IonSelectOption, IonText } from '@ionic/angular/standalone';
import { TrianguloEquilatero } from '../clases/triangulo-equilatero';
import { TrianguloEscaleno } from '../clases/triangulo-escaleno';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type TipoTriangulo = 'equilatero' | 'escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton, IonText, IonImg, IonSelect, IonSelectOption]
})
export class TrianguloComponent  implements OnInit {
  tipoTriangulo: TipoTriangulo = 'equilatero';
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;  
  resultadoPerimetro: number | null = null;
  mostrarResultado: boolean = false;

  calcularPerimetro() {
    if (this.tipoTriangulo === 'equilatero') {
      const triangulo = new TrianguloEquilatero(this.ladoA);
      this.resultadoPerimetro = triangulo.calcularPerimetro();
    } else {
      const triangulo = new TrianguloEscaleno(this.ladoA, this.ladoB, this.ladoC);
      this.resultadoPerimetro = triangulo.calcularPerimetro();
    }
    this.mostrarResultado = true;
  }

  onTipoCambio():void {

  }

  constructor() { }

  ngOnInit() {}

}

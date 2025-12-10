import { Component, OnInit } from '@angular/core';
import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput, IonButton, IonImg, IonText } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../clases/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonText, CommonModule, FormsModule, IonImg, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle], //se repite imports en un array
})
export class CirculoComponent  implements OnInit {
  radio: number = 0;
  resultado: number | null = null;
  mostrarResultado: boolean = false;

  constructor( ) { }

  ngOnInit() {}

  calcularPerimetro() {
    const circulo = new Circulo(this.radio);
    this.resultado = circulo.calcularPerimetro();
    this.mostrarResultado = true;
  }

}



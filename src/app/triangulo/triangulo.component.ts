import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonInput, IonImg, IonSelect, IonSelectOption, IonText } from '@ionic/angular/standalone';
import { TrianguloEquilatero } from '../clases/triangulo-equilatero';
import { TrianguloEscaleno } from '../clases/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonButton, IonText, IonImg, IonSelect]
})
export class TrianguloComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

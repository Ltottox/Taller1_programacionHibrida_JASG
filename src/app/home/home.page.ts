import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect,IonSelectOption } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent, IonSelect,IonSelectOption, CommonModule],
})
export class HomePage {
  seleccionFigura: 'circulo' | 'triangulo' = 'circulo';
  constructor() {}

  esCirculo(){return this.seleccionFigura=='circulo'}
  esTriangulo(){return this.seleccionFigura=='triangulo'}
  manejoSeleccionFigura($event: any) {
    this.seleccionFigura = $event.detail.value;
  }
}

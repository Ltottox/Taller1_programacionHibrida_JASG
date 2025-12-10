import { Component, OnInit } from '@angular/core';
import {  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/angular/standalone';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle], //se repite imports en un array
})
export class CirculoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

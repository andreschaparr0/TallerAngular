import { Component, Input, OnInit } from '@angular/core';
import { Serie } from '../series'; 

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css']
})
export class DetalleSerieComponent implements OnInit {

  @Input() serie: Serie | null = null; // Recibe la serie seleccionada.

  constructor() {}

  ngOnInit(): void {}
}

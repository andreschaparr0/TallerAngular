import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../series';

@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css']
})
export class ListarSeriesComponent implements OnInit {

  series: any[] = [];
  promedioTemporadas: number = 0; 
  serieSeleccionada: Serie | null = null;
  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(
      (data) => {
        this.series = data;
        this.calcularPromedioTemporadas(); 
      },
      (error) => {
        console.error('Error al obtener las series', error);
      }
    );
  }

  calcularPromedioTemporadas(): void {
    if (this.series.length === 0) {
      this.promedioTemporadas = 0; 
      return; 
    }
  
    const totalTemporadas = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.promedioTemporadas = totalTemporadas / this.series.length;
    
  }


  onSelectSerie(serie: Serie): void {
    this.serieSeleccionada = serie; 
  }

  
}

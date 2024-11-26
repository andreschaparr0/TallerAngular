import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeriesComponent } from './listar-series/listar-series.component';
import { DetalleSerieComponent } from './detalle-serie/detalle-serie.component'; // Importa el componente aquí
import { SeriesService } from './series.service';  

@NgModule({
  declarations: [
    ListarSeriesComponent,  
    DetalleSerieComponent  // Agrega el componente aquí
  ],
  imports: [
    CommonModule  
  ],
  providers: [SeriesService],  
  exports: [ListarSeriesComponent,
            DetalleSerieComponent
  ]  
})
export class SeriesModule { }

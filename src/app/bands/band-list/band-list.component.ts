import { Component, OnInit } from '@angular/core';
import { Band } from '../band.model';

import BandList from 'src/assets/json/bandas.json';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  bandList: any = BandList;    // listado de todas las bandas (BD)
  bandsId: number[] = [2,4,6]; // bandas iniciales
  actualBands: Band[]=[];      // bandas actuales en el listado
  newBand: string;             // nombre de la banda nueva a añadir (input)
  bandNameFilter: string;      // nombre de la banda en el buscador (input)

  constructor() {
    // Si la lista de bandas no esta guardada en la sesion, se crea una nueva a partir de les bandas inciales
    if (!sessionStorage.getItem('actualBands')) {
      for(let id of this.bandsId) {
        let band = this.bandList.find(item => item.id == id);
        let new_band = new Band(band.id, band.name, band.description, band.imagePath, band.videoPath);
        this.actualBands.push(new_band);
      }
    }
    else {
      this.actualBands = this.actualBands = JSON.parse(sessionStorage.getItem('actualBands'));
    }
  }

  // Añade una nueva banda al listado
  addNewBand() {
    let name = this.newBand;
    let band = this.bandList.find(item => item.name.toLowerCase() == name.toLowerCase());

    // Se comprueba si la banda a añadir ya esta en el listado
    if(band) {
      let new_band = new Band(band.id, band.name, band.description, band.imagePath, band.videoPath);
      this.actualBands.find(item => item.id == band.id) ? alert('¡Ya tienes esta banda en tu lista!') : this.actualBands.push(new_band);
      this.bandsId.push(band.id);
      this.newBand = '';
      // Guardar la lista de bandas en la sesion actual
      sessionStorage.setItem('actualBands', JSON.stringify(this.actualBands));
    }
    else {
      alert('¡Lo siento, banda no encontrada!');
    }
  }

  // Elimina una banda del listado
  deleteBand(id: number) {
    if (confirm('¿Seguro que quieres borrar esta banda de la lista?')) {
      const index = this.actualBands.indexOf(this.actualBands.find(item => item.id == id));
      if (index > -1) {
        this.actualBands.splice(index, 1);
        // Guardar la lista de bandas en la sesion actual
        sessionStorage.setItem('actualBands', JSON.stringify(this.actualBands));
      }
    }
  }

  ngOnInit(): void {
    
  }

}
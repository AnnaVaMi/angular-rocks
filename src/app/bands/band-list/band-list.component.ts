import { Component, OnInit } from '@angular/core';
import { Band } from '../band.model';

import BandList from 'src/assets/json/bandas.json';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {
  bandList: any = BandList;
  bandsId: number[] = [2,6];
  actualBands: Band[]=[];
  newBand: string;
  bandNameFilter: string;

  constructor() {
    for(let id of this.bandsId) {
      let band = this.bandList.find(item => item.id == id);
      let new_band = new Band(band.id, band.name, band.description, band.imagePath, band.videoPath);
      this.actualBands.push(new_band);
    }
  }

  addNewBand() {
    let name = this.newBand
    let band = this.bandList.find(item => item.name.toLowerCase() == name.toLowerCase());
    if(band) {
      let new_band = new Band(band.id, band.name, band.description, band.imagePath, band.videoPath);
      this.actualBands.find(item => item.id == band.id) ? alert('¡Ya tienes esta banda en tu lista!') : this.actualBands.push(new_band);
    }
    else {
      alert('¡Lo siento, banda no encontrada!');
    }
  }

  ngOnInit(): void {
  }

}

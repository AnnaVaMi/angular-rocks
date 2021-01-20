import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import BandList from 'src/assets/json/bandas.json';
import { Band } from '../band.model';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {
  bandList: any = BandList;        // listado de todas las bandas (BD)
  bandDetail: Band;                // banda a mostrar
  id: number;                      // id de la banda a mostrar
  private _routeSub: Subscription; // informacion de la url para obtener el id de la banda
  
  constructor(private _sanitizer: DomSanitizer, private _route: ActivatedRoute, private meta:Meta) { 
    
  }

  // Sanitizar la url de youtube para poder mostrar el video
  getVideoIframe(url) {
    let video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl(video);   
  }

  // Obtener el id de la banda pasado por url para mostrar su informacion
  ngOnInit(): void {
    this._routeSub = this._route.params.subscribe(params => {
      this.id = params['id'];
      let bandDetail = this.bandList.find(item => item.id == this.id);
      this.bandDetail = new Band(bandDetail.id, bandDetail.name, bandDetail.description, bandDetail.imagePath, bandDetail.videoPath);
    });

    // Tags dinamicos
    this.meta.updateTag({name: 'keywords', content: 'banda, rock, ' + this.bandDetail.name.split(' ').toString()});
    this.meta.updateTag({name: 'description', content: 'Banda de rock ' + this.bandDetail.name});
  }

  ngOnDestroy() { this._routeSub.unsubscribe(); }

}

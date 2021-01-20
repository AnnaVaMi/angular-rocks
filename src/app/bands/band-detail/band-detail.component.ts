import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { Band } from '../band.model';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {
  band: Band;
  id: number;
  private routeSub: Subscription;
  
  constructor(private _sanitizer: DomSanitizer, private route: ActivatedRoute) { 
    
  }

  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl(video);   
}

ngOnInit(): void {
  this.routeSub = this.route.params.subscribe(params => {
    this.id = params['id'];
    this.band = new Band(this.id,
      'KISS', 
      'Kiss es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.​', 
      'https://gcdn.emol.cl/curiosidades/files/2020/04/Kiss.jpg', 
      'https://www.youtube.com/embed/sOnqjkJTMaA');
  });
}

ngOnDestroy() { this.routeSub.unsubscribe(); }

}

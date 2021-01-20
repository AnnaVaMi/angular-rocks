import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import BandList from 'src/assets/json/bandas.json';
import { Band } from '../band.model';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {
  bandList: any = BandList;
  bandDetail: Band;
  id: number;
  private routeSub: Subscription;
  
  constructor(private _sanitizer: DomSanitizer, private _route: ActivatedRoute) { 
    
  }

  getVideoIframe(url) {
    let video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl(video);   
  }

  ngOnInit(): void {
    this.routeSub = this._route.params.subscribe(params => {
      this.id = params['id'];
      let bandDetail = this.bandList.find(item => item.id == this.id);
      this.bandDetail = new Band(bandDetail.id, bandDetail.name, bandDetail.description, bandDetail.imagePath, bandDetail.videoPath);
    });
  }

  ngOnDestroy() { this.routeSub.unsubscribe(); }

}

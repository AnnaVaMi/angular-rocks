import { Component, OnInit } from '@angular/core';

import { Band } from '../band.model';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  bands: Band[] = [
    new Band(0,
              'KISS', 
              'Kiss es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.​', 
              'https://gcdn.emol.cl/curiosidades/files/2020/04/Kiss.jpg', 
              'https://www.youtube.com/embed/B_oFiNdp8UQ'),
    new Band(1,
              'The Rolling Stones', 
              'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.​​', 
              'https://static2.abc.es/media/cultura/2020/03/17/rolling-kxOE--620x349@abc.jpg', 
              'https://www.youtube.com/embed/O4irXQhgMqg&list=RDEM07sWLP40fqgolm2qkwr-DQ&start_radio=1'),
    new Band(2,
              'AC/DC', 
              'Kiss es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.​', 
              'https://www.ecestaticos.com/imagestatic/clipping/01a/029/01a029d8f8b9fe8a3988dc6bc1fa6d4b/la-ultima-bala-de-angus-young-lo-nuevo-de-ac-dc-es-un-discazo-que-ya-nadie-esperaba.jpg?mtime=1605267410', 
              'https://www.youtube.com/embed/ikFFVfObwss&list=PLxGB9kNnluF766VGi9mOsgK1JJb7Rtf2f'),
    new Band(3,
              'Queen', 
              'Queen es una banda británica de rock formada en 1970 en Londres por el cantante y pianista Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon.', 
              'https://indiehoy.com/wp-content/uploads/2020/10/queen.jpg', 
              'https://www.youtube.com/embed/HgzGwKwLmgM&list=RDEMbHaAxpOZhcVmmF6I3y0siA&start_radio=1'),
    new Band(4,
              'Led Zeppelin', 
              'Led Zeppelin fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería.', 
              'https://www.laregion.es/asset/zoomcrop,1366,800,center,center//media/laregion/images/2019/10/27/2019102708211684042.jpg', 
              'https://www.youtube.com/embed/TA9Rec1qAFQ'),
    new Band(5,
              'Pink Floyd', 
              'Pink Floyd fue una banda de rock británica, fundada en Londres en 1965. Es considerada un icono cultural del siglo xx y una de las bandas más influyentes y aclamadas en la historia de la música', 
              'https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/image_750x422/public/field/image/article/pinkfloyd-radionica.jpg?itok=3i360qA5', 
              'https://www.youtube.com/embed/QGe8ecStkfQ'),
    new Band(6,
              'Deep Purple', 
              'Deep Purple es una banda británica de hard rock formada en 1968 en Hertford, Reino Unido. Está considerada como una de las pioneras de dicho subgénero, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath.', 
              'https://static2.abc.es/media/cultura/2020/07/17/deep-purple-kKCF--620x349@abc.jpg', 
              'https://www.youtube.com/embed/I7PHolrHOck'),
    new Band(7,
              'The Ramones', 
              'Los Ramones fue una banda de punk formada en Forest Hills, en el distrito de Queens en 1974, y disuelta veintidós años más tarde, en 1996.', 
              'https://www.latercera.com/resizer/oj12Ih77rH2vY-4D9AzZWfrAyb0=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/2DRMU62MWVGSXI2TMZZXEHUVAU.jpg', 
              'https://www.youtube.com/embed/oz7KYUkdlvE'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

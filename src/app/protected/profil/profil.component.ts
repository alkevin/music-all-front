import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  hideInput = true;

  myUrlPhoto: string;

  constructor() {
    this.myUrlPhoto = 'https://t1.ea.ltmcdn.com/fr/images/1/7/7/les_animaux_les_plus_rares_du_monde_top_18_avec_photos_771_600.jpg';
   }

  ngOnInit(): void {
  }

}

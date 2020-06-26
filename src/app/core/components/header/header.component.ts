import { Component, Input } from '@angular/core';
import { AppConstants } from '../../../shared/constants/app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbarOpen = false;

  urlLogo = AppConstants.assetLogoPath;

  @Input()
  appTitle: string;

  myUrlPhoto: string;

  constructor() {
    this.myUrlPhoto = 'https://t1.ea.ltmcdn.com/fr/images/1/7/7/les_animaux_les_plus_rares_du_monde_top_18_avec_photos_771_600.jpg';
   }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}

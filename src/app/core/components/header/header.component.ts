import { Component, Input } from '@angular/core';
import { AppConstants } from '../../../shared/constants/app.constants';
import { User } from 'src/app/shared/models/user';
import { DestroyeUser } from './../../../state/actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';

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

  @Input()
  user: User;

  myUrlPhoto: string;

  constructor(private store: Store<AppState>) {
    this.myUrlPhoto = 'https://t1.ea.ltmcdn.com/fr/images/1/7/7/les_animaux_les_plus_rares_du_monde_top_18_avec_photos_771_600.jpg';
   }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.store.dispatch(DestroyeUser());
  }

}

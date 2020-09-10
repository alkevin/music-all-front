import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { getUserLogged } from './../../state/selectors/user.selectors';
import { AuthService } from './../../shared/services/auth.service';
import { refreshUser } from './../../state/actions/user.actions';
import { AppConstants } from 'src/app/shared/constants/app.constants';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  urlLogo = AppConstants.assetLogoPath;
  urlFaviLogo = AppConstants.assetFaviLogoPath;
  myUrlPhoto: string;
  user$: Observable<User>;

  constructor(private store: Store<AppState>,
              private authService: AuthService) {
    this.myUrlPhoto = 'https://t1.ea.ltmcdn.com/fr/images/1/7/7/les_animaux_les_plus_rares_du_monde_top_18_avec_photos_771_600.jpg';
   }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      console.log('refreshed');
      this.refreshUserSession();
    }
    this.getUserLogged();
  }

  getUserLogged() {
    this.user$ = this.store.pipe(select(getUserLogged));
  }

  refreshUserSession(){
    this.store.dispatch(refreshUser());
  }
}

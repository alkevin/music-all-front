import { Component, OnInit, VERSION } from '@angular/core';
import { UtilsService } from './shared/services/utils/utils.service';
import { AppConstants } from './shared/constants/app.constants';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from './shared/models/user';
import { Store, select } from '@ngrx/store';
import { AppState } from './state/reducers';
import { getUserLogged } from './state/selectors/user.selectors';
import { refreshUser } from './state/actions/user.actions';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  urlLogo = AppConstants.assetLogoPath;
  urlFaviLogo = AppConstants.assetFaviLogoPath;
  appTitle = AppConstants.appTitle;
  yearNow = new Date().getFullYear().toString();
  version = VERSION.full;
  showHead = false;
  showNavPartenaire = false;

  user$: Observable<User>;

  constructor(private utilsService: UtilsService
            , private router: Router
            , private store: Store<AppState>
            , private authService: AuthService) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/connexion/signin' || event.url === '/connexion/signup') {
          this.showHead = false;

        } else {
          this.showHead = true;

        }
      }
    });

  }

  ngOnInit(): void {
    this.utilsService.initFaIcons();
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

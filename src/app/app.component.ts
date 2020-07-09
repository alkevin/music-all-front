import { Component, OnInit, VERSION } from '@angular/core';
import { UtilsService } from './shared/services/utils/utils.service';
import { AppConstants } from './shared/constants/app.constants';
import { Router, NavigationEnd } from '@angular/router';
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

  constructor(private utilsService: UtilsService, private router: Router) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/login') {
          this.showHead = false;
          this.showNavPartenaire = false;
        } else {
          this.showHead = true;
          this.showNavPartenaire = true;
        }

        if (event.url === '/profil'){
          this.showHead = true;
          this.showNavPartenaire = false;
        } else {
          this.showHead = true;
          this.showNavPartenaire = true;
        }
      }
    });

  }

  ngOnInit(): void {
    this.utilsService.initFaIcons();
  }

}

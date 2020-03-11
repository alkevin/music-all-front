import { Component, OnInit, VERSION } from '@angular/core';
import { UtilsService } from './shared/services/utils/utils.service';
import { AppConstants } from './shared/constants/app.constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  appTitle = AppConstants.appTitle;
  yearNow = new Date().getFullYear().toString();
  version = VERSION;

  constructor(private utilsService: UtilsService) {

  }

  ngOnInit(): void {
    this.utilsService.initFaIcons();
  }

}

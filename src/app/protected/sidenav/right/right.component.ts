import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  @Input()
  urlLogo: string;

  @Input()
  urlFaviLogo: string;

  urlPicSidLeft = AppConstants.leftSideData;

  urlHelpLogo = AppConstants.assetHelpLogoPath;

  constructor() {
    console.log(this.urlHelpLogo);
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlLogo = AppConstants.assetLogoPath;
  urlFaviLogo = AppConstants.assetFaviLogoPath;

  constructor() { }

  ngOnInit(): void {
  }

}

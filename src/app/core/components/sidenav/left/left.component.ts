import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from './../../../../shared/constants/app.constants';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  @Input()
  urlLogo: string;

  @Input()
  urlFaviLogo: string;

  urlPicSidLeft = AppConstants.leftSideData;

  constructor() {
  }

  ngOnInit(): void {
  }

}

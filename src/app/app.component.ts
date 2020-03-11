import { Component, OnInit } from '@angular/core';
import { UtilsService } from './shared/services/utils/utils.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'music-all-front';

  constructor(private utilsService: UtilsService) {

  }

  ngOnInit(): void {
    this.utilsService.initFaIcons();
  }

}

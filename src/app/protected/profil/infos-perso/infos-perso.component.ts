import { Component, OnInit } from '@angular/core';
import { USERINFOS } from './../mock-userInfos';

@Component({
  selector: 'app-infos-perso',
  templateUrl: './infos-perso.component.html',
  styleUrls: ['./infos-perso.component.scss']
})
export class InfosPersoComponent implements OnInit {

  userInfo = USERINFOS;

  constructor() { }

  ngOnInit(): void {
    console.log(this.userInfo);
  }

}

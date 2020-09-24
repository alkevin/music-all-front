import { Component, OnInit } from '@angular/core';
import { GENREMUSIC } from './../mock-infoMusique';

@Component({
  selector: 'app-infos-musicien',
  templateUrl: './infos-musicien.component.html',
  styleUrls: ['./infos-musicien.component.scss']
})
export class InfosMusicienComponent implements OnInit {

  genreMusic = GENREMUSIC;

  constructor() { }

  ngOnInit(): void {
  }

}

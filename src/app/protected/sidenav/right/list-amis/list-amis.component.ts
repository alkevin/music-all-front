import { Component, OnInit } from '@angular/core';
import { MOCKLISTAMIS } from './mock-ListAmis';

@Component({
  selector: 'app-list-amis',
  templateUrl: './list-amis.component.html',
  styleUrls: ['./list-amis.component.scss']
})
export class ListAmisComponent implements OnInit {
  mocklistamis = MOCKLISTAMIS;

  constructor() { }

  ngOnInit(): void {
    console.log(this.mocklistamis);
  }

}

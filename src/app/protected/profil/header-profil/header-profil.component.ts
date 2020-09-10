import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header-profil',
  templateUrl: './header-profil.component.html',
  styleUrls: ['./header-profil.component.scss']
})
export class HeaderProfilComponent implements OnInit {

  @Input()
  myUrlPhoto: string;

  @Input()
  user: User;

  constructor() {
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hideInput = true;
  invalidLogin = false;

  @ViewChild('loginForm', {static: false}) loginForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  logIn(form: NgForm) {
    console.log(form);
  }

}

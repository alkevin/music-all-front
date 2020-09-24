import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppState } from 'src/app/state/reducers';
import { Store, ScannedActionsSubject } from '@ngrx/store';
import { loadUserFailure, loadUser } from '../../../state/actions/user.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  hideInput = true;
  invalidLogin = false;
  private destroyed$ = new Subject();
  loaded = false;

  @ViewChild('loginForm', {static: false}) loginForm: NgForm;

  constructor(private store: Store<AppState>
            , private actionsSubj: ScannedActionsSubject
            , private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // réponse cas d'échec
    this.actionsSubj.pipe(
      ofType(loadUserFailure),
      takeUntil(this.destroyed$)
    ).subscribe( () => {
      this.loginForm.reset();
      this.invalidLogin = true;
    });

    if (this.loaded) {
      this.spinner.show();
    }
  }

  logIn(form: NgForm) {
    this.loaded = !this.loaded;
    this.spinner.show();
    this.store.dispatch(loadUser( {data: form}));
    this.spinner.hide();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

}

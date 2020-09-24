import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, ScannedActionsSubject } from '@ngrx/store';
import { AppState } from 'src/app/state/reducers';
import { Subject } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { loadUserFailure, signUser } from 'src/app/state/actions/user.actions';
import { takeUntil } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  invalidLogin = false;
  loaded = false;

  private destroyed$ = new Subject();

  constructor(private formBuilder: FormBuilder
            , private store: Store<AppState>
            , private actionsSubj: ScannedActionsSubject
            , private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      matchingPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    // réponse cas d'échec
    this.actionsSubj.pipe(
      ofType(loadUserFailure),
      takeUntil(this.destroyed$)
    ).subscribe( () => {
      this.registerForm.reset();
      this.invalidLogin = true;
    });

    if (this.loaded) {
      this.spinner.show();
    }
  }

  get getFields() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm);
    if (this.registerForm.invalid) {
        return;
    }
    const signinRequest = {
      firstName: this.getFields.firstName.value,
      lastName: this.getFields.lastName.value,
      mail: this.getFields.mail.value,
      password: this.getFields.password.value,
      matchingPassword: this.getFields.matchingPassword.value
    };
    this.loaded = !this.loaded;
    this.spinner.show();
    this.store.dispatch(signUser( {data: signinRequest}));
    this.spinner.hide();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
}

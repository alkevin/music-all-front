import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { EncodeUriPipe } from './pipes/encode-uri.pipe';

@NgModule({
  declarations: [
    EncodeUriPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    EncodeUriPipe
  ]
})
export class SharedModule { }

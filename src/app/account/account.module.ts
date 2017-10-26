import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';

const components = [LoginComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: components,
  declarations: components
})
export class AccountModule { }

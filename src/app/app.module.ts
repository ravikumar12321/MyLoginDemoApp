import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Login } from './Login/login.component';
import { Welcome } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Welcome
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

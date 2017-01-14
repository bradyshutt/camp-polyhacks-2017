import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule, MdIconRegistry } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { MenuComponent } from './menu.component';
import { ToDowntownComponent } from './to-downtown.component';
import { FromDowntownComponent } from './from-downtown.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ToDowntownComponent,
    FromDowntownComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

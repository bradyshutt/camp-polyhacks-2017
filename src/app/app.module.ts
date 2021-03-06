import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store';


import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { MenuComponent } from './menu.component';
import { ToDowntownComponent } from './to-downtown.component';
import { FromDowntownComponent } from './from-downtown.component';
import { HeaderComponent } from './header.component';
import { NewRideComponent } from './new-ride.component';
import { ProfileComponent } from './profile.component';
import { DiscountsComponent } from './discounts.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'new-ride', component: NewRideComponent },
  { path: 'discounts', component: DiscountsComponent },
  { path: 'from-downtown', component: FromDowntownComponent },
  { path: 'to-downtown', component: ToDowntownComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({ store: storeReducer })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ToDowntownComponent,
    FromDowntownComponent,
    HeaderComponent,
    NewRideComponent,
    ProfileComponent,
    DiscountsComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <md-sidenav-container>
    
      <md-sidenav #sidenav>
        <app-menu></app-menu>
      </md-sidenav>

      <main>
        <app-header (sidenavChange)="sidenav.open()" ></app-header>
        <router-outlet></router-outlet>
      </main>

    </md-sidenav-container>
  `,
  styles: [`

        app-header {
            height: 10%;
            display: block;
        }
        
        main {
            background-color: #F7F7F7;
            padding-bottom: 9999px;
            margin-bottom: -9999px;
            overflow: hidden;
            height: 90%;
        }
        md-sidenav-container, app-menu {
            height: 100%;
            display: block;
        }
        md-sidenav {
            width: 80%;
        }
    
    `]
})
export class AppComponent {

  um() {
    console.log('um');
  }

}

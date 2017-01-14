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
        
        main {
            background-color: #f2f2f2;
            height: 100%;
        }
        md-sidenav-container {
            height: 100%;
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

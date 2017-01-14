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
        
        
      </main>

    </md-sidenav-container>
  `,
  styles: [`
        
        main {
            background-color: green;
            height: 100%;
        }
        md-sidenav-container {
            height: 100%;
        }
    
    `]
})
export class AppComponent {

  um() {
    console.log('um');
  }

}

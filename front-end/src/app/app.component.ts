import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header> ---------------header--------------- </header>
    
<md-sidenav-container class="example-container">
  <md-sidenav #sidenav class="example-sidenav">
    Jolly good!
  </md-sidenav>

  <div class="example-sidenav-content">
    <button md-button (click)="sidenav.open()">
          <md-icon>dehaze</md-icon>

    </button>
  </div>

</md-sidenav-container>
    
    <h1> {{title}} </h1>
  `,
  styles: [`
        header {
            background-color: orange;
        }
    
    `]
})
export class AppComponent {
  title = 'app works!';
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="main-bg-color">
      <button md-button (click)="openSidenav()">
        <md-icon>dehaze</md-icon>
      </button>
        <img src="../assets/app.png" alt="app-icon" class="app-icon">
    </header>
  `,
  styles  : [`
        header {
            height: 100%;
            display: flex;
            justify-content: space-between;
        }
        .app-icon {
            height: 90%;
            display: block;
            margin: 10px;
        }
    `]
})
export class HeaderComponent implements OnInit {

  @Output() sidenavChange = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  openSidenav() {
    console.log('opne pl0x');
    this.sidenavChange.emit(true);
  }

}

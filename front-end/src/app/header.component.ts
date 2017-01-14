import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <button md-button (click)="openSidenav()">
        <md-icon>dehaze</md-icon>
      </button>
    </header>
  `,
  styles  : [`
        header {
            background-color: orange;
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

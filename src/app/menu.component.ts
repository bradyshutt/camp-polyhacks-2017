import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <nav>
        <ul>
          <li><a href="#history">Travel History</a></li>
          <li><a href="#discount">Discounts</a></li>
          <li><a href="#acctinfo">Account Info</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#logout">Log Out</a></li>
        </ul>
      </nav>
  `,
  styles: [`

        ul {
            list-style-type: none;
        }
        
        li a, li a:hover, li a:visited {
            color: #333;
        }
    
    `]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

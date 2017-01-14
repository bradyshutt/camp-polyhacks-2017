import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <nav>
        <div class="nav-top">
          
        
        </div>
        <div class="nav-bottom">
          <ul>
            <li><a href="#history">Travel History</a></li>
            <li><a href="#discount">Discounts</a></li>
            <li><a href="#acctinfo">Account Info</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Log Out</a></li>
          </ul>
        </div>
      </nav>
  `,
  styles: [`
    .nav-bottom {
        background-color: pink;
    }
    .nav-bottom {
        background-color: cyan;
        height: 100%;
    }

    ul {
        margin-left: 0;
        padding-left: 0;
        list-style-type: none;
        background-color: red;
    }
    
    li {
        width: 100%; 
        padding: 10px 20px;
        border-bottom: 1px solid black;
    }
    
    a {
        color: #333;
        text-decoration: none;
    }
    
    `]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

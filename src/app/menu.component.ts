import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <nav>
        <div class="nav-top">
          <div class="profile-wrapper">
            <a><img class="profile-pic" src="../assets/jon2.png" alt="profile"></a>
            <p>Jon Snow</p>
          </div>
        </div>
        <div class="nav-bottom">
          <ul>
            <li><a routerLink="/history" routerLinkActive="active">Travel History</a></li>
            <li><a routerLink="/discounts" routerLinkActive="active">Discounts</a></li>
            <li><a routerLink="/account-info" routerLinkActive="active">Account Information</a></li>
            <li><a routerLink="/settings" routerLinkActive="active">Settings</a></li>
            <li><a routerLink="/logout" routerLinkActive="active">Logout</a></li>
          </ul>
        </div>
      </nav>
  `,
  styles: [`
    .nav-top {
        background-color: #E04C5B;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .nav-bottom {
        margin-top: 0;
        padding-top: 0;
        height: 95%;
    }
    ul {
        margin: 0 auto 0 0;
        padding-left: 0;
        list-style-type: none;
    }
    li:first-of-type {
        border-top: 2px solid black;
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
    .profile-wrapper {
        text-align: center;
    }
    .profile-wrapper p {
        margin: 3px auto 7px;
    }
    .profile-pic {
        height: 50px;
        margin: 10px 10px 0;
        padding: 0;
        display: block;
    }
    `]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


//responsibledrunk@wasted.com
//love2drink


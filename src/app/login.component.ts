import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div align = "center">
      <img src="../assets/logofinal.png" alt="to-downtown" class="main-logo">

      <div>
        <input type="text" id="name" placeholder = "Username" name="username">
        <input type="password" id="password" placeholder = "Password" name="password">

        <a routerLink="/new-ride"><input type="submit" value="Login"></a>
        
        <a href=""> Create Account? </a> 
      </div>
    </div>
  `,
  styles: [`
        .main-logo {
            padding: 0 10px;
            margin: 0 auto;
            display: block;
            width: 80%;
            box-sizing: border-box;
        }

    input[type=text], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    
    input[type=password], select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        background-color: #39B7CD;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #a9a9a9;
    }

    div {
        padding: 10px;
    }


    `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ride',
  template: `
    <div class="wrapper main-bg-color">
      <img src="../assets/logofinal.png" alt="to-downtown" class="main-logo">
      <div class="destination-buttons">
        <img src="../assets/todt.png" alt="to-downtown" class="to-downtown-button">
        <img src="../assets/fromdt.png" alt="from-downtown" class="from-downtown-button">
      </div>
    </div>
  `,
  styles: [`
        .wrapper {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-between;
        }
        .main-logo {
            padding: 0 10px;
            margin: 0 auto;
            display: block;
            width: 80%;
            box-sizing: border-box;
        }
        .destination-buttons img {
            width: 100%;
            margin: 0 auto;
            padding: 0 auto;
            border: 0;
            display: block;
        }
    `]
})
export class NewRideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

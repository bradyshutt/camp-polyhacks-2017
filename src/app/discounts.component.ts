import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discounts',
  template: `
    <div>
      <img src="../assets/discountsheader.png" alt="">
      <img src="../assets/discounttab.png" alt="">
      <img src="../assets/deallist.png" alt="">
    </div>
  `,
  styles: [`
    img {
        width: 100%;
    }
    `]
})
export class DiscountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

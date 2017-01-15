import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ride',
  template: `
    <div>
      
      <div align= "center">
        <h2>RideRight</h2>
        <div>
          <button class = "button"> To Downtown </button>
          <br/>
          <button class = "button"> From Downtown </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class NewRideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

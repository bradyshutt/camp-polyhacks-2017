import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-downtown',
  template: `
     <button class="round-button" type="button">Current Location</button> <br/>
     <select>
        <option value = "1">1</option>
        <option value = "2">2</option>
        <option value = "3">3</option>
     </select>
  `,
  styles: [`
    .size{
       height: 30px;
       width: 400px;
    }
    .round-button{
       border-radius: 15px;
       background: #E04C5B;
       width: 400px;
       height: 30px;
    }
`]
})
export class ToDowntownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

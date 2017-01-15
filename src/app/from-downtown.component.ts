import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-downtown',
  template: `
<div>
  <div align = "center" overflow="hidden">
    <div>
      <img class = "header" src = "../assets/fromdt.png" style = "float: right;">
      <input type="text" readonly id="pickupLoc" placeholder="Pick-Up Location: "> 
      <img class = "mapimg" src = "../assets/map2.png">
      <input type="text" id="destination" placeholder = "Enter Destination" name="destination">
      <p> 
        <input type="submit" value="Submit Request" > <br>
        <a routerLink="/new-ride"><button class="back" value="Go Back" >Go Back</button></a> <br>
      </p> 

  </div>
  <div class = "space"> </div>   
  </div>
<div class = "space"></div>

</div>
  `,

  styles: [`

.space {padding: 150px;}
.nspace {padding: 5px;}
.regimg {
  opacity: 0.7;
  position: relative;
  width: 15%;
  height: 15%;
}
.header {
  width: 100%;
  height: 25%;
}
.mapimg {
  width: 50%; 
}
body {
  height: 870px;
  width: 900px;
  position: absolute;
  background-color: #f2f2f2;
  padding: 10px;
}
input[type=text], select {
    width: 100%;
    padding: 12px 20px 10px 10px ;
    margin: 8px 8px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
}
input[type=submit], select {
  font-size: 16px;
}
p.sans {
  font-family: 'PT Sans', sans-serif;
}
input[type=submit] {
    width: 100%;
    background-color: #E04C5B;
    color: white;
    padding: 14px 20px 10px 10px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
input[type=submit]:hover {
    background-color: #a9a9a9;
}
.back {
    background-color: deepskyblue;
    width: 100%;
    color: white;
    padding: 14px 20px 10px 10px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

    `]
})
export class FromDowntownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

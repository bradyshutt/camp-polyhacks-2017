import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-downtown',
  template: `
  <div>
    <div align="center" overflow="hidden">
      <div>
        <img class="header-img" src = "../assets/todt.png" style="float:right;">
        <input type="text" id="pickupLoc" placeholder="Current Location: ">  
        <img class="mapimg" src="../assets/map2.png">
        <input type="text" id="destination" placeholder="Enter Destination" name="destination"> 
        <p>
          <input type="text" placeholder="Number of People" name="numOfPeople"/>
          <input type="submit" value="Submit Request" > <br>
          <button class="back" value="Go Back" >Go Back</button> <br>
        </p> 
      </div> 
  </div>
</div>
  `,
  styles: [`

.regimg {
  opacity: 0.7;
  position: relative;
  width: 20%;
  height: 20%;
}

.mapimg {
  width: 100%; 
  height: 50%;
  display: block;
}
.header-img {
    margin: 5px 0;
    width: 100%;
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
export class ToDowntownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

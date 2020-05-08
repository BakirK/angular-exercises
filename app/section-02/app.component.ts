import { Component } from '@angular/core';

// {{}} interpolation - Component to DOM
// []   property binding - Component to DOM
// ()   event binding - DOM to Component

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>

  <fieldset>
    <!-- <img src={{image}}/> -->
    <img src="{{image}}"/>
    <img [src]="image"/>
  </fieldset>

  <fieldset>
    <label [style.color]="color">Favorite Color</label>
    <button (click)="clicked()">Toggle color</button>
    {{color}}
    <select #nani (change)="colorChange(nani.value)"> 

    <!-- <select (change)="colorChange($event.target.value)">-->
      <option>red</option>
      <option>blue</option>
      <option>green</option>
    </select>
  </fieldset>
  <button (click)="hideAddress = !hideAddress">Toggle address</button>

  <fieldset [hidden]="hideAddress">
    <label>street:</label> {{street}}<br>
    <label>city: </label> {{city}}<br>
    <label>region: </label> {{region}}<br>
    <select (change)="regionChange($event.target.value)">
      <option>East</option>
      <option>North</option>
      <option>South</option>
      <option>West</option>
    </select>
  </fieldset>
  `,
})

export class AppComponent {
  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'pink';
  street: string = "Pozegina";
  city: string = "Sarajevo";
  region: string = "East";
  hideAddress: boolean = false;



  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }

  addressClick() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
    this.region = region;
  }
}

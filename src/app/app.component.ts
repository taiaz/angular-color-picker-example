import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user = { color: '#234532' };
  disabled = false;
  selectedColor: ThemePalette = 'primary';
  touchUi = false;

  options = [
    { value: true, label: 'True' },
    { value: false, label: 'False' },
  ];

  listColors = ['primary', 'accent', 'warn'];

  constructor() {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'titlebar',
  templateUrl: './app/ui/titlebar.html'
})
export class TitleBarComponent {
  constructor() { }

  Minimize(e: any) {
    e.preventDefault();
    console.log('hello world!');
  }
}

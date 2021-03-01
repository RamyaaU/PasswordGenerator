import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PasswordGenerator';

  password ='';

  onButtonClick(){
    this.password = 'MY PASSWORD!!!';
  }

  getName(){
    return 'Daksha';
  }
}
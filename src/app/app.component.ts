import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  includeLetters = false;
  includeNumbers  = false;
  includeSymbols = false;
  title = 'PasswordGenerator';

  password ='';

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }


  onChangeUseSymbols(){
    this.includeSymbols= !this.includeSymbols;
  }

  onButtonClick(){
    console.log(`About to generate a password with the following: 
      Includes letters: ${this.includeLetters}
      Includes numbers: ${this.includeNumbers}
      Includes symbols: ${this.includeSymbols}
      `);
    this.password = 'MY PASSWORD!!!';
  }

  getName(){
    return 'Daksha';
  }
}
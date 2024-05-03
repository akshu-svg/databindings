import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'databindings';
  skills : Array<string> = ['HTML5', "CSS", "JavaScript", "TypeScript", "Angular"];

  stdArr = [
    {
      fname : "Jhon",
      lname : "Doe",
      email :  "jhondoe@gmail.com",
      contact : 1234567890
    },
    {
      fname : "May",
      lname : "Doe",
      email :  "md@gmail.com",
      contact : 2579514552
    },
    {
      fname : "James",
      lname : "Bond",
      email :  "jamesbond@gmail.com",
      contact : 4589262825
    }
  ]
}

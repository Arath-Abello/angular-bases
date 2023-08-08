import { Component } from '@angular/core';

// decorador que guarda informacion del componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'hola mundo';


}

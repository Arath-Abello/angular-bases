import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero: string | undefined = '';

  removeLastHero():void{
    // pop: elimina el ultimo elemento del array y toma el valor del elemento eliminado
    const heroe = this.deletedHero = this.heroNames.pop();
    // console.log({heroe});
  }

}

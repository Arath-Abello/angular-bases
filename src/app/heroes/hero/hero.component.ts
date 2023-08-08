import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  // "get" se utiliza principalmente cuando queremos obtener un valor específico de una propiedad o variable.
  // luego se puede interpolarizar{{}} en el html del componente llamando al nombre del function sin poner parentesis para llamar el valor de name
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    // en las comillas invertidas usamos esa sintaxis para llamar las dos propiedades(variables)
    return `${this.name}-${this.age}`;
  }

  changeHero():void{
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 25;
  }

  reset():void{
   this.name = 'ironman';
   this.age = 45;
  }
}

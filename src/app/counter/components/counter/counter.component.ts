import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h2>counter: {{counter}}</h2>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">reset</button>
<button (click)="increaseBy(-1)">-1</button>


  `
})

export class CounterComponent {
  public counter: number = 10;

  /*
  "increaseBy" no devuelve ningún valor, ya que su tipo de retorno está especificado como "void".
  Por lo tanto, esta función simplemente incrementa el valor de la variable "counter" en 1, pero no devuelve ningún resultado. */
  increaseBy(value: number):void{
    // el operador "+=" se utiliza para sumar o restar un valor a una variable y asignar el resultado a esa misma variable, dependiendo del signo del valor que se le pase.
      this.counter += value;
  }

  reset():void{
    this.counter = 10;
  }

}

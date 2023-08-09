import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // enviar datos del hijo(add-character.component.ts) al padre(main-page.component.ts)
  @Output()
  // emitir un nuevo evento y este evento de tipo interfaz de objetos y guardarlo en la variable onNewCharacter
 public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character);

    // si la longitud del nombre es igual a cero entonces que no devuelva nada
    if(this.character.name.length === 0) return;

    // entonces cuando se ejecute la funcion la variable onNewCharacter emitira la variable character
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0}
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Input es para recibir datos del archivo padre(main-page.component.ts) para este archivo hijo(lisr.component.ts)
  @Input()
  public characterList: Character[] = [];

  @Output()
  //* recuerda que los genericos<aceptan solo tipo de datos>
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {
    // si no existe un id entonces que no devuelva nada
    if(!id) return;

    this.onDelete.emit(id);
  }
}

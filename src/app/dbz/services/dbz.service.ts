import { Injectable } from '@angular/core';
// sitio web: https://www.npmjs.com/package/uuid
// es para generar id aleatorios
// si apretas control + espacio te salen opciones y elegimos v4
import { v4 } from 'uuid';
import { Character } from '../interfaces/character.interface';

/**
 * un servicio es un proveedor de datos, que mantiene lógica de acceso a ellos y
 * operativa relacionada con el negocio y las cosas que se hacen con los datos dentro de una
 * aplicación. Los servicios serán consumidos por los componentes, que delegarán en ellos la
 *  responsabilidad de acceder a la información y la realización de operaciones con los datos.
 */
@Injectable({providedIn: 'root'})
export class DbzService {

  // usar any es mala práctica solo se usa temporalmente ya que no sabemos que tipo de dato tendra el array
  public character: Character[] = [{
    id: v4(),
    name: 'Krillin',
    power: 1000
  }, {
    id: v4(),
    name: 'Goku',
    power: 9500
  }, {
    id: v4(),
    name: 'Vegueta',
    power: 7500
  }];

  recibirCharacter(character: Character):void{

    // agrega el id y los tres puntos es un spread que tome todas las propiedades de la interfaz Character guardada en la variable character
    const newCharacter: Character = {
      id: v4(), ...character
    }

    this.character.push(newCharacter)
  }

  // recibirDelete(index: number){
  //   // que borre un solo elemento
  //   this.character.splice(index, 1);
  // }

  deleteById(id: string){
    /**
     * filtrarán los elementos del array  this.character  para mantener solo aquellos cuyo  id
     * no sea igual al valor de la variable  id .
     */
    this.character = this.character.filter(newCharacter => newCharacter.id !== id)
  }

}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  // si estamos usando directivas como ngIf, etc. Entonces es necesario importar ese funcionamiento en el modulo de heroes que encapsula los dos compoenentes de hero y list ya que si no lo hacemos nos dara error y no funcionarán esas directivas (esto no pasa en el modulo principal de app.module, pero en heroModule si porque estamos encapsulando y llamandolo al module app.module )
  imports: [
    CommonModule
  ]
})
export class HeroesModule{}

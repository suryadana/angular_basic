import { NgModule } from '@angular/core';
import { KeysPipe } from './pipes/enum.pipe';


@NgModule({
  declarations: [
    KeysPipe
  ],
  exports: [
    KeysPipe
  ]
})
export class PipeModule { }

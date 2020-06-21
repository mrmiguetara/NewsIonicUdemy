import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [
    NewsComponent,
    NewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsComponent
  ]
})
export class ComponentsModule { }

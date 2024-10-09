import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './add-item/add-item.component';

export const routes: Routes = [
  { path: '', component: ItemsComponent }, 
  { path: 'add', component: AddItemComponent },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

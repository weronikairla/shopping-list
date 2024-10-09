import { Component } from '@angular/core';
import { Item } from './model/item.model';
import { items } from './model/mock-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-list';
  items: Item[] = items; 
}

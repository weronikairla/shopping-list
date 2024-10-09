import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.itemService.getList().subscribe((items: Item[]) => (this.items = items));
  }

  addItem(item: Item) {
      console.log('add item')
      this.itemService
      .addItem(item)
      .subscribe(
        (item) => (this.items.push(item) )
      );
  }

}

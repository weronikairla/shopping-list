import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../model/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  items: Item[] = [];
  @Input() item!: Item;

  constructor(private itemService: ItemService) {
    this.item = { id: 0, name: '', description: '', quantity: 1};
   }

  ngOnInit(): void {
    this.itemService.getList().subscribe((items: Item[]) => {
      this.items = items;
    });
  }


}

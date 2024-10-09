import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onDeleteItem: EventEmitter<Item> = new EventEmitter<Item>(); 

  constructor(private itemService: ItemService) {
    this.item = { id: 0, name: '', description: '', quantity: 1};
   }

  ngOnInit(): void {
    this.itemService.getList().subscribe((items: Item[]) => {
      this.items = items;
    });
  }

  onDelete(item: Item) {
    console.log("delete");
    this.onDeleteItem.emit(item); 
  }


}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../model/item.model';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  showAddItem: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private itemService: ItemService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddItem = value;
    });
  }

  showAddForm: boolean = false;
  name:string = '';
  quantity!:number;
  description!:string;
 
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter<Item>();
 
  onSubmit() {
    if (!this.name) {
      alert('Please add an item name');
      return;
    }
 
    const newItem: Item = {
      id: 0, // Set the ID accordingly when service avaiable
      name: this.name,
      quantity: this.quantity,
      description: this.description
    };

    console.log('add item')
      this.itemService
      .addItem(newItem)
      .subscribe(
        (item) => {
          alert('New item "' + item.name + '" added');
         }
      );
    
  }

}

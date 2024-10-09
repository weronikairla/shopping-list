import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  showAddItem: boolean = false;
  subscription: Subscription;
 
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddItem = value));
  }

  ngOnInit(): void {
  }

  toggleAddItem(): void {
    this.uiService.toggleAddItem();
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  showAddItem: boolean = false;
  subscription: Subscription;
 
  constructor(private uiService: UiService, private router: Router ) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => { 
      this.showAddItem = value;
      this.showAddItem ? this.router.navigate(['/add']) : this.router.navigate(['/']); 
    } );
  }

  ngOnInit(): void {
  }

  toggleAddItem(): void {
    this.uiService.toggleAddItem();
  }

}

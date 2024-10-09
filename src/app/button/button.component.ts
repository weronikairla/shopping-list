import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = '';
  @Input() color: string = '#000';

  ngOnInit(): void {
  }

  @Output() btnClick: EventEmitter<void> = new EventEmitter<void>();
 
  onClick(): void {
    this.btnClick.emit();
  }

}

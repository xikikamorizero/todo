import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date: string = '00:00:0000';
  @Input() status:string = '';

  @Output() taskSubmitted = new EventEmitter<number>();

  deleteCard(){
    this.taskSubmitted.next(this.id)
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor() { }
  @Input()
  nameSkill:string = '';
  @Input()
  imgLenguage:string = '';
  @Input()
  descriptionLenguage:string = '';

}

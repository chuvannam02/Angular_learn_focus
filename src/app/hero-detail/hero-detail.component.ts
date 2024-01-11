import { Component, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  @Input() item = '';
  doSomeThing() :void{
    alert("Triggered method in child component hero detail!");
  }
}


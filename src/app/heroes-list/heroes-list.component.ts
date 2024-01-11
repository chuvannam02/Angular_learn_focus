import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'],
})
export class HeroesListComponent {
  constructor() {}
  @ViewChild('toggleComp')
  toggleComp!: HeroDetailComponent;
  toggleInside() {
    this.toggleComp.doSomeThing();
  }
  isSpecial: Boolean = true;
  twoWayBinding: string = 'Two way binding';
  currentItem = 'Television';
  changeStateOfIsSpecial(): void {
    this.isSpecial = !this.isSpecial;
  }
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  callPhone(value: string) {
    alert(`Calling ${value} ...`);
  }
  @ViewChildren(HeroDetailComponent)
  toggleList!: QueryList<HeroDetailComponent>;
  ngAfterViewInit() {
    console.log(this.toggleList);
  }
}

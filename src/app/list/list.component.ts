import { Component, OnInit,Output,EventEmitter, ChangeDetectorRef} from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private list:ListService) { 
    this.heroes=[];
  }
  restart(){
    
    this.getHeroes();
  }


  ngOnInit() {
    this.list.myData$.subscribe(data => {
      this.getHeroes();
    });
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
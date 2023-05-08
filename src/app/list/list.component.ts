import { Component, OnInit,Output,EventEmitter} from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { 
  }
  public restart(){
    this.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
import { Component, OnInit } from '@angular/core';
import { Hero, Hero2 } from '../hero';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Location } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private list: ListService
  ) { }
  heroes: Hero[] = [];
  submitted = false;
  onSubmit() { this.submitted = true; }
  model = new Hero2(1, '', '',);

  classes = ['support', 'attack','ranger', 'tank', 'flanker'];

  ngOnInit(): void {
    this.getHeroes();
  }
  goBack(): void {
    this.location.back();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    
      .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string, clas: string): void {
    name = name.trim();
    clas = clas.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, clas } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
    this.list.setMyData("restart");
  }
}
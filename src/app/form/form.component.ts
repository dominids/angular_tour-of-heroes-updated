import { Component, OnInit } from '@angular/core';
import { Hero, Hero2 } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  heroes: Hero[] = [];
  submitted = false;
  onSubmit() { this.submitted = true; }
  model = new Hero2(1, '', '',);

  classes = ['support', 'attack',
    'ranger', 'tank', 'flanker'];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string, classes: string): void {
    name = name.trim();
    classes = classes.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, class: classes } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
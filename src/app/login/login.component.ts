import { Component, OnInit } from '@angular/core';
import { Hero, user2 } from '../hero';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../service/message.service';
import { Location } from '@angular/common';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  heroes: Hero[] = [];
  submitted = false;
  onSubmit() { this.submitted = true; }
  model = new user2('', '', '');

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
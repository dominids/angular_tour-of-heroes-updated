import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  submitted = false;
  onSubmit() { this.submitted = true; }

  classes = ['support', 'attack',
    'ranger', 'tank', 'flanker'];

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(String(this.route.snapshot.paramMap.get('id')),this.hero)
        .subscribe(() => this.goBack());
    }
  }
}

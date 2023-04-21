import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr. Nice', class: 'support' },
      { id: 2, name: 'Bombasto', class: 'attack' },
      { id: 3, name: 'Celeritas', class: 'flanker' },
      { id: 4, name: 'Magneta', class: 'support' },
      { id: 5, name: 'RubberMan', class: 'tank' },
      { id: 6, name: 'Dynama', class: 'flanker' },
      { id: 7, name: 'Dr. IQ', class: 'attack' },
      { id: 8, name: 'Magma', class: 'tank' },
      { id: 9, name: 'Tornado', class: 'attack' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1:9;
  }
}
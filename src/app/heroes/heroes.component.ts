import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  selectedHero?: Hero;
  heroes: Hero[] = [];
  test: any[] = [];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Selected hero: ${hero.HeroName}`);
  }
  add(HeroName: string): void {
    HeroName = HeroName.trim();
    if (!HeroName) {
      return;
    }
    this.heroService
      .addHero({ HeroName } as Hero)
      .subscribe((_hero) => this.heroes.push(_hero));
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.HeroId).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(
        (_heroes) => ((this.heroes = _heroes), console.log(this.heroes))
      );
  }
}

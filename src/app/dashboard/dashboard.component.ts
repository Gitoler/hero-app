import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];
  ngOnInit(): void {
    this.get();

  }
  get():void {
    this.heroService.getHeroes().subscribe(
      _heroes => this.heroes = _heroes.slice(1, 5)
    )
  }

}

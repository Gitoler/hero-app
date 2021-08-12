import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroFormService } from '../hero-form.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent {
  constructor(private heroFormService: HeroFormService) {}
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  disableSelect = new FormControl(false);

  submitted = false;

  onSubmit(name: string, egco: string, power: string): void {
    name = name.trim();
    egco = egco.trim();
    power = power.trim();
    if (!name || !egco || !power) {
      return;
    }
    const model = new Hero(18, name, egco, power);
    this.heroFormService.getHeroes().subscribe((_hero) => console.log(_hero));
    // this.heroFormService
    //   .addHeroForm(model)
    //   .subscribe((_hero) => console.log(_hero));
  }

  // newHero() {
  //   this.model = new Hero(42, '', '');
  // }
}

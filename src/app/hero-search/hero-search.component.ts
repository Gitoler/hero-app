import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  startWith,
  map,
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(private heroService: HeroService) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    // this.heroes$ = this.heroService
    //   .searchHeroes(term)
    //   .pipe(debounceTime(300), distinctUntilChanged());
    this.searchTerms.next(term);
    // this.searchTerms.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {
    // console.log('hello');
    this.heroes$ = this.myControl.valueChanges.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => {
        console.log(typeof term);
        return this.heroService.searchHeroes(term);
      })
    );
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value))
    // );
  }
  // test
  myControl = new FormControl();
}

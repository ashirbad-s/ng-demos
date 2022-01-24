import { Component, OnInit } from '@angular/core';
import { Heroes } from '../heroes';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:Heroes[]=[];




  constructor
  (
    private heroService: HeroService
  ) { }

  ngOnInit()
  {
    this.showHeroes();
  }

  showHeroes()
  {
    this.heroService.showHero().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}

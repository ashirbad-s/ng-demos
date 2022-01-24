import { Component, OnInit, Input } from '@angular/core';
import { Heroes } from '../heroes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  @Input('hero') Hero?: Heroes;

  constructor
  (
    private route : ActivatedRoute,
    private heroService : HeroService,
    private Location : Location
  ) { }

  ngOnInit(): void 
  {
    this.getHero();
  }

  getHero()
  {
    const id=Number(this.route.snapshot.paramMap.get('ID'));
    this.heroService.getHero(id).subscribe(hero=>this.Hero=hero);
  }

  goBack()
  {
    this.Location.back();
  }

  save()
  {
    if(this.Hero)
    {
      this.heroService.updateHero(this.Hero).subscribe(()=>this.goBack());
    }
  }
}


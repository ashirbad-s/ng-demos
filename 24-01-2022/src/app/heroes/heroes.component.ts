import { Component, OnInit } from '@angular/core';
import { Heroes } from '../heroes';
//import { Heroes_Database } from '../mock-heroes';
import { HeroService } from "../hero.service";
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*
  hero: Heroes = 
  {
    ID: 1,
    Name: 'Windstorm'
  };
  */
  
  heroes : Heroes[] = [];
  selectedHero?: Heroes;
    
  constructor
  (
    private heroService : HeroService,
    private messageService : MessagesService
  )
  { }

  ngOnInit()
  {
    this.getHeroes();
  }

  onSelect(hero : Heroes)
  {
    this.selectedHero=hero;
    this.messageService.getMessage(`HeroesComponent : Selected Hero with ID : ${hero.ID} and Name : ${hero.Name}`)
  }
  
  getHeroes()
  {
    this.heroService.showHero()
        .subscribe(heroes=>this.heroes= heroes);
  }
   
  add(name: string)
  {
    name = name.trim();
    if (!name) return;
    this.heroService.addHero({ name } as unknown as Heroes)
      .subscribe(hero => 
      {
        this.heroes.push(hero);
      });
  }

  delete(hero: Heroes): void 
  {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.ID).subscribe();
  }


}
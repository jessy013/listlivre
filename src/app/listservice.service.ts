import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { livre } from './livre/livre.model';

@Injectable({
  providedIn: 'root'
})
export class livreService {

  private _listlivre:livre[]=[];
  listChangedEvent: EventEmitter<livre[]> = new EventEmitter();
  ajouter()
  {
    this._listlivre.push()
    this.listChangedEvent.emit(this._listlivre)
  }
  retourner()
  {
    return this._listlivre;
  }
  constructor() { }
   setListe(liste:livre[])
   {
     this._listlivre = liste
     
    this.listChangedEvent.emit(this._listlivre)
   }

getlivre(): livre[]
{
  return this._listlivre
}
getHero(pHero:Hero):Hero
 { 
  const heroTrouver = this._listeHero.find(hero=>
    {return hero.secretId === pHero.secretId})
return heroTrouver!;
}
}


function pTitre(pTitre: any) {
  throw new Error('Function not implemented.');
}


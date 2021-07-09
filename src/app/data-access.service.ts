import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { livre.service } from './LivreService/livre.service';
import { livre } from './livre/livre.model';


@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private httpservice:HttpClient,
    private livreservice: LivreService) {
      
    }

}
saveData(plivreservice)

}


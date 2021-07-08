import { Component } from '@angular/core';
import { livre } from './livre/livre.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listlivre';
  Livre = new livre ('La Foire aux horreurs ','R. L. Stine','horreurs pour enfant','ISBN 2-7625-8456-6');
  Livre2 = new livre ('Tic toc, bienvenue en enfer','R. L. Stine','horreurs pour enfant','ISBN 2-7625-8457-4');
  Livre3 = new livre ('Le Manoir de la chauve-souris','R. L. Stine','horreurs pour enfant','ISBN 2-7625-8617-8');
  Livre4 =new livre ('Les Terribles Expériences du docteur Onk ','R. L. Stine','horreurs pour enfant','ISBN 2-7625-8618-6');
  listlivre : livre[]=[]









}

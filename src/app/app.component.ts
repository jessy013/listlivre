import { Component } from '@angular/core';
import { livre } from './livre/livre.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listlivre';
  monLivre = new livre ('','','');
  monLivre2 = new livre ('','','');
  monLivre3 = new livre ('','','');
  monLivre4 =new livre ('','','');
  listlivre : livre[]=[]









}

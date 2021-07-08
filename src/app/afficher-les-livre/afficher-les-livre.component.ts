import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-afficher-les-livre',
  templateUrl: './afficher-les-livre.component.html',
  styleUrls: ['./afficher-les-livre.component.scss']
  
})
export class AfficherLesLivreComponent implements OnInit {
  @Input() titre?: string;
  @Input() auteur?:string;
  @Input() genre?: string;
  @Input() ISBN?: string;
    constructor() { }
  
    ngOnInit(): void {
    }
  
  


}

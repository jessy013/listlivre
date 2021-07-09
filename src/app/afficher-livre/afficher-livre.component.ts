import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-afficher-livre',
  templateUrl: './afficher-livre.component.html',
  styleUrls: ['./afficher-livre.component.scss']
})
export class AfficherLivreComponent implements OnInit {
  @Input() titre?: string;
  @Input() auteur?:string;
  @Input() genre?: string;
  @Input() ISBN?: string;
  constructor() { }

  ngOnInit(): void {
  }

}

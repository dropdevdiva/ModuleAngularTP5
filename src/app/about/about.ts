import { Component } from '@angular/core';
import { ActiviteService } from '../services/activite';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  constructor(public activiteService: ActiviteService) {}

}
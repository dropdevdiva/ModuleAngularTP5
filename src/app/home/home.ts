import { ActiviteService } from '../services/activite';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  constructor(
  public activiteService: ActiviteService,
  private router: Router
) {}

  nbItems: number = 4;
  btnText: string = "Envoyer";
  objectifText: string = "";

  get objectifs(): string[] {
    return this.activiteService.objectifs;
  }

  ajoutItem() {
    this.objectifs.push(this.objectifText);
    this.nbItems = this.objectifs.length;
  }

  ouvrirActivite(index: number) {
  this.router.navigate(['/consultAct', index]);
}

  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }
}
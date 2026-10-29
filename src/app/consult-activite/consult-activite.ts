import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite';

@Component({
  selector: 'app-consult-activite',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './consult-activite.html',
  styleUrl: './consult-activite.scss'
})
export class ConsultActivite {

  index: number;
  activite: string;
  nouveauTitre: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public activiteService: ActiviteService
  ) {
    this.index = Number(this.route.snapshot.paramMap.get('id'));
    this.activite = this.activiteService.objectifs[this.index];
    this.nouveauTitre = this.activite;
  }

  supprimeElem(index: number) {
    this.activiteService.removeItem(index);
    this.router.navigate(['/']);
  }

  sauvegarder() {
    this.activiteService.objectifs[this.index] = this.nouveauTitre;
    this.activite = this.nouveauTitre;
    this.router.navigate(['/']);
  }
}
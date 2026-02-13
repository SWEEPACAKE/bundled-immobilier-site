import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { TypeModel } from '../../models/type-model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  mesTypes = signal<TypeModel[]>([]);
  mesVilles = signal<any[]>([]);
  formulaire: FormGroup = new FormGroup({});

  constructor(private monApiService: ApiService, private fb: FormBuilder, private router: Router) {

    this.formulaire = this.fb.group({
      type: [''],
      localisation: [''],
      budget: [0],
      vente: [false],
      location: [false]
    });

  }

  ngOnInit(): void {

    // Récupération des types de biens
    this.monApiService.getTypes().subscribe({
      next: (response) => {
        this.mesTypes.set(JSON.parse(response));
      }
    });

    // Récupération des villes
    this.monApiService.getVilles().subscribe({
      next: (response) => {
        this.mesVilles.set(JSON.parse(response));
      }
    });

  }

  envoyerFormulaire() {
    this.router.navigate(['/nos-offres'], {
      queryParams: {
        type: this.formulaire.value.type,
        localisation: this.formulaire.value.localisation,
        budget: this.formulaire.value.budget,
        vente: this.formulaire.value.vente,
        location: this.formulaire.value.location
      }
    });
  }

}

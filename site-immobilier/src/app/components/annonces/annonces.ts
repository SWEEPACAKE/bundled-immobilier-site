import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api-service';
import { OffreModel } from '../../models/offre-model';

@Component({
  selector: 'app-annonces',
  imports: [],
  templateUrl: './annonces.html',
  styleUrl: './annonces.scss',
})
export class Annonces implements OnInit {

  private type: string = '';
  private localisation: string = '';
  private budget: number = 0;
  private vente: boolean = false;
  private location: boolean = false;
  mesOffres = signal<OffreModel[]>([]);

  constructor(private maRoute: ActivatedRoute, private monApiService: ApiService) {

    this.type = this.maRoute.snapshot.queryParamMap.get('type') ?? "";
    this.localisation = this.maRoute.snapshot.queryParamMap.get('localisation') ?? "";
    this.budget = Number(this.maRoute.snapshot.queryParamMap.get('budget')) ?? 0;
    this.vente = this.maRoute.snapshot.queryParamMap.get('vente') === 'true';
    this.location = this.maRoute.snapshot.queryParamMap.get('location') === 'true';

  }


  ngOnInit(): void {
    this.monApiService.getOffres(this.type, this.localisation, this.budget, this.vente, this.location).subscribe({
      next: (response) => {
        this.mesOffres.set(JSON.parse(response));
      }
    });
  }

}

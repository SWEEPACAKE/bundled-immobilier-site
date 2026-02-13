import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Annonces } from "../../components/annonces/annonces";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-recherche-offres',
  imports: [Navbar, Annonces, Footer],
  templateUrl: './recherche-offres.html',
  styleUrl: './recherche-offres.scss',
})
export class RechercheOffres {

}

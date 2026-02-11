import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Header } from "../../components/header/header";
import { QuiSommesNous } from "../../components/qui-sommes-nous/qui-sommes-nous";
import { NosOffres } from "../../components/nos-offres/nos-offres";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-homepage',
  imports: [Navbar, Header, QuiSommesNous, NosOffres, Footer],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

}

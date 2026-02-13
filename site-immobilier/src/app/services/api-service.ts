import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private baseUrl: string = "http://localhost:8080/";

  constructor(private monHttpClient: HttpClient) {}

  getTypes () {
    return this.monHttpClient.get(`${this.baseUrl}types.php`, {
      responseType: 'text'
    })
  }

  getVilles () {
    return this.monHttpClient.get(`${this.baseUrl}villes.php`, {
      responseType: 'text'
    });
  }

  getArticle(id_article: number) {
    return this.monHttpClient.get(`${this.baseUrl}article.php?id=${id_article}`, {
      responseType: 'text'
    });
  }

  getOffres(type: string = '', localisation: string = '', budget: number = 0, vente: boolean = false, location: boolean = false) {

    let url = `${this.baseUrl}offres.php?vente=${vente}&location=${location}`;

    if(type !== '') {
      url += `&type=${type}`;
    }
    if(localisation !== '') {
      url += `&localisation=${localisation}`;
    }
    if(budget != 0) {
      url += `&budget=${budget}`;
    }
    return this.monHttpClient.get(url, {
      responseType: 'text'
    });
  }

  postFormContact(formData: FormData) {
    return this.monHttpClient.post(`${this.baseUrl}contact.php`, formData, {
      responseType: 'text'
    });
  }

}

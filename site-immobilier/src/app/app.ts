import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from './services/auth-service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('site-immobilier');

  constructor(private monAuthService: AuthService){}

  ngOnInit(): void {
    this.monAuthService.fetchJwtToken().subscribe({
      next: () => {},
      error: (err) => {
        console.error('Impossible de récupérer le JWT');
        console.log(err);
      }
    });
  }

}

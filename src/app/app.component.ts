import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from '@firebase/auth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private auth: Auth, private authService: AuthService) {}

  ngOnInit(): void {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authService.currentUser = user;
        this.authService.userName = user.displayName;
        this.authService.photoUrl = user.photoURL;
      } else {
        this.authService.currentUser = null;
      }
    });
  }
}

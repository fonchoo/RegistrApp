import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent  implements OnInit {

  private authService = inject(AuthService);
  router: any;

  constructor() { }

  ngOnInit(): void {
    this.authService.logout();
    //this.router.navigate(['/login']); // Redireccionar al login al desloguearse
  }

}

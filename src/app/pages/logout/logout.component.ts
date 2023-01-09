import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MvsApiSevService } from 'src/app/service/mvs-api-sev.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( 
    private service: MvsApiSevService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.service.logout();
  }

}

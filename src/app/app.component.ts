import { Component, HostListener } from '@angular/core';
import { MvsApiSevService } from './service/mvs-api-sev.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-angular';
  navbg: any;
  isUserLoggedIn = false;
  
  constructor(private service: MvsApiSevService) { }

  ngOnInit() {
    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);

    if(storeData != null && storeData == "true") {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }

  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop,'scrolllength#');

    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.navbg = {
        'background-color':'#000000'
      }
    } else {
      this.navbg = {
        
      }
    }
  }

}

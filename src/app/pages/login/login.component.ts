import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MvsApiSevService } from 'src/app/service/mvs-api-sev.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";
  formData!: FormGroup;

  constructor(
    private service: MvsApiSevService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.formData = new FormGroup({
      userName: new FormControl("admin"),
      password: new FormControl("admin"),
    });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log("userName :" + this.userName);
    console.log("password :" + this.password);

    this.service.login(this.userName, this.password).subscribe(data => {
      console.log("Login Success: " +data);

      if(data) this.router.navigate(['/home']);

      setTimeout(() => {
        window.location.reload();
      },1000);
    });
  }

}

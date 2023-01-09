import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MvsApiSevService } from 'src/app/service/mvs-api-sev.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private service:MvsApiSevService) {}

  ngOnInit(): void {
  }

  searchResult:any;

  searchFrom = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm() {
    console.log(this.searchFrom.value,'searchform');
    this.service.getsearchMovie(this.searchFrom.value).subscribe((result) => {
      console.log(result,'searchmovie#');
      this.searchResult = result.results;
    });
  }

}

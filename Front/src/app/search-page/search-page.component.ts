import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  private value:string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.value = '';
  }

  onKey(event){
    this.value = event.target.value;
  }

  onSubmit(){
    console.log(this.value);
    this.router.navigate(['/list']);
  }

}

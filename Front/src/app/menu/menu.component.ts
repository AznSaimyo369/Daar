import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private value:string;

  constructor() {}

  ngOnInit(): void {
    this.value = '';
  }

  onKey(event){
    this.value = event.target.value;
    
  }
  
  onSubmit(){
    console.log(this.value);
  }

}

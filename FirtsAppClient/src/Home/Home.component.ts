import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  constructor() { }

  ngOnInit() {
  }

  setRegisterMode(value:boolean) {
    this.registerMode = value;
  }

}


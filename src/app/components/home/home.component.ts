import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // originally public sort: string
  public sort: "";
  constructor() { }
  

  ngOnInit(): void {
  }

}
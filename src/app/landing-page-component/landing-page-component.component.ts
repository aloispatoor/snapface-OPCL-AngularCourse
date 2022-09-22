import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})
export class LandingPageComponentComponent implements OnInit {
  landingPageTitle!: string;
  

  constructor() { }

  ngOnInit(): void {
    this.landingPageTitle = 'snapface';
  }

}

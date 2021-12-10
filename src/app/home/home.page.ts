import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public onboardSlides = []

  constructor() {}

  ngOnInit() {
    this.onboardSlides = [
      h
    ];
  }

  public goBack(){

  }

  public skipBtn(){

  }

}

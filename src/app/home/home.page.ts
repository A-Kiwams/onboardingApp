import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public onboardSlides = [];

  constructor() {}

  ngOnInit() {
    this.onboardSlides = [
      {
        title: 'title one',
        img: 'slide_1',
        description: 'some meaniful discription here',
      },
      {
        title: 'title two',
        img: 'slide_1',
        description: 'some meaniful discription here',
      },
      {
        title: 'title three',
        img: 'slide_1',
        description: 'some meaniful discription here',
      },
    ];
  }

  public goBack(){
  }

  public skipBtn(){

  }

}

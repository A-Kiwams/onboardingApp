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
        images: 'image_1',
        description: 'some meaniful discription here',
      },
      {
        title: 'title two',
        images: 'image_2',
        description: 'some meaniful discription here',
      },
      {
        title: 'title three',
        images: 'image_3',
        description: 'some meaniful discription here',
      },
    ];
  }

  public goBack(){
  }

  public skipBtn(){

  }

}

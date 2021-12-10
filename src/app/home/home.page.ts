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
        title: 'Prepare',
        images: 'image_1',
        description: 'Prepare for the exams',
      },
      {
        title: 'Practice',
        images: 'image_3',
        description: 'Practice on NursePass',
      },
      {
        title: 'Confidence',
        images: 'image_2',
        description: 'Build your confidence',
      },
    ];
  }

  public goBack(){
  }

  public skipBtn(){

  }

}

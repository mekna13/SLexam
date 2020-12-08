import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news=[
    {
      author: "Maago",
      newsTitle: "CoronaVirus",
      newsBody: "Number of Cases: 3432243",
      pubStatus: true,
      date: "01/12/2020"
    },
    {
      author: "Jade",
      newsTitle: "CoronaVirus",
      newsBody: "Number of Cases: 3432243",
      pubStatus: true,
      date: "01/12/2020"
    }
  ];
  constructor() { }

  getNews(){
    return this.news;
  }
  addNews( data ){
    this.news = data;
  }

}

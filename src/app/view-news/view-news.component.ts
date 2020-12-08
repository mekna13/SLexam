import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  news=[
    {
      author: "Megg",
      newsTitle: "CoronaVirus",
      newsBody: "Number of Cases: 3432243",
      pubStatus: true,
      date: "01/12/2020"
    }
  ];
  constructor(private _news: NewsService) { }


  ngOnInit(): void {
    this.news = this._news.getNews();
  }

}

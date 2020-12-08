import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  author = "";
  newsTitle = "";
  newsBody = "";
  pubStatus = false;
  date = "";
  news = [{
    author: "Megg",
    newsTitle: "CoronaVirus",
    newsBody: "Number of Cases: 3432243",
    pubStatus: true,
    date: "01/12/2020"
  }];

  constructor(private _news: NewsService) {
    this._news.addNews(this.news);
  }

  ngOnInit(): void {
    this.news = this._news.getNews();
  }
  
  submitNews(form: NgForm){
    console.log(form.value);

    this.author = form.value.author;
    this.newsTitle = form.value.newsTitle;
    this.date = form.value.date;

    this.news.push({ author :this.author, newsTitle: this.newsTitle , newsBody: this.newsBody, pubStatus: this.pubStatus, date: this.date });
    form.reset();
  }
  
}

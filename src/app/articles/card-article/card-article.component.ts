import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from '../../../app/models/Article';
import { ApiService } from '../../services/api.service';

import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {

  @Input()
  public articleID: number;

  @Output() 
  public isReady = new EventEmitter();

  public article: Article;

  constructor(private service: ApiService) {
    this.articleID = -1;
    this.article=new Article();
  }

  ngOnInit() {
    this.service.getArticle(this.articleID).subscribe(
      article => {this.article = article;
                  this.isReady.emit(1); 
                console.log(1);},
      error => { this.isReady.emit(2); 
        console.log(2);}
    );
  }
}


import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ApiService } from '../services/api.service';
import { MatGridList} from '@angular/material/grid-list';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {

  public offset: number;
  public allArticlesID: number[];
  
  public articlesID: number[];

  public isReady: boolean;

  
  public flagError!: boolean;
  public countChargeArticles: number;

  constructor(private service: ApiService,
              private cdr: ChangeDetectorRef) {

    this.allArticlesID = new Array<number>();
    this.articlesID = new Array<number>();
    this.offset = 5;

    this.isReady = false;
    this.isReady = false;
    this.countChargeArticles = 0;
   }

  ngOnInit() {
    this.service.getArticles().subscribe(
      stories => {this.allArticlesID = stories;
                  this.articlesID = stories.slice(0,this.offset);
      },
      error => {this.flagError = true;}
    );
  }

  
  changeIsLoading(event: string | number){
    if(+event == 1){
      this.countChargeArticles++;
      if(this.countChargeArticles == this.articlesID.length){
        this.isReady = true;
        this.countChargeArticles = 0;
      }
    }
    else{
      this.flagError = true;
    }
  }

 
  onPaginateChange(index: number){
    this.flagError = false;
    this.isReady = false;
    index = this.offset*index;
    this.service.getArticles().subscribe(
      stories => {this.allArticlesID = stories;
                  this.articlesID = stories.slice(index,index+this.offset);
      },
      error => {this.flagError = true;}
    );
  }

}

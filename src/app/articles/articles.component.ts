import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ApiService } from '../services/api.service';
import { MatGridList} from '@angular/material/grid-list';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {

  //variable que mantiene la cantidad de articulos por página
  public offset: number;
  //contiene los ID de todos los artículos asociados a los top 200 (esto ya que no necesariamente podrian ser 200,
  // eso depende de la API actual)
  public allArticlesID: number[];
  
  //contiene los ID de los artículos de la página actual
  public articlesID: number[];

  //marca para definir que el listado de articulos de la página actual están cargados correctamente
  public isReady: boolean;

  //marca para definir un problema con la carga de datos del listado de articulos de la página actual
  //marca para definir un problema con la carga de datos del listado de articulos de la página actual

  public flagError!: boolean;

  //contador usado por el método changeIsLoading() para monitorear el estado de los hijos (articulo del listado)
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

  /**
   * Método para obtener el estado de los items del listado de artículos:
   *  Si todos llegan a ser exitosos, se muestran al usuario y se oculta el icono de loading
   *  En caso contrario se muestra un mensaje de error.
   * @param event - contiene la respuesta de uno de los artículos (1 - exitoso / 2 - error).
   */
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

  /**
   * Método para realizar la actualización de la lista de artículos en base a paginación.
   * La cantidad de elementos por página se define en la variable offset, definido en el constructor.
   * @param index - índice de la paginación requerida.
   */
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

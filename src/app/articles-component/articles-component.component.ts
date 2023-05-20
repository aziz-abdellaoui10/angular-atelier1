import { Component } from '@angular/core';
import { article } from '../core/model/article';
import { FormsModule } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {
  titre: string= "Les articles du jour"

  listeArticles : article[] = [
    {
      titre:"Le championnat du monde",
      contenu:"Le champion du monde de cette année est ",
      auteur:"Med Taher",
      date:"12/12/2005",
      categorie:"Sport"
    },
    {
      titre:"Les nouveaux parents ",
      contenu:"Les nouveaux parents ",
      auteur:"Ahmed Said",
      date:"11/11/2018",
      categorie:"Education"
    },
    {
      titre:"Comment écrire votre CV",
      contenu:"Pour réussir à décraucher un emploi ...",
      auteur:"Marie Elsa",
      date:"02/04/2017",
      categorie:"Travail"
    },
  ]

  articlesCount : number = 0;

  filteredArticles: any[] = [];
  aux: any[] = [];
  ngOnInit(){
    this.articlesCount = this.listeArticles.length;
    this.filteredArticles = this.listeArticles; 
    this.aux = this.listeArticles;
  }

  filterArticles() {
    this.filteredArticles = this.listeArticles.slice(0, this.articlesCount);
    this.listeArticles = this.filteredArticles
  }
}

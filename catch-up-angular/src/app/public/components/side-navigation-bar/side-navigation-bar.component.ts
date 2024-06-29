import {Component, OnInit} from '@angular/core';
import {Source} from "../../../news/model/source.entity";
import {Article} from "../../../news/model/article.entity";
import {NewsApiService} from "../../../news/services/news-api.service";
import {LogoApiService} from "../../../shared/services/logo-api.service";

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrl: './side-navigation-bar.component.css'
})
export class SideNavigationBarComponent implements OnInit {
  sources: Array<Source> = [];
  articles: Array<Article> = [];

  constructor(private newsApi: NewsApiService, private logoApi: LogoApiService) {
  }

  ngOnInit(): void {
    this.newsApi.getSources().subscribe((data: any) => {
      this.sources = data['sources'];
      this.sources.forEach((source: { urlToLogo: any; }) => source.urlToLogo = this.logoApi.getUrlToLogo(source));
      console.log(this.sources);
      let randomSource = this.sources[Math.floor(Math.random() * this.sources.length)];
      this.searchArticlesForSource(randomSource);
    });
  }

  searchArticlesForSource(source: any) {
    console.log(`select sounrce  is: ${source.id}`)
    this.newsApi.getArticlesBySourceId(source.id).subscribe((data: any) => {
      this.articles = data['articles'];
      this.articles.forEach((article: { source: { urlToLogo: any; url: any; }; }) => {
        article.source.urlToLogo = source.urlToLogo;
        article.source.url = source.url;
      });
      console.log(this.articles);
    });
  }

  onSourceSelected(source: any) {
    console.log(`select source is: ${source.name}`)
    this.searchArticlesForSource(source);
  }
}

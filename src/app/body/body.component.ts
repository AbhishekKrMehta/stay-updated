import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  
  constructor( private _config:ConfigService ) { 
    
    this.newsByKword('new');
    const fragment = document.createRange().createContextualFragment('<script src="//www.powr.io/powr.js?external-type=html"></script><div class="powr-weather" id="9e9bb921_1515835317"></div>');
    
    setTimeout(function(){
      document.getElementById('weatherWidget').appendChild(fragment)
    }, 1);
  }
  
  
  
  News:any=[];
  keyWord:string='false';
  newsURL:string;
  category:string='0';
  
  getNewsURL(topic:string){    
    return 'https://newsapi.org/v2/top-headlines?q='+topic+'&apiKey=820dcbc697704cd68768c646c8d7e91c';    
  }
  
  getNewsURLCategory(category:string){    
    return 'https://newsapi.org/v2/top-headlines?country=us&category='+category+'&apiKey=820dcbc697704cd68768c646c8d7e91c';
  }
  
  search(e,keyWord:string){
    if(e.keyCode === 13){
      e.preventDefault(); // Ensure it is only this code that run
      this.newsByKword(keyWord);
    }
  }
  
  newsByKword(kWord:string){
    if (kWord.length ==0) {
      alert('Please enter a keyword')    
      return false;  
    }
    this.keyWord=kWord;
    this.category='0';
    
    this.newsURL = this.getNewsURL(kWord);
    this._config.getNews(this.newsURL).subscribe(
      data=>{
        this.shorten(data['articles']);
      }
    )
  }
  
  
  newsByCategory(cat:string){
    this.keyWord='false';
    this.category=cat;
    
    this.newsURL = this.getNewsURLCategory(cat);
    this._config.getNews(this.newsURL).subscribe(
      data=>{
        this.shorten(data['articles']);
      }
    )
  }
  
  
  shorten(newsObj){
    var inp:any= document.getElementById('typedValue');
    inp.value="";
    for (let index = 0; index < newsObj.length; index++) {
      // To shorten Desc
      if (newsObj[index].description != null && newsObj[index].description.length > 205) {
        newsObj[index].description=newsObj[index].description.substring(0, 202) + "...";
      }
      // To shorten Title
      if (newsObj[index].title != null && newsObj[index].title.length > 73) {
        newsObj[index].title=newsObj[index].title.substring(0, 71) + "...";
      }
    }
    this.News=newsObj;
  }
}

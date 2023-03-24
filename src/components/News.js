import React, { Component } from "react";
import NewsItem from "./NewsItem";


export class News extends Component {
    articles = [
       
        ]
    constructor(){
        super();
        this.state = {
            articles: this.articles, 
            loading : false,
            page: 1,
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=331bfb676ef344f686827468271a1686&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults})

    }

    handlePre = async() =>{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=331bfb676ef344f686827468271a1686&page=${this.state.page - 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles : parsedData.articles
      })
    }
    handleNext = async() =>{
      if( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

      }
      else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=331bfb676ef344f686827468271a1686&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles : parsedData.articles
      })
    }
  }
  render() {
    return (
      <div className="container my-4">
        <h2>NEWS TOP HEADLINE</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-4 mb-4" key={(Math.random() * 10000000)}>
            <NewsItem  title={element.title ? element.title.slice(0,50): ""}  description={((element.description) && element.description.slice(0, 80))} imageUrl = {element?.urlToImage}
            newsUrl={element.url} />
          </div>
         })}
        
         
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlePre} className="btn btn-dark">&larr; previous </button>
        <button type="button" onClick={this.handleNext} className="btn btn-dark">next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;

import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Sppiner from './Sppiner';
import PropTypes from 'prop-types';

export class News extends Component {

static defaultProps  ={
  country : 'in',
  pageSize:6,
  category: 'general',


}
static propTypes ={
  country: PropTypes.string,
  pageSize: PropTypes.number, 
  category: PropTypes.string,
}



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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=331bfb676ef344f686827468271a1686&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles,
        totalResults : parsedData.totalResults,
        loading: false  
          })

    }

    handlePre = async() =>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=331bfb676ef344f686827468271a1686&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles : parsedData.articles,
        loading:false
      })
    }
    handleNext = async() =>{
      if(! (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=331bfb676ef344f686827468271a1686&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles : parsedData.articles,
        loading:false
      })
    }
  }
  render() {
    return (
      <div className="container my-4">
        <h2>NEWS TOP HEADLINE</h2>
        {this.state.loading && <Sppiner />}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return  <div className="col-md-4 mb-4" key={(Math.random() * 10000000)}>
            <NewsItem  title={element.title ? element.title.slice(0,50): ""}  description={((element.description) && element.description.slice(0, 80))} imageUrl = {element?.urlToImage}
            newsUrl={element.url} />
          </div>
         })}
        
         
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.handlePre} className="btn btn-dark">&larr; previous </button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNext} className="btn btn-dark">next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;

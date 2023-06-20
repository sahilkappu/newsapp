import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
// import React, { useState } from 'react'

export default class App extends Component {
  pageSize = 6;
  country = 'in';
  apiKey = process.env.REACT_APP_NEWS_API
state = {
  progress:0,
}
setProgress = (progress) => {
  this.setState({
    progress : progress,
  })
}

 
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route
              exact path="/business"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="business" country={this.country} category="business" />}
            />
            <Route
              exact path="/entertainment"
              element={
                <News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="entertainment" country={this.country} category="entertainment" />
              }
            />
            <Route
              exact path="/"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="general" country={this.country} category="general" />}
            />
            <Route
              exact path="/health"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="health" country={this.country} category="health" />}
            />
            <Route
              exact path="/science"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="science" country={this.country} category="science" />}
            />
            <Route
              exact path="/sports"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="sports" country={this.country} category="sports" />}
            />
            <Route
              exact path="/technology"
              element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} key="tecnology" country={this.country} category="technology" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}

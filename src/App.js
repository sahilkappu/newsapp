import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact path="/business"
              element={<News pageSize={6} key="business" country="in" category="business" />}
            />
            <Route
              exact path="/entertainment"
              element={
                <News pageSize={6} key="entertainment" country="in" category="entertainment" />
              }
            />
            <Route
              exact path="/general"
              element={<News pageSize={6} key="general" country="in" category="general" />}
            />
            <Route
              exact path="/health"
              element={<News pageSize={6} key="health" country="in" category="health" />}
            />
            <Route
              exact path="/science"
              element={<News pageSize={6} key="science" country="in" category="science" />}
            />
            <Route
              exact path="/sports"
              element={<News pageSize={6} key="sports" country="in" category="sports" />}
            />
            <Route
              exact path="/technology"
              element={<News pageSize={6} key="tecnology" country="in" category="technology" />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}

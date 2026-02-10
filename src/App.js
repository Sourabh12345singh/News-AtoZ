import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                setProgress={setProgress}
                apikey={apikey}
                key="general"
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <Main
                setProgress={setProgress}
                apikey={apikey}
                key="business"
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <Main
                setProgress={setProgress}
                apikey={apikey}
                key="entertainment"
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <Main
                setProgress={setProgress}
                apikey={apikey}
                key="health"
                country="us"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <Main
                setProgress={setProgress}
                apikey={apikey}
                key="science"
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <Main
                setProgress={setProgress}
                apikey={apikey}
                key="sports"
                country="us"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <Main
                setProgress={setProgress}
                apikey={apikey}
                key="technology"
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

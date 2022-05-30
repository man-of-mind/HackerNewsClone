import React from 'react';
import HomePage from './Components/home/home';
import { HashRouter as Router} from "react-router-dom";
import { Routes, Route, Navigate} from "react-router-dom";
import BestStories from './Components/BestStoriesPage/bestStories';
import LatestStories from './Components/latestStories';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/top-stories" />} />
        <Route path="/top-stories" element={<HomePage />} />
        <Route path='/best-stories/' element={<BestStories />} />
        <Route path='/latest-stories/' element={<LatestStories />} /> 
      </Routes>
    </Router>
  );
}

export default App;

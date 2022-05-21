import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom"
import { Footer } from '../components/layouts/Footer';
import HeaderResponsive from '../components/layouts/Header';
import Home from './Home';
import MovieItem from './MovieItem';


//
function App() {

  return (


    <Router>
      <HeaderResponsive />

      <Routes>
        <Route  path="/" element={<Home />}/>
          
        <Route path="/movie" element={<MovieItem/>} />
        
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import Instagram from './components/Instagram'


import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Reviews/>
        <Instagram/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;

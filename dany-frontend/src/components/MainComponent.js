import React, { Component } from 'react';
import Header from './HeaderComponent'
import Home from './HomeComponent'
import Footer from './FooterComponent'

class Main extends Component{

  constructor(props){
    super(props);
    
  }

  render(){
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  };
}

export default Main;
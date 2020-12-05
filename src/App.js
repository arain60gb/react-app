import React from 'react'
import Header from './component/header'
import Counetr from './component/wordcounter'
import Best from './component/antds'
import CountText from './component/textarea'
import Footer from './component/footers'
import MyComponent from './component/counter'
import './App.css';


function App() {
  return (
    <div className="container">
      <Header />
      <div className="container ">
      <Counetr />
      </div>
      <div className="ant">
      <Best />
      </div>
      <div className="container mt-5">
        <CountText />
      </div>
      <div className="container">
        <Footer />
      </div>
      <MyComponent />
    </div>
  )
}

export default App;

import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '고기 맛집';
  return (
    <body>
    <div className="App">
      <div className="black-nav">
        <div>한성 Blog</div>
      </div>
      <div className="list">
        <h3> { posts } </h3>
        <p>3월 22일</p>
        <hr/>
      </div>
    </div>
    </body>
  );
}

export default App;

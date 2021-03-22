import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, changeTitle] = useState(['남자 코트 추천', '고기 맛집', '모바일 게임 추천']);

  return (
    <body>
    <div className="App">
      <div className="black-nav">
        <div>Blog</div>
      </div>
      <div className="list">
        <h3> { title[0] } </h3>
        <p>3월 22일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>3월 23일</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>3월 24일</p>
        <hr/>
      </div>
    </div>
    </body>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  // 요청받은 정보를 담아줄 변수 선언
  const [ testStr, setTestStr ] = useState('');

  // 변수 초기화
  function callback(str) {
    setTestStr(str);
  }

  // 첫 번째 렌더링을 마친 후 실행
  useEffect(
      () => {
        axios({
          url: '/test/aaa',
          method: 'GET'
        }).then((res) => {
          callback(res.data);
        })
      }, []
  );

  const list = ['a','b','c'].map((alpha,idx)=>
      <li key={idx}>{alpha}</li>
  )

  return (
      <div className="App">
        <header className="App-header">
          {testStr}
          <ul>
            {list}
          </ul>
        </header>
      </div>
  );
}

export default App;
/* eslint-disable*/
import React, { useState } from "react";
import "./App.css";

// state는 변수 대신 쓰는 데이터 저장공간.
// useState()를 이용해서 생성, useState === [els, func]
// str, num, array, object 모두 저장가능.

// 변수 대신 사용하는 이유: 웹이 App처럼 동작하게 만드려고,
// state는 변경되면 HTML이 자동으로 재 렌더링이 된다.

// state를 변경하기 위해선 변경함수를 사용, state는 깊은복사를 이용해서 변경
function App() {
  let [listName, changeListName] = useState([
    "남자 코트 추천",
    "강남 고기 맛집",
    "졸릴때 듣는 노래",
    "Zzinsole KIM Is Dancer",
  ]);
  const date = new Date().toLocaleString();

  const BlogLists = ({ list }) => {
    const [likeBtn, setLikeBtn] = useState(0);

    return (
      <>
        <h3>
          {list}
          <span
            onClick={() => {
              setLikeBtn(likeBtn + 1);
            }}
          >
            👍
          </span>
          {likeBtn}
        </h3>
        <p>{date}</p>
        <hr />
      </>
    );
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>Blog</div>
      </div>
      <div className="list">
        {listName.map((name, index) => (
          <BlogLists key={index} list={name} />
        ))}
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

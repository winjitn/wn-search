import React, { useState, useEffect } from "react";
import axios from "axios";

import Cards from "./Cards";

import "./App.css";

const renderCardList = (list, setKeyword) => {
  let cardList = [];
  list.forEach((item) =>
    cardList.push(<Cards item={item} setKeyword={setKeyword} key={item.eid} />)
  );
  return cardList;
};

function App() {
  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/${keyword}`);
        setList(res.data);
      } catch (err) {
        setList([]);
      }
    })();
  }, [keyword]);

  return (
    <div className="ui container">
      <div className="ctn-wrapper">
        <h1 className="header">เที่ยวไหนดี</h1>
        <input
          className="searchbar"
          type="text"
          value={keyword}
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          onInput={(e) => setKeyword(e.target.value)}
        />
        {renderCardList(list, setKeyword)}
      </div>
    </div>
  );
}

export default App;

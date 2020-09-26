import React, { useState, useEffect } from 'react';
import MenuAppBar from './components/MenuAppBar.jsx';
import highlight from './utility/highlight.js';
import Alice from '../read/Alice.js';

function App(props){
  let [page, setPage] = useState('');


  useEffect( () => {
    //look up regex solution for compatability -- TO DO
    let paragraphs = Alice.split('\n\n');
    //would want to return as sorted array with offset values --TO DO
    let replace = [[10,19], [30,50], [60,100]];
    setPage(paragraphs.map((para, idx) => {
      if(idx === 0) {
        return (
        <p>
          {replace.map((ele, idx) => {
            if(idx === 0) {
              if(ele[0] !== 0){
                return (
                  <>
                    {para.substring(0, ele[0])}
                    <b>{para.substring(ele[0], ele[1])}</b>
                  </>
                )
              } else {
                return(
                  <b>
                    {para.substring(ele[0], ele[1])}
                  </b>
                )
              }
            } else if(idx === replace.length - 1){
              if(ele[0] <= replace[idx - 1][1]){
                let start = Math.max(ele[0], replace[idx - 1][1])
                return (
                  <>
                    <b>
                      {para.substring(start, ele[1])}
                    </b>
                    {para.substring(ele[1])}
                  </>
                )
              } else {
                return (
                  <>
                    {para.substring(replace[idx - 1][1], ele[0])}
                    <b>
                      {para.substring(ele[0], ele[1])}
                    </b>
                    {para.substring(ele[1])}
                  </>
                )
              }
            } else {
              //could also collapse the replace so no overlapping highlights --TO DO
              if(ele[0] <= replace[idx - 1][1]){
                let start = Math.max(ele[0], replace[idx -1][1])
                return (
                  <b>
                    {para.substring(start, ele[1])}
                  </b>
                )
              } else {
                return (
                  <>
                    {para.substring(replace[idx - 1][1], ele[0])}
                    <b>
                      {para.substring(ele[0], ele[1])}
                    </b>
                  </>
                )
              }
            }
          })}
        </p>
        )
      } else {
        return <p key={idx}>{para}</p>
      }
    }));
}, []);

  const selectText = (e) => {
    e.preventDefault();
    let select = window.getSelection();
    console.log(select);
  }

  return (
    <div>
      <MenuAppBar />
      <div onClick={selectText}>
      {page}
      </div>
    </div>
  )
}

export default App;
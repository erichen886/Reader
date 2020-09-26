import React from 'react';

export default function highlight (para, idx){
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
}
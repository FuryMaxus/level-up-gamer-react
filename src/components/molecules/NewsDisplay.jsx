import React from 'react'

export default function NewsDisplay(props) {
  const {keyValue,imgUrl,title,body} = props;
  return (
    <article className="news-item"> 
        <div className="news-img" style={{backgroundImage: `url(${imgUrl})`}}></div>
        <h2>{title}</h2>
        <p>{body}</p>
      </article>
  )
}

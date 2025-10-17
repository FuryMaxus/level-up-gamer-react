import React from 'react'
import '../../styles/News.css'
import NewsDisplay from '../molecules/NewsDisplay'
import { NewsData } from '../../data/NewsData';
export default function News() {

  const news = NewsData;

  return (
    <main id='news-main'>
      <h1>Noticias del Mundo Gamer</h1>
      <div className="news-grid">
      {news.map((n) => (
        <NewsDisplay
          key={n.id}
          title={n.title}
          body={n.body}
          imgUrl={n.imgUrl}
        />
      ))}
    </div>
    </main>
  )
}

import React from 'react'
import StarRating from '../atoms/StarRating';
import Button from '../atoms/Button';

export default function ProductReview(props) {

  const {name,date,title,body,stars} = props;


  return (
    <>
    <div className="user-review-container">
      <h4>{name}</h4>
      <div>
          <StarRating rating={stars}/>
          <p>{date}</p>
      </div>
      <h3>{title}</h3>
      <p>
        {body}
      </p>
    </div>
    <Button text = 'Denunciar'/>
    <hr/>
    </>
  )
}

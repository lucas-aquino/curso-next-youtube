'use client'

import { useState } from "react"


export function LikeButton() {

  const [ liked, setLiked ] = useState(false)

  return(
    <button onClick={() => setLiked(!liked)} className='btn btn-dark fs-2 m-3'>
      {liked ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
    </button>
  )
}
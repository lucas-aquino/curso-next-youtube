
import { LikeButton } from "../../LikeButton"
import Link from 'next/link'

const fetchComments = async (id) => {
  await new Promise(res => setTimeout(res, 10000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
    next: {
      revalidate: 10
    }
  })
    .then(res => res.json())
}

export default async function CommentsPage({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <section>
      {comments.map(comment => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </section>
  )
}



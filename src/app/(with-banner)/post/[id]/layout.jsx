import { LikeButton } from "../LikeButton"
import Link from 'next/link'

const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
    next: {
      revalidate: 10
    }
  })
    .then(res => res.json())
}   

export default async function PostPage({ children, params }){
  const { id } = params
  const post = await fetchPost(id)

  return (  
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton id={post.id}></LikeButton>
      <Link href={`/post/${id}/comments`}>Ver comentarios</Link>
      {children}
    </section>
  )
}



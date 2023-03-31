import { LikeButton } from "./LikeButton"
import Link from 'next/link'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { 
    next: {
      revalidate: 10
    }
  })
    .then(res => res.json())
}   

export async function PostsList(){

  const posts = await fetchPosts()

  return posts.slice(0, 10).map(post => (
    <article key={post.id}>
      <Link href={`/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
      <LikeButton id={post.id}></LikeButton>
    </article>
  ))
}



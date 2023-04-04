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
    <article key={post.id} className='col'>
      <div className='card h-100 shadow-sm border border-0 p-2'>
        <div className='card-body'>
          <Link href={`/post/${post.id}`} className='text-decoration-none text-body'>
            <h2 className='card-title'>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </div>
        <LikeButton id={post.id}></LikeButton>
      </div>
    </article>
  ))
}



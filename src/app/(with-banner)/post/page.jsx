import { PostsList } from "./PostsList";

export default async function PostsPage() {
  return (
    <section className='py-4'>
      <h1>Post</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4 py-4'>
        <PostsList></PostsList>
      </div>
    </section>
  )
}
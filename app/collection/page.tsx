import { getCardPosts } from '@/app/_libs/microcms';
import { Bottle } from '@/app/_components/animation/Bottle';
import css from '@/app/css/Collection.module.css';

export default async function Home() {
  const posts = await getCardPosts();

  return (
    <>
      <h1>Messages received so far</h1>
      <p>これまでに届いたメッセージです</p>
      <div className={`${css.bottle}`}><Bottle /></div>
      <ul className={`${css.list}`}>
        {posts.map((post) => (
          <li key={post.id}>
          <article className={`${css.message_wrap}`}>
          <h2 className={`${css.head}`}>Dear...</h2>
            <div className={`${css.message}`}>
              {post.message || 'メッセージはありません'}
            </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
